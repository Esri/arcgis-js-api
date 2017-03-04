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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/io/script","../kernel"],function(e,t,r,i,a,n,o){var s=t(null,{declaredClass:"esri.layers._RenderMode",constructor:function(){this._prefix="jsonp_"+(e._scopeName||"dojo")+"IoScript"},initialize:function(e){this.map=e,this._init=!0},startup:function(){},propertyChangeHandler:function(e){},destroy:function(){this._init=!1},drawFeature:function(e){},suspend:function(){},resume:function(){},refresh:function(){},hasAllFeatures:function(){return!0},_incRefCount:function(e){var t=this._featureMap[e];t&&t._count++},_decRefCount:function(e){var t=this._featureMap[e];t&&t._count--},_getFeature:function(e){return this._featureMap[e]},_addFeatureIIf:function(e,t){var r=this._featureMap,i=r[e],a=this.featureLayer;return i||(r[e]=t,a._add(t),t._count=0),i||t},_removeFeatureIIf:function(e){var t=this._featureMap[e],r=this.featureLayer;if(t){if(t._count)return;delete this._featureMap[e],r._remove(t)}return t},_clearIIf:function(){var e,t=this.featureLayer,r=t.graphics,i=t._selectedFeatures,a=t.getSelectedFeatures().length,n=t.objectIdField;if(a)for(e=r.length-1;e>=0;e--){var o=r[e],s=o.attributes[n];s in i?o._count=1:(o._count=0,this._removeFeatureIIf(s))}else t.clear(),this._featureMap={}},_isPending:function(e){var t=n[this._prefix+e];return t?!0:!1},_cancelPendingRequest:function(e,t){if(e=e||n[this._prefix+t])try{e.cancel(),n._validCheck(e)}catch(r){}},_purgeRequests:function(){n._validCheck(null)},_toggleVisibility:function(e){var t,r=this.featureLayer,i=r.graphics,a=e?"show":"hide",n=i.length;for(e=e&&r._ager,t=0;n>t;t++){var o=i[t];o[a](),e&&r._repaint(o)}},_applyTimeFilter:function(e){var t=this.featureLayer;if(t.timeInfo&&!t.suspended){e||t._fireUpdateStart();var r=t._trackManager;r&&r.clearTracks();var a=t.getTimeDefinition(),n=t._getOffsettedTE(t._mapTimeExtent);if(n)if(n=t._getTimeOverlap(a,n)){var o=t._filterByTime(t.graphics,n.startTime,n.endTime);r&&r.addFeatures(o.match),i.forEach(o.match,function(e){var r=e._shape;e.visible||(e.show(),r=e._shape,r&&r._moveToFront()),t._ager&&r&&t._repaint(e)}),i.forEach(o.noMatch,function(e){e.visible&&e.hide()})}else this._toggleVisibility(!1);else r&&r.addFeatures(t.graphics),this._toggleVisibility(!0);r&&(r.moveLatestToFront(),r.drawTracks()),e||t._fireUpdateEnd()}}});return a("extend-esri")&&r.setObject("layers._RenderMode",s,o),s});