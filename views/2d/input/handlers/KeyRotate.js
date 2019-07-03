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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(e,t,i,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t,i,n){var o,s=e.call(this,!0)||this;return s.view=t,s.keys=i,s._pressed=!1,s._keyToDirection=(o={},o[i.clockwiseOption1]="clockwise",o[i.clockwiseOption2]="clockwise",o[i.counterClockwiseOption1]="counterClockwise",o[i.counterClockwiseOption2]="counterClockwise",o[i.resetOption1]="reset",o[i.resetOption2]="reset",o),s.registerIncoming("key-down",n,function(e){return s._handleKeyDown(e)}),s.registerIncoming("key-up",n,function(e){return s._handleKeyUp(e)}),s.registerIncoming("blur",n,function(){return s._handleBlur()}),s}return i(t,e),t.prototype._handleKeyDown=function(e){e.data.repeat||this._handleKey(e,!0)},t.prototype._handleKeyUp=function(e){this._handleKey(e,!1)},t.prototype._handleBlur=function(){this._pressed&&(this._pressed=!1,this.view.mapViewNavigation.stop())},t.prototype._handleKey=function(e,t){var i=e.modifiers;if(!(i.size>0&&!i.has("Shift")||!this.view.constraints.rotationEnabled)){var n=this._keyToDirection[e.data.key];if(this._pressed=null!=n,this._pressed){if(t)switch(n){case"clockwise":this.view.mapViewNavigation.continousRotateClockwise();break;case"counterClockwise":this.view.mapViewNavigation.continousRotateCounterclockwise();break;case"reset":this.view.mapViewNavigation.resetRotation()}else this._pressed=!1,this.view.mapViewNavigation.stop();e.stopPropagation()}}},t}(n.InputHandler);t.KeyRotate=o});