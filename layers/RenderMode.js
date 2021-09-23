// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","../sniff","../kernel"],(function(e,t,r,a,i){var n=!!a("esri-pbf"),u=!!a("esri-featurelayer-pbf"),s=e(null,{declaredClass:"esri.layers._RenderMode",enablePBFQuery:n&&u,initialize:function(e){this.map=e,this._init=!0},startup:function(){this._started=!0},propertyChangeHandler:function(e){},destroy:function(){this._init=this._started=!1},drawFeature:function(e){},suspend:function(){},resume:function(){},refresh:function(){},hasAllFeatures:function(){return!0},hasUpdateError:function(){return!1},canFetchPBF:function(e){return!(!this.featureLayer._canFetchPBF()||!this.enablePBFQuery)},_incRefCount:function(e){var t=this._featureMap[e];t&&t._count++},_decRefCount:function(e){var t=this._featureMap[e];t&&t._count--},_getFeature:function(e){return this._featureMap[e]},_addFeatureIIf:function(e,t){var r=this._featureMap,a=r[e],i=this.featureLayer;return a||(r[e]=t,i._add(t),t._count=0),a||t},_removeFeatureIIf:function(e){var t=this._featureMap[e],r=this.featureLayer;if(t){if(t._count)return;delete this._featureMap[e],r._remove(t)}return t},_registerFeature:function(e,t){var r=this._featureMap,a=r[e];return a?(a.attributes=t.attributes,a.geometry=t.geometry):(r[e]=t,t._count=0,t._layer=t._graphicsLayer=t._sourceLayer=this.featureLayer),a||t},_unregisterFeature:function(e){var t=this._featureMap,r=t[e];if(r){if(r._count)return;delete t[e],r._graphicsLayer=null}},_clearIIf:function(){var e,t=this.featureLayer,r=t.graphics,a=t._selectedFeatures,i=t.getSelectedFeatures().length,n=t.objectIdField;if(i)for(e=r.length-1;e>=0;e--){var u=r[e],s=u.attributes[n];s in a?u._count=1:(u._count=0,this._removeFeatureIIf(s))}else t.clear(),this._featureMap={}},_cancelPendingRequest:function(e){if(e)try{e.cancel()}catch(e){}},_toggleVisibility:function(e){var t,r=this.featureLayer,a=r.graphics,i=e?"show":"hide",n=a.length;for(e=e&&r._ager,t=0;t<n;t++){var u=a[t];u[i](),e&&r._repaint(u)}},_applyTimeFilter:function(e){var t=this.featureLayer;if(t.timeInfo&&!t.suspended){e||t._fireUpdateStart();var a=t._trackManager;a&&a.clearTracks();var i=t.getTimeDefinition(),n=t._getOffsettedTE(t._mapTimeExtent);if(n)if(n=t._getTimeOverlap(i,n)){var u=t._filterByTime(t.graphics,n.startTime,n.endTime);a&&a.addFeatures(u.match),r.forEach(u.match,(function(e){var r=e._shape;e.visible||(e.show(),(r=e._shape)&&r._moveToFront()),t._ager&&r&&t._repaint(e)})),r.forEach(u.noMatch,(function(e){e.visible&&e.hide()}))}else this._toggleVisibility(!1);else a&&a.addFeatures(t.graphics),this._toggleVisibility(!0);a&&(a.moveLatestToFront(),a.drawTracks()),e||t._fireUpdateEnd()}}});return a("extend-esri")&&t.setObject("layers._RenderMode",s,i),s}));