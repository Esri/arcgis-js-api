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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","./nextTick","./now","./requestAnimationFrame"],function(e,t,r,a,n){function i(e){var a=new v(e);return _.push(a),t.debug.willDispatch||(t.debug.willDispatch=!0,r(f)),a}function s(e){var r=new m(e);I.push(r);for(var a=0,n=F;a<n.length;a++){var i=n[a];e[i]&&x[i].push(r)}return t.debug.rafId||(k=-1,t.debug.rafId=h()),new A(r)}function u(e){void 0===e&&(e=!1);for(var t=0;t<I.length;t++)I[t].removed=!0;e&&p()}function o(e){if(e<=0)return g=0,void(T=0);var t=1e3/e,r=1.05*b,a=Math.ceil(t/r);g=(a-1)*r,T=a*b}function d(e){if(void 0===e&&(e=t.now()),t.debug.rafId=null,I.length>0&&(t.debug.rafId=h()),k>0){var r=e-k;if(b=Math.min(r,b),r<g)return}t.debug.executeFrameTasks(e)}function c(e){void 0===e&&(e=t.now()),k<0&&(k=e);var r=e-k,a=T>0?T:b,n=Math.max(0,r-a);k=e;for(var i=0;i<I.length;i++){var s=I[i];-1!==s.epoch&&(s.dt=r)}for(var i=0;i<F.length;i++)for(var u=F[i],o=x[u],d=0;d<o.length;d++){var s=o[(d+N)%o.length];s.paused||s.removed||(0===i&&s.ticks++,-1===s.epoch&&(s.epoch=e),w.time=e,w.deltaTime=s.dt,w.tickTime=Math.min(b,33),w.elapsedFrameTime=t.now()-e,w.frameDuration=a-n,w.spendInTask=e-s.epoch,s.phases[u].call(s,w))}p(),++N}function h(){return t.debug.requestNextFrame?t.debug.requestNextFrame(l):l()}function p(){for(var e=0;e<I.length;){var t=I[e];if(e++,t.removed){I.splice(e-1,1);for(var r=0;r<F.length;r++){var a=F[r];if(t.phases[a]){var n=x[a],i=n.indexOf(t);-1!==i&&n.splice(i,1)}}}}}function f(){for(;_.length;){var e=_.shift();e.isActive&&(e.isActive=!1,e.callback())}t.debug.willDispatch=!1}function l(){return n(d)}Object.defineProperty(t,"__esModule",{value:!0}),t.now=a;var m=function(){function e(e){this.phases=e,this.paused=!1,this.pausedAt=0,this.epoch=-1,this.dt=0,this.ticks=-1,this.removed=!1}return e}(),v=function(){function e(e){this.callback=e,this.isActive=!0}return e.prototype.remove=function(){this.isActive=!1},e}(),k=-1,g=0,T=0,b=Number.POSITIVE_INFINITY,w={time:0,deltaTime:0,tickTime:0,elapsedFrameTime:0,frameDuration:0,spendInTask:0},F=["prepare","preRender","render","postRender","update"],_=[],I=[],x={prepare:[],preRender:[],render:[],postRender:[],update:[]},A=function(){function e(e){this._task=e}return e.prototype.remove=function(){this._task.removed=!0},e.prototype.pause=function(){this._task.paused||(this._task.paused=!0,this._task.pausedAt=t.now())},e.prototype.resume=function(){this._task.paused&&(this._task.paused=!1,-1!==this._task.epoch&&(this._task.epoch+=t.now()-this._task.pausedAt))},e}();t.FrameTaskHandle=A,t.debug={frameTasks:I,rafId:null,requestNextFrame:null,willDispatch:!1,clearFrameTasks:u,dispatch:f,executeFrameTasks:c},t.schedule=i,t.addFrameTask=s,t.setFrameRate=o;var N=0;t.requestNextFrame=h});