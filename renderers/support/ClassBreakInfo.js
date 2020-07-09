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

define(["require","exports","tslib","../../symbols","../../core/JSONSupport","../../core/accessorSupport/decorators","../../symbols/support/jsonUtils"],(function(e,r,t,o,s,a,i){return function(e){function r(r){var t=e.call(this,r)||this;return t.description=null,t.label=null,t.minValue=null,t.maxValue=0,t.symbol=null,t}var s;return t.__extends(r,e),s=r,r.prototype.clone=function(){return new s({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?this.symbol.clone():null})},r.prototype.getMeshHash=function(){var e=JSON.stringify(this.symbol);return this.minValue+"."+this.maxValue+"."+e},t.__decorate([a.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),t.__decorate([a.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),t.__decorate([a.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],r.prototype,"minValue",void 0),t.__decorate([a.property({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],r.prototype,"maxValue",void 0),t.__decorate([a.property({types:o.symbolTypesRenderer,json:{origins:{"web-scene":{types:o.symbolTypesRenderer3D,read:i.read,write:i.writeTarget}},read:i.read,write:i.writeTarget}})],r.prototype,"symbol",void 0),r=s=t.__decorate([a.subclass("esri.renderers.support.ClassBreakInfo")],r)}(s.JSONSupport)}));