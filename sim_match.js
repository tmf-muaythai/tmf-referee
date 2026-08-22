/* ==========================================================================
   sim_match.js — TAM MAÇ SİMÜLASYONU (Full Match Simulation)
   Bir Muaythai maçını baştan sona İngilizce yönetme akışı.

   Yeni içerik ÜRETMEZ; mevcut sim_day2 sahnelerini kronolojik maç sırasına
   dizer (ekipman → çağırma → komut → faul → sayım → doktor → karar → anons).
   Böylece tüm sahneler zaten 8 dile çevrili, seslendirilmiş ve doğrulanmıştır.

   Ortak SimEngine (sim-engine.js) üzerinden çalışır — kendi context'i (MATCH_CTX)
   ve global sarmalayıcıları ile. sim-engine.js, sim_kayit.js ve sim_day2.js'ten
   SONRA, i18n dosyalarından SONRA yüklenir.
   ========================================================================== */

// ─── MAÇ AKIŞI: fazlara göre [altKategoriId, sahneId] referansları ──────────
// Her referans, sim_day2 verisindeki gerçek bir sahneyi işaret eder.
const MATCH_FLOW = [
  { key: "prep",     refs: [ ["d2_ekipman", 1], ["d2_ekipman", 3] ] },
  { key: "start",    refs: [ ["d2_mac", 1], ["d2_mac", 2], ["d2_mac", 3], ["d2_mac", 4], ["d2_mac", 5] ] },
  { key: "round1",   refs: [ ["d2_orta", 5], ["d2_uyari", 1] ] },
  { key: "round2",   refs: [ ["d2_ceza", 1], ["d2_orta", 9] ] },
  { key: "round3",   refs: [ ["d2_doktor", 1], ["d2_doktor", 2] ] },
  { key: "decision", refs: [ ["d2_karar", 2], ["announcer", 4] ] }
];

// ─── REFERANS ÇÖZÜCÜ: [alt, id] -> gerçek sahne nesnesi ─────────────────────
function matchFindScene(sub, id) {
  if (typeof SIM_DAY2_CATEGORIES !== "undefined") {
    for (const k of Object.keys(SIM_DAY2_CATEGORIES)) {
      const cat = SIM_DAY2_CATEGORIES[k];
      for (const sc of (cat.subcategories || [])) {
        if (sc.id === sub) { const f = (sc.scenes || []).find(s => s.id === id); if (f) return f; }
      }
      if (k === sub && cat.directScenes) { const f = cat.directScenes.find(s => s.id === id); if (f) return f; }
    }
  }
  if (typeof SIM_CATEGORIES !== "undefined") {
    for (const c of SIM_CATEGORIES) {
      if (c.id === sub) { const f = (c.scenes || []).find(s => s.id === id); if (f) return f; }
    }
  }
  return null;
}

// ─── Düz sahne listesi + her sahnenin faz etiketi (bir kez kurulur) ─────────
let MATCH_SCENES = [];     // çözülmüş sahne nesneleri, sırayla
let MATCH_PHASE_OF = [];   // her sahne indeksi için faz anahtarı
function buildMatchScenes() {
  MATCH_SCENES = [];
  MATCH_PHASE_OF = [];
  MATCH_FLOW.forEach(ph => {
    ph.refs.forEach(ref => {
      const sc = matchFindScene(ref[0], ref[1]);
      if (sc) { MATCH_SCENES.push(sc); MATCH_PHASE_OF.push(ph.key); }
    });
  });
}

// ─── STATE ──────────────────────────────────────────────────────────────────
let matchView = "intro";   // "intro" | "scene"
let matchSceneIdx = 0;
let matchStepIdx = 0;
let matchHintIdx = 0;
let matchSubtitle = false;
let matchCompleted = {};    // { sceneIdx: true }

