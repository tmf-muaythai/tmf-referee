/* ==========================================================================
   app.js — Uygulama mantığı (navigasyon, render, quiz, ses, telaffuz).
   index.html içindeki inline script'ten ayrıldı (Faz 1). data.js'ten SONRA yüklenir.
   ========================================================================== */
  function toggleDark() {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('dark-toggle');
    const isDark = document.body.classList.contains('dark');
    const ic = (typeof icon==='function') ? icon : (()=> "");
    const lbl = (typeof t==='function') ? (isDark ? t('day') : t('night')) : (isDark ? 'Gündüz' : 'Gece');
    btn.innerHTML = ic(isDark ? 'sun' : 'moon') + ' ' + lbl;
    localStorage.setItem('darkMode', isDark);
  }

// QR Kod Açma ve Kapatma Fonksiyonları
function openQR() {
  // QR'ı yerel olarak (dış servis olmadan) üret — offline çalışır
  const holder = document.getElementById('qr-holder');
  if (holder && !holder.dataset.rendered && typeof qrcode !== 'undefined') {
    try {
      const qr = qrcode(0, 'M');
      qr.addData('https://tmf-muaythai.github.io/tmf-referee/');
      qr.make();
      holder.innerHTML = qr.createSvgTag({ cellSize: 5, margin: 2, scalable: true });
      const svg = holder.querySelector('svg');
      if (svg) {
        svg.setAttribute('width', '200');
        svg.setAttribute('height', '200');
        svg.style.width = '200px';
        svg.style.height = '200px';
      }
      holder.dataset.rendered = '1';
    } catch (e) {
      console.warn('QR üretilemedi:', e);
    }
  }
  document.getElementById('qrModal').style.display = 'flex';
}
function closeQR(e) {
  if(e.target.id === 'qrModal') {
    document.getElementById('qrModal').style.display = 'none';
  }
}

// 📲 PWA Uygulamayı Yükleme Kodları (Tam Bu Araya Ekledik)
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const installBtn = document.getElementById('pwa-install-btn');
  if (installBtn) installBtn.style.display = 'inline-flex';
});

function triggerInstall() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      document.getElementById('pwa-install-btn').style.display = 'none';
    }
    deferredPrompt = null;
  });
}

window.addEventListener('appinstalled', () => {
  const installBtn = document.getElementById('pwa-install-btn');
  if (installBtn) installBtn.style.display = 'none';
  deferredPrompt = null;
});

if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark');
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('dark-toggle');
    const ic = (typeof icon==='function') ? icon : (()=> "");
    if (btn) btn.innerHTML = ic('sun') + ' ' + ((typeof t==='function')?t('day'):'Gündüz');
  });
}
// ─── 1. GLOBAL STATE DEFINITIONS ─────────────────────────────────

// 💾 1. SAYFA AÇILDIĞINDA ESKİ KAYIT KONTROLÜ
document.addEventListener("DOMContentLoaded", () => {
  const savedIdx = localStorage.getItem('tmf_qIdx');
  const resumeBtn = document.getElementById('resume-quiz-btn');
  if (savedIdx && parseInt(savedIdx) > 0) {
  if (resumeBtn) {
    resumeBtn.style.cssText = 'display:block !important; background:#28a745; color:white; border:none; padding:8px 20px; border-radius:10px; font-weight:bold; font-size:13px; cursor:pointer; margin:8px auto; width:fit-content;';
  }
}
});

// 💾 2. TAM KORUMALI RESUME FONKSİYONU
window.resumeQuiz = function() {
  const savedIdx = localStorage.getItem('tmf_qIdx');
  const savedSec = localStorage.getItem('tmf_curSec');
  const savedList = localStorage.getItem('tmf_shuffledQuiz');

  if (savedIdx && savedSec) {
    qIdx = parseInt(savedIdx);
    score = parseInt(localStorage.getItem('tmf_score')) || 0;
    curSec = savedSec;

    // 🔥 EN KRİTİK NOKTA: Eski karıştırılmış listeyi harfiyen geri yüklüyoruz!
    if (savedList) {
      shuffledQuiz = JSON.parse(savedList);
    } else {
      shuffledQuiz = investorsFindListByCode();
    }

    const resumeBtn = document.getElementById('resume-quiz-btn');
    if (resumeBtn) resumeBtn.style.display = 'none';
    
    if (typeof renderQuiz === "function") {
      renderQuiz(); 
    }
  }
};

