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

define(["require","exports","tslib","../../../../core/Accessor","../../../../core/Handles","../../../../core/accessorSupport/decorators","./disposeMembers"],(function(e,t,r,o,s,n,c){Object.defineProperty(t,"__esModule",{value:!0});var d=function(e){function t(t){var r=e.call(this,t)||this;return r.handles=new s,r}return r.__extends(t,e),t.prototype.destroy=function(){c.default(this,"handles")},r.__decorate([n.property({constructOnly:!0})],t.prototype,"renderCoordsHelper",void 0),r.__decorate([n.property({constructOnly:!0})],t.prototype,"surface",void 0),r.__decorate([n.property({constructOnly:!0})],t.prototype,"state",void 0),t=r.__decorate([n.subclass("esri.views.3d.support.PointOfInterest")],t)}(o);t.PointOfInterest=d,t.default=d}));