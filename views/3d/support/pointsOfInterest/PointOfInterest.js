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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators","../../../../core/HandleRegistry","../../../../core/Accessor","./disposeMembers"],function(e,r,t,o,s,n,p,c){Object.defineProperty(r,"__esModule",{value:!0});var d=function(e){function r(r){var t=e.call(this)||this;return t.handles=new n,t}return t(r,e),r.prototype.destroy=function(){c["default"](this,"handles")},o([s.property({constructOnly:!0})],r.prototype,"renderCoordsHelper",void 0),o([s.property({constructOnly:!0})],r.prototype,"surface",void 0),o([s.property({constructOnly:!0})],r.prototype,"state",void 0),r=o([s.subclass("esri.views.3d.support.PointOfInterest")],r)}(s.declared(p));r.PointOfInterest=d,r["default"]=d});