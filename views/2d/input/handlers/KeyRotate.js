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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(e,t,i,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t,i,n){var o=e.call(this,"esri.views.2d.input.handlers.KeyRotate",!0)||this;return o.view=t,o.keys=i,o._keyToDirection=(r={},r[i.clockwiseOption1]="clockwise",r[i.clockwiseOption2]="clockwise",r[i.counterClockwiseOption1]="counterClockwise",r[i.counterClockwiseOption2]="counterClockwise",r[i.resetOption1]="reset",r[i.resetOption2]="reset",r),o.registerIncoming("key-down",n,function(e){return o._handleKeyDown(e)}),o.registerIncoming("key-up",n,function(e){return o._handleKeyUp(e)}),o;var r}return i(t,e),t.prototype._handleKeyDown=function(e){e.data.repeat||this._handleKey(e,!0)},t.prototype._handleKeyUp=function(e){this._handleKey(e,!1)},t.prototype._handleKey=function(e,t){var i=e.modifiers;if(!(i.size>0&&!i.has("Shift")||!this.view.constraints.rotationEnabled)){var n=this._keyToDirection[e.data.key];n&&(t?"clockwise"===n?this.view.navigation.continousRotateClockwise():"counterClockwise"===n?this.view.navigation.continousRotateCounterclockwise():this.view.navigation.resetRotation():this.view.navigation.stop(),e.stopPropagation())}},t}(n.InputHandler);t.KeyRotate=o});