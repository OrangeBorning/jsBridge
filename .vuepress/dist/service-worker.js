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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fb207de9246f039e3c0eda3d6a69c7c1"
  },
  {
    "url": "assets/css/0.styles.b27e3f38.css",
    "revision": "6aa5043f27b1bdcbb675d4b3cc0c404c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.2eacc74f.js",
    "revision": "93b008680a27e9c605ab21eb314d9066"
  },
  {
    "url": "assets/js/3.cb0a5f5a.js",
    "revision": "bc80775ba98cf5ec16a9cf1c2322e72a"
  },
  {
    "url": "assets/js/4.c5c2ed91.js",
    "revision": "d9ef2c0b0b498b772ea1759b994a7359"
  },
  {
    "url": "assets/js/5.bbcb4f6e.js",
    "revision": "cd06ab6b703d7b90db4f8cd6f8cf232d"
  },
  {
    "url": "assets/js/app.88f6f6b2.js",
    "revision": "74a388428ae4e9c7e6a9c95187571dee"
  },
  {
    "url": "guide/index.html",
    "revision": "eeb2ed226a7b0781cdca8a4114be086e"
  },
  {
    "url": "index.html",
    "revision": "57df10cd9ef3d7000bb800c212e064ca"
  },
  {
    "url": "logo.png",
    "revision": "8ede7a9c574f428955c67d810e274755"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
