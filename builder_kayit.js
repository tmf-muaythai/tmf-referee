// ─── CÜMLE KURMA PRATİĞİ — KATEGORİ VERİSİ ─────────────────────────
// Şimdilik içleri boş (veya test amaçlı 1-2 boş sahne eklendi). 
// Daha sonra buraya senaryoları ve kelime dizilerini ekleyeceğiz.

// ─── CÜMLE KURMA PRATİĞİ — KATEGORİ VERİSİ ─────────────────────────
const BUILDER_CATEGORIES = [
  { 
    id: "registration", 
    label: "Registration", 
    labelTr: "Kayıt", 
    scenes: [
      { 
        id: 1, 
        title: "Karşılama ve Ülke",
        prompt: "The team representative arrives and greets you. Greet them back and ask for their country.",
        target: "Hello welcome which country are you representing",
        // Çeldiriciler: is, where, represent
        words: ["hello", "welcome", "which", "country", "are", "you", "representing", "is", "where", "represent"]
      },
      { 
        id: 2, 
        title: "Belge Talebi",
        prompt: "Ask the team representative to present the required documents for registration.",
        target: "Please present the required documents",
        // Çeldiriciler: giving, requires, a
        words: ["please", "present", "the", "required", "documents", "giving", "requires", "a"]
      },
      { 
        id: 3, 
        title: "Eksik Evrak Uyarısı",
        prompt: "The documents are incomplete. Tell the representative they cannot proceed and must return later.",
        target: "Please come back after the documents are complete",
        // Çeldiriciler: before, is, completing
        words: ["please", "come", "back", "after", "the", "documents", "are", "complete", "before", "is", "completing"]
      },
      { 
        id: 4, 
        title: "Tıbbi Beyan Eksikliği",
        prompt: "You are checking all the documents and you notice the Athlete's medical declaration is missing.",
        target: "Athletes medical declaration is missing",
        // Çeldiriciler: are, missed, document
        words: ["athletes", "medical", "declaration", "is", "missing", "are", "missed", "document"]
      },
      { 
        id: 5, 
        title: "Hamile Olmama Beyanı Eksikliği",
        prompt: "You are checking all the documents and you notice the Athlete's non-pregnancy declaration is missing.",
        target: "Athletes non-pregnancy declaration is missing",
        // Çeldiriciler: are, pregnancy, miss
        words: ["athletes", "non-pregnancy", "declaration", "is", "missing", "are", "pregnancy", "miss"]
      },
      { 
        id: 6, 
        title: "Anti-Doping Onayı Eksikliği",
        prompt: "You are checking all the documents and you notice the Athlete's anti-doping consent is missing.",
        target: "Athletes anti-doping consent is missing",
        // Çeldiriciler: agree, are, does
        words: ["athletes", "anti-doping", "consent", "is", "missing", "agree", "are", "does"]
      },
      { 
        id: 7, 
        title: "HIV Testi Eksikliği",
        prompt: "You are checking all the documents and you notice the Athlete's HIV test result is missing.",
        target: "Athletes hiv test result is missing",
        // Çeldiriciler: results, are, testing
        words: ["athletes", "hiv", "test", "result", "is", "missing", "results", "are", "testing"]
      },
      { 
        id: 8, 
        title: "HBV Testi Eksikliği",
        prompt: "You are checking all the documents and you notice the Athlete's HBV test result is missing.",
        target: "Athletes hbv test result is missing",
        // Çeldiriciler: results, are, testing
        words: ["athletes", "hbv", "test", "result", "is", "missing", "results", "are", "testing"]
      },
      { 
        id: 9, 
        title: "HCV Testi Eksikliği",
        prompt: "You are checking all the documents and you notice the Athlete's HCV test result is missing.",
        target: "Athletes hcv test result is missing",
        // Çeldiriciler: results, are, testing
        words: ["athletes", "hcv", "test", "result", "is", "missing", "results", "are", "testing"]
      }
    ] 
  },
  // Diğer sekmeler şimdilik boş kalmaya devam ediyor...
  { id: "cagirma",  label: "Calling for Weigh-in",  labelTr: "Tartıya Çağırma",    scenes: [] },
  { id: "kimlik",   label: "ID & Document",         labelTr: "Kimlik & Belge",     scenes: [] },
  { id: "giyim",    label: "Dress & Preparation",   labelTr: "Giyim & Hazırlık",   scenes: [] },
  { id: "tartim",   label: "Weighing",              labelTr: "Tartım",             scenes: [] },
  { id: "sonuc",    label: "Weigh-in Results",      labelTr: "Tartı Sonucu",       scenes: [] },
  { id: "rapor",    label: "Final Report",          labelTr: "Tartı Sonu Raporu",  scenes: [] },
  { id: "sistem",   label: "System Errors",         labelTr: "Sistemsel Sorunlar", scenes: [] },
  { id: "baskul",   label: "Scale Issues",          labelTr: "Baskül Sorunları",   scenes: [] },
];

