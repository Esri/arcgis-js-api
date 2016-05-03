// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["./ArrayPool","./ObjectPool","./nextTick","./requestAnimationFrame","./now"],function(e,s,i,t,a){var r=["prepare","preRender","render","postRender","update"],n=new s(function(){this.isActive=!0,this.callback=null},function(){this.isActive=!1,this.callback=null}),h=function(){},u=function(){this.item.isActive=!1,o.release(this)},c={time:0,deltaTime:0,spendInFrame:0,spendInTask:0},o=new s(function(){this.remove=u,this.item=null},function(){this.remove=h,this.item=null}),m=function(e){var s=o.acquire();return s.item=e,s},d=function(e){e.isActive&&(e.isActive=!1,e.callback()),!e.isActive},f=function(){this._boundDispatch=this._dispatch.bind(this),this._deferred=e.acquire(),this._isProcessing=!1,this._queue=e.acquire(),this._task=null,this.deferWhileProcessing=!1,this._frameTasks=e.acquire(),this._phaseTasks={},this._previousFrameTime=-1;for(var s=0;s<r.length;s++)this._phaseTasks[r[s]]=e.acquire();this._boundAnimationFrame=this._animationFrame.bind(this),this.executing=!1,this._animationFrameRequested=!1};f.prototype={schedule:function(e){if(this._isProcessing&&this.deferWhileProcessing)return this._defer(e);var s=n.acquire();return s.callback=e,this._schedule(s),m(s)},_defer:function(s){var i=n.acquire();return i.callback=s,this._deferred||(this._deferred=e.acquire()),this._deferred.push(i),m(i)},_dispatch:function(){var s=this._queue;for(this._isProcessing=!0,this._task.remove(),this._task=null;s.length;)d(s.shift());this._isProcessing=!1;var i=this._deferred;if(i&&i.length){for(this._deferred=null;i.length;)this._schedule(i.shift());e.release(i)}},_schedule:function(e){this._task||(this._task=i(this._boundDispatch)),this._queue.push(e)},addFrameTask:function(e){var s={phases:e,paused:!1,pausedAt:0,epoch:-1,dt:0,ticks:-1,removed:!1};this._frameTasks.push(s);for(var i=0;i<r.length;i++){var t=r[i],n=e[t];n&&this._phaseTasks[t].push(s)}return this._animationFrameRequested||(this._previousFrameTime=-1,this._requestAnimationFrame()),{isPaused:function(){return s.paused},remove:function(){s.removed=!0},pause:function(){s.paused=!0,s.pausedAt=a()},resume:function(){s.paused=!1,-1!==s.epoch&&(s.epoch+=a()-s.pausedAt)}}},clearFrameTasks:function(){for(var e=0;e<this._frameTasks.length;e++)this._frameTasks[e].removed=!0},_purge:function(){for(var e=0;e<this._frameTasks.length;){var s=this._frameTasks[e];if(e++,s.removed){this._frameTasks.splice(e-1,1);for(var i=0;i<r.length;i++){var t=r[i],a=s.phases[t];if(a){var n=this._phaseTasks[t],h=n.indexOf(s);-1!==h&&n.splice(h,1)}}}}},_animationFrame:function(){this._animationFrameRequested=!1,this.executing=!0,this._frameTasks.length>0&&this._requestAnimationFrame();var e=a();this._previousFrameTime<0&&(this._previousFrameTime=e);var s=e-this._previousFrameTime;this._previousFrameTime=e;for(var i=0;i<this._frameTasks.length;i++){var t=this._frameTasks[i];-1!==t.epoch&&(t.dt=s)}for(i=0;i<r.length;i++)for(var n=r[i],h=this._phaseTasks[n],u=0;u<h.length;u++)t=h[u],t.paused||t.removed||(0===i&&t.ticks++,-1===t.epoch&&(t.epoch=e),c.time=e,c.deltaTime=t.dt,c.spendInFrame=a()-e,c.spendInTask=e-t.epoch,t.phases[n].call(t,c));this._purge(),this.executing=!1},_requestAnimationFrame:function(){t(this._boundAnimationFrame),this._animationFrameRequested=!0}};var _=new f;return f.schedule=function(e){return _.schedule(e)},f.addFrameTask=function(e){return _.addFrameTask(e)},f.clearFrameTasks=function(){return _.clearFrameTasks()},Object.defineProperty(f,"executing",{get:function(){return _.executing}}),f.instance=_,f});