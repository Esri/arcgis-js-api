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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","./VisualVariable","./support/OpacityStop","./support/utils","../../support/arcadeUtils"],function(t,e,r,o,i,s,n,p,a){return function(t){function e(e){var r=t.call(this,e)||this;return r.type="opacity",r.normalizationField=null,r}r(e,t),s=e,Object.defineProperty(e.prototype,"_cache",{get:function(){var t=a.createSyntaxTree(this.valueExpression);return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:a.createFunction(t)}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"stops",{set:function(t){t&&Array.isArray(t)&&(t=t.filter(function(t){return!!t}),t.sort(function(t,e){return t.value-e.value})),this._set("stops",t)},enumerable:!0,configurable:!0}),e.prototype.getOpacity=function(t,e){var r="number"==typeof t,o=r?null:t,i=o&&o.attributes,s=r?t:null,n=this._cache,l=n.ipData,u=n.hasExpression,c=n.compiledFunc,y=this.field;if(!y&&!u){var f=this.stops;return f&&f[0]&&f[0].opacity}if("number"!=typeof s)if(u){var d=a.getViewInfo(e),h=a.createExecContext(o,d);s=a.executeFunction(c,h)}else i&&(s=i[y]);var v=this.normalizationField,x=i?parseFloat(i[v]):void 0;if(null!=s&&(!v||r||!isNaN(x)&&0!==x)){isNaN(x)||r||(s/=x);var b=p.lookupData(s,l);if(b){var m=b[0],E=b[1];if(m===E)return this.stops[m].opacity;var F=this.stops[m].opacity;return F+(this.stops[E].opacity-F)*b[2]}}},e.prototype.clone=function(){return new s({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(function(t){return t.clone()}),legendOptions:this.legendOptions&&this.legendOptions.clone()})},e.prototype._interpolateData=function(){return this.stops&&this.stops.map(function(t){return t.value||0})};var s;return o([i.property({readOnly:!0,dependsOn:["valueExpression","stops"]})],e.prototype,"_cache",null),o([i.property({type:["opacity"],json:{type:["transparencyInfo"]}})],e.prototype,"type",void 0),o([i.property({type:String,json:{write:!0}})],e.prototype,"normalizationField",void 0),o([i.property({type:[n],json:{write:!0}})],e.prototype,"stops",null),e=s=o([i.subclass("esri.renderers.visualVariables.OpacityVariable")],e)}(i.declared(s))});