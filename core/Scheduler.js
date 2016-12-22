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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["./ArrayPool","./ObjectPool","./nextTick","./requestAnimationFrame","./now"],function(e,i,s,t,a){var n=["prepare","preRender","render","postRender","update"],r=new i(function(){this.isActive=!0,this.callback=null},function(){this.isActive=!1,this.callback=null}),h=function(){},u=function(){this.item.isActive=!1,o.release(this)},c={time:0,deltaTime:0,spendInFrame:0,spendInTask:0},o=new i(function(){this.remove=u,this.item=null},function(){this.remove=h,this.item=null}),m=function(e){var i=o.acquire();return i.item=e,i},p=function(e){e.isActive&&(e.isActive=!1,e.callback()),!e.isActive},l=function(){this._boundDispatch=this._dispatch.bind(this),this.willDispatch=!1,this._queue=e.acquire(),this._frameTasks=e.acquire(),this._phaseTasks={},this._previousFrameTime=-1;for(var i=0;i<n.length;i++)this._phaseTasks[n[i]]=e.acquire();this._boundAnimationFrame=this._animationFrame.bind(this),this.executing=!1,this._animationFrameRequestId=null};l.prototype={schedule:function(e){var i=r.acquire();return i.callback=e,this._schedule(i),m(i)},_dispatch:function(){for(var e=this._queue;e.length;)p(e.shift());this.willDispatch=!1},_schedule:function(e){this._queue.push(e),this.willDispatch||(this.willDispatch=!0,s(this._boundDispatch))},addFrameTask:function(e){var i={phases:e,paused:!1,pausedAt:0,epoch:-1,dt:0,ticks:-1,removed:!1};this._frameTasks.push(i);for(var s=0;s<n.length;s++){var t=n[s],r=e[t];r&&this._phaseTasks[t].push(i)}return this._animationFrameRequestId||(this._previousFrameTime=-1,this._requestAnimationFrame()),{isPaused:function(){return i.paused},remove:function(){i.removed=!0},pause:function(){i.paused=!0,i.pausedAt=a()},resume:function(){i.paused=!1,-1!==i.epoch&&(i.epoch+=a()-i.pausedAt)}}},clearFrameTasks:function(){for(var e=0;e<this._frameTasks.length;e++)this._frameTasks[e].removed=!0},_purge:function(){for(var e=0;e<this._frameTasks.length;){var i=this._frameTasks[e];if(e++,i.removed){this._frameTasks.splice(e-1,1);for(var s=0;s<n.length;s++){var t=n[s],a=i.phases[t];if(a){var r=this._phaseTasks[t],h=r.indexOf(i);-1!==h&&r.splice(h,1)}}}}},_animationFrame:function(e){this._animationFrameRequestId=null,this.executing=!0,this._frameTasks.length>0&&this._requestAnimationFrame();var i=a();this._previousFrameTime<0&&(this._previousFrameTime=i);var s=i-this._previousFrameTime;this._previousFrameTime=i;for(var t=0;t<this._frameTasks.length;t++){var r=this._frameTasks[t];-1!==r.epoch&&(r.dt=s)}for(t=0;t<n.length;t++)for(var h=n[t],u=this._phaseTasks[h],o=0;o<u.length;o++)r=u[o],r.paused||r.removed||(0===t&&r.ticks++,-1===r.epoch&&(r.epoch=i),c.time=i,c.deltaTime=r.dt,c.spendInFrame=a()-i,c.spendInTask=i-r.epoch,r.phases[h].call(r,c));this._purge(),this.executing=!1},_requestAnimationFrame:function(){this._animationFrameRequestId=t(this._boundAnimationFrame)}};var d=new l;return l.schedule=function(e){return d.schedule(e)},l.addFrameTask=function(e){return d.addFrameTask(e)},l.clearFrameTasks=function(){return d.clearFrameTasks()},Object.defineProperty(l,"executing",{get:function(){return d.executing}}),l.instance=d,l});