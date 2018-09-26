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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../request","../../../core/arrayUtils","../../../core/lang","./AsyncQuotaRoundRobinQueue","./PromiseLightweight","../webgl-engine/lib/Performance","../webgl-engine/lib/Util"],function(e,t,s,n,a,o,i,r,l){var u;return function(e){e[e.QUEUED=1]="QUEUED",e[e.DOWNLOADING=2]="DOWNLOADING",e[e.CANCELLED=4]="CANCELLED"}(u||(u={})),function(){function e(e){this.tasks=new Map,this.clientPromiseToTask=new Map,this.loadQueue=new o(this.startLoading.bind(this),this.doneLoadingCallback,this,e)}return e.prototype.destroy=function(){var e=this;this.tasks.forEach(function(t){for(var s=0,n=t.clientPromises;s<n.length;s++){var a=n[s];a.isRejected()||a.reject(t.url,null),e.cancelTask(a)}}),this.loadQueue.clear(),this.loadQueue=null,this.tasks=null,this.clientPromiseToTask=null},e.prototype.request=function(e,t,s){var n=this,a=new i.Promise(function(){n.cancel(a)});return this.createOrUpdateTask(e,t,s,a),a},e.prototype.createTask=function(e,t,s,n,a){var o={url:e,docType:t,clientType:s,key:n,result:null,status:u.QUEUED,clientPromises:[],downloadObj:null,_cancelledInQueue:!1,startTime:0,duration:0,size:0};this.updateTask(o,a),this.tasks.set(n,o),this.loadQueue.push(o)},e.prototype.cancel=function(e){this.cancelTask(e)},e.prototype.hasPendingDownloads=function(){return this.tasks.size>0},Object.defineProperty(e.prototype,"tests",{get:function(){return{loadQueue:this.loadQueue}},enumerable:!0,configurable:!0}),e.prototype.taskKey=function(e,t,s){return e+":"+t+":"+s},e.prototype.updateTask=function(e,t){this.clientPromiseToTask.set(t,e),e.clientPromises.push(t)},e.prototype.createOrUpdateTask=function(e,t,s,n){var a=this.taskKey(e,t,s),o=this.tasks.get(a);o?this.updateTask(o,n):this.createTask(e,t,s,a,n)},e.prototype.cancelTask=function(e){var t=this.clientPromiseToTask.get(e);t&&(n.removeUnordered(t.clientPromises,e),this.clientPromiseToTask.delete(e),0===t.clientPromises.length&&(t.status===u.DOWNLOADING&&(this.loadQueue.workerCancelled(t),t.status=u.CANCELLED,t.downloadObj.cancel(),t.downloadObj=null),t.status=u.CANCELLED,this.tasks.delete(t.key)))},e.prototype.doneLoadingCallback=function(e,t){l.assert(e.status===u.DOWNLOADING);for(var s=e.result,n=0,o=e.clientPromises;n<o.length;n++){var i=o[n];this.clientPromiseToTask.delete(i),t?i.isRejected()||i.reject(e.url,t):(s||(s=a.clone(e.result)),i.done(e.url,s),s instanceof HTMLImageElement||(s=null))}this.tasks.delete(e.key)},e.prototype.startLoading=function(e,t){if(e.status===u.CANCELLED)return!1;e.status=u.DOWNLOADING;var n,a;switch(e.docType){case"binary":a="array-buffer",n=0;break;case"image":a="image";break;default:a="json"}return e.startTime=r.now(),e.downloadObj=s(e.url,{responseType:a,timeout:n}),e.downloadObj.then(function(s){e.duration=r.now()-e.startTime,e.size="binary"===e.docType?s.data.byteLength:0,e.result=s.data,t(e)},function(s){e.downloadObj.isCanceled()||t(e,s)}),!0},e}()});