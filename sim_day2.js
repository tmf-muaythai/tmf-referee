// ─── SESLİ SİMÜLASYON (DAY2 / MÜSABAKA ALANI) — VERİ YAPISI ─────
// İki seviyeli yapı:
//   Seviye 1: Ana kategori (Jury, Equipment, Referee, Judge, Timekeeper, Announcer)
//   Seviye 2: Alt kategori (örn. Jury → Reporting, Communication, ...)
// Timekeeper ve Announcer'ın alt kategorisi yok — direkt sahne ekranına gider (directScenes).
//
// İçerikler ileride eklenecek; şimdilik tüm scenes / directScenes dizileri boş.
// Format, sim_kayit.js'teki sahne formatıyla birebir aynı olacak:
// { id, title, steps: [ { speaker, audioId, subtitle } veya { speaker:"user", accepted, hints } ] }

const SIM_DAY2_CATEGORIES = {
  jury: {
    label: "Jury",
    labelTr: "Jüri",
    subcategories: [
      { id: "d2_juri_rap", label: "Reporting",     labelTr: "Raporlama",        scenes: [] },
      { id: "d2_juri_diy", label: "Communication", labelTr: "Genel İletişim",   scenes: [] },
      { id: "d2_juri_gov", label: "Assignment",    labelTr: "Görevlendirme",    scenes: [] },
      { id: "d2_hakem",    label: "Referee Health",labelTr: "Hakem Sağlık",     scenes: [] },
      { id: "d2_ring",     label: "Ring",          labelTr: "Ring",             scenes: [] },
    ]
  },
  equipment: {
    label: "Equipment",
    labelTr: "Ekipman",
    subcategories: [
      { id: "d2_ekipman", label: "Equipment Check", labelTr: "Ekipman Kontrolü", scenes: [] },
      { id: "d2_kose",    label: "Second",           labelTr: "Köşe Görevlisi",  scenes: [] },
    ]
  },
  referee: {
    label: "Referee",
    labelTr: "Orta Hakem",
    subcategories: [
      { id: "d2_orta",   label: "Referee Commands", labelTr: "Komutlar", scenes: [] },
      { id: "d2_uyari",  label: "Cautions",          labelTr: "Uyarılar", scenes: [] },
      { id: "d2_ceza",   label: "Warnings",          labelTr: "Cezalar",  scenes: [] },
      { id: "d2_karar",  label: "Decisions",         labelTr: "Kararlar", scenes: [] },
      { id: "d2_doktor", label: "Doctor",            labelTr: "Doktor",   scenes: [] },
    ]
  },
  judge: {
    label: "Judge",
    labelTr: "Yan Hakem",
    subcategories: [
      { id: "d2_yan",  label: "Judge",          labelTr: "Yan Hakem", scenes: [] },
      { id: "d2_skor", label: "Scoring System", labelTr: "Skorlama",  scenes: [] },
    ]
  },
  timekeeper: {
    label: "Timekeeper",
    labelTr: "Zaman Hakemi",
    directScenes: []   // alt kategori yok — direkt sahne ekranına gider
  },
  announcer: {
    label: "Announcer",
    labelTr: "Anons Hakemi",
    directScenes: []
  }
};

// Ana kategori sırası (grid render sırası)
const SIM_DAY2_ORDER = ["jury", "equipment", "referee", "judge", "timekeeper", "announcer"];

// ─── STATE ────────────────────────────────────────────────────────
let simD2View = "main";        // "main" | "sub" | "scene"
let simD2CategoryKey = null;   // "jury", "equipment", ...
let simD2SubIdx = 0;           // alt kategori index'i (subcategories içinde)
let simD2SceneIdx = 0;
let simD2StepIdx  = 0;
let simD2HintIdx  = 0;
let simD2SubtitleVisible = false;
let simD2CompletedScenes = {}; // { "d2_juri_rap_1": true, ... } veya { "timekeeper_1": true }

