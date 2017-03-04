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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/screenUtils","./Symbol3DLayer","../core/accessorSupport/decorators"],function(e,r,t,o,i,s,a){var p=n=function(e){function r(r){var t=e.call(this)||this;return t.material=null,t.type="Line",t.size=1,t}return t(r,e),r.prototype.clone=function(){return new n({enabled:this.enabled,material:this.material&&this.material.clone(),size:this.size})},r}(a.declared(s));o([a.property()],p.prototype,"material",void 0),o([a.property()],p.prototype,"type",void 0),o([a.property({json:{write:!0}}),a.cast(i.toPt)],p.prototype,"size",void 0),p=n=o([a.subclass("esri.symbols.LineSymbol3DLayer")],p);var n;return p});