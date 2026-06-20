const SIM_CATEGORIES = [
  {
    id: "registration",
    label: "Registration",
    labelTr: "Kayıt",
    scenes: [
      {
        id: 1,
        title: "Karşılama ve Ülke Sorma",
        steps: [
          {
            speaker: "Team Representative",
            audioId: "sim_kayit_1",
            subtitle: "Hello!",
          },
          {
            speaker: "user",
            accepted: [
              "hello welcome which country are you representing",
              "welcome which country are you representing",
              "hello welcome your country",
              "welcome your country"
            ],
            hints: [
              "Karşındaki seni selamlıyor. Sen de karşılık verip hangi ülkeyi temsil ettiğini sormalısın.",
              "'welcome' ve 'country' kelimelerini kullan.",
              "Hello, welcome. Which country are you representing?"
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Belge İsteme",
        steps: [
          {
            speaker: "Team Representative",
            audioId: "sim_kayit_2",
            subtitle: "Germany.",
          },
          {
            speaker: "user",
            accepted: [
              "please present the required documents",
              "required documents please",
              "documents please",
              "can you show me your documents"
            ],
            hints: [
              "Ülkeyi öğrendin. Şimdi kayıt için gerekli belgeleri talep etmelisin.",
              "'documents' kelimesini kullan.",
              "Please present the required documents."
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Kayıt Tamamlama",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_kayit_3",
            subtitle: "All documents are complete. No documents are missing.",
          },
          {
            speaker: "Team Representative",
            audioId: "sim_kayit_3b",
            subtitle: "Is it all done?",
          },
          {
            speaker: "user",
            accepted: [
              "yes",
              "yes have a nice day",
              "yes all done",
              "yes your registration is completed",
              "registration completed",
              "all done",
              "all done have a nice day",
              "all done good luck"
            ],
            hints: [
              "Tüm belgeler tamam. Temsilci senden onay bekliyor.",
              "'done' veya 'completed' kelimelerini kullan.",
              "All done! Good luck."
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Tıbbi Beyan Eksikliği",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_kayit_4",
            subtitle: "You are checking all the documents and you notice the athlete's medical declaration is missing.",
          },
          {
            speaker: "user",
            accepted: [
              "athletes medical declaration is missing",
              "medical declaration missing",
              "there is no medical declaration",
              "where is the medical declaration"
            ],
            hints: [
              "Belgeleri incelerken bir eksiklik fark ettin. Bunu temsilciye bildirmelisin.",
              "'medical' ve 'declaration' kelimelerini kullan.",
              "Athlete's medical declaration is missing."
            ]
          }
        ]
      },
      {
        id: 5,
        title: "Anti-Doping Onayı Eksikliği",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_kayit_5",
            subtitle: "You are checking all the documents and you notice the athlete's anti-doping consent is missing.",
          },
          {
            speaker: "user",
            accepted: [
              "athletes anti doping consent is missing",
              "anti doping consent missing",
              "there is no anti doping consent",
              "where is the anti doping consent"
            ],
            hints: [
              "Belgeler arasında önemli bir onay formu eksik. Bunu bildirmelisin.",
              "'anti-doping' ve 'consent' kelimelerini kullan.",
              "Athlete's anti-doping consent is missing."
            ]
          }
        ]
      },
      {
        id: 6,
        title: "Hamile Olmama Beyanı Eksikliği",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_kayit_6",
            subtitle: "You are checking all the documents and you notice the athlete's non-pregnancy declaration is missing.",
          },
          {
            speaker: "user",
            accepted: [
              "athletes non pregnancy declaration is missing",
              "non pregnancy declaration missing",
              "there is no non pregnancy declaration",
              "where is the non pregnancy declaration"
            ],
            hints: [
              "Kadın sporcularda zorunlu olan bir beyan formu eksik.",
              "'non-pregnancy' ve 'declaration' kelimelerini kullan.",
              "Athlete's non-pregnancy declaration is missing."
            ]
          }
        ]
      },
      {
        id: 7,
        title: "HIV Testi Eksikliği",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_kayit_7",
            subtitle: "You are checking all the documents and you notice the athlete's HIV test result is missing.",
          },
          {
            speaker: "user",
            accepted: [
              "athletes hiv test result is missing",
              "hiv test result is missing",
              "hiv result is missing",
              "there is no hiv test result",
              "there is no hiv result",
              "where is the hiv test result",
              "where is the hiv result",
              "hiv result",
              "hiv test result"
            ],
            hints: [
              "Kan testi sonuçlarından biri eksik. Hangisi olduğunu belirtmelisin.",
              "'HIV' ve 'result' kelimelerini kullan.",
              "Athlete's HIV test result is missing."
            ]
          }
        ]
      },
      {
        id: 8,
        title: "HBV Testi Eksikliği",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_kayit_8",
            subtitle: "You are checking all the documents and you notice the athlete's HBV test result is missing.",
          },
          {
            speaker: "user",
            accepted: [
              "athletes hbv test result is missing",
              "hbv test result is missing",
              "hbv result is missing",
              "there is no hbv test result",
              "there is no hbv result",
              "where is the hbv test result",
              "where is the hbv result",
              "hbv result",
              "hbv test result"
            ],
            hints: [
              "Kan testi sonuçlarından biri eksik. Hangisi olduğunu belirtmelisin.",
              "'HBV' ve 'result' kelimelerini kullan.",
              "Athlete's HBV test result is missing."
            ]
          }
        ]
      },
      {
        id: 9,
        title: "HCV Testi Eksikliği",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_kayit_9",
            subtitle: "You are checking all the documents and you notice the athlete's HCV test result is missing.",
          },
          {
            speaker: "user",
            accepted: [
              "athletes hcv test result is missing",
              "hcv test result is missing",
              "hcv result is missing",
              "there is no hcv test result",
              "there is no hcv result",
              "where is the hcv test result",
              "where is the hcv result",
              "hcv result",
              "hcv test result"
            ],
            hints: [
              "Kan testi sonuçlarından biri eksik. Hangisi olduğunu belirtmelisin.",
              "'HCV' ve 'result' kelimelerini kullan.",
              "Athlete's HCV test result is missing."
            ]
          }
        ]
      },
      {
        id: 10,
        title: "Eksik Evrak — Geri Gönderme",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_kayit_10",
            subtitle: "The documents are incomplete. You cannot proceed with the registration.",
          },
          {
            speaker: "user",
            accepted: [
              "please come back after the documents are complete",
              "come back when documents are ready",
              "come back when documents are complete",
              "please bring all the documents"
            ],
            hints: [
              "Eksik belgeler var ve işleme devam edemiyorsun. Temsilciyi geri gelmesi konusunda yönlendirmelisin.",
              "'come back' ve 'documents' kelimelerini kullan.",
              "Please come back after the documents are complete."
            ]
          }
        ]
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
        title: "Erkek Sporcuları Çağırma",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_cagirma_1",
            subtitle: "All preparations for the weigh-in are complete. You can call the male athletes into the weigh-in room.",
          },
          {
            speaker: "user",
            accepted: [
              "male weigh in starts now you can come in only one athlete please",
              "males please come in one at a time",
              "weigh in starts now you can come in",
              "you can come in",
              "you can come in only one athlete please",
              "males can come in"
            ],
            hints: [
              "Erkek sporcuları tartı odasına çağırman gerekiyor, aynı anda sadece bir kişi girebilir.",
              "'male' ve 'one athlete' kelimelerini kullan.",
              "Male weigh-in starts now. You can come in. Only one athlete please!"
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Kadın Sporcuları Çağırma",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_cagirma_2",
            subtitle: "All preparations for the weigh-in are complete. You can call the female athletes into the weigh-in room.",
          },
          {
            speaker: "user",
            accepted: [
              "female weigh in starts now you can come in only one athlete please",
              "female weigh in starts now you can come in only one athlete",
              "females please come in one at a time",
              "weigh in starts now you can come in",
              "you can come in",
              "you can come in only one athlete please",
              "females can come in"
            ],
            hints: [
              "Kadın sporcuları tartı odasına çağırman gerekiyor, aynı anda sadece bir kişi girebilir.",
              "'female' ve 'one athlete' kelimelerini kullan.",
              "Female weigh-in starts now. You can come in. Only one athlete please!"
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Sıradaki Sporcuyu Çağırma",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_cagirma_3",
            subtitle: "You need to call the next athlete into the weigh-in room.",
          },
          {
            speaker: "user",
            accepted: [
              "next athlete please",
              "next athlete",
              "next please",
              "next one",
              "next one please"
            ],
            hints: [
              "Bir önceki sporcunun işi bitti, sıradaki sporcuyu çağırman gerekiyor.",
              "'next' kelimesini kullan.",
              "Next athlete, please."
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Deneme Tartısı Talebi",
        steps: [
          {
            speaker: "athlete",
            audioId: "sim_cagirma_4",
            subtitle: "Hello. Can I check my weight here?",
          },
          {
            speaker: "user",
            accepted: [
              "this is not a test weigh in the control scale is located in the corridor",
              "official weigh in only test scale is in the corridor",
              "no this is not a test weigh in",
              "this is not a control weigh in",
              "this is not a test weigh in"
            ],
            hints: [
              "Sporcu burada deneme tartısı yapmak istiyor ama bu resmi tartı alanı. Deneme tartısının nerede olduğunu söylemelisin.",
              "'test weigh-in' ve 'corridor' kelimelerini kullan.",
              "This is not a test weigh-in. The control scale is located in the corridor."
            ]
          }
        ]
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
        title: "Doktor Onayı Kontrolü",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_kimlik_1",
            subtitle: "The athlete has arrived at the weigh-in room. You ask if they have already seen the doctor.",
          },
          {
            speaker: "user",
            accepted: [
              "do you have the doctors approval",
              "doctors approval"
            ],
            hints: [
              "Sporcunun doktora gidip gitmediğini sormalısın.",
              "'doctor's approval' kelimelerini kullan.",
              "Do you have the doctor's approval?"
            ]
          },
          {
            speaker: "athlete",
            audioId: "sim_kimlik_1b",
            subtitle: "Yes, I got the doctor's approval.",
          },
          {
            speaker: "narrator",
            audioId: "sim_kimlik_1c",
            subtitle: "You check the system but you cannot see the doctor's approval.",
          },
          {
            speaker: "user",
            accepted: [
              "i cannot see the doctors approval",
              "doctors approval is missing",
              "there is no doctors approval",
              "there is no doctors approval in the system"
            ],
            hints: [
              "Sporcu doktor onayı aldığını söylüyor ama sistemde göremiyorsun. Bu durumu bildirmelisin.",
              "'cannot see' ve 'doctor's approval' kelimelerini kullan.",
              "I cannot see the doctor's approval."
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Doktora Yönlendirme",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_kimlik_2",
            subtitle: "An athlete arrives at the weigh-in room without seeing the doctor first. Tell the athlete what to do.",
          },
          {
            speaker: "user",
            accepted: [
              "you must see the doctor first",
              "doctor check first please",
              "first doctor",
              "doctor first"
            ],
            hints: [
              "Sporcu önce doktora gitmeden tartıya geldi. Ona ne yapması gerektiğini söylemelisin.",
              "'doctor' ve 'first' kelimelerini kullan.",
              "You must see the doctor first."
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Ülke ve Belge Sorma",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_kimlik_3",
            subtitle: "Ask the athlete which country they are representing.",
          },
          {
            speaker: "user",
            accepted: [
              "which country are you representing",
              "your country",
              "which country"
            ],
            hints: [
              "Sporcunun hangi ülkeyi temsil ettiğini sormalısın.",
              "'country' kelimesini kullan.",
              "Which country are you representing?"
            ]
          },
          {
            speaker: "narrator",
            audioId: "sim_kimlik_3b",
            subtitle: "Now ask the athlete to show their accreditation card.",
          },
          {
            speaker: "user",
            accepted: [
              "can i see your accreditation card",
              "accreditation card please",
              "show me your accreditation card",
              "please present your accreditation card"
            ],
            hints: [
              "Sporcudan akreditasyon kartını göstermesini istemelisin.",
              "'accreditation card' kelimelerini kullan.",
              "Can I see your accreditation card?"
            ]
          },
          {
            speaker: "narrator",
            audioId: "sim_kimlik_3c",
            subtitle: "Now ask the athlete to show their passport.",
          },
          {
            speaker: "user",
            accepted: [
              "please present your passport",
              "can i see your passport",
              "passport please"
            ],
            hints: [
              "Sporcudan pasaportunu göstermesini istemelisin.",
              "'passport' kelimesini kullan.",
              "Please present your passport."
            ]
          },
          {
            speaker: "narrator",
            audioId: "sim_kimlik_3d",
            subtitle: "Now ask the athlete to show their athlete's book.",
          },
          {
            speaker: "user",
            accepted: [
              "please present your athletes book",
              "can i see your athletes book",
              "athletes book please",
              "show me your athletes book please"
            ],
            hints: [
              "Sporcudan athlete's book'unu göstermesini istemelisin.",
              "'athlete's book' kelimelerini kullan.",
              "Please present your athlete's book."
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Athlete's Book Geri Talebi",
        steps: [
          {
            speaker: "athlete",
            audioId: "sim_kimlik_4",
            subtitle: "Can I get my athlete's book back?",
          },
          {
            speaker: "user",
            accepted: [
              "you will collect your athletes book after the contest",
              "you will receive your athletes book after the contest",
              "we will return it after the contest",
              "we will give it to you after the contest",
              "you can take it after the contest"
            ],
            hints: [
              "Sporcunun athlete's book'unu ne zaman geri alacağını söylemelisin.",
              "'after the contest' kelimelerini kullan.",
              "You will collect your athlete's book after the contest."
            ]
          }
        ]
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
        title: "Tartı Öncesi Hazırlık",
        steps: [
          {
            speaker: "athlete",
            audioId: "sim_giyim_1",
            subtitle: "Here is my accreditation and my other documents. What should I do now?",
          },
          {
            speaker: "user",
            accepted: [
              "please remove socks and any extra clothing including jewelry",
              "socks and jewelry off please"
            ],
            hints: [
              "Sporcunun tartıya çıkmadan önce çorap ve fazladan kıyafetlerini, takılarını çıkarması gerekiyor.",
              "'socks' ve 'jewelry' kelimelerini kullan.",
              "Please remove socks and any extra clothing. Including jewelry."
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Kalın İç Çamaşırı Uyarısı",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_giyim_2",
            subtitle: "The athlete comes to the weigh-in wearing thick undergarments. Remind the athlete of the rule.",
          },
          {
            speaker: "user",
            accepted: [
              "only lightweight undergarments are allowed",
              "underwear only please",
              "lightweight undergarments only",
              "only underwear"
            ],
            hints: [
              "Sadece hafif iç çamaşırına izin verildiğini hatırlatmalısın.",
              "'lightweight' ve 'undergarments' kelimelerini kullan.",
              "Only lightweight undergarments are allowed."
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Çorap Uyarısı",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_giyim_3",
            subtitle: "The athlete comes to the weigh-in wearing socks. Remind the athlete of the rule.",
          },
          {
            speaker: "user",
            accepted: [
              "remove your socks please",
              "socks off",
              "no socks"
            ],
            hints: [
              "Sporcunun çoraplarını çıkarması gerektiğini söylemelisin.",
              "'socks' kelimesini kullan.",
              "Remove your socks, please."
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Takı Uyarısı",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_giyim_4",
            subtitle: "The athlete comes to the weigh-in wearing jewelry. Remind them of the rule.",
          },
          {
            speaker: "user",
            accepted: [
              "remove your jewelry please",
              "jewelry off",
              "no jewelry"
            ],
            hints: [
              "Sporcunun takılarını çıkarması gerektiğini söylemelisin.",
              "'jewelry' kelimesini kullan.",
              "Remove your jewelry, please."
            ]
          }
        ]
      },
      {
        id: 5,
        title: "Kolye Uyarısı",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_giyim_5",
            subtitle: "The athlete comes to the weigh-in wearing a necklace. Warn them.",
          },
          {
            speaker: "user",
            accepted: [
              "please take off your necklace",
              "necklace off",
              "no necklace"
            ],
            hints: [
              "Sporcunun kolyesini çıkarması gerektiğini söylemelisin.",
              "'necklace' kelimesini kullan.",
              "Please take off your necklace."
            ]
          }
        ]
      },
      {
        id: 6,
        title: "Piercing Uyarısı",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_giyim_6",
            subtitle: "The athlete comes to the weigh-in wearing a piercing. Remind the athlete of the rule.",
          },
          {
            speaker: "user",
            accepted: [
              "please remove your piercing",
              "piercing off",
              "no piercing"
            ],
            hints: [
              "Sporcunun piercing'ini çıkarması gerektiğini söylemelisin.",
              "'piercing' kelimesini kullan.",
              "Please remove your piercing."
            ]
          }
        ]
      },
      {
        id: 7,
        title: "Küpe Uyarısı",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_giyim_7",
            subtitle: "The athlete comes to the weigh-in wearing earrings. Tell the athlete to remove them.",
          },
          {
            speaker: "user",
            accepted: [
              "please take off your earrings",
              "earrings off",
              "no earrings"
            ],
            hints: [
              "Sporcunun küpelerini çıkarması gerektiğini söylemelisin.",
              "'earrings' kelimesini kullan.",
              "Please take off your earrings."
            ]
          }
        ]
      },
      {
        id: 8,
        title: "Gözlük Uyarısı",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_giyim_8",
            subtitle: "The athlete comes to the weigh-in wearing glasses. Tell the athlete to remove them.",
          },
          {
            speaker: "user",
            accepted: [
              "please remove your glasses",
              "glasses off",
              "no glasses"
            ],
            hints: [
              "Sporcunun gözlüğünü çıkarması gerektiğini söylemelisin.",
              "'glasses' kelimesini kullan.",
              "Please remove your glasses."
            ]
          }
        ]
      },
      {
        id: 9,
        title: "İç Çamaşırını Çıkarma Talebi",
        steps: [
          {
            speaker: "athlete",
            audioId: "sim_giyim_9",
            subtitle: "I trained hard to lose weight. Can I weigh in without my undergarments? I don't have spare clothes with me.",
          },
          {
            speaker: "user",
            accepted: [
              "please do not remove your undergarments",
              "keep your undergarments on",
              "keep it",
              "keep them",
              "undergarments stay",
              "dont remove undergarments"
            ],
            hints: [
              "Sporcu kilo vermek için iç çamaşırını çıkarmak istiyor ama bu yasak. Onu uyarmalısın.",
              "'undergarments' kelimesini kullan, çıkarmaması gerektiğini belirt.",
              "Please do not remove your undergarments."
            ]
          }
        ]
      },
      {
        id: 10,
        title: "Sakal Uyarısı",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_giyim_10",
            subtitle: "The athlete comes to the weigh-in with a beard. Remind the athlete of the rule.",
          },
          {
            speaker: "user",
            accepted: [
              "you must be shaved before the weigh in",
              "please be clean shaved",
              "you must be shaved",
              "no beard",
              "no moustache"
            ],
            hints: [
              "Sporcunun tartıdan önce tıraşlı olması gerektiğini söylemelisin.",
              "'shaved' kelimesini kullan.",
              "You must be shaved before the weigh-in."
            ]
          }
        ]
      },
      {
        id: 11,
        title: "Tırnak Uyarısı",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_giyim_11",
            subtitle: "The athlete comes to the weigh-in with long toenails. Tell the athlete to trim their nails.",
          },
          {
            speaker: "user",
            accepted: [
              "please trim your toenails before the weigh in",
              "toenails must be trimmed",
              "trim your toenails",
              "trim your nails"
            ],
            hints: [
              "Sporcunun ayak tırnaklarını kısaltması gerektiğini söylemelisin.",
              "'trim' ve 'toenails' kelimelerini kullan.",
              "Please trim your toenails before the weigh-in."
            ]
          }
        ]
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
        title: "Tartıya Çağırma",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_tartim_1",
            subtitle: "The athlete has handed in their documents and finished preparing. Call the athlete to the scale.",
          },
          {
            speaker: "user",
            accepted: [
              "please come to the scale",
              "come to the scale please"
            ],
            hints: [
              "Sporcuyu tartıya çağırman gerekiyor.",
              "'scale' kelimesini kullan.",
              "Please come to the scale."
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Tartıya Çıkma İzni",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_tartim_2",
            subtitle: "You have checked the athlete's general physical condition. Athlete is ready to be weighed.",
          },
          {
            speaker: "user",
            accepted: [
              "you can step on the scale",
              "step on the scale please",
              "step on",
              "step on please"
            ],
            hints: [
              "Sporcuya tartıya çıkabileceğini söylemelisin.",
              "'step on' kelimelerini kullan.",
              "You can step on the scale."
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Tekrar Tartılma Talebi",
        steps: [
          {
            speaker: "athlete",
            audioId: "sim_tartim_3",
            subtitle: "Can I check my weight one more time first?",
          },
          {
            speaker: "user",
            accepted: [
              "you may only step on the scale once",
              "only once"
            ],
            hints: [
              "Sporcu resmi tartıya sadece bir kez çıkabilir. Bunu söylemelisin.",
              "'only once' kelimelerini kullan.",
              "You may only step on the scale once."
            ]
          }
        ]
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
        title: "Kilo Limitinin Üstünde",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_sonuc_1",
            subtitle: "The athlete's weight on the scale is above their weight class limit.",
          },
          {
            speaker: "user",
            accepted: [
              "you are over the weight limit",
              "overweight",
              "over the weight limit"
            ],
            hints: [
              "Sporcunun kilo limitinin üstünde olduğunu söylemelisin.",
              "'over' ve 'weight limit' kelimelerini kullan.",
              "You are over the weight limit."
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Kilo Limitinin Altında",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_sonuc_2",
            subtitle: "The athlete's weight on the scale is below their weight class limit.",
          },
          {
            speaker: "user",
            accepted: [
              "you are under the weight limit",
              "underweight",
              "under the weight limit"
            ],
            hints: [
              "Sporcunun kilo limitinin altında olduğunu söylemelisin.",
              "'under' ve 'weight limit' kelimelerini kullan.",
              "You are under the weight limit."
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Kilo Nedeniyle Diskalifiye",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_sonuc_3",
            subtitle: "The athlete's weight is over the limit, so they cannot take part in the championship. Tell the athlete the decision.",
          },
          {
            speaker: "user",
            accepted: [
              "you are disqualified due to weight",
              "disqualified",
              "disqualified because of the weight"
            ],
            hints: [
              "Sporcuya kilo nedeniyle diskalifiye olduğunu söylemelisin.",
              "'disqualified' ve 'weight' kelimelerini kullan.",
              "You are disqualified due to weight."
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Tartı Sonu Veda",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_sonuc_4",
            subtitle: "The athlete's weigh-in process is finished. Wish them good luck.",
          },
          {
            speaker: "user",
            accepted: [
              "all done good luck",
              "good luck"
            ],
            hints: [
              "Sporcunun tartı işlemi bitti, ona başarılar dilemelisin.",
              "'good luck' kelimelerini kullan.",
              "All done. Good luck."
            ]
          }
        ]
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
        title: "Tartılan Sporcu Sayısı",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_rapor_1",
            subtitle: "The weigh-in is successfully finished. It is time to report the total number of weighed athletes to the Administration Jury.",
          },
          {
            speaker: "user",
            accepted: [
              "the total number of athletes weighed is",
              "athletes weighed",
              "the total number",
              "the total number of athletes"
            ],
            hints: [
              "Tartılan toplam sporcu sayısını Administration Jury'ye bildirmelisin.",
              "'total number' ve 'athletes' kelimelerini kullan.",
              "The total number of athletes weighed is..."
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Diskalifiye Sayısı",
        steps: [
          {
            speaker: "representative",
            audioId: "sim_rapor_2",
            subtitle: "How many athletes were disqualified?",
          },
          {
            speaker: "user",
            accepted: [
              "the total number of disqualifications is",
              "disqualifications",
              "disqualification numbers"
            ],
            hints: [
              "Diskalifiye edilen sporcu sayısını bildirmelisin.",
              "'disqualifications' kelimesini kullan.",
              "The total number of disqualifications is..."
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Walkover Sayısı",
        steps: [
          {
            speaker: "representative",
            audioId: "sim_rapor_3",
            subtitle: "How many walkovers were there?",
          },
          {
            speaker: "user",
            accepted: [
              "the total number of walkovers is",
              "walkovers",
              "walkover numbers"
            ],
            hints: [
              "Walkover olan sporcu sayısını bildirmelisin.",
              "'walkovers' kelimesini kullan.",
              "The total number of walkovers is..."
            ]
          }
        ]
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
        title: "İnternet Bağlantı Sorunu",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_sistem_1",
            subtitle: "You are trying to log into the system, but the internet connection is not working.",
          },
          {
            speaker: "user",
            accepted: [
              "i am having internet connection issues can you assist me please",
              "internet problem can you help",
              "i have internet problem",
              "there is internet problem",
              "no internet connection",
              "there is no internet"
            ],
            hints: [
              "İnternet bağlantı sorunun olduğunu ve yardım istediğini söylemelisin.",
              "'internet' ve 'connection' kelimelerini kullan.",
              "I am having internet connection issues. Can you assist me, please?"
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Liste Güncel Değil",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_sistem_2",
            subtitle: "You notice that the data you entered earlier does not appear in the system.",
          },
          {
            speaker: "user",
            accepted: [
              "the list is not up to date",
              "list is outdated"
            ],
            hints: [
              "Listenin güncel olmadığını bildirmelisin.",
              "'list' ve 'up to date' kelimelerini kullan.",
              "The list is not up to date."
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Liste Görüntülenemiyor",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_sistem_3",
            subtitle: "You clicked the link, but you cannot view the list.",
          },
          {
            speaker: "user",
            accepted: [
              "i cannot view the list",
              "list wont load",
              "list is not opening",
              "i cant see the list"
            ],
            hints: [
              "Listeyi görüntüleyemediğini söylemelisin.",
              "'view' ve 'list' kelimelerini kullan.",
              "I cannot view the list."
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Veri Girişi Yapılamıyor",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_sistem_4",
            subtitle: "You tried to enter the weigh-in result into the system, but it will not let you.",
          },
          {
            speaker: "user",
            accepted: [
              "i cannot enter data into the list",
              "cant enter data",
              "i cant write anything"
            ],
            hints: [
              "Sisteme veri girişi yapamadığını bildirmelisin.",
              "'enter data' kelimelerini kullan.",
              "I cannot enter data into the list."
            ]
          }
        ]
      },
      {
        id: 5,
        title: "İsim Listede Görünmüyor",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_sistem_5",
            subtitle: "Athlete's registered, but you cannot see their name on the list.",
          },
          {
            speaker: "user",
            accepted: [
              "the athletes name does not appear on the list",
              "name not on the list",
              "name is not on the list",
              "i cant see the name"
            ],
            hints: [
              "Sporcunun isminin listede görünmediğini bildirmelisin.",
              "'name' ve 'list' kelimelerini kullan.",
              "The athlete's name does not appear on the list."
            ]
          }
        ]
      },
      {
        id: 6,
        title: "Yanlış İsim",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_sistem_6",
            subtitle: "The athlete's name was entered incorrectly. Afra Uz was entered as Dilek Uz by mistake.",
          },
          {
            speaker: "user",
            accepted: [
              "the athletes name is incorrect",
              "wrong name",
              "name is not correct"
            ],
            hints: [
              "Sporcunun isminin yanlış girildiğini bildirmelisin.",
              "'name' ve 'incorrect' kelimelerini kullan.",
              "The athlete's name is incorrect."
            ]
          }
        ]
      },
      {
        id: 7,
        title: "Yanlış Sıklet",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_sistem_7",
            subtitle: "The athlete's weight class was entered incorrectly. It was entered as 51 kg instead of 48 kg by mistake.",
          },
          {
            speaker: "user",
            accepted: [
              "wrong weight class",
              "weight class is not correct"
            ],
            hints: [
              "Sporcunun sıkletinin yanlış girildiğini bildirmelisin.",
              "'weight class' kelimelerini kullan.",
              "Wrong weight class."
            ]
          }
        ]
      },
      {
        id: 8,
        title: "Yanlış Ülke",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_sistem_8",
            subtitle: "The athlete's country was entered as Germany instead of Holland by mistake.",
          },
          {
            speaker: "user",
            accepted: [
              "the athletes country is incorrect",
              "wrong country",
              "athletes country is not correct"
            ],
            hints: [
              "Sporcunun ülkesinin yanlış girildiğini bildirmelisin.",
              "'country' ve 'incorrect' kelimelerini kullan.",
              "The athlete's country is incorrect."
            ]
          }
        ]
      },
      {
        id: 9,
        title: "Yanlış Cinsiyet",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_sistem_9",
            subtitle: "You notice that a female athlete was registered as male in the system.",
          },
          {
            speaker: "user",
            accepted: [
              "the athletes gender is incorrect",
              "wrong gender",
              "gender is not correct"
            ],
            hints: [
              "Sporcunun cinsiyetinin yanlış girildiğini bildirmelisin.",
              "'gender' ve 'incorrect' kelimelerini kullan.",
              "The athlete's gender is incorrect."
            ]
          }
        ]
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
        title: "Eksik Ölçen Tartı",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_baskul_1",
            subtitle: "You are checking the scales. You weighed 60 kg on two other scales, but this scale shows 58 kg. Report the situation.",
          },
          {
            speaker: "user",
            accepted: [
              "the scale is under reading",
              "scale reads low",
              "scale is under reading"
            ],
            hints: [
              "Bu tartının eksik ölçtüğünü bildirmelisin.",
              "'under-reading' kelimesini kullan.",
              "The scale is under-reading."
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Fazla Ölçen Tartı",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_baskul_2",
            subtitle: "You are checking the scales. You weighed 60 kg on two other scales, but this scale shows 62 kg. Report the situation.",
          },
          {
            speaker: "user",
            accepted: [
              "the scale is over reading",
              "scale reads high",
              "scale is over reading"
            ],
            hints: [
              "Bu tartının fazla ölçtüğünü bildirmelisin.",
              "'over-reading' kelimesini kullan.",
              "The scale is over-reading."
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Çalışmayan Tartı",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_baskul_3",
            subtitle: "You step on the scale, but it does not show any number.",
          },
          {
            speaker: "user",
            accepted: [
              "the scale is not working",
              "scale is down",
              "scale is not working",
              "scale doesnt show any number",
              "its not working"
            ],
            hints: [
              "Tartının çalışmadığını bildirmelisin.",
              "'not working' kelimelerini kullan.",
              "The scale is not working."
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Hasarlı Tartı",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_baskul_4",
            subtitle: "You notice that the scale is physically damaged. Report this to the officials.",
          },
          {
            speaker: "user",
            accepted: [
              "the scale is broken",
              "scale is broken"
            ],
            hints: [
              "Tartının fiziksel olarak bozuk olduğunu bildirmelisin.",
              "'broken' kelimesini kullan.",
              "The scale is broken."
            ]
          }
        ]
      },
      {
        id: 5,
        title: "Tartıyı Kontrol Etme Ricası",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_baskul_5",
            subtitle: "You are preparing for the weigh-in. Ask your colleague to check the scales.",
          },
          {
            speaker: "user",
            accepted: [
              "could you please check the scales",
              "please check the scale",
              "can you check the scales"
            ],
            hints: [
              "Meslektaşından tartıları kontrol etmesini rica etmelisin.",
              "'check' ve 'scales' kelimelerini kullan.",
              "Could you please check the scales?"
            ]
          }
        ]
      },
      {
        id: 6,
        title: "Tartı Değiştirme Ricası",
        steps: [
          {
            speaker: "narrator",
            audioId: "sim_baskul_6",
            subtitle: "The scale is broken. Ask the officials to replace it with a new one.",
          },
          {
            speaker: "user",
            accepted: [
              "can we change the scale",
              "replace the scale please",
              "can you replace the scale"
            ],
            hints: [
              "Tartının değiştirilmesini rica etmelisin.",
              "'change' veya 'replace' kelimesini kullan.",
              "Can we change the scale?"
            ]
          }
        ]
      }
    ]
  },
];

