// ─── SESLİ SİMÜLASYON (DAY2 / MÜSABAKA ALANI) — VERİ YAPISI ─────
// İki seviyeli yapı:
//   Seviye 1: Ana kategori (Jury, Equipment, Referee, Judge, Timekeeper, Announcer)
//   Seviye 2: Alt kategori (örn. Jury → Reporting, Communication, ...)
// Timekeeper ve Announcer'ın alt kategorisi yok — direkt sahne ekranına gider (directScenes).
//
// İçerikler ileride eklenecek; şimdilik tüm scenes / directScenes dizileri boş.
// Format, sim_kayit.js'teki sahne formatıyla birebir aynı olacak:
// { id, title, steps: [ { speaker, audioId, subtitle } veya { speaker:"user", accepted, hints } ] }

const SIM_DAY2_CATEGORIES = {
  jury: {
    label: "Jury", labelTr: "Jüri",
    subcategories: [
      { id: "d2_juri_rap", label: "Reporting", labelTr: "Raporlama", scenes: [
      {
        id: 1,
        title: "Bir raund içinde aynı sporcuya iki kez nakavt …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_rap_1", subtitle: "During a round, you gave a knock-down count to the same athlete two times. If requested, you report the count status to the Jury." },
        { speaker: "jury", audioId: "sim_d2_juri_rap_1b", subtitle: "How many times did you count?" },
        { speaker: "user",
          accepted: [
          "i counted twice in the same round",
          "two counts same round"
          ],
          hints: [
          "Bir raund içinde aynı sporcuya iki kez nakavt sayımı (knock-down count) yaptın. Talep edildiği takdirde; sayma durumunu jüriye rapor ediyorsun.",
          "'counted' ve 'twice' kelimelerini kullan.",
          "I counted twice in the same round."
          ] }
        ]
      },      {
        id: 2,
        title: "Bir sporcu tek bir raund içinde üçüncü kez say…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_rap_2", subtitle: "An athlete receives their third count within a single round. If requested, you report the count status to the jury." },
        { speaker: "jury", audioId: "sim_d2_juri_rap_2b", subtitle: "How many times did you count?" },
        { speaker: "user",
          accepted: [
          "i counted three times in the same round",
          "three counts same round"
          ],
          hints: [
          "Bir sporcu tek bir raund içinde üçüncü kez sayma aldı. Talep edildiği takdirde; sayma durumunu jüriye rapor ediyorsun.",
          "'counted' ve 'three' kelimelerini kullan.",
          "I counted three times in the same round."
          ] }
        ]
      },      {
        id: 3,
        title: "Bir sporcu tek bir raund içinde bir kez sayma …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_rap_3", subtitle: "An athlete receives their first count within a single round. If requested, you report the count status to the jury." },
        { speaker: "jury", audioId: "sim_d2_juri_rap_3b", subtitle: "How many times did you count?" },
        { speaker: "user",
          accepted: [
          "i counted once in the same round",
          "one count same round"
          ],
          hints: [
          "Bir sporcu tek bir raund içinde bir kez sayma aldı. Talep edildiği takdirde; sayma durumunu jüriye rapor ediyorsun.",
          "'counted' ve 'once' kelimelerini kullan.",
          "I counted once in the same round."
          ] }
        ]
      },      {
        id: 4,
        title: "Bir sporcu maç içinde ikinci kez sayma aldı",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_rap_4", subtitle: "An athlete receives their second count during the bout. If requested, you report the count status to the jury." },
        { speaker: "jury", audioId: "sim_d2_juri_rap_4b", subtitle: "How many times did you count?" },
        { speaker: "user",
          accepted: [
          "i counted twice in total",
          "two counts total"
          ],
          hints: [
          "Bir sporcu maç içinde ikinci kez sayma aldı. Talep edildiği takdirde; sayma durumunu jüriye rapor ediyorsun.",
          "'counted' ve 'twice' kelimelerini kullan.",
          "I counted twice in total."
          ] }
        ]
      },      {
        id: 5,
        title: "Bir sporcu maç içinde üçüncü kez sayma aldı",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_rap_5", subtitle: "An athlete receives their third count during the bout. If requested, you report the count status to the jury." },
        { speaker: "jury", audioId: "sim_d2_juri_rap_5b", subtitle: "How many times did you count?" },
        { speaker: "user",
          accepted: [
          "i counted three times in total",
          "three counts total"
          ],
          hints: [
          "Bir sporcu maç içinde üçüncü kez sayma aldı. Talep edildiği takdirde; sayma durumunu jüriye rapor ediyorsun.",
          "'counted' ve 'three' kelimelerini kullan.",
          "I counted three times in total."
          ] }
        ]
      },      {
        id: 6,
        title: "Maç esnasında kırmızı köşeye iki resmi sözlü u…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_rap_6", subtitle: "You issued two cautions to the red corner during the bout. If requested, you report the caution status to the Jury." },
        { speaker: "jury", audioId: "sim_d2_juri_rap_6b", subtitle: "How many cautions did you give?" },
        { speaker: "user",
          accepted: [
          "i gave two cautions",
          "two cautions"
          ],
          hints: [
          "Maç esnasında kırmızı köşeye iki resmi sözlü uyarı verdin. Talep edildiği takdirde; uyarı durumunu jüriye rapor ediyorsun.",
          "'gave' ve 'cautions' kelimelerini kullan.",
          "I gave two cautions."
          ] }
        ]
      },      {
        id: 7,
        title: "Maç esnasında kırmızı köşeye üç resmi sözlü uy…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_rap_7", subtitle: "You issued three cautions to the red corner during the bout. If requested, you report the caution status to the Jury." },
        { speaker: "jury", audioId: "sim_d2_juri_rap_7b", subtitle: "How many cautions did you give?" },
        { speaker: "user",
          accepted: [
          "i gave three cautions",
          "three cautions"
          ],
          hints: [
          "Maç esnasında kırmızı köşeye üç resmi sözlü uyarı verdin. Talep edildiği takdirde; uyarı durumunu jüriye rapor ediyorsun.",
          "'gave' ve 'three' kelimelerini kullan.",
          "I gave three cautions."
          ] }
        ]
      },      {
        id: 8,
        title: "Ring girişindeki eldiven kontrolünde sporcunun…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_rap_8", subtitle: "During the glove check at the ring entrance, you notice the athlete has no hand wraps under their gloves. Report this violation to the Jury." },
        { speaker: "user",
          accepted: [
          "the athlete has no bandage",
          "no bandage"
          ],
          hints: [
          "Ring girişindeki eldiven kontrolünde sporcunun eldivenlerinin altında bandaj olmadığını fark ediyorsun. Bu ihlali jüriye rapor ediyorsun.",
          "'athlete' ve 'bandage' kelimelerini kullan.",
          "The athlete has no bandage."
          ] }
        ]
      },      {
        id: 9,
        title: "Köşe Görevlisinin kusurlu bir kaskı değiştirme…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_rap_9", subtitle: "You need to ask the jury if the second is permitted to replace a faulty headguard." },
        { speaker: "user",
          accepted: [
          "can they change the headguard"
          ],
          hints: [
          "Köşe Görevlisinin kusurlu bir kaskı değiştirmesine izin verilip verilmediğini jüriye sorman gerekiyor.",
          "'change' ve 'headguard' kelimelerini kullan.",
          "Can they change the headguard?"
          ] }
        ]
      },      {
        id: 10,
        title: "Bir sporcunun saçını toplamak için saç filesin…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_rap_10", subtitle: "You need a hair net to tie up an athlete's hair. Ask the Jury for assistance." },
        { speaker: "user",
          accepted: [
          "can you give me a hair net",
          "hair net please"
          ],
          hints: [
          "Bir sporcunun saçını toplamak için saç filesine  ihtiyacın var. Jüriden yardım istiyorsun.",
          "'give' ve 'hair' kelimelerini kullan.",
          "Can you give me a hair net?"
          ] }
        ]
      },      {
        id: 11,
        title: "Bir sporcunun ekipmanını sabitlemek için banda…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_rap_11", subtitle: "You need a tape to secure an athlete's equipment. Ask the Jury for assistance." },
        { speaker: "user",
          accepted: [
          "can you give me a tape",
          "tape please"
          ],
          hints: [
          "Bir sporcunun ekipmanını sabitlemek için banda ihtiyacın var. Jüriden yardım istiyorsun.",
          "'give' ve 'tape' kelimelerini kullan.",
          "Can you give me a tape?"
          ] }
        ]
      },      {
        id: 12,
        title: "Sporcu ringe uzun ayak tırnakları ile geldi",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_rap_12", subtitle: "The athlete comes to the ring  with long toenails. Report this immediately to the Jury." },
        { speaker: "user",
          accepted: [
          "the athlete s toenails are too long",
          "toenails too long"
          ],
          hints: [
          "Sporcu ringe uzun ayak tırnakları ile geldi. Bunu derhal jüriye rapor ediyorsun.",
          "'athlete's' ve 'toenails' kelimelerini kullan.",
          "The athlete's toenails are too long."
          ] }
        ]
      },      {
        id: 13,
        title: "Bir kadın sporcu ringe siyah hicapla geliyor",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_rap_13", subtitle: "A female athlete comes to the ring wearing a black hijab. Report this immediately to the Jury." },
        { speaker: "user",
          accepted: [
          "the hijab body suit must be white",
          "hijab not acceptable"
          ],
          hints: [
          "Bir kadın sporcu ringe siyah hicapla geliyor. Bunu derhal jüriye rapor ediyorsun.",
          "'hijab' ve 'body' kelimelerini kullan.",
          "The hijab/body suit must be white."
          ] }
        ]
      },      {
        id: 14,
        title: "Maç öncesi sporcunun kasık koruyucusunun olmad…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_rap_14", subtitle: "During the pre-fight, you learned the athlete is missing their groin guard. Report this immediately to the Jury." },
        { speaker: "user",
          accepted: [
          "the athlete has no groin guard",
          "no groin guard"
          ],
          hints: [
          "Maç öncesi sporcunun kasık koruyucusunun olmadığını öğreniyorsun. Bunu derhal jüriye rapor ediyorsun.",
          "'athlete' ve 'groin' kelimelerini kullan.",
          "The athlete has no groin guard."
          ] }
        ]
      },      {
        id: 15,
        title: "Altyazı Maç öncesi sporcunun göğüs koruyucusun…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_rap_15", subtitle: "During the pre-fight, you learned the athlete is missing their chest protector. Report this immediately to the Jury." },
        { speaker: "user",
          accepted: [
          "altyaz ma ncesi sporcunun g s koruyucusunun olmad n reniyorsun bunu derhal j riye rapor ediyorsun",
          "the athlete has no chest protector",
          "no chest protector"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyaz' ve 'ncesi' kelimelerini kullan.",
          "Altyazı Maç öncesi sporcunun göğüs koruyucusunun olmadığını öğreniyorsun. Bunu derhal jüriye rapor ediyorsun."
          ] }
        ]
      },      {
        id: 16,
        title: "Altyazı Sporcunun kaskını inceliyorsun ve IFMA…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_rap_16", subtitle: "You inspect the athlete's headguard and see it is not IFMA approved. Inform the Jury that a replacement is mandatory." },
        { speaker: "user",
          accepted: [
          "altyaz sporcunun kask n inceliyorsun ve ifma onayl olmad n g r yorsun de i tirilmesinin zorunlu oldu unu j riye bildiriyorsun",
          "headguard not approved must be changed",
          "headguard must be changed"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyaz' ve 'sporcunun' kelimelerini kullan.",
          "Altyazı Sporcunun kaskını inceliyorsun ve IFMA onaylı olmadığını görüyorsun. Değiştirilmesinin zorunlu olduğunu jüriye bildiriyorsun."
          ] }
        ]
      },      {
        id: 17,
        title: "Altyazı Sporcunun eldivenlerini  inceliyorsun …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_rap_17", subtitle: "You inspect the athlete's gloves and see it is not IFMA approved. Inform the Jury that a replacement is mandatory." },
        { speaker: "user",
          accepted: [
          "altyaz sporcunun eldivenlerini inceliyorsun ve ifma onayl olmad n g r yorsun de i tirilmesinin zorunlu oldu unu j riye bildiriyorsun",
          "gloves not approved must be changed",
          "gloves must be changed"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyaz' ve 'sporcunun' kelimelerini kullan.",
          "Altyazı Sporcunun eldivenlerini  inceliyorsun ve IFMA onaylı olmadığını görüyorsun. Değiştirilmesinin zorunlu olduğunu jüriye bildiriyorsun."
          ] }
        ]
      },      {
        id: 18,
        title: "Altyazı Sporcunun dirsekliklerini inceliyorsun…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_rap_18", subtitle: "You inspect the athlete's elbow guard and see it is not IFMA approved. Inform the Jury that a replacement is mandatory." },
        { speaker: "user",
          accepted: [
          "altyaz sporcunun dirsekliklerini inceliyorsun ve ifma onayl olmad n g r yorsun de i tirilmesinin zorunlu oldu unu j riye bildiriyorsun",
          "elbow guard not approved must be changed",
          "elbow guard must be changed"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyaz' ve 'sporcunun' kelimelerini kullan.",
          "Altyazı Sporcunun dirsekliklerini inceliyorsun ve IFMA onaylı olmadığını görüyorsun. Değiştirilmesinin zorunlu olduğunu jüriye bildiriyorsun."
          ] }
        ]
      },      {
        id: 19,
        title: "Sporcunun gövde koruyucusunu inceliyorsun ve I…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_rap_19", subtitle: "You inspect the athlete's body protection and see it is not IFMA approved. Inform the Jury that a replacement is mandatory." },
        { speaker: "user",
          accepted: [
          "the chest protector is not approved it must be changed",
          "chest protector not approved must be changed",
          "chest protector must be changed"
          ],
          hints: [
          "Sporcunun gövde koruyucusunu inceliyorsun ve IFMA onaylı olmadığını görüyorsun. Değiştirilmesinin zorunlu olduğunu jüriye bildiriyorsun.",
          "'chest' ve 'protector' kelimelerini kullan.",
          "The chest protector is not approved. It must be changed."
          ] }
        ]
      }
      ] },      { id: "d2_juri_gov", label: "Assignment", labelTr: "Görevlendirme", scenes: [
      {
        id: 1,
        title: "Tuvaleti kullanmak için müsabaka alanından kıs…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_gov_1", subtitle: "You need to leave the field of play briefly to use the toilet. Ask the Protocol Jury for permission." },
        { speaker: "user",
          accepted: [
          "may i go to the restroom",
          "i need to go to the restroom may i"
          ],
          hints: [
          "Tuvaleti kullanmak için müsabaka alanından kısa süreliğine ayrılmanız gerekiyor. Protokol Jürisinden izin istiyorsunuz.",
          "'restroom' kelimelerini kullan.",
          "May I go to the restroom?"
          ] }
        ]
      },      {
        id: 2,
        title: "Telefonla birine ulaşmanız gerekiyor",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_gov_2", subtitle: "You must contact someone by phone. Ask the Protocol Jury for permission." },
        { speaker: "user",
          accepted: [
          "i need to make a phone call may i",
          "i need to call someone may i",
          "i have a phone call may i"
          ],
          hints: [
          "Telefonla birine ulaşmanız gerekiyor. Protokol Jürisinden izin istiyorsunuz.",
          "'need' ve 'make' kelimelerini kullan.",
          "I need to make a phone call. May I?"
          ] }
        ]
      },      {
        id: 3,
        title: "Jüri son raundda yaptığınız küçük bir pozisyon…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_gov_3", subtitle: "The Jury points out a small positioning mistake you made in the last round. Acknowledge the feedback and state that you will be careful." },
        { speaker: "user",
          accepted: [
          "thank you for your feedback i will be careful",
          "thank you i ll be careful"
          ],
          hints: [
          "Jüri son raundda yaptığınız küçük bir pozisyon hatasına dikkat çekiyor. Geri bildirimi kabul edip dikkat edeceğinizi belirtiyorsunuz.",
          "'thank' ve 'feedback' kelimelerini kullan.",
          "Thank you for your feedback. I will be careful."
          ] }
        ]
      },      {
        id: 4,
        title: "Yanlışlıkla bir skoru veya saymayı hatalı hesa…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_gov_4", subtitle: "You accidentally miscalculated a score or count, and the Jur ycorrects you. Apologize for your fault and assure them you'll pay attention." },
        { speaker: "user",
          accepted: [
          "i am sorry for my mistake i will be careful",
          "sorry i ll be careful"
          ],
          hints: [
          "Yanlışlıkla bir skoru veya saymayı hatalı hesapladınız ve Jury sizi düzeltti. Hatanız için özür dileyip dikkat edeceğinizi garanti ediyorsunuz.",
          "'sorry' ve 'mistake' kelimelerini kullan.",
          "I am sorry for my mistake. I will be careful."
          ] }
        ]
      },      {
        id: 5,
        title: "Başka bir hakemin masada ağır ekipman taşıdığı…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_gov_5", subtitle: "You see another referee carrying heavy equipment or struggling with a task at the table. Offer your assistance." },
        { speaker: "user",
          accepted: [
          "i can help you",
          "i can help",
          "would you like me to help"
          ],
          hints: [
          "Başka bir hakemin masada ağır ekipman taşıdığını veya bir görevde zorlandığını görüyorsunuz. Yardım teklif ediyorsunuz.",
          "'help' kelimelerini kullan.",
          "I can help you."
          ] }
        ]
      },      {
        id: 6,
        title: "Size bir görev verildiği söylendi ancak tam ol…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_gov_6", subtitle: "You are told that you have an assignment, but you don't remember the specific role (e.g., judge or referee). Ask for clarification." },
        { speaker: "user",
          accepted: [
          "what is my duty",
          "my duty",
          "can you tell me my duty",
          "i don t remember my duty"
          ],
          hints: [
          "Size bir görev verildiği söylendi ancak tam olarak rolünüzü (yan hakem mi orta hakem mi) hatırlamıyorsunuz. Netleştirmek için soruyorsunuz.",
          "'what' ve 'duty' kelimelerini kullan.",
          "What is my duty?"
          ] }
        ]
      },      {
        id: 7,
        title: "Yan hakem olarak görevlendirildiniz ancak tam …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_gov_7", subtitle: "You are assigned as a Judge, but you don’t remember which specific judge chair (1, 2, 3, 4, or 5) you need to sit on. Ask." },
        { speaker: "user",
          accepted: [
          "which number should i go to",
          "which number",
          "where do i need to go",
          "where should i go",
          "what is my number"
          ],
          hints: [
          "Yan hakem olarak görevlendirildiniz ancak tam olarak kaç numaralı hakem sandalyesine (1, 2, 3, 4 veya 5) oturacağınızı hatırlamıyorsunuz. Soruyorsunuz.",
          "'which' ve 'number' kelimelerini kullan.",
          "Which number should I go to?"
          ] }
        ]
      },      {
        id: 8,
        title: "Hakem görevlendirmelerini görmek için resmi gö…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_gov_8", subtitle: "You want to look at the official assistment list to see the referee duties. Ask for permission." },
        { speaker: "user",
          accepted: [
          "may i check the duty list",
          "can i check the duty list"
          ],
          hints: [
          "Hakem görevlendirmelerini görmek için resmi görevlendirme kağıdına bakmak istiyorsunuz. İzin istiyorsunuz.",
          "'check' ve 'duty' kelimelerini kullan.",
          "May I check the duty list?"
          ] }
        ]
      },      {
        id: 9,
        title: "Görevine hazırlanmak için yaklaşan maçın hangi…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_gov_9", subtitle: "To prepare for your assignment, you want to know which category the upcoming match is in." },
        { speaker: "user",
          accepted: [
          "which category is it",
          "which category"
          ],
          hints: [
          "Görevine hazırlanmak için yaklaşan maçın hangi kategori olduğunu öğrenmek istiyorsun.",
          "'which' ve 'category' kelimelerini kullan.",
          "Which category is it?"
          ] }
        ]
      },      {
        id: 10,
        title: "Tam olarak ne zaman ring kenarında hazır olman…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_gov_10", subtitle: "You need to check the match order to know exactly when you need to be ready at the ring side. Ask for the specific bout number." },
        { speaker: "user",
          accepted: [
          "which bout number is it",
          "which bout"
          ],
          hints: [
          "Tam olarak ne zaman ring kenarında hazır olmanız gerektiğini bilmek için maç sırasını kontrol etmeniz gerekiyor. Maç numarasını soruyorsunuz.",
          "'which' ve 'bout' kelimelerini kullan.",
          "Which bout number is it?"
          ] }
        ]
      },      {
        id: 11,
        title: "Bir konuda yardıma ihtiyacın var",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_gov_11", subtitle: "You need help with something. Ask for help." },
        { speaker: "user",
          accepted: [
          "can you help me please",
          "help me please",
          "i need help"
          ],
          hints: [
          "Bir konuda yardıma ihtiyacın var. Yardım talep et.",
          "'help' kelimelerini kullan.",
          "Can you help me, please?"
          ] }
        ]
      }
      ] },      { id: "d2_juri_saglik", label: "Athlete Health", labelTr: "Sporcu Sağlığı", scenes: [
      {
        id: 1,
        title: "Bir sporcu sert bir yumruk alıyor ve burnu cid…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_saglik_1", subtitle: "An athlete receives a hard punch, and their nose starts bleeding significantly. While the doctor is checking, report the specific situation to the approaching jury official." },
        { speaker: "user",
          accepted: [
          "the athlete s nose is bleeding",
          "nose bleeding"
          ],
          hints: [
          "Bir sporcu sert bir yumruk alıyor ve burnu ciddi şekilde kanamaya başlıyor. Doktor kontrol ederken, yanınıza gelen jüri görevlisine bu durumu rapor ediyorsunuz.",
          "'athlete's' ve 'nose' kelimelerini kullan.",
          "The athlete's nose is bleeding."
          ] }
        ]
      },      {
        id: 2,
        title: "Bir sporcu kafasına çok ağır bir yüksek tekme …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_saglik_2", subtitle: "An athlete gets caught with a massive high kick or spinning elbow to the head and knocked down. The doctor enters the ring; report the cause of injury to the jury." },
        { speaker: "user",
          accepted: [
          "the athlete took a heavy strike to the head",
          "heavy head strike"
          ],
          hints: [
          "Bir sporcu kafasına çok ağır bir yüksek tekme veya döner dirsek alıyor ve nakavt oluyor. Doktor ringe giriyor; jüriye sakatlığın nedenini rapor ediyorsunuz.",
          "'athlete' ve 'took' kelimelerini kullan.",
          "The athlete took a heavy strike to the head."
          ] }
        ]
      },      {
        id: 3,
        title: "Yanlışlıkla atılan alçak vuruş sonrasında dövü…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_saglik_3", subtitle: "After an accidental low blow, the fighter drops to the canvas in severe pain. While waiting for the doctor, inform the technical officials about the exact location of the strike." },
        { speaker: "user",
          accepted: [
          "the athlete took a heavy strike to the groin",
          "heavy groin strike"
          ],
          hints: [
          "Yanlışlıkla atılan alçak vuruş sonrasında dövüşçü büyük bir acıyla yere düşüyor. Doktoru beklerken teknik görevlilere darbenin tam yerini bildiriyorsunuz.",
          "'athlete' ve 'took' kelimelerini kullan.",
          "The athlete took a heavy strike to the groin."
          ] }
        ]
      },      {
        id: 4,
        title: "Bir dövüşçü kaburgalarına sert bir diz vuruşu …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_saglik_4", subtitle: "A fighter is hit with a hard knee strike to the ribs and cannot stand up straight (KO). Report the condition to the Jury." },
        { speaker: "user",
          accepted: [
          "the athlete took a heavy strike to the body",
          "heavy body strike"
          ],
          hints: [
          "Bir dövüşçü kaburgalarına sert bir diz vuruşu alıyor ve dik duramıyor. Jüriye durumu rapor ediyorsunuz.",
          "'athlete' ve 'took' kelimelerini kullan.",
          "The athlete took a heavy strike to the body."
          ] }
        ]
      },      {
        id: 5,
        title: "Yoğun bir clinch esnasında veya sert bir gövde…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_saglik_5", subtitle: "During the intense clinch or after a hard body shot, the athlete feels sick and throws up on the canvas. Turn to the Jury and state what happened." },
        { speaker: "user",
          accepted: [
          "the athlete vomited",
          "vomited"
          ],
          hints: [
          "Yoğun bir clinch esnasında veya sert bir gövde darbesinden sonra sporcu fenalaşıyor ve ring zeminine kusuyor. Jüriye dönüp ne olduğunu bildiriyorsunuz.",
          "'athlete' ve 'vomited' kelimelerini kullan.",
          "The athlete vomited."
          ] }
        ]
      },      {
        id: 6,
        title: "Bir sporcu ağır bir nakavt darbesi alıyor ve y…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_saglik_6", subtitle: "An athlete takes a heavy knockout blow and loses consciousness completely on the floor. While the medical team is responding, report the status to the Jury." },
        { speaker: "user",
          accepted: [
          "the athlete fainted",
          "fainted"
          ],
          hints: [
          "Bir sporcu ağır bir nakavt darbesi alıyor ve yerde bilincini tamamen kaybediyor (bayılıyor). Sağlık ekibi müdahale ederken Jüriye durumu rapor ediyorsunuz.",
          "'athlete' ve 'fainted' kelimelerini kullan.",
          "The athlete fainted."
          ] }
        ]
      }
      ] },      { id: "d2_juri_hkm", label: "Referee Health & Attire", labelTr: "Hakem Sağlığı & Kıyafet", scenes: [
      {
        id: 1,
        title: "Uzun bir seans sırasında kendinizi kötü hisset…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_hkm_1", subtitle: "You start feeling unwell during a long session and need to step away from your duty to rest. Inform the Jury." },
        { speaker: "user",
          accepted: [
          "i don t feel well may i rest",
          "i m not good i need to rest",
          "i don t feel good"
          ],
          hints: [
          "Uzun bir seans sırasında kendinizi kötü hissetmeye başladınız ve dinlenmek için görevinizden kısa bir süre ayrılmanız gerekiyor. Jüriye durumu bildiriyorsunuz.",
          "'don't' ve 'feel' kelimelerini kullan.",
          "I don't feel well. May I rest?"
          ] }
        ]
      },      {
        id: 2,
        title: "Ring kenarında ani ve ciddi bir sağlık sorunu …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_hkm_2", subtitle: "You experience a sudden, severe medical issue at the ring side and require professional medical assistance. State your need clearly." },
        { speaker: "user",
          accepted: [
          "i need to see a doctor",
          "i need a doctor"
          ],
          hints: [
          "Ring kenarında ani ve ciddi bir sağlık sorunu yaşadınız ve profesyonel tıbbi yardıma ihtiyacınız var. İhtiyacınızı net bir şekilde belirtiyorsunuz.",
          "'need' ve 'doctor' kelimelerini kullan.",
          "I need to see a doctor."
          ] }
        ]
      },      {
        id: 3,
        title: "Başınız döndürüyor ve ayakta durmakta zorlanıy…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_hkm_3", subtitle: "Your head spin, and you feel unstable on your feet. Report this specific sensation." },
        { speaker: "user",
          accepted: [
          "i feel dizzy"
          ],
          hints: [
          "Başınız döndürüyor ve ayakta durmakta zorlanıyorsunuz. Bu özel durumu rapor ediyorsunuz.",
          "'feel' ve 'dizzy' kelimelerini kullan.",
          "I feel dizzy."
          ] }
        ]
      },      {
        id: 4,
        title: "Sporcuları ayırırken üst uzvunuzda (kolunuzda)…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_hkm_4", subtitle: "After a close exchange where you had to split the athletes, you feel a sharp pain in your upper extremity and can’t continue to your duty. Inform the Jury." },
        { speaker: "user",
          accepted: [
          "my arm hurts",
          "i have arm pain"
          ],
          hints: [
          "Sporcuları ayırırken üst uzvunuzda (kolunuzda) keskin bir ağrı hissettiniz ve göreve devam edemiyorsunuz. Jüriye bilgi veriyorsunuz.",
          "'hurts' kelimelerini kullan.",
          "My arm hurts."
          ] }
        ]
      },      {
        id: 5,
        title: "Dinamik bir mide rahatsızlığı hissetmeye başla…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_hkm_5", subtitle: "You start feeling dynamic stomach discomfort and feel like you might throw up. Inform the Jury immediately." },
        { speaker: "user",
          accepted: [
          "i feel nauseous"
          ],
          hints: [
          "Dinamik bir mide rahatsızlığı hissetmeye başladınız ve kusacak gibi oluyorsunuz. Gözlemciye derhal bilgi veriyorsunuz.",
          "'feel' ve 'nauseous' kelimelerini kullan.",
          "I feel nauseous."
          ] }
        ]
      },      {
        id: 6,
        title: "Ayağınız size ciddi acı veriyor",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_hkm_6", subtitle: "Your lower limb or foot is causing you severe pain. Report it." },
        { speaker: "user",
          accepted: [
          "my foot hurts",
          "i have foot pain"
          ],
          hints: [
          "Ayağınız size ciddi acı veriyor. Bunu rapor ediyorsunuz.",
          "'foot' ve 'hurts' kelimelerini kullan.",
          "My foot hurts."
          ] }
        ]
      },      {
        id: 7,
        title: "Kendinizi halsiz, titrer vaziyette hissediyors…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_hkm_7", subtitle: "You are feeling weak, shaky, and sweating. Report your glucose drop to the table." },
        { speaker: "user",
          accepted: [
          "my blood sugar is low",
          "low sugar"
          ],
          hints: [
          "Kendinizi halsiz, titrer vaziyette hissediyorsunuz. Şekerinizin düştüğünü masaya bildiriyorsunuz.",
          "'blood' ve 'sugar' kelimelerini kullan.",
          "My blood sugar is low."
          ] }
        ]
      },      {
        id: 8,
        title: "Tansiyonunuzun yükseldiğini ve başınızda zonkl…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_hkm_8", subtitle: "You notice your blood pressure is spiking, causing a pulsing feeling in your head. Inform the Jury about your hypertension." },
        { speaker: "user",
          accepted: [
          "my blood pressure is high",
          "high blood pressure"
          ],
          hints: [
          "Tansiyonunuzun yükseldiğini ve başınızda zonklama yarattığını fark ettiniz. Jüriye yüksek tansiyon durumunuzu bildiriyorsunuz.",
          "'blood' ve 'pressure' kelimelerini kullan.",
          "My blood pressure is high."
          ] }
        ]
      },      {
        id: 9,
        title: "Ringe çağrılmadan hemen önce papyonunuzun çıkt…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_juri_hkm_9", subtitle: "You realize your bow tie came off and is missing. Ask a colleague or Jury for a spare." },
        { speaker: "user",
          accepted: [
          "i lost my bow tie do you have any extra one",
          "lost my bow tie have one"
          ],
          hints: [
          "Ringe çağrılmadan hemen önce papyonunuzun çıktığını ve kaybolduğunu fark ettiniz. Bir meslektaşınızdan veya Jüriden yedek istiyorsunuz.",
          "'lost' ve 'have' kelimelerini kullan.",
          "I lost my bow tie. Do you have any extra one?"
          ] }
        ]
      }
      ] },      { id: "d2_ring", label: "Ring", labelTr: "Ring", scenes: [
      {
        id: 1,
        title: "Ring zemin kaplamasının köşeden çözüldüğünü ve…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ring_1", subtitle: "You notice that the canvas fabric has unfastened from the corner or has dangerous folds that could trip the athletes. Inform the Jury." },
        { speaker: "user",
          accepted: [
          "the canvas needs to be fixed"
          ],
          hints: [
          "Ring zemin kaplamasının köşeden çözüldüğünü veya sporcuların takılmasına neden olabilecek tehlikeli katlanmalar oluşturduğunu fark ediyorsun. Jüriye bildiriyorsunuz.",
          "'canvas' ve 'needs' kelimelerini kullan.",
          "The canvas needs to be fixed."
          ] }
        ]
      },      {
        id: 2,
        title: "Clinch esnasında sporcular iplere yaslanıyor v…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ring_2", subtitle: "During a clinch, the athletes lean against the ring boundaries and the lines sag heavily, which is dangerous. Inform the Jury." },
        { speaker: "user",
          accepted: [
          "clinch esnas nda sporcular iplere yaslan yor ve ipler ok fazla sark yor bu durum tehlikelidir j riye bildiriyorsunuz",
          "the ropes are loose",
          "loose ropes"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'clinch' ve 'esnas' kelimelerini kullan.",
          "Clinch esnasında sporcular iplere yaslanıyor ve ipler çok fazla sarkıyor, bu durum tehlikelidir. Jüriye bildiriyorsunuz."
          ] }
        ]
      },      {
        id: 3,
        title: "Bir sonraki maçtan önce ring zemininde süpürül…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ring_3", subtitle: "There is dry dirt, or small debris on the ring floor that needs to be swept before the next bout. Request maintenance." },
        { speaker: "user",
          accepted: [
          "bir sonraki ma tan nce ring zemininde s p r lmesi gereken kuru kir veya k k kal nt lar var g revlilerden temizlik talep ediyorsunuz",
          "the canvas needs to be cleaned",
          "canvas is dirty",
          "ring needs to be cleaned",
          "ring is dirty"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'sonraki' ve 'ring' kelimelerini kullan.",
          "Bir sonraki maçtan önce ring zemininde süpürülmesi gereken kuru kir veya küçük kalıntılar var. Görevlilerden temizlik talep ediyorsunuz."
          ] }
        ]
      },      {
        id: 4,
        title: "Bir sporcunun burun kanaması ring iplerinin he…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ring_4", subtitle: "An athlete's nosebleed has smeared all over the ring ropes. Request maintenance." },
        { speaker: "user",
          accepted: [
          "bir sporcunun burun kanamas ring iplerinin her yerine bula m g revlilerden temizlik talep ediyorsunuz",
          "the ropes need to be cleaned",
          "ropes are dirty"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'sporcunun' ve 'burun' kelimelerini kullan.",
          "Bir sporcunun burun kanaması ring iplerinin her yerine bulaşmış. Görevlilerden temizlik talep ediyorsunuz."
          ] }
        ]
      },      {
        id: 5,
        title: "Yardımcılar mola esnasında çok fazla su döktü …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ring_5", subtitle: "The seconds poured too much water during the break, and now there is a large puddle on the floor causing athletes to lose traction. Request maintenance." },
        { speaker: "user",
          accepted: [
          "yard mc lar mola esnas nda ok fazla su d kt ve u an yerde sporcular n kaymas na neden olan b y k bir su birikintisi var g revlilerden temizlik talep ediyorsunuz",
          "the canvas is too wet and slippery",
          "ring is slippery",
          "ring is wet"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'yard' ve 'mola' kelimelerini kullan.",
          "Yardımcılar mola esnasında çok fazla su döktü ve şu an yerde sporcuların kaymasına neden olan büyük bir su birikintisi var. Görevlilerden temizlik talep ediyorsunuz."
          ] }
        ]
      }
      ] }
    ]
  },
  equipment: {
    label: "Equipment", labelTr: "Ekipman",
    subcategories: [
      { id: "d2_ekipman", label: "Equipment Check", labelTr: "Ekipman Kontrolü", scenes: [
      {
        id: 1,
        title: "Bir sporcu onaylı olmayan eldivenlerle geliyor",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_1", subtitle: "An athlete comes with non-approved gloves. Inform them about the IFMA rule." },
        { speaker: "user",
          accepted: [
          "only ifma approved gloves are allowed",
          "only ifma gloves",
          "change it please"
          ],
          hints: [
          "Bir sporcu onaylı olmayan eldivenlerle geliyor. Ona IFMA kuralını bildiriyorsun.",
          "'only' ve 'ifma' kelimelerini kullan.",
          "Only IFMA approved gloves are allowed."
          ] }
        ]
      },      {
        id: 2,
        title: "Bir sporcu takılarla geliyor",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_2", subtitle: "An athlete comes with jewelery. Tell the athlete to take it off." },
        { speaker: "user",
          accepted: [
          "please remove your jewelry it is not allowed",
          "jewelry off",
          "take off your jewelry"
          ],
          hints: [
          "Bir sporcu takılarla geliyor. Çıkarmasını söylüyorsun.",
          "'remove' ve 'jewelry' kelimelerini kullan.",
          "Please remove your jewelry. It is not allowed."
          ] }
        ]
      },      {
        id: 3,
        title: "Sporcunun eldivenlerinin gevşek olduğunu ve dö…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_3", subtitle: "You notice the athlete's gloves are spinning and not secure. Tell them what to do." },
        { speaker: "user",
          accepted: [
          "the gloves are loose please tape them",
          "tape the gloves"
          ],
          hints: [
          "Sporcunun eldivenlerinin gevşek olduğunu ve döndüğünü fark ediyorsun. Ne yapması gerektiğini söylüyorsun.",
          "'gloves' ve 'loose' kelimelerini kullan.",
          "The gloves are loose. Please tape them."
          ] }
        ]
      },      {
        id: 4,
        title: "Sporcunun kaval koruyucularının  gevşek olduğu…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_4", subtitle: "You notice the athlete's shin guards are spinning and not secure. Tell them what to do." },
        { speaker: "user",
          accepted: [
          "the shin guards are loose please tape them",
          "tape the shin guards"
          ],
          hints: [
          "Sporcunun kaval koruyucularının  gevşek olduğunu ve döndüğünü fark ediyorsun. Ne yapması gerektiğini söylüyorsun.",
          "'shin' ve 'guards' kelimelerini kullan.",
          "The shin guards are loose. Please tape them."
          ] }
        ]
      },      {
        id: 5,
        title: "Sporcunun tişörtü şortunun dışına sarkıyor",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_5", subtitle: "The athlete's t-shirt is hanging outside their shorts. Tell them to fix it." },
        { speaker: "user",
          accepted: [
          "please tuck your shirt into your shorts",
          "into your shorts please"
          ],
          hints: [
          "Sporcunun tişörtü şortunun dışına sarkıyor. Düzeltmesini söylüyorsun.",
          "'tuck' ve 'shirt' kelimelerini kullan.",
          "Please tuck your shirt into your shorts."
          ] }
        ]
      },      {
        id: 6,
        title: "ALTYAZI:  Sporcunun uzun saçları kaskın dışına…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_6", subtitle: "The athlete has long hair that is coming out of the headguard. Tell them the requirement." },
        { speaker: "user",
          accepted: [
          "altyazi sporcunun uzun sa lar kask n d na ta yor yapmas gerekeni s yl yorsun",
          "please use a hair net"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'sporcunun' kelimelerini kullan.",
          "ALTYAZI:  Sporcunun uzun saçları kaskın dışına taşıyor. Yapması gerekeni söylüyorsun."
          ] }
        ]
      },      {
        id: 7,
        title: "ALTYAZI:  Sporcu kaskını takıp ortaya geliyor …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_7", subtitle: ": The athlete put on their headguard and came to the center, but forgot their gum shield. Instruct them." },
        { speaker: "user",
          accepted: [
          "altyazi sporcu kask n tak p ortaya geliyor ama di li ini takmay unutmu talimat veriyorsun",
          "put in your gum shield"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'sporcu' kelimelerini kullan.",
          "ALTYAZI:  Sporcu kaskını takıp ortaya geliyor ama dişliğini takmayı unutmuş. Talimat veriyorsun."
          ] }
        ]
      },      {
        id: 8,
        title: "ALTYAZI:  Maç başlamadan önce ve selamlaşmadan…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_8", subtitle: "Instruct the athletes before starting the bout, after the hand shake." },
        { speaker: "user",
          accepted: [
          "altyazi ma ba lamadan nce ve selamla madan sonra sporculara talimat veriyorsun",
          "put on your headguard",
          "headguard on"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'lamadan' kelimelerini kullan.",
          "ALTYAZI:  Maç başlamadan önce ve selamlaşmadan sonra sporculara talimat veriyorsun."
          ] }
        ]
      },      {
        id: 9,
        title: "ALTYAZI:  Maç tamamen bitti",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_9", subtitle: "The match is completely over. Tell the athletes they can take off their headguard." },
        { speaker: "user",
          accepted: [
          "altyazi ma tamamen bitti sporculara kasklar n karabileceklerini s yl yorsun",
          "remove your headguard",
          "headguard off"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'tamamen' kelimelerini kullan.",
          "ALTYAZI:  Maç tamamen bitti. Sporculara kasklarını  çıkarabileceklerini söylüyorsun."
          ] }
        ]
      },      {
        id: 10,
        title: "ALTYAZI:  Ring içinde sporcuların ekipman kont…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_10", subtitle: ", You checked the athletes' equipment inside the ring and told them to put on their Mongkons." },
        { speaker: "user",
          accepted: [
          "altyazi ring i inde sporcular n ekipman kontrol n yapt n ve mongkon lar n takmalar n s yl yorsun",
          "put on your mongkon",
          "mongkon on"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'ring' kelimelerini kullan.",
          "ALTYAZI:  Ring içinde sporcuların ekipman kontrolünü yaptın ve Mongkon’larını takmalarını söylüyorsun."
          ] }
        ]
      },      {
        id: 11,
        title: "ALTYAZI:  Eldivenler takılmadan önce sporcunun…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_11", subtitle: "You need to check the wrapping on the athlete's hands before the gloves go on. Ask them." },
        { speaker: "user",
          accepted: [
          "altyazi eldivenler tak lmadan nce sporcunun ellerindeki bandaj kontrol etmen gerekiyor",
          "show me your bandage",
          "can i see your bandage"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'eldivenler' kelimelerini kullan.",
          "ALTYAZI:  Eldivenler takılmadan önce sporcunun ellerindeki bandajı kontrol etmen gerekiyor."
          ] }
        ]
      },      {
        id: 12,
        title: "ALTYAZI:  Sporcu 8oz eldiven ile geliyor",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_12", subtitle: "The athlete is coming with 8oz gloves. Remind them of the rule." },
        { speaker: "user",
          accepted: [
          "altyazi sporcu 8oz eldiven ile geliyor kural hat rlat",
          "the gloves must be 10 oz",
          "10 oz gloves only",
          "wrong size change it please"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'sporcu' kelimelerini kullan.",
          "ALTYAZI:  Sporcu 8oz eldiven ile geliyor. Kuralı hatırlat."
          ] }
        ]
      },      {
        id: 13,
        title: "ALTYAZI:  Sporcudan eldivenlerini göstermesini…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_13", subtitle: "Ask the athlete to show you their gloves." },
        { speaker: "user",
          accepted: [
          "altyazi sporcudan eldivenlerini g stermesini iste",
          "can i see your gloves",
          "gloves",
          "show me your gloves"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'sporcudan' kelimelerini kullan.",
          "ALTYAZI:  Sporcudan eldivenlerini göstermesini iste."
          ] }
        ]
      },      {
        id: 14,
        title: "ALTYAZI:  Sporcudan kaskını göstermesini iste",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_14", subtitle: "Ask the athlete to show you their headguards." },
        { speaker: "user",
          accepted: [
          "altyazi sporcudan kask n g stermesini iste",
          "can i see your headguard",
          "headguard",
          "show me your headguard"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'sporcudan' kelimelerini kullan.",
          "ALTYAZI:  Sporcudan kaskını göstermesini iste."
          ] }
        ]
      },      {
        id: 15,
        title: "ALTYAZI:  Sporcudan dişliğini göstermesini iste",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_15", subtitle: "Ask the athlete to show you their gum shield." },
        { speaker: "user",
          accepted: [
          "altyazi sporcudan di li ini g stermesini iste",
          "can i see your gum shield",
          "gum shield",
          "show me your gum shield"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'sporcudan' kelimelerini kullan.",
          "ALTYAZI:  Sporcudan dişliğini göstermesini iste."
          ] }
        ]
      },      {
        id: 16,
        title: "ALTYAZI:  Ekipman kontrolünde sporcuya kasık k…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_16", subtitle: ": During the equipment check, you need to ask the athlete if they are wearing a groin guard." },
        { speaker: "user",
          accepted: [
          "altyazi ekipman kontrol nde sporcuya kas k koruyucusu olup olmad n soruyorsun",
          "do you have a groin guard",
          "groin guard"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'ekipman' kelimelerini kullan.",
          "ALTYAZI:  Ekipman kontrolünde sporcuya kasık koruyucusu olup olmadığını soruyorsun."
          ] }
        ]
      },      {
        id: 17,
        title: "ALTYAZI:  Ekipman kontrolünde sporcuya göğüs k…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_17", subtitle: "During the equipment check, you need to ask a female athlete if she have a chest protector." },
        { speaker: "user",
          accepted: [
          "altyazi ekipman kontrol nde sporcuya g s koruyucusu olup olmad n soruyorsun",
          "do you have a chest protector",
          "chest protector"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'ekipman' kelimelerini kullan.",
          "ALTYAZI:  Ekipman kontrolünde sporcuya göğüs koruyucusu olup olmadığını soruyorsun."
          ] }
        ]
      },      {
        id: 18,
        title: "ALTYAZI:  Sporcunun kaval koruyucusunun altına…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_18", subtitle: "You notice the athlete has ankle sleeves on under their shin guards, which is forbidden in this division. Inform them." },
        { speaker: "user",
          accepted: [
          "altyazi sporcunun kaval koruyucusunun alt na ayak bilek koruyucusu orap takt n fark ediyorsun ki bu kategoride yasak bildiriyorsun",
          "ankle protection is not allowed",
          "no ankle protection",
          "remove your ankle protection",
          "take it off",
          "remove it"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'sporcunun' kelimelerini kullan.",
          "ALTYAZI:  Sporcunun kaval koruyucusunun altına ayak bilek koruyucusu (çorap) taktığını fark ediyorsun ki bu kategoride yasak. Bildiriyorsun."
          ] }
        ]
      },      {
        id: 19,
        title: "ALTYAZI:  Sporcu siyah renkte bir hicap/vücut …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_19", subtitle: ": The athlete comes to the ring wearing a black hijab/body suit. Tell them it must be white." },
        { speaker: "user",
          accepted: [
          "altyazi sporcu siyah renkte bir hicap v cut rt s yle gelmi uygun olmad n beyaz giymesi gerekti ini s yl yorsun",
          "the hijab body suit must be white",
          "white hijab only",
          "white body suit only",
          "wrong colour change it please"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'sporcu' kelimelerini kullan.",
          "ALTYAZI:  Sporcu siyah renkte bir hicap/vücut örtüsüyle gelmiş. Uygun olmadığını, beyaz giymesi gerektiğini söylüyorsun."
          ] }
        ]
      },      {
        id: 20,
        title: "ALTYAZI:  Sporcunun ayaklarını kontrol ediyors…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_20", subtitle: ": You check the athlete's feet and notice their toenails are too long. Tell them to trim them." },
        { speaker: "user",
          accepted: [
          "altyazi sporcunun ayaklar n kontrol ediyorsun ve ayak t rnaklar n n ok uzun oldu unu fark ediyorsun kesmelerini s yl yorsun",
          "your toenails are too long please trim them"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'sporcunun' kelimelerini kullan.",
          "ALTYAZI:  Sporcunun ayaklarını kontrol ediyorsun ve ayak tırnaklarının çok uzun olduğunu fark ediyorsun. Kesmelerini söylüyorsun."
          ] }
        ]
      },      {
        id: 21,
        title: "ALTYAZI:  Antrenör sporcunun yüzüne çok fazla …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_21", subtitle: "The coach applied too much grease on the athlete's face. Tell them to clean it." },
        { speaker: "user",
          accepted: [
          "altyazi antren r sporcunun y z ne ok fazla vazelin s rm silmelerini s yl yorsun",
          "too much vaseline please wipe it off",
          "too much vaseline clean it"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'antren' kelimelerini kullan.",
          "ALTYAZI:  Antrenör sporcunun yüzüne çok fazla vazelin sürmüş. Silmelerini söylüyorsun."
          ] }
        ]
      },      {
        id: 22,
        title: "ALTYAZI:  Sporcunun eldivenlerini inceliyorsun…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_22", subtitle: "You inspect the athlete's gloves and find them damaged/unsuitable. Tell them to change them." },
        { speaker: "user",
          accepted: [
          "altyazi sporcunun eldivenlerini inceliyorsun ve uygun olmad n g r yorsun de i tirmesini s yl yorsun",
          "these gloves are not acceptable please change them",
          "not acceptable change please",
          "change the gloves"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'sporcunun' kelimelerini kullan.",
          "ALTYAZI:  Sporcunun eldivenlerini inceliyorsun ve uygun olmadığını görüyorsun. Değiştirmesini söylüyorsun."
          ] }
        ]
      },      {
        id: 23,
        title: "ALTYAZI:  Sporcunun kaval koruyucularını incel…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_23", subtitle: "You inspect the athlete's shin guards and find them damaged/unsuitable. Tell them to change them." },
        { speaker: "user",
          accepted: [
          "altyazi sporcunun kaval koruyucular n inceliyorsun ve uygun olmad n g r yorsun de i tirmesini s yl yorsun",
          "these shin guards are not acceptable please change them",
          "not acceptable change please",
          "change the shin guards"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'sporcunun' kelimelerini kullan.",
          "ALTYAZI:  Sporcunun kaval koruyucularını inceliyorsun ve uygun olmadığını görüyorsun. Değiştirmesini söylüyorsun."
          ] }
        ]
      },      {
        id: 24,
        title: "ALTYAZI:  Sporcunun göğüs koruyucsunu  inceliy…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_24", subtitle: "You inspect the athlete's chest protector and find them damaged/unsuitable. Tell them to change them." },
        { speaker: "user",
          accepted: [
          "altyazi sporcunun g s koruyucsunu inceliyorsun ve uygun olmad n g r yorsun de i tirmesini s yl yorsun",
          "this chest protector is not acceptable please change it",
          "not acceptable change please",
          "change the chest protector"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'sporcunun' kelimelerini kullan.",
          "ALTYAZI:  Sporcunun göğüs koruyucsunu  inceliyorsun ve uygun olmadığını görüyorsun. Değiştirmesini söylüyorsun."
          ] }
        ]
      },      {
        id: 25,
        title: "ALTYAZI:  Sporcunun kaskını inceliyorsun ve uy…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_25", subtitle: "You inspect the athlete's headguard and find them damaged/unsuitable. Tell them to change them." },
        { speaker: "user",
          accepted: [
          "altyazi sporcunun kask n inceliyorsun ve uygun olmad n g r yorsun de i tirmesini s yl yorsun",
          "this headguard is not acceptable please change it",
          "not acceptable change please",
          "change the headguard"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'sporcunun' kelimelerini kullan.",
          "ALTYAZI:  Sporcunun kaskını inceliyorsun ve uygun olmadığını görüyorsun. Değiştirmesini söylüyorsun."
          ] }
        ]
      },      {
        id: 26,
        title: "Bir sporcu onaylı olmayan şort ile geliyor",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_26", subtitle: "An athlete comes with non-approved shorts. Tell the athlete to change it." },
        { speaker: "user",
          accepted: [
          "these shorts are not approved please change them",
          "not approved change please",
          "change the shorts"
          ],
          hints: [
          "Bir sporcu onaylı olmayan şort ile geliyor. Değiştirmesini söyle..",
          "'these' ve 'shorts' kelimelerini kullan.",
          "These shorts are not approved. Please change them."
          ] }
        ]
      },      {
        id: 27,
        title: "Bir sporcu onaylı olmayan atlet ile  geliyor",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_27", subtitle: "An athlete comes with non-approved shirts. Tell the athlete to change it." },
        { speaker: "user",
          accepted: [
          "this shirt is not approved please change it",
          "not approved change please",
          "change the shirt"
          ],
          hints: [
          "Bir sporcu onaylı olmayan atlet ile  geliyor. Değiştirmesini söyle..",
          "'shirt' ve 'approved' kelimelerini kullan.",
          "This shirt is not approved. Please change it."
          ] }
        ]
      },      {
        id: 28,
        title: "ALTYAZI:  Sporcunun saç tokası taktığını fark …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ekipman_28", subtitle: ": You notice the athlete has a metal or plastic hair clip in their hair. Tell them to remove it." },
        { speaker: "user",
          accepted: [
          "altyazi sporcunun sa tokas takt n fark ediyorsun karmas n s yl yorsun",
          "please remove your hair clip it is not allowed"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'sporcunun' kelimelerini kullan.",
          "ALTYAZI:  Sporcunun saç tokası taktığını fark ediyorsun. Çıkarmasını söylüyorsun."
          ] }
        ]
      }
      ] },      { id: "d2_kose", label: "Second", labelTr: "Köşe Görevlisi", scenes: [
      {
        id: 1,
        title: "ALTYAZI:  Köşedeki yardımcı antrenörün sandale…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_kose_1", subtitle: "You notice a second wearing sandals or slippers in the corner. Tell them the rule." },
        { speaker: "user",
          accepted: [
          "altyazi k edeki yard mc antren r n sandalet veya terlik giydi ini fark ediyorsun ona kural bildiriyorsun",
          "only sports shoes are allowed",
          "only sports shoes",
          "shoes are not accepted"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'edeki' kelimelerini kullan.",
          "ALTYAZI:  Köşedeki yardımcı antrenörün sandalet veya terlik giydiğini fark ediyorsun. Ona kuralı bildiriyorsun."
          ] }
        ]
      },      {
        id: 2,
        title: "ALTYAZI:  Köşe görevlisi ağır bir ceket veya s…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_kose_2", subtitle: "A second is wearing a heavy jacket or non-sports clothing. Tell them to take it off." },
        { speaker: "user",
          accepted: [
          "altyazi k e g revlisi a r bir ceket veya spor d bir k yafet giyiyor karmas n s yl yorsun",
          "please remove your jacket",
          "jacket is not accepted"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'revlisi' kelimelerini kullan.",
          "ALTYAZI:  Köşe görevlisi ağır bir ceket veya spor dışı bir kıyafet giyiyor. Çıkarmasını söylüyorsun."
          ] }
        ]
      },      {
        id: 3,
        title: "ALTYAZI:  Wai Kru bitti ve maçın başlama zaman…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_kose_3", subtitle: "The Wai Kru is finished and it is time for the bout to start. Tell the corner they can equip the kask." },
        { speaker: "user",
          accepted: [
          "altyazi wai kru bitti ve ma n ba lama zaman geldi k eye kask takabileceklerini s yl yorsun",
          "you may put on the headguard",
          "headguard on"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'bitti' kelimelerini kullan.",
          "ALTYAZI:  Wai Kru bitti ve maçın başlama zamanı geldi. Köşeye kaskı takabileceklerini söylüyorsun."
          ] }
        ]
      },      {
        id: 4,
        title: "ALTYAZI:  Maç tamamen bitti",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_kose_4", subtitle: "The match is completely over. Tell the seconds they can take off the athlete's kask." },
        { speaker: "user",
          accepted: [
          "altyazi ma tamamen bitti k e g revlilerine sporcunun kask n karabileceklerini s yl yorsun",
          "you may remove the headguard",
          "headguard off"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'tamamen' kelimelerini kullan.",
          "ALTYAZI:  Maç tamamen bitti. Köşe görevlilerine sporcunun kaskını çıkarabileceklerini söylüyorsun."
          ] }
        ]
      },      {
        id: 5,
        title: "ALTYAZI:  Maç bitti ancak resmi karar henüz an…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_kose_5", subtitle: "The bout is over, but the official decision hasn't been announced yet. A second tries to untie the gloves. Stop them." },
        { speaker: "user",
          accepted: [
          "altyazi ma bitti ancak resmi karar hen z anons edilmedi bir yard mc eldivenleri zmeye al yor onu durduruyorsun",
          "do not remove the gloves",
          "gloves stay on",
          "gloves stays"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'bitti' kelimelerini kullan.",
          "ALTYAZI:  Maç bitti ancak resmi karar henüz anons edilmedi. Bir yardımcı eldivenleri çözmeye çalışıyor. Onu durduruyorsun."
          ] }
        ]
      },      {
        id: 6,
        title: "ALTYAZI:  Maç başlamadan Köşe Görevlisine başa…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_kose_6", subtitle: "Wish the seconds  good luck before the bout starts." },
        { speaker: "user",
          accepted: [
          "altyazi ma ba lamadan k e g revlisine ba ar lar dile",
          "good luck"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'lamadan' kelimelerini kullan.",
          "ALTYAZI:  Maç başlamadan Köşe Görevlisine başarılar dile."
          ] }
        ]
      },      {
        id: 7,
        title: "ALTYAZI:  Raund başlıyor ve köşe görevlisi su …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_kose_7", subtitle: "The round is starting and the seconds forgot their water bottle on the canvas. Tell them to take it." },
        { speaker: "user",
          accepted: [
          "altyazi raund ba l yor ve k e g revlisi su i esini ring zemininde unuttu almalar n s yl yorsun",
          "please take the water bottle"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'raund' kelimelerini kullan.",
          "ALTYAZI:  Raund başlıyor ve köşe görevlisi su şişesini ring zemininde unuttu. Almalarını söylüyorsun."
          ] }
        ]
      },      {
        id: 8,
        title: "ALTYAZI:  Mola sırasında köşe görevlisi, sporc…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_kose_8", subtitle: ": The second is pouring too much water on the athlete during the break, making the canvas wet. Warn them." },
        { speaker: "user",
          accepted: [
          "altyazi mola s ras nda k e g revlisi sporcunun st ne ok fazla su d k yor ve ring zeminini slat yor onlar uyar yorsun",
          "do not use too much water"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'mola' kelimelerini kullan.",
          "ALTYAZI:  Mola sırasında köşe görevlisi, sporcunun üstüne çok fazla su döküyor ve ring zeminini ıslatıyor. Onları uyarıyorsun."
          ] }
        ]
      },      {
        id: 9,
        title: "ALTYAZI:  Mola esnasında sporcunun dirsekliğin…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_kose_9", subtitle: "During a break, you notice the athlete's elbow guard is slipping. Tell the coach to correct it." },
        { speaker: "user",
          accepted: [
          "altyazi mola esnas nda sporcunun dirsekli inin kayd n fark ediyorsun antren re d zeltmesini s yl yorsun",
          "fix the elbow guard"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'mola' kelimelerini kullan.",
          "ALTYAZI:  Mola esnasında sporcunun dirsekliğinin kaydığını fark ediyorsun. Antrenöre düzeltmesini söylüyorsun."
          ] }
        ]
      },      {
        id: 10,
        title: "ALTYAZI:  Mola esnasında sporcunun kaskının ka…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_kose_10", subtitle: "During a break, you notice the athlete's  headguard is slipping. Tell the coach to correct it." },
        { speaker: "user",
          accepted: [
          "altyazi mola esnas nda sporcunun kask n n kayd n fark ediyorsun antren re d zeltmesini s yl yorsun",
          "fix the headguard"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'mola' kelimelerini kullan.",
          "ALTYAZI:  Mola esnasında sporcunun kaskının kaydığını fark ediyorsun. Antrenöre düzeltmesini söylüyorsun."
          ] }
        ]
      },      {
        id: 11,
        title: "ALTYAZI:  Mola esnasında sporcunun eldivenleri…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_kose_11", subtitle: "During a break, you notice the athlete's gloves are slipping. Tell the coach to correct it." },
        { speaker: "user",
          accepted: [
          "altyazi mola esnas nda sporcunun eldivenlerinin kayd n fark ediyorsun antren re d zeltmesini s yl yorsun",
          "fix the gloves"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'mola' kelimelerini kullan.",
          "ALTYAZI:  Mola esnasında sporcunun eldivenlerinin kaydığını fark ediyorsun. Antrenöre düzeltmesini söylüyorsun."
          ] }
        ]
      },      {
        id: 12,
        title: "ALTYAZI:  Mola esnasında sporcunun gövde koruy…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_kose_12", subtitle: "During a break, you notice the athlete's chest protector is slipping. Tell the coach to correct it." },
        { speaker: "user",
          accepted: [
          "altyazi mola esnas nda sporcunun g vde koruycusunun kayd n fark ediyorsun antren re d zeltmesini s yl yorsun",
          "fix the chest protector"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'mola' kelimelerini kullan.",
          "ALTYAZI:  Mola esnasında sporcunun gövde koruycusunun kaydığını fark ediyorsun. Antrenöre düzeltmesini söylüyorsun."
          ] }
        ]
      },      {
        id: 13,
        title: "ALTYAZI:  Maç esnasında sporcunun dirseklikler…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_kose_13", subtitle: "The athlete's elbow guards keep shifting during the action. Tell the corner to secure them with tape." },
        { speaker: "user",
          accepted: [
          "altyazi ma esnas nda sporcunun dirseklikleri s rekli d n yor k eye onlar bantla sabitlemelerini s yl yorsun",
          "tape the elbow guard"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'esnas' kelimelerini kullan.",
          "ALTYAZI:  Maç esnasında sporcunun dirseklikleri sürekli dönüyor. Köşeye onları bantla sabitlemelerini söylüyorsun."
          ] }
        ]
      },      {
        id: 14,
        title: "ALTYAZI:  Maç esnasında sporcunun kaval koruyu…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_kose_14", subtitle: "The athlete's gloves keep shifting during the action. Tell the corner to secure them with tape." },
        { speaker: "user",
          accepted: [
          "altyazi ma esnas nda sporcunun kaval koruyucular s rekli d n yor k eye onlar bantla sabitlemelerini s yl yorsun",
          "tape the gloves"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'esnas' kelimelerini kullan.",
          "ALTYAZI:  Maç esnasında sporcunun kaval koruyucuları sürekli dönüyor. Köşeye onları bantla sabitlemelerini söylüyorsun."
          ] }
        ]
      },      {
        id: 15,
        title: "ALTYAZI:  Maç esnasında sporcunun kaval koruyu…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_kose_15", subtitle: "The athlete's shin guards keep shifting during the action. Tell the corner to secure them with tape." },
        { speaker: "user",
          accepted: [
          "altyazi ma esnas nda sporcunun kaval koruyucular s rekli d n yor k eye onlar bantla sabitlemelerini s yl yorsun",
          "tape the shin guards"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'esnas' kelimelerini kullan.",
          "ALTYAZI:  Maç esnasında sporcunun kaval koruyucuları sürekli dönüyor. Köşeye onları bantla sabitlemelerini söylüyorsun."
          ] }
        ]
      },      {
        id: 16,
        title: "ALTYAZI:  Raund başlamadan hemen önce köşe ipl…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_kose_16", subtitle: "The corner left a towel hanging on the ropes just before the round starts. Tell them to remove it." },
        { speaker: "user",
          accepted: [
          "altyazi raund ba lamadan hemen nce k e iplerde bir havlu as l b rakt havluyu kald rmalar n s yl yorsun",
          "please remove the towel",
          "towel away"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'raund' kelimelerini kullan.",
          "ALTYAZI:  Raund başlamadan hemen önce köşe iplerde bir havlu asılı bıraktı. Havluyu kaldırmalarını söylüyorsun."
          ] }
        ]
      },      {
        id: 17,
        title: "ALTYAZI:  Ara esnasında yardımcılar iplerin ar…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_kose_17", subtitle: "During the break, one of the second is leaning inside of the ring under the ropes. Tell him/her to lean over the ropes." },
        { speaker: "user",
          accepted: [
          "altyazi ara esnas nda yard mc lar iplerin aras ndan ringin i ine uzan yor i plerin st nden uzanmas n s yl yorsun",
          "please lean over the ropes",
          "over the ropes"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'esnas' kelimelerini kullan.",
          "ALTYAZI:  Ara esnasında yardımcılar iplerin arasından ringin içine uzanıyor. İplerin üstünden uzanmasını söylüyorsun."
          ] }
        ]
      },      {
        id: 18,
        title: "ALTYAZI:  Sporcu kırmızı veya pembe renk bir d…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_kose_18", subtitle: "The athlete comes with a red or pink gum shield, which is forbidden. Tell them to change it." },
        { speaker: "user",
          accepted: [
          "altyazi sporcu k rm z veya pembe renk bir di likle geliyor ki bu yasakt r de i tirmesini s yl yorsun",
          "this gum shield is not acceptable please change it"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'altyazi' ve 'sporcu' kelimelerini kullan.",
          "ALTYAZI:  Sporcu kırmızı veya pembe renk bir dişlikle geliyor ki bu yasaktır. Değiştirmesini söylüyorsun."
          ] }
        ]
      }
      ] }
    ]
  },
  referee: {
    label: "Referee", labelTr: "Orta Hakem",
    subcategories: [
      { id: "d2_orta", label: "Referee Commands", labelTr: "Komutlar", scenes: [
      {
        id: 1,
        title: "İlk raund başlamadan hemen önce her iki sporcu…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_orta_1", subtitle: "Bring both athletes together just before start the bout, command them to show respect, wish them well and send them to their corners." },
        { speaker: "user",
          accepted: [
          "red blue come to the center shake hands good luck to your corners"
          ],
          hints: [
          "İlk raund başlamadan hemen önce her iki sporcuyu da ortaya çağırıyor, birbirlerine saygı göstermelerini söylüyor, başarılar diliyor ve köşelerine gönderiyorsun.",
          "'blue' ve 'come' kelimelerini kullan.",
          "Red, Blue, come to the center. Shake hands. Good luck. To your corners."
          ] }
        ]
      },      {
        id: 2,
        title: "Sporcular kasklarını taktılar ve köşelerinde d…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_orta_2", subtitle: "The athletes have put on their helmets and are waiting in their corners, ready to fight. Signal the start of the round to the jury, the doctor, and the timekeeper. Then, start the match with the command 'CHOCK'." },
        { speaker: "user",
          accepted: [
          "jury doctor time chock"
          ],
          hints: [
          "Sporcular kasklarını taktılar ve köşelerinde dövüşmek için hazır bekliyorlar. Jüriye, doktora ve Zaman Hakemine raundun başladığını belirt. Ve CHOCK komutu ile maçı başlat.",
          "'jury' ve 'doctor' kelimelerini kullan.",
          "Jury, Doctor, Time, CHOCK."
          ] }
        ]
      },      {
        id: 3,
        title: "Raund devam ederken kırmızı köşe sporcusunun g…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_orta_3", subtitle: "The red corner athlete's body protector has come loose while the round is in progress. Order the timekeeper to stop the time so the second can fix the equipment." },
        { speaker: "user",
          accepted: [
          "stop the time",
          "time"
          ],
          hints: [
          "Raund devam ederken kırmızı köşe sporcusunun gövde koruyucusu çözüldü. Köşe Görevlisinin ekipmanı düzeltmesi için Zaman Hakemine zamanı durdurması için komut ver:",
          "'stop' ve 'time' kelimelerini kullan.",
          "Stop the Time."
          ] }
        ]
      },      {
        id: 4,
        title: "Mavi köşe sporcusu, kırmızı köşe ringte hazır …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_orta_4", subtitle: "The blue corner athlete has not yet arrived at the ringside, even though the red corner athlete is ready in the ring. Tell the timekeeper to start the 2-minute waiting period." },
        { speaker: "user",
          accepted: [
          "start the 2 minutes",
          "2 minutes"
          ],
          hints: [
          "Mavi köşe sporcusu, kırmızı köşe ringte hazır beklemesine rağmen henüz ring tarafına gelmedi. Zaman Hakemine 2 dakikalık bekleme süresini başlatmasını söyle:",
          "'start' ve 'minutes' kelimelerini kullan.",
          "Start the 2 Minutes."
          ] }
        ]
      },      {
        id: 5,
        title: "Sporculara seni dikkatlice dinlemelerini tembi…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_orta_5", subtitle: "Tell the athletes to listen to you carefully." },
        { speaker: "user",
          accepted: [
          "listen to my commands",
          "listen to me",
          "listen to me carefully",
          "listen carefully"
          ],
          hints: [
          "Sporculara seni dikkatlice dinlemelerini tembihliyorsun.",
          "'listen' ve 'commands' kelimelerini kullan.",
          "Listen to my commands."
          ] }
        ]
      },      {
        id: 6,
        title: "Kendini koruyamayan pasif dövüşen sporcuyu din…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_orta_6", subtitle: "You have started a count to give a rest to the passive athlete who cannot defend themselves. Once the count is finished, you ask for verbal confirmation from the athlete. Ask them if they are okay:" },
        { speaker: "user",
          accepted: [
          "are you okay",
          "okay",
          "will you continue",
          "continue",
          "do you want to continue"
          ],
          hints: [
          "Kendini koruyamayan pasif dövüşen sporcuyu dinlendirmek için sayma başlattın. Sayma bitince sporcudan sözlü onay istiyorsun. Ona iyi olup olmadığını sor:",
          "'okay' kelimelerini kullan.",
          "Are you okay?"
          ] }
        ]
      },      {
        id: 7,
        title: "Kendini koruyamayan pasif dövüşen sporcuyu din…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_orta_7", subtitle: "You have started a count to give a rest to the passive athlete who cannot defend themselves. During the count, the athlete shakes their head, indicating they do not wish to continue. You ask the athlete if they want to continue, in order to get verbal confirmation and ensure the coach clearly understands the situation:" },
        { speaker: "user",
          accepted: [
          "do you not want to continue",
          "do you want to fight",
          "you don t want",
          "you don t want to continue",
          "will you continue",
          "continue"
          ],
          hints: [
          "Kendini koruyamayan pasif dövüşen sporcuyu dinlendirmek için sayma başlattın. Sayma süresince sporcu devam etmek istemediğini belirtircesine kafasını salladı. Sporcudan sözlü teyit almak ve antrenöründe durumu net anlayabilmesi için sporcuya devam etmek isteyip istemediğini soruyorsun:",
          "'want' ve 'continue' kelimelerini kullan.",
          "Do you not want to continue?"
          ] }
        ]
      },      {
        id: 8,
        title: "Çok çekişmeli geçen bir raund sırasında kırmız…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_orta_8", subtitle: "During an intense round, the red corner coach stands up and starts shouting. You stop the bout and warn the cornerman." },
        { speaker: "user",
          accepted: [
          "ok eki meli ge en bir raund s ras nda k rm z k e antren r aya a kalk p ba rmaya ba lad ma durdurdun ve ihlali yapan k e g revlisini uyar yorsun",
          "don t talk sit down"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'meli' ve 'raund' kelimelerini kullan.",
          "Çok çekişmeli geçen bir raund sırasında kırmızı köşe antrenörü ayağa kalkıp bağırmaya başladı. Maçı durdurdun ve ihlali yapan Köşe Görevlisini uyarıyorsun."
          ] }
        ]
      },      {
        id: 9,
        title: "Knockdown durumunda maçı durdur, rakibi beyaz …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_orta_9", subtitle: "In the event of a knockdown, stop the match, send the opponent to the white corner, and start counting." },
        { speaker: "user",
          accepted: [
          "knockdown durumunda ma durdur rakibi beyaz k eye g nderip saymaya ba la",
          "yoot white corner nueng"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'knockdown' ve 'durumunda' kelimelerini kullan.",
          "Knockdown durumunda maçı durdur, rakibi beyaz köşeye gönderip saymaya başla."
          ] }
        ]
      },      {
        id: 10,
        title: "Knockdown durumunda beyaz köşeye gönderdiğin s…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_orta_10", subtitle: "The athlete you sent to the white corner during a knockdown is leaning their arms on the ropes to rest. Tell the athlete to lower their arms." },
        { speaker: "user",
          accepted: [
          "knockdown durumunda beyaz k eye g nderdi in sporcu kollar n iplere atm dinlenir vaziyette duruyor sporcuya kollar n indirmesini s yle",
          "arms down"
          ],
          hints: [
          "Duruma uygun kararı/cümleyi söyle.",
          "'knockdown' ve 'durumunda' kelimelerini kullan.",
          "Knockdown durumunda beyaz köşeye gönderdiğin sporcu kollarını iplere atmış dinlenir vaziyette duruyor. Sporcuya kollarını indirmesini söyle."
          ] }
        ]
      }
      ] },      { id: "d2_uyari", label: "Cautions", labelTr: "Uyarılar", scenes: [
      {
        id: 1,
        title: "Bir sporcu ilk kez küçük bir teknik faul işliyor",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_1", subtitle: "An athlete commits a minor technical foul for the first time. Issue a Caution to them." },
        { speaker: "user",
          accepted: [
          "this is your first caution",
          "first caution"
          ],
          hints: [
          "Bir sporcu ilk kez küçük bir teknik faul işliyor. Ona bir sözlü uyarı (caution) veriyorsun.",
          "'first' ve 'caution' kelimelerini kullan.",
          "This is your first caution."
          ] }
        ]
      },      {
        id: 2,
        title: "Aynı sporcu ilk uyarını görmezden geliyor ve k…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_2", subtitle: "The same athlete ignores your first Caution and repeats the minor foul. Issue the final Caution before Warning." },
        { speaker: "user",
          accepted: [
          "this is your last caution",
          "last caution",
          "this is your second caution",
          "second cauiton"
          ],
          hints: [
          "Aynı sporcu ilk uyarını görmezden geliyor ve küçük faulü tekrarlıyor. Ceza vermeden önce o son uyarını veriyorsun.",
          "'last' ve 'caution' kelimelerini kullan.",
          "This is your last caution."
          ] }
        ]
      },      {
        id: 3,
        title: "Sporcular CHOCK komutundan sonra selamlaşmak i…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_3", subtitle: "The athletes wanted to greet each other after the 'CHOCK' command. Remind the athletes that there is no shaking hands once the match has started:" },
        { speaker: "user",
          accepted: [
          "no shaking hands during the fight",
          "no shaking hands"
          ],
          hints: [
          "Sporcular CHOCK komutundan sonra selamlaşmak istedi. Maç başladıktan sonra selamlaşma olmadığını sporculara hatırlat:",
          "'shaking' ve 'hands' kelimelerini kullan.",
          "No shaking hands during the fight."
          ] }
        ]
      },      {
        id: 4,
        title: "Raund esnasında mavi köşe dövüşçüsü rakibini k…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_4", subtitle: "During a active round, the blue corner fighter keeps talking aggressively to provoke their opponent. Instruct them to stop." },
        { speaker: "user",
          accepted: [
          "no talking",
          "don t talk"
          ],
          hints: [
          "Raund esnasında mavi köşe dövüşçüsü rakibini kışkırtmak için sürekli agresif bir şekilde konuşuyor. Durmasını emrediyorsun.",
          "'talking' kelimelerini kullan.",
          "No talking."
          ] }
        ]
      },      {
        id: 5,
        title: "Bir sporcu dinlenmek amacıyla dişliğini bilere…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_5", subtitle: "An athlete deliberately drops their mouthguard on the canvas to get a rest. Command them immediately." },
        { speaker: "user",
          accepted: [
          "don t spit the gum shield"
          ],
          hints: [
          "Bir sporcu dinlenmek amacıyla dişliğini bilerek ring zeminine düşürüyor. Ona derhal talimat veriyorsun.",
          "'don't' ve 'spit' kelimelerini kullan.",
          "Don't spit the gum shield."
          ] }
        ]
      },      {
        id: 6,
        title: "Sporcu diğer sporcuya çelme takıyor",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_6", subtitle: "The athlete trips the other athlete.  Issue a Caution to them. Issue a Caution to them." },
        { speaker: "user",
          accepted: [
          "no sweep",
          "sweeping without muaythai skill is not allowed",
          "don t sweep",
          "no sweeping"
          ],
          hints: [
          "Sporcu diğer sporcuya çelme takıyor. Ona bir sözlü uyarı (caution) veriyorsun.",
          "'sweep' kelimelerini kullan.",
          "No sweep."
          ] }
        ]
      },      {
        id: 7,
        title: "Bir sporcu, rakibin kolunu alttan kilitleyip b…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_7", subtitle: "An athlete clamps down on the opponent's neck while locking their arm underneath. Issue a Caution to them." },
        { speaker: "user",
          accepted: [
          "no head arm hold",
          "don t hold the head",
          "no holding the head"
          ],
          hints: [
          "Bir sporcu, rakibin kolunu alttan kilitleyip boynuna baskı uyguluyor (kafa-kol yapıyor). Ona bir sözlü uyarı (caution) veriyorsun.",
          "'head' ve 'hold' kelimelerini kullan.",
          "No head-arm hold."
          ] }
        ]
      },      {
        id: 8,
        title: "Clinch esnasında dövüşçü, kafasının üst kısmın…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_8", subtitle: "During a clinch, the fighter uses the top of their head to strike the opponent's face/head. Stop the action and caution the faul." },
        { speaker: "user",
          accepted: [
          "headbutting is not allowed",
          "no headbutt"
          ],
          hints: [
          "Clinch esnasında dövüşçü, kafasının üst kısmını kullanarak rakibin yüzüne/kafasına vuruyor. Aksiyonu durdurup faulü uyar.",
          "'headbutting' ve 'allowed' kelimelerini kullan.",
          "Headbutting is not allowed."
          ] }
        ]
      },      {
        id: 9,
        title: "Bir sporcu diz vuruşu yaparken dengede kalmak …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_9", subtitle: "An athlete grabs the ropes with their hand to stay balanced while delivering a knee strike. Caution them." },
        { speaker: "user",
          accepted: [
          "do not hold the ropes",
          "don t hold the ropes",
          "not holding the ropes",
          "no holding the ropes",
          "no ropes",
          "not holding"
          ],
          hints: [
          "Bir sporcu diz vuruşu yaparken dengede kalmak için eliyle ipleri tutuyor. Ona sözlü uyarı veriyorsun.",
          "'hold' ve 'ropes' kelimelerini kullan.",
          "Do not hold the ropes."
          ] }
        ]
      },      {
        id: 10,
        title: "Sporcu, iznini almadan kaskını düzeltmek için …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_10", subtitle: "The athlete took off his helmet to adjust it without your permission. Warn him." },
        { speaker: "user",
          accepted: [
          "intentionally removing or displacing equipment is not allowed",
          "no removing the headguard",
          "don t remove the headguard",
          "don t remove the equipment",
          "don t take off your headguard"
          ],
          hints: [
          "Sporcu, iznini almadan kaskını düzeltmek için çıkardı. Onu uyar.",
          "'intentionally' ve 'removing' kelimelerini kullan.",
          "Intentionally removing or displacing equipment is not allowed."
          ] }
        ]
      },      {
        id: 11,
        title: "Klinik (clinch) esnasında bir sporcu kalçasını…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_11", subtitle: "During a clinch, an athlete uses their hip to lift and flip their opponent onto the canvas. Stop them and state the foul." },
        { speaker: "user",
          accepted: [
          "no hip throw",
          "don t throw",
          "no throwing",
          "not throwing"
          ],
          hints: [
          "Klinik (clinch) esnasında bir sporcu kalçasını kullanarak rakibini kaldırıp ring zeminine fırlatıyor. Onu durduruyorsun ve faulü söylüyorsun.",
          "'throw' kelimelerini kullan.",
          "No hip throw."
          ] }
        ]
      },      {
        id: 12,
        title: "Raundun bittiğini belirten gong çaldıktan ve s…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_12", subtitle: "An athlete delivers a punch just after the round-ending gong has sounded and you commanded \"YOOT\". Caution them about the severe rule breach." },
        { speaker: "user",
          accepted: [
          "no striking after yoot",
          "listen to me carefully",
          "stop after yoot",
          "don t strike after yoot"
          ],
          hints: [
          "Raundun bittiğini belirten gong çaldıktan ve sen \"YUUT\" komutunu verdikten hemen sonra bir sporcu bir yumruk atıyor. Onu bu ciddi kural ihlali hakkında uyarıyorsun.",
          "'striking' ve 'after' kelimelerini kullan.",
          "No striking after YOOT."
          ] }
        ]
      },      {
        id: 13,
        title: "Mavi dövüşçü, kırmızı dövüşçünün bacağını yaka…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_13", subtitle: "The blue fighter catches the red fighter's leg and takes 4 steps forward across the ring without throwing any strike. Stop the movement and caution." },
        { speaker: "user",
          accepted: [
          "no pushing foward more than twice",
          "no pushing",
          "don t push",
          "not more than twice"
          ],
          hints: [
          "Mavi dövüşçü, kırmızı dövüşçünün bacağını yakalıyor ve herhangi bir vuruş yapmadan ring boyunca ileriye doğru 4 adım atıyor. Hareketi durdurup uyar.",
          "'pushing' ve 'foward' kelimelerini kullan.",
          "No pushing foward more than twice."
          ] }
        ]
      },      {
        id: 14,
        title: "Kafaya vuruşların tamamen yasak olduğu bir alt…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_14", subtitle: "In a junior division match where head strikes are completely forbidden, an athlete throws a direct punch to the face. Issue a Caution to them." },
        { speaker: "user",
          accepted: [
          "no strikes to the head",
          "no head",
          "no strike to head"
          ],
          hints: [
          "Kafaya vuruşların tamamen yasak olduğu bir alt yaş kategorisi maçında, bir sporcu yüze direkt yumruk atıyor. Ona bir sözlü uyarı (caution) veriyorsun.",
          "'strikes' ve 'head' kelimelerini kullan.",
          "No strikes to the head."
          ] }
        ]
      },      {
        id: 15,
        title: "Bir sporcu izin istemeden kaskını çıkarıyor",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_15", subtitle: "An athlete takes off their headguard without asking for your permission. Issue a Caution to them." },
        { speaker: "user",
          accepted: [
          "don t remove equipment",
          "don t remove the headguard",
          "don t remove your headguard",
          "headguard stays",
          "don t take off your headguard",
          "don t take off",
          "no removing the headguard",
          "no removing the equipment"
          ],
          hints: [
          "Bir sporcu izin istemeden kaskını çıkarıyor. Ona bir sözlü uyarı (caution) veriyorsun.",
          "'don't' ve 'remove' kelimelerini kullan.",
          "Don't remove equipment."
          ] }
        ]
      },      {
        id: 16,
        title: "Kırmızı dövüşçü, mavi dövüşçüyü belinden kavrı…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_16", subtitle: ": The red fighter wraps their arms around the blue fighter's waist and lifts them completely off the floor using body strength. Warn them immediately." },
        { speaker: "user",
          accepted: [
          "no lifting",
          "don t lift"
          ],
          hints: [
          "Kırmızı dövüşçü, mavi dövüşçüyü belinden kavrıyor ve vücut gücünü kullanarak onu tamamen havaya kaldırıyor. Derhal uyarıyorsun.",
          "'lifting' kelimelerini kullan.",
          "No lifting."
          ] }
        ]
      },      {
        id: 17,
        title: "Sporcu ipi eliyle tutmuyor ama iplerden güç/de…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_17", subtitle: "An athlete is not grabbing the ropes, but they push their back against them to gain extra spring/power to launch a kick. Issue a Caution to them." },
        { speaker: "user",
          accepted: [
          "do not use the ropes",
          "don t use the ropes",
          "not using the ropes",
          "no using the ropes",
          "no ropes"
          ],
          hints: [
          "Sporcu ipi eliyle tutmuyor ama iplerden güç/destek alarak tekme atıyor. Ona bir sözlü uyarı (caution) veriyorsun.",
          "'ropes' kelimelerini kullan.",
          "Do not use the ropes."
          ] }
        ]
      },      {
        id: 18,
        title: "Mavi dövüşçü yere düşüyor ve kırmızı dövüşçü t…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_18", subtitle: "The blue fighter drops to the floor, and the red fighter intentionally drops their full body weight directly on top of them. Issue a Caution to them." },
        { speaker: "user",
          accepted: [
          "don t fall on opponent"
          ],
          hints: [
          "Mavi dövüşçü yere düşüyor ve kırmızı dövüşçü tüm vücut ağırlığını bilinçli olarak onun üstüne bırakıyor. Ona bir sözlü uyarı (caution) veriyorsun.",
          "'don't' ve 'fall' kelimelerini kullan.",
          "Don't fall on opponent."
          ] }
        ]
      },      {
        id: 19,
        title: "Bir sporcu kayıp düşüyor ve bir dizi yere deği…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_19", subtitle: "An athlete slips and has one knee touching the floor, but they still try to throw a punch from that position. Tell them it is forbidden." },
        { speaker: "user",
          accepted: [
          "don t strike from the floor",
          "no striking from the floor",
          "not from the floor"
          ],
          hints: [
          "Bir sporcu kayıp düşüyor ve bir dizi yere değiyor, ama yine de o pozisyondan yumruk atmaya çalışıyor. Bunun yasak olduğunu söylüyorsun.",
          "'don't' ve 'strike' kelimelerini kullan.",
          "Don't strike from the floor."
          ] }
        ]
      },      {
        id: 20,
        title: "Sporcu clinch esnasında çok yoruluyor ve aksiy…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_20", subtitle: "An athlete gets exhausted during heavy clinching and intentionally throws themselves to the canvas to escape the action. Tell him/her to stand up and fight." },
        { speaker: "user",
          accepted: [
          "don t fall fight"
          ],
          hints: [
          "Sporcu clinch esnasında çok yoruluyor ve aksiyondan kaçmak için kendini bilinçli olarak zemine bırakıyor. Kalkıp dövüşmesini emrediyorsun.",
          "'don't' ve 'fall' kelimelerini kullan.",
          "Don't fall. Fight!"
          ] }
        ]
      },      {
        id: 21,
        title: "Hızlı bir pozisyonda sporcu yanlışlıkla diğer …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_21", subtitle: "During a fast exchange, an athlete accidentally lands a low kick directly on the opponent's groin. Issue a Caution to them." },
        { speaker: "user",
          accepted: [
          "no strike to groin",
          "no groin",
          "don t strike to groin",
          "no striking groin"
          ],
          hints: [
          "Hızlı bir pozisyonda sporcu yanlışlıkla diğer sporcunun kasığına vuruyor. Ona bir sözlü uyarı (caution) veriyorsun.",
          "'strike' ve 'groin' kelimelerini kullan.",
          "No strike to groin."
          ] }
        ]
      },      {
        id: 22,
        title: "Kafaya vuruşun yasak olduğu bir alt yaş katego…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_22", subtitle: "In a restricted junior division match, an athlete delivers an illegal knee strike straight to the opponent's head. Issue a Caution." },
        { speaker: "user",
          accepted: [
          "no knees to the head"
          ],
          hints: [
          "Kafaya vuruşun yasak olduğu bir alt yaş kategorisi maçında, sporcu rakibin kafasına diz atıyor. Ona bir sözlü uyarı (caution) veriyorsun.",
          "'knees' ve 'head' kelimelerini kullan.",
          "No knees to the head."
          ] }
        ]
      },      {
        id: 23,
        title: "Kırmızı köşe, mavi köşenin vurmasını engelleme…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_23", subtitle: "The red corner constantly grabs and pulls the blue corner's gloves to prevent them from punching or executing a clean technique. Caution the red corner." },
        { speaker: "user",
          accepted: [
          "don t hold the gloves",
          "no holding the gloves",
          "no holding gloves"
          ],
          hints: [
          "Kırmızı köşe, mavi köşenin vurmasını engellemek veya çekiştirmek için sürekli onun eldivenini tutuyor. Kırmızı köşeyi uyarıyorsun.",
          "'don't' ve 'hold' kelimelerini kullan.",
          "Don't hold the gloves."
          ] }
        ]
      },      {
        id: 24,
        title: "Sporcu birkaç uyarıdan sonra hala hakem komutl…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_24", subtitle: "An athlete has already received multiple verbal cautions but continues to ignore your commands after you command\"YOOT\" or \"YAEK\". Issue a final caution." },
        { speaker: "user",
          accepted: [
          "listen to me carefully obey yoot and yaek",
          "follow my commands"
          ],
          hints: [
          "Sporcu birkaç uyarıdan sonra hala hakem komutlarını dinlemiyor, \"Yoot\" veya \"Yaek\" dedikten sonra durmuyor. Son uyarıyı yapıyorsun.",
          "'listen' ve 'carefully' kelimelerini kullan.",
          "Listen to me carefully. Obey YOOT and YAEK."
          ] }
        ]
      },      {
        id: 25,
        title: "Kafaya dirsek vuruşunun yasak olduğu bir genç …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_25", subtitle: ": In a restricted youth division match, an athlete throws a spinning elbow strike straight to the opponent's face. Issue a Caution." },
        { speaker: "user",
          accepted: [
          "no elbow to head"
          ],
          hints: [
          "Kafaya dirsek vuruşunun yasak olduğu bir genç kategorisi maçında, sporcu rakibin yüzüne dirsek atıyor. Ona bir sözlü uyarı (caution) veriyorsun.",
          "'elbow' ve 'head' kelimelerini kullan.",
          "No elbow to head."
          ] }
        ]
      },      {
        id: 26,
        title: "Sporcu herhangi bir vuruş yapmadan rakibinin b…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_uyari_26", subtitle: "The athlete is holding their opponent's leg without making any strikes. Issue a caution." },
        { speaker: "user",
          accepted: [
          "do not hold the leg",
          "don t hold the leg"
          ],
          hints: [
          "Sporcu herhangi bir vuruş yapmadan rakibinin bacağını tutuyor. Uyar.",
          "'hold' kelimelerini kullan.",
          "Do not hold the leg."
          ] }
        ]
      }
      ] },      { id: "d2_ceza", label: "Warnings", labelTr: "Cezalar", scenes: [
      {
        id: 1,
        title: "Kafaya vuruşların tamamen yasak olduğu bir alt…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ceza_1", subtitle: "In a junior division match where head strikes are completely forbidden, blue corner throws a direct punch to the face third time. Issue a Warning." },
        { speaker: "user",
          accepted: [
          "blue warning strike to the head",
          "blue corner warning strike to head",
          "blue corner warning striking head"
          ],
          hints: [
          "Kafaya vuruşların tamamen yasak olduğu bir alt yaş kategorisi maçında, bir sporcu yüze üçüncü kez direkt yumruk atıyor. Ona Ceza veriyorsun.",
          "'blue' ve 'warning' kelimelerini kullan.",
          "Blue,  Warning, Strike to the head."
          ] }
        ]
      },      {
        id: 2,
        title: "Clinch esnasında kırmızı köşe sporcusu rakibin…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ceza_2", subtitle: "Red corner bites the opponent's shoulder during a close clinch. Stop the fight immediately and announce the Warning to the officials." },
        { speaker: "user",
          accepted: [
          "red corner warning biting",
          "red warning biting"
          ],
          hints: [
          "Clinch esnasında kırmızı köşe sporcusu rakibin omzunu ısırıyor. Maçı derhal durduruyor ve görevlilere cezayı ilan ediyorsun.",
          "'corner' ve 'warning' kelimelerini kullan.",
          "Red Corner, Warning, Biting."
          ] }
        ]
      },      {
        id: 3,
        title: "Kırmızı sporcu, mavi sporcu yerdeyken ona vurdu",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ceza_3", subtitle: "The red fighter strikes the blue fighter while the blue fighter is down. Stop the bout, send the blue fighter to the white corner (if the fighter is fit to continue). Call the red corner to the center, turn to the jury and each judge to officially declare the Warning." },
        { speaker: "user",
          accepted: [
          "red corner warning striking down athlete",
          "red warning biting"
          ],
          hints: [
          "Kırmızı sporcu, mavi sporcu yerdeyken ona vurdu. Müsabakayı durdurun, mavi sporcuyu beyaz köşeye gönderin(sporcunun sağlık durumu müsabakaya devam etmeye uygunsa). Kırmızı köşeyi merkeze çağırın, jüriye ve her bir yan hakeme dönerek resmi olarak Cezayı ilan edin.",
          "'corner' ve 'warning' kelimelerini kullan.",
          "Red Corner, Warning, Striking down athlete."
          ] }
        ]
      },      {
        id: 4,
        title: "Mavi köşe sporcusu öfkeyle rakibine veya köşey…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ceza_4", subtitle: "Blue corner spits on the opponent or towards the corner in anger. Stop the match and state the official Warning." },
        { speaker: "user",
          accepted: [
          "blue corner warning spitting",
          "blue warning biting"
          ],
          hints: [
          "Mavi köşe sporcusu öfkeyle rakibine veya köşeye doğru tükürüyor. Maçı durduruyor ve Ceza veriyorsun.",
          "'blue' ve 'corner' kelimelerini kullan.",
          "Blue Corner, Warning, Spitting."
          ] }
        ]
      },      {
        id: 5,
        title: "Kırmızı köşe sporcusunun bilerek aşağıya bakıp…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ceza_5", subtitle: "You clearly see the red corner look down and intentionally deliver a direct knee strike to the opponent's groin. Stop the fight and issue a Warning." },
        { speaker: "user",
          accepted: [
          "red corner warning striking groin",
          "red warning striking groin",
          "red corner warning strike to groin",
          "red warning strike to groin"
          ],
          hints: [
          "Kırmızı köşe sporcusunun bilerek aşağıya bakıp rakibin kasığına doğrudan diz vurduğunu net şekilde görüyorsun. Maçı durdurup ceza veriyorsun.",
          "'corner' ve 'warning' kelimelerini kullan.",
          "Red Corner, Warning, Striking groin."
          ] }
        ]
      },      {
        id: 6,
        title: "Mavi köşe sporcusu clinch esnasında bilinçli o…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ceza_6", subtitle: "Blue corner deliberately strikes the opponent behind the neck during clinch. Turn to the jury and declare the Warning." },
        { speaker: "user",
          accepted: [
          "blue corner warning striking back of the neck",
          "blue warning striking back of the neck"
          ],
          hints: [
          "Mavi köşe sporcusu clinch esnasında bilinçli olarak rakibin boyun arkasına (enseye) vuruyor. Jüriye dönüp cezayı ilan ediyorsun.",
          "'blue' ve 'corner' kelimelerini kullan.",
          "Blue Corner, Warning, Striking back of the neck."
          ] }
        ]
      },      {
        id: 7,
        title: "Kırmızı köşe sporcusu maç boyunca farklı faul …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ceza_7", subtitle: "Red corner has been continuously warned for different minor fouls (talking, holding ropes etc.) throughout the match. Penalize them for cumulative bad conduct." },
        { speaker: "user",
          accepted: [
          "red corner warning unsportsmanlike behaviour",
          "red warning for unsportsmanlike behaviour"
          ],
          hints: [
          "Kırmızı köşe sporcusu maç boyunca farklı faul türlerinden (konuşma, ip tutma vb.) birçok kez uyarıldı. Bu sportmenlik dışı davranışa Ceza veriyorsun.",
          "'corner' ve 'warning' kelimelerini kullan.",
          "Red Corner, Warning unsportsmanlike behaviour."
          ] }
        ]
      },      {
        id: 8,
        title: "Kafaya vuruşların tamamen yasak olduğu bir alt…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ceza_8", subtitle: "In a junior division match where head strikes are completely forbidden, blue corner throws a direct elbow to the face third time. Issue a Warning." },
        { speaker: "user",
          accepted: [
          "blue corner warning elbow to head",
          "warning for elbow to the head",
          "blue warning elbow to head"
          ],
          hints: [
          "Kafaya vuruşların tamamen yasak olduğu bir alt yaş kategorisi maçında, mavi köşe sporcusu yüze üçüncü kez direkt dirsek atıyor. Ona Ceza veriyorsun.",
          "'blue' ve 'corner' kelimelerini kullan.",
          "Blue Corner, Warning, Elbow to head."
          ] }
        ]
      },      {
        id: 9,
        title: "Kafaya vuruşların tamamen yasak olduğu bir alt…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ceza_9", subtitle: "In a junior division match where head strikes are completely forbidden, red corner throws a direct knee to the face third time. Issue a Warning." },
        { speaker: "user",
          accepted: [
          "red corner warning knee to head",
          "red warning knee to head"
          ],
          hints: [
          "Kafaya vuruşların tamamen yasak olduğu bir alt yaş kategorisi maçında, kırmızı köşe sporcusu yüze üçüncü kez direkt diz atıyor. Ona Ceza veriyorsun.",
          "'corner' ve 'warning' kelimelerini kullan.",
          "Red Corner, Warning, Knee to head."
          ] }
        ]
      },      {
        id: 10,
        title: "Mavi köşe sporcusu dinlenmek amacıyla dişliğin…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ceza_10", subtitle: "Blue corner deliberately drops their mouthguard on the canvas to get a rest third time. Turn to the jury and declare the Warning." },
        { speaker: "user",
          accepted: [
          "blue corner warning gum shield",
          "warning for removing the gum shield",
          "blue warning gum shield"
          ],
          hints: [
          "Mavi köşe sporcusu dinlenmek amacıyla dişliğini bilerek üçüncü kez ring zeminine düşürüyor. Jüriye dönüp cezayı ilan ediyorsun.",
          "'blue' ve 'corner' kelimelerini kullan.",
          "Blue Corner, Warning, Gum shield."
          ] }
        ]
      },      {
        id: 11,
        title: "Kırmızı köşe sporcusu diğer sporcuya üçüncü ke…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ceza_11", subtitle: "Red corner trips the other athlete third time.  Turn to the jury and declare the Warning." },
        { speaker: "user",
          accepted: [
          "red corner warning sweep",
          "warning for sweep",
          "warning for sweeping",
          "red warning sweep"
          ],
          hints: [
          "Kırmızı köşe sporcusu diğer sporcuya üçüncü kez çelme takıyor (süpürme). Jüriye dönüp cezayı ilan ediyorsun.",
          "'corner' ve 'warning' kelimelerini kullan.",
          "Red Corner, Warning, sweep."
          ] }
        ]
      },      {
        id: 12,
        title: "Mavi köşe sporcusu üçüncü kez rakibini tutup h…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ceza_12", subtitle: "The blue corner athlete has lifted their opponent off the ground by holding them for the third time. Stop the action and declare the Warning." },
        { speaker: "user",
          accepted: [
          "warning for wrestling",
          "blue warning wrestling",
          "blue corner warning wrestling"
          ],
          hints: [
          "Mavi köşe sporcusu üçüncü kez rakibini tutup havaya kaldırdı. Aksiyonu durdur ve cezayı ilan et.",
          "'warning' ve 'wrestling' kelimelerini kullan.",
          "Warning for wrestling."
          ] }
        ]
      },      {
        id: 13,
        title: "Clinch esnasında kırmızı köşe sporcusu, kafası…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_ceza_13", subtitle: "During a clinch, red corner uses the top of their head to strike the opponent's face/head third time. Stop the action and declare the Warning." },
        { speaker: "user",
          accepted: [
          "red corner warning headbutt",
          "warning for headbutting",
          "red warning headbutt"
          ],
          hints: [
          "Clinch esnasında kırmızı köşe sporcusu, kafasının üst kısmını kullanarak rakibin yüzüne/kafasına üçüncü vuruyor. Aksiyonu durdurup cezayı ilan et.",
          "'corner' ve 'warning' kelimelerini kullan.",
          "Red Corner, Warning, Headbutt."
          ] }
        ]
      }
      ] },      { id: "d2_karar", label: "Decisions", labelTr: "Kararlar", scenes: [
      {
        id: 1,
        title: "Sporcu rakibine karşılık veremiyor ve kendini …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_karar_1", subtitle: "The athlete cannot respond to the opponent and cannot defend themselves. You give the YOOT command and end the bout with which decision?" },
        { speaker: "user",
          accepted: [
          "referee stops contest safety",
          "rsc s"
          ],
          hints: [
          "Sporcu rakibine karşılık veremiyor ve kendini savunamıyor. YOOT komutunu veriyor ve maçı hangi karar ile bitiriyorsun:",
          "'referee' ve 'stops' kelimelerini kullan.",
          "Referee Stops Contest – Safety"
          ] }
        ]
      },      {
        id: 2,
        title: "Maç tam 3 raund sürdü",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_karar_2", subtitle: "The bout lasted exactly 3 rounds. What is the decision for the final result" },
        { speaker: "user",
          accepted: [
          "win on point",
          "wp"
          ],
          hints: [
          "Maç tam 3 raund sürdü. Bunun sonucunda maç sonucu ne olmuştur?",
          "'point' kelimelerini kullan.",
          "Win on Point"
          ] }
        ]
      },      {
        id: 3,
        title: "Sporcunun maç ortasında kolunun çıktığını fark…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_karar_3", subtitle: "You notice the athlete's arm is dislocated during the fight. You stop the bout with YOOT, pause the clock with TIME command, and call the doctor. With which decision do you end the bout?" },
        { speaker: "user",
          accepted: [
          "referee stops contest injury",
          "rsc i"
          ],
          hints: [
          "Sporcunun maç ortasında kolunun çıktığını fark ediyorsun. YOOT komutu ile maçı durduruyor, Zaman Hakemine TIME komutunu verip, Doktoru çağırıyorsun. Maçı hangi karar ile bitiriyorsun?",
          "'referee' ve 'stops' kelimelerini kullan.",
          "Referee Stops Contest - Injury"
          ] }
        ]
      },      {
        id: 4,
        title: "Mavi köşe sporcusu kafasına aldığı ağır bir da…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_karar_4", subtitle: "The blue corner athlete drops after a heavy strike to the head. You direct the opponent to the white corner. You do not find it safe for the blue athlete to continue. With which decision do you end the bout?" },
        { speaker: "user",
          accepted: [
          "referee stops contest head strike",
          "rsc h"
          ],
          hints: [
          "Mavi köşe sporcusu kafasına aldığı ağır bir darbe ile yere düştü. Rakibi beyaz köşeye yönlendirdin. Mavi köşe sporcusunun devam etmesini doğru bulmadığın durumda maçı hangi karar ile bitirirsin?",
          "'referee' ve 'stops' kelimelerini kullan.",
          "Referee Stops Contest - Head Strike"
          ] }
        ]
      },      {
        id: 5,
        title: "Kırmızı köşe sporcusu kaburgasına aldığı ağır …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_karar_5", subtitle: "The red corner athlete collapses after a heavy strike to the ribs. You direct the opponent to the white corner. You do not find it safe for the red athlete to continue. With which decision do you end the bout?" },
        { speaker: "user",
          accepted: [
          "referee stops contest body strike",
          "rsc b"
          ],
          hints: [
          "Kırmızı köşe sporcusu kaburgasına aldığı ağır bir darbe ile yere çöktü. Rakibi beyaz köşeye yönlendirdin. Kırmızı köşe sporcusunun devam etmesini doğru bulmadığın durumda maçı hangi karar ile bitirirsin?",
          "'referee' ve 'stops' kelimelerini kullan.",
          "Referee Stops Contest – Body Strike"
          ] }
        ]
      },      {
        id: 6,
        title: "U16 kategorisinde kırmızı köşe sporcusuna aynı…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_karar_6", subtitle: "In the U16 category, you counted twice against the red corner athlete in the same round and ended the match. With which decision do you end the bout?" },
        { speaker: "user",
          accepted: [
          "compulsory count limit",
          "ccl"
          ],
          hints: [
          "U16 kategorisinde kırmızı köşe sporcusuna aynı raundda 2 kere saydın ve maçı bitirdin. Hangi kararla bitirirsin?",
          "'compulsory' ve 'count' kelimelerini kullan.",
          "Compulsory Count Limit"
          ] }
        ]
      },      {
        id: 7,
        title: "Mavi köşe kafasına aldığı ağır bir darbe sonuc…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_karar_7", subtitle: "The blue corner athlete is down from a heavy head strike but wants to continue at 8. Right after the CHOK command, they drop again and you start counting from 9. With which decision do you end the bout?" },
        { speaker: "user",
          accepted: [
          "knockout head strike",
          "ko h"
          ],
          hints: [
          "Mavi köşe kafasına aldığı ağır bir darbe sonucu yere serildi. 8’e kadar saydıktan sonra sporcu maça devam edebileceğini belirtti. CHOCK komutundan hemen sonra sporcu tekrardan yere serildi ve 9’dan saymaya başladın. Maçı hangi karar ile bitirirsin:",
          "'knockout' ve 'head' kelimelerini kullan.",
          "Knockout - Head Strike"
          ] }
        ]
      },      {
        id: 8,
        title: "Kırmızı köşe kaburgasına aldığı ağır darbe son…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_karar_8", subtitle: "The red corner drops from a heavy body strike. You send the opponent to the white corner. You notice the red athlete cannot breathe, stop counting immediately, and call the doctor. What is the final decision you report to the Jury?" },
        { speaker: "user",
          accepted: [
          "knockout body strike",
          "ko b"
          ],
          hints: [
          "Kırmızı köşe kaburgasına aldığı ağır darbe sonucu yere serildi. Mavi köşe sporcusunu beyaz köşeye gönderdin. Kırmızı köşe sporcunun nefes alamadığını fark ettiğin an saymayı bitirip doktoru çağırdın. Jüriye maç sonucunu bildiriyorsun:",
          "'knockout' ve 'body' kelimelerini kullan.",
          "Knockout - Body Strike"
          ] }
        ]
      },      {
        id: 9,
        title: "Raund süresince iyi performans gösteremeyen sp…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_karar_9", subtitle: "You start a count for an underperforming athlete to give them a rest. After the count of 8, the athlete clearly states they do not want to continue. What is the match result?" },
        { speaker: "user",
          accepted: [
          "retirement",
          "ret"
          ],
          hints: [
          "Raund süresince iyi performans gösteremeyen sporcuyu dinlendirmek amacıyla doğru pozisyonda saymayı başlattın. 8’den sonra sporcu açıkça devam etmek istemediğini belirtti. Maç sonucu nedir?",
          "'retirement' kelimelerini kullan.",
          "Retirement"
          ] }
        ]
      },      {
        id: 10,
        title: "Maç süresinde iyi performans gösteremeyen bir …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_karar_10", subtitle: "The cornerman throws a towel into the ring for an underperforming athlete during the fight. What is the match result?" },
        { speaker: "user",
          accepted: [
          "retirement",
          "ret"
          ],
          hints: [
          "Maç süresinde iyi performans gösteremeyen bir sporcunun Köşe Görevlisi ring içine havlu attı. Maç sonucu nedir?",
          "'retirement' kelimelerini kullan.",
          "Retirement"
          ] }
        ]
      },      {
        id: 11,
        title: "Yere düşmüş bir sporcuya kasıtlı olarak vuran …",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_karar_11", subtitle: "An athlete intentionally strikes a downed opponent, so you stop the match. You cross your arms over your chest with closed fists to signal the end of the bout. What is the match result?" },
        { speaker: "user",
          accepted: [
          "disqualification",
          "dq"
          ],
          hints: [
          "Yere düşmüş bir sporcuya kasıtlı olarak vuran rakip sporcudan dolayı maçı durdurdun. İki elini de yumruk yaparak kollarını önünde çapraz şekilde tutarak maçın bittiğini belirttin. Maç sonucu nedir:",
          "'disqualification' kelimelerini kullan.",
          "Disqualification"
          ] }
        ]
      },      {
        id: 12,
        title: "Kırmızı köşe, mavi köşe ringe gelmesine rağmen…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_karar_12", subtitle: "One corner fails to arrive at the ring side within the 2-minute limit. By which decision is the opponent declared the winner?" },
        { speaker: "user",
          accepted: [
          "walk over"
          ],
          hints: [
          "Kırmızı köşe, mavi köşe ringe gelmesine rağmen hala daha ring kenarına gelmedi. 2 dakikalık süreden sonra rakip köşe hangi karar ile galip ilan edilir:",
          "'walk' ve 'over' kelimelerini kullan.",
          "Walk Over"
          ] }
        ]
      }
      ] },      { id: "d2_doktor", label: "Doctor", labelTr: "Doktor", scenes: [
      {
        id: 1,
        title: "Maç ortasında burnu kanayan sporcu için maçı d…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_doktor_1", subtitle: "An athlete's nose bleeds mid-fight, so you stop the match and call the doctor. What do you ask the doctor during the short medical examination?" },
        { speaker: "user",
          accepted: [
          "what is the situation",
          "what s the situation"
          ],
          hints: [
          "Maç ortasında burnu kanayan sporcu için maçı durdurup doktoru çağırdın. Doktorun kısa muayenesinde sporcunun durumunu soruyorsun:",
          "'what' ve 'situation' kelimelerini kullan.",
          "What is the situation?"
          ] }
        ]
      },      {
        id: 2,
        title: "Kanaması durmayan sporcu için tekrardan doktor…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_doktor_2", subtitle: "The athlete's nosebleed does not stop, and you call the doctor again. What do you ask the doctor to confirm if the fight can proceed?" },
        { speaker: "user",
          accepted: [
          "can the athlete continue",
          "can he continue",
          "can she continue"
          ],
          hints: [
          "Kanaması durmayan sporcu için tekrardan doktoru çağırdın. Maçın devam edip edemeyeceğini doktora soruyorsun:",
          "'athlete' ve 'continue' kelimelerini kullan.",
          "Can the athlete continue?"
          ] }
        ]
      },      {
        id: 3,
        title: "Doktor sporcuyu muayene etmek için ringin için…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_doktor_3", subtitle: "The doctor attempts to enter the ring to examine a nosebleed, which is not permitted for this type of injury. How do you state the situation?" },
        { speaker: "user",
          accepted: [
          "don t enter the ring",
          "do not enter the ring"
          ],
          hints: [
          "Doktor sporcuyu muayene etmek için ringin içine girmek istiyor. Ancak burun kanaması gibi bir durum için doktorun ringe girmesine izin verilmez. Durumu belirtiyorsun:",
          "'enter' ve 'ring' kelimelerini kullan.",
          "Don’t enter the ring."
          ] }
        ]
      }
      ] },      { id: "d2_mac", label: "Match Start", labelTr: "Maç Başlangıcı", scenes: [
      { id: 1, title: "Sporcuları ortaya çağır", steps: [
        { speaker: "narrator", audioId: "sim_d2_mac_1", subtitle: "Call the athletes to the center and tell them to greet each other." },
        { speaker: "user",
          accepted: [
          "red blue come to the center shake hands good luck to your corners"
          ],
          hints: [
          "Sporcuları ortaya çağır ve selamlaşmalarını söyle.",
          "'center' ve 'shake hands' kelimelerini kullan.",
          "Red, Blue, come to the center. Shake hands. Good luck. To your corners."
          ] }
      ] },      { id: 2, title: "Köşeye gönder, kask taktır", steps: [
        { speaker: "narrator", audioId: "sim_d2_mac_2", subtitle: "Send the athletes to their corners and tell them to put on their headguards." },
        { speaker: "user",
          accepted: [
          "to your corners put on your headguard",
          "put on your headguard",
          "headguard on"
          ],
          hints: [
          "Sporcuları köşelerine gönder ve kasklarını takmalarını söyle.",
          "'headguard' kelimesini kullan.",
          "To your corners. Put on your headguard. / Headguard on."
          ] }
      ] },      { id: 3, title: "Dişlik sor", steps: [
        { speaker: "narrator", audioId: "sim_d2_mac_3", subtitle: "Ask the athletes if they have their mouthguards." },
        { speaker: "user",
          accepted: [
          "gumshield",
          "do you have gumshield",
          "gum shield",
          "do you have gum shield"
          ],
          hints: [
          "Sporculara dişliklerini sor.",
          "'gumshield' kelimesini kullan.",
          "Gumshield? / Do you have gumshield?"
          ] }
      ] },      { id: 4, title: "Raund başlangıcını bildir", steps: [
        { speaker: "narrator", audioId: "sim_d2_mac_4", subtitle: "Signal the start of the round to the judges, doctor, and timekeeper." },
        { speaker: "user",
          accepted: [
          "jury doctor time"
          ],
          hints: [
          "Jüriye, doktora ve zaman hakemine raund başlangıcını bildir.",
          "'jury' 'doctor' 'time' kelimelerini kullan.",
          "Jury, Doctor, Time."
          ] }
      ] },      { id: 5, title: "CHOCK ile başlat", steps: [
        { speaker: "narrator", audioId: "sim_d2_mac_5", subtitle: "Start the bout with the command CHOCK." },
        { speaker: "user",
          accepted: [
          "chock",
          "chok"
          ],
          hints: [
          "CHOCK komutu ile maçı başlat.",
          "'CHOCK' de.",
          "CHOCK."
          ] }
      ] },      { id: 6, title: "Genel: 5 komutu arka arkaya", steps: [
        { speaker: "narrator", audioId: "sim_d2_mac_6", subtitle: "Perform the 5 commands to start the bout." },
        { speaker: "user",
          accepted: [
          "red blue come to the center shake hands good luck to your corners"
          ],
          hints: [
          "1) Sporcuları ortaya çağır ve selamlaşmalarını söyle.",
          "'center' 'shake hands'",
          "Red, Blue, come to the center. Shake hands. Good luck. To your corners."
          ] },
        { speaker: "user",
          accepted: [
          "to your corners put on your headguard",
          "put on your headguard",
          "headguard on"
          ],
          hints: [
          "2) Köşeye gönder, kask taktır.",
          "'headguard'",
          "To your corners. Put on your headguard. / Headguard on."
          ] },
        { speaker: "user",
          accepted: [
          "gumshield",
          "do you have gumshield",
          "gum shield"
          ],
          hints: [
          "3) Dişlik sor.",
          "'gumshield'",
          "Gumshield? / Do you have gumshield?"
          ] },
        { speaker: "user",
          accepted: [
          "jury doctor time chock",
          "jury doctor time chok"
          ],
          hints: [
          "4) Jüri, doktor, zaman + CHOCK.",
          "'jury doctor time chock'",
          "Jury, Doctor, Time, CHOCK."
          ] }
      ] }
      ] }
    ]
  },
  judge: {
    label: "Judge", labelTr: "Yan Hakem",
    subcategories: [
      { id: "d2_yan", label: "Judge & Scoring", labelTr: "Yan Hakem & Skor", scenes: [
      {
        id: 1,
        title: "Medya görevlisi fark etmeden Yan Hakem masasın…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_yan_1", subtitle: "A media staff or photographer gets too close to your judging table or blocks your view. Tell them to move behind." },
        { speaker: "user",
          accepted: [
          "please step back",
          "please move"
          ],
          hints: [
          "Medya görevlisi fark etmeden Yan Hakem masasına çok yaklaştı veya önüne geçti. Geri gitmesini söylüyorsun.",
          "'step' ve 'back' kelimelerini kullan.",
          "Please step back."
          ] }
        ]
      },      {
        id: 2,
        title: "Masada skor kartı kalmadı",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_yan_2", subtitle: "You used your last paper scorecard. Inform the jury about the situation." },
        { speaker: "user",
          accepted: [
          "the scorecard is finished",
          "no scorecards left",
          "there is no scorecards"
          ],
          hints: [
          "Masada skor kartı kalmadı. Jüriyi bilgilendiriyorsun.",
          "'scorecard' ve 'finished' kelimelerini kullan.",
          "The scorecard is finished."
          ] }
        ]
      },      {
        id: 3,
        title: "Kalemini bulamıyorsun",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_yan_3", subtitle: "You cannot find your pen. Request one from the jury." },
        { speaker: "user",
          accepted: [
          "i need a pen please",
          "can you give me a pen"
          ],
          hints: [
          "Kalemini bulamıyorsun. Jüriden rica ediyorsun.",
          "'need' kelimelerini kullan.",
          "I need a pen, please."
          ] }
        ]
      },      {
        id: 4,
        title: "Skor ekranında teknik bir sorun var ve jüri ci…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_yan_4", subtitle: "There is a technical glitch on the scoreboard and the Jury asks if your device is responding. Inform them that you are active." },
        { speaker: "user",
          accepted: [
          "i am pressing the button",
          "i press the button"
          ],
          hints: [
          "Skor ekranında teknik bir sorun var ve jüri cihazınızın yanıt verip vermediğini soruyor. Jüriye butona bastığını bildiriyorsun.",
          "'pressing' ve 'button' kelimelerini kullan.",
          "I am pressing the button."
          ] }
        ]
      },      {
        id: 5,
        title: "Cihaz kontrolü gerçekleştirilirken butona basm…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_yan_5", subtitle: "During the system check, you want to state that you haven't touched your scoring button." },
        { speaker: "user",
          accepted: [
          "i did not press the button",
          "i didn t press the button",
          "i m not pressing"
          ],
          hints: [
          "Cihaz kontrolü gerçekleştirilirken butona basmadığını bildiriyorsun.",
          "'press' ve 'button' kelimelerini kullan.",
          "I did not press the button."
          ] }
        ]
      },      {
        id: 6,
        title: "Cihaz kontrolü gerçekleştirirken yanlış butona…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_yan_6", subtitle: "During the system check, you accidentally hit the wrong button. Inform the Jury." },
        { speaker: "user",
          accepted: [
          "i pressed the wrong button",
          "wrong button"
          ],
          hints: [
          "Cihaz kontrolü gerçekleştirirken yanlış butona bastın ve bunu Jüriye bildir.",
          "'pressed' ve 'wrong' kelimelerini kullan.",
          "I pressed the wrong button."
          ] }
        ]
      },      {
        id: 7,
        title: "Maç esnasında yanlışlıkla resetleme tuşuna bas…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_yan_7", subtitle: "Your finger slips during the active round and you hit the reset option by accident. Inform the jury." },
        { speaker: "user",
          accepted: [
          "i reset the score by mistake",
          "i reset the score"
          ],
          hints: [
          "Maç esnasında yanlışlıkla resetleme tuşuna bastın. Jüriyi bilgilendiriyorsun.",
          "'reset' ve 'score' kelimelerini kullan.",
          "I reset the score by mistake."
          ] }
        ]
      },      {
        id: 8,
        title: "Maç esnasında cihazın fişi/kablosu çıktığı içi…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_yan_8", subtitle: "Your electronic scoring pad not working because the connection wire is pulled. Inform the Jüri immediately." },
        { speaker: "user",
          accepted: [
          "the cable came out",
          "cable unplugged"
          ],
          hints: [
          "Maç esnasında cihazın fişi/kablosu çıktığı için çalışmıyor. Jüriye derhal bilgi veriyorsun.",
          "'cable' ve 'came' kelimelerini kullan.",
          "The cable came out."
          ] }
        ]
      },      {
        id: 9,
        title: "Maç esnasında yanlış köşeye puan bastın",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_yan_9", subtitle: "You meant to give the round to the red corner but accidentally clicked the blue corner's button. Report the error." },
        { speaker: "user",
          accepted: [
          "i gave the point to the wrong corner",
          "wrong corner",
          "i press the wrong corner"
          ],
          hints: [
          "Maç esnasında yanlış köşeye puan bastın. Bunu bildiriyorsun.",
          "'gave' ve 'point' kelimelerini kullan.",
          "I gave the point to the wrong corner."
          ] }
        ]
      },      {
        id: 10,
        title: "Sistem kontrolünden sonra Jüri cihazının çalış…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_yan_10", subtitle: "The Jury asks if your electronic pad is working correctly now after the system check. Confirm that there are no issues." },
        { speaker: "user",
          accepted: [
          "everything is okay",
          "it s working",
          "all good"
          ],
          hints: [
          "Sistem kontrolünden sonra Jüri cihazının çalışıp çalışmadığını soruyor. Her şeyin yolunda olduğunu bildiriyorsun.",
          "'everything' ve 'okay' kelimelerini kullan.",
          "Everything is okay."
          ] }
        ]
      }
      ] }
    ]
  },
  timekeeper: {
    label: "Timekeeper", labelTr: "Zaman Hakemi",
    directScenes: [
      {
        id: 1,
        title: "Maç esnasında Rsportz sistemi dondu",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_zaman_1", subtitle: "The Rsportz system freezes during the round. Inform the Jury immediately." },
        { speaker: "user",
          accepted: [
          "the system has stopped",
          "system stopped",
          "system is not working"
          ],
          hints: [
          "Maç esnasında Rsportz sistemi dondu. Jüriye derhal bilgi veriyorsun.",
          "'system' ve 'stopped' kelimelerini kullan.",
          "The system has stopped."
          ] }
        ]
      },      {
        id: 2,
        title: "Wai Kru müziğini bilgisayardan başlattın ama h…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_zaman_2", subtitle: "You started playing the Wai Kru music on the computer but no audio comes out of the speakers. Report the issue." },
        { speaker: "user",
          accepted: [
          "there is no sound",
          "no sound"
          ],
          hints: [
          "Wai Kru müziğini bilgisayardan başlattın ama hoparlörlerinden ses gelmiyor. Durumu bildiriyorsun.",
          "'there' ve 'sound' kelimelerini kullan.",
          "There is no sound."
          ] }
        ]
      },      {
        id: 3,
        title: "Orta hakem bir ekipman düzeltmesi için TIME ko…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_zaman_3", subtitle: "The referee commands TIME for an equipment fix. Confirm that you paused the official clock." },
        { speaker: "user",
          accepted: [
          "i stopped the time",
          "time stopped"
          ],
          hints: [
          "Orta hakem bir ekipman düzeltmesi için TIME komutu verdi. Resmi süreyi durdurduğunu onaylıyorsun.",
          "'stopped' ve 'time' kelimelerini kullan.",
          "I stopped the time."
          ] }
        ]
      },      {
        id: 4,
        title: "Orta hakem maçı yeniden başlatmak için \"ÇOK\" (…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_zaman_4", subtitle: "The referee commands \"CHOK\" (Fight) to resume the action. Confirm that you restarted the clock." },
        { speaker: "user",
          accepted: [
          "i started the time",
          "time started"
          ],
          hints: [
          "Orta hakem maçı yeniden başlatmak için \"ÇOK\" (Dövüş) komutu verdi. Süreyi tekrar başlattığını onaylıyorsun.",
          "'started' ve 'time' kelimelerini kullan.",
          "I started the time."
          ] }
        ]
      }
    ]
  },
  announcer: {
    label: "Announcer", labelTr: "Anons Hakemi",
    directScenes: [
      {
        id: 1,
        title: "Sıradaki maçın sporcularına hazır olmaları ger…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_anons_1", subtitle: "Prepare the upcoming fighters by announcing that they should get ready. Red corner: Alperen-Holland, Blue Corner: Eren, Thailand." },
        { speaker: "user",
          accepted: [
          "next bout red corner name from country blue corner name from country please get ready"
          ],
          hints: [
          "Sıradaki maçın sporcularına hazır olmaları gerektiğini anons ediyorsun.",
          "'next' ve 'bout' kelimelerini kullan.",
          "Next bout, red corner [Name] from [Country], blue corner [Name] from [Country], please get ready."
          ] }
        ]
      },      {
        id: 2,
        title: "A ringindeki 2",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_anons_2", subtitle: "Call the red corner athlete of the second bout in Ring A to enter the ring area immediately. Afra from Germany." },
        { speaker: "user",
          accepted: [
          "ring a bout number 2 red corner name from country to the ring area"
          ],
          hints: [
          "A ringindeki 2. maçın kırmızı köşe sporcusu derhal ring alanına çağırıyorsun.",
          "'ring' ve 'bout' kelimelerini kullan.",
          "Ring A, Bout number 2, red corner [Name] from [Country] to the ring area!"
          ] }
        ]
      },      {
        id: 3,
        title: "Bir sporcu yapılan anonslara rağmen gelmedi",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_anons_3", subtitle: "An athlete has not shown up after the announcements. Make the definitive warning before Walk-Over." },
        { speaker: "user",
          accepted: [
          "final call"
          ],
          hints: [
          "Bir sporcu yapılan anonslara rağmen gelmedi. Walk-Over öncesindeki son çağrıyı yapıyorsun.",
          "'final' ve 'call' kelimelerini kullan.",
          "Final call!"
          ] }
        ]
      },      {
        id: 4,
        title: "Resmi karar sana ulaştı",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_anons_4", subtitle: "The official decision is handed to you. Announce the victory of the blue corner." },
        { speaker: "user",
          accepted: [
          "the winner is the blue corner"
          ],
          hints: [
          "Resmi karar sana ulaştı. Mavi köşenin kazandığını anons ediyorsun.",
          "'winner' ve 'blue' kelimelerini kullan.",
          "The winner is the blue corner."
          ] }
        ]
      },      {
        id: 5,
        title: "Teknik Delege resmi bir öğle arası verme karar…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_anons_5", subtitle: "The Technical Delegate decides to take a official lunch break. Announce the schedule pause." },
        { speaker: "user",
          accepted: [
          "the bouts are paused for one hour",
          "the bouts will start after one hour"
          ],
          hints: [
          "Teknik Delege resmi bir öğle arası verme kararı aldı. Seansa ara verildiğini anons ediyorsun.",
          "'bouts' ve 'paused' kelimelerini kullan.",
          "The bouts are paused for one hour."
          ] }
        ]
      },      {
        id: 6,
        title: "Bir dakikalık mola bitiyor ve yeni raund başla…",
        steps: [
        { speaker: "narrator", audioId: "sim_d2_anons_6", subtitle: "The one-minute break is ending, and the next round is about to start. Order the seconds to leave the ring." },
        { speaker: "user",
          accepted: [
          "seconds out"
          ],
          hints: [
          "Bir dakikalık mola bitiyor ve yeni raund başlamak üzere. Köşe görevlilerinin ringden dışarı çıkmasını söylüyorsun.",
          "'seconds' kelimelerini kullan.",
          "Seconds out!"
          ] }
        ]
      }
    ]
  }
};