// ─── KENDİ İÇİNDE ÇEVİRİ (8 dil) ────────────────────────────────────────────
const MATCH_I18N = {
  tr: { navLabel:"Tam Maç Simülasyonu", title:"Tam Maç Simülasyonu", tagline:"Bir maçı baştan sona İngilizce yönet.",
        boutRed:"Kırmızı Köşe", boutBlue:"Mavi Köşe", youAre:"Sen: Orta Hakem", format:"3 × 3 dk", start:"Maçı Başlat", steps:"adım",
        phase_prep:"Hazırlık", phase_start:"Maç Başlangıcı", phase_round1:"Raund 1", phase_round2:"Raund 2", phase_round3:"Raund 3", phase_decision:"Karar & Anons",
        completeTitle:"Maçı Tamamladın!", completeMsg:"Koca bir maçı baştan sona İngilizce yönettin. Tebrikler!",
        back:"← Maç Kartı", redo:"↺ Tekrar Yap", progressLabel:"Maç İlerlemesi" },
  de: { navLabel:"Ganzer Kampf", title:"Ganzer Kampf – Simulation", tagline:"Leite einen Kampf von Anfang bis Ende auf Englisch.",
        boutRed:"Rote Ecke", boutBlue:"Blaue Ecke", youAre:"Du: Ringrichter", format:"3 × 3 Min", start:"Kampf starten", steps:"Schritte",
        phase_prep:"Vorbereitung", phase_start:"Kampfbeginn", phase_round1:"Runde 1", phase_round2:"Runde 2", phase_round3:"Runde 3", phase_decision:"Entscheidung & Ansage",
        completeTitle:"Kampf abgeschlossen!", completeMsg:"Du hast einen ganzen Kampf von Anfang bis Ende auf Englisch geleitet. Glückwunsch!",
        back:"← Kampfkarte", redo:"↺ Wiederholen", progressLabel:"Kampfverlauf" },
  ar: { navLabel:"محاكاة نزال كامل", title:"محاكاة نزال كامل", tagline:"أدِر نزالاً من البداية إلى النهاية بالإنجليزية.",
        boutRed:"الركن الأحمر", boutBlue:"الركن الأزرق", youAre:"أنت: الحكم", format:"3 × 3 دقائق", start:"ابدأ النزال", steps:"خطوات",
        phase_prep:"التحضير", phase_start:"بداية النزال", phase_round1:"الجولة 1", phase_round2:"الجولة 2", phase_round3:"الجولة 3", phase_decision:"القرار والإعلان",
        completeTitle:"اكتمل النزال!", completeMsg:"لقد أدرت نزالاً كاملاً من البداية إلى النهاية بالإنجليزية. تهانينا!",
        back:"← بطاقة النزال", redo:"↺ إعادة", progressLabel:"تقدّم النزال" },
  fr: { navLabel:"Match complet", title:"Simulation de match complet", tagline:"Dirige un match du début à la fin en anglais.",
        boutRed:"Coin rouge", boutBlue:"Coin bleu", youAre:"Toi : arbitre", format:"3 × 3 min", start:"Commencer le match", steps:"étapes",
        phase_prep:"Préparation", phase_start:"Début du match", phase_round1:"Round 1", phase_round2:"Round 2", phase_round3:"Round 3", phase_decision:"Décision & annonce",
        completeTitle:"Match terminé !", completeMsg:"Tu as dirigé un match entier du début à la fin en anglais. Bravo !",
        back:"← Fiche du match", redo:"↺ Recommencer", progressLabel:"Progression du match" },
  ko: { navLabel:"전체 경기 시뮬레이션", title:"전체 경기 시뮬레이션", tagline:"경기를 처음부터 끝까지 영어로 진행하세요.",
        boutRed:"레드 코너", boutBlue:"블루 코너", youAre:"당신: 주심", format:"3 × 3분", start:"경기 시작하기", steps:"단계",
        phase_prep:"준비", phase_start:"경기 시작", phase_round1:"라운드 1", phase_round2:"라운드 2", phase_round3:"라운드 3", phase_decision:"판정 & 발표",
        completeTitle:"경기 완료!", completeMsg:"한 경기를 처음부터 끝까지 영어로 진행했습니다. 축하합니다!",
        back:"← 경기 카드", redo:"↺ 다시", progressLabel:"경기 진행" },
  th: { navLabel:"จำลองแมตช์เต็มรูปแบบ", title:"จำลองแมตช์เต็มรูปแบบ", tagline:"ตัดสินการแข่งขันตั้งแต่ต้นจนจบเป็นภาษาอังกฤษ",
        boutRed:"มุมแดง", boutBlue:"มุมน้ำเงิน", youAre:"คุณ: ผู้ตัดสิน", format:"3 × 3 นาที", start:"เริ่มการแข่งขัน", steps:"ขั้นตอน",
        phase_prep:"เตรียมพร้อม", phase_start:"เริ่มแมตช์", phase_round1:"ยกที่ 1", phase_round2:"ยกที่ 2", phase_round3:"ยกที่ 3", phase_decision:"การตัดสิน & ประกาศผล",
        completeTitle:"จบการแข่งขัน!", completeMsg:"คุณได้ตัดสินการแข่งขันทั้งแมตช์ตั้งแต่ต้นจนจบเป็นภาษาอังกฤษ ยินดีด้วย!",
        back:"← การ์ดแมตช์", redo:"↺ เล่นอีกครั้ง", progressLabel:"ความคืบหน้าของแมตช์" },
  nl: { navLabel:"Volledige partij", title:"Simulatie volledige partij", tagline:"Leid een partij van begin tot eind in het Engels.",
        boutRed:"Rode hoek", boutBlue:"Blauwe hoek", youAre:"Jij: scheidsrechter", format:"3 × 3 min", start:"Partij starten", steps:"stappen",
        phase_prep:"Voorbereiding", phase_start:"Start van de partij", phase_round1:"Ronde 1", phase_round2:"Ronde 2", phase_round3:"Ronde 3", phase_decision:"Beslissing & omroep",
        completeTitle:"Partij voltooid!", completeMsg:"Je hebt een hele partij van begin tot eind in het Engels geleid. Gefeliciteerd!",
        back:"← Partijkaart", redo:"↺ Opnieuw", progressLabel:"Voortgang partij" },
  it: { navLabel:"Incontro completo", title:"Simulazione di incontro completo", tagline:"Dirigi un incontro dall'inizio alla fine in inglese.",
        boutRed:"Angolo rosso", boutBlue:"Angolo blu", youAre:"Tu: arbitro", format:"3 × 3 min", start:"Inizia l'incontro", steps:"passaggi",
        phase_prep:"Preparazione", phase_start:"Inizio incontro", phase_round1:"Ripresa 1", phase_round2:"Ripresa 2", phase_round3:"Ripresa 3", phase_decision:"Decisione e annuncio",
        completeTitle:"Incontro completato!", completeMsg:"Hai diretto un intero incontro dall'inizio alla fine in inglese. Complimenti!",
        back:"← Scheda incontro", redo:"↺ Ripeti", progressLabel:"Avanzamento incontro" },
  el: { navLabel:"Πλήρης αγώνας", title:"Προσομοίωση πλήρους αγώνα", tagline:"Διαιτήτευσε έναν αγώνα από την αρχή ως το τέλος στα αγγλικά.",
        boutRed:"Κόκκινη γωνία", boutBlue:"Μπλε γωνία", youAre:"Εσύ: Διαιτητής", format:"3 × 3 λεπτά", start:"Ξεκίνα τον αγώνα", steps:"βήματα",
        phase_prep:"Προετοιμασία", phase_start:"Έναρξη αγώνα", phase_round1:"Γύρος 1", phase_round2:"Γύρος 2", phase_round3:"Γύρος 3", phase_decision:"Απόφαση & Ανακοίνωση",
        completeTitle:"Ολοκλήρωσες τον αγώνα!", completeMsg:"Διαιτήτευσες έναν ολόκληρο αγώνα από την αρχή ως το τέλος στα αγγλικά. Συγχαρητήρια!",
        back:"← Κάρτα αγώνα", redo:"↺ Ξανά", progressLabel:"Πρόοδος αγώνα" },
  uk: { navLabel:"Повний бій", title:"Симуляція повного бою", tagline:"Відсуди бій від початку до кінця англійською.",
        boutRed:"Червоний кут", boutBlue:"Синій кут", youAre:"Ти: Рефері", format:"3 × 3 хвилини", start:"Почати бій", steps:"кроків",
        phase_prep:"Підготовка", phase_start:"Початок бою", phase_round1:"Раунд 1", phase_round2:"Раунд 2", phase_round3:"Раунд 3", phase_decision:"Рішення та оголошення",
        completeTitle:"Ти завершила бій!", completeMsg:"Ти відсудила цілий бій від початку до кінця англійською. Вітаємо!",
        back:"← Картка бою", redo:"↺ Ще раз", progressLabel:"Хід бою" }
};
function mt(key) {
  const L = (typeof APP_LANG !== "undefined") ? APP_LANG : "tr";
  const p = MATCH_I18N[L] || MATCH_I18N.tr;
  return (p && p[key] != null) ? p[key] : (MATCH_I18N.tr[key] != null ? MATCH_I18N.tr[key] : key);
}

