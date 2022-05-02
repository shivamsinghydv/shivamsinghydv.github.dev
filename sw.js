
const cacheName = 'cache-v1';
const resourcesToPrecache = [
    '/',
    'index.html',
    'styles.css',
    'assets/chatbot.png',
    'assets/favicon.ico',
    'assets/github.svg',
    'assets/gmail.svg',
    'assets/picture.jpg',
    'assets/python.png',
    'assets/qrcode.png',
    'assets/spiral.png',
    'assets/twitter.svg',
    '/assets/undraw_creation_re_d1mi.svg'
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