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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(e,n,t,i){Object.defineProperty(n,"__esModule",{value:!0});var a=function(e){function n(n,t,i){var a,o=e.call(this,!0)||this;return o.view=n,o.keys=t,o._keyMap=(a={},a[t.left]="left",a[t.right]="right",a[t.up]="up",a[t.down]="down",a),o.registerIncoming("key-down",i,function(e){return o._handleKeyDown(e)}),o.registerIncoming("key-up",i,function(e){return o._handleKeyUp(e)}),o}return t(n,e),n.prototype._handleKeyDown=function(e){e.data.repeat||this._handleKey(e,!0)},n.prototype._handleKeyUp=function(e){this._handleKey(e,!1)},n.prototype._handleKey=function(e,n){var t=this._keyMap[e.data.key];if(null!=t){if(n)switch(t){case"left":this.view.mapViewNavigation.continousPanLeft();break;case"right":this.view.mapViewNavigation.continousPanRight();break;case"up":this.view.mapViewNavigation.continousPanUp();break;case"down":this.view.mapViewNavigation.continousPanDown()}else this.view.mapViewNavigation.stop();e.stopPropagation()}},n}(i.InputHandler);n.KeyPan=a});