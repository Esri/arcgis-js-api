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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel"],function(e,t,a,r,i){var n=e(null,{declaredClass:"esri.layers._RenderMode",initialize:function(e){this.map=e,this._init=!0},startup:function(){this._started=!0},propertyChangeHandler:function(e){},destroy:function(){this._init=!1},drawFeature:function(e){},suspend:function(){},resume:function(){},refresh:function(){},hasAllFeatures:function(){return!0},_incRefCount:function(e){var t=this._featureMap[e];t&&t._count++},_decRefCount:function(e){var t=this._featureMap[e];t&&t._count--},_getFeature:function(e){return this._featureMap[e]},_addFeatureIIf:function(e,t){var a=this._featureMap,r=a[e],i=this.featureLayer;return r||(a[e]=t,i._add(t),t._count=0),r||t},_removeFeatureIIf:function(e){var t=this._featureMap[e],a=this.featureLayer;if(t){if(t._count)return;delete this._featureMap[e],a._remove(t)}return t},_clearIIf:function(){var e,t=this.featureLayer,a=t.graphics,r=t._selectedFeatures,i=t.getSelectedFeatures().length,n=t.objectIdField;if(i)for(e=a.length-1;e>=0;e--){var s=a[e],u=s.attributes[n];u in r?s._count=1:(s._count=0,this._removeFeatureIIf(u))}else t.clear(),this._featureMap={}},_cancelPendingRequest:function(e){if(e)try{e.cancel()}catch(t){}},_toggleVisibility:function(e){var t,a=this.featureLayer,r=a.graphics,i=e?"show":"hide",n=r.length;for(e=e&&a._ager,t=0;n>t;t++){var s=r[t];s[i](),e&&a._repaint(s)}},_applyTimeFilter:function(e){var t=this.featureLayer;if(t.timeInfo&&!t.suspended){e||t._fireUpdateStart();var r=t._trackManager;r&&r.clearTracks();var i=t.getTimeDefinition(),n=t._getOffsettedTE(t._mapTimeExtent);if(n)if(n=t._getTimeOverlap(i,n)){var s=t._filterByTime(t.graphics,n.startTime,n.endTime);r&&r.addFeatures(s.match),a.forEach(s.match,function(e){var a=e._shape;e.visible||(e.show(),a=e._shape,a&&a._moveToFront()),t._ager&&a&&t._repaint(e)}),a.forEach(s.noMatch,function(e){e.visible&&e.hide()})}else this._toggleVisibility(!1);else r&&r.addFeatures(t.graphics),this._toggleVisibility(!0);r&&(r.moveLatestToFront(),r.drawTracks()),e||t._fireUpdateEnd()}}});return r("extend-esri")&&t.setObject("layers._RenderMode",n,i),n});