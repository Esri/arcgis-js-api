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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./Symbol3DLayer","./edges/utils","./support/Symbol3DFillMaterial","./support/Symbol3DOutline"],function(e,t,o,l,r,i,n,s,p){return function(e){function t(t){var o=e.call(this)||this;return o.type="fill",o.material=null,o.outline=null,o.edges=null,o}o(t,e),i=t,t.prototype.clone=function(){return new i({edges:this.edges&&this.edges.clone(),enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),material:this.material&&this.material.clone(),outline:this.outline&&this.outline.clone()})};var i;return l([r.enumeration.serializable()({Fill:"fill"})],t.prototype,"type",void 0),l([r.property({type:s.default})],t.prototype,"material",void 0),l([r.property({type:p.default,json:{write:!0}})],t.prototype,"outline",void 0),l([r.property(n.symbol3dEdgesProperty)],t.prototype,"edges",void 0),t=i=l([r.subclass("esri.symbols.FillSymbol3DLayer")],t)}(r.declared(i))});