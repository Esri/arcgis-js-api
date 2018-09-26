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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../state/controllers/global/PanContinuousController","../../../input/InputHandler"],function(e,t,r,n,o){Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(t,r,o){var i,a=e.call(this,!0)||this;return a.view=t,a.keyToDirection=(i={},i[r.left]=n.Direction.LEFT,i[r.right]=n.Direction.RIGHT,i[r.forward]=n.Direction.FORWARD,i[r.backward]=n.Direction.BACKWARD,i[r.up]=n.Direction.UP,i[r.down]=n.Direction.DOWN,i),t.state.isGlobal&&(a.registerIncoming("key-down",o,function(e){return a.handleKeyDown(e)}),a.registerIncoming("key-up",o,function(e){return a.handleKeyUp(e)})),a}return r(t,e),t.prototype.handleKeyDown=function(e){if(!e.data.repeat){var t=this.keyToDirection[e.data.key];null!=t&&(this.cameraController&&this.cameraController.active||(this.cameraController=new n.PanContinuousController(this.view),this.view.state.switchCameraController(this.cameraController)),this.cameraController.active&&this.handleKey(e,t,!0))}},t.prototype.handleKeyUp=function(e){var t=this.keyToDirection[e.data.key];null!=t&&this.cameraController&&this.cameraController.active&&this.handleKey(e,t,!1)},t.prototype.handleKey=function(e,t,r){r?this.cameraController.addDirection(t):this.cameraController.removeDirection(t),e.stopPropagation()},t}(o.InputHandler);t.KeyPan=i});