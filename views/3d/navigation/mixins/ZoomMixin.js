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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../../../core/declare","../../lib/glMatrix"],function(i,t){var n=t.vec2d,e=t.vec3d,o=e.create(),r=!0,a=!1,s=.6,h=i([],{declaredClass:"esri.views.3d.navigation.mixins.ZoomMixin",type:"zoom",constructor:function(){this.normalizedAnchorPoint=n.create()},begin:function(i){this.navigation.begin(this),n.set(i,this._dragBeginPoint),this.normalizeCoordinate(i,this.normalizedAnchorPoint);var t=this._toYDownCoord(this._dragBeginPoint);this.active=!0,this.emit("begin",t[0],t[1])},update:function(){},end:function(){this.active=!1;var i=this._toYDownCoord(this._dragBeginPoint);this.emit("end",i[0],i[1]),this.navigation.end(this)},stepScreen:function(i,t){this.active||(e.set(this.currentCamera.center,o),(r&&i>0||a&&0>i)&&(this.pickPointInScreen(t,o)||"local"!==this.navigation.view.viewingMode||this.pickFreePointInScreen(t,o)),this.step(Math.pow(s,i),o,t))},step:function(i,t,n){if(!this.active){this.navigation.begin(this),this.targetCamera.copyFrom(this.currentCamera);var o=e.dist(t,this.targetCamera.center)>1e-6;this.stepAtPoint(i,t,n,o),this.navigation.end(this)}},stepAtPoint:function(){},_toYDownCoord:function(i){return[i[0],this.currentCamera.height-i[1]]}});return h});