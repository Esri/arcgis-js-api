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

define(["require","exports","tslib","../../../../core/Evented","../../../../core/accessorSupport/decorators"],(function(e,r,t,o,p){Object.defineProperty(r,"__esModule",{value:!0});var i=function(e){function r(r){var t=e.call(this,r)||this;return t.tracking=!1,t.displaying=!1,t.isDraped=!1,t}return t.__extends(r,e),t.__decorate([p.property({constructOnly:!0})],r.prototype,"graphic",void 0),t.__decorate([p.property()],r.prototype,"tracking",void 0),t.__decorate([p.property()],r.prototype,"displaying",void 0),t.__decorate([p.property()],r.prototype,"isDraped",void 0),r=t.__decorate([p.subclass("esri.views.3d.layers.graphics.GraphicState")],r)}(o.EventedAccessor);r.GraphicState=i}));