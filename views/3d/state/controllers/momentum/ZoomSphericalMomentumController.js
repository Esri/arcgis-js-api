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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../camera/constraintUtils","../../../lib/gl-matrix","./MomentumController","../../utils/navigationUtils"],function(e,t,n,r,i,o,s){Object.defineProperty(t,"__esModule",{value:!0});var c=function(e){function t(t,n,r,o,s){var c=e.call(this,t,1)||this;return c.momentum=n,c.screenCenter=i.vec2d.create(),c.sceneCenter=i.vec3d.create(),c.tmpSceneCenter=i.vec3d.create(),c.tmpZoomAxis=i.vec3d.create(),c.sphere={center:i.vec3d.create(),radius:0},i.vec2d.set(r,c.screenCenter),i.vec3d.set(o,c.sceneCenter),c.sphere.radius=s,c}return n(t,e),t.prototype.momentumStep=function(e,t){var n=this.momentum.valueDelta(0,e);s.applyZoomOnSphere(this.sphere,t,n),this.constraintOptions.interactionType=1,r.applyAll(this.view,t,this.constraintOptions),s.sphereOrSilhouettePointFromScreenPoint(this.sphere,t,this.screenCenter,this.tmpSceneCenter);var i=s.rotationAndAxisFromPoints(this.sceneCenter,this.tmpSceneCenter,this.tmpZoomAxis);s.applyRotation(t,this.sphere.center,this.tmpZoomAxis,i),this.constraintOptions.interactionType=4},t}(o.MomentumController);t.ZoomSphericalMomentumController=c});