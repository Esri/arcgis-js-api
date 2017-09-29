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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor"],function(e,r,t,o,p,a){var s=function(e){function r(r){var t=e.call(this,r)||this;return t.extraParameters=null,t.outSpatialReference=null,t.template=null,t.view=null,t}return t(r,e),o([p.property()],r.prototype,"extraParameters",void 0),o([p.property()],r.prototype,"outSpatialReference",void 0),o([p.property()],r.prototype,"template",void 0),o([p.property()],r.prototype,"view",void 0),r=o([p.subclass("esri.tasks.support.PrintParameters")],r)}(p.declared(a));return s});