// ─── ANA GİRİŞ NOKTASI ────────────────────────────────────────────
function renderSimDay2() {
  if (simD2View === "main") renderSimD2Main();
  else if (simD2View === "sub") renderSimD2Sub();
  else renderSimD2Scene();
}

// ─── YARDIMCI: aktif sahne dizisini getir ────────────────────────
function simD2GetScenes() {
  const cat = SIM_DAY2_CATEGORIES[simD2CategoryKey];
  if (cat.directScenes) return cat.directScenes;
  return cat.subcategories[simD2SubIdx].scenes;
}

function simD2GetCompletionKeyPrefix() {
  const cat = SIM_DAY2_CATEGORIES[simD2CategoryKey];
  if (cat.directScenes) return simD2CategoryKey;
  return cat.subcategories[simD2SubIdx].id;
}

// ─── SEVİYE 1: ANA 6 KUTUCUK (3x3 → aslında 3x2 ama aynı grid stiliyle) ──
function renderSimD2Main() {
  const c = document.getElementById("content");

  c.innerHTML = `
    <div style="margin-bottom:14px;">
      <div style="font-size:13px; font-weight:700; color:#185FA5; margin-bottom:2px;">
        🎙️ Sesli Simülasyon
      </div>
      <div style="font-size:11px; color:var(--text2);">
        Pratik yapmak istediğin görevi seç.
      </div>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px;">
      ${SIM_DAY2_ORDER.map(key => {
        const cat = SIM_DAY2_CATEGORIES[key];
        const isDirect = !!cat.directScenes;
        const totalScenes = isDirect ? cat.directScenes.length : cat.subcategories.reduce((s, sc) => s + sc.scenes.length, 0);
        const completedCount = isDirect
          ? cat.directScenes.filter(s => simD2CompletedScenes[`${key}_${s.id}`]).length
          : cat.subcategories.reduce((s, sc) => s + sc.scenes.filter(sn => simD2CompletedScenes[`${sc.id}_${sn.id}`]).length, 0);
        const hasContent = totalScenes > 0;
        const allDone = hasContent && completedCount === totalScenes;

        return `
        <button
          onclick="${hasContent ? `simD2OpenCategory('${key}')` : ""}"
          ${hasContent ? "" : "disabled"}
          style="
            position:relative;
            display:flex; flex-direction:column; align-items:center; justify-content:center;
            gap:4px;
            min-height:84px;
            padding:10px 6px;
            border-radius:12px;
            border:1px solid ${allDone ? "#3B6D11" : "var(--border)"};
            background:${hasContent ? (allDone ? "#EAF3DE" : "var(--card-bg)") : "var(--l3-bg)"};
            color:${hasContent ? "var(--text)" : "var(--text2)"};
            cursor:${hasContent ? "pointer" : "default"};
            opacity:${hasContent ? "1" : "0.55"};
            text-align:center;
            transition:all .15s;
          ">
          ${allDone ? `<span style="position:absolute; top:6px; right:8px; font-size:11px;">✓</span>` : ""}
          <span style="font-size:12px; font-weight:700; line-height:1.3;">${cat.label}</span>
          <span style="font-size:9.5px; color:var(--text2); line-height:1.2;">${cat.labelTr}</span>
          ${hasContent
            ? `<span style="font-size:9px; color:#185FA5; font-weight:600; margin-top:2px;">${completedCount}/${totalScenes}</span>`
            : `<span style="font-size:9px; color:var(--text2); margin-top:2px;">Yakında</span>`
          }
        </button>
      `}).join("")}
    </div>
  `;
}

// ─── ANA KATEGORİYİ AÇ ────────────────────────────────────────────
function simD2OpenCategory(key) {
  simD2CategoryKey = key;
  const cat = SIM_DAY2_CATEGORIES[key];

  if (cat.directScenes) {
    // Alt kategori yok — direkt sahne ekranına gir (Timekeeper / Announcer)
    simD2SceneIdx = 0;
    simD2StepIdx = 0;
    simD2HintIdx = 0;
    simD2SubtitleVisible = false;
    simD2View = "scene";
    renderSimD2Scene();
  } else {
    simD2SubIdx = 0;
    simD2View = "sub";
    renderSimD2Sub();
  }
}

