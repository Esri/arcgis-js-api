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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./Symbol3DLayer","./edges/utils"],function(e,t,o,r,s,i,a){return function(e){function t(t){var o=e.call(this)||this;return o.type="extrude",o.size=void 0,o.material=null,o.castShadows=!0,o.edges=null,o}o(t,e),i=t,t.prototype.clone=function(){return new i({edges:this.edges&&this.edges.clone(),enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),material:this.material&&this.material.clone(),castShadows:this.castShadows,size:this.size})};var i;return r([s.enumeration.serializable()({Extrude:"extrude"})],t.prototype,"type",void 0),r([s.property({type:Number,json:{write:!0}})],t.prototype,"size",void 0),r([s.property()],t.prototype,"material",void 0),r([s.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],t.prototype,"castShadows",void 0),r([s.property(a.symbol3dEdgesProperty)],t.prototype,"edges",void 0),t=i=r([s.subclass("esri.symbols.ExtrudeSymbol3DLayer")],t)}(s.declared(i))});