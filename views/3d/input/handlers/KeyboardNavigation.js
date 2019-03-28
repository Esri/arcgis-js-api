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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../state/controllers/GamepadKeyboardController","../../../input/InputHandler"],function(e,t,r,o,a){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(t,r,o){var a,n=e.call(this,!0)||this;return n.view=t,n.disableMovements={pan:!0,zoom:!0,ascend:!0,rotate:!1,mode:"local"},n.keyToNumber=(a={},a[r.left]=0,a[r.right]=1,a[r.forward]=2,a[r.backward]=3,a[r.up]=4,a[r.down]=5,a[r.headingLeft]=6,a[r.headingRight]=7,a[r.tiltUp]=8,a[r.tiltDown]=9,a),n.registerIncoming("key-down",o,function(e){return n.handleKeyDown(e)}),n.registerIncoming("key-up",o,function(e){return n.handleKeyUp(e)}),n}return r(t,e),t.prototype.handleKeyDown=function(e){if(!e.data.repeat){var t=this.keyToNumber[e.data.key];null!=t&&(this.cameraControllerKeyboard&&this.cameraControllerKeyboard.active||(this.cameraControllerKeyboard=new o.GamepadKeyboardController(this.view,void 0,this.disableMovements),this.view.state.switchCameraController(this.cameraControllerKeyboard)),this.cameraControllerKeyboard.active&&(this.cameraControllerKeyboard.activateDirection(t),e.stopPropagation()))}},t.prototype.handleKeyUp=function(e){var t=this.keyToNumber[e.data.key];null!=t&&this.cameraControllerKeyboard&&this.cameraControllerKeyboard.active&&(this.cameraControllerKeyboard.deactivateDirection(t),e.stopPropagation())},t}(a.InputHandler);t.KeyboardNavigation=n});