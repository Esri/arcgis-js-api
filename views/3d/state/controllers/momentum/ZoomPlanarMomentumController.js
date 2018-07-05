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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../lib/glMatrix","./MomentumController","../../utils/navigationUtils"],function(t,e,n,o,i,r){Object.defineProperty(e,"__esModule",{value:!0});var c=function(t){function e(e,n,i){var r=t.call(this,e,1)||this;return r.momentum=n,r.zoomCenter=o.vec3d.create(),o.vec3d.set(i,r.zoomCenter),r.constraintOptions.interactionDirection=o.vec3d.create(),r}return n(e,t),e.prototype.momentumStep=function(t,e){o.vec3d.set(e.eye,this.constraintOptions.interactionDirection);var n=this.momentum.valueDelta(0,t);r.applyZoomToPoint(e,this.zoomCenter,n,this.view.state.constraints.minimumPoiDistance),this.constraintOptions.interactionDirection=o.vec3d.direction(this.constraintOptions.interactionDirection,e.eye)},e}(i.MomentumController);e.ZoomPlanarMomentumController=c});