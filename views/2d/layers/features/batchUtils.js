/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../core/promiseUtils"],(function(e,t){"use strict";function o(e,o,r){var n;const c=null!=(n=null==r?void 0:r.batchSize)?n:100,l=500,s=t.createResolver();let i=0;const u=()=>{const n=Date.now();let a=!1,f=0;for(;!a&&f<l;){try{for(r&&t.throwIfAborted(r);i<Math.min(i+c,e.length);i++)o(e[i])}catch(h){s.reject(h)}f=Date.now()-n,a=i>=e.length}a?s.resolve():setTimeout(u,0)};return u(),s.promise}e.executeForEachAsync=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