// ─── CÜMLE KURMA STATE ──────────────────────────────────────────────
let builderView = "menu";          // "menu" | "scene"
let builderCategoryIdx = 0;
let builderSceneIdx = 0;
let builderCompletedScenes = {};   // { "registration_1": true, ... }

// Oyun İçi Durumlar
let builderAvailableWords = []; // Aşağıda bekleyen kelimeler
let builderSelectedWords = [];  // Yukarıya dizilen kelimeler
let builderCheckState = "idle"; // "idle" (bekliyor) | "error" (yanlış) | "success" (doğru)

// ─── ANA GİRİŞ NOKTASI ────────────────────────────────────────────
function renderBuilder() {
  if (builderView === "menu") {
    renderBuilderMenu();
  } else {
    renderBuilderScene();
  }
}

// ─── 3x3 GRID MENÜ (Aynı Kalıyor) ─────────────────────────────────
function renderBuilderMenu() {
  const c = document.getElementById("content");

  c.innerHTML = `
    <div style="margin-bottom:14px;">
      <div style="font-size:13px; font-weight:700; color:#185FA5; margin-bottom:2px;">
        🧩 Cümle Kurma Pratiği
      </div>
      <div style="font-size:11px; color:var(--text2);">
        Kelimeleri doğru sıraya dizerek pratik yapmak istediğin bölümü seç.
      </div>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px;">
      ${BUILDER_CATEGORIES.map((cat, idx) => {
        const hasContent = cat.scenes.length > 0;
        const total = cat.scenes.length;
        const completed = cat.scenes.filter(s => builderCompletedScenes[`${cat.id}_${s.id}`]).length;
        const allDone = hasContent && completed === total;

        return `
        <button
          onclick="${hasContent ? `builderOpenCategory(${idx})` : ""}"
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
          <span style="font-size:11.5px; font-weight:700; line-height:1.3;">${cat.label}</span>
          <span style="font-size:9.5px; color:var(--text2); line-height:1.2;">${cat.labelTr}</span>
          ${hasContent
            ? `<span style="font-size:9px; color:#185FA5; font-weight:600; margin-top:2px;">${completed}/${total}</span>`
            : `<span style="font-size:9px; color:var(--text2); margin-top:2px;">Yakında</span>`
          }
        </button>
      `}).join("")}
    </div>
  `;
}

// ─── KATEGORİ AÇ VE SAHNEYİ HAZIRLA ───────────────────────────────
function builderOpenCategory(catIdx) {
  builderCategoryIdx = catIdx;
  builderSceneIdx = 0;
  builderView = "scene";
  builderInitScene();
}

// ─── MENÜYE GERİ DÖN ──────────────────────────────────────────────
function builderBackToMenu() {
  builderView = "menu";
  renderBuilder();
}

// ─── SAHNEYİ BAŞLAT (Kelimeleri Karıştır) ─────────────────────────
function builderInitScene() {
  const category = BUILDER_CATEGORIES[builderCategoryIdx];
  const scene = category.scenes[builderSceneIdx];
  if (!scene) return;

  // Kelimeleri id'leyip karıştırıyoruz (aynı kelimeden 2 tane olursa sistem çökmesin diye id veriyoruz)
  let mixed = scene.words.map((w, i) => ({ id: i, text: w }));
  mixed.sort(() => Math.random() - 0.5); // Rastgele karıştır

  builderAvailableWords = mixed;
  builderSelectedWords = [];
  builderCheckState = "idle";
  renderBuilder();
}

