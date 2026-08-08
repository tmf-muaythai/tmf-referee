/* ==========================================================================
   sim-engine.js — Ortak sesli-simülasyon motoru (Faz 2 dedup).
   sim_kayit.js ve sim_day2.js buradaki tek motoru kullanır. Her dosya kendi
   verisini ve menüsünü tutar; sahne ekranını bir "context" (E) nesnesiyle
   bu motora devreder. Motorun HTML çıktısı sim_kayit'in orijinaliyle birebir
   aynıdır. sim_kayit.js ve sim_day2.js'ten ÖNCE yüklenir.

   Context (E) arayüzü:
     E.sceneIdx / E.stepIdx / E.hintIdx / E.subtitle   (get/set — dosyanın state'i)
     E.getScenes()            -> aktif sahne dizisi
     E.markCompleted(scene)   -> tamamlanma kaydını işaretle
     E.headerLabel()          -> sağ üstteki başlık (kategori/breadcrumb)
     E.completeTitle()        -> tamamlandı ekranı başlığı
     E.backCall / E.backLabel -> geri butonu onclick çağrısı + etiketi
     E.completeBackCall / E.completeBackLabel
     E.restartCall            -> "Tekrar/Sıfırla" çağrısı (confirm'süz)
     E.playCall / E.speakCall / E.toggleCall / E.nextCall / E.nextHintCall
     E.dictionary             -> konuşma tanıma düzeltmeleri
   ========================================================================== */

// ─── PROFESYONEL KONUŞMACI İKONLARI (SVG) — her iki modül ortak ───
const SIM_SPEAKER_META = {
  narrator: {
    icon: `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`,
    label: "Narrator"
  },
  representative: {
    icon: `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    label: "Team Representative"
  },
  jury: {
    icon: `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    label: "Jury"
  },
  athlete: {
    icon: `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13a3 3 0 0 1 3-3h1.5a2.5 2.5 0 0 1 2.5 2.5V14"></path><path d="M9 10V8a2 2 0 0 1 4 0v2"></path><path d="M12 12h2a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1"></path><path d="M5 13v3a3 3 0 0 0 3 3h1"></path><line x1="13" y1="19" x2="20" y2="19"></line></svg>`,
    label: "Athlete"
  },
  user: {
    icon: `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>`,
    label: "You (Referee)"
  }
};

