// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../state/controllers/global/PanContinuousController"],function(e,t,r,n,o){Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(t,r,n){var i=e.call(this,!0)||this;return i.view=t,i.keyToDirection=(a={},a[r.left]=o.Direction.LEFT,a[r.right]=o.Direction.RIGHT,a[r.forward]=o.Direction.FORWARD,a[r.backward]=o.Direction.BACKWARD,a[r.up]=o.Direction.UP,a[r.down]=o.Direction.DOWN,a),t.state.isGlobal&&(i.registerIncoming("key-down",n,function(e){return i.handleKeyDown(e)}),i.registerIncoming("key-up",n,function(e){return i.handleKeyUp(e)})),i;var a}return r(t,e),t.prototype.handleKeyDown=function(e){if(!e.data.repeat){var t=this.keyToDirection[e.data.key];null!=t&&(this.cameraController&&this.cameraController.active||(this.cameraController=new o.PanContinuousController(this.view),this.view.state.switchCameraController(this.cameraController)),this.cameraController.active&&this.handleKey(e,t,!0))}},t.prototype.handleKeyUp=function(e){var t=this.keyToDirection[e.data.key];null!=t&&this.cameraController&&this.cameraController.active&&this.handleKey(e,t,!1)},t.prototype.handleKey=function(e,t,r){r?this.cameraController.addDirection(t):this.cameraController.removeDirection(t),e.stopPropagation()},t}(n.InputHandler);t.KeyPan=i});