/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../core/promiseUtils"],(function(e,t){"use strict";function o(e,o,r){const n=r?.batchSize??100,c=500,s=t.createResolver();let i=0;const l=()=>{const a=Date.now();let u=!1,f=0;for(;!u&&f<c;){try{for(r&&t.throwIfAborted(r);i<Math.min(i+n,e.length);i++)o(e[i])}catch(h){s.reject(h)}f=Date.now()-a,u=i>=e.length}u?s.resolve():setTimeout(l,0)};return l(),s.promise}e.executeForEachAsync=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
