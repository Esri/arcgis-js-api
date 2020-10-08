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

define(["require","exports","tslib","../../../../../core/accessorSupport/decorators","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","./MomentumController","../../utils/navigationUtils","../../../support/mathUtils"],(function(t,o,e,n,r,i,c,s,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.ZoomPlanarMomentumController=void 0;var l=function(t){function o(o){var e=t.call(this,o)||this;return e.interactionType=1,e.constraintOptions.interactionDirection=i.vec3f64.create(),e}return e.__extends(o,t),Object.defineProperty(o.prototype,"zoomCenter",{set:function(t){this._set("zoomCenter",i.vec3f64.clone(t))},enumerable:!1,configurable:!0}),o.prototype.momentumStep=function(t,o){r.vec3.copy(this.constraintOptions.interactionDirection,o.eye);var e=this.momentum.valueDelta(0,t);s.applyZoomToPoint(o,this.zoomCenter,e,this.view.state.constraints.minimumPoiDistance),this.constraintOptions.interactionDirection=a.directionFromTo(this.constraintOptions.interactionDirection,o.eye,this.constraintOptions.interactionDirection)},e.__decorate([n.property({constructOnly:!0})],o.prototype,"momentum",void 0),e.__decorate([n.property({constructOnly:!0})],o.prototype,"zoomCenter",null),o=e.__decorate([n.subclass("esri.views.3d.state.controllers.momentum.ZoomPlanarMomentumController")],o)}(c.MomentumController);o.ZoomPlanarMomentumController=l}));