// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./Symbol3DLayer","./edges/utils"],function(e,t,r,o,s,i,p){return function(e){function t(t){var r=e.call(this)||this;return r.type="extrude",r.size=void 0,r.material=null,r.edges=null,r}r(t,e),i=t,t.prototype.clone=function(){return new i({edges:this.edges&&this.edges.clone(),enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),material:this.material&&this.material.clone(),size:this.size})};var i;return o([s.property()],t.prototype,"type",void 0),o([s.property({type:Number,json:{write:!0}})],t.prototype,"size",void 0),o([s.property()],t.prototype,"material",void 0),o([s.property(p.symbol3dEdgesProperty)],t.prototype,"edges",void 0),t=i=o([s.subclass("esri.symbols.ExtrudeSymbol3DLayer")],t)}(s.declared(i))});