// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/Handles","../../../../core/scheduling","../../../../core/watchUtils","../../viewpointUtils","../../../input/InputHandler","../../../navigation/gamepadAndKeyboardUtils"],function(t,e,a,n,i,r,o,s,l){Object.defineProperty(e,"__esModule",{value:!0});var d=function(t){function e(e){var a=t.call(this,!0)||this;return a.view=e,a.frameTask=null,a.watchHandles=new n,a.currentDevice=null,a.transformation={translation:[0,0,0],heading:0,tilt:0},a.handle=a.registerIncoming("gamepad",function(t){return a.handleEvent(t)}),a.handle.pause(),a}return a(e,t),e.prototype.onInstall=function(e){var a=this;t.prototype.onInstall.call(this,e),this.watchHandles.add([r.init(this.view.navigation.gamepad,"enabled",function(t){t?(a.handle.resume(),a.frameTask||(a.frameTask=i.addFrameTask({update:function(t){return a.frameUpdate(t.deltaTime)}}))):(a.handle.pause(),a.frameTask&&(a.frameTask.remove(),a.frameTask=null))})])},e.prototype.onUninstall=function(){this.watchHandles.removeAll(),this.frameTask&&(this.frameTask.remove(),this.frameTask=null),t.prototype.onUninstall.call(this)},e.prototype.handleEvent=function(t){var e=this.view.navigation.gamepad.device;e&&t.data.device!==e||this.currentDevice&&this.currentDevice!==t.data.device||("end"===t.data.action?(this.currentDevice=null,l.resetTransformation(this.transformation)):(this.currentDevice=t.data.device,l.extractTransformation(t.data,this.view.navigation.gamepad,this.transformation)))},e.prototype.frameUpdate=function(t){var e=this.transformation;if(!l.isZeroTransformation(e)){var a=this.view.viewpoint.clone(),n=this.view.navigation.gamepad.velocityFactor,i=v*n*t;o.translateBy(a,a,[e.translation[0]*i,-e.translation[1]*i]);var r=1+e.translation[2]*h*t,s=this.view.constraints.rotationEnabled?-e.heading*c*t:0,d=this.view.size,p=[d[0]/2,d[1]];o.scaleAndRotateBy(a,a,r,s,p,d);var u=this.view.constraints.constrain(a,this.view.viewpoint);this.view.viewpoint=u}},e}(s.InputHandler);e.GamepadNavigation=d;var c=.06,v=.7,h=6e-4});