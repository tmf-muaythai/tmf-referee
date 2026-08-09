/* ==========================================================================
   data.js — Uygulama verisi (NAV menü ağacı, PHRASES cümleleri, QUIZ_TARTI).
   index.html içindeki inline script'ten ayrıldı (Faz 1). app.js'ten ÖNCE yüklenir.
   ========================================================================== */
// ─── 5. NAVIGATION TREE DATA STRUCTURE ─────────────────────────────
const NAV = {
  day1: {
    label: "Tartı ve Kayıt",
    l2: [
      {
        id: "registration", label: "Kayıt (Registration)",
        l3: [ { id: "kayit", label: "Kayıt & Belge (Registration & Documents)", leaf: true },]
      },
      {
        id: "weighin", label: "Tartı (Weigh-In)",
        l3: [
          {
            id: "weighin_process", label: "Tartım Süreci (Weigh-In Process)",
            l4: [
              { id: "cagirma", label: "Tartıya Çağırma (Calling for Weigh-In)", leaf: true },
              { id: "kimlik",  label: "Kimlik & Belge (ID & Documents)", leaf: true },
              { id: "giyim",   label: "Giyim & Hazırlık (Dress & Preparation)", leaf: true },
              { id: "tartim",  label: "Tartım (Weighing)", leaf: true },
              { id: "sonuc",   label: "Tartı Sonucu (Weigh-In Results)", leaf: true },
              { id: "rapor",   label: "Tartı Sonu Raporu (Final Report)", leaf: true }
            ]
          },
          {
            id: "weighin_tech", label: "Teknik Sorunlar (Technical Issues)",
            l4: [
              { id: "sistem", label: "Sistemsel Sorunlar (System Errors)", leaf: true },
              { id: "baskul", label: "Baskül Sorunları (Scale Issues)", leaf: true }
            ]
          }, 
        ]
      },
      {
        id: "social", label: "Sosyal İletişim (Socializing)",
        l3: [ { id: "sosyal", label: "Sosyal İletişim", leaf: true } ]
      },
      {
        id: "senaryo",  label: "Senaryo Pratiği",
        isQuiz: true, quizId: "senaryo"
      },
      { id: "sim_kayit", label: "Sesli Simülasyon", isQuiz: true, quizId: "sim_kayit" },
      { id: "builder_kayit", label: "Cümle Kurma Pratiği", isQuiz: true, quizId: "builder_kayit" },
    ]
 },
  
  day2: {
    label: "Müsabaka Alanı",
    l2: [
      {
        id: "jury", label: "Jury",
        l3: [
          { id: "d2_juri_rap", label: "Raporlama (Reporting)", leaf: true },
          { id: "d2_juri_diy", label: "Genel İletişim (Communication)", leaf: true },
          { id: "d2_juri_gov", label: "Görevlendirme (Assignment)", leaf: true },
          { id: "d2_hakem",    label: "Hakem Sağlık (Referee Health)", leaf: true },
          { id: "d2_ring",     label: "Ring", leaf: true },
          { id: "d2_senaryo_jury", label: "Senaryo Pratiği", leaf: true },
        ]
      },
      {
        id: "equipment", label: "Equipment",
        l3: [
          { id: "d2_ekipman", label: "Ekipman Kontrolü (Equipment Check)", leaf: true },
          { id: "d2_kose",    label: "Köşe Görevlisi (Second)", leaf: true },
          { id: "d2_senaryo_equipment", label: "Senaryo Pratiği", leaf: true },
        ]
      },
      {
        id: "referee", label: "Referee",
        l3: [
          { id: "d2_orta",   label: "Komutlar (Referee Commands)", leaf: true },
          { id: "d2_uyari",  label: "Uyarılar (Cautions)", leaf: true },
          { id: "d2_ceza",   label: "Cezalar (Warnings)", leaf: true },
          { id: "d2_karar",  label: "Kararlar (Decisions)", leaf: true },
          { id: "d2_doktor", label: "Doktor (Doctor)", leaf: true },
          { id: "d2_tayca",  label: "Tayca Komut & Sayma (Thai Command & Count)", leaf: true },
          { id: "d2_senaryo_referee", label: "Senaryo Pratiği", leaf: true },
        ]
      },
      {
        id: "judge", label: "Judge",
        l3: [
          { id: "d2_yan",  label: "Yan Hakem (Judge)", leaf: true },
          { id: "d2_skor", label: "Skorlama (Scoring System)", leaf: true },
          { id: "d2_senaryo_judge", label: "Senaryo Pratiği", leaf: true },
        ]
      },
      {
        id: "timekeeper", label: "Timekeeper",
        l3: [
          { id: "d2_zaman", label: "Zaman Hakemi (Timekeeper)", leaf: true },
          { id: "d2_senaryo_timekeeper", label: "Senaryo Pratiği", leaf: true },
        ]
      },
      {
        id: "announcer", label: "Announcer",
        l3: [
          { id: "d2_anons", label: "Anons Hakemi (Announcer)", leaf: true },
          { id: "d2_senaryo_announcer", label: "Senaryo Pratiği", leaf: true },
        ]
      },
      { id: "sim_day2", label: "Sesli Simülasyon", isQuiz: true, quizId: "sim_day2" },
      { id: "builder_day2", label: "Cümle Kurma Pratiği", isQuiz: true, quizId: "builder_day2" },
    ]
  },
  social: {
  label: "Sosyal İletişim",
  l2: [
    { id: "s_selamlasma", label: "Selamlaşma (Greetings & Small Talk)", l3: [] },
    { id: "s_tanitma",    label: "Kendini Tanıtma (Introduction & Networking)", l3: [] },
    { id: "s_ulasim",     label: "Ulaşım & Yemek (Transport & Meals)", l3: [] },
    { id: "builder_social", label: "Cümle Kurma Pratiği", isQuiz: true, quizId: "builder_social" },
  ]
}
};

