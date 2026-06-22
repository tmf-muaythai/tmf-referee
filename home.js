// ─── ANA EKRAN (HOME) ────────────────────────────────────────────
// Uygulama açıldığında gösterilen karşılama ekranı.
// IFMA_RULES dizisi placeholder içerikle başlar; gerçek kurallar
// eklendiğinde bu diziyi güncellemek yeterli olacak.

const IFMA_RULES = [
  {
    en: "The referee must clearly call \"YOOT\" to stop the action and \"CHOK\" to resume the fight.",
    tr: "Hakem, aksiyonu durdurmak için net bir şekilde \"YOOT\", dövüşü devam ettirmek için \"CHOK\" komutunu vermelidir."
  },
  // Buraya yeni kurallar eklenecek — aynı format: { en: "...", tr: "..." }
];

let homeRuleIdx = Math.floor(Math.random() * IFMA_RULES.length);

// ─── ANA EKRANI GÖSTER ────────────────────────────────────────────
function renderHome() {
  const c = document.getElementById("content");
  const rule = IFMA_RULES[homeRuleIdx] || IFMA_RULES[0];

  c.innerHTML = `
    <div style="display:flex; align-items:flex-end; justify-content:center; gap:12px; margin-bottom:24px; padding-top:10px;">
      
      <div style="
        position:relative;
        background:var(--card-bg);
        border:2px solid #185FA5;
        border-radius:16px;
        padding:14px 16px;
        box-shadow:0 4px 12px rgba(0,0,0,0.1);
        flex:1;
        max-width:240px;
        z-index:2;
      ">
        <div style="
          content:''; position:absolute; right:-12px; bottom:20px;
          border-width:10px 0 10px 14px; border-style:solid;
          border-color:transparent transparent transparent #185FA5;
        "></div>
        <div style="
          content:''; position:absolute; right:-8px; bottom:22px;
          border-width:8px 0 8px 11px; border-style:solid;
          border-color:transparent transparent transparent var(--card-bg);
        "></div>

        <div style="font-size:14px; font-weight:700; color:#185FA5; margin-bottom:6px; line-height:1.3;">
          TMF Hakem İngilizcesi Eğitim Modülü
        </div>
        <div style="font-size:12px; color:var(--text); line-height:1.4;">
          Hoş geldin! Pratik yapmak istediğin bölümü aşağıdan seçebilirsin.
        </div>
      </div>

      <img src="assets/images/afra-avatar.png" alt="Rehber" style="
        width:300px; 
        height:auto; 
        object-fit:contain;
        filter: drop-shadow(0 4px 6px rgba(0,0,0,0.15));
        margin-bottom:-5px;
        z-index:1;
      ">
      
    </div>

    <div style="
      background:var(--l3-bg); border:1px solid var(--border); border-radius:12px;
      padding:14px 16px; margin:0 0 20px 0;
    ">
      <div style="font-size:10px; font-weight:700; color:#185FA5; text-transform:uppercase; letter-spacing:.5px; margin-bottom:8px;">
        📌 IFMA Rules and Regulatıons
      </div>
      <div style="font-size:13px; color:var(--text); line-height:1.55; margin-bottom:6px;">
        ${rule.en}
      </div>
      <div style="font-size:12px; color:var(--text2); line-height:1.5; font-style:italic;">
        ${rule.tr}
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap:10px;">
      
      <button onclick="homeGoTo('day1')" style="
        display:flex; align-items:center; gap:14px;
        padding:12px 16px; border-radius:14px;
        border:1px solid var(--border); background:var(--card-bg);
        cursor:pointer; text-align:left; transition:all .15s;
      ">
        <div style="width:42px; height:42px; border-radius:50%; background:#e8edf5; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:22px;">
          📄
        </div>
        <span>
          <div style="font-size:14px; font-weight:700; color:var(--text);">Tartı ve Kayıt</div>
          <div style="font-size:11px; color:var(--text2); margin-top:2px;">Registration & Weigh-In</div>
        </span>
      </button>

      <button onclick="homeGoTo('day2')" style="
        display:flex; align-items:center; gap:14px;
        padding:12px 16px; border-radius:14px;
        border:1px solid var(--border); background:var(--card-bg);
        cursor:pointer; text-align:left; transition:all .15s;
      ">
        <div style="width:42px; height:42px; border-radius:50%; background:#eaf2e6; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:22px;">
          🥊
        </div>
        <span>
          <div style="font-size:14px; font-weight:700; color:var(--text);">Müsabaka Alanı</div>
          <div style="font-size:11px; color:var(--text2); margin-top:2px;">Competition Area</div>
        </span>
      </button>

      <button onclick="homeGoTo('social')" style="
        display:flex; align-items:center; gap:14px;
        padding:12px 16px; border-radius:14px;
        border:1px solid var(--border); background:var(--card-bg);
        cursor:pointer; text-align:left; transition:all .15s;
      ">
        <div style="width:42px; height:42px; border-radius:50%; background:#fcebeb; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:22px;">
          💬
        </div>
        <span>
          <div style="font-size:14px; font-weight:700; color:var(--text);">Sosyal İletişim</div>
          <div style="font-size:11px; color:var(--text2); margin-top:2px;">Social Communication</div>
        </span>
      </button>
      
    </div>
  `;
}

// Yardımcı Fonksiyon (Kod kalabalığını azaltmak için)
function renderHomeButton(dayId, emoji, title, subtitle) {
  return `
    <button onclick="homeGoTo('${dayId}')" style="
      display:flex; align-items:center; gap:14px; padding:12px 16px; border-radius:14px;
      border:1px solid var(--border); background:var(--card-bg); cursor:pointer; text-align:left; width:100%;
    ">
      <div style="width:42px; height:42px; border-radius:50%; background:var(--l3-bg); display:flex; align-items:center; justify-content:center; font-size:22px;">${emoji}</div>
      <span>
        <div style="font-size:14px; font-weight:700; color:var(--text);">${title}</div>
        <div style="font-size:11px; color:var(--text2); margin-top:2px;">${subtitle}</div>
      </span>
    </button>
  `;
}

// ─── KART TIKLAMA — İLGİLİ ANA SEKMEYE GEÇİŞ ──────────────────────
function homeGoTo(dayId) {
  isHomeActive = false;
  curDay = dayId;
  const firstL2 = NAV[dayId].l2[0];
  curL2 = firstL2.id;
  initL2(firstL2);
  buildDayNav();
  buildL2();
}

// ─── ANA SAYFAYA DÖN (üst bardaki buton) ──────────────────────────
function goHome() {
  isHomeActive = true;
  homeRuleIdx = Math.floor(Math.random() * IFMA_RULES.length);
  document.getElementById("l2-nav-wrap").innerHTML = "";
  document.getElementById("l3-nav-wrap").innerHTML = "";
  document.getElementById("l4-nav-wrap").innerHTML = "";
  document.getElementById("search-wrap").style.display = "none";
  renderHome();
}