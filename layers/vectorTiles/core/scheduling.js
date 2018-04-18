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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","./nextTick","./now","./requestAnimationFrame"],function(e,t,r,a,s){function n(e){var a=new l(e);return g.push(a),t.debug.willDispatch||(t.debug.willDispatch=!0,r(h)),a}function i(e){var r=new f(e);w.push(r);for(var a=0,s=k;a<s.length;a++){var n=s[a];e[n]&&b[n].push(r)}return t.debug.rafId||(v=-1,t.debug.rafId=d()),new _(r)}function o(e){void 0===e&&(e=!1);for(var t=0;t<w.length;t++)w[t].removed=!0;e&&p()}function u(e){void 0===e&&(e=t.now()),t.debug.rafId=null,w.length>0&&(t.debug.rafId=d());var r=t.now();v<0&&(v=r);var a=r-v;v=r;for(var s=0;s<w.length;s++){var n=w[s];-1!==n.epoch&&(n.dt=a)}for(var s=0;s<k.length;s++)for(var i=k[s],o=b[i],u=0;u<o.length;u++){var n=o[u];n.paused||n.removed||(0===s&&n.ticks++,-1===n.epoch&&(n.epoch=r),m.time=r,m.deltaTime=n.dt,m.elapsedFrameTime=t.now()-r,m.spendInTask=r-n.epoch,n.phases[i].call(n,m))}p()}function d(){return t.debug.requestNextFrame?t.debug.requestNextFrame(c):c()}function p(){for(var e=0;e<w.length;){var t=w[e];if(e++,t.removed){w.splice(e-1,1);for(var r=0;r<k.length;r++){var a=k[r];if(t.phases[a]){var s=b[a],n=s.indexOf(t);-1!==n&&s.splice(n,1)}}}}}function h(){for(;g.length;){var e=g.shift();e.isActive&&(e.isActive=!1,e.callback())}t.debug.willDispatch=!1}function c(){return s(u)}Object.defineProperty(t,"__esModule",{value:!0}),t.now=a;var f=function(){function e(e){this.phases=e,this.paused=!1,this.pausedAt=0,this.epoch=-1,this.dt=0,this.ticks=-1,this.removed=!1}return e}(),l=function(){function e(e){this.callback=e,this.isActive=!0}return e.prototype.remove=function(){this.isActive=!1},e}(),v=-1,m={time:0,deltaTime:0,elapsedFrameTime:0,spendInTask:0},k=["prepare","preRender","render","postRender","update"],g=[],w=[],b={prepare:[],preRender:[],render:[],postRender:[],update:[]},_=function(){function e(e){this._task=e}return e.prototype.remove=function(){this._task.removed=!0},e.prototype.pause=function(){this._task.paused||(this._task.paused=!0,this._task.pausedAt=t.now())},e.prototype.resume=function(){this._task.paused&&(this._task.paused=!1,-1!==this._task.epoch&&(this._task.epoch+=t.now()-this._task.pausedAt))},e}();t.FrameTaskHandle=_,t.debug={frameTasks:w,rafId:null,requestNextFrame:null,willDispatch:!1,clearFrameTasks:o,dispatch:h,frame:u},t.schedule=n,t.addFrameTask=i,t.requestNextFrame=d});