// ─── SAHNE EKRANI (Oyun Alanı) ────────────────────────────────────
function renderBuilderScene() {
  const c = document.getElementById("content");
  const category = BUILDER_CATEGORIES[builderCategoryIdx];
  const scenes = category.scenes;
  const scene = scenes[builderSceneIdx];
  if (!scene) return;

  const totalScenes = scenes.length;
  const isLast = builderSceneIdx === totalScenes - 1;

  // Segment İlerleme Çubuğu
  const segmentsHtml = scenes.map((s, i) => {
    let state = "upcoming"; 
    if (i === builderSceneIdx) state = "current";       
    else if (i < builderSceneIdx) state = "done";        
    
    const bg = state === "current" ? "#3B6D11" : state === "done" ? "#9aa8b8" : "var(--border)";
    const labelColor = state === "current" ? "#185FA5" : "var(--text2)";

    return `
      <div style="display:flex; flex-direction:column; align-items:center; flex:1; min-width:0;">
        <div style="width:100%; height:6px; border-radius:4px; background:${bg}; transition:background .3s;"></div>
        <div style="font-size:8px; color:${labelColor}; margin-top:3px; font-weight:${state === 'current' ? '700' : '500'};">${i + 1}</div>
      </div>
    `;
  }).join("");

  // Duruma Göre Renkler (Doğru, Yanlış, Beklemede)
  const isSuccess = builderCheckState === "success";
  const isError = builderCheckState === "error";
  const boxBorder = isSuccess ? "#3B6D11" : isError ? "#A32D2D" : "var(--border)";
  const boxBg = isSuccess ? "#EAF3DE" : isError ? "#FCEBEB" : "var(--l3-bg)";

  c.innerHTML = `
    <!-- Üst Bar -->
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
      <button onclick="builderBackToMenu()" style="background:none; border:none; font-size:11px; color:#185FA5; cursor:pointer; font-weight:600; padding:0;">← Bölümler</button>
      <div style="font-size:11px; color:#888; text-align:right;">🧩 ${category.label}</div>
    </div>

    <!-- Başlık ve Sıfırla -->
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
      <div style="font-size:12px; font-weight:600; color:var(--text);">
        Senaryo ${builderSceneIdx + 1} <span style="color:var(--text2); font-weight:400;">/ ${totalScenes}</span>
        &nbsp;·&nbsp; ${scene.title}
      </div>
      <button onclick="if(confirm('Bu bölümü baştan başlatmak istediğinize emin misiniz?')) { builderSceneIdx=0; builderInitScene(); }" style="background: #dc3545; color: white; border: none; cursor: pointer; border-radius: 20px; padding: 4px 10px; font-size: 11px; font-weight: bold; flex-shrink: 0;">Sıfırla</button>
    </div>

    <div style="display:flex; gap:4px; margin-bottom:16px;">${segmentsHtml}</div>

    <!-- 🧩 OYUN ALANI -->
    <div id="builder-card" style="background:var(--card-bg); border:1px solid var(--border); border-radius:14px; overflow:hidden; margin-bottom:12px;">
      
      <!-- Senaryo Bildirimi (Prompt) -->
      <div style="padding:16px 20px; border-bottom:1px solid var(--border); background:var(--l3-bg); display:flex; gap:12px; align-items:center;">
        
        <!-- Avatar -->
        <img src="assets/images/hakem-avatar.png" style="width:48px; height:48px; border-radius:50%; object-fit:cover; flex-shrink:0;" alt="Sen">

        <!-- Yazı -->
        <div style="font-size:14px; color:var(--text); line-height:1.5; font-weight:500;">
          ${scene.prompt}
        </div>
        
      </div>

      <div style="padding:20px;">
        <!-- Yukarıdaki Cevap Alanı (Seçilen Kelimeler) -->
        <div id="builder-answer-box" style="
          min-height:54px; padding:10px; margin-bottom:20px;
          border:2px dashed ${boxBorder}; background:${boxBg};
          border-radius:10px; display:flex; flex-wrap:wrap; gap:8px; align-items:center;
          transition:all .3s;
          ${isError ? 'animation: builderShake 0.4s;' : ''}
        ">
          ${builderSelectedWords.length === 0 && !isSuccess && !isError ? `<span style="color:var(--text2); font-size:13px; font-style:italic; margin:auto;">Kelimeleri buraya diz...</span>` : ""}
          ${builderSelectedWords.map(w => `
            <button onclick="builderRemoveWord(${w.id})" ${isSuccess ? "disabled" : ""} style="
              padding:8px 14px; font-size:14px; font-weight:600;
              background:#fff; color:#185FA5; border:1px solid #185FA5;
              border-radius:8px; cursor:${isSuccess ? 'default' : 'pointer'};
              box-shadow:0 2px 0 #185FA5; transition:transform 0.1s;
            ">${w.text}</button>
          `).join("")}
        </div>

        <!-- Aşağıdaki Kelime Havuzu -->
        ${!isSuccess ? `
          <div style="display:flex; flex-wrap:wrap; gap:8px; justify-content:center; margin-bottom:24px;">
            ${builderAvailableWords.map(w => `
              <button onclick="builderAddWord(${w.id})" style="
                padding:8px 14px; font-size:14px; font-weight:600;
                background:var(--card-bg); color:var(--text); border:1px solid var(--border);
                border-radius:8px; cursor:pointer;
                box-shadow:0 2px 0 var(--border); transition:all 0.1s;
              ">${w.text}</button>
            `).join("")}
          </div>
        ` : ""}

        <!-- Uyarı Mesajı (Yanlışsa) -->
        ${isError ? `<div style="text-align:center; color:#A32D2D; font-size:12px; font-weight:600; margin-bottom:16px;">⚠️ Sıralama hatalı, tekrar dene!</div>` : ""}

        <!-- Butonlar -->
        <div style="text-align:center;">
          ${!isSuccess ? `
            <button onclick="builderCheck()" ${builderSelectedWords.length === 0 ? "disabled" : ""} style="
              padding:12px 32px; font-size:14px; font-weight:600;
              background:${builderSelectedWords.length === 0 ? 'var(--border)' : '#185FA5'}; 
              color:#fff; border:none; border-radius:24px; cursor:${builderSelectedWords.length === 0 ? 'default' : 'pointer'};
              transition:background .3s;
            ">Kontrol Et</button>
          ` : `
            <button onclick="builderNextScene()" style="
              padding:12px 32px; font-size:14px; font-weight:600;
              background:#3B6D11; color:#fff; border:none;
              border-radius:24px; cursor:pointer;
            ">${isLast ? "✓ Bölümü Tamamla" : "Sonraki Senaryo →"}</button>
          `}
        </div>

      </div>
    </div>

    <!-- Hata animasyonu için CSS -->
    <style>
      @keyframes builderShake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        50% { transform: translateX(5px); }
        75% { transform: translateX(-5px); }
        100% { transform: translateX(0); }
      }
    </style>
  `;
}