// ─── NAV etiketini NAV_I18N'e enjekte et (menü öğesi yerelleşsin) ───────────
(function injectMatchNav() {
  if (typeof NAV_I18N === "undefined") return;
  ["de", "ar", "fr", "ko", "th", "nl", "it", "el", "uk"].forEach(L => {
    if (NAV_I18N[L] && MATCH_I18N[L]) NAV_I18N[L]["sim_match"] = MATCH_I18N[L].navLabel;
  });
})();

// ─── ANA GİRİŞ NOKTASI (app.js router çağırır: curSec === "sim_match") ──────
function renderSimMatch() {
  if (matchView === "intro") renderMatchIntro();
  else renderMatchScene();
}

// ─── GİRİŞ / MAÇ KARTI ──────────────────────────────────────────────────────
function renderMatchIntro() {
  buildMatchScenes();
  const c = document.getElementById("content");
  const n = MATCH_SCENES.length;

  const phaseChips = MATCH_FLOW.map(ph =>
    `<span style="font-size:10px; padding:4px 10px; border-radius:20px; background:var(--l3-bg); border:1px solid var(--border); color:var(--text2); white-space:nowrap;">${mt("phase_" + ph.key)}</span>`
  ).join("");

  c.innerHTML = `
  <div style="max-width:520px; margin:0 auto;">
    <div style="text-align:center; margin-bottom:16px;">
      <div style="font-size:16px; font-weight:800; color:#185FA5;">🥊 ${mt("title")}</div>
      <div style="font-size:12px; color:var(--text2); margin-top:5px; line-height:1.5;">${mt("tagline")}</div>
    </div>

    <!-- Maç kartı -->
    <div style="background:var(--card-bg); border:1px solid var(--border); border-radius:16px; overflow:hidden; margin-bottom:16px; box-shadow:0 2px 10px rgba(0,0,0,0.05);">
      <div style="display:flex; align-items:stretch;">
        <div style="flex:1; padding:20px 12px; text-align:center; color:#fff; background:#A32D2D;">
          <div style="font-size:9px; letter-spacing:1.5px; opacity:.85; font-weight:700;">RED</div>
          <div style="font-size:13px; font-weight:700; margin-top:5px;">${mt("boutRed")}</div>
        </div>
        <div style="display:flex; align-items:center; justify-content:center; padding:0 8px; font-weight:800; color:var(--text2); font-size:14px; background:var(--l3-bg);">VS</div>
        <div style="flex:1; padding:20px 12px; text-align:center; color:#fff; background:#185FA5;">
          <div style="font-size:9px; letter-spacing:1.5px; opacity:.85; font-weight:700;">BLUE</div>
          <div style="font-size:13px; font-weight:700; margin-top:5px;">${mt("boutBlue")}</div>
        </div>
      </div>
      <div style="padding:14px 18px; display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border); gap:8px;">
        <div style="font-size:12px; color:var(--text); font-weight:600; display:flex; align-items:center; gap:6px;">
          ${(typeof icon === 'function') ? icon('mic', {size:'1em'}) : '🎙'} ${mt("youAre")}
        </div>
        <div style="font-size:11px; color:var(--text2); white-space:nowrap;">${mt("format")} · ${n} ${mt("steps")}</div>
      </div>
    </div>

    <!-- Faz zinciri -->
    <div style="display:flex; flex-wrap:wrap; gap:6px; justify-content:center; margin-bottom:20px;">
      ${phaseChips}
    </div>

    <!-- Başlat -->
    <div style="text-align:center;">
      <button onclick="matchStart()" style="
        padding:14px 40px; font-size:15px; font-weight:700;
        background:#185FA5; color:#fff; border:none;
        border-radius:26px; cursor:pointer;
        box-shadow:0 4px 14px rgba(24,95,165,0.32);
      ">▶ ${mt("start")}</button>
    </div>
  </div>
  `;
}

