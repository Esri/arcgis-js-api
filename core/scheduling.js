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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","./maybe","./nextTick","./PooledArray","./promiseUtils"],(function(e,t,r,a,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.waitTicks=t.requestNextFrame=t.setFrameDuration=t.addFrameTask=t.schedule=t.debug=t.FrameTaskHandle=void 0;var u=function(e){this.phases=e,this.paused=!1,this.ticks=-1,this.removed=!1},s=function(){function e(e){this.callback=e,this.isActive=!0}return e.prototype.remove=function(){this.isActive=!1},e}(),o=-1,c=0,d={time:0,deltaTime:0,elapsedFrameTime:0,frameDuration:0},m=["prepare","preRender","render","postRender","update"],f=[],l=new n,p=function(){function e(e){this._task=e}return e.prototype.remove=function(){this._task.removed=!0},e.prototype.pause=function(){this._task.paused=!0},e.prototype.resume=function(){this._task.paused=!1},e}();function h(e){void 0===e&&(e=performance.now()),t.debug.rafId=null,l.length>0&&(t.debug.rafId=v()),t.debug.executeFrameTasks(e)}function v(){return t.debug.requestNextFrame?t.debug.requestNextFrame(g):g()}t.FrameTaskHandle=p,t.debug={frameTasks:l,rafId:null,requestNextFrame:null,willDispatch:!1,clearFrameTasks:function(e){void 0===e&&(e=!1);l.forEachSimple((function(e){e.removed=!0})),e&&b()},dispatch:F,executeFrameTasks:function(e){void 0===e&&(e=performance.now());o<0&&(o=e);var t=e-o,r=c>0?c:1e3/60,a=Math.max(0,t-r);o=e;for(var n=function(n){var i=m[n];l.forEachSimple((function(u){var s;u.paused||u.removed||(0===n&&u.ticks++,u.phases[i]&&(d.time=e,d.deltaTime=0===u.ticks?0:t,d.elapsedFrameTime=performance.now()-e,d.frameDuration=r-a,null===(s=u.phases[i])||void 0===s||s.call(u,d)))}))},i=0;i<m.length;i++)n(i);b()}},t.schedule=function(e){var r=new s(e);return f.push(r),t.debug.willDispatch||(t.debug.willDispatch=!0,a(F)),r},t.addFrameTask=function(e){var r=new u(e);return l.push(r),t.debug.rafId||(o=-1,t.debug.rafId=v()),new p(r)},t.setFrameDuration=function(e){c=Math.max(0,e)},t.requestNextFrame=v;var k=new n;function b(){l.forEachSimple((function(e){e.removed&&k.push(e)})),l.removeUnorderedMany(k.data,k.length),k.clear()}function F(){for(;f.length;){var e=r.assumeNonNull(f.shift());e.isActive&&e.callback()}t.debug.willDispatch=!1}function g(){return requestAnimationFrame(h)}t.waitTicks=function(e,t){void 0===e&&(e=1);var r=i.createResolver(),n=function(){i.isAborted(t)?r.reject(i.createAbortError()):0===e?r():(--e,a((function(){return n()})))};return n(),r.promise}}));