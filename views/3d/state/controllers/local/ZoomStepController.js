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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../PointToPointAnimationController","../../../camera/constraintUtils","../../../lib/glMatrix","../../../webgl-engine/lib/Camera","../../../../animation/easing"],function(t,e,i,n,a,o,r,c){Object.defineProperty(e,"__esModule",{value:!0});var s=.6,m=4,p=function(t){function e(e,i,n){var a=t.call(this,e.state,i,"interaction"===n?null:void 0)||this;return a.view=e,a.mode=n,a.zoomLocation=o.vec3d.create(),a.tmpCamera=new r,a.tmpRayDir=o.vec3d.create(),a.constraintOptions={selection:15,interactionType:1,interactionFactor:null,interactionStartCamera:new r,interactionDirection:null},a}return i(e,t),Object.defineProperty(e.prototype,"isInteractive",{get:function(){return"interaction"===this.mode},enumerable:!0,configurable:!0}),e.prototype.zoomStep=function(t,e){if(this.active){var i=this.view.state,n=this.constraintOptions.interactionStartCamera;this.animation.finished?n.copyFrom(i.camera):this.animation.cameraAt(1,n),this.tmpCamera.copyFrom(i.camera),t>0?this.pickingHelper.pickPointInScreen(e,this.zoomLocation)||this.pickingHelper.pickFreePointInScreen(e,this.zoomLocation):this.pickingHelper.pickRaySegment(this.tmpCamera.eye,this.tmpCamera.center,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:o.vec3d.set(this.tmpCamera.center,this.zoomLocation);var a=Math.pow(s,t);this.updateCamera(this.tmpCamera,a,this.zoomLocation,e),this.begin(this.tmpCamera)}},e.prototype.animationSettings=function(){return{apex:null,duration:.6,easing:c.outExpo}},e.prototype.updateCamera=function(t,e,i,n){o.vec3d.subtract(i,t.eye,this.tmpRayDir);var r=o.vec3d.length(this.tmpRayDir),c=r*e,s=1>=e;s&&m>c&&(c=m,e=c/r),Math.abs(r-c)<1e-6||(o.vec3d.scale(this.tmpRayDir,e),o.vec3d.subtract(i,this.tmpRayDir,t.eye),o.vec3d.lerp(t.center,i,1-e),a.applyAll(this.view,this.tmpCamera,this.constraintOptions))},e}(n.PointToPointAnimationController);e.ZoomStepController=p});