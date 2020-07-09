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

define(["require","exports","tslib","../../../../../core/screenUtils","../../../../../core/accessorSupport/decorators","../../../../../core/libs/gl-matrix-2/vec3f64","../../../camera/constraintUtils","./MomentumController","../../utils/navigationUtils","../../../support/geometryUtils"],(function(e,t,r,n,o,i,s,c,p,l){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t){var r=e.call(this,t)||this;return r.interactionType=1,r.radius=0,r.tmpSceneCenter=i.vec3f64.create(),r.tmpZoomAxisAngle=l.axisAngle.create(),r.sphere=l.sphere.create(),r}return r.__extends(t,e),Object.defineProperty(t.prototype,"screenCenter",{set:function(e){this._set("screenCenter",n.createScreenPointArray(e[0],e[1]))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sceneCenter",{set:function(e){this._set("sceneCenter",i.vec3f64.clone(e))},enumerable:!0,configurable:!0}),t.prototype.initialize=function(){this.sphere.radius=this.radius},t.prototype.momentumStep=function(e,t){var r=this.momentum.valueDelta(0,e);p.applyZoomOnSphere(this.sphere,t,r),this.constraintOptions.interactionType=1,s.applyAll(this.view,t,this.constraintOptions),p.sphereOrPlanePointFromScreenPoint(this.sphere,t,this.screenCenter,this.tmpSceneCenter),l.axisAngle.fromPoints(this.sceneCenter,this.tmpSceneCenter,this.tmpZoomAxisAngle),p.applyRotation(t,this.sphere.center,this.tmpZoomAxisAngle),this.constraintOptions.interactionType=4},r.__decorate([o.property({constructOnly:!0})],t.prototype,"momentum",void 0),r.__decorate([o.property({constructOnly:!0})],t.prototype,"screenCenter",null),r.__decorate([o.property({constructOnly:!0})],t.prototype,"sceneCenter",null),r.__decorate([o.property({constructOnly:!0})],t.prototype,"radius",void 0),t=r.__decorate([o.subclass("esri.views.3d.state.controllers.momentum.ZoomSphericalMomentumController")],t)}(c.MomentumController);t.ZoomSphericalMomentumController=a}));