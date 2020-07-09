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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../core/maybe","../core/accessorSupport/decorators","./Symbol3DLayer","./edges/utils","./support/colors","./support/Symbol3DFillMaterial","./support/Symbol3DOutline"],(function(e,t,o,l,r,i,n,s,a,u){return function(e){function t(t){var o=e.call(this,t)||this;return o.type="fill",o.material=null,o.castShadows=!0,o.outline=null,o.edges=null,o}var i;return o.__extends(t,e),i=t,t.prototype.clone=function(){return new i({edges:l.isSome(this.edges)?this.edges.clone():null,enabled:this.enabled,material:l.isSome(this.material)?this.material.clone():null,castShadows:this.castShadows,outline:l.isSome(this.outline)?this.outline.clone():null})},t.fromSimpleFillSymbol=function(e){return new i({material:{color:(e.color||s.transparentWhite).clone()},outline:e.outline?new u.default({size:e.outline.width||0,color:(e.outline.color||s.white).clone()}):null})},o.__decorate([r.enumeration({Fill:"fill"})],t.prototype,"type",void 0),o.__decorate([r.property({type:a.default,json:{write:!0}})],t.prototype,"material",void 0),o.__decorate([r.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],t.prototype,"castShadows",void 0),o.__decorate([r.property({type:u.default,json:{write:!0}})],t.prototype,"outline",void 0),o.__decorate([r.property(n.symbol3dEdgesProperty)],t.prototype,"edges",void 0),t=i=o.__decorate([r.subclass("esri.symbols.FillSymbol3DLayer")],t)}(i)}));