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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/lang","./Symbol3D","../core/accessorSupport/decorators"],function(e,r,t,o,l,s,y){var n=function(e){function r(r){var t=e.call(this)||this;return t.type="polygon-3d",t}return t(r,e),s=r,r.prototype.clone=function(){return new s({styleOrigin:l.clone(this.styleOrigin),symbolLayers:l.clone(this.symbolLayers),thumbnail:l.clone(this.thumbnail)})},r.fromJSON=function(e){var r=new s;if(r.read(e),2===r.symbolLayers.length&&"fill"===r.symbolLayers.getItemAt(0).type&&"line"===r.symbolLayers.getItemAt(1).type){var t=r.symbolLayers.getItemAt(0),o=r.symbolLayers.getItemAt(1);!o.enabled||e.symbolLayers&&e.symbolLayers[1]&&e.symbolLayers[1].enable===!1||(t.outline={size:o.size,color:o.material.color}),r.symbolLayers.removeAt(1)}return r},o([y.property()],r.prototype,"type",void 0),o([y.shared(["extrude","fill","line","icon","object","text"])],r.prototype,"_allowedLayerTypes",void 0),r=s=o([y.subclass("esri.symbols.PolygonSymbol3D")],r);var s}(y.declared(s));return n});