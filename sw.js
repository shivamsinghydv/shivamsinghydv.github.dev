self.addEventListener('activate', event => {
    console.log('Activate event');
});

const cacheName = 'cache-v1';
const resourcesToPrecache = [
    '/index.html',
    '/css/styles.css',
    '/css/style.css',
    '/assets/chatbot.webp',
    '/assets/favicon.ico',
    '/assets/github.svg',
    '/assets/gmail.svg',
    '/assets/python.webp',
    '/assets/qrcode.png',
    '/assets/spiral.webp',
    '/assets/web.svg',
    '/assets/avatar.svg',
    '/assets/avataaars.svg',
]


self.addEventListener( 'install', event => {
    console.log('Service worker Install event!');
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(resourcesToPrecache);
            })
    );
});

self.addEventListener('fetch', event =>{
    event.respondWith(caches.match(event.request)
    .then(cachedResponse =>{
        return cachedResponse || fetch(event.request);
    })
    );
});
