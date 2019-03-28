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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/kebabDictionary","../../core/urlUtils","../../core/accessorSupport/decorators"],function(e,r,t,o,i,a,c,p){Object.defineProperty(r,"__esModule",{value:!0});var n=a.strict()({circle:"circle",square:"square",cross:"cross",x:"x",kite:"kite",triangle:"triangle"}),s=function(e){function r(r){return e.call(this,r)||this}t(r,e),i=r,r.prototype.readHref=function(e,r,t){return e?c.fromJSON(e,t):r.dataURI},r.prototype.writeHref=function(e,r,t,o){e&&(c.isDataProtocol(e)?r.dataURI=e:(r.href=c.toJSON(e,o),c.isAbsolute(r.href)&&(r.href=c.normalize(r.href))))},r.prototype.clone=function(){return new i({href:this.href,primitive:this.primitive})};var i;return o([p.property({type:String,json:{write:!0,read:{source:["href","dataURI"]}}})],r.prototype,"href",void 0),o([p.reader("href")],r.prototype,"readHref",null),o([p.writer("href",{href:{type:String},dataURI:{type:String}})],r.prototype,"writeHref",null),o([p.enumeration.serializable()(n)],r.prototype,"primitive",void 0),r=i=o([p.subclass("esri.symbols.support.IconSymbol3DLayerResource")],r)}(p.declared(i));r.IconSymbol3DLayerResource=s,r.defaultPrimitive="circle",r.default=s});