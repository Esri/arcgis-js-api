// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators","../../symbols/support/jsonUtils","../../symbols/support/typeUtils"],(function(e,r,t,o,p,s,l,i){Object.defineProperty(r,"__esModule",{value:!0});var n=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.label=null,r.symbol=null,r.value=null,r}return t(r,e),p=r,r.prototype.clone=function(){return new p({value:this.value,description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})},o([s.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o([s.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([s.property({types:i.rendererTypes,json:{origins:{"web-scene":{read:l.read,write:{target:{symbol:{types:i.rendererTypes3D}},writer:l.writeTarget}}},read:l.read,write:l.writeTarget}})],r.prototype,"symbol",void 0),o([s.property({type:String,json:{write:!0}})],r.prototype,"value",void 0),r=p=o([s.subclass("esri.renderers.support.UniqueValueInfo")],r);var p}(s.declared(p));r.UniqueValueInfo=n,r.default=n}));