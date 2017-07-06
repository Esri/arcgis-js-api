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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(e,n,t,i){Object.defineProperty(n,"__esModule",{value:!0});var a=function(e){function n(n,t,i){var a=e.call(this,"esri.views.2d.input.handlers.KeyPan",!0)||this;return a.view=n,a.keys=t,a._keyMap=(o={},o[t.left]="left",o[t.right]="right",o[t.up]="up",o[t.down]="down",o),a.registerIncoming("key-down",i,function(e){return a._handleKeyDown(e)}),a.registerIncoming("key-up",i,function(e){return a._handleKeyUp(e)}),a;var o}return t(n,e),n.prototype._handleKeyDown=function(e){e.data.repeat||this._handleKey(e,!0)},n.prototype._handleKeyUp=function(e){this._handleKey(e,!1)},n.prototype._handleKey=function(e,n){var t=this._keyMap[e.data.key];if(null!=t){if(n)switch(t){case"left":this.view.navigation.continousPanLeft();break;case"right":this.view.navigation.continousPanRight();break;case"up":this.view.navigation.continousPanUp();break;case"down":this.view.navigation.continousPanDown()}else this.view.navigation.stop();e.stopPropagation()}},n}(i.InputHandler);n.KeyPan=a});