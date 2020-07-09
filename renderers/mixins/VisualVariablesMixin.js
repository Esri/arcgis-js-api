// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/accessorSupport/decorators","../../layers/support/fieldUtils","../visualVariables/ColorVariable","../visualVariables/OpacityVariable","../visualVariables/RotationVariable","../visualVariables/SizeVariable","../visualVariables/VisualVariable","../visualVariables/VisualVariableFactory"],(function(e,a,i,r,t,l,s,o,u,n,V){Object.defineProperty(a,"__esModule",{value:!0});var c={base:n,key:"type",typeMap:{opacity:s,color:l,rotation:o,size:u}};a.VisualVariablesMixin=function(e){return function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return a._vvFactory=new V,a}return i.__extends(a,e),Object.defineProperty(a.prototype,"visualVariables",{set:function(e){this._vvFactory.visualVariables=e,this._set("visualVariables",this._vvFactory.visualVariables)},enumerable:!0,configurable:!0}),a.prototype.readVisualVariables=function(e,a,i){return this._vvFactory.readVariables(e,a,i)},a.prototype.writeVisualVariables=function(e,a,i,r){a[i]=this._vvFactory.writeVariables(e,r)},Object.defineProperty(a.prototype,"arcadeRequiredForVisualVariables",{get:function(){if(!this.visualVariables)return!1;for(var e=0,a=this.visualVariables;e<a.length;e++){if(a[e].arcadeRequired)return!0}return!1},enumerable:!0,configurable:!0}),a.prototype.hasVisualVariables=function(e,a){return e?!!this.getVisualVariablesForType(e,a):!!(this.getVisualVariablesForType("size",a)||this.getVisualVariablesForType("color",a)||this.getVisualVariablesForType("opacity",a)||this.getVisualVariablesForType("rotation",a))},a.prototype.getVisualVariablesForType=function(e,a){var i=this.visualVariables;if(i){var r=i.filter((function(i){return i.type===e&&("string"==typeof a?i.target===a:!1!==a||!i.target)}));if(!r||0!==r.length)return r}},a.prototype.collectVVRequiredFields=function(e,a){return i.__awaiter(this,void 0,void 0,(function(){var r,l,s,o;return i.__generator(this,(function(i){switch(i.label){case 0:r=[],this.visualVariables&&(r=r.concat(this.visualVariables)),l=0,s=r,i.label=1;case 1:return l<s.length?(o=s[l])?(o.field&&t.collectField(e,a,o.field),o.normalizationField&&t.collectField(e,a,o.normalizationField),o.valueExpression?[4,t.collectArcadeFieldNames(e,a,o.valueExpression)]:[3,3]):[3,3]:[3,4];case 2:i.sent(),i.label=3;case 3:return l++,[3,1];case 4:return[2]}}))}))},i.__decorate([r.property({types:[c],value:null,json:{write:!0}})],a.prototype,"visualVariables",null),i.__decorate([r.reader("visualVariables",["visualVariables","rotationType","rotationExpression"])],a.prototype,"readVisualVariables",null),i.__decorate([r.writer("visualVariables")],a.prototype,"writeVisualVariables",null),a=i.__decorate([r.subclass("esri.renderers.mixins.VisualVariablesMixin")],a)}(e)}}));