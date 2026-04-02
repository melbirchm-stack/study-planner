'use strict';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/index.html', // Cache your main HTML file
                '/styles.css', // Cache your CSS
                '/script.js', // Cache your JavaScript
                // Add any other assets you want to cache
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Check if the response is in the cache
            return response || fetch(event.request); // Fetch from network if not in cache
        })
    );
});