// ─── BAŞLAT / GERİ ──────────────────────────────────────────────────────────
function matchStart() {
  if (!MATCH_SCENES.length) buildMatchScenes();
  matchSceneIdx = 0; matchStepIdx = 0; matchHintIdx = 0; matchSubtitle = false;
  matchCompleted = {};
  matchView = "scene";
  renderMatchScene();
}
function matchBackToIntro() {
  matchView = "intro";
  renderMatchIntro();
}

// ─── SAHNE MOTORU BAĞLAMA (ortak sim-engine.js) ─────────────────────────────
const MATCH_CTX = {
  get sceneIdx(){ return matchSceneIdx; },        set sceneIdx(v){ matchSceneIdx = v; },
  get stepIdx(){ return matchStepIdx; },          set stepIdx(v){ matchStepIdx = v; },
  get hintIdx(){ return matchHintIdx; },          set hintIdx(v){ matchHintIdx = v; },
  get subtitle(){ return matchSubtitle; },        set subtitle(v){ matchSubtitle = v; },
  getScenes(){ return MATCH_SCENES; },
  markCompleted(){ matchCompleted[matchSceneIdx] = true; },
  headerLabel(){ return mt("phase_" + (MATCH_PHASE_OF[matchSceneIdx] || "start")); },
  completeTitle(){ return mt("title"); },
  backCall: "matchBackToIntro()",
  get backLabel(){ return mt("back"); },
  completeBackCall: "matchBackToIntro()",
  get completeBackLabel(){ return mt("back"); },
  restartCall: "matchRestart()",
  playCall: "matchPlay()",
  speakCall: "matchSpeak()",
  toggleCall: "matchToggle()",
  nextCall: "matchNext()",
  prevCall: "matchPrev()",
  nextHintCall: "matchNextHint()",
  dictionary: (typeof DAY2_SIM_CTX !== "undefined" && DAY2_SIM_CTX.dictionary) ? DAY2_SIM_CTX.dictionary
            : ((typeof KAYIT_SIM_CTX !== "undefined" && KAYIT_SIM_CTX.dictionary) ? KAYIT_SIM_CTX.dictionary : {})
};

