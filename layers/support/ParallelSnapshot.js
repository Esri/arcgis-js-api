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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/Deferred","../../kernel"],function(e,t,s,i,r,n){var a=e(null,{declaredClass:"esri.layers.support.ParallelSnapshot",layer:null,mode:null,queryTask:null,batchSize:5,_query:null,_fetchDfd:null,_startPage:null,_lastPage:null,_maxPage:null,_requests:null,constructor:function(e){t.mixin(this,e),this._requests={},this._maxPage=Math.ceil(this.mode.maxFeatures/this.layer.maxRecordCount)},destroy:function(){this.cancel()},fetch:function(e){var t=new r;return this.cancel(!0),this._query=e,this._fetchDfd=t,this._sendRequests(),t.promise},cancel:function(e){this._cancelPendingRequests(e),this._reset()},_reset:function(){this._startPage=this._lastPage=null,this._requests={}},_sendRequests:function(e){var s,i,r=this._query,n=this.queryTask,a=this._requests,u=this.layer.maxRecordCount;if(e=null==e?1:e,s=e+this.batchSize-1,s>this._maxPage&&(s=this._maxPage),!(e>s))for(this._startPage=e,this._lastPage=s,i=e;s>=i;i++)r.start=(i-1)*u,r.num=u,a[i]=n.execute(r),a[i].then(t.hitch(this,this._handleSuccess,i)).otherwise(t.hitch(this,this._handleError,i))},_evalNextBatch:function(e){e===this._lastPage&&this._sendRequests(this._lastPage+1)},_handleSuccess:function(e,t){t.exceededTransferLimit||this._cancelLaterRequests(e,!0);var s=this.mode._checkMaxLimit(t.features);if(this._fetchDfd.progress({features:s.features,isError:!1}),s.maxLimitReached){var i=s.featuresDiscarded||this._hasRejectedRequests();if(!i){var r=this._getResult(this._getLastSuccessfulRequest());i=!!r.exceededTransferLimit}this._resolveFetch(i)}else t.exceededTransferLimit&&this._evalNextBatch(e),this._evalResolution()},_handleError:function(e,t){var s=this._requests;s&&s[e]&&(1===e?this._rejectFetch(t):(this._evalNextBatch(e),this._fetchDfd.progress({error:t,isError:!0}),this._evalResolution()))},_evalResolution:function(){this._hasPendingRequests()||this._resolveFetch(this._hasRejectedRequests())},_resolveFetch:function(e){this.cancel(!0),this._fetchDfd.resolve({hasPartialFeatures:e})},_rejectFetch:function(e){this.cancel(!0),this._fetchDfd.reject(e)},_getResult:function(e){return e&&e.dfd.results[0]},_hasPendingRequests:function(){return!!this._getPendingRequests().length},_getPendingRequests:function(){var e,t=this._requests,s=[];for(e in t){var i=t[e];i.isFulfilled()||s.push({pageId:Number(e),dfd:i})}return s},_getLastSuccessfulRequest:function(){var e,t=this._getResolvedRequests(),i=-(1/0);return t=s.filter(t,function(e){var t=this._getResult(e);return!!t.features.length||1===e.pageId},this),s.forEach(t,function(t){t.pageId>i&&(i=t.pageId,e=t)}),e},_getResolvedRequests:function(){var e,t=this._requests,s=[];for(e in t){var i=t[e];i.isResolved()&&s.push({pageId:Number(e),dfd:i})}return s},_hasRejectedRequests:function(){var e=this._getRejectedRequests(),t=this._getLastSuccessfulRequest(),i=this._getResult(t);return i&&!i.exceededTransferLimit&&(e=s.filter(e,function(e){var s=e.pageId<=t.pageId;return s})),!!e.length},_getRejectedRequests:function(){var e,t=this._requests,s=[];for(e in t){var i=t[e];i.isRejected()&&s.push({pageId:Number(e),dfd:i})}return s},_cancelPendingRequests:function(e){this._cancelRequests(this._getPendingRequests(),e)},_cancelLaterRequests:function(e,t){var i=s.filter(this._getPendingRequests(),function(t){return t.pageId>e});this._cancelRequests(i,t)},_cancelRequests:function(e,t){var i=this.mode,r=this._requests;s.forEach(e,function(e){t&&delete r[e.pageId],i._cancelPendingRequest(e.dfd)})}});return i("extend-esri")&&t.setObject("layers.support.ParallelSnapshot",a,n),a});