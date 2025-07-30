/**

service-worker.js for Warangal OneStop BookingBot

Handles offline support and caching of core files */


const CACHE_NAME = "warangal-onestop-cache-v1"; const urlsToCache = [ "/clinic-admin/index.html", "/clinic-admin/dashboard.html", "/clinic-admin/bookings.html", "/clinic-admin/logs.html", "/clinic-admin/confirmation.html", "/clinic-admin/sync.html", "/clinic-admin/manifest.json", "/clinic-admin/logo.png", ];

// Install event - pre-caches the files self.addEventListener("install", event => { event.waitUntil( caches.open(CACHE_NAME).then(cache => { return cache.addAll(urlsToCache); }) ); });

// Activate event - clears old caches if any self.addEventListener("activate", event => { event.waitUntil( caches.keys().then(cacheNames => { return Promise.all( cacheNames.map(cache => { if (cache !== CACHE_NAME) { return caches.delete(cache); } }) ); }) ); });

// Fetch event - serve cached files if offline self.addEventListener("fetch", event => { event.respondWith( caches.match(event.request).then(response => { return response || fetch(event.request); }) ); });

