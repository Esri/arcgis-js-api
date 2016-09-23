// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/urlUtils","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(e,r,t,o,p,i,n){var u=function(e){function r(){e.apply(this,arguments)}return t(r,e),r.prototype.readHref=function(e,r,t){return p.read(e,t)},r.prototype.writeHref=function(e,r,t){e&&(r.href=p.write(e,t))},r.prototype.clone=function(){return new r({href:this.href,primitive:this.primitive})},o([n.property({json:{writable:!0}})],r.prototype,"href",void 0),o([n.read("href")],r.prototype,"readHref",null),o([n.write("href")],r.prototype,"writeHref",null),o([n.property({json:{writable:!0}})],r.prototype,"primitive",void 0),r=o([n.subclass("esri.symbols.support.Symbol3DResource")],r)}(n.declared(i));r.Symbol3DResource=u,Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=u});