// ─── SEVİYE 2: ALT KATEGORİ GRID'İ ────────────────────────────────
function renderSimD2Sub() {
  const c = document.getElementById("content");
  const cat = SIM_DAY2_CATEGORIES[simD2CategoryKey];
  const subs = cat.subcategories;

  c.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
      <button onclick="simD2BackToMain()" style="
        background:none; border:none; font-size:11px; color:#185FA5;
        cursor:pointer; font-weight:600; padding:0;
      ">← Görevler</button>
      <div style="font-size:11px; color:#888;">🎙️ ${cat.label}</div>
    </div>

    <div style="margin-bottom:14px;">
      <div style="font-size:13px; font-weight:700; color:#185FA5; margin-bottom:2px;">
        ${cat.label} — ${cat.labelTr}
      </div>
      <div style="font-size:11px; color:var(--text2);">
        Pratik yapmak istediğin bölümü seç.
      </div>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px;">
      ${subs.map((sub, idx) => {
        const total = sub.scenes.length;
        const completed = sub.scenes.filter(s => simD2CompletedScenes[`${sub.id}_${s.id}`]).length;
        const hasContent = total > 0;
        const allDone = hasContent && completed === total;

        return `
        <button
          onclick="${hasContent ? `simD2OpenSub(${idx})` : ""}"
          ${hasContent ? "" : "disabled"}
          style="
            position:relative;
            display:flex; flex-direction:column; align-items:center; justify-content:center;
            gap:4px;
            min-height:84px;
            padding:10px 6px;
            border-radius:12px;
            border:1px solid ${allDone ? "#3B6D11" : "var(--border)"};
            background:${hasContent ? (allDone ? "#EAF3DE" : "var(--card-bg)") : "var(--l3-bg)"};
            color:${hasContent ? "var(--text)" : "var(--text2)"};
            cursor:${hasContent ? "pointer" : "default"};
            opacity:${hasContent ? "1" : "0.55"};
            text-align:center;
            transition:all .15s;
          ">
          ${allDone ? `<span style="position:absolute; top:6px; right:8px; font-size:11px;">✓</span>` : ""}
          <span style="font-size:11.5px; font-weight:700; line-height:1.3;">${sub.label}</span>
          <span style="font-size:9.5px; color:var(--text2); line-height:1.2;">${sub.labelTr}</span>
          ${hasContent
            ? `<span style="font-size:9px; color:#185FA5; font-weight:600; margin-top:2px;">${completed}/${total}</span>`
            : `<span style="font-size:9px; color:var(--text2); margin-top:2px;">Yakında</span>`
          }
        </button>
      `}).join("")}
    </div>
  `;
}

// ─── ALT KATEGORİYİ AÇ ────────────────────────────────────────────
function simD2OpenSub(idx) {
  simD2SubIdx = idx;
  simD2SceneIdx = 0;
  simD2StepIdx = 0;
  simD2HintIdx = 0;
  simD2SubtitleVisible = false;
  simD2View = "scene";
  renderSimD2Scene();
}

// ─── GERİ DÖNÜŞLER ────────────────────────────────────────────────
function simD2BackToMain() {
  simD2View = "main";
  renderSimD2Main();
}

function simD2BackToSub() {
  simD2View = "sub";
  renderSimD2Sub();
}

// ─── SAHNE EKRANI ─────────────────────────────────────────────────
function renderSimD2Scene() {
  const c = document.getElementById("content");
  const cat = SIM_DAY2_CATEGORIES[simD2CategoryKey];
  const isDirect = !!cat.directScenes;
  const scenes = simD2GetScenes();
  const scene = scenes[simD2SceneIdx];

  if (!scene) {
    // İçerik henüz yok — bilgilendirme ekranı
    c.innerHTML = `
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
        <button onclick="${isDirect ? 'simD2BackToMain()' : 'simD2BackToSub()'}" style="
          background:none; border:none; font-size:11px; color:#185FA5;
          cursor:pointer; font-weight:600; padding:0;
        ">← Geri</button>
      </div>
      <div class="empty-msg">Bu bölümün içeriği yakında eklenecek. 🔜</div>
    `;
    return;
  }

  const step = scene.steps[simD2StepIdx];
  const isLast = simD2SceneIdx === scenes.length - 1;
  const totalScenes = scenes.length;
  const breadcrumb = isDirect ? cat.label : `${cat.label} · ${cat.subcategories[simD2SubIdx].label}`;

  const speakerMeta = {
    narrator:       { icon: "📢", label: "Anlatıcı" },
    representative: { icon: "👨‍💼", label: "Takım Temsilcisi" },
    user:           { icon: "🎤", label: "Sen (Hakem)" }
  };
  const meta = speakerMeta[step.speaker] || speakerMeta.narrator;

  const segmentsHtml = scenes.map((s, i) => {
    let state = "upcoming";
    if (i === simD2SceneIdx) state = "current";
    else if (i < simD2SceneIdx) state = "done";

    const bg = state === "current" ? "#3B6D11"
             : state === "done"    ? "#9aa8b8"
             : "var(--border)";
    const labelColor = state === "current" ? "#185FA5" : "var(--text2)";

    return `
      <div style="display:flex; flex-direction:column; align-items:center; flex:1; min-width:0;">
        <div style="width:100%; height:6px; border-radius:4px; background:${bg}; transition:background .3s;"></div>
        <div style="font-size:8px; color:${labelColor}; margin-top:3px; font-weight:${state === 'current' ? '700' : '500'};">
          ${i + 1}
        </div>
      </div>
    `;
  }).join("");

  c.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
      <button onclick="${isDirect ? 'simD2BackToMain()' : 'simD2BackToSub()'}" style="
        background:none; border:none; font-size:11px; color:#185FA5;
        cursor:pointer; font-weight:600; padding:0;
      ">← Geri</button>
      <div style="font-size:11px; color:#888; text-align:right;">🎙️ ${breadcrumb}</div>
    </div>

    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
      <div style="font-size:12px; font-weight:600; color:var(--text);">
        Senaryo ${simD2SceneIdx + 1} <span style="color:var(--text2); font-weight:400;">/ ${totalScenes}</span>
        &nbsp;·&nbsp; ${scene.title}
      </div>
      <button onclick="if(confirm('Bu bölümü baştan başlatmak istediğinize emin misiniz?')) simD2RestartCurrent();" style="
        background:#dc3545; color:#fff; border:none; cursor:pointer;
        border-radius:20px; padding:4px 10px; font-size:11px; font-weight:bold;
        flex-shrink:0;
      ">Sıfırla</button>
    </div>

    <div style="display:flex; gap:4px; margin-bottom:16px;">
      ${segmentsHtml}
    </div>

    <div id="sim-card" style="background:var(--card-bg); border:1px solid var(--border); border-radius:14px; overflow:hidden; margin-bottom:12px;">

      <div style="padding:20px 20px 16px; text-align:center; border-bottom:1px solid var(--border); background:var(--l3-bg);">
        <div style="font-size:48px; line-height:1; margin-bottom:8px;">${meta.icon}</div>
        <div style="font-size:12px; font-weight:600; color:#185FA5; text-transform:uppercase; letter-spacing:.5px;">${meta.label}</div>
      </div>

      <div style="padding:24px 20px;">
        ${step.speaker !== "user" ? `
          <div style="text-align:center;">
            <button id="sim-play-btn" onclick="simD2Play()" style="
              display:inline-flex; align-items:center; gap:8px;
              padding:12px 28px; font-size:14px; font-weight:600;
              background:#185FA5; color:#fff; border:none;
              border-radius:24px; cursor:pointer; margin-bottom:16px;
            ">▶ Dinle</button>

            <div id="sim-subtitle-wrap" style="margin-top:4px;">
              <div id="sim-subtitle-text" style="
                display:none;
                background:var(--l3-bg); border:1px solid var(--border);
                border-radius:8px; padding:10px 14px;
                font-size:13px; color:var(--text); line-height:1.5;
                margin-bottom:8px;
              ">${step.subtitle || ""}</div>
              <button onclick="simD2ToggleSubtitle()" style="
                background:none; border:none; font-size:11px;
                color:#888; cursor:pointer; text-decoration:underline;
              ">👁 Alt yazıyı ${simD2SubtitleVisible ? "gizle" : "göster"}</button>
            </div>
          </div>
        ` : `
          <div style="text-align:center;">
            <div style="font-size:12px; color:var(--text2); margin-bottom:16px; line-height:1.6;">
              Mikrofona basıp ne söylemen gerektiğini söyle.
            </div>

            <button id="sim-mic-btn" onclick="simD2Speak()" style="
              width:80px; height:80px; border-radius:50%;
              background:#185FA5; color:#fff; border:none;
              font-size:28px; cursor:pointer;
              display:flex; align-items:center; justify-content:center;
              margin:0 auto 16px; transition:all .2s;
            ">🎤</button>

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
              🔴 Dinleniyor...
            </div>

            <div id="sim-result-area" style="margin-top:8px; min-height:20px;"></div>
            <div id="sim-hint-area" style="margin-top:12px;"></div>
          </div>
        `}
      </div>
    </div>

    <div style="display:flex; justify-content:flex-end; margin-top:8px;">
      <button id="sim-next-btn" onclick="simD2NextScene()" style="
        display:none;
        padding:10px 20px; font-size:13px; font-weight:600;
        background:#185FA5; color:#fff; border:none;
        border-radius:22px; cursor:pointer;
      ">${isLast ? "✓ Bölümü Tamamla" : "Sonraki Sahne →"}</button>
    </div>

    <style>
      @keyframes simWave {
        from { transform: scaleY(1); }
        to   { transform: scaleY(2.2); }
      }
    </style>
  `;

  if (simD2SubtitleVisible && step.speaker !== "user") {
    const el = document.getElementById("sim-subtitle-text");
    if (el) el.style.display = "block";
  }
}

