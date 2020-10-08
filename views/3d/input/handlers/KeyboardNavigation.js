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

define(["require","exports","tslib","../../state/controllers/GamepadKeyboardController","../../../input/InputHandler"],(function(e,t,r,a,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.KeyboardNavigation=void 0;var n=function(e){function t(t,r){var a,o=e.call(this,!0)||this;return o.view=t,o.disableMovements={pan:!0,zoom:!1,ascend:!0,rotate:!1,mode:2},o.keyToNumber=((a={})[r.left]=0,a[r.right]=1,a[r.forward]=2,a[r.backward]=3,a[r.up]=4,a[r.down]=5,a[r.headingLeft]=6,a[r.headingRight]=7,a[r.tiltUp]=8,a[r.tiltDown]=9,a[r.zoomIn]=10,a[r.zoomOut]=11,a),o.registerIncoming("key-down",null,(function(e){return o.handleKeyDown(e)})),o.registerIncoming("key-up",null,(function(e){return o.handleKeyUp(e)})),o.registerIncoming("blur",null,(function(){return o.handleBlur()})),o}return r.__extends(t,e),t.prototype.handleKeyDown=function(e){if(!e.data.native.ctrlKey&&!e.data.native.metaKey){var t=this.keyToNumber[e.data.key];null!=t&&(this.cameraControllerKeyboard&&this.cameraControllerKeyboard.active||(this.cameraControllerKeyboard=new a.GamepadKeyboardController({view:this.view,disableMovements:this.disableMovements}),this.view.state.switchCameraController(this.cameraControllerKeyboard)),this.cameraControllerKeyboard.active&&(this.cameraControllerKeyboard.activateDirection(t),e.stopPropagation()))}},t.prototype.handleBlur=function(){this.cameraControllerKeyboard&&this.cameraControllerKeyboard.active&&(this.cameraControllerKeyboard.finishController(),this.cameraControllerKeyboard=null)},t.prototype.handleKeyUp=function(e){if(!e.data.native.ctrlKey&&!e.data.native.metaKey){var t=this.keyToNumber[e.data.key];null!=t&&this.cameraControllerKeyboard&&this.cameraControllerKeyboard.active&&(this.cameraControllerKeyboard.deactivateDirection(t),e.stopPropagation())}},t}(o.InputHandler);t.KeyboardNavigation=n}));