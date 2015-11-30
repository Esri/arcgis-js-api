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
define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/io/script","../kernel"],function(e,t,i,r,a,n,o){var s=t(null,{declaredClass:"esri.layers._RenderMode",constructor:function(){this._prefix="jsonp_"+(e._scopeName||"dojo")+"IoScript"},initialize:function(e){this.map=e,this._init=!0},startup:function(){},propertyChangeHandler:function(){},destroy:function(){this._init=!1},drawFeature:function(){},suspend:function(){},resume:function(){},refresh:function(){},_incRefCount:function(e){var t=this._featureMap[e];t&&t._count++},_decRefCount:function(e){var t=this._featureMap[e];t&&t._count--},_getFeature:function(e){return this._featureMap[e]},_addFeatureIIf:function(e,t){var i=this._featureMap,r=i[e],a=this.featureLayer;return r||(i[e]=t,a._add(t),t._count=0),r||t},_removeFeatureIIf:function(e){var t=this._featureMap[e],i=this.featureLayer;if(t){if(t._count)return;delete this._featureMap[e],i._remove(t)}return t},_clearIIf:function(){var e,t=this.featureLayer,i=t.graphics,r=t._selectedFeatures,a=t.objectIdField;for(e=i.length-1;e>=0;e--){var n=i[e],o=n.attributes[a];o in r?n._count=1:(n._count=0,this._removeFeatureIIf(o))}},_isPending:function(e){var t=n[this._prefix+e];return t?!0:!1},_cancelPendingRequest:function(e,t){if(e=e||n[this._prefix+t])try{e.cancel(),n._validCheck(e)}catch(i){}},_purgeRequests:function(){n._validCheck(null)},_toggleVisibility:function(e){var t,i=this.featureLayer,r=i.graphics,a=e?"show":"hide",n=r.length;for(e=e&&i._ager,t=0;n>t;t++){var o=r[t];o[a](),e&&i._repaint(o)}},_applyTimeFilter:function(e){var t=this.featureLayer;if(t.timeInfo&&!t.suspended){e||t._fireUpdateStart();var i=t._trackManager;i&&i.clearTracks();var a=t.getTimeDefinition(),n=t._getOffsettedTE(t._mapTimeExtent);if(n)if(n=t._getTimeOverlap(a,n)){var o=t._filterByTime(t.graphics,n.startTime,n.endTime);i&&i.addFeatures(o.match),r.forEach(o.match,function(e){var i=e._shape;e.visible||(e.show(),i=e._shape,i&&i._moveToFront()),t._ager&&i&&t._repaint(e)}),r.forEach(o.noMatch,function(e){e.visible&&e.hide()})}else this._toggleVisibility(!1);else i&&i.addFeatures(t.graphics),this._toggleVisibility(!0);i&&(i.moveLatestToFront(),i.drawTracks()),e||t._fireUpdateEnd()}}});return a("extend-esri")&&i.setObject("layers._RenderMode",s,o),s});