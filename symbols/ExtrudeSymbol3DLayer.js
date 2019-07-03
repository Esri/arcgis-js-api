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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/maybe","../core/accessorSupport/decorators","./Symbol3DLayer","./edges/utils","./support/Symbol3DMaterial"],function(e,t,o,r,s,i,a,l,n){return function(e){function t(t){var o=e.call(this)||this;return o.type="extrude",o.size=void 0,o.material=null,o.castShadows=!0,o.edges=null,o}o(t,e),a=t,t.prototype.clone=function(){return new a({edges:this.edges&&this.edges.clone(),enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),material:s.isSome(this.material)?this.material.clone():null,castShadows:this.castShadows,size:this.size})};var a;return r([i.enumeration.serializable()({Extrude:"extrude"})],t.prototype,"type",void 0),r([i.property({type:Number,json:{write:!0}})],t.prototype,"size",void 0),r([i.property({type:n.default,json:{write:!0}})],t.prototype,"material",void 0),r([i.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],t.prototype,"castShadows",void 0),r([i.property(l.symbol3dEdgesProperty)],t.prototype,"edges",void 0),t=a=r([i.subclass("esri.symbols.ExtrudeSymbol3DLayer")],t)}(i.declared(a))});