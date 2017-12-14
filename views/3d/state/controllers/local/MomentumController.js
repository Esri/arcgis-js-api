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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../AnimationController","../../../webgl-engine/lib/Camera","../../../lib/glMatrix","../../utils/navigationUtils","../../../../navigation/Momentum","../../../camera/constraintUtils"],function(t,e,i,o,n,a,m,s,r){Object.defineProperty(e,"__esModule",{value:!0});var c=function(t){function e(e){var i=t.call(this)||this;return i.view=e,i.zoom={momentum:null,estimator:new s.ZoomMomentumEstimator(.05),enabled:!0},i.rotation={momentum:null,estimator:new s.RotationMomentumEstimator(.05,3,.05,.95),enabled:!0},i.pan={momentum:null,estimator:new s.ScreenspaceMomentumEstimator(.05,500,12,.82),enabled:!0},i._scaleState={center:a.vec3d.create()},i._rotationState={center:a.vec3d.create(),axis:a.vec3d.create()},i._panState={direction:a.vec3d.create()},i.elapsedTimeSec=0,i.zoomDirection=a.vec3d.create(),i.constraintOptions={selection:15,interactionType:0,interactionFactor:0,interactionStartCamera:new n,interactionDirection:null},i}return i(e,t),e.prototype.addPanValue=function(t,e,i,o){this.pan.estimator.add(e[0],e[1],i,.001*t),a.vec3d.set(o,this._panState.direction),a.vec3d.normalize(this._panState.direction)},e.prototype.addRotationValue=function(t,e,i,o){this.rotation.estimator.add(o,.001*t),a.vec3d.set(e,this._rotationState.center),a.vec3d.set(i,this._rotationState.axis)},e.prototype.addScaleValue=function(t,e,i){this.zoom.estimator.add(e,.001*t),a.vec3d.set(i,this._scaleState.center)},e.prototype.initiate=function(){return this.zoom.enabled&&(this.zoom.momentum=this.zoom.estimator.evaluateMomentum()),!this.zoom.momentum&&this.rotation.enabled&&(this.rotation.momentum=this.rotation.estimator.evaluateMomentum()),this.zoom.momentum||this.rotation.momentum||!this.pan.enabled||(this.pan.momentum=this.pan.estimator.evaluateMomentum()),null!=(this.zoom.momentum||this.rotation.momentum||this.pan.momentum)},Object.defineProperty(e.prototype,"steppingFinished",{get:function(){return this.zoom.momentum&&this.zoom.momentum.isFinished(this.elapsedTimeSec)&&(this.zoom.momentum=null),this.rotation.momentum&&this.rotation.momentum.isFinished(this.elapsedTimeSec)&&(this.rotation.momentum=null),this.pan.momentum&&this.pan.momentum.isFinished(this.elapsedTimeSec)&&(this.pan.momentum=null),!this.zoom.momentum&&!this.rotation.momentum&&!this.pan.momentum},enumerable:!0,configurable:!0}),e.prototype.onControllerStart=function(e){this.constraintOptions.interactionStartCamera.copyFrom(e),this.constraintOptions.interactionDirection=null,t.prototype.onControllerStart.call(this,e)},e.prototype.stepController=function(e,i){if(t.prototype.stepController.call(this,e,i),this.zoom.momentum){a.vec3d.normalize(a.vec3d.subtract(this._scaleState.center,i.eye,this.zoomDirection)),this.constraintOptions.interactionDirection=this.zoomDirection,this.constraintOptions.interactionType=1;var o=this.zoom.momentum.valueDelta(this.elapsedTimeSec,e);m.applyZoomToPoint(i,this._scaleState.center,o,this.view.state.constraints.minimumPoiDistance),r.applyAll(this.view,i,this.constraintOptions)}if(this.pan.momentum){a.vec3d.normalize(this._panState.direction);var n=a.vec3d.dist(this.pan.momentum.dataOldest,this.pan.momentum.dataNewest);n/=this.pan.momentum.dataTimeDelta,n*=this.pan.momentum.velocityFactor(this.elapsedTimeSec),a.vec3d.scale(this._panState.direction,n*e),a.vec3d.subtract(i.eye,this._panState.direction),a.vec3d.subtract(i.center,this._panState.direction),i.markViewDirty(),this.constraintOptions.interactionType=4,r.applyAll(this.view,i,this.constraintOptions)}if(this.rotation.momentum){var s=this.rotation.momentum.valueDelta(this.elapsedTimeSec,e);m.applyRotation(i,this._rotationState.center,this._rotationState.axis,s),this.constraintOptions.interactionType=2,r.applyAll(this.view,i,this.constraintOptions)}this.elapsedTimeSec+=e},e}(o.AnimationController);e.MomentumController=c});