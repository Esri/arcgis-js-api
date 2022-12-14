/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["require","exports","../../chunks/_rollupPluginBabelHelpers","../../core/promiseUtils","../../support/requestImageUtils"],(function(e,r,t,o,l){"use strict";const s=e=>Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"}));function i(e){return n.apply(this,arguments)}function n(){return(n=t._asyncToGenerator((function*(r){const t=new Promise(((r,t)=>e(["./mask-svg"],(e=>r(s(e))),t))),i=new Promise(((r,t)=>e(["./overlay-svg"],(e=>r(s(e))),t))),n=l.requestImage((yield t).default,{signal:r}),u=l.requestImage((yield i).default,{signal:r}),a={mask:yield n,overlay:yield u};return o.throwIfAborted(r),a}))).apply(this,arguments)}r.loadMagnifierResources=i,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
