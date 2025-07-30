const CACHE_NAME = "clinic-pwa-v1";
const urlsToCache = [
  "/clinic-admin/index.html",
  "/clinic-admin/dashboard.html",
  "/clinic-admin/bookings.html",
  "/clinic-admin/logs.html",
  "/clinic-admin/staff.html",
  "/clinic-admin/sync.html",
  "/clinic-admin/confirmation.html",
  "/clinic-admin/manifest.json",
  "/clinic-admin/logo.png",
  "https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js"
];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
