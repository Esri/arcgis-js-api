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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/lang","./Symbol3D","../core/accessorSupport/decorators"],function(e,r,o,t,s,l,n){var i=c=function(e){function r(r){var o=e.call(this)||this;return o.type="mesh-symbol-3d",o}return o(r,e),r.prototype.clone=function(){return new c({styleOrigin:s.clone(this.styleOrigin),symbolLayers:s.clone(this.symbolLayers),thumbnail:s.clone(this.thumbnail)})},r}(n.declared(l));t([n.property()],i.prototype,"type",void 0),t([n.shared(["fill"])],i.prototype,"_allowedLayerTypes",void 0),i=c=t([n.subclass("esri.symbols.MeshSymbol3D")],i);var c;return i});