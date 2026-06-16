// ─── SESLİ SİMÜLASYON — KAYIT VERİSİ ────────────────────────────
const SIM_KAYIT = [
  {
    id: 1,
    title: "Karşılama ve Ülke Sorma",
    steps: [
      {
        speaker: "representative",
        audioId: "sim_kayit_1",
        subtitle: "Hello!",
      },
      {
        speaker: "user",
        accepted: [
          "hello welcome which country are you representing",
          "welcome which country are you representing",
          "hello welcome your country",
          "welcome your country"
        ],
        hints: [
          "Karşındaki seni selamlıyor. Sen de karşılık verip hangi ülkeyi temsil ettiğini sormalısın.",
          "'welcome' ve 'country' kelimelerini kullan.",
          "Hello, welcome. Which country are you representing?"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Belge İsteme",
    steps: [
      {
        speaker: "representative",
        audioId: "sim_kayit_2",
        subtitle: "Germany.",
      },
      {
        speaker: "user",
        accepted: [
          "please present the required documents",
          "required documents please",
          "documents please",
          "can you show me your documents"
        ],
        hints: [
          "Ülkeyi öğrendin. Şimdi kayıt için gerekli belgeleri talep etmelisin.",
          "'documents' kelimesini kullan.",
          "Please present the required documents."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Kayıt Tamamlama",
    steps: [
      {
        speaker: "narrator",
        audioId: "sim_kayit_3",
        subtitle: "Tüm evraklar tamam, hiçbir eksik yok.",
      },
      {
        speaker: "representative",
        audioId: "sim_kayit_3b",
        subtitle: "Is it all done?",
      },
      {
        speaker: "user",
        accepted: [
          "yes",
          "yes have a nice day",
          "yes all done",
          "yes your registration is completed",
          "registration completed",
          "all done",
          "all done have a nice day",
          "all done good luck"
        ],
        hints: [
          "Tüm belgeler tamam. Temsilci senden onay bekliyor.",
          "'done' veya 'completed' kelimelerini kullan.",
          "All done! Good luck."
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Tıbbi Beyan Eksikliği",
    steps: [
      {
        speaker: "narrator",
        audioId: "sim_kayit_4",
        subtitle: "You are checking all the documents and you notice the athlete's medical declaration is missing.",
      },
      {
        speaker: "user",
        accepted: [
          "athletes medical declaration is missing",
          "medical declaration missing",
          "there is no medical declaration",
          "where is the medical declaration"
        ],
        hints: [
          "Belgeleri incelerken bir eksiklik fark ettin. Bunu temsilciye bildirmelisin.",
          "'medical' ve 'declaration' kelimelerini kullan.",
          "Athlete's medical declaration is missing."
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Anti-Doping Onayı Eksikliği",
    steps: [
      {
        speaker: "narrator",
        audioId: "sim_kayit_5",
        subtitle: "You are checking all the documents and you notice the athlete's anti-doping consent is missing.",
      },
      {
        speaker: "user",
        accepted: [
          "athletes anti doping consent is missing",
          "anti doping consent missing",
          "there is no anti doping consent",
          "where is the anti doping consent"
        ],
        hints: [
          "Belgeler arasında önemli bir onay formu eksik. Bunu bildirmelisin.",
          "'anti-doping' ve 'consent' kelimelerini kullan.",
          "Athlete's anti-doping consent is missing."
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Hamile Olmama Beyanı Eksikliği",
    steps: [
      {
        speaker: "narrator",
        audioId: "sim_kayit_6",
        subtitle: "You are checking all the documents and you notice the athlete's non-pregnancy declaration is missing.",
      },
      {
        speaker: "user",
        accepted: [
          "athletes non pregnancy declaration is missing",
          "non pregnancy declaration missing",
          "there is no non pregnancy declaration",
          "where is the non pregnancy declaration"
        ],
        hints: [
          "Kadın sporcularda zorunlu olan bir beyan formu eksik.",
          "'non-pregnancy' ve 'declaration' kelimelerini kullan.",
          "Athlete's non-pregnancy declaration is missing."
        ]
      }
    ]
  },
  {
    id: 7,
    title: "HIV Testi Eksikliği",
    steps: [
      {
        speaker: "narrator",
        audioId: "sim_kayit_7",
        subtitle: "You are checking all the documents and you notice the athlete's HIV test result is missing.",
      },
      {
        speaker: "user",
        accepted: [
          "athletes hiv test result is missing",
          "hiv test result is missing",
          "hiv result is missing",
          "there is no hiv test result",
          "there is no hiv result",
          "where is the hiv test result",
          "where is the hiv result",
          "hiv result",
          "hiv test result"
        ],
        hints: [
          "Kan testi sonuçlarından biri eksik. Hangisi olduğunu belirtmelisin.",
          "'HIV' ve 'result' kelimelerini kullan.",
          "Athlete's HIV test result is missing."
        ]
      }
    ]
  },
  {
    id: 8,
    title: "HBV Testi Eksikliği",
    steps: [
      {
        speaker: "narrator",
        audioId: "sim_kayit_8",
        subtitle: "You are checking all the documents and you notice the athlete's HBV test result is missing.",
      },
      {
        speaker: "user",
        accepted: [
          "athletes hbv test result is missing",
          "hbv test result is missing",
          "hbv result is missing",
          "there is no hbv test result",
          "there is no hbv result",
          "where is the hbv test result",
          "where is the hbv result",
          "hbv result",
          "hbv test result"
        ],
        hints: [
          "Kan testi sonuçlarından biri eksik. Hangisi olduğunu belirtmelisin.",
          "'HBV' ve 'result' kelimelerini kullan.",
          "Athlete's HBV test result is missing."
        ]
      }
    ]
  },
  {
    id: 9,
    title: "HCV Testi Eksikliği",
    steps: [
      {
        speaker: "narrator",
        audioId: "sim_kayit_9",
        subtitle: "You are checking all the documents and you notice the athlete's HCV test result is missing.",
      },
      {
        speaker: "user",
        accepted: [
          "athletes hcv test result is missing",
          "hcv test result is missing",
          "hcv result is missing",
          "there is no hcv test result",
          "there is no hcv result",
          "where is the hcv test result",
          "where is the hcv result",
          "hcv result",
          "hcv test result"
        ],
        hints: [
          "Kan testi sonuçlarından biri eksik. Hangisi olduğunu belirtmelisin.",
          "'HCV' ve 'result' kelimelerini kullan.",
          "Athlete's HCV test result is missing."
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Eksik Evrak — Geri Gönderme",
    steps: [
      {
        speaker: "narrator",
        audioId: "sim_kayit_10",
        subtitle: "Evraklar eksik ve kayıt işlemine devam edemiyorsun.",
      },
      {
        speaker: "user",
        accepted: [
          "please come back after the documents are complete",
          "come back when documents are ready",
          "come back when documents are complete",
          "please bring all the documents"
        ],
        hints: [
          "Eksik belgeler var ve işleme devam edemiyorsun. Temsilciyi geri gelmesi konusunda yönlendirmelisin.",
          "'come back' ve 'documents' kelimelerini kullan.",
          "Please come back after the documents are complete."
        ]
      }
    ]
  }
];

// ─── SESLİ SİMÜLASYON STATE ──────────────────────────────────────
let simSceneIdx = 0;
let simStepIdx  = 0;
let simHintIdx  = 0;
let simSubtitleVisible = false;

// ─── SESLİ SİMÜLASYON RENDER ─────────────────────────────────────
function renderSimulation() {
  const c = document.getElementById("content");
  const scene = SIM_KAYIT[simSceneIdx];
  if (!scene) return;

  const step = scene.steps[simStepIdx];
  const isLast = simSceneIdx === SIM_KAYIT.length - 1;
  const totalScenes = SIM_KAYIT.length;

  // İkon ve etiket
  // ─── YENİ NESİL PROFESYONEL İKONLAR (SVG) ───
  const speakerMeta = {
    narrator: { 
      // Şık bir ses/anons dalgası ikonu
      icon: `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`, 
      label: "Anlatıcı" 
    },
    representative: { 
      // Şık bir kullanıcı/profil ikonu
      icon: `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`, 
      label: "Takım Temsilcisi" 
    },
    user: { 
      // Modern bir stüdyo mikrofonu ikonu
      icon: `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>`, 
      label: "Sen (Hakem)" 
    }
  };
  const meta = speakerMeta[step.speaker] || speakerMeta.narrator;

  c.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
      <div style="font-size:12px; font-weight:600; color:#185FA5;">
        🎙️ Sesli Simülasyon
      </div>
      <div style="font-size:11px; color:#888;">
        Sahne <b style="color:#185FA5">${simSceneIdx + 1}</b> / ${totalScenes}
        &nbsp;·&nbsp; ${scene.title}
      </div>
    </div>

    <!-- İlerleme çubuğu -->
    <div style="height:3px; background:var(--border); border-radius:2px; margin-bottom:16px; overflow:hidden;">
      <div style="height:100%; width:${Math.round((simSceneIdx / totalScenes) * 100)}%; background:#185FA5; border-radius:2px; transition:width .4s;"></div>
    </div>

    <!-- Sahne kartı -->
    <div id="sim-card" style="background:var(--card-bg); border:1px solid var(--border); border-radius:14px; overflow:hidden; margin-bottom:12px;">

      <!-- Üst: konuşmacı -->
      <div style="padding:20px 20px 16px; text-align:center; border-bottom:1px solid var(--border); background:var(--l3-bg);">
        <div style="font-size:48px; line-height:1; margin-bottom:8px;">${meta.icon}</div>
        <div style="font-size:12px; font-weight:600; color:#185FA5; text-transform:uppercase; letter-spacing:.5px;">${meta.label}</div>
      </div>

      <!-- Orta: aksiyon -->
      <div style="padding:24px 20px;">

        ${step.speaker !== "user" ? `
          <!-- Dinleme aşaması -->
          <div style="text-align:center;">
            <button id="sim-play-btn" onclick="simPlay()" style="
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
              <button onclick="simToggleSubtitle()" style="
                background:none; border:none; font-size:11px;
                color:#888; cursor:pointer; text-decoration:underline;
              ">👁 Alt yazıyı ${simSubtitleVisible ? "gizle" : "göster"}</button>
            </div>
          </div>
        ` : `
          <!-- Konuşma aşaması -->
          <div style="text-align:center;">
            <div style="font-size:12px; color:var(--text2); margin-bottom:16px; line-height:1.6;">
              Mikrofona basıp ne söylemen gerektiğini söyle.
            </div>

            <button id="sim-mic-btn" onclick="simSpeak()" style="
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

            <!-- İpucu -->
            <div id="sim-hint-area" style="margin-top:12px;"></div>
          </div>
        `}
      </div>
    </div>

    <!-- Sağ altta: sonraki sahne butonu (sadece son adımda doğru cevap verilince görünür) -->
    <div style="display:flex; justify-content:flex-end; margin-top:8px;">
      <button id="sim-next-btn" onclick="simNextScene()" style="
        display:none;
        padding:10px 20px; font-size:13px; font-weight:600;
        background:#185FA5; color:#fff; border:none;
        border-radius:22px; cursor:pointer;
      ">${isLast ? "✓ Simülasyonu Tamamla" : "Sonraki Sahne →"}</button>
    </div>

    <style>
      @keyframes simWave {
        from { transform: scaleY(1); }
        to   { transform: scaleY(2.2); }
      }
    </style>
  `;

  // Alt yazı durumunu koru
  if (simSubtitleVisible && step.speaker !== "user") {
    const el = document.getElementById("sim-subtitle-text");
    if (el) el.style.display = "block";
  }
}

// ─── OYNAT ───────────────────────────────────────────────────────
function simPlay() {
  const scene = SIM_KAYIT[simSceneIdx];
  const step  = scene.steps[simStepIdx];
  if (!step.audioId) return;

  const btn = document.getElementById("sim-play-btn");
  if (btn) {
    btn.textContent = "⏸ Çalıyor...";
    btn.disabled = true;
  }

  const nextStep = scene.steps[simStepIdx + 1];
  const audio = new Audio(`assets/audio/${step.audioId}.mp3`);
  audio.play().catch(e => console.warn("Ses oynatılamadı:", e));

  // Ses bitince sonraki adıma geç
  audio.onended = function() {
    if (btn) {
      btn.textContent = "▶ Tekrar Dinle";
      btn.disabled = false;
    }

    if (!nextStep) return;

    // Kısa bir nefes molası (500ms) ver, sonra geç
    setTimeout(() => {
      simStepIdx++;
      simHintIdx = 0;
      renderSimulation();
    }, 500);
  };

  // Hata durumunda butonu serbest bırak
  audio.onerror = function() {
    if (btn) {
      btn.textContent = "▶ Tekrar Dinle";
      btn.disabled = false;
    }
  };
}

// ─── ALT YAZI ────────────────────────────────────────────────────
function simToggleSubtitle() {
  simSubtitleVisible = !simSubtitleVisible;
  const el = document.getElementById("sim-subtitle-text");
  const btn = el && el.nextElementSibling;
  if (el) el.style.display = simSubtitleVisible ? "block" : "none";
  if (btn) btn.textContent = `👁 Alt yazıyı ${simSubtitleVisible ? "gizle" : "göster"}`;
}

// ─── KONUŞ ───────────────────────────────────────────────────────
function simSpeak() {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    document.getElementById("sim-result-area").innerHTML =
      '<span style="color:#A32D2D; font-size:12px;">⚠ Tarayıcın mikrofonu desteklemiyor.</span>';
    return;
  }

  const scene = SIM_KAYIT[simSceneIdx];
  const step  = scene.steps[simStepIdx];

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

    // Tarayıcı tanıma düzeltmeleri
    const dictionary = {
      "assets office": "athlete",
      "assets":        "athlete",
      "at least":      "athlete",
      "head guard":    "headguard",
      "headgard":      "headguard",
      "gumshield":     "gum shield",
      "waikru":        "wai kru",
      "anti doping":   "anti-doping",
      "non pregnancy": "non-pregnancy",
      "hiv":           "hiv",
      "hbv":           "hbv",
      "hcv":           "hcv"
    };
    Object.keys(dictionary).forEach(key => {
      if (said.includes(key)) said = said.replace(key, dictionary[key]);
    });

    micBtn.style.background = "#185FA5";
    micBtn.textContent = "🎤";
    if (wave)  wave.style.display  = "none";
    if (label) label.style.display = "none";

    resultEl.innerHTML = `<div style="font-size:11px; color:var(--text2); margin-bottom:6px;">Söylediğin: "<em>${said}</em>"</div>`;

    const correct = simCheckAnswer(said, step.accepted);

    if (correct) {
      simShowSuccess();
    } else {
      simShowHint(step.hints);
    }
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
function simCheckAnswer(said, acceptedList) {
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
}

// ─── BAŞARI ──────────────────────────────────────────────────────
function simShowSuccess() {
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
}

// ─── İPUCU ───────────────────────────────────────────────────────
function simShowHint(hints) {
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

  const hint = hints[Math.min(simHintIdx, hints.length - 1)];
  const isLastHint = simHintIdx >= hints.length - 1;

  if (hintArea) {
    hintArea.innerHTML = `
      <div style="
        background:#fff8e1; border-left:3px solid #ffc107;
        border-radius:6px; padding:10px 12px;
        font-size:12px; color:#856404; line-height:1.6;
      ">
        <b>💡 İpucu ${simHintIdx + 1}:</b> ${hint}
        ${isLastHint ? "" : `
          <div style="margin-top:8px;">
            <button onclick="simNextHint()" style="
              background:none; border:none; font-size:11px;
              color:#185FA5; cursor:pointer; text-decoration:underline;
            ">Bir sonraki ipucunu göster</button>
          </div>
        `}
      </div>
    `;
  }

  simHintIdx++;
}

// ─── SONRAKİ İPUCU ───────────────────────────────────────────────
function simNextHint() {
  const scene = SIM_KAYIT[simSceneIdx];
  const step  = scene.steps[simStepIdx];
  simShowHint(step.hints);
}

// ─── SONRAKİ SAHNE ───────────────────────────────────────────────
function simNextScene() {
  if (simSceneIdx < SIM_KAYIT.length - 1) {
    simSceneIdx++;
    simStepIdx  = 0;
    simHintIdx  = 0;
    simSubtitleVisible = false;
    renderSimulation();
  } else {
    simShowComplete();
  }
}

// ─── TAMAMLANDI ──────────────────────────────────────────────────
function simShowComplete() {
  const c = document.getElementById("content");
  c.innerHTML = `
    <div style="
      text-align:center; padding:3rem 1rem;
      background:var(--card-bg); border:1px solid var(--border);
      border-radius:14px;
    ">
      <div style="font-size:56px; margin-bottom:12px;">🏆</div>
      <div style="font-size:22px; font-weight:700; color:#185FA5; margin-bottom:8px;">
        Simülasyon Tamamlandı!
      </div>
      <div style="font-size:14px; color:var(--text2); margin-bottom:24px; line-height:1.6;">
        Tüm ${SIM_KAYIT.length} sahneyi başarıyla geçtin.<br>
        Harika bir pratik yaptın!
      </div>
      <button onclick="simRestart()" style="
        padding:11px 28px; font-size:14px; font-weight:600;
        background:#185FA5; color:#fff; border:none;
        border-radius:22px; cursor:pointer;
      ">↺ Baştan Başla</button>
    </div>
  `;
}

// ─── BAŞTAN BAŞLA ─────────────────────────────────────────────────
function simRestart() {
  simSceneIdx = 0;
  simStepIdx  = 0;
  simHintIdx  = 0;
  simSubtitleVisible = false;
  renderSimulation();
}