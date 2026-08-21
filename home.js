// ─── ANA EKRAN (HOME) ────────────────────────────────────────────
// IFMA_RULES artık ifma_rules.js dosyasında tanımlı (76 kural · 6 dil)
let homeRuleIdx = Math.floor(Math.random() * ((typeof IFMA_RULES !== 'undefined' && IFMA_RULES.length) ? IFMA_RULES.length : 1));

function renderHome() {
  const c = document.getElementById("content");
  const rule = (typeof IFMA_RULES!=='undefined' && IFMA_RULES.length) ? (IFMA_RULES[homeRuleIdx] || IFMA_RULES[0]) : {en:'',tr:''};

  c.innerHTML = `
    <!-- HERO -->
    <div class="home-hero">
      <div class="home-hero-text">
        <div class="home-hero-hi">${(typeof t==='function')?t('heroHi'):'TMF MUAYTHAI · REFEREE ENGLISH'}</div>
        <div class="home-hero-title">${(typeof t==='function')?t('heroTitle'):'Hoş geldin! 🥊'}</div>
        <div class="home-hero-sub">${(typeof t==='function')?t('heroSub'):'Uluslararası müsabakalarda ihtiyacın olan İngilizceyi dinle, konuş ve pratik yap. Başlamak için bir bölüm seç.'}</div>
      </div>
      <img src="assets/images/afra-avatar.png" class="home-hero-img" alt="">
    </div>

    <!-- BÖLÜM KARTLARI -->
    <div class="home-sections">
      ${renderHomeButton("day1",   "c1", "file",   (typeof navT==='function')?navT("day1","Tartı ve Kayıt"):"Tartı ve Kayıt",   "Registration & Weigh-In")}
      ${renderHomeButton("day2",   "c2", "target", (typeof navT==='function')?navT("day2","Müsabaka Alanı"):"Müsabaka Alanı",   "Field of Play")}
      ${renderHomeButton("social", "c3", "message",(typeof navT==='function')?navT("social","Sosyal İletişim"):"Sosyal İletişim",  "Social Communication")}
    </div>

    <!-- IFMA KURAL KARTI -->
    <div class="home-rule">
      <div class="home-rule-tag">
        <span>${(typeof icon==='function')?icon('pin',{size:'11px'}):''} IFMA RULES AND REGULATIONS</span>
        <span class="home-rule-nav">
          <button type="button" onclick="homeRuleNav(-1)" aria-label="Önceki kural">‹</button>
          <span class="home-rule-count">${(homeRuleIdx+1)}/${(typeof IFMA_RULES!=='undefined'?IFMA_RULES.length:1)}</span>
          <button type="button" onclick="homeRuleNav(1)" aria-label="Sonraki kural">›</button>
        </span>
      </div>
      <div class="home-rule-en">${rule.en}</div>
      <div class="home-rule-tr">${(typeof APP_LANG!=='undefined' && rule[APP_LANG]) ? rule[APP_LANG] : (rule.tr||rule.en)}</div>
    </div>
  `;
}

// Kurallar arasında ileri/geri gezinme (rastgele değil, sıralı)
function homeRuleNav(dir){
  if(typeof IFMA_RULES==='undefined' || !IFMA_RULES.length) return;
  const n = IFMA_RULES.length;
  homeRuleIdx = ((homeRuleIdx + dir) % n + n) % n;
  renderHome();
}

function renderHomeButton(dayId, colorClass, iconName, title, subtitle) {
  return `
    <button class="home-card" onclick="homeGoTo('${dayId}')">
      <div class="home-card-ic ${colorClass}">${(typeof icon==='function')?icon(iconName,{size:'22px'}):''}</div>
      <span>
        <div class="home-card-tt">${title}</div>
        <div class="home-card-st">${subtitle}</div>
      </span>
      <span class="home-card-go">›</span>
    </button>
  `;
}

// ─── KART TIKLAMA ─────────────────────────────────────────────────
function homeGoTo(dayId) {
  isHomeActive = false;
  // Üst sekmeleri tekrar göster
  document.getElementById("day-nav").style.display = "flex";
  curDay = dayId;
  const firstL2 = NAV[dayId].l2[0];
  curL2 = firstL2.id;
  initL2(firstL2);
  buildDayNav();
  buildL2();
}

// ─── ANA SAYFAYA DÖN ──────────────────────────────────────────────
function goHome() {
  isHomeActive = true;
  homeRuleIdx = Math.floor(Math.random() * IFMA_RULES.length);
  // Üst sekmeleri gizle
  document.getElementById("day-nav").style.display = "none";
  document.getElementById("l2-nav-wrap").innerHTML = "";
  document.getElementById("l3-nav-wrap").innerHTML = "";
  document.getElementById("l4-nav-wrap").innerHTML = "";
  document.getElementById("search-wrap").style.display = "none";
  renderHome();
}
