/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","./promiseUtils"],(function(r,e){"use strict";function t(r,t,o){return e.eachAlways(r.map(((r,e)=>t.apply(o,[r,e]))))}function o(r,t,o){return e.eachAlways(r.map(((r,e)=>t.apply(o,[r,e])))).then((r=>r.map((r=>r.value))))}function n(r){return r.then((r=>({ok:!0,value:r}))).catch((r=>({ok:!1,error:r})))}function u(r){return r.then((r=>({ok:!0,value:r}))).catch((r=>{e.throwIfAbortError(r);return{ok:!1,error:r}}))}function a(r){if(!0===r.ok)return r.value;throw r.error}r.assertResult=a,r.forEach=t,r.map=o,r.result=n,r.resultOrAbort=u,Object.defineProperty(r,"__esModule",{value:!0})}));
