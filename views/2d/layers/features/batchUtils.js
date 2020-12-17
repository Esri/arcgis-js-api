/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../core/promiseUtils"],(function(e,t){"use strict";e.executeForEachAsync=function(e,o,r){var n;const c=null!=(n=null==r?void 0:r.batchSize)?n:100,s=t.createResolver();let l=0;const i=()=>{const n=Date.now();let u=!1,a=0;for(;!u&&a<500;){try{for(r&&t.throwIfAborted(r);l<Math.min(l+c,e.length);l++)o(e[l])}catch(e){s.reject(e)}a=Date.now()-n,u=l>=e.length}u?s.resolve():setTimeout(i,0)};return i(),s.promise},Object.defineProperty(e,"__esModule",{value:!0})}));
