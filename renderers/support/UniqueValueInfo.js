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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../symbols","../../core/JSONSupport","../../core/accessorSupport/decorators","../../symbols/support/jsonUtils"],function(e,r,t,o,s,l,i,n){Object.defineProperty(r,"__esModule",{value:!0});var p=function(e){function r(r){var t=e.call(this,r)||this;return t.description=null,t.label=null,t.symbol=null,t.value=null,t}t(r,e),l=r,r.prototype.clone=function(){return new l({value:this.value,description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})},r.prototype.getMeshHash=function(){var e=JSON.stringify(this.symbol&&this.symbol.toJSON());return this.value+"."+e};var l;return o([i.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o([i.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([i.property({types:s.symbolTypesRenderer,json:{origins:{"web-scene":{types:s.symbolTypesRenderer3D,read:n.read,write:n.writeTarget}},read:n.read,write:n.writeTarget}})],r.prototype,"symbol",void 0),o([i.property({type:String,json:{write:!0}})],r.prototype,"value",void 0),r=l=o([i.subclass("esri.renderers.support.UniqueValueInfo")],r)}(i.declared(l));r.UniqueValueInfo=p,r.default=p});