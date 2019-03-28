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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(e,t,i,o){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(t,i,o){var n,r=e.call(this,!0)||this;return r.view=t,r.keys=i,r._keyToDirection=(n={},n[i.clockwiseOption1]="clockwise",n[i.clockwiseOption2]="clockwise",n[i.counterClockwiseOption1]="counterClockwise",n[i.counterClockwiseOption2]="counterClockwise",n[i.resetOption1]="reset",n[i.resetOption2]="reset",n),r.registerIncoming("key-down",o,function(e){return r._handleKeyDown(e)}),r.registerIncoming("key-up",o,function(e){return r._handleKeyUp(e)}),r}return i(t,e),t.prototype._handleKeyDown=function(e){e.data.repeat||this._handleKey(e,!0)},t.prototype._handleKeyUp=function(e){this._handleKey(e,!1)},t.prototype._handleKey=function(e,t){var i=e.modifiers;if(!(i.size>0&&!i.has("Shift")||!this.view.constraints.rotationEnabled)){var o=this._keyToDirection[e.data.key];o&&(t?"clockwise"===o?this.view.mapViewNavigation.continousRotateClockwise():"counterClockwise"===o?this.view.mapViewNavigation.continousRotateCounterclockwise():this.view.mapViewNavigation.resetRotation():this.view.mapViewNavigation.stop(),e.stopPropagation())}},t}(o.InputHandler);t.KeyRotate=n});