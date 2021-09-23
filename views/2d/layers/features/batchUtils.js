/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../core/promiseUtils"],(function(e,t){"use strict";function o(e,o,r){var n;const c=null!=(n=null==r?void 0:r.batchSize)?n:100,s=500,l=t.createResolver();let i=0;const u=()=>{const n=Date.now();let a=!1,f=0;for(;!a&&f<s;){try{for(r&&t.throwIfAborted(r);i<Math.min(i+c,e.length);i++)o(e[i])}catch(h){l.reject(h)}f=Date.now()-n,a=i>=e.length}a?l.resolve():setTimeout(u,0)};return u(),l.promise}e.executeForEachAsync=o,Object.defineProperty(e,"__esModule",{value:!0})}));
