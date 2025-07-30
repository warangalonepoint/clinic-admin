// This is a simple service worker script for offline caching

const CACHE_NAME = 'clinic-admin-cache-v1'; const urlsToCache = [ '/', '/index.html', '/dashboard.html', '/bookings.html', '/logs.html', '/confirmation.html', '/staff.html', '/sync.html', '/manifest.json', '/style.css', '/logo.png', '/Slots.csv', '/logs.csv' ];

self.addEventListener('install', event => { event.waitUntil( caches.open(CACHE_NAME) .then(cache => cache.addAll(urlsToCache)) ); });

self.addEventListener('fetch', event => { event.respondWith( caches.match(event.request) .then(response => response || fetch(event.request)) ); });

self.addEventListener('activate', event => { event.waitUntil( caches.keys().then(keyList => Promise.all(keyList.map(key => { if (key !== CACHE_NAME) { return caches.delete(key); } })) ) ); });

