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

define(["require","exports","tslib","../../core/jsonMap","../../core/JSONSupport","../../core/urlUtils","../../core/accessorSupport/decorators","../../support/persistableUrlUtils"],(function(e,r,t,o,i,s,a,c){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.defaultPrimitive=r.IconSymbol3DLayerResource=void 0;var n=o.strict()({circle:"circle",square:"square",cross:"cross",x:"x",kite:"kite",triangle:"triangle"}),p=function(e){function r(r){return e.call(this,r)||this}var o;return t.__extends(r,e),o=r,r.prototype.readHref=function(e,r,t){return e?c.fromJSON(e,t):r.dataURI},r.prototype.writeHref=function(e,r,t,o){e&&(s.isDataProtocol(e)?r.dataURI=e:(r.href=c.toJSON(e,o),s.isAbsolute(r.href)&&(r.href=s.normalize(r.href))))},r.prototype.clone=function(){return new o({href:this.href,primitive:this.primitive})},t.__decorate([a.property({type:String,json:{write:!0,read:{source:["href","dataURI"]}}})],r.prototype,"href",void 0),t.__decorate([a.reader("href")],r.prototype,"readHref",null),t.__decorate([a.writer("href",{href:{type:String},dataURI:{type:String}})],r.prototype,"writeHref",null),t.__decorate([a.enumeration(n)],r.prototype,"primitive",void 0),r=o=t.__decorate([a.subclass("esri.symbols.support.IconSymbol3DLayerResource")],r)}(i.JSONSupport);r.IconSymbol3DLayerResource=p,r.defaultPrimitive="circle",r.default=p}));