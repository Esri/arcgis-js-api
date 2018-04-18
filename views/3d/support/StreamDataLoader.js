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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../request","./AsyncQuotaRoundRobinQueue","./PromiseLightweight","../webgl-engine/lib/Performance","../webgl-engine/lib/Util"],function(e,t,n,s,a,i,o){function r(e,t){if(e.status===u.CANCELLED)return!1;e.status=u.DOWNLOADING;var s,a;switch(e.docType){case"binary":a="array-buffer",s=0;break;case"image":a="image";break;default:a="json"}return e.startTime=i.now(),e.downloadObj=n(e.url,{responseType:a,timeout:s,allowImageDataAccess:"image"===e.docType}),e.downloadObj.then(function(n){e.duration=i.now()-e.startTime,e.size="binary"===e.docType?n.data.byteLength:0,e.result=n.data,t(e)},function(n){e.downloadObj.isCanceled()||t(e,n)}),!0}var u;return function(e){e[e.QUEUED=1]="QUEUED",e[e.DOWNLOADING=2]="DOWNLOADING",e[e.CANCELLED=4]="CANCELLED"}(u||(u={})),function(){function e(e){this.tasks=new Map,this.loadQueue=new s(r,this._doneLoadingCallback,this,e)}return e.prototype.destroy=function(){var e=this;this.tasks.forEach(function(t,n){n.isRejected()||n.reject(t.url,null),e._cancelTask(n)}),this.loadQueue.clear(),this.loadQueue=null,this.tasks=null},e.prototype.request=function(e,t,n){var s=this,i=new a.Promise(function(){s.cancel(i)}),o={url:e,docType:t,clientType:n,result:null,status:u.QUEUED,clientPromise:i,downloadObj:null,_cancelledInQueue:!1,startTime:0,duration:0,size:0};return this.tasks.set(i,o),this.loadQueue.push(o),i},e.prototype.cancel=function(e){this._cancelTask(e)},e.prototype.hasPendingDownloads=function(){return this.tasks.size>0},e.prototype._cancelTask=function(e){var t=this.tasks.get(e);t&&(t.status===u.DOWNLOADING&&(this.loadQueue.workerCancelled(t),t.status=u.CANCELLED,t.downloadObj.cancel(),t.downloadObj=null),t.status=u.CANCELLED,t.clientPromise=void 0,this.tasks.delete(e))},e.prototype._doneLoadingCallback=function(e,t){o.assert(e.status===u.DOWNLOADING),this.tasks.delete(e.clientPromise),t?e.clientPromise.isRejected()||e.clientPromise.reject(e.url,t):e.clientPromise.done(e.url,e.result)},e}()});