// ─── SESLİ SİMÜLASYON STATE ──────────────────────────────────────
let simView = "menu";          // "menu" | "scene"
let simCategoryIdx = 0;
let simSceneIdx = 0;
let simStepIdx  = 0;
let simHintIdx  = 0;
let simSubtitleVisible = false;
let simCompletedScenes = {};   // { "registration_1": true, ... }

// ─── ANA GİRİŞ NOKTASI ────────────────────────────────────────────
function renderSimulation() {
  if (simView === "menu") {
    renderSimMenu();
  } else {
    renderSimScene();
  }
}

// ─── 3x3 GRID MENÜ ────────────────────────────────────────────────
function renderSimMenu() {
  const c = document.getElementById("content");

  c.innerHTML = `
    <div style="margin-bottom:14px;">
      <div style="font-size:13px; font-weight:700; color:#185FA5; margin-bottom:2px;">
        🎙️ Sesli Simülasyon
      </div>
      <div style="font-size:11px; color:var(--text2);">
        Pratik yapmak istediğin bölümü seç.
      </div>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px;">
      ${SIM_CATEGORIES.map((cat, idx) => {
        const hasContent = cat.scenes.length > 0;
        const total = cat.scenes.length;
        const completed = cat.scenes.filter(s => simCompletedScenes[`${cat.id}_${s.id}`]).length;
        const allDone = hasContent && completed === total;

        return `
        <button
          onclick="${hasContent ? `simOpenCategory(${idx})` : ""}"
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

// ─── KATEGORİ AÇ ──────────────────────────────────────────────────
function simOpenCategory(catIdx) {
  simCategoryIdx = catIdx;
  simSceneIdx = 0;
  simStepIdx = 0;
  simHintIdx = 0;
  simSubtitleVisible = false;
  simView = "scene";
  renderSimScene();
}

// ─── MENÜYE GERİ DÖN ──────────────────────────────────────────────
function simBackToMenu() {
  simView = "menu";
  renderSimMenu();
}

// ─── SAHNE EKRANI ─────────────────────────────────────────────────
function renderSimScene() {
  const c = document.getElementById("content");
  const category = SIM_CATEGORIES[simCategoryIdx];
  const scenes = category.scenes;
  const scene = scenes[simSceneIdx];
  if (!scene) return;

  const step = scene.steps[simStepIdx];
  const isLast = simSceneIdx === scenes.length - 1;
  const totalScenes = scenes.length;

  // ─── PROFESYONEL İKONLAR (SVG) ───
  const speakerMeta = {
    narrator: {
      icon: `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`,
      label: "Anlatıcı"
    },
    representative: {
      icon: `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
      label: "Takım Temsilcisi"
    },
    athlete: {
      icon: `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13a3 3 0 0 1 3-3h1.5a2.5 2.5 0 0 1 2.5 2.5V14"></path><path d="M9 10V8a2 2 0 0 1 4 0v2"></path><path d="M12 12h2a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1"></path><path d="M5 13v3a3 3 0 0 0 3 3h1"></path><line x1="13" y1="19" x2="20" y2="19"></line></svg>`,
      label: "Sporcu"
    },
    user: {
      icon: `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>`,
      label: "Sen (Hakem)"
    }
  };
  const meta = speakerMeta[step.speaker] || speakerMeta.narrator;

  // ── Segment ilerleme çizgisi: her sahne için bir nokta ──
  const segmentsHtml = scenes.map((s, i) => {
    let state = "upcoming"; // gri/nötr
    if (i === simSceneIdx) state = "current";       // yeşil
    else if (i < simSceneIdx) state = "done";        // tamamlandı — gri ama dolu

    const bg = state === "current" ? "#3B6D11"
             : state === "done"    ? "#9aa8b8"
             : "var(--border)";
    const labelColor = state === "current" ? "#185FA5" : "var(--text2)";

    return `
      <div style="display:flex; flex-direction:column; align-items:center; flex:1; min-width:0;">
        <div style="
          width:100%; height:6px; border-radius:4px;
          background:${bg};
          transition:background .3s;
        "></div>
        <div style="font-size:8px; color:${labelColor}; margin-top:3px; font-weight:${state === 'current' ? '700' : '500'};">
          ${i + 1}
        </div>
      </div>
    `;
  }).join("");

  c.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
      <button onclick="simBackToMenu()" style="
        background:none; border:none; font-size:11px; color:#185FA5;
        cursor:pointer; font-weight:600; padding:0;
      ">← Bölümler</button>
      <div style="font-size:11px; color:#888; text-align:right;">
        🎙️ ${category.label}
      </div>
    </div>

    <!-- Sahne başlığı + Sıfırla butonu -->
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
      <div style="font-size:12px; font-weight:600; color:var(--text);">
        Senaryo ${simSceneIdx + 1} <span style="color:var(--text2); font-weight:400;">/ ${totalScenes}</span>
        &nbsp;·&nbsp; ${scene.title}
      </div>
      <button onclick="if(confirm('Bu bölümü baştan başlatmak istediğinize emin misiniz?')) simRestartCategory();" style="
        background:#dc3545; color:#fff; border:none; cursor:pointer;
        border-radius:20px; padding:4px 10px; font-size:11px; font-weight:bold;
        flex-shrink:0;
      ">Sıfırla</button>
    </div>

    <!-- Segment ilerleme çizgisi -->
    <div style="display:flex; gap:4px; margin-bottom:16px;">
      ${segmentsHtml}
    </div>

    <!-- Sahne kartı -->
    <div id="sim-card" style="background:var(--card-bg); border:1px solid var(--border); border-radius:14px; overflow:hidden; margin-bottom:12px;">

      <!-- Üst: konuşmacı -->
      <div style="padding:20px 20px 16px; text-align:center; border-bottom:1px solid var(--border); background:var(--l3-bg);">
        <div style="font-size:40px; line-height:1; margin-bottom:8px; color:#185FA5; display:flex; justify-content:center;">${meta.icon}</div>
        <div style="font-size:12px; font-weight:600; color:#185FA5; text-transform:uppercase; letter-spacing:.5px;">${meta.label}</div>
      </div>

      <!-- Orta: aksiyon -->
      <div style="padding:24px 20px;">

        ${step.speaker !== "user" ? `
          <!-- Dinleme aşaması -->
          <div style="text-align:center;">
            <button id="sim-play-btn" onclick="simPlay()" style="
              display:inline-flex; align-items:center; gap:8px;
              padding:12px 28px; font-size:14px; font-weight:600;
              background:#185FA5; color:#fff; border:none;
              border-radius:24px; cursor:pointer; margin-bottom:16px;
            ">▶ Dinle</button>

            <div id="sim-subtitle-wrap" style="margin-top:4px;">
              <div id="sim-subtitle-text" style="
                display:none;
                background:var(--l3-bg); border:1px solid var(--border);
                border-radius:8px; padding:10px 14px;
                font-size:13px; color:var(--text); line-height:1.5;
                margin-bottom:8px;
              ">${step.subtitle || ""}</div>
              <button onclick="simToggleSubtitle()" style="
                background:none; border:none; font-size:11px;
                color:#888; cursor:pointer; text-decoration:underline;
              ">👁 Alt yazıyı ${simSubtitleVisible ? "gizle" : "göster"}</button>
            </div>
          </div>
        ` : `
          <!-- Konuşma aşaması -->
          <div style="text-align:center;">
            <div style="font-size:12px; color:var(--text2); margin-bottom:16px; line-height:1.6;">
              Mikrofona basıp ne söylemen gerektiğini söyle.
            </div>

            <button id="sim-mic-btn" onclick="simSpeak()" style="
              width:80px; height:80px; border-radius:50%;
              background:#185FA5; color:#fff; border:none;
              font-size:28px; cursor:pointer;
              display:flex; align-items:center; justify-content:center;
              margin:0 auto 16px; transition:all .2s;
            ">🎤</button>

            <div id="sim-wave" style="display:none; justify-content:center; align-items:center; gap:3px; height:24px; margin-bottom:8px;">
              ${[0,1,2,3,4].map(i => `
                <div style="
                  width:4px; background:#185FA5; border-radius:2px;
                  animation:simWave .6s ease-in-out ${i * 0.1}s infinite alternate;
                  height:${8 + i * 4}px;
                "></div>
              `).join("")}
            </div>

            <div id="sim-listening-label" style="display:none; font-size:12px; color:#A32D2D; font-weight:600;">
              🔴 Dinleniyor...
            </div>

            <div id="sim-result-area" style="margin-top:8px; min-height:20px;"></div>

            <!-- İpucu -->
            <div id="sim-hint-area" style="margin-top:12px;"></div>
          </div>
        `}
      </div>
    </div>

    <!-- Sağ altta: sonraki sahne butonu -->
    <div style="display:flex; justify-content:flex-end; margin-top:8px;">
      <button id="sim-next-btn" onclick="simNextScene()" style="
        display:none;
        padding:10px 20px; font-size:13px; font-weight:600;
        background:#185FA5; color:#fff; border:none;
        border-radius:22px; cursor:pointer;
      ">${isLast ? "✓ Bölümü Tamamla" : "Sonraki Sahne →"}</button>
    </div>

    <style>
      @keyframes simWave {
        from { transform: scaleY(1); }
        to   { transform: scaleY(2.2); }
      }
    </style>
  `;

  // Alt yazı durumunu koru
  if (simSubtitleVisible && step.speaker !== "user") {
    const el = document.getElementById("sim-subtitle-text");
    if (el) el.style.display = "block";
  }
}

// ─── OYNAT ───────────────────────────────────────────────────────
function simPlay() {
  const category = SIM_CATEGORIES[simCategoryIdx];
  const scene = category.scenes[simSceneIdx];
  const step  = scene.steps[simStepIdx];
  if (!step.audioId) return;

  const btn = document.getElementById("sim-play-btn");
  if (btn) {
    btn.textContent = "⏸ Çalıyor...";
    btn.disabled = true;
  }

  const nextStep = scene.steps[simStepIdx + 1];
  const audio = new Audio(`assets/audio/${step.audioId}.mp3`);
  audio.play().catch(e => console.warn("Ses oynatılamadı:", e));

  // Ses bitince sonraki adıma geç
  audio.onended = function() {
    if (btn) {
      btn.textContent = "▶ Tekrar Dinle";
      btn.disabled = false;
    }

    if (!nextStep) return;

    // Kısa bir nefes molası (500ms) ver, sonra geç
    setTimeout(() => {
      simStepIdx++;
      simHintIdx = 0;
      renderSimScene();
    }, 500);
  };

  // Hata durumunda butonu serbest bırak
  audio.onerror = function() {
    if (btn) {
      btn.textContent = "▶ Tekrar Dinle";
      btn.disabled = false;
    }
  };
}

// ─── ALT YAZI ────────────────────────────────────────────────────
function simToggleSubtitle() {
  simSubtitleVisible = !simSubtitleVisible;
  const el = document.getElementById("sim-subtitle-text");
  const btn = el && el.nextElementSibling;
  if (el) el.style.display = simSubtitleVisible ? "block" : "none";
  if (btn) btn.textContent = `👁 Alt yazıyı ${simSubtitleVisible ? "gizle" : "göster"}`;
}

// ─── KONUŞ ───────────────────────────────────────────────────────
function simSpeak() {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    document.getElementById("sim-result-area").innerHTML =
      '<span style="color:#A32D2D; font-size:12px;">⚠ Tarayıcın mikrofonu desteklemiyor.</span>';
    return;
  }

  const category = SIM_CATEGORIES[simCategoryIdx];
  const scene = category.scenes[simSceneIdx];
  const step  = scene.steps[simStepIdx];

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SR();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  const micBtn   = document.getElementById("sim-mic-btn");
  const wave     = document.getElementById("sim-wave");
  const label    = document.getElementById("sim-listening-label");
  const resultEl = document.getElementById("sim-result-area");

  micBtn.style.background = "#A32D2D";
  micBtn.textContent = "⏹";
  if (wave)  wave.style.display  = "flex";
  if (label) label.style.display = "block";
  resultEl.innerHTML = "";

  recognition.start();

  recognition.onresult = function(e) {
    let said = e.results[0][0].transcript.toLowerCase().trim();

    // Tarayıcı tanıma düzeltmeleri
    const dictionary = {
      "assets office": "athlete",
      "assets":        "athlete",
      "at least":      "athlete",
      "head guard":    "headguard",
      "headgard":      "headguard",
      "gumshield":     "gum shield",
      "waikru":        "wai kru",
      "anti doping":   "anti-doping",
      "non pregnancy": "non-pregnancy",
      "decoration":    "declaration",
      "auntie":        "anti"
    };
    Object.keys(dictionary).forEach(key => {
      if (said.includes(key)) said = said.replace(key, dictionary[key]);
    });

    micBtn.style.background = "#185FA5";
    micBtn.textContent = "🎤";
    if (wave)  wave.style.display  = "none";
    if (label) label.style.display = "none";

    resultEl.innerHTML = `<div style="font-size:11px; color:var(--text2); margin-bottom:6px;">Söylediğin: "<em>${said}</em>"</div>`;

    const correct = simCheckAnswer(said, step.accepted);

    if (correct) {
      simShowSuccess();
    } else {
      simShowHint(step.hints);
    }
  };

  recognition.onerror = function(ev) {
    micBtn.style.background = "#185FA5";
    micBtn.textContent = "🎤";
    if (wave)  wave.style.display  = "none";
    if (label) label.style.display = "none";
    resultEl.innerHTML = `<span style="font-size:11px; color:#A32D2D;">⚠ Hata: ${ev.error}</span>`;
  };

  recognition.onend = function() {
    micBtn.style.background = "#185FA5";
    micBtn.textContent = "🎤";
    if (wave)  wave.style.display  = "none";
    if (label) label.style.display = "none";
  };
}

// ─── CEVAP KONTROLÜ ──────────────────────────────────────────────
function simCheckAnswer(said, acceptedList) {
  const clean = said.replace(/[^a-z0-9\s]/g, "").trim();

  for (const accepted of acceptedList) {
    const cleanAccepted = accepted.replace(/[^a-z0-9\s]/g, "").trim();

    // Tam eşleşme
    if (clean === cleanAccepted) return true;

    // Anahtar kelime eşleşmesi — accepted'daki 3+ harfli kelimelerin %70'i bulunuyorsa kabul et
    const keywords = cleanAccepted.split(" ").filter(w => w.length >= 3);
    if (keywords.length === 0) continue;
    const matched = keywords.filter(w => clean.includes(w));
    if (matched.length / keywords.length >= 0.7) return true;
  }
  return false;
}

// ─── BAŞARI ──────────────────────────────────────────────────────
function simShowSuccess() {
  const category = SIM_CATEGORIES[simCategoryIdx];
  const scene = category.scenes[simSceneIdx];
  simCompletedScenes[`${category.id}_${scene.id}`] = true;

  const card = document.getElementById("sim-card");
  const resultEl = document.getElementById("sim-result-area");
  const nextBtn = document.getElementById("sim-next-btn");
  const hintArea = document.getElementById("sim-hint-area");

  if (hintArea) hintArea.innerHTML = "";

  if (resultEl) {
    resultEl.innerHTML += `
      <div style="
        background:#EAF3DE; border:1px solid #3B6D11;
        border-radius:10px; padding:12px 14px;
        font-size:13px; color:#27500A; font-weight:600;
        animation: simFlash .4s ease;
      ">✓ Harika! Doğru yönetildi.</div>
    `;
  }

  // Kart kenarlığını yeşil yap
  if (card) {
    card.style.borderColor = "#3B6D11";
    card.style.boxShadow = "0 0 0 3px rgba(59,109,17,0.15)";
  }

  if (nextBtn) nextBtn.style.display = "inline-block";

  // @keyframes simFlash için
  if (!document.getElementById("sim-flash-style")) {
    const s = document.createElement("style");
    s.id = "sim-flash-style";
    s.textContent = `
      @keyframes simFlash {
        0%   { background: #b8f0a0; }
        100% { background: #EAF3DE; }
      }
    `;
    document.head.appendChild(s);
  }
}

// ─── İPUCU ───────────────────────────────────────────────────────
function simShowHint(hints) {
  const hintArea = document.getElementById("sim-hint-area");
  const card     = document.getElementById("sim-card");
  const resultEl = document.getElementById("sim-result-area");

  if (resultEl) {
    resultEl.innerHTML += `
      <div style="
        background:#FCEBEB; border:1px solid #A32D2D;
        border-radius:10px; padding:10px 14px;
        font-size:12px; color:#791F1F; margin-bottom:8px;
      ">✗ Tekrar dene.</div>
    `;
  }

  if (card) {
    card.style.borderColor = "#e0c040";
    card.style.boxShadow = "0 0 0 3px rgba(186,117,23,0.15)";
  }

  const hint = hints[Math.min(simHintIdx, hints.length - 1)];
  const isLastHint = simHintIdx >= hints.length - 1;

  if (hintArea) {
    hintArea.innerHTML = `
      <div style="
        background:#fff8e1; border-left:3px solid #ffc107;
        border-radius:6px; padding:10px 12px;
        font-size:12px; color:#856404; line-height:1.6;
      ">
        <b>💡 İpucu ${simHintIdx + 1}:</b> ${hint}
        ${isLastHint ? "" : `
          <div style="margin-top:8px;">
            <button onclick="simNextHint()" style="
              background:none; border:none; font-size:11px;
              color:#185FA5; cursor:pointer; text-decoration:underline;
            ">Bir sonraki ipucunu göster</button>
          </div>
        `}
      </div>
    `;
  }

  simHintIdx++;
}

// ─── SONRAKİ İPUCU ───────────────────────────────────────────────
function simNextHint() {
  const category = SIM_CATEGORIES[simCategoryIdx];
  const scene = category.scenes[simSceneIdx];
  const step  = scene.steps[simStepIdx];
  simShowHint(step.hints);
}

// ─── SONRAKİ SAHNE ───────────────────────────────────────────────
function simNextScene() {
  const category = SIM_CATEGORIES[simCategoryIdx];
  if (simSceneIdx < category.scenes.length - 1) {
    simSceneIdx++;
    simStepIdx  = 0;
    simHintIdx  = 0;
    simSubtitleVisible = false;
    renderSimScene();
  } else {
    simShowComplete();
  }
}

// ─── BÖLÜM TAMAMLANDI ─────────────────────────────────────────────
function simShowComplete() {
  const category = SIM_CATEGORIES[simCategoryIdx];
  const c = document.getElementById("content");
  c.innerHTML = `
    <div style="
      text-align:center; padding:3rem 1rem;
      background:var(--card-bg); border:1px solid var(--border);
      border-radius:14px;
    ">
      <div style="font-size:56px; margin-bottom:12px;">🏆</div>
      <div style="font-size:20px; font-weight:700; color:#185FA5; margin-bottom:8px;">
        ${category.label} Tamamlandı!
      </div>
      <div style="font-size:14px; color:var(--text2); margin-bottom:24px; line-height:1.6;">
        Bu bölümdeki tüm ${category.scenes.length} senaryoyu başarıyla geçtin.<br>
        Harika bir pratik yaptın!
      </div>
      <div style="display:flex; gap:8px; justify-content:center;">
        <button onclick="simRestartCategory()" style="
          padding:11px 22px; font-size:13px; font-weight:600;
          background:var(--card-bg); color:#185FA5; border:1px solid #185FA5;
          border-radius:22px; cursor:pointer;
        ">↺ Tekrar Yap</button>
        <button onclick="simBackToMenu()" style="
          padding:11px 22px; font-size:13px; font-weight:600;
          background:#185FA5; color:#fff; border:none;
          border-radius:22px; cursor:pointer;
        ">Bölümlere Dön</button>
      </div>
    </div>
  `;
}

// ─── BÖLÜMÜ TEKRAR BAŞLAT ─────────────────────────────────────────
function simRestartCategory() {
  simSceneIdx = 0;
  simStepIdx  = 0;
  simHintIdx  = 0;
  simSubtitleVisible = false;
  renderSimScene();
}