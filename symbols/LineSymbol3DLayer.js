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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","./Symbol3DLayer","./support/materialUtils","../core/accessorSupport/decorators"],function(e,r,t,o,i,n,a){var l=p=function(e){function r(r){var t=e.call(this)||this;return t.material=null,t.type="line",t.size=1,t}return t(r,e),r.prototype.clone=function(){return new p({enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),material:this.material&&this.material.clone(),size:this.size})},r}(a.declared(i));o([a.property()],l.prototype,"material",void 0),o([a.property()],l.prototype,"type",void 0),o([a.property(n.screenSizeProperty)],l.prototype,"size",void 0),l=p=o([a.subclass("esri.symbols.LineSymbol3DLayer")],l);var p;return l});