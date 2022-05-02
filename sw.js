self.addEventListener( 'install', event => {
    console.log('Install event!');
});

self.addEventListener('activate', event => {
    console.log('Activate event');
});

self.addEventListener('fetch', event =>{
    console.log('Fetch intercepted for:', event.request.url)
})