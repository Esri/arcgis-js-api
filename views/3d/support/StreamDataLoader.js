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

define(["require","exports","dojo/errors/CancelError","../../../request","../../../core/arrayUtils","../../../core/lang","../../../core/now","./AsyncQuotaRoundRobinQueue","./PromiseLightweight","../webgl-engine/lib/Util"],function(e,t,s,n,a,o,r,i,u,l){Object.defineProperty(t,"__esModule",{value:!0}),t.ClientPromise=u.default;var d=function(){function e(e,t){var s=this;this.tasks=new Map,this.clientPromiseToTask=new Map,this.doneQueue=[],this.loadQueue=new i(this.startLoading.bind(this),this.doneLoadingCallback,this,e),t&&(this.taskHandle=t.registerTask(1,function(e){return s.update(e)},function(){return s.doneQueue.length>0}))}return e.prototype.destroy=function(){var e=this;this.taskHandle&&(this.taskHandle.remove(),this.taskHandle=null),this.tasks.forEach(function(t){for(var s=0,n=t.clientPromises;s<n.length;s++){var a=n[s];e.cancel(a)}}),this.loadQueue.clear(),this.loadQueue=null,this.doneQueue=null,this.tasks=null,this.clientPromiseToTask=null},e.prototype.request=function(e,s,n,a){var o=this;void 0===a&&(a=e);var r=new t.ClientPromise(function(){o.cancel(r)});return this.createOrUpdateTask(e,s,n,a,r),r},e.prototype.createTask=function(e,t,s,n,a){var o={url:e,docType:t,clientType:s,key:n,result:null,status:1,clientPromises:[],downloadObj:null,_cancelledInQueue:!1,startTime:0,duration:0,size:0};this.updateTask(o,a),this.tasks.set(n,o),this.loadQueue.push(o)},e.prototype.cancel=function(e){var t=this.clientPromiseToTask.get(e);t&&(e.reject(new s),a.removeUnordered(t.clientPromises,e),this.clientPromiseToTask.delete(e),0===t.clientPromises.length&&(2===t.status&&(this.loadQueue.workerCancelled(t),t.status=4,t.downloadObj.cancel(),t.downloadObj=null),t.status=4,this.tasks.delete(t.key)))},e.prototype.hasPendingDownloads=function(){return this.tasks.size>0},e.prototype.taskKey=function(e,t,s){return e+":"+t+":"+s},e.prototype.updateTask=function(e,t){this.clientPromiseToTask.set(t,e),e.clientPromises.push(t)},e.prototype.createOrUpdateTask=function(e,t,s,n,a){var o=this.taskKey(n,t,s),r=this.tasks.get(o);r?this.updateTask(r,a):this.createTask(e,t,s,o,a)},e.prototype.doneLoadingCallback=function(e,t){l.assert(2===e.status),this.taskHandle?(e.status=3,this.doneQueue.push({task:e,err:t})):this.doneLoading(e,t)},e.prototype.update=function(e){for(;!e.done&&this.doneQueue.length>0;){var t=this.doneQueue.shift();3!==t.task.status&&(t.err=t.err||new s),this.doneLoading(t.task,t.err),e.madeProgress()}},e.prototype.doneLoading=function(e,t){for(var s=e.result instanceof HTMLImageElement?0:e.clientPromises.length,n=0,a=e.clientPromises;n<a.length;n++){var r=a[n];if(this.clientPromiseToTask.delete(r),t)r.isRejected()||r.reject({url:e.url,error:t});else{--s;var i=s<=0?e.result:o.clone(e.result);r.resolve({url:e.url,data:i})}}this.tasks.delete(e.key)},e.prototype.startLoading=function(e,t){if(4===e.status)return!1;e.status=2;var s,a;switch(e.docType){case"binary":a="array-buffer",s=0;break;case"image":a="image";break;default:a="json"}return e.startTime=r(),e.downloadObj=n(e.url,{responseType:a,timeout:s}),e.downloadObj.then(function(s){e.duration=r()-e.startTime,e.size="binary"===e.docType?s.data.byteLength:0,e.result=s.data,t(e)},function(s){e.downloadObj.isCanceled()||t(e,s)}),!0},Object.defineProperty(e.prototype,"test",{get:function(){return{loadQueue:this.loadQueue}},enumerable:!0,configurable:!0}),e}();t.StreamDataLoader=d,t.default=d});