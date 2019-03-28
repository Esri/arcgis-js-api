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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/screenUtils","../InputHandler","./support"],function(t,e,i,n,r,a){function o(t){var e=[];return t.forEach(function(t){e.push(n.createScreenPoint(t.event.x,t.event.y))}),a.fitCircleLSQ(e)}function s(t){var e=o(t),i=0;return t.forEach(function(t){for(var n=d(t,e),r=n-t.lastAngle;r>Math.PI;)r-=2*Math.PI;for(;r<-Math.PI;)r+=2*Math.PI;n=t.lastAngle+r,t.lastAngle=n;var a=n-t.initialAngle;i+=a}),i/=t.size||1,{angle:i,radius:e.radius,center:e.center}}function p(t){var e=new Map;return t.forEach(function(t,i){return e.set(i,t.event)}),e}function d(t,e){var i=t.event,n=i.x-e.center.x,r=i.y-e.center.y;return Math.atan2(r,n)}Object.defineProperty(e,"__esModule",{value:!0});var c=function(t){function e(){var e=t.call(this,!1)||this;return e.startStateModifiers=new Set,e.activePointerMap=new Map,e.isDragging=!1,e.drag=e.registerOutgoing("drag"),e.registerIncoming("pointer-drag",e.handlePointerDrag.bind(e)),e.registerIncoming("pointer-up",e.handlePointerUpAndPointerLost.bind(e)),e.registerIncoming("pointer-capture-lost",e.handlePointerUpAndPointerLost.bind(e)),e.registerIncoming("pointer-cancel",e.handlePointerUpAndPointerLost.bind(e)),e}return i(e,t),e.prototype.createPayload=function(t,e,i,n){return{action:t,pointerType:this.pointerType,button:this.mouseButton,buttons:e.buttons,timestamp:n,pointers:p(this.activePointerMap),pointer:e,angle:i.angle,radius:i.radius,center:i.center}},e.prototype.addPointer=function(t){var e=t.native.pointerId,i=s(this.activePointerMap).angle,n={event:t,initialAngle:0,lastAngle:0};this.activePointerMap.set(e,n);var r=d(n,o(this.activePointerMap));n.initialAngle=r,n.lastAngle=r,this.updatePointerAngles(i)},e.prototype.updatePointer=function(t){if(!t||null!=t.x||null!=t.y){var e=t.native.pointerId,i=this.activePointerMap.get(e);i?i.event=t:this.addPointer(t)}},e.prototype.removePointer=function(t){var e=s(this.activePointerMap).angle;this.activePointerMap.delete(t),this.updatePointerAngles(e)},e.prototype.updatePointerAngles=function(t){var e=s(this.activePointerMap);this.activePointerMap.forEach(function(i){i.initialAngle=d(i,e)-t,i.lastAngle=d(i,e)-t})},e.prototype.emitEvent=function(t,e,i){var n=s(this.activePointerMap);this.drag.emit(this.createPayload(t,e,n,i),void 0,this.startStateModifiers)},e.prototype.handlePointerUpAndPointerLost=function(t){var e=t.data.native.pointerId,i=t.timestamp;this.activePointerMap.get(e)&&(1===this.activePointerMap.size?(this.updatePointer(t.data),this.emitEvent("end",t.data,i),this.isDragging=!1,this.removePointer(e)):(this.removePointer(e),this.emitEvent("removed",t.data,t.timestamp)))},e.prototype.handlePointerDrag=function(t){var e=t.data,i=e.currentEvent,n=t.timestamp;switch(e.action){case"start":case"update":this.isDragging?this.activePointerMap.has(i.native.pointerId)?(this.updatePointer(i),this.emitEvent("update",i,n)):(this.addPointer(i),this.emitEvent("added",i,n)):(this.updatePointer(i),this.pointerType=t.data.startEvent.pointerType,this.mouseButton=t.data.startEvent.button,this.startStateModifiers=t.modifiers,this.isDragging=!0,this.emitEvent("start",i,n))}},e}(r.InputHandler);e.Drag=c;!function(t){t[t.Left=0]="Left",t[t.Middle=1]="Middle",t[t.Right=2]="Right",t[t.Back=3]="Back",t[t.Forward=4]="Forward",t[t.Undefined=-1]="Undefined"}(e.Button||(e.Button={}))});