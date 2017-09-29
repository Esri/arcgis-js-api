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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/lang","./Symbol3D","../core/accessorSupport/decorators"],function(e,r,t,o,n,s,l){var i=function(e){function r(r){var t=e.call(this)||this;return t.type="line-3d",t}return t(r,e),s=r,r.prototype.clone=function(){return new s({styleOrigin:n.clone(this.styleOrigin),symbolLayers:n.clone(this.symbolLayers),thumbnail:n.clone(this.thumbnail)})},o([l.property()],r.prototype,"type",void 0),o([l.shared(["line","path","text"])],r.prototype,"_allowedLayerTypes",void 0),r=s=o([l.subclass("esri.symbols.LineSymbol3D")],r);var s}(l.declared(s));return i});