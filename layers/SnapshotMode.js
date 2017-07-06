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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../SpatialReference","../tasks/query","./RenderMode","../srUtils"],function(e,t,r,a,i,s,n,u){var o=e([n],{declaredClass:"esri.layers._SnapshotMode",maxFeatures:5e4,constructor:function(e){this.featureLayer=e,this.pagination=e.queryPagination,this._featureMap={},this._hasPartialFeatures=!1,this._drawFeatures=t.hitch(this,this._drawFeatures),this._queryErrorHandler=t.hitch(this,this._queryErrorHandler)},startup:function(){this.pagination=this.pagination&&null!=this.featureLayer.maxRecordCount,this.featureLayer._collection?this._applyTimeFilter():this._fetchAll()},propertyChangeHandler:function(e){this._init&&(e?this.featureLayer._collection?console.log("FeatureLayer: layer created by value (from a feature collection) does not support definition expressions and time definitions. Layer id = "+this.featureLayer.id):this._fetchAll():this._applyTimeFilter())},drawFeature:function(e){var t=this.featureLayer,r=t.objectIdField,a=e.attributes[r];this._addFeatureIIf(a,e),this._incRefCount(a)},resume:function(){this.propertyChangeHandler(0)},refresh:function(){var e=this.featureLayer;e._collection?(e._fireUpdateStart(),e._refresh(!0),e._fireUpdateEnd()):this._fetchAll()},hasAllFeatures:function(){return!this._hasPartialFeatures},_getRequestId:function(e){var t="_"+e.name+e.layerId+e._ulid;return t.replace(/[^a-zA-Z0-9\_]+/g,"_")},_fetchAll:function(){var e=this.featureLayer;e._collection||e.suspended||!e.isQueryable()||(e._fireUpdateStart(),this._clearIIf(),this._hasPartialFeatures=!1,this._sendRequest())},_sendRequest:function(e){var t=this.map,r=this.featureLayer,a=r.getDefinitionExpression(),i=new s;i.outFields=r.getOutFields(),i.where=a||"1=1",i.returnGeometry=!0,i.outSpatialReference=u.createSpatialReference(t.spatialReference.toJson()),i.timeExtent=r.getTimeDefinition(),i.maxAllowableOffset=r._maxOffset,i.quantizationParameters=r._quantizationParameters,r._ts&&(i._ts=(new Date).getTime()),i.orderByFields=r.supportsAdvancedQueries?r.getOrderByFields():null,i.multipatchOption=r.multipatchOption,this.pagination&&(this._start=i.start=null==e?0:e,i.num=r.maxRecordCount);var n;r._usePatch&&(n=this._getRequestId(r),this._cancelPendingRequest(null,n)),r._task.execute(i,this._drawFeatures,this._queryErrorHandler,n)},_drawFeatures:function(e){this._purgeRequests();var t,r,a,i,s=e.features,n=this.featureLayer,u=n.objectIdField,o=s.length,l=e.exceededTransferLimit&&!n._collection,h=n._selectedFeatures,d=n.mode===n.constructor.MODE_AUTO,c=s?s.length:0,_=n.graphics.length+c,f=_>=this.maxFeatures;if(n._fireUpdateStart(),f){var p=_-this.maxFeatures;p&&s.splice(c-p,p)}for(n._sortFeatures(s),t=0;o>t;t++)a=s[t],i=a.attributes[u],r=this._addFeatureIIf(i,a),this._incRefCount(i),d&&r!==a&&h[i]&&(r.setGeometry(a.geometry),r.setAttributes(a.attributes));this._applyTimeFilter(!0),this.pagination&&l&&!f||(this._hasPartialFeatures=!!e.exceededTransferLimit,n._fireUpdateEnd(null,e.exceededTransferLimit?{queryLimitExceeded:!0}:null)),l&&(this.pagination&&!f&&this._sendRequest(this._start+n.maxRecordCount),n.onQueryLimitExceeded())},_queryErrorHandler:function(e){this._purgeRequests(),this._hasPartialFeatures=!0;var t=this.featureLayer;t._errorHandler(e),t._fireUpdateEnd(e)}});return r("extend-esri")&&t.setObject("layers._SnapshotMode",o,a),o});