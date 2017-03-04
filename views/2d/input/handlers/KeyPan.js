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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(n,e,t,i){var a=function(n){function e(e,t,i){var a=n.call(this,"esri.views.2d.input.handlers.KeyPan",!0)||this;return a.view=e,a.keys=t,a._keyMap=(o={},o[t.left]="left",o[t.right]="right",o[t.up]="up",o[t.down]="down",o),a.registerIncoming("key-down",i,function(n){return a._handleKeyDown(n)}),a.registerIncoming("key-up",i,function(n){return a._handleKeyUp(n)}),a;var o}return t(e,n),e.prototype._handleKeyDown=function(n){n.data.repeat||this._handleKey(n,!0)},e.prototype._handleKeyUp=function(n){this._handleKey(n,!1)},e.prototype._handleKey=function(n,e){var t=this._keyMap[n.data.key];if(null!=t){if(e)switch(t){case"left":this.view.navigation.continousPanLeft();break;case"right":this.view.navigation.continousPanRight();break;case"up":this.view.navigation.continousPanUp();break;case"down":this.view.navigation.continousPanDown()}else this.view.navigation.stop();n.stopPropagation()}},e}(i.InputHandler);e.KeyPan=a});