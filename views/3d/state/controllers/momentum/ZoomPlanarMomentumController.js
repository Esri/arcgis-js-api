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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/gl-matrix","./MomentumController","../../utils/navigationUtils","../../../support/mathUtils"],function(t,e,o,n,i,r,c){Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){function e(e,o,i){var r=t.call(this,e,1)||this;return r.momentum=o,r.zoomCenter=n.vec3f64.create(),n.vec3.copy(r.zoomCenter,i),r.constraintOptions.interactionDirection=n.vec3f64.create(),r}return o(e,t),e.prototype.momentumStep=function(t,e){n.vec3.copy(this.constraintOptions.interactionDirection,e.eye);var o=this.momentum.valueDelta(0,t);r.applyZoomToPoint(e,this.zoomCenter,o,this.view.state.constraints.minimumPoiDistance),this.constraintOptions.interactionDirection=c.directionFromTo(this.constraintOptions.interactionDirection,e.eye,this.constraintOptions.interactionDirection)},e}(i.MomentumController);e.ZoomPlanarMomentumController=s});