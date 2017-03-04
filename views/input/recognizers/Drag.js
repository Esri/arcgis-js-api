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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../InputHandler","./support","../../../core/now"],function(t,e,i,r,n,a){var s=function(t){function e(){var e=t.call(this,"recognizers.Drag",!1)||this;return e._startStateModifiers=new Set,e._activePointers=[],e._activePointerMap=new Map,e._isDragging=!1,e._drag=e.registerOutgoing("drag"),e.registerIncoming("pointer-drag",e._handlePointerDrag.bind(e)),e.registerIncoming("pointer-down",e._handlePointerDown.bind(e)),e.registerIncoming("pointer-up",e._handlePointerUpAndPointerLost.bind(e)),e.registerIncoming("pointer-capture-lost",e._handlePointerUpAndPointerLost.bind(e)),e}return i(e,t),e.prototype._createPayload=function(t,e){return{action:t,pointers:this._activePointers.map(function(t){return t.data}),startState:this._startState,previousState:this._previousState,currentState:e}},e.prototype._fitCircleLSQ=function(){var t=this._activePointers.map(function(t){return t.data.currentEvent});return n.fitCircleLSQ(t)},e.prototype._createDragState=function(){for(var t=this._fitCircleLSQ(),e=0,i=0,r=this._activePointers;i<r.length;i++){for(var n=r[i],s=this._pointerAngle(n,t),o=s-n.lastAngle;o>Math.PI;)o-=2*Math.PI;for(;o<-Math.PI;)o+=2*Math.PI;s=n.lastAngle+o,n.lastAngle=s;var p=s-n.initialAngle;e+=p}return e/=this._activePointers.length,{angle:e,radius:t.radius,center:t.center,timeStamp:a()}},e.prototype._updateMultiPointer=function(t){var e=t.startEvent["native"].pointerId,i=this._activePointerMap.get(e),r=!i;if(r){i={data:null,initialAngle:0,lastAngle:0},this._activePointers.push(i),this._activePointerMap.set(e,i),i.data={startEvent:t.startEvent,previousEvent:t.previousEvent,currentEvent:t.currentEvent};var n=this._fitCircleLSQ();i.initialAngle=this._pointerAngle(i,n),i.lastAngle=i.initialAngle}else i.data={startEvent:i.data.startEvent,previousEvent:t.previousEvent,currentEvent:t.currentEvent};return r&&this._isDragging&&this._updateInitialAngles(),i},e.prototype._pointerAngle=function(t,e){var i=t.data.currentEvent,r=i.x-e.center.x,n=i.y-e.center.y;return Math.atan2(n,r)},e.prototype._updateInitialAngles=function(){for(var t=this._createDragState(),e=0,i=this._activePointers;e<i.length;e++){var r=i[e];r.initialAngle=this._pointerAngle(r,t)}},e.prototype._emitStart=function(t){this._updateInitialAngles();var e=this._createDragState();this._startState=e,this._previousState=this._startState,this._startStateModifiers=t.modifiers,this._isDragging=!0;for(var i=0,r=this._activePointers;i<r.length;i++){var n=r[i];n.data={previousEvent:n.data.currentEvent,startEvent:n.data.currentEvent,currentEvent:n.data.currentEvent}}this._drag.emit(this._createPayload("start",e))},e.prototype._emitUpdate=function(){var t=this._createDragState();this._drag.emit(this._createPayload("update",t),this._startStateModifiers),this._previousState=t},e.prototype._emitEnd=function(){var t=this._createDragState();this._drag.emit(this._createPayload("end",t),this._startStateModifiers),this._previousState=null,this._startState=null,this._isDragging=!1},e.prototype._handlePointerDown=function(t){var e=t.data;this._isDragging&&this._emitEnd(),this._updateMultiPointer({startEvent:e,previousEvent:e,currentEvent:e})},e.prototype._removeMultiPointer=function(t){var e=this,i=t.pointerId,r=this._activePointerMap.get(i);if(r){var n=function(){e._activePointerMap["delete"](i);var t=e._activePointers.indexOf(r);e._activePointers.splice(t,1),e._isDragging&&e._updateInitialAngles()};this._isDragging?(this._emitEnd(),n()):n()}},e.prototype._handlePointerUpAndPointerLost=function(t){this._removeMultiPointer(t.data["native"])},e.prototype._handlePointerDrag=function(t){var e=t.data;switch(e.action){case"start":this._isDragging||this._emitStart(t);break;case"update":this._isDragging||this._emitStart(t),this._updateMultiPointer(e),this._emitUpdate();break;case"end":}},e}(r.InputHandler);e.Drag=s});