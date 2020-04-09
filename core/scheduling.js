// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","./nextTick","./now","./PooledArray","./promiseUtils","./requestAnimationFrame"],(function(e,t,r,n,a,i,u){Object.defineProperty(t,"__esModule",{value:!0}),t.now=n;var o=function(e){this.phases=e,this.paused=!1,this.ticks=-1,this.removed=!1},s=function(){function e(e){this.callback=e,this.isActive=!0}return e.prototype.remove=function(){this.isActive=!1},e}(),c=-1,d=0,f={time:0,deltaTime:0,elapsedFrameTime:0,frameDuration:0},l=["prepare","preRender","render","postRender","update"],m=[],p=new a,h=function(){function e(e){this._task=e}return e.prototype.remove=function(){this._task.removed=!0},e.prototype.pause=function(){this._task.paused=!0},e.prototype.resume=function(){this._task.paused=!1},e}();function v(e){void 0===e&&(e=n()),t.debug.rafId=null,p.length>0&&(t.debug.rafId=k()),t.debug.executeFrameTasks(e)}function k(){return t.debug.requestNextFrame?t.debug.requestNextFrame(w):w()}t.FrameTaskHandle=h,t.debug={frameTasks:p,rafId:null,requestNextFrame:null,willDispatch:!1,clearFrameTasks:function(e){void 0===e&&(e=!1);p.forEach((function(e){e.removed=!0})),e&&g()},dispatch:F,executeFrameTasks:function(e){void 0===e&&(e=n());c<0&&(c=e);var t=e-c,r=d>0?d:1e3/60,a=Math.max(0,t-r);c=e;for(var i=function(i){var u=l[i];p.forEach((function(o){o.paused||o.removed||(0===i&&o.ticks++,o.phases[u]&&(f.time=e,f.deltaTime=0===o.ticks?0:t,f.elapsedFrameTime=n()-e,f.frameDuration=r-a,o.phases[u].call(o,f)))}))},u=0;u<l.length;u++)i(u);g()}},t.schedule=function(e){var n=new s(e);return m.push(n),t.debug.willDispatch||(t.debug.willDispatch=!0,r(F)),n},t.addFrameTask=function(e){var r=new o(e);return p.push(r),t.debug.rafId||(c=-1,t.debug.rafId=k()),new h(r)},t.setFrameDuration=function(e){d=Math.max(0,e)},t.requestNextFrame=k;var b=new a;function g(){p.forEach((function(e){e.removed&&b.push(e)})),p.removeUnorderedMany(b.data,b.length),b.clear()}function F(){for(;m.length;){var e=m.shift();e.isActive&&(e.isActive=!1,e.callback())}t.debug.willDispatch=!1}function w(){return u(v)}t.waitTicks=function(e,t){void 0===e&&(e=1);var n=i.createResolver(),a=function(){i.isAborted(t)?n.reject(i.createAbortError()):0===e?n():(--e,r((function(){return a()})))};return a(),n.promise}}));