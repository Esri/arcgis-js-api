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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../core/Handles","../../../../core/scheduling","../../../../core/watchUtils","../../viewpointUtils","../../../input/InputHandler","../../../navigation/gamepadAndKeyboardUtils"],(function(t,a,e,n,i,r,o,s,l){Object.defineProperty(a,"__esModule",{value:!0});var d=function(t){function a(a){var e=t.call(this,!0)||this;return e.view=a,e.frameTask=null,e.watchHandles=new n,e.currentDevice=null,e.transformation={translation:[0,0,0],heading:0,tilt:0,zoom:0},e.handle=e.registerIncoming("gamepad",(function(t){return e.handleEvent(t)})),e.handle.pause(),e}return e.__extends(a,t),a.prototype.onInstall=function(a){var e=this;t.prototype.onInstall.call(this,a),this.watchHandles.add([r.init(this.view.navigation.gamepad,"enabled",(function(t){t?(e.handle.resume(),e.frameTask||(e.frameTask=i.addFrameTask({update:function(t){return e.frameUpdate(t.deltaTime)}}))):(e.handle.pause(),e.frameTask&&(e.frameTask.remove(),e.frameTask=null))}))])},a.prototype.onUninstall=function(){this.watchHandles.removeAll(),this.frameTask&&(this.frameTask.remove(),this.frameTask=null),t.prototype.onUninstall.call(this)},a.prototype.handleEvent=function(t){var a=this.view.navigation.gamepad.device;a&&t.data.device!==a||this.currentDevice&&this.currentDevice!==t.data.device||("end"===t.data.action?(this.currentDevice=null,l.resetTransformation(this.transformation)):(this.currentDevice=t.data.device,l.extractTransformation(t.data,this.view.navigation.gamepad,this.transformation)))},a.prototype.frameUpdate=function(t){var a=this.transformation;if(!l.isZeroTransformation(a)){var e=this.view.viewpoint.clone(),n=this.view.navigation.gamepad.velocityFactor,i=v*n*t;o.translateBy(e,e,[a.translation[0]*i,-a.translation[1]*i]);var r=1+a.translation[2]*h*t,s=this.view.constraints.rotationEnabled?-a.heading*c*t:0,d=this.view.size,u=[d[0]/2,d[1]];o.scaleAndRotateBy(e,e,r,s,u,d);var m=this.view.constraints.constrain(e,this.view.viewpoint);this.view.viewpoint=m}},a}(s.InputHandler);a.GamepadNavigation=d;var c=.06,v=.7,h=6e-4}));