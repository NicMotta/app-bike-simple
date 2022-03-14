self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["./", "./style.css", "./index.html", "./sketch.js", "./logo.png", "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js" ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});