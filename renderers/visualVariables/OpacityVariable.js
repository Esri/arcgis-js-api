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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","./VisualVariable","./support/OpacityStop"],function(e,t,r,o,n,i,s){return function(e){function t(t){var r=e.call(this,t)||this;return r.type="opacity",r.normalizationField=null,r}r(t,e),i=t,Object.defineProperty(t.prototype,"cache",{get:function(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"stops",{set:function(e){e&&Array.isArray(e)&&(e=e.filter(function(e){return!!e}),e.sort(function(e,t){return e.value-t.value})),this._set("stops",e)},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new i({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(function(e){return e.clone()}),legendOptions:this.legendOptions&&this.legendOptions.clone()})},t.prototype.getAttributeHash=function(){return this.inherited(arguments)+"-"+this.normalizationField},t.prototype._interpolateData=function(){return this.stops&&this.stops.map(function(e){return e.value||0})};var i;return o([n.property({readOnly:!0,dependsOn:["valueExpression","stops"]})],t.prototype,"cache",null),o([n.property({type:["opacity"],json:{type:["transparencyInfo"]}})],t.prototype,"type",void 0),o([n.property({type:String,json:{write:!0}})],t.prototype,"normalizationField",void 0),o([n.property({type:[s],json:{write:!0}})],t.prototype,"stops",null),t=i=o([n.subclass("esri.renderers.visualVariables.OpacityVariable")],t)}(n.declared(i))});