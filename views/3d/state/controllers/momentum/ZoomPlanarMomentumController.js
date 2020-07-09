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

define(["require","exports","tslib","../../../../../core/accessorSupport/decorators","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","./MomentumController","../../utils/navigationUtils","../../../support/mathUtils"],(function(t,e,o,n,r,i,c,s,a){Object.defineProperty(e,"__esModule",{value:!0});var l=function(t){function e(e){var o=t.call(this,e)||this;return o.interactionType=1,o.constraintOptions.interactionDirection=i.vec3f64.create(),o}return o.__extends(e,t),Object.defineProperty(e.prototype,"zoomCenter",{set:function(t){this._set("zoomCenter",i.vec3f64.clone(t))},enumerable:!0,configurable:!0}),e.prototype.momentumStep=function(t,e){r.vec3.copy(this.constraintOptions.interactionDirection,e.eye);var o=this.momentum.valueDelta(0,t);s.applyZoomToPoint(e,this.zoomCenter,o,this.view.state.constraints.minimumPoiDistance),this.constraintOptions.interactionDirection=a.directionFromTo(this.constraintOptions.interactionDirection,e.eye,this.constraintOptions.interactionDirection)},o.__decorate([n.property({constructOnly:!0})],e.prototype,"momentum",void 0),o.__decorate([n.property({constructOnly:!0})],e.prototype,"zoomCenter",null),e=o.__decorate([n.subclass("esri.views.3d.state.controllers.momentum.ZoomPlanarMomentumController")],e)}(c.MomentumController);e.ZoomPlanarMomentumController=l}));