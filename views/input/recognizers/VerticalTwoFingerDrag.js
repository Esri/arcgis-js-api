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

define(["require","exports","../../../core/tsSupport/extendsHelper","../InputHandler"],function(t,e,a,r){Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){function e(e,a){void 0===e&&(e=20),void 0===a&&(a=40);var r=t.call(this,"recognizers.VerticalTwoFingerDrag",!1)||this;return r._threshold=e,r._maxDelta=a,r._failed=!1,r._active=!1,r._vertical=r.registerOutgoing("vertical-two-finger-drag"),r._artificalDragEnd=r.registerOutgoing("drag"),r.registerIncoming("drag",r._handleDrag.bind(r)),r}return a(e,t),Object.defineProperty(e.prototype,"failed",{get:function(){return this._failed},enumerable:!0,configurable:!0}),e.prototype._handleDrag=function(t){if(2===t.data.pointers.length)switch(t.data.action){case"start":this._handleDragStart(t);break;case"update":this._handleDragUpdate(t);break;case"end":this._handleDragEnd(t)}},e.prototype._handleDragStart=function(t){this._failed=!1,this._dragStartCenter=t.data.currentState.center},e.prototype._handleDragUpdate=function(t){this._failed||(this._active?(this._vertical.emit({delta:t.data.currentState.center.y-this._thresholdReachedCenter.y,action:"update"}),t.stopPropagation()):(this._failed=!this._checkDeltaConstraint(t.data),this._failed||this._checkThresholdReached(t.data)&&(this._active=!0,this._thresholdReachedCenter=t.data.currentState.center,this._artificalDragEnd.emit({action:"end",currentState:t.data.currentState,previousState:t.data.previousState,startState:t.data.startState,pointers:t.data.pointers}),this._vertical.emit({delta:t.data.currentState.center.y-this._thresholdReachedCenter.y,action:"begin"}),t.stopPropagation())))},e.prototype._handleDragEnd=function(t){this._active&&(this._vertical.emit({delta:t.data.currentState.center.y-this._thresholdReachedCenter.y,action:"end"}),t.stopPropagation()),this._active=!1},e.prototype._checkDeltaConstraint=function(t){var e=Math.abs(t.pointers[0].startEvent.x-t.pointers[1].startEvent.x),a=Math.abs(t.pointers[0].startEvent.y-t.pointers[1].startEvent.y),r=Math.abs(t.pointers[0].currentEvent.y-t.pointers[1].currentEvent.y),n=Math.abs(t.pointers[0].currentEvent.x-t.pointers[1].currentEvent.x),i=Math.abs(t.currentState.center.x-t.startState.center.x);return i<this._threshold&&Math.abs(n-e)<=this._maxDelta&&Math.abs(r-a)<=this._maxDelta},e.prototype._checkThresholdReached=function(t){var e=Math.min(Math.abs(t.pointers[0].currentEvent.y-t.pointers[0].startEvent.y),Math.abs(t.pointers[1].currentEvent.y-t.pointers[1].startEvent.y),Math.abs(t.currentState.center.y-t.startState.center.y));return e>=this._threshold},e}(r.InputHandler);e.VerticalTwoFingerDrag=n});