// ─── Global sarmalayıcılar — sahne HTML'indeki onclick'ler bunları çağırır ──
function renderMatchScene() { SimEngine.renderScene(MATCH_CTX); }
function matchPlay()        { SimEngine.play(MATCH_CTX); }
function matchToggle()      { SimEngine.toggleSubtitle(MATCH_CTX); }
function matchSpeak()       { SimEngine.speak(MATCH_CTX); }
function matchPrev()        { SimEngine.prev(MATCH_CTX); }
function matchNextHint()    { SimEngine.nextHint(MATCH_CTX); }
function matchRestart() {
  matchSceneIdx = 0; matchStepIdx = 0; matchHintIdx = 0; matchSubtitle = false;
  matchCompleted = {};
  renderMatchScene();
}
// İlerle — son sahnede özel maç-sonu ekranını göster (SimEngine.showComplete yerine)
function matchNext() {
  const E = MATCH_CTX;
  const scene = E.getScenes()[E.sceneIdx];
  if (scene && E.stepIdx < scene.steps.length - 1) {
    E.stepIdx++; E.hintIdx = 0; SimEngine.renderScene(E);
  } else if (E.sceneIdx < E.getScenes().length - 1) {
    E.sceneIdx++; E.stepIdx = 0; E.hintIdx = 0; E.subtitle = false; SimEngine.renderScene(E);
  } else {
    renderMatchComplete();
  }
}

// ─── MAÇ TAMAMLANDI (özel skor kartı) ───────────────────────────────────────
function renderMatchComplete() {
  const c = document.getElementById("content");
  const total = MATCH_SCENES.length;
  const done = Object.keys(matchCompleted).length;
  c.innerHTML = `
  <div style="text-align:center; padding:3rem 1rem; background:var(--card-bg); border:1px solid var(--border); border-radius:14px; max-width:520px; margin:0 auto;">
    <div style="color:var(--gold); margin-bottom:10px;">${(typeof icon === 'function') ? icon('trophy', {size:'48px'}) : '🏆'}</div>
    <div style="font-size:20px; font-weight:800; color:#185FA5; margin-bottom:8px;">${mt("completeTitle")}</div>
    <div style="font-size:13px; color:var(--text2); margin-bottom:18px; line-height:1.6;">${mt("completeMsg")}</div>
    <div style="font-size:13px; color:#3B6D11; font-weight:700; margin-bottom:24px;">✓ ${done} / ${total}</div>
    <div style="display:flex; gap:8px; justify-content:center;">
      <button onclick="matchRestart()" style="
        padding:11px 22px; font-size:13px; font-weight:600;
        background:var(--card-bg); color:#185FA5; border:1px solid #185FA5;
        border-radius:22px; cursor:pointer;
      ">${mt("redo")}</button>
      <button onclick="matchBackToIntro()" style="
        padding:11px 22px; font-size:13px; font-weight:600;
        background:#185FA5; color:#fff; border:none;
        border-radius:22px; cursor:pointer;
      ">${mt("back")}</button>
    </div>
  </div>
  `;
}
