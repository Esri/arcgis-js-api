/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["require","exports","../../core/promiseUtils","../../support/requestImageUtils"],(function(e,t,n,r){"use strict";function a(e){return Object.freeze({__proto__:null,default:e})}t.loadMagnifierResources=async function(t){const i=new Promise((function(t,n){e(["./mask-svg"],(function(e){t(a(e))}),n)})),o=new Promise((function(t,n){e(["./overlay-svg"],(function(e){t(a(e))}),n)})),s=r.requestImage((await i).default,{signal:t}),u=r.requestImage((await o).default,{signal:t}),f={mask:await s,overlay:await u};return n.throwIfAborted(t),f},Object.defineProperty(t,"__esModule",{value:!0})}));
