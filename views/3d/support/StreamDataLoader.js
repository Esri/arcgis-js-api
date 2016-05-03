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

define(["../../../core/declare","../../../request","../../../config","../../../core/urlUtils","./PromiseLightweight","./AsyncQuotaRoundRobinQueue","../webgl-engine/lib/Util"],function(e,t,a,n,o,i,r){var s=r.assert,l=!1,c={QUEUED:1,DOWNLOADING:2,CANCELLED:4},d=e(null,{constructor:function(e){this.alreadyLoading={},this.loadQueue=new i(u,this._doneLoadingCallback,this,e)},destroy:function(){for(var e in this.alreadyLoading){for(var t=this.alreadyLoading[e],a=0;a<t.clientPromises.length;a++){var n=t.clientPromises[a];n.isRejected()||n.reject(t.url,null,t.docType,t.clientMetadata[a])}this._cancelTask(t)}this.loadQueue.clear(),this.loadQueue=null,this.alreadyLoading=null},request:function(e,t,a,n,i){l&&console.log("request "+e),n=n||{};var r=new o.Promise;r.requestURL=e;var s=this.alreadyLoading[e];return s?(s.clientPromises.push(r),s.clientMetadata.push(n.metadata)):(s={url:e,docType:t,clientType:a,status:c.QUEUED,clientMetadata:[n.metadata],clientPromises:[r],downloadObj:null,_cancelledInQueue:!1},i&&(s.urlWithToken=i(e)),this.alreadyLoading[e]=s,n.notQueueable?u(s,this._doneLoadingCallback.bind(this)):this.loadQueue.push(s)),r},isRequested:function(e){return void 0!==this.alreadyLoading[e]},cancel:function(e){var t=e.requestURL;l&&console.log("cancel "+t);var a=this.alreadyLoading[t];a&&this._removeRequestPromiseFromTask(a,e)},getRequestedURLs:function(e){var t={};for(var a in this.alreadyLoading)this.alreadyLoading[a].clientType===e&&(t[a]=!0);return t},cancelBulk:function(e,t){var a,n=r.getFirstObjectValue(e);if(n instanceof o.Promise)for(a in e)this.cancel(e[a]);else{var i=[];for(a in e){var s=this.alreadyLoading[a];s&&(this._cancelTask(s),i.push(s))}i.length>0&&this.loadQueue.removeTasks(i,t)}},hasPendingDownloads:function(){return!r.objectEmpty(this.alreadyLoading)},_removeRequestPromiseFromTask:function(e,t){var a=e.clientPromises.length;if(a>1){var n=e.clientPromises.indexOf(t);s(n>-1,"request to be cancelled is already cancelled or invalid"),e.clientPromises[n]=e.clientPromises[a-1],e.clientPromises.pop(),e.clientMetadata[n]=e.clientMetadata[a-1],e.clientMetadata.pop()}else s(e.clientPromises[0]===t,"request to be cancelled is already cancelled or invalid"),this._cancelTask(e)},_cancelTask:function(e){if(e.status===c.DOWNLOADING){if(this.loadQueue.workerCancelled(e),"image"===e.docType){var t=e.downloadObj;t.removeAttribute("onload"),t.removeAttribute("onerror"),t.removeAttribute("src")}else e.status=c.CANCELLED,e.downloadObj.cancel();e.downloadObj=null}e.status=c.CANCELLED,e.clientPromise=void 0,e.metadata=void 0,delete this.alreadyLoading[e.url]},_doneLoadingCallback:function(e,t){var a;if(s(e.status===c.DOWNLOADING),delete this.alreadyLoading[e.url],t)for(a=0;a<e.clientPromises.length;a++)e.clientPromises[a].isRejected()||e.clientPromises[a].reject(e.url,t,e.docType,e.clientMetadata[a]);else for(l&&console.log("done "+e.url),a=0;a<e.clientPromises.length;a++)e.clientPromises[a].done(e.url,e.result,e.docType,e.clientMetadata[a])}}),u=function(e,o){if(e.status===c.CANCELLED)return!1;var i=e.urlWithToken||e.url;if(0===i.indexOf("//")&&(i=window.location.protocol+i),"image"===e.docType){var s=new Image;s.onload=function(){e.status!==c.CANCELLED&&(e.result=s,s.removeAttribute("onload"),s.removeAttribute("onerror"),o(e))},s.onerror=function(){e.status!==c.CANCELLED&&(s.removeAttribute("onload"),s.removeAttribute("onerror"),o(e,{status:404}))};var l=n.hasSameOrigin(i,window.location.href);"data:"===i.substring(0,5)?s.src=i:l||n.canUseXhr(i)?(l||(s.crossOrigin="anonymous"),s.src=i):s.src=(e.urlWithToken||!a.request.proxyUrl?"":a.request.proxyUrl+"?")+i,e.downloadObj=s}else{var d=t(i,{responseType:"binary"===e.docType?"array-buffer":"json",failOk:!0});d.then(function(t){e.duration=r.performance.now()-e.startTime,e.size=0,e.result=t.data,o(e)},function(t){e.status!==c.CANCELLED&&o(e,t)}),e.downloadObj=d}return e.status=c.DOWNLOADING,!0};return d.TaskStatus=c,d});