const CACHE = "tmf-v4";
const FILES = [
  "/tmf-referee/",
  "/tmf-referee/index.html",
  "/tmf-referee/day2.js",
  "/tmf-referee/assets/audio/kayit_1.mp3",
  "/tmf-referee/assets/audio/kayit_1_short.mp3",
  "/tmf-referee/assets/audio/kayit_2.mp3",
  "/tmf-referee/assets/audio/kayit_2_short.mp3",
  "/tmf-referee/assets/audio/kayit_3.mp3",
  "/tmf-referee/assets/audio/kayit_3_short.mp3",
  "/tmf-referee/assets/audio/kayit_4.mp3",
  "/tmf-referee/assets/audio/kayit_4_short.mp3",
  "/tmf-referee/assets/audio/kayit_5.mp3",
  "/tmf-referee/assets/audio/kayit_5_short.mp3",
  "/tmf-referee/assets/audio/kayit_6.mp3",
  "/tmf-referee/assets/audio/kayit_6_short.mp3",
  "/tmf-referee/assets/audio/kayit_7.mp3",
  "/tmf-referee/assets/audio/kayit_7_short.mp3",
  "/tmf-referee/assets/audio/kayit_8.mp3",
  "/tmf-referee/assets/audio/kayit_8_short.mp3",
  "/tmf-referee/assets/audio/kayit_9.mp3",
  "/tmf-referee/assets/audio/kayit_9_short.mp3",
  "/tmf-referee/assets/audio/kayit_10.mp3",
  "/tmf-referee/assets/audio/kayit_10_short.mp3",
  "/tmf-referee/assets/images/favicon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});