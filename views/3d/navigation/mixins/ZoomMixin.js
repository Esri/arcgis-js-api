// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../../../core/declare","../../lib/glMatrix"],function(t,i){var n=i.vec2d,e=i.vec3d,a=e.create(),o=!0,s=!1,r=.6,h=t([],{declaredClass:"esri.views.3d.navigation.mixins.ZoomMixin",type:"zoom",constructor:function(){this.normalizedAnchorPoint=n.create(),this._lastStepAnimationId=-1},begin:function(t){this.navigation.begin(this),n.set(t,this._dragBeginPoint),this.normalizeCoordinate(t,this.normalizedAnchorPoint);var i=this._toYDownCoord(this._dragBeginPoint);this.active=!0,this.emit("begin",i[0],i[1])},update:function(t){},end:function(t){this.active=!1;var i=this._toYDownCoord(this._dragBeginPoint);this.emit("end",i[0],i[1]),this.navigation.end(this)},stepScreen:function(t,i){this.active||(e.set(this.currentCamera.center,a),(o&&t>0||s&&0>t)&&(this.pickPointInScreen(i,a)||"local"!==this.navigation.view.viewingMode||this.pickFreePointInScreen(i,a)),this.step(Math.pow(r,t),a,i))},step:function(t,i,n){if(!this.active){this.navigation.begin(this),this.navigation.currentHasAlmostReachedTarget()||this.navigation.animationId===this._lastStepAnimationId?this.targetCamera.copyFrom(this.currentCamera):this.navigation.stop();var a=e.dist(i,this.targetCamera.center)>1e-6;this.stepAtPoint(t,i,n,a),this._lastStepAnimationId=this.navigation.animationId,this.navigation.end(this)}},stepAtPoint:function(t,i,n,e){},_toYDownCoord:function(t){return[t[0],this.currentCamera.height-t[1]]}});return h});