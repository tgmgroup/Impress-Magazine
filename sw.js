const CACHE_NAME = "impress-v6"; // Incremented version to force update
const OFFLINE_URL = "/offline.html";

const STATIC_ASSETS = [
	"/",
	"/index.html",
	"/offline.html",
	"/assets/styles.css",
	"/assets/scripts.js",
	"/assets/home/icon.png",
	"/assets/home/icon-512.png",
	"/assets/home/icon-192.png",
	"/assets/lang/en.json",
	"/assets/lang/ja.json",
	"/assets/fonts/kleeone_regular.ttf",
	"/assets/home/icons8-torii-94.png",
	"/assets/home/icons8-us-capitol-94.png",
];

// 1. Install - Pre-cache the UI shell and the offline page
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log("Caching static assets");
			return cache.addAll(STATIC_ASSETS);
		}),
	);
	self.skipWaiting(); // Forces the waiting service worker to become active
});

// 2. Activate - Clean up old caches
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
	self.clients.claim(); // Immediately take control of the page
});

// 3. Fetch - Cache First, Network Fallback
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((cachedResponse) => {
			// Return cached file if found (ideal for fonts and icons)
			if (cachedResponse) {
				return cachedResponse;
			}

			// Otherwise, go to network
			return fetch(event.request)
				.then((networkResponse) => {
					// Don't cache if not a success or if it's a 3rd party request
					if (
						!networkResponse ||
						networkResponse.status !== 200 ||
						networkResponse.type !== "basic"
					) {
						return networkResponse;
					}

					// Cache the new resource for next time
					const responseToCache = networkResponse.clone();
					caches.open(CACHE_NAME).then((cache) => {
						cache.put(event.request, responseToCache);
					});

					return networkResponse;
				})
				.catch(() => {
					// NETWORK FAILURE: If the user is navigating to a page, show offline.html
					if (event.request.mode === "navigate") {
						return caches.match(OFFLINE_URL);
					}
				});
		}),
	);
});