// ─── OYNAT ───────────────────────────────────────────────────────
function simD2Play() {
  const scenes = simD2GetScenes();
  const scene = scenes[simD2SceneIdx];
  const step  = scene.steps[simD2StepIdx];
  if (!step.audioId) return;

  const btn = document.getElementById("sim-play-btn");
  if (btn) {
    btn.textContent = "⏸ Çalıyor...";
    btn.disabled = true;
  }

  const nextStep = scene.steps[simD2StepIdx + 1];
  const audio = new Audio(`assets/audio/${step.audioId}.mp3`);
  audio.play().catch(e => console.warn("Ses oynatılamadı:", e));

  audio.onended = function() {
    if (btn) {
      btn.textContent = "▶ Tekrar Dinle";
      btn.disabled = false;
    }
    if (!nextStep) return;
    setTimeout(() => {
      simD2StepIdx++;
      simD2HintIdx = 0;
      renderSimD2Scene();
    }, 500);
  };

  audio.onerror = function() {
    if (btn) {
      btn.textContent = "▶ Tekrar Dinle";
      btn.disabled = false;
    }
  };
}

// ─── ALT YAZI ────────────────────────────────────────────────────
function simD2ToggleSubtitle() {
  simD2SubtitleVisible = !simD2SubtitleVisible;
  const el = document.getElementById("sim-subtitle-text");
  const btn = el && el.nextElementSibling;
  if (el) el.style.display = simD2SubtitleVisible ? "block" : "none";
  if (btn) btn.textContent = `👁 Alt yazıyı ${simD2SubtitleVisible ? "gizle" : "göster"}`;
}

