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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../camera/constraintUtils","../../../lib/glMatrix","../CameraController","../../../support/earthUtils","../../../support/mathUtils"],function(t,i,e,r,n,o,s,a){Object.defineProperty(i,"__esModule",{value:!0}),i.Direction={LEFT:1,RIGHT:2,FORWARD:4,BACKWARD:8,UP:16,DOWN:32};var c=n.vec3d,h=n.mat4d,l=function(t){function n(i){var e=t.call(this)||this;return e.view=i,e.directionStatus=0,e.direction=c.create(),e.tmpAxis=c.create(),e.radiusChange=0,e.velocity=0,e.tmpP1=c.create(),e.tmpTransf=h.create(),e}return e(n,t),Object.defineProperty(n.prototype,"isInteractive",{get:function(){return!0},enumerable:!0,configurable:!0}),n.prototype.addDirection=function(t){if(0===this.directionStatus&&c.set3(0,0,0,this.direction),!(this.directionStatus&t)){if(this.directionStatus|=t,t&(i.Direction.LEFT|i.Direction.RIGHT|i.Direction.FORWARD|i.Direction.BACKWARD))this.computePanAxis(t,this.tmpAxis),c.add(this.direction,this.tmpAxis);else{var e=this.directionStatus&(i.Direction.UP|i.Direction.DOWN);this.radiusChange=e===i.Direction.UP?1:e===i.Direction.DOWN?-1:0}this.velocity=this.computePanVelocity()}},n.prototype.removeDirection=function(t){if(this.directionStatus&=~t,0===this.directionStatus&&this.active)this.finishController();else if(t&(i.Direction.LEFT|i.Direction.RIGHT|i.Direction.FORWARD|i.Direction.BACKWARD))this.computePanAxis(t,this.tmpAxis),c.subtract(this.direction,this.tmpAxis),c.length(this.direction)<.01&&c.set3(0,0,0,this.direction);else{var e=this.directionStatus&(i.Direction.UP|i.Direction.DOWN);this.radiusChange=e===i.Direction.UP?1:e===i.Direction.DOWN?-1:0}},n.prototype.stepController=function(i,e){t.prototype.stepController.call(this,i,e);var n=this.velocity*i,o=!1;if(Math.abs(this.radiusChange)>0){var s=1+n*this.radiusChange,a=e.viewForward,l=c.normalize(e.center,this.tmpP1);(c.dot(a,l)>-.999||this.radiusChange<0)&&c.scale(e.center,s),c.scale(e.eye,s),this.velocity=this.computePanVelocity(),o=!0}c.length2(this.direction)>.01&&(h.identity(this.tmpTransf),h.rotate(this.tmpTransf,n,this.direction),h.multiplyVec3(this.tmpTransf,e.eye),h.multiplyVec3(this.tmpTransf,e.center),h.multiplyVec3(this.tmpTransf,e.up),o=!0),o&&r.applyAll(this.view,e,{selection:14,interactionType:4,interactionStartCamera:this.view.state.camera,interactionFactor:null,interactionDirection:null})},n.prototype.computePanAxis=function(t,e){var r=this.view.state.camera;c.subtract(r.center,r.eye,e),c.cross(e,r.up),t!==i.Direction.LEFT&&t!==i.Direction.RIGHT||(c.normalize(e),c.cross(e,r.center)),t!==i.Direction.RIGHT&&t!==i.Direction.FORWARD||c.negate(e),c.normalize(e)},n.prototype.computePanVelocity=function(){var t=this.view.state.camera,i=.5*Math.abs(c.length(t.eye)-s.earthRadius);return i=a.clamp(i,1,2*s.earthRadius),a.acos(1-i*i/(2*s.earthRadius*s.earthRadius))},n}(o.CameraController);i.PanContinuousController=l});