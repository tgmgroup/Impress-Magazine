const CACHE_NAME = "impress-v2";
const STATIC_ASSETS = [
	"/",
	"/index.html",
	"/assets/styles.css",
	"/assets/scripts.js",
	"/assets/home/icon.png",
	"/assets/home/icon-512.png",
	"/assets/home/icon-192.png",
];

// 1. Install - Pre-cache only the UI shell
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(STATIC_ASSETS);
		}),
	);
});

// 2. Activate - Clean up old caches if you update the version
self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches.keys().then((keys) => {
			return Promise.all(
				keys
					.filter((key) => key !== CACHE_NAME)
					.map((key) => caches.delete(key)),
			);
		}),
	);
});

// 3. Fetch - The "Smart" part
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((cachedResponse) => {
			// Return the file if it's in the cache
			if (cachedResponse) {
				return cachedResponse;
			}

			// If not in cache, go to the network
			return fetch(event.request).then((networkResponse) => {
				// Only cache valid responses and images/styles
				if (
					!networkResponse ||
					networkResponse.status !== 200 ||
					networkResponse.type !== "basic"
				) {
					return networkResponse;
				}

				// Clone the response to store a copy in the cache
				const responseToCache = networkResponse.clone();
				caches.open(CACHE_NAME).then((cache) => {
					cache.put(event.request, responseToCache);
				});

				return networkResponse;
			});
		}),
	);
});
