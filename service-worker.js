const cacheName = 'cache-v2';
const precacheResources = [
  '/',
  'index.html',
  'offline.html',
  'manifest.json',
  'css/style.css',
  'js/app.js',
  'js/networkCheck.js',
  'img/money.png',
  'img/touch/icon-128x128.png',
  'img/touch/icon-192x192.png',
  'img/touch/icon-256x256.png',
  'img/touch/icon-384x384.png',
  'img/touch/icon-512x512.png'
];

self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(precacheResources);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service worker activate event!');
});

self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
    );
});