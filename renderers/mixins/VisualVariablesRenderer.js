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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/accessorSupport/decorators","../visualVariables/ColorVariable","../visualVariables/OpacityVariable","../visualVariables/RotationVariable","../visualVariables/SizeVariable","../visualVariables/VisualVariable","../visualVariables/VisualVariableFactory","../../support/arcadeUtils","../../symbols/support/utils"],function(e,t,a,r,i,o,l,s,n,u,p,c,y,V){function b(e){return e&&"opacity"in e?e.opacity*b(e.parent):1}var v={base:p,key:"type",typeMap:{opacity:s,color:l,rotation:n,size:u}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._vvFactory=new c,t}return a(t,e),Object.defineProperty(t.prototype,"requiredFields",{get:function(){var e=Object.create(null);return this.collectRequiredFields(e),Object.keys(e).sort()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visualVariables",{set:function(e){this._vvFactory.visualVariables=e,this._set("visualVariables",this._vvFactory.visualVariables)},enumerable:!0,configurable:!0}),t.prototype.readVisualVariables=function(e,t,a){return this._vvFactory.readVariables(e,t,a)},t.prototype.writeVisualVariables=function(e,t,a,r){t[a]=this._vvFactory.writeVariables(e,r)},t.prototype.getDisplayedSymbol=function(e,t){if(e){var a=b(e.layer||e.sourceLayer),r=this.getSymbol(e);if(r){if(r=r.clone(),!this.visualVariables)return r;var i=this._vvFactory,o=i.colorVariables,l=i.opacityVariables,s=i.sizeVariables,n=i.rotationVariables,u=!!o.length&&o[o.length-1].getColor(e,t),p=l.length?l[l.length-1].getOpacity(e,t):null;return null!=a&&(p=null!=p?p*a:a),V.applyColorToSymbol(r,u,p),s.forEach(function(a){return V.applySizeToSymbol(r,a.getSize(e,t),a.axis)}),n.forEach(function(a){return V.applyRotationToSymbol(r,a.getRotationAngle(e,t),a.axis)}),r}}},t.prototype.getVisualVariableValues=function(e,t){return this._vvFactory.getVisualVariableValues(e,t)},t.prototype.hasVisualVariables=function(e,t){return e?!!this.getVisualVariablesForType(e,t):!!(this.getVisualVariablesForType("size",t)||this.getVisualVariablesForType("color",t)||this.getVisualVariablesForType("opacity",t)||this.getVisualVariablesForType("rotation",t))},t.prototype.getVisualVariablesForType=function(e,t){var a=this.visualVariables;if(a){var r=a.filter(function(a){return a.type===e&&("string"==typeof t?a.target===t:!1!==t||!a.target)});if(!r||0!==r.length)return r}},t.prototype.getSize=function(e,t){return this._vvFactory.getSize(e,t)},t.prototype.getSizeRangeAtScale=function(e,t,a){return e?e.getSizeRangeAtScale(t,a):this._vvFactory.getSizeRangeAtScale(t,a)},t.prototype.getColor=function(e,t){return this._vvFactory.getColor(e,t)},t.prototype.getOpacity=function(e,t){return this._vvFactory.getOpacity(e,t)},t.prototype.getRotationAngle=function(e,t){return this._vvFactory.getRotationAngle(e,t)},t.prototype.collectRequiredFields=function(e){var t=[];this.visualVariables&&(t=t.concat(this.visualVariables)),t.forEach(function(t){t&&(t.field&&(e[t.field]=!0),t.normalizationField&&(e[t.normalizationField]=!0),t.valueExpression&&y.extractFieldNames(t.valueExpression).forEach(function(t){e[t]=!0}))})},r([o.property({type:[String],dependsOn:["visualVariables"]})],t.prototype,"requiredFields",null),r([o.property({types:[v],value:null,json:{write:!0}})],t.prototype,"visualVariables",null),r([o.reader("visualVariables",["visualVariables","rotationType","rotationExpression"])],t.prototype,"readVisualVariables",null),r([o.writer("visualVariables")],t.prototype,"writeVisualVariables",null),t=r([o.subclass("esri.renderers.mixins.VisualVariablesRenderer")],t)}(o.declared(i))});