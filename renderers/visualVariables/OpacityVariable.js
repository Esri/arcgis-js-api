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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/accessorSupport/decorators","./VisualVariable","./support/OpacityStop"],(function(t,e,r,o,i,n){"use strict";return function(t){function e(e){var r=t.call(this,e)||this;return r.type="opacity",r.normalizationField=null,r}var i;return r.__extends(e,t),i=e,Object.defineProperty(e.prototype,"cache",{get:function(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"stops",{set:function(t){t&&Array.isArray(t)&&(t=t.filter((function(t){return!!t}))).sort((function(t,e){return t.value-e.value})),this._set("stops",t)},enumerable:!1,configurable:!0}),e.prototype.clone=function(){return new i({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map((function(t){return t.clone()})),legendOptions:this.legendOptions&&this.legendOptions.clone()})},e.prototype.getAttributeHash=function(){return t.prototype.getAttributeHash.call(this)+"-"+this.normalizationField},e.prototype._interpolateData=function(){return this.stops&&this.stops.map((function(t){return t.value||0}))},r.__decorate([o.property({readOnly:!0,dependsOn:["valueExpression","stops"]})],e.prototype,"cache",null),r.__decorate([o.property({type:["opacity"],json:{type:["transparencyInfo"]}})],e.prototype,"type",void 0),r.__decorate([o.property({type:String,json:{write:!0}})],e.prototype,"normalizationField",void 0),r.__decorate([o.property({type:[n],json:{write:!0}})],e.prototype,"stops",null),e=i=r.__decorate([o.subclass("esri.renderers.visualVariables.OpacityVariable")],e)}(i)}));