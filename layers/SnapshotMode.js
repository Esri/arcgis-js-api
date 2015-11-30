// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../SpatialReference","../tasks/query","./RenderMode"],function(e,t,r,i,a,s,n){var o=e([n],{declaredClass:"esri.layers._SnapshotMode",constructor:function(e){this.featureLayer=e,this.pagination=e.queryPagination,this._featureMap={},this._drawFeatures=t.hitch(this,this._drawFeatures),this._queryErrorHandler=t.hitch(this,this._queryErrorHandler)},startup:function(){this.pagination=this.pagination&&null!=this.featureLayer.maxRecordCount,this.featureLayer._collection?this._applyTimeFilter():this._fetchAll()},propertyChangeHandler:function(e){this._init&&(e?this.featureLayer._collection?console.log("FeatureLayer: layer created by value (from a feature collection) does not support definition expressions and time definitions. Layer id = "+this.featureLayer.id):this._fetchAll():this._applyTimeFilter())},drawFeature:function(e){var t=this.featureLayer,r=t.objectIdField,i=e.attributes[r];this._addFeatureIIf(i,e),this._incRefCount(i)},resume:function(){this.propertyChangeHandler(0)},refresh:function(){var e=this.featureLayer;e._collection?(e._fireUpdateStart(),e._refresh(!0),e._fireUpdateEnd()):this._fetchAll()},_getRequestId:function(e){var t="_"+e.name+e.layerId+e._ulid;return t.replace(/[^a-zA-Z0-9\_]+/g,"_")},_fetchAll:function(){var e=this.featureLayer;e._collection||e.suspended||(e._fireUpdateStart(),this._clearIIf(),this._sendRequest())},_sendRequest:function(e){var t=this.map,r=this.featureLayer,i=r.getDefinitionExpression(),n=new s;n.outFields=r.getOutFields(),n.where=i||"1=1",n.returnGeometry=!0,n.outSpatialReference=new a(t.spatialReference.toJson()),n.timeExtent=r.getTimeDefinition(),n.maxAllowableOffset=r._maxOffset,n.quantizationParameters=r._quantizationParameters,r._ts&&(n._ts=(new Date).getTime()),n.orderByFields=r.supportsAdvancedQueries?r.getOrderByFields():null,n.multipatchOption=r.multipatchOption,this.pagination&&(this._start=n.start=null==e?0:e,n.num=r.maxRecordCount);var o;r._usePatch&&(o=this._getRequestId(r),this._cancelPendingRequest(null,o)),r._task.execute(n,this._drawFeatures,this._queryErrorHandler,o)},_drawFeatures:function(e){this._purgeRequests();var t,r,i,a,s=e.features,n=this.featureLayer,o=n.objectIdField,u=s.length,d=e.exceededTransferLimit&&!n._collection,l=n._selectedFeatures,h=n.mode===n.constructor.MODE_AUTO;for(t=0;u>t;t++)i=s[t],a=i.attributes[o],r=this._addFeatureIIf(a,i),this._incRefCount(a),h&&r!==i&&l[a]&&(r.setGeometry(i.geometry),r.setAttributes(i.attributes));this._applyTimeFilter(!0),this.pagination&&d||n._fireUpdateEnd(null,e.exceededTransferLimit?{queryLimitExceeded:!0}:null),d&&(this.pagination&&this._sendRequest(this._start+n.maxRecordCount),n.onQueryLimitExceeded())},_queryErrorHandler:function(e){this._purgeRequests();var t=this.featureLayer;t._errorHandler(e),t._fireUpdateEnd(e)}});return r("extend-esri")&&t.setObject("layers._SnapshotMode",o,i),o});