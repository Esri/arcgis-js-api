/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["require","exports","../../chunks/_rollupPluginBabelHelpers","../../core/promiseUtils","../../support/requestImageUtils"],(function(e,n,t,r,i){"use strict";function o(e){return Object.freeze({__proto__:null,default:e})}function u(e){return s.apply(this,arguments)}function s(){return(s=t._asyncToGenerator((function*(n){const t=new Promise((function(n,t){e(["./mask-svg"],(function(e){n(o(e))}),t)})),u=new Promise((function(n,t){e(["./overlay-svg"],(function(e){n(o(e))}),t)})),s=i.requestImage((yield t).default,{signal:n}),l=i.requestImage((yield u).default,{signal:n}),a={mask:yield s,overlay:yield l};return r.throwIfAborted(n),a}))).apply(this,arguments)}n.loadMagnifierResources=u,Object.defineProperty(n,"__esModule",{value:!0})}));
