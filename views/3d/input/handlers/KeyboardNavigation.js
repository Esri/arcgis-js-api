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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../state/controllers/GamepadKeyboardController","../../../input/InputHandler"],(function(e,r,o,t,a){Object.defineProperty(r,"__esModule",{value:!0});var n=function(e){function r(r,o,t){var a,n=e.call(this,!0)||this;return n.view=r,n.disableMovements={pan:!0,zoom:!1,ascend:!0,rotate:!1,mode:"local"},n.keyToNumber=((a={})[o.left]=0,a[o.right]=1,a[o.forward]=2,a[o.backward]=3,a[o.up]=4,a[o.down]=5,a[o.headingLeft]=6,a[o.headingRight]=7,a[o.tiltUp]=8,a[o.tiltDown]=9,a[o.zoomIn]=10,a[o.zoomOut]=11,a),n.registerIncoming("key-down",t,(function(e){return n.handleKeyDown(e)})),n.registerIncoming("key-up",t,(function(e){return n.handleKeyUp(e)})),n.registerIncoming("blur",t,(function(){return n.handleBlur()})),n}return o(r,e),r.prototype.handleKeyDown=function(e){var r=this.keyToNumber[e.data.key];null!=r&&(this.cameraControllerKeyboard&&this.cameraControllerKeyboard.active||(this.cameraControllerKeyboard=new t.GamepadKeyboardController(this.view,void 0,this.disableMovements),this.view.state.switchCameraController(this.cameraControllerKeyboard)),this.cameraControllerKeyboard.active&&(this.cameraControllerKeyboard.activateDirection(r),e.stopPropagation()))},r.prototype.handleBlur=function(){this.cameraControllerKeyboard&&this.cameraControllerKeyboard.active&&(this.cameraControllerKeyboard.finishController(),this.cameraControllerKeyboard=null)},r.prototype.handleKeyUp=function(e){var r=this.keyToNumber[e.data.key];null!=r&&this.cameraControllerKeyboard&&this.cameraControllerKeyboard.active&&(this.cameraControllerKeyboard.deactivateDirection(r),e.stopPropagation())},r}(a.InputHandler);r.KeyboardNavigation=n}));