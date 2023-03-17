/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["require","exports","../../chunks/_rollupPluginBabelHelpers","../../core/promiseUtils","../../support/requestImageUtils"],(function(e,r,t,o,l){"use strict";const n=e=>Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"}));function i(e){return s.apply(this,arguments)}function s(){return(s=t._asyncToGenerator((function*(r){const t=new Promise(((r,t)=>e(["./mask-svg"],(e=>r(n(e))),t))),i=new Promise(((r,t)=>e(["./overlay-svg"],(e=>r(n(e))),t))),s=l.requestImage((yield t).default,{signal:r}),u=l.requestImage((yield i).default,{signal:r}),a={mask:yield s,overlay:yield u};return o.throwIfAborted(r),a}))).apply(this,arguments)}r.loadMagnifierResources=i,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