// ─── KELİME EKLE (Aşağıdan Yukarıya) ──────────────────────────────
function builderAddWord(id) {
  const wordIdx = builderAvailableWords.findIndex(w => w.id === id);
  if (wordIdx === -1) return;
  
  const word = builderAvailableWords.splice(wordIdx, 1)[0]; // Havuzdan al
  builderSelectedWords.push(word); // Cevaba ekle
  builderCheckState = "idle"; // Hata durumunu sıfırla
  renderBuilder();
}

// ─── KELİME ÇIKAR (Yukarıdan Aşağıya) ─────────────────────────────
function builderRemoveWord(id) {
  if (builderCheckState === "success") return; // Doğru bildiyse tıklanamaz

  const wordIdx = builderSelectedWords.findIndex(w => w.id === id);
  if (wordIdx === -1) return;

  const word = builderSelectedWords.splice(wordIdx, 1)[0]; // Cevaptan al
  builderAvailableWords.push(word); // Havuza geri koy
  builderCheckState = "idle";
  renderBuilder();
}

// ─── CEVABI KONTROL ET ────────────────────────────────────────────
function builderCheck() {
  const category = BUILDER_CATEGORIES[builderCategoryIdx];
  const scene = category.scenes[builderSceneIdx];
  
  // Kullanıcının dizdiği cümleyi birleştir ve boşlukları/noktalamaları temizle
  const userSentence = builderSelectedWords.map(w => w.text).join(" ").toLowerCase().replace(/[^a-z0-9\s]/g, "").trim();
  const targetSentence = scene.target.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim();

  if (userSentence === targetSentence) {
    builderCheckState = "success";
    // Başarıyı kaydet
    builderCompletedScenes[`${category.id}_${scene.id}`] = true;
  } else {
    builderCheckState = "error";
  }
  
  renderBuilder();
}

// ─── SONRAKİ SAHNE VEYA BİTİŞ ─────────────────────────────────────
function builderNextScene() {
  const category = BUILDER_CATEGORIES[builderCategoryIdx];
  if (builderSceneIdx < category.scenes.length - 1) {
    builderSceneIdx++;
    builderInitScene(); // Yeni sahneyi karıştırarak başlat
  } else {
    builderShowComplete();
  }
}

// ─── BÖLÜM TAMAMLANDI EKRANI ──────────────────────────────────────
function builderShowComplete() {
  const category = BUILDER_CATEGORIES[builderCategoryIdx];
  const c = document.getElementById("content");
  
  c.innerHTML = `
    <div style="text-align:center; padding:3rem 1rem; background:var(--card-bg); border:1px solid var(--border); border-radius:14px;">
      <div style="font-size:56px; margin-bottom:12px;">🏆</div>
      <div style="font-size:20px; font-weight:700; color:#185FA5; margin-bottom:8px;">
        ${category.label} Tamamlandı!
      </div>
      <div style="font-size:14px; color:var(--text2); margin-bottom:24px; line-height:1.6;">
        Bu bölümdeki tüm senaryolarda cümleleri başarıyla kurdun.<br>Harika bir iş çıkardın!
      </div>
      <div style="display:flex; gap:8px; justify-content:center;">
        <button onclick="builderSceneIdx=0; builderInitScene();" style="
          padding:11px 22px; font-size:13px; font-weight:600;
          background:var(--card-bg); color:#185FA5; border:1px solid #185FA5; border-radius:22px; cursor:pointer;
        ">↺ Tekrar Yap</button>
        <button onclick="builderBackToMenu()" style="
          padding:11px 22px; font-size:13px; font-weight:600;
          background:#185FA5; color:#fff; border:none; border-radius:22px; cursor:pointer;
        ">Bölümlere Dön</button>
      </div>
    </div>
  `;
}