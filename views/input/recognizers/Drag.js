// COPYRIGHT © 2016 Esri
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

define(["require","exports","../../../core/tsSupport/extendsHelper","../InputHandler","./support"],function(t,e,i,n,r){var a=function(t){function e(){t.call(this,"recognizers.Drag",!1),this._activePointers=[],this._activePointerMap=new Map,this._isDragging=!1,this._drag=this.registerOutgoing("drag"),this.registerIncoming("pointer-drag",this._handlePointerDrag.bind(this)),this.registerIncoming("pointer-down",this._handlePointerDown.bind(this)),this.registerIncoming("pointer-up",this._handlePointerUp.bind(this))}return i(e,t),e.prototype._createPayload=function(t,e){return{action:t,pointers:this._activePointers.map(function(t){return t.data}),startState:this._startState,previousState:this._previousState,currentState:e}},e.prototype._fitCircleLSQ=function(){var t=this._activePointers.map(function(t){return t.data.currentEvent});return r.fitCircleLSQ(t)},e.prototype._createDragState=function(){for(var t=this._fitCircleLSQ(),e=0,i=0,n=this._activePointers;i<n.length;i++){var r=n[i],a=this._pointerAngle(r,t)-r.initialAngle;0>a&&(a+=2*Math.PI),e+=a}return e/=this._activePointers.length,{angle:e,radius:t.radius,center:t.center}},e.prototype._updateMultiPointer=function(t){var e=t.startEvent["native"].pointerId,i=this._activePointerMap.get(e),n=!i;return n&&(i={data:null,initialAngle:0},this._activePointers.push(i),this._activePointerMap.set(e,i)),i.data={startEvent:t.startEvent,previousEvent:t.previousEvent,currentEvent:t.currentEvent},n&&this._isDragging&&this._updateInitialAngles(),i},e.prototype._pointerAngle=function(t,e){var i=t.data.currentEvent,n=i.x-e.center.x,r=i.y-e.center.y;return Math.atan2(r,n)},e.prototype._updateInitialAngle=function(t,e){t.initialAngle=this._pointerAngle(t,e),this._previousState&&(t.initialAngle-=this._previousState.angle)},e.prototype._updateInitialAngles=function(){for(var t=this._createDragState(),e=0,i=this._activePointers;e<i.length;e++){var n=i[e];this._updateInitialAngle(n,t)}},e.prototype._emitStart=function(){this._updateInitialAngles();var t=this._createDragState();this._startState=t,this._previousState=this._startState,this._isDragging=!0,this._drag.emit(this._createPayload("start",t))},e.prototype._emitUpdate=function(){var t=this._createDragState();this._drag.emit(this._createPayload("update",t)),this._previousState=t},e.prototype._emitEnd=function(){var t=this._createDragState();this._drag.emit(this._createPayload("end",t)),this._previousState=null,this._startState=null,this._isDragging=!1},e.prototype._handlePointerDown=function(t){var e=t.data;this._isDragging&&1===this._activePointers.length&&this._emitEnd(),this._updateMultiPointer({startEvent:e,previousEvent:e,currentEvent:e}),this._isDragging&&this._emitUpdate()},e.prototype._removeMultiPointer=function(t){var e=this,i=t.pointerId,n=this._activePointerMap.get(i),r=function(){e._activePointerMap["delete"](i);var t=e._activePointers.indexOf(n);e._activePointers.splice(t,1),e._isDragging&&e._updateInitialAngles()};this._isDragging?1===this._activePointers.length||2===this._activePointers.length?(this._emitEnd(),r()):(r(),this._emitUpdate()):r()},e.prototype._handlePointerUp=function(t){this._removeMultiPointer(t.data["native"])},e.prototype._handlePointerDrag=function(t){var e=t.data;switch(e.action){case"start":this._isDragging||this._emitStart();break;case"update":this._isDragging||this._emitStart(),this._updateMultiPointer(e),this._emitUpdate();break;case"end":}},e}(n.InputHandler);e.Drag=a});