const SIM_DAY2_ORDER = ["jury", "equipment", "referee", "judge", "timekeeper", "announcer"];


// ─── STATE ────────────────────────────────────────────────────────
let simD2View = "main";        // "main" | "sub" | "scene"
let simD2CategoryKey = null;   // "jury", "equipment", ...
let simD2SubIdx = 0;           // alt kategori index'i (subcategories içinde)
let simD2SceneIdx = 0;
let simD2StepIdx  = 0;
let simD2HintIdx  = 0;
let simD2SubtitleVisible = false;
let simD2CompletedScenes = {}; // { "d2_juri_rap_1": true, ... } veya { "timekeeper_1": true }

// ─── ANA GİRİŞ NOKTASI ────────────────────────────────────────────
function renderSimDay2() {
  if (simD2View === "main") renderSimD2Main();
  else if (simD2View === "sub") renderSimD2Sub();
  else renderSimD2Scene();
}

// ─── YARDIMCI: aktif sahne dizisini getir ────────────────────────
function simD2GetScenes() {
  const cat = SIM_DAY2_CATEGORIES[simD2CategoryKey];
  if (cat.directScenes) return cat.directScenes;
  return cat.subcategories[simD2SubIdx].scenes;
}

function simD2GetCompletionKeyPrefix() {
  const cat = SIM_DAY2_CATEGORIES[simD2CategoryKey];
  if (cat.directScenes) return simD2CategoryKey;
  return cat.subcategories[simD2SubIdx].id;
}

