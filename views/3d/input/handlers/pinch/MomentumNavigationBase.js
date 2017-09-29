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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../navigation/Momentum"],function(t,e,i,o){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){this.pinchNavigation=t,this._helper=e,this.zoom={momentum:null,estimator:new o.ZoomMomentumEstimator(.05),enabled:!0},this.rotation={momentum:null,estimator:new o.RotationMomentumEstimator(.05,3,.05,.95),enabled:!0},this.pan={momentum:null,estimator:new o.ScreenspaceMomentumEstimator(.05,600,6,.82),enabled:!0},this._elapsedTime=0,this._active=!1}return t.prototype.destroy=function(){this.stop()},Object.defineProperty(t.prototype,"active",{get:function(){return this._active},enumerable:!0,configurable:!0}),t.prototype.doFrameUpdate=function(t){var e=.001*t;this._onUpdate(e)},t.prototype.stop=function(){this.pan.estimator.reset(),this.rotation.estimator.reset(),this.zoom.estimator.reset(),this._active=!1},t.prototype.initiate=function(){this._active||(this._elapsedTime=0,this.pan.momentum=null,this.zoom.momentum=null,this.rotation.momentum=null,this.zoom.enabled&&(this.zoom.momentum=this.zoom.estimator.evaluateMomentum()),!this.zoom.momentum&&this.rotation.enabled&&(this.rotation.momentum=this.rotation.estimator.evaluateMomentum()),this.zoom.momentum||this.rotation.momentum||!this.pan.enabled||(this.pan.momentum=this.pan.estimator.evaluateMomentum()),this._active=null!=(this.zoom.momentum||this.rotation.momentum||this.pan.momentum))},Object.defineProperty(t.prototype,"helper",{get:function(){return this._helper},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"view",{get:function(){return this.pinchNavigation.view},enumerable:!0,configurable:!0}),t.prototype._onUpdate=function(t){if(this.active){if(this.zoom.momentum&&this.zoom.momentum.isFinished(this._elapsedTime)&&(this.zoom.momentum=null),this.rotation.momentum&&this.rotation.momentum.isFinished(this._elapsedTime)&&(this.rotation.momentum=null),this.pan.momentum&&this.pan.momentum.isFinished(this._elapsedTime)&&(this.pan.momentum=null),!this.zoom.momentum&&!this.rotation.momentum&&!this.pan.momentum)return void this.stop();this.view.navigation.targetCamera.copyFrom(this.view.navigation.currentCamera),this.onUpdate(this._elapsedTime,t,this.view.navigation.targetCamera),this.pinchNavigation.applyNavigationConstraints(),this._elapsedTime+=t}},t}();e.MomentumNavigationBase=n});