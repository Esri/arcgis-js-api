// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports","./nextTick","./now","./requestAnimationFrame"],function(e,t,r,a,n){function s(e){var a=new m(e);return _.push(a),t.debug.willDispatch||(t.debug.willDispatch=!0,r(f)),a}function i(e){var r=new v(e);I.push(r);for(var a=0,n=F;a<n.length;a++){var s=n[a];e[s]&&x[s].push(r)}return t.debug.rafId||(k=-1,t.debug.rafId=c()),new A(r)}function u(e){void 0===e&&(e=!1);for(var t=0;t<I.length;t++)I[t].removed=!0;e&&h()}function o(e){if(e<=0)return g=0,void(b=0);var t=1e3/e,r=1.05*T,a=Math.ceil(t/r);g=(a-1)*r,b=a*T}function d(e){if(void 0===e&&(e=t.now()),t.debug.rafId=null,I.length>0&&(t.debug.rafId=c()),k>0){var r=e-k;if(T=Math.min(r,T),r<g)return}t.debug.executeFrameTasks(e)}function p(e){void 0===e&&(e=t.now()),k<0&&(k=e);var r=e-k;k=e;for(var a=0;a<I.length;a++){var n=I[a];-1!==n.epoch&&(n.dt=r)}for(var a=0;a<F.length;a++)for(var s=F[a],i=x[s],u=0;u<i.length;u++){var n=i[u];n.paused||n.removed||(0===a&&n.ticks++,-1===n.epoch&&(n.epoch=e),w.time=e,w.deltaTime=n.dt,w.elapsedFrameTime=t.now()-e,w.frameDuration=b>0?b:T,w.spendInTask=e-n.epoch,n.phases[s].call(n,w))}h()}function c(){return t.debug.requestNextFrame?t.debug.requestNextFrame(l):l()}function h(){for(var e=0;e<I.length;){var t=I[e];if(e++,t.removed){I.splice(e-1,1);for(var r=0;r<F.length;r++){var a=F[r];if(t.phases[a]){var n=x[a],s=n.indexOf(t);-1!==s&&n.splice(s,1)}}}}}function f(){for(;_.length;){var e=_.shift();e.isActive&&(e.isActive=!1,e.callback())}t.debug.willDispatch=!1}function l(){return n(d)}Object.defineProperty(t,"__esModule",{value:!0}),t.now=a;var v=function(){function e(e){this.phases=e,this.paused=!1,this.pausedAt=0,this.epoch=-1,this.dt=0,this.ticks=-1,this.removed=!1}return e}(),m=function(){function e(e){this.callback=e,this.isActive=!0}return e.prototype.remove=function(){this.isActive=!1},e}(),k=-1,g=0,b=0,T=Number.POSITIVE_INFINITY,w={time:0,deltaTime:0,elapsedFrameTime:0,frameDuration:0,spendInTask:0},F=["prepare","preRender","render","postRender","update"],_=[],I=[],x={prepare:[],preRender:[],render:[],postRender:[],update:[]},A=function(){function e(e){this._task=e}return e.prototype.remove=function(){this._task.removed=!0},e.prototype.pause=function(){this._task.paused||(this._task.paused=!0,this._task.pausedAt=t.now())},e.prototype.resume=function(){this._task.paused&&(this._task.paused=!1,-1!==this._task.epoch&&(this._task.epoch+=t.now()-this._task.pausedAt))},e}();t.FrameTaskHandle=A,t.debug={frameTasks:I,rafId:null,requestNextFrame:null,willDispatch:!1,clearFrameTasks:u,dispatch:f,executeFrameTasks:p},t.schedule=s,t.addFrameTask=i,t.setFrameRate=o,t.requestNextFrame=c});