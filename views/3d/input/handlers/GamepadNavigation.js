// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/Handles","../../../../core/watchUtils","../../state/controllers/GamepadController","../../../input/InputHandler"],function(e,a,t,n,r,l,o){Object.defineProperty(a,"__esModule",{value:!0});var i=function(e){function a(a){var t=e.call(this,!0)||this;return t.view=a,t.watchHandles=new n,t.handle=t.registerIncoming("gamepad",function(e){return t.handleEvent(e)}),t.handle.pause(),t}return t(a,e),a.prototype.onInstall=function(a){var t=this;e.prototype.onInstall.call(this,a),this.watchHandles.add([r.init(this.view.navigation.gamepad,"enabled",function(e){e?t.handle.resume():(t.handle.pause(),t.cameraController&&(t.cameraController.finishController(),t.cameraController=null))}),this.view.navigation.gamepad.watch("device",function(e){t.cameraController&&e&&t.cameraController.device!==e&&(t.cameraController.finishController(),t.cameraController=null)})])},a.prototype.onUninstall=function(){this.watchHandles.removeAll(),e.prototype.onUninstall.call(this)},a.prototype.handleEvent=function(e){var a=this.view.navigation.gamepad.device;if(!a||e.data.device===a){var t=this.cameraController&&this.cameraController.active;if(t||l.GamepadController.activatesFor(this.view,e.data)){if(!t){var n=new l.GamepadController(this.view,e.data.device);this.view.state.switchCameraController(n)&&(this.cameraController=n)}this.cameraController&&this.cameraController.active&&this.cameraController.device===e.data.device&&this.cameraController.handleEvent(e.data)}}},a}(o.InputHandler);a.GamepadNavigation=i});