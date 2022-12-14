/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"../geometry.js";import{isSome as t}from"../core/maybe.js";import"../core/Logger.js";import"../core/accessorSupport/ensureType.js";import"../core/arrayUtils.js";import"../core/has.js";import"../core/accessorSupport/set.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import o from"../views/draw/DrawAction.js";import{VertexRemoveEvent as s,VertexAddEvent as r,CursorUpdateEvent as n,DrawCompleteEvent as a}from"../views/draw/input/DrawEvents.js";import{ViewEventPriorities as d}from"../views/input/InputManager.js";import{SKETCH_KEYS as p}from"../views/interactive/keybindings.js";import{createScreenPointFromEvent as h}from"../views/support/screenUtils.js";import c from"../geometry/Point.js";let _=class extends o{constructor(e){super(e),this._popVertexOnPointerMove=!1,this._addVertexOnPointerUp=!1}initialize(){this._addViewHandles(),this._addUndoRedoHandles()}destroy(){this._removeViewHandles(),this._removeUndoRedoHandles(),this.emit("destroy")}undo(){super.undo(),this.notifyChange("vertices")}redo(){super.redo(),this.notifyChange("vertices")}complete(){this._completeDrawing()}_addViewHandles(){this._removeViewHandles(),this._handles.add([this.view.on("click",(e=>{e.stopPropagation()}),d.TOOL),this.view.on("pointer-down",(e=>{this._shouldHandlePointerEvent(e)&&(this._abortSnapping(),this._activePointerId=e.pointerId,this._addVertexOnPointerUp=!0,this._cursorScreenPoint=h(e),"touch"===e.pointerType&&this._updateCursor(e.native))}),d.TOOL),this.view.on("pointer-move",(e=>{this._popVertexOnPointerMove&&(this.undo(),this._popVertexOnPointerMove=!1),this._abortSnapping(),this._cursorScreenPoint=h(e),"touch"!==e.pointerType&&this._updateCursor(e.native)}),d.TOOL),this.view.on("pointer-drag",(e=>{this._shouldHandlePointerEvent(e)&&(this._abortSnapping(),this._addVertexOnPointerUp=!1)}),d.TOOL),this.view.on("pointer-up",(e=>{if(this._shouldHandlePointerEvent(e))if(this._abortSnapping(),this._activePointerId=null,this._addVertexOnPointerUp)this._vertexAddHandler(e);else{const t="touch"===e.pointerType;this._updateCursor(e.native,t)}}),d.TOOL),this.view.on("drag",["Shift"],(e=>{e.stopPropagation()}),d.TOOL),this.view.on("double-click",(e=>{e.stopPropagation(),this._drawCompleteHandler(e)}),d.TOOL),this.view.on("double-click",["Control"],(e=>{e.stopPropagation(),this._drawCompleteHandler(e)}),d.TOOL),this.view.on("key-down",(e=>{const{key:t,repeat:i}=e;t===p.vertexAdd&&!i&&this._cursorScreenPoint?(e.stopPropagation(),this._abortSnapping(),this._vertexAddHandler(e)):t!==p.complete||i?t!==p.undo||this.interactiveUndoDisabled||i?t!==p.redo||this.interactiveUndoDisabled||i?t!==p.pan||i||e.stopPropagation():(e.stopPropagation(),this.redo()):(e.stopPropagation(),this.undo()):(e.stopPropagation(),this._drawCompleteHandler(e))}),d.TOOL),this.view.on("key-up",(e=>{e.key===p.pan&&e.stopPropagation()}),d.TOOL)],this._viewHandlesKey)}_addUndoRedoHandles(){this._removeUndoRedoHandles(),this._handles.add([this._editGeometryOperations.on("vertex-remove",(e=>{if(this.notifyChange("vertices"),"undo"===e.operation){const i=this._nativeEventHistory.undoStack.pop();this._nativeEventHistory.redoStack.push(i);const o=[...this._committedVertices];t(this._stagedVertex)&&o.push(this._coordinateHelper.pointToArray(this._stagedVertex)),this.emit("undo",new s(this.view,i,e.vertices[0].index,o))}})),this._editGeometryOperations.on("vertex-add",(e=>{if(this.notifyChange("vertices"),"apply"===e.operation){const e=this._nativeEventHistory.undoStack[this._nativeEventHistory.undoStack.length],t=this._committedVertices.length-1,i=new r(this.view,e,t,this.vertices);this.emit("vertex-add",i),i.defaultPrevented&&(this._popVertexOnPointerMove=!0)}else if("redo"===e.operation){const i=this._nativeEventHistory.redoStack.pop();this._nativeEventHistory.undoStack.push(i);const o=[...this._committedVertices];t(this._stagedVertex)&&o.push(this._coordinateHelper.pointToArray(this._stagedVertex)),this.emit("redo",new r(this.view,i,e.vertices[0].index,o))}}))],this._undoRedoHandlesKey)}_removeViewHandles(){this._handles.remove(this._viewHandlesKey)}_removeUndoRedoHandles(){this._handles.remove(this._undoRedoHandlesKey)}_addVertex(e,t){const i=this._coordinateHelper.arrayToVector(e);if(this._isDuplicateOfLastVertex(i))return;this._lastVertexUnsnapped=this._stagedVertexUnsnapped,this._popCursorVertex(),this._editGeometryOperations.appendVertex(i);const o=t||new Event("placeholder");this._nativeEventHistory.undoStack.push(o)}_updateCursor(e,i=!1){if(this._popCursorVertex(),!this._cursorScreenPoint)return;const o=this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);t(o)&&!i&&this._pushCursorVertex(o.vertex,(()=>this.emit("cursor-update",new n(this.view,e,this._activeComponent.vertices.length,this.vertices,t(this._stagedVertex)?new c(this._stagedVertex):null))))}_completeDrawing(e){if(this._activePointerId=null,this._popCursorVertex(),this._abortSnapping(),t(this._snappingManager)&&this._snappingManager.doneSnapping(),this.vertices.length<1)return;const i=new a(e,this.vertices);this.emit("draw-complete",i),i.defaultPrevented||this._removeViewHandles()}};_=e([i("esri.views.draw.MultipointDrawAction")],_);const v=Object.freeze(Object.defineProperty({__proto__:null,get MultipointDrawAction(){return _}},Symbol.toStringTag,{value:"Module"}));export{_ as M,v as a};