// ─── KONUŞ ───────────────────────────────────────────────────────
function simD2Speak() {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    document.getElementById("sim-result-area").innerHTML =
      '<span style="color:#A32D2D; font-size:12px;">⚠ Tarayıcın mikrofonu desteklemiyor.</span>';
    return;
  }

  const scenes = simD2GetScenes();
  const scene = scenes[simD2SceneIdx];
  const step  = scene.steps[simD2StepIdx];

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
  micBtn.textContent = "⏹";
  if (wave)  wave.style.display  = "flex";
  if (label) label.style.display = "block";
  resultEl.innerHTML = "";

  recognition.start();

  recognition.onresult = function(e) {
    let said = e.results[0][0].transcript.toLowerCase().trim();

    const dictionary = {
      "assets office": "athlete",
      "assets":        "athlete",
      "at least":      "athlete",
      "head guard":    "headguard",
      "headgard":      "headguard",
      "gumshield":     "gum shield",
      "waikru":        "wai kru",
      "wai crew":      "wai kru",
      "mongkong":      "mongkon",
      "mongcon":       "mongkon"
    };
    Object.keys(dictionary).forEach(key => {
      if (said.includes(key)) said = said.replace(key, dictionary[key]);
    });

    micBtn.style.background = "#185FA5";
    micBtn.textContent = "🎤";
    if (wave)  wave.style.display  = "none";
    if (label) label.style.display = "none";

    resultEl.innerHTML = `<div style="font-size:11px; color:var(--text2); margin-bottom:6px;">Söylediğin: "<em>${said}</em>"</div>`;

    const correct = simD2CheckAnswer(said, step.accepted);

    if (correct) simD2ShowSuccess();
    else simD2ShowHint(step.hints);
  };

  recognition.onerror = function(ev) {
    micBtn.style.background = "#185FA5";
    micBtn.textContent = "🎤";
    if (wave)  wave.style.display  = "none";
    if (label) label.style.display = "none";
    resultEl.innerHTML = `<span style="font-size:11px; color:#A32D2D;">⚠ Hata: ${ev.error}</span>`;
  };

  recognition.onend = function() {
    micBtn.style.background = "#185FA5";
    micBtn.textContent = "🎤";
    if (wave)  wave.style.display  = "none";
    if (label) label.style.display = "none";
  };
}

