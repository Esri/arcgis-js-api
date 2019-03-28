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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/Error","../../../../../../core/Logger","../../definitions","../../enums","../../Utils","../../visualVariablesUtils"],function(e,t,a,r,o,u,s,p){Object.defineProperty(t,"__esModule",{value:!0});var c,n,l=r.getLogger("esri.views.2d.engine.webgl.mesh.VVFactory");(n=c=t.VVError||(t.VVError={}))[n.NONE=0]="NONE",n[n.MISSING_DATA=1]="MISSING_DATA";var v=function(){function e(){this._vvMap=new Map}return e.prototype.set=function(e,t){this._vvMap.set(e,t)},Object.defineProperty(e.prototype,"map",{get:function(){return this._vvMap},enumerable:!0,configurable:!0}),e.prototype.getValue=function(e,t,r,n){return this._vvMap.has(e)?this._vvMap.get(e)(t,r,n):0},e}(),i=function(){function n(){}return n.fromRenderer=function(e,t){var r=new n;switch(e.type){case"dot-density":r._createDDFunctionMap(e.attributes,t);break;case"simple":case"unique-value":case"class-breaks":r._createVVFunctionMap(e.visualVariables,t);break;default:return l.error("Cannot create factory for renderer type "+e.type),null}return r},n.prototype.computeVV=function(n,i,a,o){var u=this;if(!this._vvMap)return c.NONE;return this._vvMap.map.forEach(function(e,t){var r=e(i,a,o);n[t]=u._isErrorVV(r)?1e-30:r}),c.NONE},n.prototype._isErrorVV=function(e){return null===e||isNaN(e)||e===1/0},n.prototype._createVVFunctionMap=function(e,t){if(e&&e.length)for(var r=0,n=e;r<n.length;r++){var i=n[r],a=s.getVVType(i.type),o=this._createGetValueFunction(i,t);o&&(this._vvMap||(this._vvMap=new v),this._vvMap.set(a,o))}},n.prototype._createDDFunctionMap=function(e,t){this._vvMap||(this._vvMap=new v),e.length>o.DOT_DENSITY_MAX_FIELDS&&l.warn("mapview-invalid-value","DotDensityRenderer supports a maximium of "+o.DOT_DENSITY_MAX_FIELDS+" attribtues, but found "+e.length);for(var r=0;r<Math.min(o.DOT_DENSITY_MAX_FIELDS,e.length);r++){var n=e[r],i=this._createNormalizedFunction(n,t);this._vvMap.set(r,i)}},n.prototype._createGetValueFunction=function(e,t){if(s.getVVType(e.type)!==u.VVType.SIZE)return this._createNormalizedFunction(e,t);var r=e,n=p.getTypeOfSizeVisualVariable(r);if(n===u.WGLVVFlag.SIZE_SCALE_STOPS)return null;var i=n===u.WGLVVFlag.SIZE_UNIT_VALUE&&function(e){return p.getVisualVariableSizeValueRepresentationRatio(e,r.valueRepresentation)};return this._createNormalizedFunction(e,t,i)},n.prototype._createNormalizedFunction=function(e,t,r){var n=e.field;if(n){if("string"!=typeof n)return"function"==typeof n?(l.error(new a("mapview-rendering:unsupported-feature","Function field types are not currently supported. Please use a valueExpression instead")),function(e){}):(l.error(new a("mapview-rendering:invalid-type","The field for a vv must be a string or a number, but got "+typeof n)),function(e){});var i=e.normalizationField;return i?function(e){if(e.attributes[n]&&e.attributes[i]){var t=e.attributes[n]/e.attributes[i];return r?r(t):t}}:r?function(e){return r(e.attributes[n])}:function(e){return e.attributes[n]}}return e.valueExpression?s.createArcadeFunction(e.valueExpression,t,r):(l.error("Unable to create a normalized function for visual variable: "+e),function(e){})},n}();t.default=i});