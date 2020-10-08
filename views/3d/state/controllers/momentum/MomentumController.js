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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../core/accessorSupport/decorators","../../../../ViewAnimation","../../../camera/constraintUtils","../AnimationController","../../../webgl-engine/lib/Camera"],(function(t,e,i,n,o,r,a,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MomentumController=void 0;var l=function(t){function e(e){var i=t.call(this,e)||this;return i.view=null,i.beginCamera=new s.default,i.elapsedTimeSec=0,i.constraintOptions={selection:15,interactionType:4,interactionFactor:0,interactionStartCamera:new s.default,interactionDirection:null,tiltMode:0},i}return i.__extends(e,t),e.prototype.initialize=function(){this.constraintOptions.interactionType=this.interactionType,this.viewAnimation=new o},Object.defineProperty(e.prototype,"steppingFinished",{get:function(){return this.momentum.isFinished(this.elapsedTimeSec)},enumerable:!1,configurable:!0}),e.prototype.onControllerStart=function(e){this.beginCamera.copyFrom(e),this.constraintOptions.interactionStartCamera=this.beginCamera,t.prototype.onControllerStart.call(this,e)},e.prototype.stepController=function(t,e){e.copyViewFrom(this.beginCamera),this.elapsedTimeSec+=t,this.momentumStep(this.elapsedTimeSec,e),r.applyAll(this.view,e,this.constraintOptions)},i.__decorate([n.property({constructOnly:!0})],e.prototype,"view",void 0),e=i.__decorate([n.subclass("esri.views.3d.state.controllers.momentum.MomentumController")],e)}(a.AnimationController);e.MomentumController=l}));