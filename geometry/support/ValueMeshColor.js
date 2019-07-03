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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../Color","../../core/lang","../../core/Logger","../../core/accessorSupport/decorators","./MeshColor"],function(e,r,o,t,p,s,l,u,a){var n=l.getLogger("esri.geometry.support.ValueMeshColor");return function(e){function r(r){var o=e.call(this)||this;return o.type="value",o.value=null,n.warn("esri/geometry/support/ValueMeshColor is deprecated since version 4.11. Use esri/Color instead."),o}o(r,e),l=r,r.prototype.clone=function(){return new l({value:s.clone(this.value)})};var l;return t([u.property()],r.prototype,"type",void 0),t([u.property({type:p})],r.prototype,"value",void 0),r=l=t([u.subclass("esri.geometry.support.ValueMeshColor")],r)}(u.declared(a.default))});