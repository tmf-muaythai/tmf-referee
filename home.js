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

// ─── ANA EKRANI GÖSTER (Yeni Düzen) ────────────────────────────
function renderHome() {
  const c = document.getElementById("content");
  const rule = IFMA_RULES[homeRuleIdx] || IFMA_RULES[0];

  c.innerHTML = `
    <div style="display: flex; flex-direction: row; align-items: flex-start; gap: 20px; padding: 20px;">
      
      <div style="flex: 1; min-width: 0;">
        
        <div style="
          position:relative; background:var(--card-bg); border:2px solid #185FA5;
          border-radius:16px; padding:16px; box-shadow:0 4px 12px rgba(0,0,0,0.1);
          margin-bottom: 20px;
        ">
          <div style="font-size:15px; font-weight:700; color:#185FA5; margin-bottom:6px;">
            TMF Hakem İngilizcesi Eğitim Modülü
          </div>
          <div style="font-size:13px; color:var(--text); line-height:1.4;">
            Hoş geldin! Pratik yapmak istediğin bölümü aşağıdan seçebilirsin.
          </div>
        </div>

        <div style="background:var(--l3-bg); border:1px solid var(--border); border-radius:12px; padding:14px; margin-bottom:20px;">
          <div style="font-size:10px; font-weight:700; color:#185FA5; text-transform:uppercase; margin-bottom:6px;">📌 IFMA Rules and Regulatıons</div>
          <div style="font-size:13px; color:var(--text); line-height:1.45; margin-bottom:5px;">${rule.en}</div>
          <div style="font-size:12px; color:var(--text2); font-style:italic;">${rule.tr}</div>
        </div>

        <div style="display:flex; flex-direction:column; gap:10px;">
          ${renderHomeButton("day1", "📄", "Tartı ve Kayıt", "Registration & Weigh-In")}
          ${renderHomeButton("day2", "🥊", "Müsabaka Alanı", "Competition Area")}
          ${renderHomeButton("social", "💬", "Sosyal İletişim", "Social Communication")}
        </div>
      </div>

      <div style="width: 300px; display: none; @media (min-width: 768px) { display: block; }">
        <img src="assets/images/afra-avatar.png" alt="Rehber" style="width: 100%; height: auto; position: sticky; top: 20px;">
      </div>

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