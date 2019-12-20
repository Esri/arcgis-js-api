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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/Handles","../../../../core/watchUtils","../../state/controllers/GamepadKeyboardController","../../../input/InputHandler"],function(a,e,t,r,n,o,l){Object.defineProperty(e,"__esModule",{value:!0});var i=function(a){function e(e){var t=a.call(this,!0)||this;return t.view=e,t.watchHandles=new r,t.handle=t.registerIncoming("gamepad",function(a){return t.handleEventGamepad(a)}),t.handle.pause(),t}return t(e,a),e.prototype.onInstall=function(e){var t=this;a.prototype.onInstall.call(this,e),this.watchHandles.add([n.init(this.view.navigation.gamepad,"enabled",function(a){a?t.handle.resume():(t.handle.pause(),t.cameraControllerGamepad&&(t.cameraControllerGamepad.finishController(),t.cameraControllerGamepad=null))}),this.view.navigation.gamepad.watch("device",function(a){t.cameraControllerGamepad&&a&&t.cameraControllerGamepad.gamepadDevice!==a&&(t.cameraControllerGamepad.finishController(),t.cameraControllerGamepad=null)})])},e.prototype.onUninstall=function(){this.watchHandles.removeAll(),a.prototype.onUninstall.call(this)},e.prototype.handleEventGamepad=function(a){var e=this.view.navigation.gamepad.device;if(!e||a.data.device===e){var t=this.cameraControllerGamepad&&this.cameraControllerGamepad.active;if(t||o.GamepadKeyboardController.activatesFor(this.view,a.data)){if(!t){var r=new o.GamepadKeyboardController(this.view,a.data.device);this.view.state.switchCameraController(r)&&(this.cameraControllerGamepad=r)}this.cameraControllerGamepad&&this.cameraControllerGamepad.active&&this.cameraControllerGamepad.gamepadDevice===a.data.device&&this.cameraControllerGamepad.handleEventGamepad(a.data)}}},e}(l.InputHandler);e.GamepadNavigation=i});