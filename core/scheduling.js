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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","./nextTick","./PooledArray","./promiseUtils"],(function(e,t,r,n,a){Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){this.phases=e,this.paused=!1,this.ticks=-1,this.removed=!1},o=function(){function e(e){this.callback=e,this.isActive=!0}return e.prototype.remove=function(){this.isActive=!1},e}(),u=-1,s=0,c={time:0,deltaTime:0,elapsedFrameTime:0,frameDuration:0},d=["prepare","preRender","render","postRender","update"],f=[],m=new n,p=function(){function e(e){this._task=e}return e.prototype.remove=function(){this._task.removed=!0},e.prototype.pause=function(){this._task.paused=!0},e.prototype.resume=function(){this._task.paused=!1},e}();function l(e){void 0===e&&(e=performance.now()),t.debug.rafId=null,m.length>0&&(t.debug.rafId=h()),t.debug.executeFrameTasks(e)}function h(){return t.debug.requestNextFrame?t.debug.requestNextFrame(g):g()}t.FrameTaskHandle=p,t.debug={frameTasks:m,rafId:null,requestNextFrame:null,willDispatch:!1,clearFrameTasks:function(e){void 0===e&&(e=!1);m.forEach((function(e){e.removed=!0})),e&&k()},dispatch:b,executeFrameTasks:function(e){void 0===e&&(e=performance.now());u<0&&(u=e);var t=e-u,r=s>0?s:1e3/60,n=Math.max(0,t-r);u=e;for(var a=function(a){var i=d[a];m.forEach((function(o){o.paused||o.removed||(0===a&&o.ticks++,o.phases[i]&&(c.time=e,c.deltaTime=0===o.ticks?0:t,c.elapsedFrameTime=performance.now()-e,c.frameDuration=r-n,o.phases[i].call(o,c)))}))},i=0;i<d.length;i++)a(i);k()}},t.schedule=function(e){var n=new o(e);return f.push(n),t.debug.willDispatch||(t.debug.willDispatch=!0,r(b)),n},t.addFrameTask=function(e){var r=new i(e);return m.push(r),t.debug.rafId||(u=-1,t.debug.rafId=h()),new p(r)},t.setFrameDuration=function(e){s=Math.max(0,e)},t.requestNextFrame=h;var v=new n;function k(){m.forEach((function(e){e.removed&&v.push(e)})),m.removeUnorderedMany(v.data,v.length),v.clear()}function b(){for(;f.length;){var e=f.shift();e.isActive&&(e.isActive=!1,e.callback())}t.debug.willDispatch=!1}function g(){return requestAnimationFrame(l)}t.waitTicks=function(e,t){void 0===e&&(e=1);var n=a.createResolver(),i=function(){a.isAborted(t)?n.reject(a.createAbortError()):0===e?n():(--e,r((function(){return i()})))};return i(),n.promise}}));