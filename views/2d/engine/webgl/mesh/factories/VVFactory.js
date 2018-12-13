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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/Error","../../../../../../core/Logger","../../enums","../../Utils","../../visualVariablesUtils"],function(e,t,a,r,s,u,o){Object.defineProperty(t,"__esModule",{value:!0});var p,i,V=r.getLogger("esri.views.2d.engine.webgl.mesh.VVFactory");(i=p=t.VVError||(t.VVError={}))[i.NONE=0]="NONE",i[i.MISSING_DATA=1]="MISSING_DATA";var v=function(){function e(){this._vvMap=new Map}return e.prototype.set=function(e,t){this._vvMap.set(e,t)},e.prototype.getValue=function(e,t,r,i){return this._vvMap.has(e)?this._vvMap.get(e)(t,r,i):0},e}(),n=function(){function e(e,t){this._createVVFunctionMap(e,t)}return e.prototype.computeVV=function(e,t,r,i){if(!this._vvMap)return p.NONE;var n=this._vvMap.getValue(s.VVType.SIZE,t,r,i),a=this._vvMap.getValue(s.VVType.COLOR,t,r,i),o=this._vvMap.getValue(s.VVType.OPACITY,t,r,i),u=this._vvMap.getValue(s.VVType.ROTATION,t,r,i);return e[s.VVType.SIZE]=this._isErrorVV(n)?NaN:n,e[s.VVType.COLOR]=this._isErrorVV(a)?NaN:a,e[s.VVType.OPACITY]=this._isErrorVV(o)?NaN:o,e[s.VVType.ROTATION]=this._isErrorVV(u)?NaN:u,p.NONE},e.prototype._isErrorVV=function(e){return null===e||isNaN(e)||e===1/0},e.prototype._createVVFunctionMap=function(e,t){if(e&&e.length)for(var r=0,i=e;r<i.length;r++){var n=i[r],a=u.getVVType(n.type),o=this._createGetValueFunction(n,t);o&&(this._vvMap||(this._vvMap=new v),this._vvMap.set(a,o))}},e.prototype._createGetValueFunction=function(e,t){if(u.getVVType(e.type)!==s.VVType.SIZE)return this._createNormalizedFunction(e,t);var r=e,i=o.getTypeOfSizeVisualVariable(r);if(i===s.WGLVVFlag.SIZE_SCALE_STOPS)return null;var n=i===s.WGLVVFlag.SIZE_UNIT_VALUE&&function(e){return o.getVisualVariableSizeValueRepresentationRatio(e,r.valueRepresentation)};return this._createNormalizedFunction(e,t,n)},e.prototype._createNormalizedFunction=function(e,t,r){var i=e.field;if(i){if("string"!=typeof i)return"function"==typeof i?(V.error(new a("mapview-rendering:unsupported-feature","Function field types are not currently supported. Please use a valueExpression instead")),function(e){}):(V.error(new a("mapview-rendering:invalid-type","The field for a vv must be a string or a number, but got "+typeof i)),function(e){});var n=e.normalizationField;return n?function(e){if(e.attributes[i]&&e.attributes[n]){var t=e.attributes[i]/e.attributes[n];return r?r(t):t}}:r?function(e){return r(e.attributes[i])}:function(e){return e.attributes[i]}}return e.valueExpression?u.createArcadeFunction(e.valueExpression,t,r):(V.error("Unable to create a normalized function for visual variable: "+e),function(e){})},e}();t.default=n});