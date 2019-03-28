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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../Color","../../core/accessorSupport/decorators","./VisualVariable","./support/ColorStop","./support/utils","../../support/arcadeUtils"],function(e,t,o,r,i,s,n,p,l,a){return function(e){function t(t){var o=e.call(this,t)||this;return o.type="color",o.normalizationField=null,o}o(t,e),n=t,Object.defineProperty(t.prototype,"_cache",{get:function(){var e=a.createSyntaxTree(this.valueExpression);return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:a.createFunction(e)}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"stops",{set:function(e){e&&Array.isArray(e)&&(e=e.filter(function(e){return!!e}),e.sort(function(e,t){return e.value-t.value})),this._set("stops",e)},enumerable:!0,configurable:!0}),t.prototype.getColor=function(e,t){var o="number"==typeof e,r=o?null:e,s=r&&r.attributes,n=o?e:null,p=this._cache,u=p.ipData,c=p.hasExpression,d=p.compiledFunc,f=this.field;if(!f&&!c){var h=this.stops;return h&&h[0]&&h[0].color}if("number"!=typeof n)if(c){var y=a.getViewInfo(t),v=a.createExecContext(r,y);n=a.executeFunction(d,v)}else s&&(n=s[f]);var x=this.normalizationField,b=s?parseFloat(s[x]):void 0;if(null!=n&&(!x||o||!isNaN(b)&&0!==b)){isNaN(b)||o||(n/=b);var m=l.lookupData(n,u);if(m){var E=m[0],F=m[1],g=E===F?this.stops[E].color:i.blendColors(this.stops[E].color,this.stops[F].color,m[2],t&&t.color);return new i(g)}}},t.prototype.clone=function(){return new n({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(function(e){return e.clone()}),legendOptions:this.legendOptions&&this.legendOptions.clone()})},t.prototype._interpolateData=function(){return this.stops&&this.stops.map(function(e){return e.value||0})};var n;return r([s.property({readOnly:!0,dependsOn:["valueExpression","stops"]})],t.prototype,"_cache",null),r([s.property({type:["color"],json:{type:["colorInfo"]}})],t.prototype,"type",void 0),r([s.property({type:String,json:{write:!0}})],t.prototype,"normalizationField",void 0),r([s.property({type:[p],json:{write:!0}})],t.prototype,"stops",null),t=n=r([s.subclass("esri.renderers.visualVariables.ColorVariable")],t)}(s.declared(n))});