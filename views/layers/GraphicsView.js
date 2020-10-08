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

define(["require","exports","tslib","../../core/accessorSupport/decorators"],(function(e,r,t,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.GraphicsView=void 0,r.GraphicsView=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.graphics=null,r.renderer=null,r.view=null,r}return t.__extends(r,e),t.__decorate([o.property()],r.prototype,"graphics",void 0),t.__decorate([o.property()],r.prototype,"renderer",void 0),t.__decorate([o.property()],r.prototype,"updating",void 0),t.__decorate([o.property()],r.prototype,"view",void 0),r=t.__decorate([o.subclass("esri.views.layers.GraphicsView")],r)}(e)}}));