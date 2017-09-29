// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/urlUtils","../../core/JSONSupport","../../core/kebabDictionary","../../core/accessorSupport/decorators"],function(e,r,t,o,i,p,n,u){Object.defineProperty(r,"__esModule",{value:!0});var c=n({invertedCone:"inverted-cone"}),l=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),p=r,r.prototype.readHref=function(e,r,t){return i.read(e,t)},r.prototype.writeHref=function(e,r,t,o){e&&(r.href=i.write(e,o),i.isAbsolute(r.href)&&(r.href=i.normalize(r.href)))},r.prototype.readPrimitive=function(e){return c.fromJSON(e)},r.prototype.writePrimitive=function(e,r){r.primitive=c.toJSON(e)},r.prototype.clone=function(){return new p({href:this.href,primitive:this.primitive})},o([u.property({json:{write:!0}})],r.prototype,"href",void 0),o([u.reader("href")],r.prototype,"readHref",null),o([u.writer("href")],r.prototype,"writeHref",null),o([u.property({json:{write:!0}})],r.prototype,"primitive",void 0),o([u.reader("primitive")],r.prototype,"readPrimitive",null),o([u.writer("primitive")],r.prototype,"writePrimitive",null),r=p=o([u.subclass("esri.symbols.support.Symbol3DResource")],r);var p}(u.declared(p));r.Symbol3DResource=l,r["default"]=l});