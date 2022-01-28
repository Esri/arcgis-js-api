/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["require","exports","../../chunks/_rollupPluginBabelHelpers","../../core/promiseUtils","../../support/requestImageUtils"],(function(e,r,t,s,l){"use strict";const n=e=>Object.freeze({__proto__:null,default:e});function o(e){return i.apply(this,arguments)}function i(){return(i=t._asyncToGenerator((function*(r){const t=new Promise(((r,t)=>e(["./mask-svg"],(e=>r(n(e))),t))),o=new Promise(((r,t)=>e(["./overlay-svg"],(e=>r(n(e))),t))),i=l.requestImage((yield t).default,{signal:r}),u=l.requestImage((yield o).default,{signal:r}),a={mask:yield i,overlay:yield u};return s.throwIfAborted(r),a}))).apply(this,arguments)}r.loadMagnifierResources=o,Object.defineProperty(r,"__esModule",{value:!0})}));