const SimEngine = {

  // ─── SAHNE EKRANI ───────────────────────────────────────────────
  renderScene(E) {
    const c = document.getElementById("content");
    const scenes = E.getScenes();
    const scene = scenes[E.sceneIdx];

    if (!scene) {
      // İçerik henüz yok — bilgilendirme ekranı
      c.innerHTML = `
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
        <button onclick="${E.backCall}" style="
          background:none; border:none; font-size:11px; color:#185FA5;
          cursor:pointer; font-weight:600; padding:0;
        ">${E.backLabel}</button>
      </div>
      <div class="empty-msg">${(typeof t==='function')?t('simComingSoon'):"Bu bölümün içeriği yakında eklenecek. 🔜"}</div>
    `;
      return;
    }

    const step = scene.steps[E.stepIdx];
    const isLast = E.sceneIdx === scenes.length - 1;
    const hasMoreSteps = E.stepIdx < scene.steps.length - 1;
    // En yakın önceki sesli adımın audioId'si (konuşma adımında "Tekrar Dinle" için)
    let prevAudioId = "";
    for (let i = E.stepIdx - 1; i >= 0; i--) { if (scene.steps[i] && scene.steps[i].audioId) { prevAudioId = scene.steps[i].audioId; break; } }
    const canGoPrev = (E.stepIdx > 0) || (E.sceneIdx > 0);
    const totalScenes = scenes.length;
    const meta = SIM_SPEAKER_META[step.speaker] || SIM_SPEAKER_META.narrator;

    // ── Segment ilerleme çizgisi: her sahne için bir nokta ──
    const segmentsHtml = scenes.map((s, i) => {
      let state = "upcoming"; // gri/nötr
      if (i === E.sceneIdx) state = "current";       // yeşil
      else if (i < E.sceneIdx) state = "done";        // tamamlandı — gri ama dolu

      const bg = state === "current" ? "#3B6D11"
               : state === "done"    ? "#9aa8b8"
               : "var(--border)";
      const labelColor = state === "current" ? "#185FA5" : "var(--text2)";

      return `
      <div style="display:flex; flex-direction:column; align-items:center; flex:1; min-width:0;">
        <div style="
          width:100%; height:6px; border-radius:4px;
          background:${bg};
          transition:background .3s;
        "></div>
        <div style="font-size:8px; color:${labelColor}; margin-top:3px; font-weight:${state === 'current' ? '700' : '500'};">
          ${i + 1}
        </div>
      </div>
    `;
    }).join("");

    c.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
      <button onclick="${E.backCall}" style="
        background:none; border:none; font-size:11px; color:#185FA5;
        cursor:pointer; font-weight:600; padding:0;
      ">${E.backLabel}</button>
      <div style="font-size:11px; color:#888; text-align:right;">
        ${(typeof icon==='function')?icon('mic',{size:'0.95em'}):''} ${E.headerLabel()}
      </div>
    </div>

    <!-- Sahne başlığı + Sıfırla butonu -->
    <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; margin-bottom:8px;">
      <div style="font-size:12px; font-weight:600; color:var(--text); display:flex; align-items:baseline; gap:6px; min-width:0; flex:1 1 auto;">
        <span style="flex:0 0 auto; white-space:nowrap;">${(typeof t==='function')?t('bScenario'):"Senaryo"} ${E.sceneIdx + 1} <span style="color:var(--text2); font-weight:400;">/ ${totalScenes}</span> ·</span>
        <span style="flex:1 1 auto; min-width:0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; color:var(--text2); font-weight:400;">${(typeof simTitle==='function')?simTitle(scene.title):scene.title}</span>
      </div>
      <button onclick="if(confirm('${(typeof t==='function')?t('bResetConfirm'):"Bu bölümü baştan başlatmak istediğinize emin misiniz?"}')) ${E.restartCall};" style="
        background:var(--surface-2); color:var(--text2); border:1px solid var(--border); cursor:pointer;
        border-radius:20px; padding:4px 10px; font-size:11px; font-weight:600;
        flex-shrink:0; display:inline-flex; align-items:center; gap:4px;
      ">${(typeof icon==='function')?icon('rotateCcw',{size:'0.95em'}):''} ${(typeof t==='function')?t('bReset'):"Sıfırla"}</button>
    </div>

    <!-- Segment ilerleme çizgisi -->
    <div style="display:flex; gap:4px; margin-bottom:16px;">
      ${segmentsHtml}
    </div>

    <!-- Sahne kartı -->
    <div id="sim-card" style="background:var(--card-bg); border:1px solid var(--border); border-radius:14px; overflow:hidden; margin-bottom:12px;">

      <!-- Üst: konuşmacı -->
      <div style="padding:20px 20px 16px; text-align:center; border-bottom:1px solid var(--border); background:var(--l3-bg);">
        <div style="font-size:40px; line-height:1; margin-bottom:8px; color:#185FA5; display:flex; justify-content:center;">${meta.icon}</div>
        <div style="font-size:12px; font-weight:600; color:#185FA5; text-transform:uppercase; letter-spacing:.5px;">${meta.label}</div>
      </div>

      <!-- Orta: aksiyon -->
      <div style="padding:24px 20px;">

        ${step.speaker !== "user" ? `
          <!-- Dinleme aşaması -->
          <div style="text-align:center;">
            <button id="sim-play-btn" onclick="${E.playCall}" style="
              display:inline-flex; align-items:center; gap:8px;
              padding:12px 28px; font-size:14px; font-weight:600;
              background:#185FA5; color:#fff; border:none;
              border-radius:24px; cursor:pointer; margin-bottom:16px;
            ">${(typeof icon==='function')?icon('play'):''} ${(typeof t==='function')?t('simListen'):"Dinle"}</button>

            <div id="sim-subtitle-wrap" style="margin-top:4px;">
              <div id="sim-subtitle-text" style="
                display:none;
                background:var(--l3-bg); border:1px solid var(--border);
                border-radius:8px; padding:10px 14px;
                font-size:13px; color:var(--text); line-height:1.5;
                margin-bottom:8px;
              ">${step.subtitle || ""}</div>
              <button onclick="${E.toggleCall}" style="
                background:none; border:none; font-size:11px;
                color:#888; cursor:pointer; text-decoration:underline;
              ">${(typeof icon==='function')?icon(E.subtitle?'eyeOff':'eye'):''} ${(typeof t==='function')?t('simSubToggle'):"Alt yazıyı"} ${E.subtitle ? ((typeof t==='function')?t('simSubHide'):"gizle") : ((typeof t==='function')?t('simSubShow'):"göster")}</button>
            </div>
          </div>
        ` : `
          <!-- Konuşma aşaması -->
          <div style="text-align:center;">
            <div style="font-size:12px; color:var(--text2); margin-bottom:16px; line-height:1.6;">
              ${(typeof t==='function')?t('simMicPrompt'):"Mikrofona basıp ne söylemen gerektiğini söyle."}
            </div>

            <button id="sim-mic-btn" onclick="${E.speakCall}" style="
              width:80px; height:80px; border-radius:50%;
              background:#185FA5; color:#fff; border:none;
              font-size:28px; cursor:pointer;
              display:flex; align-items:center; justify-content:center;
              margin:0 auto 16px; transition:all .2s;
            ">${(typeof icon==='function')?icon('mic',{size:'26px'}):''}</button>

            <div id="sim-wave" style="display:none; justify-content:center; align-items:center; gap:3px; height:24px; margin-bottom:8px;">
              ${[0,1,2,3,4].map(i => `
                <div style="
                  width:4px; background:#185FA5; border-radius:2px;
                  animation:simWave .6s ease-in-out ${i * 0.1}s infinite alternate;
                  height:${8 + i * 4}px;
                "></div>
              `).join("")}
            </div>

            <div id="sim-listening-label" style="display:none; font-size:12px; color:#A32D2D; font-weight:600;">
              ${(typeof icon==='function')?icon('dot',{fill:true,size:'0.7em'}):''} ${(typeof t==='function')?t('sListening'):"Dinleniyor..."}
            </div>

            ${prevAudioId ? `
            <div style="margin-top:14px;">
              <button onclick="SimEngine.replayAudio('${prevAudioId}', this)" style="
                display:inline-flex; align-items:center; gap:6px;
                padding:8px 18px; font-size:12px; font-weight:600;
                background:var(--card-bg); color:#185FA5; border:1px solid #185FA5;
                border-radius:22px; cursor:pointer;
              ">${(typeof icon==='function')?icon('play'):''} ${(typeof t==='function')?t('simListenAgain'):"Tekrar Dinle"}</button>
            </div>` : ""}

            <div id="sim-result-area" style="margin-top:8px; min-height:20px;"></div>

            <!-- İpucu -->
            <div id="sim-hint-area" style="margin-top:12px;"></div>
          </div>
        `}
      </div>
    </div>

    <!-- Alt navigasyon: önceki / sonraki -->
    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
      ${canGoPrev ? `<button onclick="${E.prevCall}" style="
        padding:10px 18px; font-size:13px; font-weight:600;
        background:none; color:#185FA5; border:1px solid var(--border);
        border-radius:22px; cursor:pointer;
      ">${(typeof t==='function')?t('simPrev'):"← Önceki"}</button>` : `<span></span>`}
      <button id="sim-next-btn" onclick="${E.nextCall}" style="
        display:none;
        padding:10px 20px; font-size:13px; font-weight:600;
        background:#185FA5; color:#fff; border:none;
        border-radius:22px; cursor:pointer;
      ">${hasMoreSteps ? ((typeof t==='function')?t('simContinue'):"Devam →") : (isLast ? ((typeof t==='function')?t('bComplete'):"✓ Bölümü Tamamla") : ((typeof t==='function')?t('simNextScene'):"Sonraki Sahne →"))}</button>
    </div>

    <style>
      @keyframes simWave {
        from { transform: scaleY(1); }
        to   { transform: scaleY(2.2); }
      }
    </style>
  `;

    // Alt yazı durumunu koru
    if (E.subtitle && step.speaker !== "user") {
      const el = document.getElementById("sim-subtitle-text");
      if (el) el.style.display = "block";
    }
  },

  // ─── OYNAT ───────────────────────────────────────────────────────
  play(E) {
    const scene = E.getScenes()[E.sceneIdx];
    const step  = scene.steps[E.stepIdx];
    if (!step.audioId) return;

    const btn = document.getElementById("sim-play-btn");
    if (btn) {
      btn.innerHTML = (((typeof icon==='function')?icon('pause'):'')) + ' ' + ((typeof t==='function')?t('simPlaying'):"Çalıyor...");
      btn.disabled = true;
    }

    const nextStep = scene.steps[E.stepIdx + 1];
    const audio = new Audio(`assets/audio/${step.audioId}.mp3`);
    audio.play().catch(e => console.warn("Ses oynatılamadı:", e));

    // Ses bitince sonraki adıma geç
    audio.onended = function() {
      if (btn) {
        btn.innerHTML = (((typeof icon==='function')?icon('play'):'')) + ' ' + ((typeof t==='function')?t('simListenAgain'):"Tekrar Dinle");
        btn.disabled = false;
      }

      if (!nextStep) return;

      // Kısa bir nefes molası (500ms) ver, sonra geç
      setTimeout(() => {
        E.stepIdx++;
        E.hintIdx = 0;
        SimEngine.renderScene(E);
      }, 500);
    };

    // Hata durumunda butonu serbest bırak — ses yoksa akış tıkanmasın, yine de ilerle
    audio.onerror = function() {
      if (btn) {
        btn.innerHTML = (((typeof icon==='function')?icon('play'):'')) + ' ' + ((typeof t==='function')?t('simListenAgain'):"Tekrar Dinle");
        btn.disabled = false;
      }
      if (!nextStep) return;
      setTimeout(() => {
        E.stepIdx++;
        E.hintIdx = 0;
        SimEngine.renderScene(E);
      }, 400);
    };
  },

  // ─── TEKRAR DİNLE (belirli bir audioId'yi ilerlemeden çalar) ──────
  replayAudio(audioId, btn) {
    if (!audioId) return;
    const audio = new Audio(`assets/audio/${audioId}.mp3`);
    const reset = () => {
      if (btn) { btn.disabled = false; btn.innerHTML = (((typeof icon==='function')?icon('play'):'')) + ' ' + ((typeof t==='function')?t('simListenAgain'):"Tekrar Dinle"); }
    };
    if (btn) { btn.disabled = true; btn.innerHTML = (((typeof icon==='function')?icon('pause'):'')) + ' ' + ((typeof t==='function')?t('simPlaying'):"Çalıyor..."); }
    audio.play().catch(reset);
    audio.onended = reset;
    audio.onerror = reset;
  },

  // ─── ÖNCEKİ: bir adım/sahne geri ─────────────────────────────────
  prev(E) {
    if (E.stepIdx > 0) { E.stepIdx--; E.hintIdx = 0; }
    else if (E.sceneIdx > 0) { E.sceneIdx--; E.stepIdx = 0; E.hintIdx = 0; }
    else return;
    E.subtitle = false;
    SimEngine.renderScene(E);
  },

  // ─── ALT YAZI ────────────────────────────────────────────────────
  toggleSubtitle(E) {
    E.subtitle = !E.subtitle;
    const el = document.getElementById("sim-subtitle-text");
    const btn = el && el.nextElementSibling;
    if (el) el.style.display = E.subtitle ? "block" : "none";
    if (btn) btn.innerHTML = `${(typeof icon==='function')?icon(E.subtitle?'eyeOff':'eye'):''} ${(typeof t==='function')?t('simSubToggle'):"Alt yazıyı"} ${E.subtitle ? ((typeof t==='function')?t('simSubHide'):"gizle") : ((typeof t==='function')?t('simSubShow'):"göster")}`;
  },

  // ─── KONUŞ ───────────────────────────────────────────────────────
  speak(E) {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      document.getElementById("sim-result-area").innerHTML =
        '<span style="color:#A32D2D; font-size:12px;">'+((typeof t==='function')?t('sNoMic'):"⚠ Tarayıcın mikrofonu desteklemiyor.")+'</span>';
      return;
    }

    const scene = E.getScenes()[E.sceneIdx];
    const step  = scene.steps[E.stepIdx];

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SR();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    const micBtn   = document.getElementById("sim-mic-btn");
    const wave     = document.getElementById("sim-wave");
    const label    = document.getElementById("sim-listening-label");
    const resultEl = document.getElementById("sim-result-area");

    micBtn.style.background = "#A32D2D";
    micBtn.innerHTML = ((typeof icon==='function')?icon('mic',{size:'26px'}):'');
    if (wave)  wave.style.display  = "flex";
    if (label) label.style.display = "block";
    resultEl.innerHTML = "";

    recognition.start();

    recognition.onresult = function(e) {
      let said = e.results[0][0].transcript.toLowerCase().trim();

      // Tarayıcı tanıma düzeltmeleri (modüle özel sözlük)
      const dictionary = E.dictionary || {};
      Object.keys(dictionary).forEach(key => {
        if (said.includes(key)) said = said.replace(key, dictionary[key]);
      });

      micBtn.style.background = "#185FA5";
      micBtn.innerHTML = ((typeof icon==='function')?icon('mic',{size:'26px'}):'');
      if (wave)  wave.style.display  = "none";
      if (label) label.style.display = "none";

      resultEl.innerHTML = `<div style="font-size:11px; color:var(--text2); margin-bottom:6px;">${(typeof t==='function')?t('sYouSaid'):"Söylediğin:"} "<em>${said}</em>"</div>`;

      const correct = SimEngine.checkAnswer(said, step.accepted);

      if (correct) {
        SimEngine.showSuccess(E);
      } else {
        SimEngine.showHint(E, step.hints);
      }
    };

    recognition.onerror = function(ev) {
      micBtn.style.background = "#185FA5";
      micBtn.innerHTML = ((typeof icon==='function')?icon('mic',{size:'26px'}):'');
      if (wave)  wave.style.display  = "none";
      if (label) label.style.display = "none";
      resultEl.innerHTML = `<span style="font-size:11px; color:#A32D2D;">${(typeof t==='function')?t('sError'):"⚠ Hata: "}${ev.error}</span>`;
    };

    recognition.onend = function() {
      micBtn.style.background = "#185FA5";
      micBtn.innerHTML = ((typeof icon==='function')?icon('mic',{size:'26px'}):'');
      if (wave)  wave.style.display  = "none";
      if (label) label.style.display = "none";
    };
  },

  // ─── CEVAP KONTROLÜ (saf fonksiyon — iki modülde birebir aynıydı) ──
  checkAnswer(said, acceptedList) {
    const clean = said.replace(/[^a-z0-9\s]/g, "").trim();

    for (const accepted of acceptedList) {
      const cleanAccepted = accepted.replace(/[^a-z0-9\s]/g, "").trim();

      // Tam eşleşme
      if (clean === cleanAccepted) return true;

      // Anahtar kelime eşleşmesi — accepted'daki 3+ harfli kelimelerin %70'i bulunuyorsa kabul et
      const keywords = cleanAccepted.split(" ").filter(w => w.length >= 3);
      if (keywords.length === 0) continue;
      const matched = keywords.filter(w => clean.includes(w));
      if (matched.length / keywords.length >= 0.7) return true;
    }
    return false;
  },

  // ─── BAŞARI ──────────────────────────────────────────────────────
  showSuccess(E) {
    const scene = E.getScenes()[E.sceneIdx];
    E.markCompleted(scene);

    const card = document.getElementById("sim-card");
    const resultEl = document.getElementById("sim-result-area");
    const nextBtn = document.getElementById("sim-next-btn");
    const hintArea = document.getElementById("sim-hint-area");

    if (hintArea) hintArea.innerHTML = "";

    if (resultEl) {
      resultEl.innerHTML += `
      <div style="
        background:#EAF3DE; border:1px solid #3B6D11;
        border-radius:10px; padding:12px 14px;
        font-size:13px; color:#27500A; font-weight:600;
        animation: simFlash .4s ease;
      ">${(typeof t==='function')?t('simSuccess'):"✓ Harika! Doğru yönetildi."}</div>
    `;
    }

    // Kart kenarlığını yeşil yap
    if (card) {
      card.style.borderColor = "#3B6D11";
      card.style.boxShadow = "0 0 0 3px rgba(59,109,17,0.15)";
    }

    if (nextBtn) nextBtn.style.display = "inline-block";

    // @keyframes simFlash için
    if (!document.getElementById("sim-flash-style")) {
      const s = document.createElement("style");
      s.id = "sim-flash-style";
      s.textContent = `
      @keyframes simFlash {
        0%   { background: #b8f0a0; }
        100% { background: #EAF3DE; }
      }
    `;
      document.head.appendChild(s);
    }
  },

  // ─── İPUCU ───────────────────────────────────────────────────────
  showHint(E, hints) {
    const hintArea = document.getElementById("sim-hint-area");
    const card     = document.getElementById("sim-card");
    const resultEl = document.getElementById("sim-result-area");

    if (resultEl) {
      resultEl.innerHTML += `
      <div style="
        background:#FCEBEB; border:1px solid #A32D2D;
        border-radius:10px; padding:10px 14px;
        font-size:12px; color:#791F1F; margin-bottom:8px;
      ">${(typeof t==='function')?t('simTryAgain'):"✗ Tekrar dene."}</div>
    `;
    }

    if (card) {
      card.style.borderColor = "#e0c040";
      card.style.boxShadow = "0 0 0 3px rgba(186,117,23,0.15)";
    }

    const hint = hints[Math.min(E.hintIdx, hints.length - 1)];
    const isLastHint = E.hintIdx >= hints.length - 1;

    if (hintArea) {
      hintArea.innerHTML = `
      <div style="
        background:#fff8e1; border-left:3px solid #ffc107;
        border-radius:6px; padding:10px 12px;
        font-size:12px; color:#856404; line-height:1.6;
      ">
        <b>${(typeof icon==='function')?icon('bulb'):''} ${(typeof t==='function')?t('simHintLabel'):"İpucu"} ${E.hintIdx + 1}:</b> ${(typeof simHint==='function')?simHint(hint):hint}
        ${isLastHint ? "" : `
          <div style="margin-top:8px;">
            <button onclick="${E.nextHintCall}" style="
              background:none; border:none; font-size:11px;
              color:#185FA5; cursor:pointer; text-decoration:underline;
            ">${(typeof t==='function')?t('simNextHint'):"Bir sonraki ipucunu göster"}</button>
          </div>
        `}
      </div>
    `;
    }

    E.hintIdx++;
  },

  // ─── SONRAKİ İPUCU ───────────────────────────────────────────────
  nextHint(E) {
    const scene = E.getScenes()[E.sceneIdx];
    const step  = scene.steps[E.stepIdx];
    SimEngine.showHint(E, step.hints);
  },

  // ─── İLERLE: sahnede başka adım varsa ona, yoksa sonraki sahneye ──
  advance(E) {
    const scene = E.getScenes()[E.sceneIdx];
    if (scene && E.stepIdx < scene.steps.length - 1) {
      E.stepIdx++;
      E.hintIdx = 0;
      SimEngine.renderScene(E);
    } else {
      SimEngine.nextScene(E);
    }
  },

  // ─── SONRAKİ SAHNE ───────────────────────────────────────────────
  nextScene(E) {
    const scenes = E.getScenes();
    if (E.sceneIdx < scenes.length - 1) {
      E.sceneIdx++;
      E.stepIdx  = 0;
      E.hintIdx  = 0;
      E.subtitle = false;
      SimEngine.renderScene(E);
    } else {
      SimEngine.showComplete(E);
    }
  },

  // ─── BÖLÜM TAMAMLANDI ─────────────────────────────────────────────
  showComplete(E) {
    const scenes = E.getScenes();
    const c = document.getElementById("content");
    c.innerHTML = `
    <div style="
      text-align:center; padding:3rem 1rem;
      background:var(--card-bg); border:1px solid var(--border);
      border-radius:14px;
    ">
      <div style="color:var(--gold);margin-bottom:12px;">${(typeof icon==='function')?icon('trophy',{size:'48px'}):''}</div>
      <div style="font-size:20px; font-weight:700; color:#185FA5; margin-bottom:8px;">
        ${E.completeTitle()} ${(typeof t==='function')?t('bDoneSuffix'):"Tamamlandı!"}
      </div>
      <div style="font-size:14px; color:var(--text2); margin-bottom:24px; line-height:1.6;">
        ${(typeof t==='function')?t('simCompleteMsgPre'):"Bu bölümdeki tüm"} ${scenes.length} ${(typeof t==='function')?t('simCompleteMsgPost'):"senaryoyu başarıyla geçtin.<br>Harika bir pratik yaptın!"}
      </div>
      <div style="display:flex; gap:8px; justify-content:center;">
        <button onclick="${E.restartCall}" style="
          padding:11px 22px; font-size:13px; font-weight:600;
          background:var(--card-bg); color:#185FA5; border:1px solid #185FA5;
          border-radius:22px; cursor:pointer;
        ">${(typeof t==='function')?t('bRedo'):"↺ Tekrar Yap"}</button>
        <button onclick="${E.completeBackCall}" style="
          padding:11px 22px; font-size:13px; font-weight:600;
          background:#185FA5; color:#fff; border:none;
          border-radius:22px; cursor:pointer;
        ">${E.completeBackLabel}</button>
      </div>
    </div>
  `;
  }
};
