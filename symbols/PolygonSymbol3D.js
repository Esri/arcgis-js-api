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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/lang","./Symbol3D","../core/accessorSupport/decorators"],function(e,r,o,t,s,l,y){var n=a=function(e){function r(r){var o=e.call(this)||this;return o.type="polygon-symbol-3d",o}return o(r,e),r.prototype.clone=function(){return new a({styleOrigin:s.clone(this.styleOrigin),symbolLayers:s.clone(this.symbolLayers),thumbnail:s.clone(this.thumbnail)})},r.fromJSON=function(e){var r=new a;if(r.read(e),2===r.symbolLayers.length&&"Fill"===r.symbolLayers.getItemAt(0).type&&"Line"===r.symbolLayers.getItemAt(1).type){var o=r.symbolLayers.getItemAt(0),t=r.symbolLayers.getItemAt(1);!t.enabled||e.symbolLayers&&e.symbolLayers[1]&&e.symbolLayers[1].enable===!1||(o.outline={size:t.size,color:t.material.color}),r.symbolLayers.removeAt(1)}return r},r}(y.declared(l));t([y.property()],n.prototype,"type",void 0),t([y.shared(["Extrude","Fill","Line","Icon","Object","Text"])],n.prototype,"_allowedLayerTypes",void 0),n=a=t([y.subclass("esri.symbols.PolygonSymbol3D")],n);var a;return n});