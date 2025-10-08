// === 🧱 Настройки кэша ===
const CACHE_NAME = 'den-g-a-v12'; // ⬅️ увеличивай номер при каждом обновлении
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js',
  'https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap'
];

// === 🪄 Установка и кэширование ===
self.addEventListener('install', event => {
  // Сразу активировать новую версию
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// === 🧹 Очистка старого кэша и активация ===
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    );
    await clients.claim(); // сразу берём контроль над вкладками

    // 🔔 уведомляем вкладки, что новая версия активна
    const allClients = await clients.matchAll({ includeUncontrolled: true });
    for (const client of allClients) {
      client.postMessage({ type: 'NEW_VERSION_READY' });
    }
  })());
});

// === ⚡ Основная логика запросов ===
// Сначала пробуем сеть, если не получилось — даём кэш
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

// === 🔔 Обновление по запросу от клиента ===
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
