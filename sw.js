if(!self.define){let e,i={};const r=(r,c)=>(r=new URL(r+".js",c).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const d=e=>r(e,n),t={module:{uri:n},exports:o,require:d};i[n]=Promise.all(c.map((e=>t[e]||d(e)))).then((e=>(s(...e),o)))}}define(["./workbox-a5b4c26b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"icon.png",revision:"dca2dbfe346deb2f5796423fd2d3340e"},{url:"img/avatar.jpg",revision:"042ba6f24a7f18e5c12016835ab33933"},{url:"img/bg.jpg",revision:"b4c17d1b508a09ca69672738758c1ed8"},{url:"img/favicon.ico",revision:"260751e15d4b6859e7233af7cce3fa0b"},{url:"img/resume_icon.png",revision:"4178e8371e725c88d1f0fcbd66d71359"},{url:"img/sw.js",revision:"3bb726cb2c85e0528c2d6b353b075b75"},{url:"img/workbox-a5b4c26b.js",revision:"2ee604a245cdc61e59d55342dc811488"},{url:"index.html",revision:"14c6c45ed958c35b600a051b51fcd87b"},{url:"manifest.json",revision:"3261f790689020f8348a7c8bf987e07e"},{url:"script.js",revision:"16d5d1c2728e36d6acc1b2d28b0fefbc"},{url:"style.css",revision:"17af62009e0194b1d19046376be03b56"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map