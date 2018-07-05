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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/urlUtils","../../core/accessorSupport/decorators"],function(e,r,t,o,p,i,n){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}t(r,e),p=r,r.prototype.readHref=function(e,r,t){return e?i.read(e,t):r.dataURI},r.prototype.writeHref=function(e,r,t,o){e&&(i.isDataProtocol(e)?r.dataURI=e:(r.href=i.write(e,o),i.isAbsolute(r.href)&&(r.href=i.normalize(r.href))))},r.prototype.clone=function(){return new p({href:this.href,primitive:this.primitive})};var p;return o([n.property({type:String,json:{write:!0,read:{source:["href","dataURI"]}}})],r.prototype,"href",void 0),o([n.reader("href")],r.prototype,"readHref",null),o([n.writer("href",{href:{type:String},dataURI:{type:String}})],r.prototype,"writeHref",null),o([n.property({type:String,json:{write:!0}})],r.prototype,"primitive",void 0),r=p=o([n.subclass("esri.symbols.support.IconSymbol3DLayerResource")],r)}(n.declared(p));r.IconSymbol3DLayerResource=a,r.default=a});