/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","./maybe","./promiseUtils"],(function(e,r,t){"use strict";function o(e,r,o){return t.eachAlways(e.map(((e,t)=>r.apply(o,[e,t]))))}function n(e,r,o){return t.eachAlways(e.map(((e,t)=>r.apply(o,[e,t])))).then((e=>e.map((e=>e.value))))}function u(e){return r.isNone(e)?t.resolve():e.then((e=>({ok:!0,value:e}))).catch((e=>({ok:!1,error:e})))}function a(e){return e.then((e=>({ok:!0,value:e}))).catch((e=>(t.throwIfAbortError(e),{ok:!1,error:e})))}function c(e){if(!0===e.ok)return e.value;throw e.error}e.assertResult=c,e.forEach=o,e.map=n,e.result=u,e.resultOrAbort=a,Object.defineProperty(e,"__esModule",{value:!0})}));
