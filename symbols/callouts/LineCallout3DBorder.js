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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../Color","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","../support/materialUtils"],function(r,e,o,t,l,c,n,p,s){Object.defineProperty(e,"__esModule",{value:!0});var u=function(r){function e(){var e=null!==r&&r.apply(this,arguments)||this;return e.color=new l("white"),e}o(e,r),c=e,e.prototype.clone=function(){return new c({color:n.clone(this.color)})};var c;return t([p.property(s.colorAndTransparencyProperty)],e.prototype,"color",void 0),e=c=t([p.subclass("esri.symbols.callouts.LineCallout3DBorder")],e)}(p.declared(c));e.LineCallout3DBorder=u,e.default=u});