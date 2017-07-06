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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../input/InputHandler","../../../lib/glMatrix","../../../webgl-engine/lib/Camera"],function(t,e,i,n,a,o){Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){function e(e,i){var n=t.call(this,"esri.views.3d.input.handlers.PinchTest",!0)||this;return n.view=e,n._helper=i,n._lastEndTimestamp=0,n._dragNavigationActive=!1,n._beginCamera=new o,n._tmpvec2d=a.vec2.create(),n.registerIncoming("drag",function(t){return n._handleDrag(t)}),n.registerIncoming("pointer-down",function(t){return n.stopMomentumNavigation()}),n.registerIncoming("two-finger-drag-vertical",function(t){return n.stopMomentumNavigation()}),n}return i(e,t),e.prototype.stopMomentumNavigation=function(){this.momentum&&this.momentum.stop()},e.prototype.destroy=function(){this.momentum&&this.momentum.destroy()},e.prototype.applyNavigationConstraints=function(){var t=this.view.navigation;t.fixTargetUpVector(),t.constrainTargetEyeByElevationAndMoveLookAt(),t.targetAndCurrentChanged()},Object.defineProperty(e.prototype,"beginCamera",{get:function(){return this._beginCamera},enumerable:!0,configurable:!0}),e.prototype.computePlanePoints=function(t,e,i,n,o){o.length=t.data.pointers.length;for(var r=this._tmpvec2d,s=0;s<o.length;s++){var g=t.data.pointers[s];r[0]=g[e].x,r[1]=this.view.height-g[e].y,void 0===o[s]&&(o[s]=a.vec3d.create()),this._helper.planar.intersectPlaneFromScreenPoint(i,n,r,o[s])}return o},e.prototype._handleDrag=function(t){if(1!==t.data.pointers.length||"mouse"!==t.data.pointers[0].currentEvent["native"].pointerType){var e=t.timestamp-this._lastEndTimestamp,i=40,n=this.momentum&&this.momentum.active&&i>e;switch(t.data.action){case"start":if(n)break;this._navigationBegin(t);break;case"update":if(n)break;this._dragNavigationActive?this._navigationUpdate(t):this._navigationBegin(t);break;case"end":this._dragNavigationActive&&(this._lastEndTimestamp=t.timestamp,this._navigationEnd(t))}t.stopPropagation()}},e.prototype._navigationBegin=function(t){var e=this.view.navigation;this.stopMomentumNavigation(),this._dragNavigationActive=!0,this.beginCamera.copyFrom(e.currentCamera),e.begin(this),this.onNavigationBegin(t)},e.prototype._navigationUpdate=function(t){var e=(t.data.currentState.timestamp-t.data.previousState.timestamp)/1e3;if(!(.002>e)){var i=this.view.navigation.targetCamera;i.eye=this.beginCamera.eye,i.center=this.beginCamera.center,i.up=this.beginCamera.up,this.onNavigationUpdate(t,i),this.applyNavigationConstraints()}},e.prototype._navigationEnd=function(t){this.onNavigationEnd(t),this._dragNavigationActive=!1,this.momentum&&this.momentum.initiate(),this.view.navigation.end(this)},e}(n.InputHandler);e.PinchNavigationBase=r});