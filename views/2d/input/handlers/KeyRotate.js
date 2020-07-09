// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../input/InputHandler"],(function(e,i,t,n){Object.defineProperty(i,"__esModule",{value:!0});var o=function(e){function i(i,t,n){var o,s=e.call(this,!0)||this;return s.view=i,s.keys=t,s._pressed=!1,s._keyToDirection=((o={})[t.clockwiseOption1]="clockwise",o[t.clockwiseOption2]="clockwise",o[t.counterClockwiseOption1]="counterClockwise",o[t.counterClockwiseOption2]="counterClockwise",o[t.resetOption1]="reset",o[t.resetOption2]="reset",o),s.registerIncoming("key-down",n,(function(e){return s._handleKeyDown(e)})),s.registerIncoming("key-up",n,(function(e){return s._handleKeyUp(e)})),s.registerIncoming("blur",n,(function(){return s._handleBlur()})),s}return t.__extends(i,e),i.prototype._handleKeyDown=function(e){e.data.repeat||this._handleKey(e,!0)},i.prototype._handleKeyUp=function(e){this._handleKey(e,!1)},i.prototype._handleBlur=function(){this._pressed&&(this._pressed=!1,this.view.mapViewNavigation.stop())},i.prototype._handleKey=function(e,i){var t=e.modifiers;if(!(t.size>0&&!t.has("Shift")||!this.view.constraints.rotationEnabled)){var n=this._keyToDirection[e.data.key];if(this._pressed=null!=n,this._pressed){if(i)switch(this.view.mapViewNavigation.begin(),n){case"clockwise":this.view.mapViewNavigation.continousRotateClockwise();break;case"counterClockwise":this.view.mapViewNavigation.continousRotateCounterclockwise();break;case"reset":this.view.mapViewNavigation.resetRotation()}else this._pressed=!1,this.view.mapViewNavigation.stop();e.stopPropagation()}}},i}(n.InputHandler);i.KeyRotate=o}));