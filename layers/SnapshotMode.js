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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../SpatialReference","../tasks/query","./RenderMode"],function(e,t,r,a,i,s,n){var u=e([n],{declaredClass:"esri.layers._SnapshotMode",constructor:function(e){this.featureLayer=e,this.pagination=e.queryPagination,this._featureMap={},this._hasPartialFeatures=!1,this._drawFeatures=t.hitch(this,this._drawFeatures),this._queryErrorHandler=t.hitch(this,this._queryErrorHandler)},startup:function(){this.pagination=this.pagination&&null!=this.featureLayer.maxRecordCount,this.featureLayer._collection?this._applyTimeFilter():this._fetchAll()},propertyChangeHandler:function(e){this._init&&(e?this.featureLayer._collection?console.log("FeatureLayer: layer created by value (from a feature collection) does not support definition expressions and time definitions. Layer id = "+this.featureLayer.id):this._fetchAll():this._applyTimeFilter())},drawFeature:function(e){var t=this.featureLayer,r=t.objectIdField,a=e.attributes[r];this._addFeatureIIf(a,e),this._incRefCount(a)},resume:function(){this.propertyChangeHandler(0)},refresh:function(){var e=this.featureLayer;e._collection?(e._fireUpdateStart(),e._refresh(!0),e._fireUpdateEnd()):this._fetchAll()},hasAllFeatures:function(){return!this._hasPartialFeatures},_getRequestId:function(e){var t="_"+e.name+e.layerId+e._ulid;return t.replace(/[^a-zA-Z0-9\_]+/g,"_")},_fetchAll:function(){var e=this.featureLayer;e._collection||e.suspended||(e._fireUpdateStart(),this._clearIIf(),this._hasPartialFeatures=!1,this._sendRequest())},_sendRequest:function(e){var t=this.map,r=this.featureLayer,a=r.getDefinitionExpression(),n=new s;n.outFields=r.getOutFields(),n.where=a||"1=1",n.returnGeometry=!0,n.outSpatialReference=new i(t.spatialReference.toJson()),n.timeExtent=r.getTimeDefinition(),n.maxAllowableOffset=r._maxOffset,n.quantizationParameters=r._quantizationParameters,r._ts&&(n._ts=(new Date).getTime()),n.orderByFields=r.supportsAdvancedQueries?r.getOrderByFields():null,n.multipatchOption=r.multipatchOption,this.pagination&&(this._start=n.start=null==e?0:e,n.num=r.maxRecordCount);var u;r._usePatch&&(u=this._getRequestId(r),this._cancelPendingRequest(null,u)),r._task.execute(n,this._drawFeatures,this._queryErrorHandler,u)},_drawFeatures:function(e){this._purgeRequests();var t,r,a,i,s=e.features,n=this.featureLayer,u=n.objectIdField,o=s.length,l=e.exceededTransferLimit&&!n._collection,d=n._selectedFeatures,h=n.mode===n.constructor.MODE_AUTO;for(n._fireUpdateStart(),n._sortFeatures(s),t=0;o>t;t++)a=s[t],i=a.attributes[u],r=this._addFeatureIIf(i,a),this._incRefCount(i),h&&r!==a&&d[i]&&(r.setGeometry(a.geometry),r.setAttributes(a.attributes));this._applyTimeFilter(!0),this.pagination&&l||(this._hasPartialFeatures=!!e.exceededTransferLimit,n._fireUpdateEnd(null,e.exceededTransferLimit?{queryLimitExceeded:!0}:null)),l&&(this.pagination&&this._sendRequest(this._start+n.maxRecordCount),n.onQueryLimitExceeded())},_queryErrorHandler:function(e){this._purgeRequests(),this._hasPartialFeatures=!0;var t=this.featureLayer;t._errorHandler(e),t._fireUpdateEnd(e)}});return r("extend-esri")&&t.setObject("layers._SnapshotMode",u,a),u});