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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","./nextTick","./now","./requestAnimationFrame"],function(e,t,r,a,n){function s(e){var a=new v(e);return F.push(a),t.debug.willDispatch||(t.debug.willDispatch=!0,r(f)),a}function i(e){var r=new m(e);_.push(r);for(var a=0,n=w;a<n.length;a++){var s=n[a];e[s]&&I[s].push(r)}return t.debug.rafId||(k=-1,t.debug.rafId=h()),new x(r)}function u(e){void 0===e&&(e=!1);for(var t=0;t<_.length;t++)_[t].removed=!0;e&&c()}function o(e){g=Math.max(0,e)}function d(e){if(void 0===e&&(e=t.now()),t.debug.rafId=null,_.length>0&&(t.debug.rafId=h()),k>0){var r=e-k;b=Math.min(r,b)}t.debug.executeFrameTasks(e)}function p(e){void 0===e&&(e=t.now()),k<0&&(k=e);var r=e-k,a=g>0?g:b,n=Math.max(0,r-a);k=e;for(var s=0;s<_.length;s++){var i=_[s];-1!==i.epoch&&(i.dt=r)}for(var s=0;s<w.length;s++)for(var u=w[s],o=I[u],d=0;d<o.length;d++){var i=o[(d+A)%o.length];i.paused||i.removed||(0===s&&i.ticks++,-1===i.epoch&&(i.epoch=e),T.time=e,T.deltaTime=i.dt,T.elapsedFrameTime=t.now()-e,T.frameDuration=a-n,T.spendInTask=e-i.epoch,i.phases[u].call(i,T))}c(),++A}function h(){return t.debug.requestNextFrame?t.debug.requestNextFrame(l):l()}function c(){for(var e=0;e<_.length;){var t=_[e];if(e++,t.removed){_.splice(e-1,1);for(var r=0;r<w.length;r++){var a=w[r];if(t.phases[a]){var n=I[a],s=n.indexOf(t);-1!==s&&n.splice(s,1)}}}}}function f(){for(;F.length;){var e=F.shift();e.isActive&&(e.isActive=!1,e.callback())}t.debug.willDispatch=!1}function l(){return n(d)}Object.defineProperty(t,"__esModule",{value:!0}),t.now=a;var m=function(){function e(e){this.phases=e,this.paused=!1,this.pausedAt=0,this.epoch=-1,this.dt=0,this.ticks=-1,this.removed=!1}return e}(),v=function(){function e(e){this.callback=e,this.isActive=!0}return e.prototype.remove=function(){this.isActive=!1},e}(),k=-1,g=0,b=Number.POSITIVE_INFINITY,T={time:0,deltaTime:0,elapsedFrameTime:0,frameDuration:0,spendInTask:0},w=["prepare","preRender","render","postRender","update"],F=[],_=[],I={prepare:[],preRender:[],render:[],postRender:[],update:[]},x=function(){function e(e){this._task=e}return e.prototype.remove=function(){this._task.removed=!0},e.prototype.pause=function(){this._task.paused||(this._task.paused=!0,this._task.pausedAt=t.now())},e.prototype.resume=function(){this._task.paused&&(this._task.paused=!1,-1!==this._task.epoch&&(this._task.epoch+=t.now()-this._task.pausedAt))},e}();t.FrameTaskHandle=x,t.debug={frameTasks:_,rafId:null,requestNextFrame:null,willDispatch:!1,clearFrameTasks:u,dispatch:f,executeFrameTasks:p},t.schedule=s,t.addFrameTask=i,t.setFrameDuration=o;var A=0;t.requestNextFrame=h});