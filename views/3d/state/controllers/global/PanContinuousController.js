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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/mat4","../../../../../core/libs/gl-matrix-2/mat4f64","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../../camera/constraintUtils","../CameraController","../../../support/earthUtils","../../../support/mathUtils"],function(t,e,i,r,c,n,o,s,a,h,l){Object.defineProperty(e,"__esModule",{value:!0}),e.Direction={LEFT:1,RIGHT:2,FORWARD:4,BACKWARD:8,UP:16,DOWN:32};var u=function(t){function a(e){var i=t.call(this)||this;return i.view=e,i.directionStatus=0,i.direction=o.vec3f64.create(),i.tmpAxis=o.vec3f64.create(),i.radiusChange=0,i.velocity=0,i.tmpP1=o.vec3f64.create(),i.tmpTransf=c.mat4f64.create(),i}return i(a,t),Object.defineProperty(a.prototype,"isInteractive",{get:function(){return!0},enumerable:!0,configurable:!0}),a.prototype.addDirection=function(t){if(0===this.directionStatus&&n.vec3.set(this.direction,0,0,0),!(this.directionStatus&t)){if(this.directionStatus|=t,t&(e.Direction.LEFT|e.Direction.RIGHT|e.Direction.FORWARD|e.Direction.BACKWARD))this.computePanAxis(t,this.tmpAxis),n.vec3.add(this.direction,this.direction,this.tmpAxis);else{var i=this.directionStatus&(e.Direction.UP|e.Direction.DOWN);this.radiusChange=i===e.Direction.UP?1:i===e.Direction.DOWN?-1:0}this.velocity=this.computePanVelocity()}},a.prototype.removeDirection=function(t){if(this.directionStatus&=~t,0===this.directionStatus&&this.active)this.finishController();else if(t&(e.Direction.LEFT|e.Direction.RIGHT|e.Direction.FORWARD|e.Direction.BACKWARD))this.computePanAxis(t,this.tmpAxis),n.vec3.subtract(this.direction,this.direction,this.tmpAxis),n.vec3.length(this.direction)<.01&&n.vec3.set(this.direction,0,0,0);else{var i=this.directionStatus&(e.Direction.UP|e.Direction.DOWN);this.radiusChange=i===e.Direction.UP?1:i===e.Direction.DOWN?-1:0}},a.prototype.stepController=function(e,i){t.prototype.stepController.call(this,e,i);var c=this.velocity*e,o=!1;if(Math.abs(this.radiusChange)>0){var a=1+c*this.radiusChange,h=i.viewForward,l=n.vec3.normalize(this.tmpP1,i.center);(n.vec3.dot(h,l)>-.999||this.radiusChange<0)&&n.vec3.scale(i.center,i.center,a),n.vec3.scale(i.eye,i.eye,a),this.velocity=this.computePanVelocity(),o=!0}n.vec3.squaredLength(this.direction)>.01&&(r.mat4.identity(this.tmpTransf),r.mat4.rotate(this.tmpTransf,this.tmpTransf,c,this.direction),n.vec3.transformMat4(i.eye,i.eye,this.tmpTransf),n.vec3.transformMat4(i.center,i.center,this.tmpTransf),n.vec3.transformMat4(i.up,i.up,this.tmpTransf),o=!0),o&&s.applyAll(this.view,i,{selection:14,interactionType:4,interactionStartCamera:this.view.state.camera,interactionFactor:null,interactionDirection:null,tiltMode:0})},a.prototype.computePanAxis=function(t,i){var r=this.view.state.camera;n.vec3.subtract(i,r.center,r.eye),n.vec3.cross(i,i,r.up),t!==e.Direction.LEFT&&t!==e.Direction.RIGHT||(n.vec3.normalize(i,i),n.vec3.cross(i,i,r.center)),t!==e.Direction.RIGHT&&t!==e.Direction.FORWARD||n.vec3.negate(i,i),n.vec3.normalize(i,i)},a.prototype.computePanVelocity=function(){var t=this.view.state.camera,e=.5*Math.abs(n.vec3.length(t.eye)-h.earthRadius);return e=l.clamp(e,1,2*h.earthRadius),l.acos(1-e*e/(2*h.earthRadius*h.earthRadius))},a}(a.CameraController);e.PanContinuousController=u});