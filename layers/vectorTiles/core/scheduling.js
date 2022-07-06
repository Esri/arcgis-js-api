// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","exports","./nextTick","./now","./requestAnimationFrame"],(function(e,t,r,a,s){Object.defineProperty(t,"__esModule",{value:!0}),t.now=a;var n=function(e){this.phases=e,this.paused=!1,this.pausedAt=0,this.epoch=-1,this.dt=0,this.ticks=-1,this.removed=!1},i=function(){function e(e){this.callback=e,this.isActive=!0}return e.prototype.remove=function(){this.isActive=!1},e}(),u=-1,o=0,d=0,p=Number.POSITIVE_INFINITY,c={time:0,deltaTime:0,elapsedFrameTime:0,frameDuration:0,spendInTask:0},h=["prepare","preRender","render","postRender","update"],f=[],l=[],v={prepare:[],preRender:[],render:[],postRender:[],update:[]},m=function(){function e(e){this._task=e}return e.prototype.remove=function(){this._task.removed=!0},e.prototype.pause=function(){this._task.paused||(this._task.paused=!0,this._task.pausedAt=t.now())},e.prototype.resume=function(){this._task.paused&&(this._task.paused=!1,-1!==this._task.epoch&&(this._task.epoch+=t.now()-this._task.pausedAt))},e}();function k(e){if(void 0===e&&(e=t.now()),t.debug.rafId=null,l.length>0&&(t.debug.rafId=g()),u>0){var r=e-u;if(p=Math.min(r,p),r<o)return}t.debug.executeFrameTasks(e)}function g(){return t.debug.requestNextFrame?t.debug.requestNextFrame(w):w()}function b(){for(var e=0;e<l.length;){var t=l[e];if(e++,t.removed){l.splice(e-1,1);for(var r=0;r<h.length;r++){var a=h[r];if(t.phases[a]){var s=v[a],n=s.indexOf(t);-1!==n&&s.splice(n,1)}}}}}function T(){for(;f.length;){var e=f.shift();e.isActive&&(e.isActive=!1,e.callback())}t.debug.willDispatch=!1}function w(){return s(k)}t.FrameTaskHandle=m,t.debug={frameTasks:l,rafId:null,requestNextFrame:null,willDispatch:!1,clearFrameTasks:function(e){void 0===e&&(e=!1);for(var t=0;t<l.length;t++)l[t].removed=!0;e&&b()},dispatch:T,executeFrameTasks:function(e){void 0===e&&(e=t.now());u<0&&(u=e);var r=e-u;u=e;for(var a=0;a<l.length;a++){-1!==(o=l[a]).epoch&&(o.dt=r)}for(a=0;a<h.length;a++)for(var s=h[a],n=v[s],i=0;i<n.length;i++){var o;(o=n[i]).paused||o.removed||(0===a&&o.ticks++,-1===o.epoch&&(o.epoch=e),c.time=e,c.deltaTime=o.dt,c.elapsedFrameTime=t.now()-e,c.frameDuration=d>0?d:p,c.spendInTask=e-o.epoch,o.phases[s].call(o,c))}b()}},t.schedule=function(e){var a=new i(e);return f.push(a),t.debug.willDispatch||(t.debug.willDispatch=!0,r(T)),a},t.addFrameTask=function(e){var r=new n(e);l.push(r);for(var a=0,s=h;a<s.length;a++){var i=s[a];e[i]&&v[i].push(r)}return t.debug.rafId||(u=-1,t.debug.rafId=g()),new m(r)},t.setFrameRate=function(e){if(e<=0)return o=0,void(d=0);var t=1e3/e,r=1.05*p,a=Math.ceil(t/r);o=(a-1)*r,d=a*p},t.requestNextFrame=g}));