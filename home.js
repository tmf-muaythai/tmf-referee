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

function renderHome() {
  const c = document.getElementById("content");
  const rule = IFMA_RULES[homeRuleIdx] || IFMA_RULES[0];

  c.innerHTML = `
    <div style="padding: 20px; max-width: 850px; margin: 0 auto;">
      
      <div style="display: flex; gap: 30px; align-items: flex-start; justify-content: center;">
        
        <div style="width: 380px; display: flex; flex-direction: column; gap: 15px;">
          
          <div style="position: relative; background: #185FA5; color: white; padding: 20px; border-radius: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
            <div style="font-weight: 700; margin-bottom: 5px;">TMF Hakem İngilizcesi Eğitim Modülü</div>
            <div style="font-size: 13px; opacity: 0.9;">Hoş geldin! Pratik yapmak istediğin bölümü seç.</div>
            <div style="position: absolute; bottom: -10px; left: 30px; width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 10px solid #185FA5;"></div>
          </div>

          <div style="display:flex; flex-direction:column; gap:10px;"> 
            ${renderHomeButton("day1", "📄", "Tartı ve Kayıt", "Registration & Weigh-In")}
            ${renderHomeButton("day2", "🥊", "Müsabaka Alanı", "Competition Area")}
            ${renderHomeButton("social", "💬", "Sosyal İletişim", "Social Communication")}
          </div>
        </div>

        <div style="width: 320px; margin-top: 20px;"> 
          <img src="assets/images/afra-avatar.png" style="width: 100%; height: auto; filter: drop-shadow(0 5px 15px rgba(0,0,0,0.3));">
        </div>
      </div>

      <div style="margin-top: 25px; background: #1a1d23; border: 1px solid #30363d; border-radius: 12px; padding: 18px;">
        <div style="font-size: 9px; font-weight: 700; color: #58a6ff; text-transform: uppercase; margin-bottom: 6px;">📌 IFMA Rules and Regulatıons</div>
        <div style="font-size: 13px; color: #c9d1d9; line-height: 1.5;">${rule.en}</div>
        <div style="font-size: 12px; color: #8b949e; font-style: italic; margin-top: 4px;">${rule.tr}</div>
      </div>
    </div>
  `;
}

// Sekmeleri biraz daha küçük ve şık hale getirmek için buton fonksiyonu güncellemesi
function renderHomeButton(dayId, emoji, title, subtitle) {
  return `
    <button onclick="homeGoTo('${dayId}')" style="
      display:flex; align-items:center; gap:12px; padding:10px 14px; border-radius:12px;
      border:1px solid #30363d; background: #161b22; cursor:pointer; text-align:left; width:100%; transition: 0.2s;
    ">
      <div style="width:36px; height:36px; background:#0d1117; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:18px;">${emoji}</div>
      <span>
        <div style="font-size:13px; font-weight:700; color:#e6edf3;">${title}</div>
        <div style="font-size:10px; color:#8b949e;">${subtitle}</div>
      </span>
    </button>
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