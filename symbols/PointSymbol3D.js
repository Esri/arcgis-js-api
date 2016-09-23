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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/lang","./Symbol3D","../core/accessorSupport/decorators"],function(e,o,r,t,s,p,c){var n=function(e){function o(o){e.call(this),this.type="point-symbol-3d"}return r(o,e),o.prototype.clone=function(){return new o({symbolLayers:s.clone(this.symbolLayers)})},t([c.property()],o.prototype,"type",void 0),t([c.shared(["Icon","Object","Text"])],o.prototype,"_allowedLayerTypes",void 0),o=t([c.subclass("esri.symbols.PointSymbol3D")],o)}(c.declared(p));return n});