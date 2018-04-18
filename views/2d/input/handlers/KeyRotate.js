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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(e,t,n,i){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t,n,i){var o=e.call(this,!0)||this;return o.view=t,o.keys=n,o._keyToDirection=(r={},r[n.clockwiseOption1]="clockwise",r[n.clockwiseOption2]="clockwise",r[n.counterClockwiseOption1]="counterClockwise",r[n.counterClockwiseOption2]="counterClockwise",r[n.resetOption1]="reset",r[n.resetOption2]="reset",r),o.registerIncoming("key-down",i,function(e){return o._handleKeyDown(e)}),o.registerIncoming("key-up",i,function(e){return o._handleKeyUp(e)}),o;var r}return n(t,e),t.prototype._handleKeyDown=function(e){e.data.repeat||this._handleKey(e,!0)},t.prototype._handleKeyUp=function(e){this._handleKey(e,!1)},t.prototype._handleKey=function(e,t){var n=e.modifiers;if(!(n.size>0&&!n.has("Shift")||!this.view.constraints.rotationEnabled)){var i=this._keyToDirection[e.data.key];i&&(t?"clockwise"===i?this.view.navigation.continousRotateClockwise():"counterClockwise"===i?this.view.navigation.continousRotateCounterclockwise():this.view.navigation.resetRotation():this.view.navigation.stop(),e.stopPropagation())}},t}(i.InputHandler);t.KeyRotate=o});