// ─── PHRASES DATA ──────────────────────────────────────────────────
const PHRASES = {
  kayit: [
    { en: "Hello, welcome. Which country are you representing?", alt: "Welcome! Your country?", ph: "Helo, velkam. Vic kantri ar yu reprizenting?", tr: "Merhaba, hoş geldiniz. Hangi ülkeyi temsil ediyorsunuz?" },
    { en: "Please present the required documents.", alt: "Required documents, please.", ph: "Pliz prezent di rikuayırd dokümants.", tr: "Lütfen gerekli belgeleri gösterin." },
    { en: "Please present your passports.", alt: "Passports, please.", ph: "Pliz prezent yor pasports.", tr: "Lütfen pasaportlarınızı gösterin." },
    { en: "Please come back after the documents are complete.", alt: "Come back when documents are ready.", ph: "Pliz kam bek aftır di dokümants ar komplis.", tr: "Belgelerinizi tamamladıktan sonra lütfen tekrar gelin." },
    { en: "Athlete's medical declaration is missing.", alt: "Medical declaration missing.", ph: "Etlits medikıl deklareysın iz mising.", tr: "Sporcunun tıbbi beyan formu eksik." },
    { en: "Athlete's non-pregnancy declaration is missing.", alt: "Non-pregnancy declaration missing.", ph: "Etlits non pregnınsi deklareysın iz mising.", tr: "Sporcunun hamile olmama beyanı eksik." },
    { en: "Athlete's anti-doping consent is missing.", alt: "Anti-doping consent missing.", ph: "Etlits anti doping konsent iz mising.", tr: "Sporcunun anti-doping onayı eksik." },
    { en: "Athlete's HIV test result is missing.", alt: "HIV result missing.", ph: "Etlits eytc ay vi test rizalt iz mising.", tr: "Sporcunun HIV kan testi sonucu eksik." },
    { en: "Athlete's HBV test result is missing.", alt: "HBV result missing.", ph: "Etlits eyc bi vi test rizalt iz mising.", tr: "Sporcunun HBV kan testi sonucu eksik." },
    { en: "Athlete's HCV test result is missing.", alt: "HCV result missing.", ph: "Etlits eyc si vi test rizalt iz mising.", tr: "Sporcunun HCV kan testi sonucu eksik." },
  ],
  cagirma: [
    { en: "Male weigh-in starts now. You can come in. Only one athlete please!", alt: "Males, please come in — one at a time.", ph: "Meyl vey in starts nav. Yu kan kam in. Onli van etlit pliz!", tr: "Erkek tartısı şimdi başlıyor. İçeri gelebilirsiniz. Sadece bir sporcu lütfen." },
    { en: "Female weigh-in starts now. You can come in. Only one athlete please!", alt: "Females, please come in — one at a time.", ph: "Fimeyl vey in starts nav. Yu kan kam in. Onli van etlit pliz!", tr: "Kadın tartısı şimdi başlıyor. İçeri gelebilirsiniz. Sadece bir sporcu lütfen." },
    { en: "Next athlete, please.", alt: "Next, please.", ph: "Nekst etlit, pliz.", tr: "Sıradaki sporcu, lütfen." },
    { en: "This is not a test weigh-in. The control scale is located in the corridor.", alt: "Official weigh-in only. Test scale is in the corridor.", ph: "Dis iz not a test vey in. Di kontrol skeyl iz lokeytid in di koridor.", tr: "Bu bir deneme tartısı değildir. Deneme tartısı koridorda yer almaktadır." },
  ],
  kimlik: [
    { en: "Do you have the doctor's approval?", alt: "Doctor's approval?", ph: "Du yu hev di doktırz apruvıl?", tr: "Doktor onayınız var mı?" },
    { en: "Can I see your accreditation card?", alt: "Accreditation card, please.", ph: "Kan ay si yor akrediteysın kard?", tr: "Akreditasyon kartınızı görebilir miyim?" },
    { en: "You must see the doctor first.", alt: "Doctor check first, please.", ph: "Yu mast si di doktır först.", tr: "Önce doktora görünmelisiniz." },
    { en: "I cannot see the doctor's approval.", alt: "Doctor's approval is missing.", ph: "Ay kennot si di doktırz apruvıl.", tr: "Doktor onayını göremiyorum." },
    { en: "Please present your passport. Can I see your passport?", alt: "Passport, please.", ph: "Pliz prezent yor pasport.", tr: "Lütfen pasaportunuzu gösterin." },
    { en: "Which country are you representing?", alt: "Your country? Which country?", ph: "Vic kantri ar yu reprizenting?", tr: "Hangi ülkeyi temsil ediyorsunuz?" },
    { en: "Please present your athlete's book. Can I see your athlete's book?", alt: "Athlete's book, please.", ph: "Pliz prezent yor etlits buk.", tr: "Lütfen sporcu kitapçığınızı gösterin." },
    { en: "You will collect your athlete's book after the contest.", alt: "We'll return it after the contest.", ph: "Yu vil kolekt yor etlits buk aftır di kontest.", tr: "Müsabaka sonrası kitapçığınızı alacaksınız." },
  ],
  giyim: [
    { en: "Please remove socks and any extra clothing. Including jewelry.", alt: "Socks and jewelry off, please.", ph: "Pliz rimuv soks end eni ekstra kloding. İnkluding cuılri.", tr: "Lütfen çoraplarınızı ve fazladan kıyafetleri çıkarın. Takılar dahil." },
    { en: "Only lightweight undergarments are allowed.", alt: "Underwear only, please.", ph: "Onli laytveyt andırgarmınts ar alavd.", tr: "Sadece hafif iç çamaşırıyla tartılabilirsiniz." },
    { en: "Remove your socks, please.", alt: "Socks off.", ph: "Rimuv yor soks, pliz.", tr: "Lütfen çoraplarınızı çıkarın." },
    { en: "Remove your jewelry, please.", alt: "Jewelry off.", ph: "Rimuv yor cuılri, pliz.", tr: "Lütfen takılarınızı çıkarın." },
    { en: "Please take off your necklace.", alt: "Necklace off.", ph: "Pliz teyk of yor neklıs.", tr: "Lütfen kolyenizi çıkarın." },
    { en: "Please remove your piercing.", alt: "Piercing off.", ph: "Pliz rimuv yor pirsing.", tr: "Lütfen piercinginizi çıkarın." },
    { en: "Please take off your earrings.", alt: "Earrings off.", ph: "Pliz teyk of yör iringz.", tr: "Lütfen küpelerinizi çıkarın." },
    { en: "Please remove your glasses.", alt: "Glasses off.", ph: "Pliz rimuv yor glasız.", tr: "Lütfen gözlüğünüzü çıkarın." },
    { en: "Please do not remove your undergarments.", alt: "Keep your undergarments on.", ph: "Pliz du not rimuv yor andırgarmınts.", tr: "İç çamaşırlarınızı lütfen çıkarmayınız." },
    { en: "You must be shaved before the weigh-in.", alt: "Please be clean-shaved.", ph: "Yu mast bi seyvd bifor di vey in.", tr: "Tartıya tıraşlı gelmelisiniz." },
    { en: "Please trim your toenails before the weigh-in.", alt: "Toenails must be trimmed.", ph: "Pliz trim yor toynails bifor di vey in.", tr: "Tartıdan önce ayak tırnaklarınızı kısaltmalısınız." },
  ],
  tartim: [
    { en: "Please come to the scale.", alt: "Come to the scale, please.", ph: "Pliz kam tu di skeyl.", tr: "Lütfen tartıya gelin." },
    { en: "You can step on the scale.", alt: "Step on the scale, please.", ph: "Yu kan step on di skeyl.", tr: "Tartıya çıkabilirsiniz." },
    { en: "You may only step on the scale once.", alt: "Only once.", ph: "Yu mey onli step on di skeyl vans.", tr: "Tartıya sadece bir kez çıkabilirsiniz." },
  ],
  sonuc: [
    { en: "You are over the weight limit.", alt: "Overweight.", ph: "Yu ar ovır di veyt limit.", tr: "Kilo limitinin üzerindesiniz." },
    { en: "You are under the weight limit.", alt: "Underweight.", ph: "Yu ar andır di veyt limit.", tr: "Kilo limitinin altındasınız." },
    { en: "You are disqualified due to weight.", alt: "DSQ — weight.", ph: "Yu ar diskvalifayd dyu tu veyt.", tr: "Kilo nedeniyle diskalifiye edildiniz." },
    { en: "All done. Good luck.", alt: "Good luck!", ph: "Ol dan. Gud lak.", tr: "Her şey tamam. Başarılar." },
    { en: "Have a nice day.", alt: "Have a good day.", ph: "Hev a nays dey.", tr: "İyi günler." },
  ],
  sistem: [
    { en: "I am having internet connection issues. Can you assist me, please?", alt: "Internet problem — can you help?", ph: "Ay em heving intırnet koneksın isyuz. Kan yu asist mi, pliz?", tr: "İnternet bağlantı problemi yaşıyorum. Yardımcı olabilir misiniz?" },
    { en: "The list is not up to date.", alt: "List is outdated.", ph: "Di list iz not ap tu deyt.", tr: "Liste güncel değil." },
    { en: "I cannot view the list.", alt: "List won't load.", ph: "Ay kennot vyu di list.", tr: "Listeyi görüntüleyemiyorum." },
    { en: "I cannot enter data into the list.", alt: "Can't enter data.", ph: "Ay kennot entır deytı intu di list.", tr: "Listeye veri girişi yapamıyorum." },
    { en: "The athlete's name does not appear on the list.", alt: "Name not on the list.", ph: "Di etlits neym daz not apir on di list.", tr: "Listede sporcunun adı gözükmüyor." },
    { en: "The athlete's name is incorrect.", alt: "Wrong name.", ph: "Di etlits neym iz inkorekt.", tr: "Sporcunun adı yanlış yazıyor." },
    { en: "The athlete's weight class is incorrect.", alt: "Wrong weight class.", ph: "Di etlits veyt klas iz inkorekt.", tr: "Sporcunun sıkleti yanlış yazıyor." },
    { en: "The athlete's country is incorrect.", alt: "Wrong country.", ph: "Di etlits kantri iz inkorekt.", tr: "Sporcunun ülkesi yanlış yazıyor." },
    { en: "The athlete's gender is incorrect.", alt: "Wrong gender.", ph: "Di etlits cendır iz inkorekt.", tr: "Sporcunun cinsiyeti yanlış yazıyor." },
  ],
  baskul: [
    { en: "The scale is under-reading.", alt: "Scale reads low.", ph: "Di skeyl iz andır riding.", tr: "Tartı eksik ölçüyor." },
    { en: "The scale is over-reading.", alt: "Scale reads high.", ph: "Di skeyl iz ovır riding.", tr: "Tartı fazla ölçüyor." },
    { en: "The scale is not working.", alt: "Scale is down.", ph: "Di skeyl iz not vörking.", tr: "Tartı çalışmıyor." },
    { en: "The scale is broken.", alt: "Scale is broken.", ph: "Di skeyl iz brokm.", tr: "Tartı bozuldu." },
    { en: "Could you please check the scales?", alt: "Please check the scale.", ph: "Kud yu pliz cek di skeylz?", tr: "Tartıları kontrol edebilir misiniz?" },
    { en: "Can we change the scale?", alt: "Replace the scale, please.", ph: "Kan vi ceync di skeyl?", tr: "Tartıyı değiştirebilir miyiz?" },
  ],
  rapor: [
    { en: "The total number of athletes weighed is…", alt: "Athletes weighed: …", ph: "Di totıl nambır ov etlits veyd iz...", tr: "Tartılan toplam sporcu sayısı…" },
    { en: "The total number of disqualifications is…", alt: "Disqualifications: …", ph: "Di totıl nambır ov diskvalifikeysınz iz...", tr: "Toplam diskalifiye sayısı…" },
    { en: "The total number of walkovers is…", alt: "Walkovers: …", ph: "Di totıl nambır ov vakovırz iz...", tr: "Toplam walkover sayısı…" },
  ],
  sosyal: [
    { en: "Can I come in?", alt: "May I come in?", ph: "Kan ay kam in?", tr: "İçeri girebilir miyim?" },
    { en: "Can I go to the bathroom?", alt: "Bathroom, please.", ph: "Kan ay go tu di bathrum?", tr: "Tuvalete gidebilir miyim?" },
  ],
  s_selamlasma: [
    { en: "Good morning, how are you today?", alt: "Morning, how are you?", ph: "Gud morning, hav ar yu tudey?", phs: "Morning, hav ar yu?", tr: "Günaydın, bugün nasılsın?" },
    { en: "I am fine, thank you. And you?", alt: "Good, thanks. You?", ph: "Ay em fayn, thenk yu. End yu?", phs: "Gud, thenks. Yu?", tr: "İyiyim, teşekkür ederim. Ya sen?" },
    { en: "How was your flight?", alt: "", ph: "Hav voz yor flayt?", phs: "", tr: "Yolculuk / uçuş nasıl geçti?" },
    { en: "It is good to see you again.", alt: "Long time no see!", ph: "It iz gud tu sii yu egeyn.", phs: "Long taym no sii!", tr: "Seni tekrar görmek güzel. / Uzun zamandır görüşemedik!" },
    { en: "Did you have breakfast?", alt: "Have breakfast?", ph: "Did yu hev brekfıst?", phs: "Hev brekfıst?", tr: "Kahvaltı yaptın mı?" },
    { en: "Did you have dinner?", alt: "", ph: "Did yu hev dinır?", phs: "", tr: "Akşam yemeği yedin mi?" },
    { en: "Do you have any plans?", alt: "", ph: "Du yu hev eni plens?", phs: "", tr: "Bir planın var mı?" },
    { en: "Have a nice day.", alt: "Good luck today.", ph: "Hev ey nays dey.", phs: "Gud lak tudey.", tr: "İyi günler. Bugün başarılar dilerim." },
    { en: "See you tomorrow morning.", alt: "See you tomorrow.", ph: "Sii yu tumoroo morning.", phs: "Sii yu tumoroo.", tr: "Yarın sabah görüşürüz." },
    { en: "Good night, see you tomorrow.", alt: "Good night.", ph: "Gud nayt, sii yu tumoroo.", phs: "Gud nayt.", tr: "İyi geceler, yarın görüşürüz." },
    { en: "Have a good sleep!", alt: "", ph: "Hev ey gud sliip!", phs: "", tr: "İyi uykular!" },
    { en: "Did you sleep well?", alt: "", ph: "Did yu sliip vel?", phs: "", tr: "İyi uyudun mu?" },
    { en: "How do you feel?", alt: "", ph: "Hav du yu fiil?", phs: "", tr: "Nasıl hissediyorsun?" },
    { en: "How is your day going?", alt: "", ph: "Hav iz yor dey goying?", phs: "", tr: "Günün nasıl geçiyor?" },
    { en: "How is the tournament going so far?", alt: "", ph: "Hav iz dı turnâmınt goying so far?", phs: "", tr: "Turnuva şu ana kadar nasıl gidiyor?" },
    { en: "Let's take a photo together!", alt: "", ph: "Lets teyk ey foto tugedir!", phs: "", tr: "Birlikte bir fotoğraf çekilelim mi?" },
    { en: "Can you take a photo of us?", alt: "", ph: "Ken yu teyk ey foto ov as?", phs: "", tr: "Fotoğrafımızı çeker misiniz?" },
  ],

  s_tanitma: [
    { en: "My name is...", alt: "I am...", ph: "May neym iz...", phs: "Ay em...", tr: "Benim adım..." },
    { en: "I am a referee from Türkiye.", alt: "Referee from Türkiye.", ph: "Ay em ey refırii fram Türkiye.", phs: "Refırii fram Türkiye.", tr: "Türkiye hakemiyim." },
    { en: "My city is... / I live in...", alt: "From...", ph: "May siti iz... / Ay liv in...", phs: "Fram [Siti Neym]", tr: "Şehrim... / ...'da yaşıyorum." },
    { en: "What is your name?", alt: "", ph: "Vat iz yor neym?", phs: "", tr: "Adınız nedir?" },
    { en: "Where are you from?", alt: "", ph: "Ver ar yu from?", phs: "", tr: "Nerelisin?" },
    { en: "Nice to meet you!", alt: "", ph: "Nays tu miit yu!", phs: "", tr: "Tanıştığımıza memnun oldum!" },
    { en: "Let's have a coffee together.", alt: "Coffee together?", ph: "Lets hev ey kofi tugedir.", phs: "Kofi tugedir?", tr: "Birlikte bir kahve içelim." },
  ],

  s_ulasim: [
    { en: "When will the shuttle arrive?", alt: "When is the bus arriving?", ph: "Ven vil dı şatıl ırayv?", phs: "Ven iz dı bas ırayving?", tr: "Servis ne zaman gelecek?" },
    { en: "When is the first shuttle?", alt: "When is the first bus?", ph: "Ven iz dı ferst şatıl?", phs: "Ven iz dı ferst bas?", tr: "İlk servis ne zaman?" },
    { en: "When is the last shuttle?", alt: "Last bus?", ph: "Ven iz dı lest şatıl?", phs: "Ven iz dı lest bas?", tr: "Son servis ne zaman?" },
    { en: "When is the lunch break?", alt: "", ph: "Ven iz dı lanç breyk?", phs: "", tr: "Öğle arası ne zaman?" },
    { en: "Where will we eat lunch / dinner?", alt: "", ph: "Ver vil vi iyt lanç / dinır?", phs: "", tr: "Yemeği nerede yiyeceğiz?" },
    { en: "Are you staying at this hotel?", alt: "Same hotel?", ph: "Ar yu steying et dis hootel?", phs: "Seym hootel?", tr: "Bu otelde mi kalıyorsunuz?" },
    { en: "Enjoy your meal!", alt: "", ph: "Enpoy yor miil!", phs: "", tr: "Afiyet olsun!" },
  ],
};


