// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","./nextTick","./now","./requestAnimationFrame"],function(e,t,a,r,n){function i(e){var r=new v(e);return F.push(r),t.debug.willDispatch||(t.debug.willDispatch=!0,a(f)),r}function s(e){var a=new m(e);_.push(a);for(var r=0,n=w;r<n.length;r++){var i=n[r];e[i]&&I[i].push(a)}return t.debug.rafId||(k=-1,t.debug.rafId=h()),new x(a)}function u(e){void 0===e&&(e=!1);for(var t=0;t<_.length;t++)_[t].removed=!0;e&&p()}function o(e){g=Math.max(0,e)}function d(e){if(void 0===e&&(e=t.now()),t.debug.rafId=null,_.length>0&&(t.debug.rafId=h()),k>0){var a=e-k;T=Math.min(a,T)}t.debug.executeFrameTasks(e)}function c(e){void 0===e&&(e=t.now()),k<0&&(k=e);var a=e-k,r=g>0?g:T,n=Math.max(0,a-r);k=e;for(var i=0;i<_.length;i++){var s=_[i];-1!==s.epoch&&(s.dt=a)}for(var i=0;i<w.length;i++)for(var u=w[i],o=I[u],d=0;d<o.length;d++){var s=o[(d+A)%o.length];s.paused||s.removed||(0===i&&s.ticks++,-1===s.epoch&&(s.epoch=e),b.time=e,b.deltaTime=s.dt,b.tickTime=Math.min(T,33),b.elapsedFrameTime=t.now()-e,b.frameDuration=r-n,b.spendInTask=e-s.epoch,s.phases[u].call(s,b))}p(),++A}function h(){return t.debug.requestNextFrame?t.debug.requestNextFrame(l):l()}function p(){for(var e=0;e<_.length;){var t=_[e];if(e++,t.removed){_.splice(e-1,1);for(var a=0;a<w.length;a++){var r=w[a];if(t.phases[r]){var n=I[r],i=n.indexOf(t);-1!==i&&n.splice(i,1)}}}}}function f(){for(;F.length;){var e=F.shift();e.isActive&&(e.isActive=!1,e.callback())}t.debug.willDispatch=!1}function l(){return n(d)}Object.defineProperty(t,"__esModule",{value:!0}),t.now=r;var m=function(){function e(e){this.phases=e,this.paused=!1,this.pausedAt=0,this.epoch=-1,this.dt=0,this.ticks=-1,this.removed=!1}return e}(),v=function(){function e(e){this.callback=e,this.isActive=!0}return e.prototype.remove=function(){this.isActive=!1},e}(),k=-1,g=0,T=Number.POSITIVE_INFINITY,b={time:0,deltaTime:0,tickTime:0,elapsedFrameTime:0,frameDuration:0,spendInTask:0},w=["prepare","preRender","render","postRender","update"],F=[],_=[],I={prepare:[],preRender:[],render:[],postRender:[],update:[]},x=function(){function e(e){this._task=e}return e.prototype.remove=function(){this._task.removed=!0},e.prototype.pause=function(){this._task.paused||(this._task.paused=!0,this._task.pausedAt=t.now())},e.prototype.resume=function(){this._task.paused&&(this._task.paused=!1,-1!==this._task.epoch&&(this._task.epoch+=t.now()-this._task.pausedAt))},e}();t.FrameTaskHandle=x,t.debug={frameTasks:_,rafId:null,requestNextFrame:null,willDispatch:!1,clearFrameTasks:u,dispatch:f,executeFrameTasks:c},t.schedule=i,t.addFrameTask=s,t.setFrameDuration=o;var A=0;t.requestNextFrame=h});