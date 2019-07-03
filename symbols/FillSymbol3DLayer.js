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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/maybe","../core/accessorSupport/decorators","./Symbol3DLayer","./edges/utils","./support/colors","./support/Symbol3DFillMaterial","./support/Symbol3DOutline"],function(e,o,t,l,r,i,n,s,a,p,u){return function(e){function o(o){var t=e.call(this)||this;return t.type="fill",t.material=null,t.castShadows=!0,t.outline=null,t.edges=null,t}t(o,e),n=o,o.prototype.clone=function(){return new n({edges:r.isSome(this.edges)?this.edges.clone():null,enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),material:r.isSome(this.material)?this.material.clone():null,castShadows:this.castShadows,outline:r.isSome(this.outline)?this.outline.clone():null})},o.fromSimpleFillSymbol=function(e){return new n({material:{color:(e.color||a.transparentWhite).clone()},outline:e.outline?new u.default({size:e.outline.width||0,color:(e.outline.color||a.white).clone()}):null})};var n;return l([i.enumeration.serializable()({Fill:"fill"})],o.prototype,"type",void 0),l([i.property({type:p.default,json:{write:!0}})],o.prototype,"material",void 0),l([i.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],o.prototype,"castShadows",void 0),l([i.property({type:u.default,json:{write:!0}})],o.prototype,"outline",void 0),l([i.property(s.symbol3dEdgesProperty)],o.prototype,"edges",void 0),o=n=l([i.subclass("esri.symbols.FillSymbol3DLayer")],o)}(i.declared(n))});