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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/Deferred","../../kernel"],function(e,t,s,n,i,a){var r=e(null,{declaredClass:"esri.layers.support.ParallelSnapshot",layer:null,mode:null,queryTask:null,batchSize:5,_query:null,_fetchDfd:null,_startPage:null,_lastPage:null,_maxPage:null,_requests:null,constructor:function(e){t.mixin(this,e),this._requests={},this._maxPage=Math.ceil(this.mode.maxFeatures/this.layer.maxRecordCount)},destroy:function(){this.cancel()},fetch:function(e){var t=new i;return this.cancel(!0),this._query=e,this._fetchDfd=t,this._sendRequests(),t.promise},cancel:function(e){this._cancelPendingRequests(e),this._reset()},_reset:function(){this._startPage=this._lastPage=null,this._requests={}},_sendRequests:function(e){var s,n,i=this._query,a=this.queryTask,r=this._requests,u=this.layer.maxRecordCount;if(e=null==e?1:e,s=e+this.batchSize-1,s>this._maxPage&&(s=this._maxPage),!(e>s))for(this._startPage=e,this._lastPage=s,n=e;s>=n;n++)i.start=(n-1)*u,i.num=u,r[n]=a.execute(i),r[n].then(t.hitch(this,this._handleSuccess,n)).otherwise(t.hitch(this,this._handleError,n))},_handleSuccess:function(e,t){t.exceededTransferLimit?e===this._lastPage&&this._sendRequests(this._lastPage+1):this._cancelLaterRequests(e,!0);var s=this.mode._checkMaxLimit(t.features);if(this._fetchDfd.progress(s.features),s.maxLimitReached){var n=s.featuresDiscarded;if(!n){var i=this._getLastSuccessfulRequest(),a=i&&i.dfd,r=a&&a.results,u=r&&r[0];n=u?!!u.exceededTransferLimit:!1}this._resolveFetch(n)}else this._hasPendingRequests()||this._resolveFetch(!1)},_handleError:function(e,t){var s=this._requests;s&&s[e]&&this._rejectFetch(t)},_resolveFetch:function(e){this.cancel(!0),this._fetchDfd.resolve({hasPartialFeatures:e})},_rejectFetch:function(e){this.cancel(!0),this._fetchDfd.reject(e)},_hasPendingRequests:function(){return!!this._getPendingRequests().length},_getPendingRequests:function(){var e,t=this._requests,s=[];for(e in t){var n=t[e];n.isFulfilled()||s.push({pageId:Number(e),dfd:n})}return s},_getLastSuccessfulRequest:function(){var e,t=this._getResolvedRequests(),n=-(1/0);return s.forEach(t,function(t){t.pageId>n&&(n=t.pageId,e=t)}),e},_getResolvedRequests:function(){var e,t=this._requests,s=[];for(e in t){var n=t[e];n.isResolved()&&s.push({pageId:Number(e),dfd:n})}return s},_cancelPendingRequests:function(e){this._cancelRequests(this._getPendingRequests(),e)},_cancelLaterRequests:function(e,t){var n=s.filter(this._getPendingRequests(),function(t){return t.pageId>e});this._cancelRequests(n,t)},_cancelRequests:function(e,t){var n=this.mode,i=this._requests;s.forEach(e,function(e){t&&delete i[e.pageId],n._cancelPendingRequest(e.dfd)})}});return n("extend-esri")&&t.setObject("layers.support.ParallelSnapshot",r,a),r});