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

define(["require","exports","tslib","../../symbols","../../core/JSONSupport","../../core/accessorSupport/decorators","../../symbols/support/jsonUtils"],(function(e,t,r,o,s,i,l){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.description=null,r.label=null,r.minValue=null,r.maxValue=0,r.symbol=null,r}var s;return r.__extends(t,e),s=t,t.prototype.clone=function(){return new s({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?this.symbol.clone():null})},t.prototype.getMeshHash=function(){var e=JSON.stringify(this.symbol);return this.minValue+"."+this.maxValue+"."+e},r.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"description",void 0),r.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"label",void 0),r.__decorate([i.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],t.prototype,"minValue",void 0),r.__decorate([i.property({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],t.prototype,"maxValue",void 0),r.__decorate([i.property({types:o.symbolTypesRenderer,json:{origins:{"web-scene":{types:o.symbolTypesRenderer3D,write:l.write}},write:l.write}})],t.prototype,"symbol",void 0),t=s=r.__decorate([i.subclass("esri.renderers.support.ClassBreakInfo")],t)}(s.JSONSupport)}));