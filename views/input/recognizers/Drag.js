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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/screenUtils","../../../layers/support/timeUtils","../InputHandler","./support"],(function(t,e,i,n,r,a,o){Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){function e(e){var i=t.call(this,!1)||this;return i.navigationTouch=e,i.startStateModifiers=new Set,i.activePointerMap=new Map,i.isDragging=!1,i.isCurrentDragSuppressed=!1,i.drag=i.registerOutgoing("drag"),i.registerIncoming("pointer-drag",i.handlePointerDrag.bind(i)),i.registerIncoming("pointer-up",i.handlePointerUpAndPointerLost.bind(i)),i.registerIncoming("pointer-capture-lost",i.handlePointerUpAndPointerLost.bind(i)),i.registerIncoming("pointer-cancel",i.handlePointerUpAndPointerLost.bind(i)),i}return i(e,t),e.prototype.createPayload=function(t,e,i,n){return{action:t,pointerType:this.pointerType,button:this.mouseButton,buttons:e.buttons,timestamp:n,pointers:u(this.activePointerMap),pointer:e,angle:i.angle,radius:i.radius,center:i.center}},e.prototype.addPointer=function(t){var e=t.native.pointerId,i=d(this.activePointerMap).angle,n={event:t,initialAngle:0,lastAngle:0};this.activePointerMap.set(e,n);var r=c(n,p(this.activePointerMap));n.initialAngle=r,n.lastAngle=r,this.updatePointerAngles(i)},e.prototype.updatePointer=function(t){if(!t||null!=t.x||null!=t.y){var e=t.native.pointerId,i=this.activePointerMap.get(e);i?i.event=t:this.addPointer(t)}},e.prototype.removePointer=function(t){var e=d(this.activePointerMap).angle;this.activePointerMap.delete(t),this.updatePointerAngles(e)},e.prototype.updatePointerAngles=function(t){var e=d(this.activePointerMap);this.activePointerMap.forEach((function(i){i.initialAngle=c(i,e)-t,i.lastAngle=c(i,e)-t}))},e.prototype.emitEvent=function(t,e,i){var n=d(this.activePointerMap);this.drag.emit(this.createPayload(t,e,n,i),void 0,this.startStateModifiers)},e.prototype.handlePointerUpAndPointerLost=function(t){var e=t.data.native.pointerId,i=r.Milliseconds(t.timestamp);this.activePointerMap.get(e)&&(1===this.activePointerMap.size?(this.updatePointer(t.data),!this.isCurrentDragSuppressed&&this.emitEvent("end",t.data,i),this.isDragging=!1,this.isCurrentDragSuppressed=!1,this.removePointer(e)):(this.removePointer(e),this.emitEvent("removed",t.data,r.Milliseconds(t.timestamp))))},e.prototype.handlePointerDrag=function(t){var e=t.data,i=e.currentEvent,n=r.Milliseconds(t.timestamp);switch(e.action){case"start":case"update":this.isDragging?this.activePointerMap.has(i.native.pointerId)?(this.updatePointer(i),!this.isCurrentDragSuppressed&&this.emitEvent("update",i,n)):(this.addPointer(i),this.emitEvent("added",i,n),this.isCurrentDragSuppressed=this.isSuppressed):(this.updatePointer(i),this.pointerType=t.data.startEvent.pointerType,this.mouseButton=t.data.startEvent.button,this.startStateModifiers=t.modifiers,this.isDragging=!0,this.isCurrentDragSuppressed=this.isSuppressed,!this.isCurrentDragSuppressed&&this.emitEvent("start",i,n))}},Object.defineProperty(e.prototype,"isSuppressed",{get:function(){return this.navigationTouch&&!this.navigationTouch.browserTouchPanEnabled&&"touch"===this.pointerType&&1===this.activePointerMap.size},enumerable:!0,configurable:!0}),e}(a.InputHandler);function p(t){var e=[];return t.forEach((function(t){e.push(n.createScreenPoint(t.event.x,t.event.y))})),o.fitCircleLSQ(e)}function d(t){var e=p(t),i=0;return t.forEach((function(t){for(var n=c(t,e),r=n-t.lastAngle;r>Math.PI;)r-=2*Math.PI;for(;r<-Math.PI;)r+=2*Math.PI;n=t.lastAngle+r,t.lastAngle=n;var a=n-t.initialAngle;i+=a})),{angle:i/=t.size||1,radius:e.radius,center:e.center}}function u(t){var e=new Map;return t.forEach((function(t,i){return e.set(i,t.event)})),e}function c(t,e){var i=t.event,n=i.x-e.center.x,r=i.y-e.center.y;return Math.atan2(r,n)}e.Drag=s,function(t){t[t.Left=0]="Left",t[t.Middle=1]="Middle",t[t.Right=2]="Right",t[t.Back=3]="Back",t[t.Forward=4]="Forward",t[t.Undefined=-1]="Undefined"}(e.Button||(e.Button={}))}));