// ─── CEVAP KONTROLÜ ──────────────────────────────────────────────
function simD2CheckAnswer(said, acceptedList) {
  const clean = said.replace(/[^a-z0-9\s]/g, "").trim();

  for (const accepted of acceptedList) {
    const cleanAccepted = accepted.replace(/[^a-z0-9\s]/g, "").trim();
    if (clean === cleanAccepted) return true;

    const keywords = cleanAccepted.split(" ").filter(w => w.length >= 3);
    if (keywords.length === 0) continue;
    const matched = keywords.filter(w => clean.includes(w));
    if (matched.length / keywords.length >= 0.7) return true;
  }
  return false;
}

// ─── BAŞARI ──────────────────────────────────────────────────────
function simD2ShowSuccess() {
  const scenes = simD2GetScenes();
  const scene = scenes[simD2SceneIdx];
  const prefix = simD2GetCompletionKeyPrefix();
  simD2CompletedScenes[`${prefix}_${scene.id}`] = true;

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
      ">✓ Harika! Doğru yönetildi.</div>
    `;
  }

  if (card) {
    card.style.borderColor = "#3B6D11";
    card.style.boxShadow = "0 0 0 3px rgba(59,109,17,0.15)";
  }

  if (nextBtn) nextBtn.style.display = "inline-block";

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
}

// ─── İPUCU ───────────────────────────────────────────────────────
function simD2ShowHint(hints) {
  const hintArea = document.getElementById("sim-hint-area");
  const card     = document.getElementById("sim-card");
  const resultEl = document.getElementById("sim-result-area");

  if (resultEl) {
    resultEl.innerHTML += `
      <div style="
        background:#FCEBEB; border:1px solid #A32D2D;
        border-radius:10px; padding:10px 14px;
        font-size:12px; color:#791F1F; margin-bottom:8px;
      ">✗ Tekrar dene.</div>
    `;
  }

  if (card) {
    card.style.borderColor = "#e0c040";
    card.style.boxShadow = "0 0 0 3px rgba(186,117,23,0.15)";
  }

  const hint = hints[Math.min(simD2HintIdx, hints.length - 1)];
  const isLastHint = simD2HintIdx >= hints.length - 1;

  if (hintArea) {
    hintArea.innerHTML = `
      <div style="
        background:#fff8e1; border-left:3px solid #ffc107;
        border-radius:6px; padding:10px 12px;
        font-size:12px; color:#856404; line-height:1.6;
      ">
        <b>💡 İpucu ${simD2HintIdx + 1}:</b> ${hint}
        ${isLastHint ? "" : `
          <div style="margin-top:8px;">
            <button onclick="simD2NextHint()" style="
              background:none; border:none; font-size:11px;
              color:#185FA5; cursor:pointer; text-decoration:underline;
            ">Bir sonraki ipucunu göster</button>
          </div>
        `}
      </div>
    `;
  }

  simD2HintIdx++;
}

// ─── SONRAKİ İPUCU ───────────────────────────────────────────────
function simD2NextHint() {
  const scenes = simD2GetScenes();
  const scene = scenes[simD2SceneIdx];
  const step  = scene.steps[simD2StepIdx];
  simD2ShowHint(step.hints);
}

// ─── SONRAKİ SAHNE ───────────────────────────────────────────────
function simD2NextScene() {
  const scenes = simD2GetScenes();
  if (simD2SceneIdx < scenes.length - 1) {
    simD2SceneIdx++;
    simD2StepIdx  = 0;
    simD2HintIdx  = 0;
    simD2SubtitleVisible = false;
    renderSimD2Scene();
  } else {
    simD2ShowComplete();
  }
}

// ─── BÖLÜM TAMAMLANDI ─────────────────────────────────────────────
function simD2ShowComplete() {
  const cat = SIM_DAY2_CATEGORIES[simD2CategoryKey];
  const isDirect = !!cat.directScenes;
  const scenes = simD2GetScenes();
  const title = isDirect ? cat.label : cat.subcategories[simD2SubIdx].label;

  const c = document.getElementById("content");
  c.innerHTML = `
    <div style="
      text-align:center; padding:3rem 1rem;
      background:var(--card-bg); border:1px solid var(--border);
      border-radius:14px;
    ">
      <div style="font-size:56px; margin-bottom:12px;">🏆</div>
      <div style="font-size:20px; font-weight:700; color:#185FA5; margin-bottom:8px;">
        ${title} Tamamlandı!
      </div>
      <div style="font-size:14px; color:var(--text2); margin-bottom:24px; line-height:1.6;">
        Bu bölümdeki tüm ${scenes.length} senaryoyu başarıyla geçtin.<br>
        Harika bir pratik yaptın!
      </div>
      <div style="display:flex; gap:8px; justify-content:center;">
        <button onclick="simD2RestartCurrent()" style="
          padding:11px 22px; font-size:13px; font-weight:600;
          background:var(--card-bg); color:#185FA5; border:1px solid #185FA5;
          border-radius:22px; cursor:pointer;
        ">↺ Tekrar Yap</button>
        <button onclick="${isDirect ? 'simD2BackToMain()' : 'simD2BackToSub()'}" style="
          padding:11px 22px; font-size:13px; font-weight:600;
          background:#185FA5; color:#fff; border:none;
          border-radius:22px; cursor:pointer;
        ">← Geri Dön</button>
      </div>
    </div>
  `;
}

// ─── MEVCUT BÖLÜMÜ TEKRAR BAŞLAT ──────────────────────────────────
function simD2RestartCurrent() {
  simD2SceneIdx = 0;
  simD2StepIdx  = 0;
  simD2HintIdx  = 0;
  simD2SubtitleVisible = false;
  renderSimD2Scene();
}