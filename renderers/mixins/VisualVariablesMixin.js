// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/accessorSupport/decorators","../../layers/support/fieldUtils","../visualVariables/ColorVariable","../visualVariables/OpacityVariable","../visualVariables/RotationVariable","../visualVariables/SizeVariable","../visualVariables/VisualVariable","../visualVariables/VisualVariableFactory"],function(e,a,r,i,t,l,s,o,u,n,p,c,V,b){Object.defineProperty(a,"__esModule",{value:!0});var v={base:V,key:"type",typeMap:{opacity:n,color:u,rotation:p,size:c}};a.VisualVariablesMixin=function(e){return function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return a._vvFactory=new b,a}return r(a,e),Object.defineProperty(a.prototype,"visualVariables",{set:function(e){this._vvFactory.visualVariables=e,this._set("visualVariables",this._vvFactory.visualVariables)},enumerable:!0,configurable:!0}),a.prototype.readVisualVariables=function(e,a,r){return this._vvFactory.readVariables(e,a,r)},a.prototype.writeVisualVariables=function(e,a,r,i){a[r]=this._vvFactory.writeVariables(e,i)},a.prototype.hasVisualVariables=function(e,a){return e?!!this.getVisualVariablesForType(e,a):!!(this.getVisualVariablesForType("size",a)||this.getVisualVariablesForType("color",a)||this.getVisualVariablesForType("opacity",a)||this.getVisualVariablesForType("rotation",a))},a.prototype.getVisualVariablesForType=function(e,a){var r=this.visualVariables;if(r){var i=r.filter(function(r){return r.type===e&&("string"==typeof a?r.target===a:!1!==a||!r.target)});if(!i||0!==i.length)return i}},a.prototype.collectVVRequiredFields=function(e,a){return l(this,void 0,void 0,function(){var r,i,l,s;return t(this,function(t){switch(t.label){case 0:r=[],this.visualVariables&&(r=r.concat(this.visualVariables)),i=0,l=r,t.label=1;case 1:return i<l.length?(s=l[i])?(s.field&&o.collectField(e,a,s.field),s.normalizationField&&o.collectField(e,a,s.normalizationField),s.valueExpression?[4,o.collectArcadeFieldNames(e,a,s.valueExpression)]:[3,3]):[3,3]:[3,4];case 2:t.sent(),t.label=3;case 3:return i++,[3,1];case 4:return[2]}})})},i([s.property({types:[v],value:null,json:{write:!0}})],a.prototype,"visualVariables",null),i([s.reader("visualVariables",["visualVariables","rotationType","rotationExpression"])],a.prototype,"readVisualVariables",null),i([s.writer("visualVariables")],a.prototype,"writeVisualVariables",null),a=i([s.subclass("esri.renderers.mixins.VisualVariablesMixin")],a)}(s.declared(e))}});