// 🎵 MERKEZİ SES YÖNETİCİSİ (HATA ÖNLEYİCİ KALKAN)
const AudioManager = {
  currentAudio: null,

  play: function(audioPath, speed = 1.0) {
    // 1. Eğer halihazırda çalan bir ses varsa güvenli bir şekilde durdur
    this.stop();

    // 2. Yeni ses objesini oluştur ve hızı ayarla
    this.currentAudio = new Audio(audioPath);
    this.currentAudio.playbackRate = speed;

    // 3. Tarayıcının asenkron play() sözünü (Promise) yakala ve kontrol et
    const playPromise = this.currentAudio.play();

    if (playPromise !== undefined) {
      playPromise.catch(error => {
        // Tarayıcının otomatik engellemelerini veya hızlı tıklama hatalarını sessizce yönetir
        console.warn("Ses oynatımı tarayıcı veya kullanıcı tarafından kesildi/engellendi:", error.message);
      });
    }
  },

  stop: function() {
    if (this.currentAudio) {
      try {
        // Sesi durdur ve zamanı başa sar
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (e) {
        console.error("Ses durdurulurken bir hata oluştu:", e);
      }
      // Belleği temizle
      this.currentAudio = null;
    }
  }
};

let curDay = "day1";
let curL2  = "registration";
let curL3  = null;
let curL4  = null;
let curSec = "kayit";
let isHomeActive = true; 
let qIdx = 0, score = 0, answered = false, shuffledQuiz = [];
let scoredQuestions = {}; // skorun tekrar sayılmaması için yanıtlanan soruların anahtarları

// ─── 2. CORE AUDIO AND UTILITY FUNCTIONS ─────────────────────────
function isScenario(id) {
  return id && (id === "senaryo" || id.startsWith("senaryo_") || id.startsWith("d2_senaryo") || id.startsWith("d2_senaryo") || id === "sim_day2" );
}

function playElevenLabsVoice(fileCode, selectElementId) {
  if (!fileCode) return;
  
  const speedSelect = document.getElementById(selectElementId);
  const targetSpeed = speedSelect ? parseFloat(speedSelect.value) : 1.0;

  const cleanCode = fileCode.replace(".mp3", "");
  const audioPath = `assets/audio/${cleanCode}.mp3`;
  
  // Artık tüm yükü AudioManager üstleniyor
  AudioManager.play(audioPath, targetSpeed);
}

function fallbackSpeak(txt, targetSpeed) {
  if (!window.speechSynthesis) return;
  let cleanText = txt;
  if(txt.includes('_')) {
     const currentList = investorsFindListByCode();
     if(currentList && currentList.length) {
        const indexStr = txt.split('_').pop();
        const numericIdx = parseInt(indexStr) - 1;
        if(currentList[numericIdx]) {
           cleanText = txt.includes('short') && currentList[numericIdx].alt ? currentList[numericIdx].alt : currentList[currentList[numericIdx] ? numericIdx : 0].en;
        }
     }
  }
  const u = new SpeechSynthesisUtterance(cleanText);
  u.lang = "en-US"; u.rate = targetSpeed;
  speechSynthesis.cancel(); speechSynthesis.speak(u);
}

function investorsFindListByCode() {
  const allP = Object.assign({}, PHRASES, (window.DAY2_PHRASES || {}));
  return allP[curSec] || [];
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function resetQuiz() { 
  qIdx = 0; 
  score = 0; 
  shuffledQuiz = []; 
}

// ─── 3. NAV BUILDERS & SWITCHERS ──────────────────────────────────
// Özel içerik sekmeleri (senaryo/simülasyon/cümle kurma) ayırt edici ikon alır
function navIconName(id) {
  if (!id) return null;
  if (id.indexOf("senaryo") > -1) return "play";
  if (id.indexOf("sim_") === 0)   return "mic";
  if (id.indexOf("builder") === 0) return "puzzle2";
  return null;
}
function navBtnLabel(n) {
  const lbl = (typeof navLabel === "function") ? navLabel(n) : n.label;
  const icn = navIconName(n.id);
  return (icn && typeof icon === "function") ? (icon(icn, {size:"0.95em"}) + " " + lbl) : lbl;
}

function buildDayNav() {
  document.getElementById("day-nav").innerHTML =
    Object.entries(NAV).map(([id, d]) =>
      `<button class="day-btn${curDay===id?" active":""}" onclick="switchDay('${id}')">${(typeof navT==='function')?navT(id,d.label):d.label}</button>`
    ).join("");
}

function buildL2() {
  const day = NAV[curDay];
  document.getElementById("l2-nav-wrap").innerHTML =
    `<div class="l2-nav">${day.l2.map(n =>
      `<button class="l2-btn${curL2===n.id?" active":""}" onclick="switchL2('${n.id}')">${navBtnLabel(n)}</button>`
    ).join("")}</div>`;
}

function buildL3() {
  const l2node = getL2Node();
  if (!l2node || l2node.isQuiz || !l2node.l3 || l2node.l3.length === 0) {
    document.getElementById("l3-nav-wrap").innerHTML = "";
    document.getElementById("l4-nav-wrap").innerHTML = "";
    return;
  }
  document.getElementById("l3-nav-wrap").innerHTML =
    `<div class="l3-nav">${l2node.l3.map(n =>
      `<button class="l3-btn${curL3===n.id?" active":""}" onclick="switchL3('${n.id}')">${navBtnLabel(n)}</button>`
    ).join("")}</div>`;
  buildL4();
}

function buildL4() {
  const l3node = getL3Node();
  if (!l3node || l3node.leaf || !l3node.l4 || l3node.l4.length === 0) {
    document.getElementById("l4-nav-wrap").innerHTML = "";
    return;
  }
  document.getElementById("l4-nav-wrap").innerHTML =
    `<div class="l4-nav">${l3node.l4.map(n =>
      `<button class="l4-btn${curL4===n.id?" active":""}" onclick="switchL4('${n.id}')">${navBtnLabel(n)}</button>`
    ).join("")}</div>`;
}

function getL2Node() { return NAV[curDay].l2.find(n => n.id === curL2); }
function getL3Node() {
  const l2 = getL2Node(); if (!l2 || !l2.l3) return null;
  return l2.l3.find(n => n.id === curL3);
}

function switchDay(id) {
  curDay = id;
  const activeQuizSave = localStorage.getItem('tmf_qIdx');
  if (!activeQuizSave || parseInt(activeQuizSave) === 0) clearQuizState();
  resetQuiz();
  const firstL2 = NAV[id].l2[0]; curL2 = firstL2.id;
  initL2(firstL2); buildDayNav(); buildL2();
}

function switchL2(id) {
  curL2 = id;
  const activeQuizSave = localStorage.getItem('tmf_qIdx');
  if (!activeQuizSave || parseInt(activeQuizSave) === 0) clearQuizState();
  resetQuiz();
  const l2 = getL2Node(); if (l2) initL2(l2);
  buildL2();
}

function initL2(l2) {
  if (!l2) return;
  if (l2.isQuiz) {
    curL3 = null; curL4 = null; curSec = l2.quizId;
    document.getElementById("l3-nav-wrap").innerHTML = "";
    document.getElementById("l4-nav-wrap").innerHTML = "";
    render(); return;
  }
  if (!l2.l3 || l2.l3.length === 0) {
    curL3 = null; curL4 = null; curSec = l2.id;
    document.getElementById("l3-nav-wrap").innerHTML = "";
    document.getElementById("l4-nav-wrap").innerHTML = "";
    render(); return;
  }
  const firstL3 = l2.l3[0]; curL3 = firstL3.id;
  initL3(firstL3); buildL3();
}

function switchL3(id) {
  curL3 = id;
  const activeQuizSave = localStorage.getItem('tmf_qIdx');
  if (!activeQuizSave || parseInt(activeQuizSave) === 0) clearQuizState();
  resetQuiz();
  const l3 = getL3Node(); initL3(l3);
  buildL3();
}

function initL3(l3) {
  if (!l3) return;
  if (l3.leaf) {
    curL4 = null; curSec = l3.id;
    document.getElementById("l4-nav-wrap").innerHTML = "";
    render(); return;
  }
  if (l3.l4 && l3.l4.length > 0) {
    const firstL4 = l3.l4[0]; curL4 = firstL4.id; curSec = firstL4.id;
    buildL4(); render(); return;
  }
  curL4 = null; curSec = l3.id;
  render();
}

function switchL4(id) {
  curL4 = id; curSec = id;
  const activeQuizSave = localStorage.getItem('tmf_qIdx');
  if (!activeQuizSave || parseInt(activeQuizSave) === 0) clearQuizState();
  resetQuiz();
  buildL4(); render();
}

// ─── 4. RENDERING ENGINE ──────────────────────────────────────────
function render() {
  const searchWrap = document.getElementById('search-wrap');
  const resumeBtn = document.getElementById('resume-quiz-btn');
  const searchInput = document.getElementById('search-input');
  
  if (searchWrap) {
    // Arama kutusu her sekmede içeriğin hemen üstünde görünür
    searchWrap.style.display = 'block';
  }
  
  // 🧼 Yeni bir menüye tıklandığı an hem input alanını sıfırla hem de eski filtreleri bellekten uçur
  if (searchInput) {
    searchInput.value = ''; 
  }
  
  if (resumeBtn) resumeBtn.style.display = 'none';
  if (curSec === "sim_kayit") renderSimulation(); 
  else if (curSec === "sim_day2") renderSimDay2();
  else if (curSec === "sim_match") renderSimMatch();
  else if (curSec.indexOf("builder_") === 0) renderBuilder();
  else if (curSec === "senaryo_kayit") renderQuiz();
  else if (isScenario(curSec)) renderQuiz();
  else renderPhrases();
}

function searchPhrases(query) {
  const c = document.getElementById("content");
  if (!query.trim()) {
    // 🧹 Arama çubuğu boşaltılırsa, o anki aktif bölümü doğru şekilde yeniden çiz
    if (curSec === "sim_kayit") renderSimulation();
    else if (curSec === "sim_day2") renderSimDay2();
    else if (curSec === "sim_match") renderSimMatch();
    else if (curSec.indexOf("builder_") === 0) renderBuilder();
    else if (isScenario(curSec)) renderQuiz();
    else renderPhrases();
    return;
  }
  
  const q = query.toLowerCase();
  
  // 🌍 TÜM UYGULAMAYI TARA: Sadece bulunulan bölümü değil, PHRASES ve DAY2_PHRASES içindeki her şeyi birleştiriyoruz
  const allP = Object.assign({}, PHRASES, (window.DAY2_PHRASES || {}));
  let filtered = [];
  
  // Bütün alt bölümleri tek tek dönerek eşleşen kelimeleri havuzda topla
  Object.keys(allP).forEach(sectionKey => {
    allP[sectionKey].forEach(p => {
      const matchEn = p.en && p.en.toLowerCase().includes(q);
      const matchTr = p.tr && p.tr.toLowerCase().includes(q);
      const matchPh = p.ph && p.ph.toLowerCase().includes(q);
      
      if (matchEn || matchTr || matchPh) {
        // İleride ses dosyasının doğru tetiklenmesi için hangi bölüme ait olduğunu ve indexini karta gömüyoruz
        filtered.push({
          phrase: p,
          secCode: sectionKey,
          originalIdx: allP[sectionKey].indexOf(p)
        });
      }
    });
  });

  if (!filtered.length) {
    c.innerHTML = `<div class="empty-msg">${(typeof icon==='function')?icon('search'):''} "${query}" için hiçbir kategoride sonuç bulunamadı.</div>`;
    return;
  }
  
c.innerHTML = filtered.map((item, idx) => {
    const p = item.phrase;
    const hasAlt = p.alt && p.alt.trim() !== "";
    const phonShort = p.phs && p.phs.trim() !== "" ? p.phs : "";
    
    const tamSesKodu = `${item.secCode}_${item.originalIdx + 1}`;
    const kisaSesKodu = `${item.secCode}_${item.originalIdx + 1}_short`;
    const selectId = `speed_sel_search_${idx}`;
    const micTamId = `mic_btn_search_tam_${idx}`;
    const micKisaId = `mic_btn_search_kisa_${idx}`;
    const resultId = `result_search_${idx}`;
    
    return `
    <div class="phrase-card">
      <div class="p-en">${p.en}</div>
      ${hasAlt ? `<div class="p-alt">↳ Kısa: ${p.alt}</div>` : ""}
      <div class="p-ph">${p.ph || ""}</div>
      ${hasAlt && phonShort ? `<div class="p-ph" style="color:#7ab0d4">↳ ${phonShort}</div>` : ""}
      <div class="p-tr">${p.tr}</div>
      <div class="btn-row">
        <button class="sbtn" onclick="playElevenLabsVoice('${tamSesKodu}', '${selectId}')">🔊 Tam</button>
        ${hasAlt ? `<button class="sbtn-alt" onclick="playElevenLabsVoice('${kisaSesKodu}', '${selectId}')">🔊 Kısa</button>` : ""}
        <div class="card-speed-wrapper">
          <span class="card-speed-label">HIZ:</span>
          <select class="card-speed-select" id="${selectId}">
            <option value="0.6">0.6x (Tane Tane)</option>
            <option value="0.8">0.8x (Dengeli)</option>
            <option value="1.0" selected>1.0x (Normal)</option>
          </select>
        </div>
      </div>
      <div style="margin-top:12px; background:var(--l3-bg); border-radius:10px; padding:10px; border:1px solid var(--border)">
        <div style="font-size:11px; font-weight:600; color:#185FA5; margin-bottom:6px;">🗣️ Telaffuz Pratiği Yap</div>
        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          <button class="sbtn" id="${micTamId}" onclick="startPhraseSpeech('${encodeURIComponent(p.en)}', '${micTamId}', '${resultId}')">🎤 Tam Versiyonu Söyle</button>
          ${hasAlt ? `<button class="sbtn-alt" id="${micKisaId}" onclick="startPhraseSpeech('${encodeURIComponent(p.alt)}', '${micKisaId}', '${resultId}')">🎤 Kısa Versiyonu Söyle</button>` : ""}
        </div>
        <div id="${resultId}" style="margin-top:6px; font-size:11px; min-height:16px;"></div>
      </div>
    </div>`;
  }).join("");
}  

function renderPhrases() {
  const allP = Object.assign({}, PHRASES, (window.DAY2_PHRASES || {}));
  const list = allP[curSec] || [];
  const c = document.getElementById("content");
  if (!list.length) {
    c.innerHTML = `<div class="empty-msg">Bu bölüm yakında eklenecek. 🔜</div>`; return;
  }
  
  c.innerHTML = list.map((p, idx) => {
    const loc = (typeof phraseLoc === "function") ? phraseLoc(curSec, idx, p) : { tr: p.tr, ph: p.ph, alt: p.alt };
    const hasAlt = p.alt && p.alt.trim() !== "";
    const tamSesKodu = `${curSec}_${idx + 1}`;
    const kisaSesKodu = `${curSec}_${idx + 1}_short`;
    const selectId = `speed_sel_${curSec}_${idx}`;

    return `
    <div class="phrase-card">
      <div class="p-en">${p.en}</div>
      ${hasAlt ? `<div class="p-alt">↳ ${t('kisaLabel')} ${loc.alt}</div>` : ""}
      <div class="p-ph">${loc.ph || ""}</div>
      <div class="p-tr">${loc.tr}</div>
      
      <div class="pc-tools">
        <div class="pc-group">
          ${hasAlt ? `<span class="pc-glabel">${(typeof icon==='function')?icon('volume'):''} ${t('dinle')}</span>
          <div class="seg listen">
            <button onclick="playElevenLabsVoice('${tamSesKodu}', '${selectId}')">${t('tam')}</button>
            <button onclick="playElevenLabsVoice('${kisaSesKodu}', '${selectId}')">${t('kisa')}</button>
          </div>` : `<div class="seg listen">
            <button onclick="playElevenLabsVoice('${tamSesKodu}', '${selectId}')">${(typeof icon==='function')?icon('volume'):''} ${t('dinle')}</button>
          </div>`}
          <div class="card-speed-wrapper">
            <span class="card-speed-label">${t('hiz')}</span>
            <select class="card-speed-select" id="${selectId}">
              <option value="0.6">0.6x</option>
              <option value="0.8">0.8x</option>
              <option value="1.0" selected>1.0x</option>
            </select>
          </div>
        </div>

        <div class="pc-group">
          ${hasAlt ? `<span class="pc-glabel">${(typeof icon==='function')?icon('mic'):''} ${t('soyle')}</span>
          <div class="seg speak">
            <button id="mic_btn_tam_${curSec}_${idx}" onclick="startPhraseSpeech('${encodeURIComponent(p.en)}', 'mic_btn_tam_${curSec}_${idx}', 'result_${curSec}_${idx}')">${t('tam')}</button>
            <button id="mic_btn_kisa_${curSec}_${idx}" onclick="startPhraseSpeech('${encodeURIComponent(p.alt)}', 'mic_btn_kisa_${curSec}_${idx}', 'result_${curSec}_${idx}')">${t('kisa')}</button>
          </div>` : `<div class="seg speak">
            <button id="mic_btn_tam_${curSec}_${idx}" onclick="startPhraseSpeech('${encodeURIComponent(p.en)}', 'mic_btn_tam_${curSec}_${idx}', 'result_${curSec}_${idx}')">${(typeof icon==='function')?icon('mic'):''} ${t('soyle')}</button>
          </div>`}
        </div>
      </div>
      <div class="pc-result" id="result_${curSec}_${idx}"></div>
    </div>`;
  }).join("");

  // Tayca kısmı artık fonksiyonun İÇİNDE ve doğru kapalı
  if (curSec === "d2_tayca") {
    c.innerHTML += `
    <div style="margin-top:16px;background:#fff;border:1px solid #e8e8e8;border-radius:12px;padding:16px">
      <div style="font-size:13px;font-weight:600;color:#185FA5;margin-bottom:12px">${(typeof icon==='function')?icon("clock"):""} Tayca Sayma Pratiği</div>
      <div id="tc-display" style="background:#f0f4f9;border-radius:10px;padding:24px;text-align:center;min-height:160px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:10px">
        <div id="tc-num" style="font-size:64px;font-weight:600;color:#185FA5;line-height:1">—</div>
        <div id="tc-thai" style="font-size:24px;font-weight:600;color:#1a1a1a;margin-top:8px">Başlamak için ▶ bas</div>
        <div id="tc-phonetic" style="font-size:14px;color:#4a90c4;margin-top:4px"></div>
        <div id="tc-meaning" style="font-size:12px;color:#888;margin-top:2px"></div>
      </div>
      <div style="height:4px;background:#ddd;border-radius:2px;margin-bottom:12px;overflow:hidden">
        <div id="tc-fill" style="height:100%;width:0%;background:#185FA5;border-radius:2px;transition:width 0.05s linear"></div>
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
        <button id="tc-start" onclick="tcToggle()" class="sbtn" style="background:#185FA5;color:#fff;border-color:#185FA5">${(typeof icon==='function')?icon("play"):""} Başlat</button>
        <button onclick="tcReset()" class="sbtn">${(typeof icon==='function')?icon("rotateCcw"):""} Sıfırla</button>
        <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#555">
          <input type="checkbox" id="tc-loop"> Döngü
        </label>
      </div>
    </div>`;
  }
}

  const TC_DATA = [
    {num:1,thai:"NUENG",ph:"Nıng",tr:"Bir"},
    {num:2,thai:"SONG", ph:"Song",tr:"İki"},
    {num:3,thai:"SAAM", ph:"Saam",tr:"Üç"},
    {num:4,thai:"SII",  ph:"Sii", tr:"Dört"},
    {num:5,thai:"HAH",  ph:"Haa", tr:"Beş"},
    {num:6,thai:"HOK",  ph:"Hok", tr:"Altı"},
    {num:7,thai:"JED",  ph:"Cet", tr:"Yedi"},
    {num:8,thai:"BAED", ph:"Pet", tr:"Sekiz"},
    {num:9,thai:"KOUW", ph:"Kav", tr:"Dokuz"},
    {num:10,thai:"SIB", ph:"Sip", tr:"On"},
  ];

  let tcIdx=0, tcRunning=false, tcTimer=null, tcProgTimer=null, tcElapsed=0;

window.tcToggle = function(){
  if(tcRunning){
    clearInterval(tcProgTimer);
    tcRunning=false;
    document.getElementById('tc-start').textContent='▶ Devam';
  } else {
    if(tcIdx >= TC_DATA.length) tcIdx=0;   // ← bitti ise başa dön
    tcRunning=true;
    document.getElementById('tc-start').textContent='⏸ Durdur';
    tcTick();
  }
};

window.tcReset = function(){
  // 🔇 Sıfırla butonuna basıldığı an çalan Tayca sesini anında susturuyoruz
  AudioManager.stop();

  clearInterval(tcTimer); clearInterval(tcProgTimer);
  tcRunning=false; tcIdx=0;
  document.getElementById('tc-num').textContent='—';
  document.getElementById('tc-thai').textContent='Başlamak için ▶ bas';
  document.getElementById('tc-phonetic').textContent='';
  document.getElementById('tc-meaning').textContent='';
  document.getElementById('tc-fill').style.width='0%';
  document.getElementById('tc-start').textContent='▶ Başlat';
  window.tcToggle();
}; // ← Kaçırdığımız kapanış parantezi ve noktalı virgül tam olarak burada olmalı

function tcTick(){
  if(tcIdx >= TC_DATA.length){
    clearInterval(tcProgTimer);
    tcRunning=false;
    document.getElementById('tc-fill').style.width='100%';
    document.getElementById('tc-start').textContent='▶ Başlat';
    if(document.getElementById('tc-loop').checked){
      setTimeout(()=>{tcIdx=0; window.tcToggle();}, 800);
    }
    return;
  }
  const d = TC_DATA[tcIdx];
  document.getElementById('tc-num').textContent = d.num;
  document.getElementById('tc-thai').textContent = d.thai;
  document.getElementById('tc-phonetic').textContent = d.ph;
  document.getElementById('tc-meaning').textContent = d.tr;
  tcIdx++;
  tcElapsed = 0;
  document.getElementById('tc-fill').style.width = '0%';
  clearInterval(tcProgTimer);

  tcProgTimer = setInterval(()=>{
    tcElapsed += 50;
    document.getElementById('tc-fill').style.width = Math.min(100, Math.round(tcElapsed/1000*100))+'%';
    if(tcElapsed >= 1000){
      clearInterval(tcProgTimer);
      if(tcRunning) tcTick();
    }
  }, 50);
}



function renderQuiz() {
    const c = document.getElementById("content");

    const savedIdx = localStorage.getItem('tmf_qIdx');
    const savedSec = localStorage.getItem('tmf_curSec');
    const savedQuizList = localStorage.getItem('tmf_shuffledQuiz');

    // 💡 YENİ KONTROL: Tıkladığımız sekme ile hafızadaki sekme FARKLIYSA hafızayı sıfırla!
    if (savedSec && savedSec !== curSec) {
        localStorage.removeItem('tmf_qIdx');
        localStorage.removeItem('tmf_curSec');
        localStorage.removeItem('tmf_shuffledQuiz');
        localStorage.removeItem('tmf_score');
        qIdx = 0;
        score = 0;
        shuffledQuiz = [];
        scoredQuestions = {};
    }
    // Aynı sekmedeysek ve yarım kalan bir ilerleme varsa hafızayı yükle
    else if (savedIdx && parseInt(savedIdx) > 0) {
        qIdx = parseInt(savedIdx);
        score = parseInt(localStorage.getItem('tmf_score')) || 0;
        if (savedQuizList) {
            shuffledQuiz = JSON.parse(savedQuizList);
        }
    }

    let activeQuiz = window.DAY2_QUIZ;
    if (curSec === "senaryo" || curSec === "senaryo_kayit") activeQuiz = window.QUIZ_TARTI || [];
    else if (curSec === "d2_senaryo_jury") activeQuiz = window.QUIZ_JURY || [];
    else if (curSec === "d2_senaryo_judge") activeQuiz = window.QUIZ_JUDGE || [];
    else if (curSec === "d2_senaryo_timekeeper") activeQuiz = window.QUIZ_TIMEKEEPER || [];
    else if (curSec === "d2_senaryo_announcer") activeQuiz = window.QUIZ_ANNOUNCER || [];
    else if (curSec === "d2_senaryo_equipment") activeQuiz = window.QUIZ_EQUIPMENT || [];
    else if (curSec === "d2_senaryo_referee") activeQuiz = window.QUIZ_REFEREE || [];

    // Eğer şu anki liste boşsa karıştır ve yükle
    if (!shuffledQuiz || shuffledQuiz.length === 0) {
        shuffledQuiz = shuffle(activeQuiz);
    }

    if (qIdx < shuffledQuiz.length) {
        saveQuizState(); 
    }

    if (qIdx >= shuffledQuiz.length) { showDone(); return; }
        

  const q = shuffledQuiz[qIdx];
  const qloc = (typeof quizLoc === "function") ? quizLoc(q) : { tr: q.tr, q: q.q };
  const sOpts = shuffle(q.opts.map((o,i) => ({o, orig:i})));
  const newC = sOpts.findIndex(x => x.orig === q.c);
  answered = false;
  const origIdx = shuffledQuiz.indexOf(q);
const quizSesKodu = `quiz_${curSec}_${origIdx + 1}`;
  const quizSelectId = `speed_sel_quiz_${curSec}_${qIdx}`;

  c.innerHTML = `
    <div class="q-bar">
      <div class="q-pill">${t('qScore')} <b id="sc">${parseInt(localStorage.getItem('tmf_score')) || 0}</b></div>
      <div class="q-pill">${t('qFrage')} <b>${qIdx+1}</b>/${shuffledQuiz.length}</div>

      ${qIdx > 0 ? `<button class="q-pill" onclick="prevQ()" style="background: var(--card-bg); color: #185FA5; border: 1px solid var(--border); cursor: pointer; border-radius: 20px; padding: 4px 10px; font-weight: 600; margin-left: 5px;">${(typeof t==='function')?t('simPrev'):"← Önceki"}</button>` : ""}
      <button class="q-pill" onclick="if(confirm('${t('qResetConfirm')}')) restartQuiz();" style="display:inline-flex; align-items:center; gap:4px; background: var(--surface-2); color: var(--text2); border: 1px solid var(--border); cursor: pointer; border-radius: 20px; padding: 4px 10px; font-weight: 600; margin-left: 5px;">
        ${(typeof icon==='function')?icon('rotateCcw'):''} ${t('qReset')}
      </button>
      <div class="prog-wrap"><div class="prog-fill" style="width:${Math.round(qIdx/shuffledQuiz.length*100)}%"></div></div>
    </div>
    <div class="qcard">
      <div class="qhead"><div class="qnum">${t('qSoru')} ${qIdx+1} / ${shuffledQuiz.length}</div></div>
      <div class="qbody">
        <div class="sit-en">${q.en || q.sit}</div>
        <div class="sit-tr">${qloc.tr || t('qScenarioFb')}</div>
        <div class="qt">${qloc.q || t('qPromptDefault')}</div>
        <div class="opts">
  ${sOpts.map((x,i) =>
    `<button class="opt" data-idx="${i}" data-correct="${newC}" data-ex="${encodeURIComponent(q.ex)}" data-ans="${encodeURIComponent(q.opts[q.c])}" data-ses="${q.audioId}" data-cat="${q.category}">${x.o}</button>`
  ).join("")}
</div>
        <div class="fb" id="fb"></div>
        <button class="nxt" id="nxt" onclick="nextQ()">${qIdx < shuffledQuiz.length-1 ? t('qNext') : t('qResults')}</button>
      </div>
    </div>`;

 c.querySelectorAll(".opt").forEach(btn => btn.addEventListener("click", function() {
  checkAns(+this.dataset.idx, +this.dataset.correct,
    decodeURIComponent(this.dataset.ex), decodeURIComponent(this.dataset.ans), this.dataset.ses, quizSelectId, this.dataset.cat);
}));
  

  if (savedIdx && parseInt(savedIdx) > 0 && savedSec === curSec) {
      qIdx = parseInt(savedIdx);
      if (savedQuizList) shuffledQuiz = JSON.parse(savedQuizList);
  }
}

function getCategoryNameById(id) {
  const map = {
    // 1. GÜN: TARTI VE KAYIT
    "kayit": "Kayıt & Belge",
    "cagirma": "Tartıya Çağırma",
    "kimlik": "Kimlik & Belge",
    "giyim": "Giyim & Hazırlık",
    "tartim": "Tartım Süreci",
    "sonuc": "Tartı Sonucu",
    "rapor": "Tartı Sonu Raporu",
    "sistem": "Teknik: Sistemsel Sorunlar",
    "baskul": "Teknik: Baskül Sorunları",
    "sosyal": "Sosyal İletişim",

    // 2. GÜN: JÜRİ (JURY)
    "d2_juri_rap": "Jüri: Raporlama",
    "d2_juri_diy": "Jüri: Genel İletişim",
    "d2_juri_gov": "Jüri: Görevlendirme",
    "d2_hakem": "Jüri: Hakem Sağlık",
    "d2_ring": "Ring İçi Durumlar",

    // 2. GÜN: EKİPMAN (EQUIPMENT)
    "d2_ekipman": "Ekipman Kontrolü",
    "d2_kose": "Köşe Görevlisi İletişimi",

    // 2. GÜN: ORTA HAKEM (REFEREE)
    "d2_orta": "Orta Hakem: Komutlar",
    "d2_uyari": "Orta Hakem: Uyarılar",
    "d2_ceza": "Orta Hakem: Cezalar",
    "d2_karar": "Orta Hakem: Kararlar",
    "d2_doktor": "Orta Hakem: Doktor Müdahalesi",
    "d2_tayca": "Tayca Komut & Sayma",

    // 2. GÜN: YAN HAKEM (JUDGE)
    "d2_yan": "Yan Hakem Kuralları",
    "d2_skor": "Skorlama Sistemi",

    // 2. GÜN: ZAMAN & ANONS (TIMEKEEPER & ANNOUNCER)
    "d2_zaman": "Zaman Hakemi (Timekeeper)",
    "d2_anons": "Anons Hakemi (Announcer)"
  };

  const trName = map[id] || (typeof t === "function" ? t('catFallback') : "İlgili Bölüm");
  return (typeof catNameLoc === "function") ? catNameLoc(id, trName) : trName;
}


function checkAns(idx, correct, ex, ans, sesKodu, quizSelectId, categoryId) {
  if (answered) return; answered = true;
  // Aynı soruyu (örn. "Önceki" ile geri gelip) tekrar doğru yanıtlarsa skoru bir daha artırma
  const scoreKey = curSec + ':' + qIdx;
  if (idx === correct && !scoredQuestions[scoreKey]) {
      score++;
      scoredQuestions[scoreKey] = true;
      localStorage.setItem('tmf_score', score.toString());
  }
  document.querySelectorAll(".opt").forEach((b,i) => {
    if (i===correct) b.classList.add("reveal");
    else if (i===idx && idx!==correct) b.classList.add("wrong");
  });
  
  const fb = document.getElementById("fb");
  let fbContent = `${ex}`;

  // 💡 HATA OLDUĞUNDA ÖNERİ MESAJI EKLE
  if (idx !== correct && categoryId && categoryId !== "undefined") {
    const categoryName = getCategoryNameById(categoryId);
    fbContent += `
      <div style="margin-top:12px; padding:10px; background:#fff8e1; border-left:4px solid #ffc107; border-radius:6px;">
        <p style="font-size:11px; color:#856404; margin:0;">
          <strong>${(typeof icon==='function')?icon('bulb'):''} ${t('qHintLabel')}</strong> ${t('qHintPre')} <em>${categoryName}</em>${t('qHintPost')}
        </p>
      </div>`;
  }

  fb.className = idx===correct ? "fb show ok" : "fb show no";
  fb.innerHTML = fbContent + `
  <div style="display:flex; align-items:center; gap:8px; margin-top:6px;">
    <div class="card-speed-wrapper">
      <span class="card-speed-label">${t('hiz')}:</span>
      <select class="card-speed-select" id="${quizSelectId}">
        <option value="0.6">0.6x (Tane Tane)</option>
        <option value="0.8">0.8x (Dengeli)</option>
        <option value="1.0" selected>1.0x (Normal)</option>
      </select>
    </div>
  </div>
  ${idx===correct ? `
  <div style="margin-top:12px;background:var(--l3-bg);border-radius:10px;padding:12px;border:1px solid var(--border)">
    <div style="font-size:12px;font-weight:600;color:#185FA5;margin-bottom:10px">${(typeof icon==='function')?icon('headphones'):''} ${t('qPron')}</div>
    <div style="font-size:11px;color:var(--text2);margin-bottom:8px">${t('qListenFirst')}</div>
    <button class="sbtn" id="sp-ans">${(typeof icon==='function')?icon('volume'):''} ${t('qHearAns')}</button>
    <div style="font-size:11px;color:var(--text2);margin:10px 0 8px">${t('qNowSay')}</div>
    <button class="sbtn" id="mic-btn" onclick="startSpeech('${encodeURIComponent(ans)}', '${quizSelectId}')">${(typeof icon==='function')?icon('mic'):''} ${t('qOpenMic')}</button>
    <div id="speech-result" style="margin-top:8px;font-size:12px;min-height:20px"></div>
  </div>` : ""}`;
    
  document.getElementById("nxt").classList.add("show");
  const sb = document.getElementById("sp-ans");
  if (sb) sb.addEventListener("click", () => playElevenLabsVoice(sesKodu, quizSelectId));
}

function startSpeech(encodedAns, quizSelectId) {
    const ans = decodeURIComponent(encodedAns).toLowerCase();
    const btn = document.getElementById('mic-btn');
    const result = document.getElementById('speech-result');
    
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        result.innerHTML = '<span style="color:#A32D2D">' + t('sNoMic') + '</span>';
        return;
    }

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SR();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    btn.innerHTML = ((typeof icon==='function')?icon('dot',{fill:true,size:'0.7em'}):'') + ' ' + t('sListening');
    btn.style.background = '#FCEBEB';
    btn.style.borderColor = '#A32D2D';
    btn.style.color = '#A32D2D';
    result.innerHTML = '';

    recognition.start();

    recognition.onresult = function(e) {
        const said = e.results[0][0].transcript.toLowerCase();
        result.innerHTML = `<span style="color:#555">${t('sYouSaid')} "<em>${said}</em>"</span><br>`;

        const cleanSaid = said;
        const keywords = ans.replace(/[^a-z\s]/g, '').split(' ').filter(w => w.length > 3);
        const matched = keywords.filter(w => {
            if (cleanSaid.includes(w)) return true;
            return said.split(' ').some(sw => {
                if (Math.abs(sw.length - w.length) > 2) return false;
                let diff = 0;
                for (let i = 0; i < Math.min(sw.length, w.length); i++) { if (sw[i] !== w[i]) diff++; }
                return diff <= 2;
            });
        });
        const pct = Math.round(matched.length / keywords.length * 100);

        if (pct >= 50) {
            result.innerHTML += `<span style="color:#3B6D11">${t('sGreat').replace('{p}', pct)}</span>`;
        } else if (pct >= 25) {
            result.innerHTML += `<span style="color:#BA7517">${t('sClose').replace('{p}', pct)}</span>`;
        } else {
            result.innerHTML += `<span style="color:#A32D2D">${t('sLow').replace('{p}', pct)}</span>`;
        }

        btn.innerHTML = ((typeof icon==='function')?icon('mic'):'') + ' ' + t('sTryAgain');
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.style.color = '';
    };

    recognition.onerror = function(event) {
        btn.innerHTML = ((typeof icon==='function')?icon('mic'):'') + ' ' + t('qOpenMic');
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.style.color = '';
        result.innerHTML = '<span style="color:#A32D2D">' + t('sError') + event.error + '</span>';
    };
}

function startPhraseSpeech(encodedTargetText, btnId, resultId) {
    const targetText = decodeURIComponent(encodedTargetText).toLowerCase();
    const btn = document.getElementById(btnId);
    const result = document.getElementById(resultId);
    
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        result.innerHTML = '<span style="color:#A32D2D">' + t('sNoMic') + '</span>';
        return;
    }

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SR();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    const originalText = btn.textContent;
    const originalBg = btn.style.background;
    const originalColor = btn.style.color;
    const originalBorder = btn.style.borderColor;

    btn.innerHTML = ((typeof icon==='function')?icon('dot',{fill:true,size:'0.7em'}):'') + ' ' + t('sListening');
    btn.style.background = '#FCEBEB';
    btn.style.borderColor = '#A32D2D';
    btn.style.color = '#A32D2D';
    result.innerHTML = '';

    recognition.start();

    recognition.onresult = function(e) {
        let cleanSaid = e.results[0][0].transcript.toLowerCase();
        const dictionary = {
            "assets office": "athlete", "assets": "athlete", "head guard": "headguard",
            "headgard": "headguard", "gumshield": "gum shield", "waikru": "wai kru"
        };
        Object.keys(dictionary).forEach(key => { if (cleanSaid.includes(key)) cleanSaid = cleanSaid.replace(key, dictionary[key]); });
        
        result.innerHTML = `<span style="color:var(--text2)">${t('sYouSaid')} "<em>${cleanSaid}</em>"</span><br>`;

        const keywords = targetText.replace(/[^a-z\s]/g, '').split(' ').filter(w => w.length > 3);

        if(keywords.length === 0) {
            if(cleanSaid.includes(targetText) || Math.abs(cleanSaid.length - targetText.length) <= 2) {
                result.innerHTML += `<span style="color:#3B6D11; font-weight:600;">${t('sPerfect')}</span>`;
            } else {
                result.innerHTML += `<span style="color:#A32D2D; font-weight:600;">${t('sRetry')}</span>`;
            }
        } else {
            const matched = keywords.filter(w => {
                if (cleanSaid.includes(w)) return true;
                if (w === 'athlete' && (cleanSaid.includes('assets') || cleanSaid.includes('athlet'))) return true;
                return cleanSaid.split(' ').some(sw => {
                    if (Math.abs(sw.length - w.length) > 2) return false;
                    let diff = 0;
                    for (let i = 0; i < Math.min(sw.length, w.length); i++) { if (sw[i] !== w[i]) diff++; }
                    return diff <= 2;
                });
            });

            const pct = Math.round(matched.length / keywords.length * 100);
            if (pct >= 50) result.innerHTML += `<span style="color:#3B6D11; font-weight:600;">${t('sGreat').replace('{p}', pct)}</span>`;
            else if (pct >= 25) result.innerHTML += `<span style="color:#BA7517; font-weight:600;">${t('sClose').replace('{p}', pct)}</span>`;
            else result.innerHTML += `<span style="color:#A32D2D; font-weight:600;">${t('sLowRetry').replace('{p}', pct)}</span>`;
        }
        btn.textContent = originalText;
        btn.style.background = originalBg;
        btn.style.color = originalColor;
        btn.style.borderColor = originalBorder;
    };

    recognition.onerror = function(event) {
        btn.textContent = originalText;
        btn.style.background = originalBg;
        btn.style.color = originalColor;
        btn.style.borderColor = originalBorder;
        result.innerHTML = '<span style="color:#A32D2D; font-weight: 500;">' + t('sError') + '(' + event.error + ')</span>';
    };

    recognition.onend = function() {
        btn.textContent = originalText;
        btn.style.background = originalBg;
        btn.style.color = originalColor;
        btn.style.borderColor = originalBorder;
    };
}

