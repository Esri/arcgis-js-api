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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/gl-matrix","../../../camera/constraintUtils","./MomentumController","../../utils/navigationUtils","../../../support/geometryUtils"],function(e,t,n,r,i,o,s,c){Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(t,n,i,o,s){var p=e.call(this,t,1)||this;return p.momentum=n,p.screenCenter=r.vec2f64.create(),p.sceneCenter=r.vec3f64.create(),p.tmpSceneCenter=r.vec3f64.create(),p.tmpZoomAxisAngle=c.axisAngle.create(),p.sphere=c.sphere.create(),r.vec2.copy(p.screenCenter,i),r.vec3.copy(p.sceneCenter,o),p.sphere.radius=s,p}return n(t,e),t.prototype.momentumStep=function(e,t){var n=this.momentum.valueDelta(0,e);s.applyZoomOnSphere(this.sphere,t,n),this.constraintOptions.interactionType=1,i.applyAll(this.view,t,this.constraintOptions),s.sphereOrPlanePointFromScreenPoint(this.sphere,t,this.screenCenter,this.tmpSceneCenter),c.axisAngle.fromPoints(this.sceneCenter,this.tmpSceneCenter,this.tmpZoomAxisAngle),s.applyRotation(t,this.sphere.center,this.tmpZoomAxisAngle),this.constraintOptions.interactionType=4},t}(o.MomentumController);t.ZoomSphericalMomentumController=p});