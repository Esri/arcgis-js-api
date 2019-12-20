// COPYRIGHT © 2019 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","./nextTick","./now","./PooledArray","./promiseUtils","./requestAnimationFrame"],function(e,t,r,n,a,i,o){function u(e){var n=new g(e);return y.push(n),t.debug.willDispatch||(t.debug.willDispatch=!0,r(h)),n}function s(e){var r=new b(e);return D.push(r),t.debug.rafId||(w=-1,t.debug.rafId=m()),new q(r)}function c(e){void 0===e&&(e=!1),D.forEach(function(e){e.removed=!0}),e&&p()}function d(e){F=Math.max(0,e)}function f(e){if(void 0===e&&(e=t.now()),t.debug.rafId=null,D.length>0&&(t.debug.rafId=m()),w>0){var r=e-w;T=Math.min(r,T)}t.debug.executeFrameTasks(e)}function l(e){void 0===e&&(e=t.now()),w<0&&(w=e);var r=e-w,n=F>0?F:T,a=Math.max(0,r-n);w=e;for(var i=0;i<A.length;i++)!function(i){var o=A[i];D.forEach(function(u){if(!u.paused&&!u.removed){0===i&&u.ticks++;u.phases[o]&&(x.time=e,x.deltaTime=0===u.ticks?0:r,x.elapsedFrameTime=t.now()-e,x.frameDuration=n-a,u.phases[o].call(u,x))}})}(i);p()}function m(){return t.debug.requestNextFrame?t.debug.requestNextFrame(v):v()}function p(){D.forEach(function(e){e.removed&&_.push(e)}),D.removeUnorderedMany(_.data,_.length),_.clear()}function h(){for(;y.length;){var e=y.shift();e.isActive&&(e.isActive=!1,e.callback())}t.debug.willDispatch=!1}function v(){return o(f)}function k(e,t){void 0===e&&(e=1);var n=i.createResolver(),a=function(){i.isAborted(t)?n.reject(i.createAbortError()):0===e?n():(--e,r(function(){return a()}))};return a(),n.promise}Object.defineProperty(t,"__esModule",{value:!0}),t.now=n;var b=function(){function e(e){this.phases=e,this.paused=!1,this.ticks=-1,this.removed=!1}return e}(),g=function(){function e(e){this.callback=e,this.isActive=!0}return e.prototype.remove=function(){this.isActive=!1},e}(),w=-1,F=0,T=1e3,x={time:0,deltaTime:0,elapsedFrameTime:0,frameDuration:0},A=["prepare","preRender","render","postRender","update"],y=[],D=new a,q=function(){function e(e){this._task=e}return e.prototype.remove=function(){this._task.removed=!0},e.prototype.pause=function(){this._task.paused=!0},e.prototype.resume=function(){this._task.paused=!1},e}();t.FrameTaskHandle=q,t.debug={frameTasks:D,rafId:null,requestNextFrame:null,willDispatch:!1,clearFrameTasks:c,dispatch:h,executeFrameTasks:l},t.schedule=u,t.addFrameTask=s,t.setFrameDuration=d,t.requestNextFrame=m;var _=new a;t.waitTicks=k});