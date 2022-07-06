/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{createResolver as t,throwIfAborted as e}from"../../../../core/promiseUtils.js";function o(o,r,n){const c=n?.batchSize??100,s=500,i=t();let l=0;const m=()=>{const t=Date.now();let a=!1,h=0;for(;!a&&h<s;){try{for(n&&e(n);l<Math.min(l+c,o.length);l++)r(o[l])}catch(f){i.reject(f)}h=Date.now()-t,a=l>=o.length}a?i.resolve():setTimeout(m,0)};return m(),i.promise}export{o as executeForEachAsync};
