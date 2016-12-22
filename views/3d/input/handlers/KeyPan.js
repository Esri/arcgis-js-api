// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../navigation/NavigationConstants"],function(n,e,t,i,o){var a=o.Pan.Direction,r=function(n){function e(e,t,i){var o=this;n.call(this,"esri.views.3d.input.handlers.KeyPan",!0),this.view=e,this.keys=t,this._keyToDirection=(r={},r[t.left]=a.LEFT,r[t.right]=a.RIGHT,r[t.forward]=a.FORWARD,r[t.backward]=a.BACKWARD,r[t.up]=a.UP,r[t.down]=a.DOWN,r),this.registerIncoming("key-down",i,function(n){return o._handleKeyDown(n)}),this.registerIncoming("key-up",i,function(n){return o._handleKeyUp(n)});var r}return t(e,n),e.prototype._handleKeyDown=function(n){n.data.repeat||this._handleKey(n,!0)},e.prototype._handleKeyUp=function(n){this._handleKey(n,!1)},e.prototype._handleKey=function(n,e){var t=this._keyToDirection[n.data.key];null!=t&&(e?this.view.navigation.pan.beginContinuous(t):this.view.navigation.pan.endContinuous(t),n.stopPropagation())},e}(i.InputHandler);e.KeyPan=r});