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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Collection","../core/lang","../core/accessorSupport/decorators","./FillSymbol3DLayer","./Symbol3D"],(function(e,r,o,t,l,s,n,y,i){var p=l.ofType({base:null,key:"type",typeMap:{fill:y}});return function(e){function r(r){var o=e.call(this,r)||this;return o.symbolLayers=new p,o.type="mesh-3d",o}var l;return o(r,e),l=r,r.prototype.clone=function(){return new l({styleOrigin:s.clone(this.styleOrigin),symbolLayers:s.clone(this.symbolLayers),thumbnail:s.clone(this.thumbnail)})},t([n.property({type:p})],r.prototype,"symbolLayers",void 0),t([n.enumeration.serializable()({MeshSymbol3D:"mesh-3d"})],r.prototype,"type",void 0),r=l=t([n.subclass("esri.symbols.MeshSymbol3D")],r)}(n.declared(i))}));