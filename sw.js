// const CACHE_NAME = 'SITE_CONTENT_V1';

// const urlsToCache = [
//             '/index.html',
//             '/about.html',
//             '/projects.html',
//             '/custom.min.css',
//             '/keypad.jpg',
//             '/index.js',
//             '/js/app.min.js',
//             '/js/custom.min.js',
//             '/js/particles.min.js',
//             '/js/typewriter.min.js',
//             '/assets/particles.json',
//             '/site.webmanifest',
//             '/images/favicon.ico',
//             '/images/sq-border.svg',
//             '/images/sq-green.svg',
//             'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
//             'https://fonts.googleapis.com/css2?family=Londrina+Shadow&family=Jacques+Francois+Shadow&family=Poppins:wght@200;300;500;600;800&display=swap'
//         ];

// self.addEventListener('install', installer  => {
//     console.log('Installing');

//     const done = async () => {
//         const cache = await caches.open(CACHE_NAME);
//         return cache.addAll(urlsToCache);
//     };

//     installer.waitUntil(done());
// });

// self.addEventListener('fetch', fetchEvent => {
//     // respond to fetch request with a match from the cache
//     // if not in cache, then request from network and cache
//     // if there is a server error, show the offline page
//     const url = fetchEvent.request.url;

//     console.log(`Fetching: ${url}`);

//     const getResponse = async (request) => {
//         let response;

//         response = await caches.match(request);
//         if(response && response.status === 200) {
//             console.log('File in cache. Returning cached version.');
//             return response;
//         }

//         try {
//             response = await fetch(request);
//             if(response && response.status === 404) {
//                 return caches.match('/Templates/404.html');
//             }
//         } catch (e) {
//             return caches.match('/Templates/offline.html')
//         }

//         const clone = response.clone();
//         const cache = await caches.open(CACHE_NAME);
//         cache.put(url, clone);
//         return response;
//     };

//     fetchEvent.respondWith(getResponse(fetchEvent.request));
// });

// self.addEventListener('activate', activator => {
//     console.log('Activating');

//     const currentCaches = [CACHE_NAME];
//     const done = async () => {
//         const names = await caches.keys();
//         return Promise.all(names.map(name => {
//             if(!currentCaches.includes(name)) {
//                 return caches.delete(name);
//             }
//         }));
//     };

//     activator.waitUntil(done());
// });
