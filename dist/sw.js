if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const t=e=>i(e,r),u={module:{uri:r},exports:o,require:t};s[r]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(l(...e),o)))}}define(["./workbox-05160e81"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/aiprot-Dh4WIDyz.png",revision:null},{url:"assets/cip-al-bm0cm-b4.png",revision:null},{url:"assets/dbg-C-boIO6X.png",revision:null},{url:"assets/escudo-burla-X-Pu35Dg.gif",revision:null},{url:"assets/escudo-feliz-jYpRbo9r.gif",revision:null},{url:"assets/escudo-triste-DTn-Hy4j.gif",revision:null},{url:"assets/index-DMCRKfgf.js",revision:null},{url:"assets/index-psizj4Jr.css",revision:null},{url:"assets/Intensafuente-CNtU-Uj3.ttf",revision:null},{url:"assets/kerprot-hdolZ7Ok.png",revision:null},{url:"assets/logo-192-W34R16MK.png",revision:null},{url:"assets/logo-white-DJmGcvbc.svg",revision:null},{url:"assets/peroxi-k-DHmhzllm.png",revision:null},{url:"assets/poltrak-CipPWH_c.png",revision:null},{url:"assets/roulette-D1GfS2iV.gif",revision:null},{url:"index.html",revision:"2eacb74f59a9ef59c3851f10f5a599fb"},{url:"logo-192.png",revision:"5e239a26ac6e313cbefb6609f253f2fa"},{url:"logo-512.png",revision:"49ba2a873abfe90659f0602e44330e53"},{url:"registerSW.js",revision:"73eeb0ad3ffd1aa3bbb4bfe65d81539b"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"logo-192.png",revision:"5e239a26ac6e313cbefb6609f253f2fa"},{url:"logo-512.png",revision:"49ba2a873abfe90659f0602e44330e53"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.json",revision:"93eb2c0e94b32596d661023696fe5550"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({request:e})=>"document"===e.destination),new e.NetworkFirst({cacheName:"html-cache",plugins:[]}),"GET"),e.registerRoute((({request:e})=>"script"===e.destination||"style"===e.destination),new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[]}),"GET"),e.registerRoute((({request:e})=>"image"===e.destination),new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:2592e3})]}),"GET")}));
