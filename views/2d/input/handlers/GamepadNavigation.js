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

define(["require","exports","tslib","../../../../core/Handles","../../../../core/scheduling","../../../../core/watchUtils","../../viewpointUtils","../../../input/InputHandler","../../../navigation/gamepadAndKeyboardUtils"],(function(a,t,e,n,i,r,o,s,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GamepadNavigation=void 0;var d=function(a){function t(t){var e=a.call(this,!0)||this;return e.view=t,e.frameTask=null,e.watchHandles=new n,e.currentDevice=null,e.transformation={translation:[0,0,0],heading:0,tilt:0,zoom:0},e.handle=e.registerIncoming("gamepad",(function(a){return e.handleEvent(a)})),e.handle.pause(),e}return e.__extends(t,a),t.prototype.onInstall=function(t){var e=this;a.prototype.onInstall.call(this,t),this.watchHandles.add([r.init(this.view.navigation.gamepad,"enabled",(function(a){a?(e.handle.resume(),e.frameTask||(e.frameTask=i.addFrameTask({update:function(a){return e.frameUpdate(a.deltaTime)}}))):(e.handle.pause(),e.frameTask&&(e.frameTask.remove(),e.frameTask=null))}))])},t.prototype.onUninstall=function(){this.watchHandles.removeAll(),this.frameTask&&(this.frameTask.remove(),this.frameTask=null),a.prototype.onUninstall.call(this)},t.prototype.handleEvent=function(a){var t=this.view.navigation.gamepad.device;t&&a.data.device!==t||this.currentDevice&&this.currentDevice!==a.data.device||("end"===a.data.action?(this.currentDevice=null,l.resetTransformation(this.transformation)):(this.currentDevice=a.data.device,l.extractTransformation(a.data,this.view.navigation.gamepad,this.transformation)))},t.prototype.frameUpdate=function(a){var t=this.transformation;if(!l.isZeroTransformation(t)){var e=this.view.viewpoint.clone(),n=this.view.navigation.gamepad.velocityFactor,i=c*n*a;o.translateBy(e,e,[t.translation[0]*i,-t.translation[1]*i]);var r=1+t.translation[2]*h*a,s=this.view.constraints.rotationEnabled?-t.heading*v*a:0,d=this.view.size,u=[d[0]/2,d[1]];o.scaleAndRotateBy(e,e,r,s,u,d);var m=this.view.constraints.constrain(e,this.view.viewpoint);this.view.viewpoint=m}},t}(s.InputHandler);t.GamepadNavigation=d;var v=.06,c=.7,h=6e-4}));