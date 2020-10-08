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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../core/maybe","../core/accessorSupport/decorators","./Symbol3DLayer","./edges/utils","./support/Symbol3DMaterial"],(function(e,t,r,o,s,a,i,l){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.type="extrude",r.size=1,r.material=null,r.castShadows=!0,r.edges=null,r}var a;return r.__extends(t,e),a=t,t.prototype.clone=function(){return new a({edges:this.edges&&this.edges.clone(),enabled:this.enabled,material:o.isSome(this.material)?this.material.clone():null,castShadows:this.castShadows,size:this.size})},r.__decorate([s.enumeration({Extrude:"extrude"},{readOnly:!0})],t.prototype,"type",void 0),r.__decorate([s.property({type:Number,json:{write:{enabled:!0,isRequired:!0}},nonNullable:!0})],t.prototype,"size",void 0),r.__decorate([s.property({type:l.default,json:{write:!0}})],t.prototype,"material",void 0),r.__decorate([s.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],t.prototype,"castShadows",void 0),r.__decorate([s.property(i.symbol3dEdgesProperty)],t.prototype,"edges",void 0),t=a=r.__decorate([s.subclass("esri.symbols.ExtrudeSymbol3DLayer")],t)}(a)}));