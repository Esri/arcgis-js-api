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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../state/controllers/GamepadKeyboardController","../../../input/InputHandler"],function(e,r,t,o,a){Object.defineProperty(r,"__esModule",{value:!0});var n=function(e){function r(r,t,o){var a,n=e.call(this,!0)||this;return n.view=r,n.disableMovements={pan:!0,zoom:!0,ascend:!0,rotate:!1,mode:"local"},n.keyToNumber=(a={},a[t.left]=0,a[t.right]=1,a[t.forward]=2,a[t.backward]=3,a[t.up]=4,a[t.down]=5,a[t.headingLeft]=6,a[t.headingRight]=7,a[t.tiltUp]=8,a[t.tiltDown]=9,a),n.registerIncoming("key-down",o,function(e){return n.handleKeyDown(e)}),n.registerIncoming("key-up",o,function(e){return n.handleKeyUp(e)}),n.registerIncoming("blur",o,function(){return n.handleBlur()}),n}return t(r,e),r.prototype.handleKeyDown=function(e){var r=this.keyToNumber[e.data.key];null!=r&&(this.cameraControllerKeyboard&&this.cameraControllerKeyboard.active||(this.cameraControllerKeyboard=new o.GamepadKeyboardController(this.view,void 0,this.disableMovements),this.view.state.switchCameraController(this.cameraControllerKeyboard)),this.cameraControllerKeyboard.active&&(this.cameraControllerKeyboard.activateDirection(r),e.stopPropagation()))},r.prototype.handleBlur=function(){this.cameraControllerKeyboard&&this.cameraControllerKeyboard.active&&(this.cameraControllerKeyboard.finishController(),this.cameraControllerKeyboard=null)},r.prototype.handleKeyUp=function(e){var r=this.keyToNumber[e.data.key];null!=r&&this.cameraControllerKeyboard&&this.cameraControllerKeyboard.active&&(this.cameraControllerKeyboard.deactivateDirection(r),e.stopPropagation())},r}(a.InputHandler);r.KeyboardNavigation=n});