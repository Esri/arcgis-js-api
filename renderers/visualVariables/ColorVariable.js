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

define(["require","exports","tslib","../../core/accessorSupport/decorators","./VisualVariable","./support/ColorStop"],(function(e,t,o,r,n,i){return function(e){function t(t){var o=e.call(this,t)||this;return o.type="color",o.normalizationField=null,o}var n;return o.__extends(t,e),n=t,Object.defineProperty(t.prototype,"cache",{get:function(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"stops",{set:function(e){e&&Array.isArray(e)&&(e=e.filter((function(e){return!!e}))).sort((function(e,t){return e.value-t.value})),this._set("stops",e)},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new n({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map((function(e){return e.clone()})),legendOptions:this.legendOptions&&this.legendOptions.clone()})},t.prototype.getAttributeHash=function(){return e.prototype.getAttributeHash.call(this)+"-"+this.normalizationField},t.prototype._interpolateData=function(){return this.stops&&this.stops.map((function(e){return e.value||0}))},o.__decorate([r.property({readOnly:!0,dependsOn:["valueExpression","stops"]})],t.prototype,"cache",null),o.__decorate([r.property({type:["color"],json:{type:["colorInfo"]}})],t.prototype,"type",void 0),o.__decorate([r.property({type:String,json:{write:!0}})],t.prototype,"normalizationField",void 0),o.__decorate([r.property({type:[i],json:{write:!0}})],t.prototype,"stops",null),t=n=o.__decorate([r.subclass("esri.renderers.visualVariables.ColorVariable")],t)}(n)}));