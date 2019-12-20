// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/screenUtils","../../../../../core/libs/gl-matrix-2/vec2","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../camera/constraintUtils","./MomentumController","../../utils/navigationUtils","../../../support/geometryUtils"],function(e,t,r,n,i,o,s,c,p,l,a){Object.defineProperty(t,"__esModule",{value:!0});var m=function(e){function t(t,r,c,p,l){var m=e.call(this,t,1)||this;return m.momentum=r,m.screenCenter=n.createScreenPointArray(),m.sceneCenter=s.vec3f64.create(),m.tmpSceneCenter=s.vec3f64.create(),m.tmpZoomAxisAngle=a.axisAngle.create(),m.sphere=a.sphere.create(),i.vec2.copy(m.screenCenter,c),o.vec3.copy(m.sceneCenter,p),m.sphere.radius=l,m}return r(t,e),t.prototype.momentumStep=function(e,t){var r=this.momentum.valueDelta(0,e);l.applyZoomOnSphere(this.sphere,t,r),this.constraintOptions.interactionType=1,c.applyAll(this.view,t,this.constraintOptions),l.sphereOrPlanePointFromScreenPoint(this.sphere,t,this.screenCenter,this.tmpSceneCenter),a.axisAngle.fromPoints(this.sceneCenter,this.tmpSceneCenter,this.tmpZoomAxisAngle),l.applyRotation(t,this.sphere.center,this.tmpZoomAxisAngle),this.constraintOptions.interactionType=4},t}(p.MomentumController);t.ZoomSphericalMomentumController=m});