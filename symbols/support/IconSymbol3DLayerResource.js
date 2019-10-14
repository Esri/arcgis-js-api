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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/jsonMap","../../core/JSONSupport","../../core/urlUtils","../../core/accessorSupport/decorators"],function(e,r,t,o,i,p,a,c){Object.defineProperty(r,"__esModule",{value:!0});var s=i.strict()({circle:"circle",square:"square",cross:"cross",x:"x",kite:"kite",triangle:"triangle"}),n=function(e){function r(r){return e.call(this,r)||this}t(r,e),i=r,r.prototype.readHref=function(e,r,t){return e?a.fromJSON(e,t):r.dataURI},r.prototype.writeHref=function(e,r,t,o){e&&(a.isDataProtocol(e)?r.dataURI=e:(r.href=a.toJSON(e,o),a.isAbsolute(r.href)&&(r.href=a.normalize(r.href))))},r.prototype.clone=function(){return new i({href:this.href,primitive:this.primitive})};var i;return o([c.property({type:String,json:{write:!0,read:{source:["href","dataURI"]}}})],r.prototype,"href",void 0),o([c.reader("href")],r.prototype,"readHref",null),o([c.writer("href",{href:{type:String},dataURI:{type:String}})],r.prototype,"writeHref",null),o([c.enumeration.serializable()(s)],r.prototype,"primitive",void 0),r=i=o([c.subclass("esri.symbols.support.IconSymbol3DLayerResource")],r)}(c.declared(p.JSONSupport));r.IconSymbol3DLayerResource=n,r.defaultPrimitive="circle",r.default=n});