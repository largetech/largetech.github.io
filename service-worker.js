/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8e1702c7d014bf78bcccead29ce4a422"
  },
  {
    "url": "about.html",
    "revision": "5eedecb522410cdc033dbdeddc83e944"
  },
  {
    "url": "assets/css/0.styles.81887141.css",
    "revision": "c47ce1fed069ef8861b2721ab9bd32e5"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5cb670d4.js",
    "revision": "f9e0c55e34b3e0781ba7aff8c4014655"
  },
  {
    "url": "assets/js/11.689219f8.js",
    "revision": "0909f213d394fcf793f337d8700feb20"
  },
  {
    "url": "assets/js/2.cec8bd14.js",
    "revision": "8cac18cea302102f77e02b470366c3bb"
  },
  {
    "url": "assets/js/3.08506349.js",
    "revision": "409dbb3fec66e576533cb08c07bd27b6"
  },
  {
    "url": "assets/js/4.395d8610.js",
    "revision": "195f447fb728a9affae9f1ed3abae88d"
  },
  {
    "url": "assets/js/5.8eb78622.js",
    "revision": "e0ba9c0f038bffa846c16ff69e3da5c3"
  },
  {
    "url": "assets/js/6.185dc526.js",
    "revision": "571aeb1a4436af9e8ee9e5bb8028ab67"
  },
  {
    "url": "assets/js/7.5205e6a3.js",
    "revision": "eae1f58005ad7fbcda767b26a7ab532a"
  },
  {
    "url": "assets/js/8.83ccb3c4.js",
    "revision": "f66238470aa65f1a4c016096134f0a9b"
  },
  {
    "url": "assets/js/9.4070327b.js",
    "revision": "3dc3cb9f3fa2d75e1a5898a0f36b781f"
  },
  {
    "url": "assets/js/app.7340550c.js",
    "revision": "9898782e4515b93e142934341f18795a"
  },
  {
    "url": "index.html",
    "revision": "ff4eb3382b3a23169f9a047c0b89fb1a"
  },
  {
    "url": "project.html",
    "revision": "02936b1d1492f5f2700c2339a2b41ec9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
