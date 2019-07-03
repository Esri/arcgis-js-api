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

define(["require","exports","../../../request","../../../core/arrayUtils","../../../core/Error","../../../core/lang","../../../core/maybe","../../../core/now","../../../core/promiseUtils","./AsyncQuotaRoundRobinQueue","../webgl-engine/lib/Util"],function(e,t,r,o,s,a,n,u,i,l,c){Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){var r=this;this.tasks=new Map,this.doneQueue=[],this.loadQueue=new l.AsyncQuotaRoundRobinQueue(this.startLoading.bind(this),this.doneLoadingCallback,this,e),t&&(this.taskHandle=t.registerTask(1,function(e){return r.update(e)},function(){return r.doneQueue.length>0}))}return e.prototype.destroy=function(){this.taskHandle&&(this.taskHandle.remove(),this.taskHandle=null),this.tasks.forEach(function(e){e.abortController&&e.abortController.abort()}),this.loadQueue.clear(),this.loadQueue=null,this.doneQueue=null,this.tasks=null},e.prototype.request=function(e,t,r,o){var s=this,a=i.createResolver(),u=n.isSome(o)&&o.uid||e,l=this.createOrUpdateTask(e,t,r,u,a);return i.onAbort(o,function(){return s.cancelRequest(l,a)}),a.promise},e.prototype.createTask=function(e,t,r,o,s){var a={url:e,docType:t,clientType:r,key:o,result:null,status:1,resourceRequest:null,abortController:null,resolvers:[],_cancelledInQueue:!1,startTime:0,duration:0,size:0};return this.updateTask(a,s),this.tasks.set(o,a),this.loadQueue.push(a),a},e.prototype.cancelRequest=function(e,t){o.removeUnordered(e.resolvers,t),t.reject(i.createAbortError()),0===e.resolvers.length&&(2===e.status&&(e.status=4,this.loadQueue.workerCancelled(e),e.abortController.abort(),e.resourceRequest=null,e.abortController=null),e.status=4,this.tasks.delete(e.key))},Object.defineProperty(e.prototype,"hasPendingDownloads",{get:function(){return this.tasks.size>0},enumerable:!0,configurable:!0}),e.prototype.taskKey=function(e,t,r){return e+":"+t+":"+r},e.prototype.updateTask=function(e,t){e.resolvers.push(t)},e.prototype.createOrUpdateTask=function(e,t,r,o,s){var a=this.taskKey(o,t,r),n=this.tasks.get(a);return n?(this.updateTask(n,s),n):this.createTask(e,t,r,a,s)},e.prototype.doneLoadingCallback=function(e,t){c.assert(2===e.status),e.status=3,this.taskHandle?this.doneQueue.push({task:e,err:t}):this.doneLoading(e,t)},e.prototype.update=function(e){for(;!e.done&&this.doneQueue.length>0;){var t=this.doneQueue.shift();3!==t.task.status&&(t.err=t.err||i.createAbortError()),this.doneLoading(t.task,t.err),e.madeProgress()}},e.prototype.doneLoading=function(e,t){for(var r=e.result instanceof HTMLImageElement?0:e.resolvers.length,o=0,n=e.resolvers;o<n.length;o++){var u=n[o];if(t)i.isAbortError(t)?u.reject(t):u.reject(new s("stream-data-loader:request-error","Failed to request resource at '"+e.url+"'. "+t,{url:e.url,error:t}));else{--r;var l=r<=0?e.result:a.clone(e.result);u.resolve(l)}}this.tasks.delete(e.key)},e.prototype.startLoading=function(e,t){if(4===e.status)return!1;e.status=2;var o,s;switch(e.docType){case"binary":s="array-buffer",o=0;break;case"image":s="image";break;default:s="json"}return e.startTime=u(),e.abortController=i.createAbortController(),e.resourceRequest=r(e.url,{responseType:s,timeout:o,signal:e.abortController.signal}),e.resourceRequest.then(function(r){e.duration=u()-e.startTime,e.size="binary"===e.docType?r.data.byteLength:0,e.result=r.data,e.abortController=null,t(e)},function(r){2===e.status&&t(e,r)}),!0},Object.defineProperty(e.prototype,"test",{get:function(){return{loadQueue:this.loadQueue}},enumerable:!0,configurable:!0}),e}();t.StreamDataLoader=d,t.default=d});