window.QUIZ_TARTI = [
  { en: "An athlete does not have a medical declaration form.", tr: "Bir sporcunun IFMA Tıbbi Beyan Formu eksik.", category: "kayit", audioId: "quiz_senaryo_1", q: "Ne söylersin?", opts: ["Athlete’s medical declaration is missing.", "Athlete’s passport is missing.", "Athlete’s name is not on the list.", "Passport, please."], c: 0, ex: "✓ 'Athlete’s medical declaration is missing.'" },
  { en: "Ask the athlete to show their accreditation card.", tr: "Sporcudan akreditasyon kartını göstermesini istiyorsun.", category: "kimlik", audioId: "quiz_senaryo_2", q: "Ne söylersin?", opts: ["Please show your accreditation card.", "Please show your athlete’s book.", "Please show your medical declaration.", "Please present your documents."], c: 0, ex: "✓ 'Please show your accreditation card.'" },
  { en: "The online list is not updated.", tr: "Online liste güncellenmiyor.", category: "sistem", audioId: "quiz_senaryo_3", q: "Ne söylersin?", opts: ["The list is not up to date.", "The scale is over-reading.", "You must see the doctor first.", "Please present your passport."], c: 0, ex: "✓ 'The list is not up to date.'" },
  { en: "The athlete is wearing a necklace.", tr: "Sporcu tartıya kolye ile çıkıyor.", category: "giyim", audioId: "quiz_senaryo_4", q: "Ne söylersin?", opts: ["Please remove your necklace.", "Please remove your glasses.", "Please remove your earings.", "Please remove your piercing."], c: 0, ex: "✓ 'Please remove your necklace.'" },
  { en: "An athlete is missing the HBV test result.", tr: "Bir sporcunun HBC/HBV kan testi sonucu eksik.", category: "kayit", audioId: "quiz_senaryo_5", q: "Ne söylersin?", opts: ["Athlete’s HBV test result is missing.", "Your passport is missing.", "Your country is wrong.", "The test scale is in the corridor."], c: 0, ex: "✓ 'Athlete’s HBV test result is missing.'" },
  { en: "State that you cannot enter data into the list due to a system lock.", tr: "Listeye veri girişi yapamıyorsun.", category: "sistem", audioId: "quiz_senaryo_6", q: "Ne söylersin?", opts: ["I cannot enter data into the list.", "I cannot see the doctor’s approval.", "The athlete is under the weight limit.", "Please remove your necklace."], c: 0, ex: "✓ 'I cannot enter data into the list.'" },
  { en: "Report the total number of walkovers.", tr: "Walk over olan toplam sporcu sayısını söylüyorsun.", category: "rapor", audioId: "quiz_senaryo_7", q: "Hangi cümleyi kullanırsın?", opts: ["The total number of walkovers is …", "The total number of weigh-ins is …", "The total number of medical checks is …", "The total number of passports is …"], c: 0, ex: "✓ 'The total number of walkovers is …'" },
  { en: "Tell the athlete to go to the doctor first.", tr: "Sporcunun önce doktora gitmesi gerektiğini söylüyorsun.", category: "kimlik", audioId: "quiz_senaryo_8", q: "Ne söylersin?", opts: ["You must see the doctor first.", "Please come to the scale once.", "Please present your passport.", "Please remove your earrings."], c: 0, ex: "✓ 'You must see the doctor first.'" },
  { en: "The athlete wants to remove their undergarments in order to weigh less?", tr: "Sporcu, tartıda daha düşük kilo çıkması amacıyla iç çamaşırlarını çıkarmak istiyor.?", category: "giyim", audioId: "quiz_senaryo_9", q: "Ne söylersin?", opts: ["Please do not remove your undergarments.", "Please show your accreditation card.", "Please step on the scale again.", "Please call your representative."], c: 0, ex: "✓ 'Please do not remove your undergarments.'" },
  { en: "Ask the coach to present the required documents for registration.", tr: "Antrenörden kayıt için gerekli belgeleri rica ediyorsun.", category: "kayit", audioId: "quiz_senaryo_10", q: "Ne söylersin?", opts: ["Please present the required documents.", "Please step on the scale once.", "Please call your doctor first.", "Please remove your socks."], c: 0, ex: "✓ 'Please present the required documents.'" },
  { en: "The athlete is wearing socks on the scale.", tr: "Sporcu tartıya çorapla çıkıyor.", category: "giyim", audioId: "quiz_senaryo_11", q: "Ne söylersin?", opts: ["Remove your socks, please.", "Please remove your necklace.", "Please remove your glasses.", "Please remove your earrings."], c: 0, ex: "✓ 'Remove your socks, please.'" },
  { en: "Tell the athlete that they must weigh in only in their undergarments.", tr: "Sporcunun sadece iç çamaşırı ile tartıya çıkması gerektiğini söylüyorsun.", category: "giyim", audioId: "quiz_senaryo_12", q: "Ne söylersin?", opts: ["Please weigh in in your undergarments only.", "Remove your socks, please.", "Please remove your necklace.", "Please trim your toenails before the weigh-in."], c: 0, ex: "✓ 'Please weigh in in your undergarments only.'" },
  { en: "An athlete is missing the HCV test result.", tr: "Bir sporcunun HCV kan testi sonucu eksik.", category: "kayit", audioId: "quiz_senaryo_13", q: "Ne söylersin?", opts: ["Your HCV test result is missing.", "Please remove your glasses.", "Your earrings are not allowed.", "The test scale is in the corridor."], c: 0, ex: "✓ 'Your HCV test result is missing.'" },
  { en: "Tell the athlete to prepare for the weigh-in.", tr: "Sporcuya tartı için hazırlanmasını söylüyorsun.", category: "giyim", audioId: "quiz_senaryo_14", q: "Ne söylersin?", opts: ["Please remove socks and any extra clothing. Including jewelry.", "You must be shaved for the weigh-in.", "Please call your coach.", "Please remove your necklace."], c: 0, ex: "✓ 'Please remove socks and any extra clothing. Including jewelry.'" },
  { en: "State that the scale is under-reading compared to control.", tr: "Tartının kontrol tartısına kıyasla düşük değer gösterdiğini belirtin.", category: "baskul", audioId: "quiz_senaryo_15", q: "Ne söylersin?", opts: ["The scale is under-reading.", "The scale is over-reading.", "The scale is broken.", "The list is not up to date."], c: 0, ex: "✓ 'The scale is under-reading.'" },
  { en: "Ask the athlete to hand over their athlete’s book.", tr: "Sporcudan athlete’s book’unu vermesini istiyorsun.", category: "kimlik", audioId: "quiz_senaryo_16", q: "Ne söylersin?", opts: ["Please present your athlete’s book.", "Please present your passport.", "Please present your documents.", "Which country are you representing?"], c: 0, ex: "✓ 'Please present your athlete’s book.'" },
  { en: "Ask the athletes to show their passports.", tr: "Sporculardan pasaportlarını göstermelerini istiyorsun.", category: "kimlik", audioId: "quiz_senaryo_17", q: "Ne söylersin?", opts: ["Please present your passports.", "Please step on the scale once.", "Your passport is missing.", "Please trim your toenails."], c: 0, ex: "✓ 'Please present your passports.'" },
  { en: "A coach or athlete asks whether they may use the scale for check. Respond.", tr: "Bir antrenör veya sporcu tartıyı kontrol için kullanıp kullanamayacağını soruyor. Cevap ver.", category: "cagirma", audioId: "quiz_senaryo_18", q: "Ne söylersin?", opts: ["This is not a test weigh-in. The test scale is in the corridor.", "Female weigh-in starts now.", "Your weight is final.", "Please come back after the medical check."], c: 0, ex: "✓ 'This is not a test weigh-in. The test scale is in the corridor.'" },
  { en: "The athlete comes with long toenails.", tr: "Sporcu tartıya uzun ayak tırnakları ile geldi.", category: "giyim", audioId: "quiz_senaryo_19", q: "Ne söylersin?", opts: ["Please trim your toenails before the weigh-in.", "Please remove your necklace before the weigh-in.", "Please show your accreditation card.", "Please present your passport."], c: 0, ex: "✓ 'Please trim your toenails before the weigh-in.'" },
  { en: "The athlete comes to the weigh-in with a beard and moustache.", tr: "Sporcu tartıya sakal ve bıyık ile geldi. Ne dersin?", category: "giyim", audioId: "quiz_senaryo_20", q: "Ne söylersin?", opts: ["You must be shaved for the weigh-in.", "Please present your passport.", "Please trim your toenails before the weigh-in.", "You are below the weight limit."], c: 0, ex: "✓ 'You must be shaved for the weigh-in.'" },
  { en: "The athlete’s name is written incorrectly on the system.", tr: "Listede sporcunun adı yanlış yazıyor.", category: "sistem", audioId: "quiz_senaryo_21", q: "Ne söylersin?", opts: ["The athlete’s name is incorrect.", "The athlete’s country is missing.", "The athlete’s weight class is incorrect.", "The medical form is complete."], c: 0, ex: "✓ 'The athlete’s name is incorrect.'" },
  { en: "State that the registered country code is wrong.", tr: "Listede sporcunun ülkesi yanlış.", category: "sistem", audioId: "quiz_senaryo_22", q: "Ne söylersin?", opts: ["The athlete’s country is incorrect.", "The athlete’s name is incorrect.", "The athlete’s gender is incorrect.", "The athlete’s age category is incorrect."], c: 0, ex: "✓ 'The athlete’s country is incorrect.'" },
  { en: "State that a athlete’s name does not appear on the list.", tr: "Listede sporcunun adının gözükmediğini belirtin.", category: "sistem", audioId: "quiz_senaryo_23", q: "Ne söylersin?", opts: ["The athlete’s name is not on the list.", "The athlete is over the weight limit.", "The test scale is in the corridor.", "The scale is over-reading."], c: 0, ex: "✓ 'The athlete’s name is not on the list.'" },
  { en: "The athlete’s gender is written incorrectly.", tr: "Listede sporcunun cinsiyeti yanlış.", category: "sistem", audioId: "quiz_senaryo_24", q: "Ne söylersin?", opts: ["The athlete’s gender is incorrect.", "The athlete’s passport is missing.", "The athlete’s medical test is missing.", "The athlete must be shaved."], c: 0, ex: "✓ 'The athlete’s gender is incorrect.'" },
  { en: "Ask the athlete which country they represent.", tr: "Sporcunun hangi ülkeyi temsil ettiğini soruyorsun.", category: "kimlik", audioId: "quiz_senaryo_25", q: "Ne söylersin?", opts: ["Which country are you representing?", "What is your name?", "What is your age category?", "What is your weight category."], c: 0, ex: "✓ 'Which country are you representing?'" },
  { en: "The athlete’s blood test results are incomplete. Ask them to return after completing the documents.", tr: "Sporcunun kan testleri eksik. Belgeleri tamamladıktan sonra tekrar gelmesini istiyorsun.", category: "kayit", audioId: "quiz_senaryo_26", q: "Ne söylersin?", opts: ["Please come back after the documents are complete.", "Athlete’s HIV test result is missing.", "Please remove your necklace.", "Athlete’s passport is missing."], c: 0, ex: "✓ 'Please come back after the documents are complete.'" },
  { en: "Ask to change the scale.", tr: "Tartının değiştirilmesini talep edeceksin.", category: "baskul", audioId: "quiz_senaryo_27", q: "Ne söylersin?", opts: ["Can we change the scale?", "Can we change the athlete’s book?", "Can we change the country list?", "Can we change the doctor form?"], c: 0, ex: "✓ 'Can we change the scale?'" },
  { en: "Report the total number of disqualifications.", tr: "Diskalifiye olan toplam sporcu sayısını söylüyorsun.", category: "rapor", audioId: "quiz_senaryo_28", q: "Hangi cümleyi kullanırsın?", opts: ["The total number of disqualifications is …", "The total number of athletes weighed is …", "The athlete’s weight class is incorrect.", "Please present your medical declaration."], c: 0, ex: "✓ 'The total number of disqualifications is …'" },
  { en: "The athlete is wearing a piercing.", tr: "Sporcu tartıya piercing ile çıkıyor.", category: "giyim", audioId: "quiz_senaryo_29", q: "Ne söylersin?", opts: ["Please remove your piercing.", "Please remove your glasses.", "Please remove your earings.", "Please remove your glasses."], c: 0, ex: "✓ 'Please remove your piercing.'" },
  { en: "Tell the athlete that they are disqualified because of weight.", tr: "Sporcuya kilo nedeniyle diskalifiye olduğunu söylüyorsun.", category: "sonuc", audioId: "quiz_senaryo_30", q: "Ne söylersin?", opts: ["You are disqualified due to weight.", "You are below the weight limit.", "You are over the weight limit.", "The scale is not working."], c: 0, ex: "✓ 'You are disqualified due to weight.'" },
  { en: "The athlete is wearing earrings.", tr: "Sporcu tartıya küpe ile çıkıyor.", category: "giyim", audioId: "quiz_senaryo_31", q: "Ne söylersin?", opts: ["Please take off your earrings.", "Please remove your necklace.", "Please remove your glasses.", "Please remove the socks."], c: 0, ex: "✓ 'Please take off your earrings.'" },
  { en: "Ask the athlete to show doctor approval.", tr: "Sporcudan doktor onayını istiyorsun.", category: "kimlik", audioId: "quiz_senaryo_32", q: "Ne söylersin?", opts: ["Please present your doctor’s approval.", "Please present your passport only.", "Please step on the scale now.", "Please remove your socks."], c: 0, ex: "✓ 'Please present your doctor's approval.'" },
  { en: "A coach is sitting at the registration desk. Greet them and ask which country they represent.", tr: "Bir antrenör kayıt masasında oturuyor. Onu selamlıyor og hangi ülkeyi temsil ettiğini soruyorsun.", category: "kayit", audioId: "quiz_senaryo_33", q: "Ne söylersin?", opts: ["Hello welcome. Which country are you representing?", "Passport only, please.", "Male weigh-in starts now.", "May I see your documents?"], c: 0, ex: "✓ 'Hello welcome. Which country are you representing?'" },
  { en: "Tell athletes that only one athlete may enter the weigh-in area.", tr: "Tartı alanına sadece bir sporcunun girebileceğini söylüyorsun.", category: "cagirma", audioId: "quiz_senaryo_34", q: "Ne söylersin?", opts: ["Only one athlete, please.", "Please remove socks and any extra clothing. Including jewelry.", "Please bring the required documents.", "Your doctor approval is missing."], c: 0, ex: "✓ 'Only one athlete, please.'" },
  { en: "State that the scale is over-reading compared to control.", tr: "Tartının kontrol tartısına kıyasla yüksek değer gösterdiğini belirtin.", category: "sonuc", audioId: "quiz_senaryo_35", q: "Ne söylersin?", opts: ["The scale is over-reading.", "The scale is under-reading.", "The athlete is disqualified due to weight.", "The athlete must see the doctor first."], c: 0, ex: "✓ 'The scale is over-reading.'" },
  { en: "The athlete’s weight category is written incorrectly.", tr: "Listede sporcunun sıkleti yanlış.", category: "sistem", audioId: "quiz_senaryo_36", q: "Ne söylersin?", opts: ["The athlete’s weight class is incorrect.", "The athlete’s passport is missing.", "The athlete’s name is incorrect.", "The athlete’s age category is incorrect."], c: 0, ex: "✓ 'The athlete’s weight class is incorrect.'" },
  { en: "An athlete does not have a declaration of non-pregnancy.", tr: "Bir sporcunun Hamile Olmama Beyanı eksik.", category: "kayit", audioId: "quiz_senaryo_37", q: "Ne söylersin?", opts: ["Athlete’s non-pregnancy declaration is missing.", "Athlete’s athlete’s book is missing.", "Athlete’s medical declaration is missing.", "The list is not up to date."], c: 0, ex: "✓ 'Athlete’s non-pregnancy declaration is missing.'" },
  { en: "Tell the athlete to step on the scale.", tr: "Sporcuya tartıya çıkması gerektiğini söylüyorsun.", category: "tartim", audioId: "quiz_senaryo_38", q: "Ne söylersin?", opts: ["Please step on the scale.", "Please present your passport.", "Please call your coach.", "Please remove your socks."], c: 0, ex: "✓ 'Please step on the scale.'" },
  { en: "An athlete is missing the HIV test result.", tr: "Bir sporcunun HIV kan testi sonucu eksik.", category: "kayit", audioId: "quiz_senaryo_39", q: "Ne söylersin?", opts: ["Athlete’s HIV test result is missing.", "Your athlete’s book is missing.", "May I see your documents?", "Athlete’s anti-doping consent is missing."], c: 0, ex: "✓ 'Athlete’s HIV test result is missing.'" },
  { en: "Tell the athlete that they may step on the official scale only once.", tr: "Sporcunun resmi tartıya sadece bir kez çıkabileceğini söylüyorsun.", category: "tartim", audioId: "quiz_senaryo_40", q: "Ne söylersin?", opts: ["You may step on the official scale only once.", "You may step on the official scale twice.", "Please use the test scale in the corridor.", "Please step on the scale."], c: 0, ex: "✓ 'You may step on the official scale only once.'" },
  { en: "You are having internet connection problems. Ask for help.", tr: "Cihazında internet problemi yaşıyorsun.", category: "sistem", audioId: "quiz_senaryo_41", q: "Ne söylersin?", opts: ["I am having internet connection issues. Can you assist me, please?", "The athlete’s name does not appear on the list", "I cannot enter data into the list.", "The list is not up to date."], c: 0, ex: "✓ 'I am having internet connection issues. Can you assist me, please?'" },
  { en: "Ask the Administration Jury for leave to go to the restroom.", tr: "Tartı Sorumlusu Başkanından lavaboya gitmek için izin istiyorsun.", category: "sosyal", audioId: "quiz_senaryo_42", q: "Ne söylersin?", opts: ["Can I go to the bathroom?", "I need to make a call.", "I am tired.", "Where is the weigh-in room?"], c: 0, ex: "✓ 'Can I go to the bathroom?'" },
  { en: "The athlete is above the weight limit.", tr: "Sporcu kilo limitinin üstünde.", category: "sonuc", audioId: "quiz_senaryo_43", q: "Ne söylersin?", opts: ["You are over the weight limit.", "You are below the weight limit.", "Your passport is missing.", "Your scale is not working."], c: 0, ex: "✓ 'You are over the weight limit.'" },
  { en: "Announce that the female weigh-in is starting.", tr: "Kadın tartısının başladığını duyuruyorsun.", category: "cagirma", audioId: "quiz_senaryo_44", q: "Ne söylersin?", opts: ["Female weigh-in starts now.", "Male weigh-in starts now.", "Please step on the scale once.", "Only one athlete may enter, please."], c: 0, ex: "✓ 'Female weigh-in starts now.'" },
  { en: "The weigh-in is successfully complete. Bid farewell and wish the competitor luck.", tr: "Sporcu kaydı ve tartısı bitti. Sporcuya veda ediyorsun.", category: "sonuc", audioId: "quiz_senaryo_45", q: "Ne söylersin?", opts: ["All done. Good luck.", "Have you had breakfast?", "Would you like coffee?", "Which ring are you competing in?"], c: 0, ex: "✓ 'All done. Good luck.'" },
  { en: "An athlete does not have the anti-doping consent form.", tr: "Bir sporcunun Anti-Doping Onayı eksik. Ne dersin?", category: "kayit", audioId: "quiz_senaryo_46", q: "Ne söylersin?", opts: ["Athlete’s anti-doping consent is missing.", "Athlete’s medical check is missing.", "Athlete’s non-pregnancy declaration is missing.", "Please come to the scale once."], c: 0, ex: "✓ 'Athlete’s anti-doping consent is missing.'" },
  { en: "The athlete is below the weight limit.", tr: "Sporcu kilo limitinin altında.", category: "sonuc", audioId: "quiz_senaryo_47", q: "Ne söylersin?", opts: ["You are under the weight limit.", "You are disqualified due to weight.", "You are over the weight limit.", "The list is not updated."], c: 0, ex: "✓ 'You are under the weight limit.'" },
  { en: "The scale is broken.", tr: "Tartı çalışmıyor.", category: "baskul", audioId: "quiz_senaryo_48", q: "Ne söylersin?", opts: ["The scale is not working.", "The athlete’s book is missing.", "The athlete is under the limit.", "The weigh-in is complete."], c: 0, ex: "✓ 'The scale is not working.'" },
  { en: "Politely request permission from the officials to enter the closed weigh-in room.", tr: "Tartı odasına giriş yapacaksın, izin alıyorsun.", category: "kayit", audioId: "quiz_senaryo_49", q: "Ne söylersin?", opts: ["Can I come in?", "Have you had breakfast?", "Would you like to drink coffee?", "Can you open the door, please?"], c: 0, ex: "✓ 'Can I come in?'" },
  { en: "Call the next athlete for the weigh-in.", tr: "Tartı için bir sonraki sporcuyu çağıracaksın.", category: "cagirma", audioId: "quiz_senaryo_50", q: "Ne söylersin?", opts: ["Next athlete, please.", "Please come back later.", "You are disqualified.", "The list is not up to date."], c: 0, ex: "✓ 'Next athlete, please.'" },
  { en: "The athlete does not have doctor approval.", tr: "Sporcunun doktor onayı yok.", category: "kimlik", audioId: "quiz_senaryo_51", q: "Ne söylersin?", opts: ["Your doctor’s approval is missing.", "Your athlete’s book is missing.", "The scale is over-reading.", "You are under the limit."], c: 0, ex: "✓ 'Your doctor's approval is missing.'" },
  { en: "The athlete is wearing glasses.", tr: "Sporcu tartıya gözlük ile çıkıyor.", category: "giyim", audioId: "quiz_senaryo_52", q: "Ne söylersin?", opts: ["Please remove your glasses.", "Please remove your gloves.", "Please remove your piercing.", "Please remove your necklace."], c: 0, ex: "✓ 'Please remove your glasses.'" },
  { en: "Report the total number of athletes weighed.", tr: "Tartılan toplam sporcu sayısını söylüyorsun.", category: "rapor", audioId: "quiz_senaryo_53", q: "Hangi cümleyi kullanırsın?", opts: ["The total number of athletes weighed is …", "The total number of disqualifications is …", "The scale is not working.", "The list is not up to date."], c: 0, ex: "✓ 'The total number of athletes weighed is …'" },
  { en: "Announce that the male weigh-in is starting.", tr: "Erkek tartısının başladığını duyuruyorsun.", category: "cagirma", audioId: "quiz_senaryo_54", q: "Ne söylersin?", opts: ["Male weigh-in starts now.", "Female weigh-in starts now.", "Please show your passport.", "Please trim your toenails."], c: 0, ex: "✓ 'Male weigh-in starts now.'" },
  { en: "Ask the staff to check the scales.", tr: "Görevliden tartıları kontrol etmesini rica edeceksin.", category: "baskul", audioId: "quiz_senaryo_55", q: "Ne söylersin?", opts: ["Could you please check the scales?", "Could you please present your passport?", "Could you please step on the scale once?", "Could you please change the schales?"], c: 0, ex: "✓ 'Could you please check the scales?'" }
];
