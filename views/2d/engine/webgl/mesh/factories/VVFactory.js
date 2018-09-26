// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/Error","../../../../../../core/Logger","../../enums","../../Utils","../../visualVariablesUtils"],function(e,t,r,i,n,a,o){Object.defineProperty(t,"__esModule",{value:!0});var u,s=i.getLogger("esri.views.2d.engine.webgl.mesh.VVFactory");!function(e){e[e.NONE=0]="NONE",e[e.MISSING_DATA=1]="MISSING_DATA"}(u=t.VVError||(t.VVError={}));var p=function(){function e(){this._vvMap=new Map}return e.prototype.set=function(e,t){this._vvMap.set(e,t)},e.prototype.getValue=function(e,t,r){return this._vvMap.has(e)?this._vvMap.get(e)(t,r):0},e}(),V=function(){function e(e,t,r){this._createVVFunctionMap(e,t,r)}return e.prototype.computeVV=function(e,t,r){if(!this._vvMap)return u.NONE;var i=this._vvMap.getValue(n.VVType.SIZE,t,r),a=this._vvMap.getValue(n.VVType.COLOR,t,r),o=this._vvMap.getValue(n.VVType.OPACITY,t,r),s=this._vvMap.getValue(n.VVType.ROTATION,t,r);return e[n.VVType.SIZE]=this._isErrorVV(i)?NaN:i,e[n.VVType.COLOR]=this._isErrorVV(a)?NaN:a,e[n.VVType.OPACITY]=this._isErrorVV(o)?NaN:o,e[n.VVType.ROTATION]=this._isErrorVV(s)?NaN:s,u.NONE},e.prototype._isErrorVV=function(e){return null===e||isNaN(e)||e===1/0},e.prototype._createVVFunctionMap=function(e,t,r){if(e&&e.length)for(var i=0,n=e;i<n.length;i++){var o=n[i],u=a.getVVType(o.type),s=this._createGetValueFunction(o,t,r);s&&(this._vvMap||(this._vvMap=new p),this._vvMap.set(u,s))}},e.prototype._createGetValueFunction=function(e,t,r){if(a.getVVType(e.type)===n.VVType.SIZE){var i=e,u=o.getTypeOfSizeVisualVariable(i);if(u===n.WGLVVFlag.SIZE_SCALE_STOPS)return null;var s=u===n.WGLVVFlag.SIZE_UNIT_VALUE,p=s&&function(e){return o.getVisualVariableSizeValueRepresentationRatio(e,i.valueRepresentation)};return this._createNormalizedFunction(e,t,r,p)}return this._createNormalizedFunction(e,t,r)},e.prototype._createNormalizedFunction=function(e,t,i,n){var o=e.field;if(o){if("string"==typeof o){var u=e.normalizationField;return u?function(e){if(e.attributes[o]&&e.attributes[u]){var t=e.attributes[o]/e.attributes[u];return n?n(t):t}}:n?function(e){return n(e.attributes[o])}:function(e){return e.attributes[o]}}return"function"==typeof o?(s.error(new r("mapview-rendering:unsupported-feature","Function field types are not currently supported. Please use a valueExpression instead")),function(e){}):(s.error(new r("mapview-rendering:invalid-type","The field for a vv must be a string or a number, but got "+typeof o)),function(e){})}if(e.valueExpression&&"$view.scale"!==e.valueExpression){var p={valueExpression:e.valueExpression,spatialReference:i,layer:{fields:t}};return a.createArcadeFunction(p,n)}return s.error("Unable to create a normalized function for visual variable: "+e),function(e){}},e}();t.default=V});