function nextQ() {
  qIdx++;
  saveQuizState(); // 💾 Sonraki soruya geçildiğinde güncel soru numarasını ve skoru hafızaya kaydediyoruz
  renderQuiz();
}

function prevQ() {
  if (qIdx <= 0) return;
  qIdx--;
  answered = false;
  saveQuizState();
  renderQuiz();
}

function showDone() {
  clearQuizState(); // 🧼 Quiz başarıyla bittiği için hafızayı temizliyoruz (ertesi gün sıfırdan başlasın)
  const pct = Math.round(score/shuffledQuiz.length*100);
  document.getElementById("content").innerHTML = `
    <div class="done-box">
      <div class="done-pct">${pct}%</div>
      <div class="done-sub">${shuffledQuiz.length} ${t('qDoneMid')} <strong>${score}</strong> ${t('qDoneEnd')}</div>
      <button class="rbtn" onclick="restartQuiz()">${(typeof icon==='function')?icon('rotateCcw'):''} ${t('qRestart')}</button>
    </div>`;
}

function restartQuiz() {
  qIdx = 0;
  score = 0;
  shuffledQuiz = [];
  scoredQuestions = {};
  clearQuizState(); // 🧼 "Tekrar Başla" butonuna basıldığında da hafızayı sıfırlıyoruz
  renderQuiz();
}

function saveQuizState() {
  localStorage.setItem('tmf_qIdx', qIdx.toString());
  localStorage.setItem('tmf_score', score.toString());
  localStorage.setItem('tmf_curSec', curSec);
  localStorage.setItem('tmf_shuffledQuiz', JSON.stringify(shuffledQuiz));
}

function clearQuizState() {
  localStorage.removeItem('tmf_qIdx');
  localStorage.removeItem('tmf_score');
  localStorage.removeItem('tmf_curSec');
  localStorage.removeItem('tmf_shuffledQuiz');
}

