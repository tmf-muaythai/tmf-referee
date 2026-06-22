// ─── CÜMLE KURMA PRATİĞİ — KATEGORİ VERİSİ ─────────────────────────
const BUILDER_CATEGORIES = [
  {
    id: "registration",
    label: "Registration",
    labelTr: "Kayıt",
    scenes: [
      {
        id: 1,
        title: "Greeting and Country",
        prompt: "The team representative arrives and greets you. Greet them back and ask for their country.",
        target: "Hello welcome which country are you representing",
        words: ["hello", "welcome", "which", "country", "are", "you", "representing", "name", "city", "team"]
      },
      {
        id: 2,
        title: "Request Documents",
        prompt: "Ask the team representative to present the required documents for registration.",
        target: "Please present the required documents",
        words: ["please", "present", "the", "required", "documents", "money", "ticket", "passport"]
      },
      {
        id: 3,
        title: "Incomplete Documents Warning",
        prompt: "The documents are incomplete. Tell the representative they cannot proceed and must return later.",
        target: "Please come back after the documents are complete",
        words: ["please", "come", "back", "after", "the", "documents", "are", "complete", "now", "today", "lost"]
      },
      {
        id: 4,
        title: "Missing Medical Declaration",
        prompt: "You are checking all the documents and you notice the Athlete's medical declaration is missing.",
        target: "Athletes medical declaration is missing",
        words: ["athletes", "medical", "declaration", "is", "missing", "passport", "ready", "found"]
      },
      {
        id: 5,
        title: "Missing Non-Pregnancy Declaration",
        prompt: "You are checking all the documents and you notice the Athlete's non-pregnancy declaration is missing.",
        target: "Athletes non-pregnancy declaration is missing",
        words: ["athletes", "non-pregnancy", "declaration", "is", "missing", "medical", "ready", "complete"]
      },
      {
        id: 6,
        title: "Missing Anti-Doping Consent",
        prompt: "You are checking all the documents and you notice the Athlete's anti-doping consent is missing.",
        target: "Athletes anti-doping consent is missing",
        words: ["athletes", "anti-doping", "consent", "is", "missing", "medical", "passport", "found"]
      },
      {
        id: 7,
        title: "Missing HIV Test Result",
        prompt: "You are checking all the documents and you notice the Athlete's HIV test result is missing.",
        target: "Athletes hiv test result is missing",
        words: ["athletes", "hiv", "test", "result", "is", "missing", "medical", "ready", "complete"]
      },
      {
        id: 8,
        title: "Missing HBV Test Result",
        prompt: "You are checking all the documents and you notice the Athlete's HBV test result is missing.",
        target: "Athletes hbv test result is missing",
        words: ["athletes", "hbv", "test", "result", "is", "missing", "medical", "ready", "complete"]
      },
      {
        id: 9,
        title: "Missing HCV Test Result",
        prompt: "You are checking all the documents and you notice the Athlete's HCV test result is missing.",
        target: "Athletes hcv test result is missing",
        words: ["athletes", "hcv", "test", "result", "is", "missing", "medical", "ready", "complete"]
      }
    ]
  },
  {
    id: "cagirma",
    label: "Calling for Weigh-in",
    labelTr: "Tartıya Çağırma",
    scenes: [
      {
        id: 1,
        title: "Calling Male Athletes",
        prompt: "All preparations for the weigh-in are complete. You can call the male athletes into the weigh-in room.",
        target: "Male weigh-in starts now you can come in only one athlete please",
        words: ["male", "weigh-in", "starts", "now", "you", "can", "come", "in", "only", "one", "athlete", "please", "today", "ready", "two"]
      },
      {
        id: 2,
        title: "Calling Female Athletes",
        prompt: "All preparations for the weigh-in are complete. You can call the female athletes into the weigh-in room.",
        target: "Female weigh-in starts now you can come in only one athlete please",
        words: ["female", "weigh-in", "starts", "now", "you", "can", "come", "in", "only", "one", "athlete", "please", "today", "ready", "two"]
      },
      {
        id: 3,
        title: "Next Athlete",
        prompt: "You can call the next athlete into the weigh-in room.",
        target: "Next athlete please",
        words: ["next", "athlete", "please", "first", "last", "team"]
      },
      {
        id: 4,
        title: "Test Scale Warning",
        prompt: "The athlete asks if they can use the scale to check their weight. Tell them that this scale is only for the official weigh-in and the control scale is located in the corridor.",
        target: "This is not a test weigh-in the control scale is located in the corridor",
        words: ["this", "is", "not", "a", "test", "weigh-in", "the", "control", "scale", "located", "in", "corridor", "room", "office", "kitchen"]
      }
    ]
  },
  {
    id: "kimlik",
    label: "ID & Document",
    labelTr: "Kimlik & Belge",
    scenes: [
      {
        id: 1,
        title: "Ask for Doctor's Approval",
        prompt: "The athlete has arrived at the weigh-in room. You ask if they have already seen the doctor.",
        target: "Do you have the doctor's approval",
        words: ["do", "you", "have", "the", "doctor's", "approval", "passport", "coach", "book"]
      },
      {
        id: 2,
        title: "Request Accreditation Card",
        prompt: "Ask the athlete to show their accreditation card.",
        target: "Can I see your accreditation card",
        words: ["can", "i", "see", "your", "accreditation", "card", "passport", "book", "ticket"]
      },
      {
        id: 3,
        title: "Doctor's Approval Not Found",
        prompt: "You check the system but you cannot see the doctor's approval.",
        target: "I cannot see the doctor's approval",
        words: ["i", "cannot", "see", "the", "doctor's", "approval", "passport", "card", "book"]
      },
      {
        id: 4,
        title: "See Doctor First Warning",
        prompt: "An athlete arrives at the weigh-in room without seeing the doctor first. Tell them what to do.",
        target: "You must see the doctor first",
        words: ["you", "must", "see", "the", "doctor", "first", "coach", "later", "next"]
      },
      {
        id: 5,
        title: "Ask for Country",
        prompt: "Ask the athlete which country they are representing.",
        target: "Which country are you representing",
        words: ["which", "country", "are", "you", "representing", "name", "city", "team"]
      },
      {
        id: 6,
        title: "Request Passport",
        prompt: "Ask the athlete to show their passports.",
        target: "Please present your passport",
        words: ["please", "present", "your", "passport", "card", "book", "ticket"]
      },
      {
        id: 7,
        title: "Request Athlete's Book",
        prompt: "Ask the athlete to show their athlete's book.",
        target: "Please present your athlete's book",
        words: ["please", "present", "your", "athlete's", "book", "passport", "card", "ticket"]
      },
      {
        id: 8,
        title: "Athlete's Book Return",
        prompt: "The athlete asks if they will get their athlete's book back.",
        target: "You will collect your athlete's book after the contest",
        words: ["you", "will", "collect", "your", "athlete's", "book", "after", "the", "contest", "now", "today", "before"]
      }
    ]
  },
  {
    id: "giyim",
    label: "Dress & Preparation",
    labelTr: "Giyim & Hazırlık",
    scenes: [
      {
        id: 1,
        title: "General Preparation",
        prompt: "The athlete has presented all their documents. Now, tell them to prepare for the weigh-in.",
        target: "Please remove socks and any extra clothing including jewelry",
        words: ["please", "remove", "socks", "and", "any", "extra", "clothing", "including", "jewelry", "shoes", "gloves", "hat"]
      },
      {
        id: 2,
        title: "Thick Undergarments",
        prompt: "The athlete comes to the weigh-in wearing thick undergarments. Remind the athlete of the rule.",
        target: "Only lightweight undergarments are allowed",
        words: ["only", "lightweight", "undergarments", "are", "allowed", "shoes", "socks", "jackets"]
      },
      {
        id: 3,
        title: "Socks Warning",
        prompt: "The athlete comes to the weigh-in wearing socks. Remind the athlete of the rule.",
        target: "Remove your socks please",
        words: ["remove", "your", "socks", "please", "shoes", "gloves", "jacket"]
      },
      {
        id: 4,
        title: "Jewelry Warning",
        prompt: "The athlete comes to the weigh-in wearing jewelry. Remind the athlete of the rule.",
        target: "Remove your jewelry please",
        words: ["remove", "your", "jewelry", "please", "socks", "shoes", "hat"]
      },
      {
        id: 5,
        title: "Necklace Warning",
        prompt: "The athlete comes to the weigh-in wearing a necklace. Warn the athlete.",
        target: "Please take off your necklace",
        words: ["please", "take", "off", "your", "necklace", "earrings", "glasses", "ring"]
      },
      {
        id: 6,
        title: "Piercing Warning",
        prompt: "The athlete comes to the weigh-in wearing a piercing. Remind the athlete of the rule.",
        target: "Please remove your piercing",
        words: ["please", "remove", "your", "piercing", "necklace", "earrings", "glasses"]
      },
      {
        id: 7,
        title: "Earrings Warning",
        prompt: "The athlete comes to the weigh-in wearing earrings. Tell the athlete to remove them.",
        target: "Please take off your earrings",
        words: ["please", "take", "off", "your", "earrings", "necklace", "glasses", "ring"]
      },
      {
        id: 8,
        title: "Glasses Warning",
        prompt: "The athlete comes to the weigh-in wearing glasses. Tell the athlete to remove them.",
        target: "Please remove your glasses",
        words: ["please", "remove", "your", "glasses", "necklace", "earrings", "piercing"]
      },
      {
        id: 9,
        title: "Removing Undergarments",
        prompt: "The athlete states they have been training to lose weight and their undergarments are heavy with sweat. They want to weigh without them. Remind them of the rule.",
        target: "Please do not remove your undergarments",
        words: ["please", "do", "not", "remove", "your", "undergarments", "socks", "shoes", "jacket"]
      },
      {
        id: 10,
        title: "Beard Warning",
        prompt: "The athlete comes to the weigh-in with a beard. Remind the athlete of the rule.",
        target: "You must be shaved before the weigh-in",
        words: ["you", "must", "be", "shaved", "before", "the", "weigh-in", "after", "today", "ready"]
      },
      {
        id: 11,
        title: "Trimming Toenails",
        prompt: "The athlete comes to the weigh-in with long toenails. Tell the athlete to trim their nails.",
        target: "Please trim your toenails before the weigh-in",
        words: ["please", "trim", "your", "toenails", "before", "the", "weigh-in", "after", "today", "now"]
      }
    ]
  },
  {
    id: "tartim",
    label: "Weighing",
    labelTr: "Tartım",
    scenes: [
      {
        id: 1,
        title: "Call to the Scale",
        prompt: "The athlete has handed in their documents and finished preparing. Call the athlete to the scale.",
        target: "Please come to the scale",
        words: ["please", "come", "to", "the", "scale", "doctor", "room", "table"]
      },
      {
        id: 2,
        title: "Step on the Scale",
        prompt: "You have checked the athlete's general physical condition. The athlete is ready to be weighed.",
        target: "You can step on the scale",
        words: ["you", "can", "step", "on", "the", "scale", "must", "table", "floor"]
      },
      {
        id: 3,
        title: "Single Weigh-in Rule",
        prompt: "The athlete asks if they can do a test weigh-in before the official one. Remind them of the rule.",
        target: "You may only step on the scale once",
        words: ["you", "may", "only", "step", "on", "the", "scale", "once", "twice", "today", "now"]
      },
      {
        id: 4,
        title: "Over the Limit",
        prompt: "The athlete's weight on the scale is above their weight class limit.",
        target: "You are over the weight limit",
        words: ["you", "are", "over", "the", "weight", "limit", "under", "ready", "done"]
      },
      {
        id: 5,
        title: "Under the Limit",
        prompt: "The athlete's weight on the scale is below their weight class limit.",
        target: "You are under the weight limit",
        words: ["you", "are", "under", "the", "weight", "limit", "over", "ready", "done"]
      },
      {
        id: 6,
        title: "Disqualified",
        prompt: "The athlete's weight is over the limit, so they cannot take part in the match. Tell the athlete the decision.",
        target: "You are disqualified due to weight",
        words: ["you", "are", "disqualified", "due", "to", "weight", "ready", "approved", "done"]
      },
      {
        id: 7,
        title: "Weigh-in Completed",
        prompt: "The athlete's weigh-in process is finished. Wish them good luck.",
        target: "All done good luck",
        words: ["all", "done", "good", "luck", "finished", "ready", "next"]
      }
    ]
  },
  {
    id: "sonuc",
    label: "Weigh-in Results",
    labelTr: "Tartı Sonucu",
    scenes: [
      {
        id: 1,
        title: "Over the Limit Notice",
        prompt: "The athlete's weight on the scale is above their weight class limit. Tell the athlete.",
        target: "You are over the weight limit",
        words: ["you", "are", "over", "the", "weight", "limit", "under", "ready", "done"]
      },
      {
        id: 2,
        title: "Under the Limit Notice",
        prompt: "The athlete's weight on the scale is below their weight class limit. Tell the athlete.",
        target: "You are under the weight limit",
        words: ["you", "are", "under", "the", "weight", "limit", "over", "ready", "done"]
      },
      {
        id: 3,
        title: "Disqualification Decision",
        prompt: "The athlete's weight is over the limit, so they cannot take part in the match. Tell them the decision.",
        target: "You are disqualified due to weight",
        words: ["you", "are", "disqualified", "due", "to", "weight", "ready", "approved", "done"]
      },
      {
        id: 4,
        title: "Weigh-in Farewell",
        prompt: "The athlete's weigh-in process is finished. Wish them good luck.",
        target: "All done good luck",
        words: ["all", "done", "good", "luck", "finished", "ready", "next"]
      }
    ]
  },
  {
    id: "rapor",
    label: "Final Report",
    labelTr: "Tartı Sonu Raporu",
    scenes: [
      {
        id: 1,
        title: "Total Athletes",
        prompt: "The weigh-in is successfully finished. It is time to report the total number of weighed athletes to the Administration Jury.",
        target: "The total number of athletes weighed is",
        words: ["the", "total", "number", "of", "athletes", "weighed", "is", "today", "ready", "amount"]
      },
      {
        id: 2,
        title: "Total Disqualifications",
        prompt: "Report the total number of disqualifications to the Administration Jury.",
        target: "The total number of disqualifications is",
        words: ["the", "total", "number", "of", "disqualifications", "is", "today", "ready", "amount"]
      },
      {
        id: 3,
        title: "Total Walkovers",
        prompt: "Report the total number of walkovers to the Administration Jury.",
        target: "The total number of walkovers is",
        words: ["the", "total", "number", "of", "walkovers", "is", "today", "ready", "amount"]
      }
    ]
  },
  {
    id: "sistem",
    label: "System Errors",
    labelTr: "Sistemsel Sorunlar",
    scenes: [
      {
        id: 1,
        title: "Internet Problem",
        prompt: "You are trying to log into the system, but the internet connection is not working.",
        target: "I am having internet connection issues can you assist me please",
        words: ["i", "am", "having", "internet", "connection", "issues", "can", "you", "assist", "me", "please", "today", "ready", "now"]
      },
      {
        id: 2,
        title: "List Not Up to Date",
        prompt: "You notice that the data you entered earlier does not appear in the system.",
        target: "The list is not up to date",
        words: ["the", "list", "is", "not", "up", "to", "date", "ready", "open", "new"]
      },
      {
        id: 3,
        title: "List Not Loading",
        prompt: "You clicked the link, but you cannot view the list.",
        target: "I cannot view the list",
        words: ["i", "cannot", "view", "the", "list", "open", "page", "today"]
      },
      {
        id: 4,
        title: "Cannot Enter Data",
        prompt: "You tried to enter the weigh-in result into the system, but it will not let you.",
        target: "I cannot enter data into the list",
        words: ["i", "cannot", "enter", "data", "into", "the", "list", "open", "page", "today"]
      },
      {
        id: 5,
        title: "Name Not on the List",
        prompt: "Athlete is registered, but you cannot see their name on the list.",
        target: "The athlete's name does not appear on the list",
        words: ["the", "athlete's", "name", "does", "not", "appear", "on", "the", "list", "today", "open", "new"]
      },
      {
        id: 6,
        title: "Incorrect Name",
        prompt: "The athlete's name was entered incorrectly. Afra Uz was entered as Dilek Uz by mistake.",
        target: "The athlete's name is incorrect",
        words: ["the", "athlete's", "name", "is", "incorrect", "correct", "ready", "today"]
      },
      {
        id: 7,
        title: "Incorrect Weight Class",
        prompt: "The athlete's weight class was entered incorrectly. It was entered as 51kg instead of 48kg by mistake.",
        target: "The athlete's weight class is incorrect",
        words: ["the", "athlete's", "weight", "class", "is", "incorrect", "correct", "ready", "today"]
      },
      {
        id: 8,
        title: "Incorrect Country",
        prompt: "The athlete's country was entered as Germany instead of Türkiye by mistake.",
        target: "The athlete's country is incorrect",
        words: ["the", "athlete's", "country", "is", "incorrect", "correct", "ready", "today"]
      },
      {
        id: 9,
        title: "Incorrect Gender",
        prompt: "You notice that a female athlete was registered as male in the system.",
        target: "The athlete's gender is incorrect",
        words: ["the", "athlete's", "gender", "is", "incorrect", "correct", "ready", "today"]
      }
    ]
  },
  {
    id: "baskul",
    label: "Scale Issues",
    labelTr: "Baskül Sorunları",
    scenes: [
      {
        id: 1,
        title: "Scale Under-Reading",
        prompt: "You are checking the scales. You weighed 60kg on two other scales, but this scale shows 58kg. Report the situation.",
        target: "The scale is under-reading",
        words: ["the", "scale", "is", "under-reading", "ready", "broken", "today"]
      },
      {
        id: 2,
        title: "Scale Over-Reading",
        prompt: "You are checking the scales. You weighed 60kg on two other scales, but this scale shows 62kg. Report the situation.",
        target: "The scale is over-reading",
        words: ["the", "scale", "is", "over-reading", "ready", "broken", "today"]
      },
      {
        id: 3,
        title: "Scale Not Working",
        prompt: "You step on the scale, but it does not show any number.",
        target: "The scale is not working",
        words: ["the", "scale", "is", "not", "working", "ready", "broken", "today"]
      },
      {
        id: 4,
        title: "Broken Scale",
        prompt: "You notice that the scale is physically damaged. Report this to the officials.",
        target: "The scale is broken",
        words: ["the", "scale", "is", "broken", "ready", "working", "today"]
      },
      {
        id: 5,
        title: "Request to Check Scale",
        prompt: "You are preparing for the weigh-in. Ask your colleague to check the scales.",
        target: "Could you please check the scales",
        words: ["could", "you", "please", "check", "the", "scales", "today", "ready", "now"]
      },
      {
        id: 6,
        title: "Scale Replacement",
        prompt: "The scale is broken. Ask the officials to replace it with a new one.",
        target: "Can we change the scale",
        words: ["can", "we", "change", "the", "scale", "today", "ready", "now"]
      }
    ]
  }
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

// ─── 3x3 GRID MENÜ ────────────────────────────────────────────────
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

  let mixed = scene.words.map((w, i) => ({ id: i, text: w }));
  mixed.sort(() => Math.random() - 0.5);

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

      <img src="assets/images/soru-avatar.png" style="width: 80px; height: auto; flex-shrink: 0;" alt="Sen">

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

  const word = builderAvailableWords.splice(wordIdx, 1)[0];
  builderSelectedWords.push(word);
  builderCheckState = "idle";
  renderBuilder();
}

// ─── KELİME ÇIKAR (Yukarıdan Aşağıya) ─────────────────────────────
function builderRemoveWord(id) {
  if (builderCheckState === "success") return;

  const wordIdx = builderSelectedWords.findIndex(w => w.id === id);
  if (wordIdx === -1) return;

  const word = builderSelectedWords.splice(wordIdx, 1)[0];
  builderAvailableWords.push(word);
  builderCheckState = "idle";
  renderBuilder();
}

// ─── CEVABI KONTROL ET ────────────────────────────────────────────
function builderCheck() {
  const category = BUILDER_CATEGORIES[builderCategoryIdx];
  const scene = category.scenes[builderSceneIdx];

  const userSentence = builderSelectedWords.map(w => w.text).join(" ").toLowerCase().replace(/[^a-z0-9\s]/g, "").trim();
  const targetSentence = scene.target.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim();

  if (userSentence === targetSentence) {
    builderCheckState = "success";
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
    builderInitScene();
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