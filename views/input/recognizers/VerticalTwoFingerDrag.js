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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../DragEventSeparator","../InputHandler"],(function(t,e,a,i,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VerticalTwoFingerDrag=void 0;var n=function(t){function e(e,a){void 0===e&&(e=20),void 0===a&&(a=40);var r=t.call(this,!1)||this;return r._threshold=e,r._maxDelta=a,r.state="ready",r.emittedArtificalEnd2=!1,r._vertical=r.registerOutgoing("vertical-two-finger-drag"),r._artificalDrag=r.registerOutgoing("drag"),r.dragEventSeparator=new i.DragEventSeparator({start:function(t,e){return r.observeStart(t,e)},update:function(t,e,a){return r.observeUpdate(t,e,a)},end:function(t,e){return r.observeEnd(e)}}),r.registerIncoming("drag",(function(t){return r.dragEventSeparator.handle(t)})),r}return a.__extends(e,t),Object.defineProperty(e.prototype,"failed",{get:function(){return"failed"===this.state},enumerable:!1,configurable:!0}),e.prototype.observeStart=function(t,e){1===t&&this.emittedArtificalEnd2&&(this.emittedArtificalEnd2=!1,this._artificalDrag.emit({action:"start",button:e.data.button,buttons:e.data.buttons,pointerType:e.data.pointerType,timestamp:e.data.timestamp,pointers:e.data.pointers,pointer:e.data.pointer,angle:e.data.angle,radius:e.data.radius,center:e.data.center,artifical:!0}),e.stopPropagation()),this.state=2===t?"ready":"failed"},e.prototype.observeUpdate=function(t,e,a){if("failed"!==this.state&&2===t)return"active"===this.state?(this._vertical.emit({delta:e.data.center.y-this._thresholdReachedCenter.y,action:"update"}),void e.stopPropagation()):void(this.checkMovementWithinLimits(e.data,a.data)?this.checkVerticalThresholdReached(e.data,a.data)&&(this.state="active",this.emittedArtificalEnd2=!0,this._thresholdReachedCenter=e.data.center,this._artificalDrag.emit({action:"end",button:e.data.button,buttons:e.data.buttons,pointerType:e.data.pointerType,timestamp:e.data.timestamp,pointers:e.data.pointers,pointer:e.data.pointer,angle:e.data.angle,radius:e.data.radius,center:e.data.center,artifical:!0}),this._vertical.emit({delta:e.data.center.y-this._thresholdReachedCenter.y,action:"begin"}),e.stopPropagation()):this.state="failed")},e.prototype.observeEnd=function(t){"active"===this.state&&(this._vertical.emit({delta:t.data.center.y-this._thresholdReachedCenter.y,action:"end"}),this.state="ready",t.stopPropagation())},e.prototype.checkMovementWithinLimits=function(t,e){var a=-1/0,i=1/0,r=-1/0,n=1/0;e.pointers.forEach((function(t){a=Math.max(a,t.x),i=Math.min(i,t.x),r=Math.max(r,t.y),n=Math.min(n,t.y)}));var o=-1/0,s=1/0,d=-1/0,c=1/0;t.pointers.forEach((function(t){o=Math.max(o,t.x),s=Math.min(s,t.x),d=Math.max(d,t.y),c=Math.min(c,t.y)}));var h=a-i,p=r-n,l=o-s,u=d-c;return Math.abs(t.center.x-e.center.x)<this._threshold&&Math.abs(l-h)<=this._maxDelta&&Math.abs(u-p)<=this._maxDelta},e.prototype.checkVerticalThresholdReached=function(t,e){var a=Math.abs(t.center.y-e.center.y);return t.pointers.forEach((function(t,i){var r=e.pointers.get(i);a=Math.min(a,Math.abs(t.y-r.y))})),a>=this._threshold},e}(r.InputHandler);e.VerticalTwoFingerDrag=n}));