// ─── SEVİYE 1: ANA 6 KUTUCUK (3x3 → aslında 3x2 ama aynı grid stiliyle) ──
function renderSimD2Main() {
  const c = document.getElementById("content");

  c.innerHTML = `
    <div style="margin-bottom:14px;">
      <div style="font-size:13px; font-weight:700; color:#185FA5; margin-bottom:2px;">
        🎙️ ${simUI('simHeader')}
      </div>
      <div style="font-size:11px; color:var(--text2);">
        ${simUI('simPickTask')}
      </div>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px;">
      ${SIM_DAY2_ORDER.map(key => {
        const cat = SIM_DAY2_CATEGORIES[key];
        const isDirect = !!cat.directScenes;
        const totalScenes = isDirect ? cat.directScenes.length : cat.subcategories.reduce((s, sc) => s + sc.scenes.length, 0);
        const completedCount = isDirect
          ? cat.directScenes.filter(s => simD2CompletedScenes[`${key}_${s.id}`]).length
          : cat.subcategories.reduce((s, sc) => s + sc.scenes.filter(sn => simD2CompletedScenes[`${sc.id}_${sn.id}`]).length, 0);
        const hasContent = totalScenes > 0;
        const allDone = hasContent && completedCount === totalScenes;

        return `
        <button
          onclick="${hasContent ? `simD2OpenCategory('${key}')` : ""}"
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
          <span style="font-size:12px; font-weight:700; line-height:1.3;">${cat.label}</span>
          <span style="font-size:9.5px; color:var(--text2); line-height:1.2;">${simLabelLoc(cat.labelTr)}</span>
          ${hasContent
            ? `<span style="font-size:9px; color:#185FA5; font-weight:600; margin-top:2px;">${completedCount}/${totalScenes}</span>`
            : `<span style="font-size:9px; color:var(--text2); margin-top:2px;">${simUI('simSoon')}</span>`
          }
        </button>
      `}).join("")}
    </div>
  `;
}

