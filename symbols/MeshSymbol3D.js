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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/lang","../core/Collection","./Symbol3D","./FillSymbol3DLayer","../core/accessorSupport/decorators"],function(e,r,o,t,l,s,n,y,p){var i=s.ofType({base:null,key:"type",typeMap:{fill:y}}),c=function(e){function r(r){var o=e.call(this)||this;return o.symbolLayers=new i,o.type="mesh-3d",o}return o(r,e),s=r,r.prototype.clone=function(){return new s({styleOrigin:l.clone(this.styleOrigin),symbolLayers:l.clone(this.symbolLayers),thumbnail:l.clone(this.thumbnail)})},t([p.property({type:i})],r.prototype,"symbolLayers",void 0),t([p.property()],r.prototype,"type",void 0),r=s=t([p.subclass("esri.symbols.MeshSymbol3D")],r);var s}(p.declared(n));return c});