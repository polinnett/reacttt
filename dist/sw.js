if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const t=e=>n(e,r),l={module:{uri:r},exports:d,require:t};i[r]=Promise.all(o.map((e=>l[e]||t(e)))).then((e=>(s(...e),d)))}}define(["./workbox-b9e6edb1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-DynybcRe.css",revision:null},{url:"index.html",revision:"4f765d5bbfda6880274913baa1f9c488"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"logo.ico",revision:"ddedc54fe3760b960b5acf880a580209"},{url:"apple-touch-icon.png",revision:"55eb7bda629ff38781d2479f7d95dc83"},{url:"logo192.png",revision:"38db3e0d312e830ed456b45ceaf8ab76"},{url:"logo512.png",revision:"417a5e7d9f98e6b7da35b2044bf7a337"},{url:"manifest.webmanifest",revision:"624e0f9340046b4b19461b5bb5dd3794"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));