// ─── ANA KATEGORİYİ AÇ ────────────────────────────────────────────
function simD2OpenCategory(key) {
  simD2CategoryKey = key;
  const cat = SIM_DAY2_CATEGORIES[key];

  if (cat.directScenes) {
    // Alt kategori yok — direkt sahne ekranına gir (Timekeeper / Announcer)
    simD2SceneIdx = 0;
    simD2StepIdx = 0;
    simD2HintIdx = 0;
    simD2SubtitleVisible = false;
    simD2View = "scene";
    renderSimD2Scene();
  } else {
    simD2SubIdx = 0;
    simD2View = "sub";
    renderSimD2Sub();
  }
}

// ─── SEVİYE 2: ALT KATEGORİ GRID'İ ────────────────────────────────
function renderSimD2Sub() {
  const c = document.getElementById("content");
  const cat = SIM_DAY2_CATEGORIES[simD2CategoryKey];
  const subs = cat.subcategories;

  c.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
      <button onclick="simD2BackToMain()" style="
        background:none; border:none; font-size:11px; color:#185FA5;
        cursor:pointer; font-weight:600; padding:0;
      ">${simUI('simBackTasks')}</button>
      <div style="font-size:11px; color:#888;">🎙️ ${cat.label}</div>
    </div>

    <div style="margin-bottom:14px;">
      <div style="font-size:13px; font-weight:700; color:#185FA5; margin-bottom:2px;">
        ${cat.label} — ${simLabelLoc(cat.labelTr)}
      </div>
      <div style="font-size:11px; color:var(--text2);">
        ${simUI('simPickSection')}
      </div>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px;">
      ${subs.map((sub, idx) => {
        const total = sub.scenes.length;
        const completed = sub.scenes.filter(s => simD2CompletedScenes[`${sub.id}_${s.id}`]).length;
        const hasContent = total > 0;
        const allDone = hasContent && completed === total;

        return `
        <button
          onclick="${hasContent ? `simD2OpenSub(${idx})` : ""}"
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
          <span style="font-size:11.5px; font-weight:700; line-height:1.3;">${sub.label}</span>
          <span style="font-size:9.5px; color:var(--text2); line-height:1.2;">${simLabelLoc(sub.labelTr)}</span>
          ${hasContent
            ? `<span style="font-size:9px; color:#185FA5; font-weight:600; margin-top:2px;">${completed}/${total}</span>`
            : `<span style="font-size:9px; color:var(--text2); margin-top:2px;">${simUI('simSoon')}</span>`
          }
        </button>
      `}).join("")}
    </div>
  `;
}

// ─── ALT KATEGORİYİ AÇ ────────────────────────────────────────────
function simD2OpenSub(idx) {
  simD2SubIdx = idx;
  simD2SceneIdx = 0;
  simD2StepIdx = 0;
  simD2HintIdx = 0;
  simD2SubtitleVisible = false;
  simD2View = "scene";
  renderSimD2Scene();
}

// ─── GERİ DÖNÜŞLER ────────────────────────────────────────────────
function simD2BackToMain() {
  simD2View = "main";
  renderSimD2Main();
}

function simD2BackToSub() {
  simD2View = "sub";
  renderSimD2Sub();
}

// ─── SAHNE EKRANI ─────────────────────────────────────────────────
// ─── SAHNE MOTORU BAĞLAMA (ortak sim-engine.js kullanılır) ────────
// Veri (SIM_DAY2_CATEGORIES), state, yardımcılar ve menü fonksiyonları yukarıda
// kaldı; sahne ekranı artık SimEngine üzerinden yönetilir. Context, day2'ye
// özgü farkları (3 seviyeli navigasyon, geri butonu, sözlük) tanımlar.
const DAY2_SIM_CTX = {
  get sceneIdx(){ return simD2SceneIdx; },        set sceneIdx(v){ simD2SceneIdx = v; },
  get stepIdx(){ return simD2StepIdx; },          set stepIdx(v){ simD2StepIdx = v; },
  get hintIdx(){ return simD2HintIdx; },          set hintIdx(v){ simD2HintIdx = v; },
  get subtitle(){ return simD2SubtitleVisible; }, set subtitle(v){ simD2SubtitleVisible = v; },
  getScenes(){ return simD2GetScenes(); },
  markCompleted(scene){ simD2CompletedScenes[`${simD2GetCompletionKeyPrefix()}_${scene.id}`] = true; },
  headerLabel(){
    const cat = SIM_DAY2_CATEGORIES[simD2CategoryKey];
    return cat.directScenes ? cat.label : `${cat.label} · ${cat.subcategories[simD2SubIdx].label}`;
  },
  completeTitle(){
    const cat = SIM_DAY2_CATEGORIES[simD2CategoryKey];
    return cat.directScenes ? cat.label : cat.subcategories[simD2SubIdx].label;
  },
  get backCall(){
    const cat = SIM_DAY2_CATEGORIES[simD2CategoryKey];
    return cat.directScenes ? "simD2BackToMain()" : "simD2BackToSub()";
  },
  get backLabel(){ return (typeof t==='function')?t('simBack'):"← Geri"; },
  get completeBackCall(){
    const cat = SIM_DAY2_CATEGORIES[simD2CategoryKey];
    return cat.directScenes ? "simD2BackToMain()" : "simD2BackToSub()";
  },
  get completeBackLabel(){ return (typeof t==='function')?t('simBackReturn'):"← Geri Dön"; },
  restartCall: "simD2RestartCurrent()",
  playCall: "simD2Play()",
  speakCall: "simD2Speak()",
  toggleCall: "simD2ToggleSubtitle()",
  nextCall: "simD2NextScene()",
  prevCall: "simD2Prev()",
  nextHintCall: "simD2NextHint()",
  dictionary: {
    "assets office": "athlete",
    "assets":        "athlete",
    "at least":      "athlete",
    "head guard":    "headguard",
    "headgard":      "headguard",
    "gumshield":     "gum shield",
    "waikru":        "wai kru",
    "wai crew":      "wai kru",
    "mongkong":      "mongkon",
    "mongcon":       "mongkon"
  }
};

// Global sarmalayıcılar — sahne HTML'indeki onclick'ler bu adları çağırır.
function renderSimD2Scene()    { SimEngine.renderScene(DAY2_SIM_CTX); }
function simD2Play()           { SimEngine.play(DAY2_SIM_CTX); }
function simD2ToggleSubtitle() { SimEngine.toggleSubtitle(DAY2_SIM_CTX); }
function simD2Speak()          { SimEngine.speak(DAY2_SIM_CTX); }
function simD2CheckAnswer(said, acceptedList) { return SimEngine.checkAnswer(said, acceptedList); }
function simD2NextScene()      { SimEngine.advance(DAY2_SIM_CTX); }
function simD2Prev()           { SimEngine.prev(DAY2_SIM_CTX); }
function simD2NextHint()       { SimEngine.nextHint(DAY2_SIM_CTX); }


// ─── MEVCUT BÖLÜMÜ TEKRAR BAŞLAT ──────────────────────────────────
function simD2RestartCurrent() {
  simD2SceneIdx = 0;
  simD2StepIdx  = 0;
  simD2HintIdx  = 0;
  simD2SubtitleVisible = false;
  renderSimD2Scene();
}