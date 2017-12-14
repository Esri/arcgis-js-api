// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../PointToPointAnimationController","../../../camera/constraintUtils","../../../lib/glMatrix","../../utils/navigationUtils","../../../webgl-engine/lib/Camera","../../../../animation/easing"],function(t,e,i,n,r,a,o,s,c){Object.defineProperty(e,"__esModule",{value:!0});var p=.6,h=4,m=function(t){function e(e,i,n){var r=t.call(this,e.state,i,"interaction"===n?null:void 0)||this;return r.view=e,r.mode=n,r.zoomLocation=a.vec3d.create(),r.tmpCamera=new s,r.panAxis=a.vec3d.create(),r.tmpViewDir=a.vec3d.create(),r.targetOnSphere=a.vec3d.create(),r.constraintOptions={selection:7,interactionType:1,interactionFactor:null,interactionStartCamera:new s,interactionDirection:null},r.sphere={center:a.vec3d.create(),radius:0},r}return i(e,t),Object.defineProperty(e.prototype,"isInteractive",{get:function(){return"interaction"===this.mode},enumerable:!0,configurable:!0}),e.prototype.zoomStep=function(t,e){if(this.active){var i=this.view.state,n=this.constraintOptions.interactionStartCamera;this.animation.finished?n.copyFrom(i.camera):this.animation.cameraAt(1,n);var r=!1;t>0&&this.pickingHelper.pickPointInScreen(e,this.zoomLocation)&&(r=!0),this.tmpCamera.copyFrom(i.camera),r||(this.pickingHelper.pickRaySegment(this.tmpCamera.eye,this.tmpCamera.center,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:a.vec3d.set(this.tmpCamera.center,this.zoomLocation));var o=Math.pow(p,t);this.updateCamera(this.tmpCamera,o,this.zoomLocation,e),this.begin(this.tmpCamera)}},e.prototype.animationSettings=function(){return{apex:null,duration:.6,easing:c.outExpo}},e.prototype.updateCamera=function(t,e,i,n){this.sphere.radius=a.vec3d.length(i),a.vec3d.subtract(t.center,t.eye,this.tmpViewDir);var s=a.vec3d.length(this.tmpViewDir),c=s*e,p=1>=e;if(p&&h>c&&(c=h,e=c/s),!(Math.abs(s-c)<1e-6)){var m=a.vec3d.length(t.center);if(this.sphere.radius!==m){var l=this.sphere.radius+e*(m-this.sphere.radius);a.vec3d.scale(t.center,l/m)}if(a.vec3d.scale(this.tmpViewDir,-e),a.vec3d.add(t.center,this.tmpViewDir,t.eye),r.applyAll(this.view,t,this.constraintOptions),a.vec3d.dist2(i,t.center)>1e-12&&o.intersectSphereFromScreenPoint(this.sphere,t,n,this.targetOnSphere)){var d=o.rotationAndAxisFromPoints(i,this.targetOnSphere,this.panAxis);o.applyRotation(t,this.sphere.center,this.panAxis,d)}r.applySurfaceCollision(this.view,t)}},e}(n.PointToPointAnimationController);e.ZoomStepController=m});