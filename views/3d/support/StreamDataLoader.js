// COPYRIGHT © 2017 Esri
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

define(["../../../core/declare","../../../request","../../../core/urlUtils","./PromiseLightweight","./AsyncQuotaRoundRobinQueue","../webgl-engine/lib/Util"],function(e,t,a,n,o,i){var r=i.assert,s=!1,l={QUEUED:1,DOWNLOADING:2,CANCELLED:4},c=e(null,{constructor:function(e){this.alreadyLoading={},this.loadQueue=new o(m,this._doneLoadingCallback,this,e),this._urlInfo={hasSameOrigin:{},canUseXhr:{}}},destroy:function(){for(var e in this.alreadyLoading){for(var t=this.alreadyLoading[e],a=0;a<t.clientPromises.length;a++){var n=t.clientPromises[a];n.isRejected()||n.reject(t.url,null,t.docType,t.clientMetadata[a])}this._cancelTask(t)}this.loadQueue.clear(),this.loadQueue=null,this.alreadyLoading=null},request:function(e,t,a,o){s&&console.log("request "+e),o=o||{};var i=new n.Promise(function(){this.cancel(i)}.bind(this));i.requestURL=e;var r=this.alreadyLoading[e];return r?(r.clientPromises.push(i),r.clientMetadata.push(o.metadata)):(r={url:e,docType:t,clientType:a,status:l.QUEUED,clientMetadata:[o.metadata],clientPromises:[i],downloadObj:null,_cancelledInQueue:!1},this.alreadyLoading[e]=r,this.loadQueue.push(r)),i},isRequested:function(e){return void 0!==this.alreadyLoading[e]},cancel:function(e){var t=e.requestURL;s&&console.log("cancel "+t);var a=this.alreadyLoading[t];a&&this._removeRequestPromiseFromTask(a,e)},hasPendingDownloads:function(){return!i.objectEmpty(this.alreadyLoading)},_removeRequestPromiseFromTask:function(e,t){var a=e.clientPromises.length;if(a>1){var n=e.clientPromises.indexOf(t);r(n>-1,"request to be cancelled is already cancelled or invalid"),e.clientPromises[n]=e.clientPromises[a-1],e.clientPromises.pop(),e.clientMetadata[n]=e.clientMetadata[a-1],e.clientMetadata.pop()}else r(e.clientPromises[0]===t,"request to be cancelled is already cancelled or invalid"),this._cancelTask(e)},_cancelTask:function(e){if(e.status===l.DOWNLOADING){if(this.loadQueue.workerCancelled(e),u(e)){var t=e.downloadObj;t.removeAttribute("onload"),t.removeAttribute("onerror"),t.removeAttribute("src")}else e.status=l.CANCELLED,e.downloadObj.cancel();e.downloadObj=null}e.status=l.CANCELLED,e.clientPromises=void 0,e.clientMetadata=void 0,delete this.alreadyLoading[e.url]},_doneLoadingCallback:function(e,t){var a;if(r(e.status===l.DOWNLOADING),delete this.alreadyLoading[e.url],t)for(a=0;a<e.clientPromises.length;a++)e.clientPromises[a].isRejected()||e.clientPromises[a].reject(e.url,t,e.docType,e.clientMetadata[a]);else for(s&&console.log("done "+e.url),a=0;a<e.clientPromises.length;a++)e.clientPromises[a].done(e.url,e.result,e.docType,e.clientMetadata[a])}}),d=function(e,t,a){e.onload=function(){t.status!==l.CANCELLED&&(t.result=e,e.removeAttribute("onload"),e.removeAttribute("onerror"),a(t))},e.onerror=function(){t.status!==l.CANCELLED&&(e.removeAttribute("onload"),e.removeAttribute("onerror"),a(t,{status:404}))}},u=function(e){return"image"===e.docType&&a.isDataProtocol(e.url)},m=function(e,a){if(e.status===l.CANCELLED)return!1;if(e.status=l.DOWNLOADING,u(e)){var n=new Image;return d(n,e,a),n.src=e.url,e.downloadObj=n,!0}var o,r;switch(e.docType){case"binary":r="array-buffer",o=0;break;case"image":r="image";break;default:r="json"}return e.downloadObj=t(e.url,{responseType:r,timeout:o,allowImageDataAccess:"image"===e.docType}),e.downloadObj.then(function(t){e.duration=i.performance.now()-e.startTime,e.size=0,e.result=t.data,a(e)},function(t){e.downloadObj.isCanceled()||a(e,t)}),!0};return c.TaskStatus=l,c});