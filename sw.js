const CACHE = 'evidenceboard-v5';
const LOCAL = ['./','./index.html','./styles.css','./enhancements.css','./app.js','./manifest.webmanifest'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(c => c.addAll(LOCAL))));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request).then(response => { if (event.request.method === 'GET' && new URL(event.request.url).origin === location.origin) caches.open(CACHE).then(c => c.put(event.request, response.clone())); return response; }))));
