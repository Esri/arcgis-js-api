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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../ViewAnimation","../../../camera/constraintUtils","../AnimationController","../../../webgl-engine/lib/Camera"],(function(e,t,n,i,o,r,a){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t,n){var o=e.call(this,new i)||this;return o.view=t,o.beginCamera=new a.default,o.elapsedTimeSec=0,o.constraintOptions={selection:15,interactionType:4,interactionFactor:0,interactionStartCamera:new a.default,interactionDirection:null,tiltMode:0},o.constraintOptions.interactionType=n,o}return n(t,e),Object.defineProperty(t.prototype,"steppingFinished",{get:function(){return this.momentum.isFinished(this.elapsedTimeSec)},enumerable:!0,configurable:!0}),t.prototype.onControllerStart=function(t){this.beginCamera.copyFrom(t),this.constraintOptions.interactionStartCamera=this.beginCamera,e.prototype.onControllerStart.call(this,t)},t.prototype.stepController=function(e,t){t.copyViewFrom(this.beginCamera),this.elapsedTimeSec+=e,this.momentumStep(this.elapsedTimeSec,t),o.applyAll(this.view,t,this.constraintOptions)},t}(r.AnimationController);t.MomentumController=s}));