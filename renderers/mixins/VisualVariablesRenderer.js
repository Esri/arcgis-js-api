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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/Accessor","../../core/accessorSupport/decorators","../../layers/support/fieldUtils","../visualVariables/ColorVariable","../visualVariables/OpacityVariable","../visualVariables/RotationVariable","../visualVariables/SizeVariable","../visualVariables/VisualVariable","../visualVariables/VisualVariableFactory","../../symbols/support/utils"],function(e,t,a,r,i,l,o,s,n,u,c,p,y,V,b,v){function g(e){return e&&"opacity"in e?e.opacity*g(e.parent):1}var h={base:V,key:"type",typeMap:{opacity:c,color:u,rotation:p,size:y}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._vvFactory=new b,t}return a(t,e),Object.defineProperty(t.prototype,"visualVariables",{set:function(e){this._vvFactory.visualVariables=e,this._set("visualVariables",this._vvFactory.visualVariables)},enumerable:!0,configurable:!0}),t.prototype.readVisualVariables=function(e,t,a){return this._vvFactory.readVariables(e,t,a)},t.prototype.writeVisualVariables=function(e,t,a,r){t[a]=this._vvFactory.writeVariables(e,r)},t.prototype.getDisplayedSymbol=function(e,t){return l(this,void 0,void 0,function(){var a,r,l,o,s,n,u,c,p;return i(this,function(i){return e?(a=g(e.layer||e.sourceLayer),(r=this.getSymbol(e))?(r=r.clone(),this.visualVariables?(l=this._vvFactory,o=l.colorVariables,s=l.opacityVariables,n=l.sizeVariables,u=l.rotationVariables,c=!!o.length&&o[o.length-1].getColor(e,t),p=s.length?s[s.length-1].getOpacity(e,t):null,null!=a&&(p=null!=p?p*a:a),v.applyColorToSymbol(r,c,p),n.forEach(function(a){return v.applySizeToSymbol(r,a.getSize(e,t),a.axis)}),u.forEach(function(a){return v.applyRotationToSymbol(r,a.getRotationAngle(e,t),a.axis)}),[2,r]):[2,r]):[2]):[2]})})},t.prototype.getVisualVariableValues=function(e,t){return this._vvFactory.getVisualVariableValues(e,t)},t.prototype.hasVisualVariables=function(e,t){return e?!!this.getVisualVariablesForType(e,t):!!(this.getVisualVariablesForType("size",t)||this.getVisualVariablesForType("color",t)||this.getVisualVariablesForType("opacity",t)||this.getVisualVariablesForType("rotation",t))},t.prototype.getVisualVariablesForType=function(e,t){var a=this.visualVariables;if(a){var r=a.filter(function(a){return a.type===e&&("string"==typeof t?a.target===t:!1!==t||!a.target)});if(!r||0!==r.length)return r}},t.prototype.getSize=function(e,t){return this._vvFactory.getSize(e,t)},t.prototype.getSizeRangeAtScale=function(e,t,a){return e?e.getSizeRangeAtScale(t,a):this._vvFactory.getSizeRangeAtScale(t,a)},t.prototype.getColor=function(e,t){return this._vvFactory.getColor(e,t)},t.prototype.getOpacity=function(e,t){return this._vvFactory.getOpacity(e,t)},t.prototype.getRotationAngle=function(e,t){return this._vvFactory.getRotationAngle(e,t)},t.prototype.collectVVRequiredFields=function(e,t){return l(this,void 0,void 0,function(){var a,r,l,o;return i(this,function(i){switch(i.label){case 0:a=[],this.visualVariables&&(a=a.concat(this.visualVariables)),r=0,l=a,i.label=1;case 1:return r<l.length?(o=l[r])?(o.field&&n.collectField(e,t,o.field),o.normalizationField&&n.collectField(e,t,o.normalizationField),o.valueExpression?[4,n.collectArcadeFieldNames(e,t,o.valueExpression)]:[3,3]):[3,3]:[3,4];case 2:i.sent(),i.label=3;case 3:return r++,[3,1];case 4:return[2]}})})},r([s.property({types:[h],value:null,json:{write:!0}})],t.prototype,"visualVariables",null),r([s.reader("visualVariables",["visualVariables","rotationType","rotationExpression"])],t.prototype,"readVisualVariables",null),r([s.writer("visualVariables")],t.prototype,"writeVisualVariables",null),t=r([s.subclass("esri.renderers.mixins.VisualVariablesRenderer")],t)}(s.declared(o))});