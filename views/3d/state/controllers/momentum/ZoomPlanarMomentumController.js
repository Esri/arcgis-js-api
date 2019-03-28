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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","./MomentumController","../../utils/navigationUtils","../../../support/mathUtils"],function(t,e,o,i,n,r,c,s){Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(e,o,r){var c=t.call(this,e,1)||this;return c.momentum=o,c.zoomCenter=n.vec3f64.create(),i.vec3.copy(c.zoomCenter,r),c.constraintOptions.interactionDirection=n.vec3f64.create(),c}return o(e,t),e.prototype.momentumStep=function(t,e){i.vec3.copy(this.constraintOptions.interactionDirection,e.eye);var o=this.momentum.valueDelta(0,t);c.applyZoomToPoint(e,this.zoomCenter,o,this.view.state.constraints.minimumPoiDistance),this.constraintOptions.interactionDirection=s.directionFromTo(this.constraintOptions.interactionDirection,e.eye,this.constraintOptions.interactionDirection)},e}(r.MomentumController);e.ZoomPlanarMomentumController=a});