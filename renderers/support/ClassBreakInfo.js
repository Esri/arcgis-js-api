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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators","../../symbols/support/jsonUtils","../../symbols/support/typeUtils"],function(e,r,t,o,s,l,p,a){Object.defineProperty(r,"__esModule",{value:!0});var i=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.label=null,r.minValue=null,r.maxValue=0,r.symbol=null,r}return t(r,e),s=r,r.prototype.clone=function(){return new s({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?this.symbol.clone():null})},o([l.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o([l.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([l.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],r.prototype,"minValue",void 0),o([l.property({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],r.prototype,"maxValue",void 0),o([l.property({types:a.rendererTypes,json:{origins:{"web-scene":{read:p.read,write:{target:{symbol:{types:a.rendererTypes3D}},writer:p.writeTarget}}},read:p.read,write:p.writeTarget}})],r.prototype,"symbol",void 0),r=s=o([l.subclass("esri.renderers.support.ClassBreakInfo")],r);var s}(l.declared(s));r.ClassBreakInfo=i,r.default=i});