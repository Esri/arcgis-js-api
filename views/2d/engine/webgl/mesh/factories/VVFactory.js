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

define(["require","exports","../../../../../../core/Error","../../../../../../core/Logger","../../enums","../../Utils","../../visualVariablesUtils"],function(e,t,a,r,p,u,o){Object.defineProperty(t,"__esModule",{value:!0});var V,i,s=r.getLogger("esri.views.2d.engine.webgl.mesh.VVFactory");(i=V=t.VVError||(t.VVError={}))[i.NONE=0]="NONE",i[i.MISSING_DATA=1]="MISSING_DATA";var v=function(){function e(){this._vvMap=new Map}return e.prototype.set=function(e,t){this._vvMap.set(e,t)},e.prototype.getValue=function(e,t,r,i){return this._vvMap.has(e)?this._vvMap.get(e)(t,r,i):0},e}(),n=function(){function e(e,t){this._createVVFunctionMap(e,t)}return e.prototype.computeVV=function(e,t,r,i){if(!this._vvMap)return V.NONE;var n=this._vvMap.getValue(p.VVType.SIZE,t,r,i),a=this._vvMap.getValue(p.VVType.COLOR,t,r,i),o=this._vvMap.getValue(p.VVType.OPACITY,t,r,i),u=this._vvMap.getValue(p.VVType.ROTATION,t,r,i),s=1e-30;return e[p.VVType.SIZE]=this._isErrorVV(n)?s:n,e[p.VVType.COLOR]=this._isErrorVV(a)?s:a,e[p.VVType.OPACITY]=this._isErrorVV(o)?s:o,e[p.VVType.ROTATION]=this._isErrorVV(u)?s:u,V.NONE},e.prototype._isErrorVV=function(e){return null===e||isNaN(e)||e===1/0},e.prototype._createVVFunctionMap=function(e,t){if(e&&e.length)for(var r=0,i=e;r<i.length;r++){var n=i[r],a=u.getVVType(n.type),o=this._createGetValueFunction(n,t);o&&(this._vvMap||(this._vvMap=new v),this._vvMap.set(a,o))}},e.prototype._createGetValueFunction=function(e,t){if(u.getVVType(e.type)!==p.VVType.SIZE)return this._createNormalizedFunction(e,t);var r=e,i=o.getTypeOfSizeVisualVariable(r);if(i===p.WGLVVFlag.SIZE_SCALE_STOPS)return null;var n=i===p.WGLVVFlag.SIZE_UNIT_VALUE&&function(e){return o.getVisualVariableSizeValueRepresentationRatio(e,r.valueRepresentation)};return this._createNormalizedFunction(e,t,n)},e.prototype._createNormalizedFunction=function(e,t,r){var i=e.field;if(i){if("string"!=typeof i)return"function"==typeof i?(s.error(new a("mapview-rendering:unsupported-feature","Function field types are not currently supported. Please use a valueExpression instead")),function(e){}):(s.error(new a("mapview-rendering:invalid-type","The field for a vv must be a string or a number, but got "+typeof i)),function(e){});var n=e.normalizationField;return n?function(e){if(e.attributes[i]&&e.attributes[n]){var t=e.attributes[i]/e.attributes[n];return r?r(t):t}}:r?function(e){return r(e.attributes[i])}:function(e){return e.attributes[i]}}return e.valueExpression?u.createArcadeFunction(e.valueExpression,t,r):(s.error("Unable to create a normalized function for visual variable: "+e),function(e){})},e}();t.default=n});