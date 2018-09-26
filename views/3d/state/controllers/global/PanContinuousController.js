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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../camera/constraintUtils","../../../lib/gl-matrix","../CameraController","../../../support/earthUtils","../../../support/mathUtils"],function(t,e,i,r,n,c,o,a){Object.defineProperty(e,"__esModule",{value:!0}),e.Direction={LEFT:1,RIGHT:2,FORWARD:4,BACKWARD:8,UP:16,DOWN:32};var s=function(t){function c(e){var i=t.call(this)||this;return i.view=e,i.directionStatus=0,i.direction=n.vec3d.create(),i.tmpAxis=n.vec3d.create(),i.radiusChange=0,i.velocity=0,i.tmpP1=n.vec3d.create(),i.tmpTransf=n.mat4d.create(),i}return i(c,t),Object.defineProperty(c.prototype,"isInteractive",{get:function(){return!0},enumerable:!0,configurable:!0}),c.prototype.addDirection=function(t){if(0===this.directionStatus&&n.vec3d.set3(0,0,0,this.direction),!(this.directionStatus&t)){if(this.directionStatus|=t,t&(e.Direction.LEFT|e.Direction.RIGHT|e.Direction.FORWARD|e.Direction.BACKWARD))this.computePanAxis(t,this.tmpAxis),n.vec3d.add(this.direction,this.tmpAxis);else{var i=this.directionStatus&(e.Direction.UP|e.Direction.DOWN);this.radiusChange=i===e.Direction.UP?1:i===e.Direction.DOWN?-1:0}this.velocity=this.computePanVelocity()}},c.prototype.removeDirection=function(t){if(this.directionStatus&=~t,0===this.directionStatus&&this.active)this.finishController();else if(t&(e.Direction.LEFT|e.Direction.RIGHT|e.Direction.FORWARD|e.Direction.BACKWARD))this.computePanAxis(t,this.tmpAxis),n.vec3d.subtract(this.direction,this.tmpAxis),n.vec3d.length(this.direction)<.01&&n.vec3d.set3(0,0,0,this.direction);else{var i=this.directionStatus&(e.Direction.UP|e.Direction.DOWN);this.radiusChange=i===e.Direction.UP?1:i===e.Direction.DOWN?-1:0}},c.prototype.stepController=function(e,i){t.prototype.stepController.call(this,e,i);var c=this.velocity*e,o=!1;if(Math.abs(this.radiusChange)>0){var a=1+c*this.radiusChange,s=i.viewForward,d=n.vec3d.normalize(i.center,this.tmpP1);(n.vec3d.dot(s,d)>-.999||this.radiusChange<0)&&n.vec3d.scale(i.center,a),n.vec3d.scale(i.eye,a),this.velocity=this.computePanVelocity(),o=!0}n.vec3d.length2(this.direction)>.01&&(n.mat4d.identity(this.tmpTransf),n.mat4d.rotate(this.tmpTransf,c,this.direction),n.mat4d.multiplyVec3(this.tmpTransf,i.eye),n.mat4d.multiplyVec3(this.tmpTransf,i.center),n.mat4d.multiplyVec3(this.tmpTransf,i.up),o=!0),o&&r.applyAll(this.view,i,{selection:14,interactionType:4,interactionStartCamera:this.view.state.camera,interactionFactor:null,interactionDirection:null,tiltMode:0})},c.prototype.computePanAxis=function(t,i){var r=this.view.state.camera;n.vec3d.subtract(r.center,r.eye,i),n.vec3d.cross(i,r.up),t!==e.Direction.LEFT&&t!==e.Direction.RIGHT||(n.vec3d.normalize(i),n.vec3d.cross(i,r.center)),t!==e.Direction.RIGHT&&t!==e.Direction.FORWARD||n.vec3d.negate(i),n.vec3d.normalize(i)},c.prototype.computePanVelocity=function(){var t=this.view.state.camera,e=.5*Math.abs(n.vec3d.length(t.eye)-o.earthRadius);return e=a.clamp(e,1,2*o.earthRadius),a.acos(1-e*e/(2*o.earthRadius*o.earthRadius))},c}(c.CameraController);e.PanContinuousController=s});