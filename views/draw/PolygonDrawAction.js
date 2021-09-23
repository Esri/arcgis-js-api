/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../geometry","../../core/Handles","../../core/maybe","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","./DrawingMode","./DrawAction","./DrawTool","./input/DrawEvents","../input/InputManager","../interactive/keybindings","../support/screenUtils","../../geometry/Point"],(function(e,t,i,o,n,r,s,a,d,h,p,c,l,_,v,u,w,g,m){"use strict";function y(e){return"mouse"!==e.pointerType||0===e.button}e.PolygonDrawAction=function(e){function i(t){var i;return(i=e.call(this,t)||this)._panEnabled=!1,i._popVertexOnPointerMove=!1,i._addVertexOnPointerUp=!1,i._activePointerId=null,i._viewHandles=new n,i._undoRedoHandles=new n,i.mode=c.defaultDrawingMode,i}t._inheritsLoose(i,e);var o=i.prototype;return o.initialize=function(){"2d"===this.view.type?(this._addViewHandles(),this._addUndoRedoHandles()):this._addDrawTool(this.view)},o.destroy=function(){"2d"===this.view.type?(this._removeViewHandles(),this._viewHandles.destroy(),this._removeUndoRedoHandles(),this._undoRedoHandles.destroy()):this._removeDrawTool(),this.emit("destroy")},o.undo=function(){e.prototype.undo.call(this),this.notifyChange("vertices")},o.redo=function(){e.prototype.redo.call(this),this.notifyChange("vertices")},o.complete=function(){"2d"===this.view.type?this._completeDrawing():this._drawTool.completeCreateOperation()},o.getGeometryZValue=function(){return this.vertices.length>0&&this.vertices[0].length>2?this.vertices[0][2]:this._get("defaultZ")},o._addViewHandles=function(){this._removeViewHandles(),this._viewHandles.add([this.view.on("click",(e=>{e.stopPropagation()}),u.ViewEventPriorities.TOOL),this.view.on("pointer-down",(e=>{this._shouldHandlePointerEvent(e)&&(this._snappingTask=r.abortMaybe(this._snappingTask),this._activePointerId=e.pointerId,this._addVertexOnPointerUp=!0,this._cursorScreenPoint=g.createScreenPointFromEvent(e),"touch"===e.pointerType&&this._updateCursor(e.native))}),u.ViewEventPriorities.TOOL),this.view.on("pointer-move",(e=>{this._snappingTask=r.abortMaybe(this._snappingTask),this._popVertexOnPointerMove&&(this.undo(),this._popVertexOnPointerMove=!1),this._cursorScreenPoint=g.createScreenPointFromEvent(e),"touch"!==e.pointerType&&this._updateCursor(e.native)}),u.ViewEventPriorities.TOOL),this.view.on("pointer-drag",(e=>{this._shouldHandlePointerEvent(e)&&(this._snappingTask=r.abortMaybe(this._snappingTask),this._cursorScreenPoint=g.createScreenPointFromEvent(e),this._dragEnabled&&!this._panEnabled?this._vertexAddHandler(e):this._addVertexOnPointerUp=!1)}),u.ViewEventPriorities.TOOL),this.view.on("pointer-up",(e=>{if(this._shouldHandlePointerEvent(e))if(this._snappingTask=r.abortMaybe(this._snappingTask),this._activePointerId=null,this._addVertexOnPointerUp){if(!this._clickEnabled)return 1===this.vertices.length&&this.vertices.pop(),void this._drawCompleteHandler(e);this._vertexAddHandler(e)}else{const t="touch"===e.pointerType;this._updateCursor(e.native,t)}}),u.ViewEventPriorities.TOOL),this.view.on("drag",(e=>{this._dragEnabled&&r.isSome(this._activePointerId)&&!this._panEnabled&&e.stopPropagation()}),u.ViewEventPriorities.TOOL),this.view.on("drag",["Shift"],(e=>{e.stopPropagation()}),u.ViewEventPriorities.TOOL),this.view.on("double-click",(e=>{e.stopPropagation(),this._drawCompleteHandler(e)}),u.ViewEventPriorities.TOOL),this.view.on("double-click",["Control"],(e=>{e.stopPropagation(),this._drawCompleteHandler(e)}),u.ViewEventPriorities.TOOL),this.view.on("key-down",(e=>{const{key:t,repeat:i}=e;t===w.SKETCH_KEYS.vertexAdd&&!i&&this._cursorScreenPoint?(e.stopPropagation(),this._snappingTask=r.abortMaybe(this._snappingTask),this._vertexAddHandler(e)):t!==w.SKETCH_KEYS.complete||i?t!==w.SKETCH_KEYS.undo||this.interactiveUndoDisabled||i?t!==w.SKETCH_KEYS.redo||this.interactiveUndoDisabled||i?t!==w.SKETCH_KEYS.pan||i||(e.stopPropagation(),this._panEnabled=!0):(e.stopPropagation(),this.redo()):(e.stopPropagation(),this.undo()):(e.stopPropagation(),this._drawCompleteHandler(e))}),u.ViewEventPriorities.TOOL),this.view.on("key-up",(e=>{e.key===w.SKETCH_KEYS.pan&&(e.stopPropagation(),this._panEnabled=!1)}),u.ViewEventPriorities.TOOL)])},o._addUndoRedoHandles=function(){this._removeUndoRedoHandles(),this._undoRedoHandles.add([this._editGeometryOperations.on("vertex-remove",(e=>{if(this.notifyChange("vertices"),"undo"===e.operation){const t=this._nativeEventHistory.undoStack.pop();this._nativeEventHistory.redoStack.push(t);const i=[...this._committedVertices];r.isSome(this._stagedVertex)&&i.push(this._coordinateHelper.pointToArray(this._stagedVertex)),this.emit("undo",new v.VertexRemoveEvent(this.view,t,e.vertices[0].index,i))}})),this._editGeometryOperations.on("vertex-add",(e=>{if(this.notifyChange("vertices"),"apply"===e.operation){const e=this._nativeEventHistory.undoStack[this._nativeEventHistory.undoStack.length],t=this._committedVertices.length-1,i=new v.VertexAddEvent(this.view,e,t,this.vertices);this.emit("vertex-add",i),i.defaultPrevented&&(this._popVertexOnPointerMove=!0)}else if("redo"===e.operation){const t=this._nativeEventHistory.redoStack.pop();this._nativeEventHistory.undoStack.push(t);const i=[...this._committedVertices];r.isSome(this._stagedVertex)&&i.push(this._coordinateHelper.pointToArray(this._stagedVertex)),this.emit("redo",new v.VertexAddEvent(this.view,t,e.vertices[0].index,i))}}))])},o._removeViewHandles=function(){this._viewHandles.removeAll()},o._removeUndoRedoHandles=function(){this._undoRedoHandles.removeAll()},o._addDrawTool=function(e){this._drawTool=new _.DrawTool({view:e,elevationInfo:this.elevationInfo,hasZ:this.hasZ,geometryType:"polygon",mode:this.mode}),this.view.addAndActivateTool(this._drawTool),this._drawTool.on("vertex-add",(e=>{1===e.vertices.length&&this.emit("vertex-add",new v.VertexAddEvent(this.view,null,e.vertices[0].vertexIndex,this._drawTool.getVertexCoords()))})),this._drawTool.on("cursor-update",(e=>{1===e.vertices.length&&this.emit("cursor-update",new v.CursorUpdateEvent(this.view,null,e.vertices[0].vertexIndex,this._drawTool.getVertexCoords()))})),this._drawTool.on("complete",(e=>{this.emit("draw-complete",new v.DrawCompleteEvent(null,this._drawTool.getVertexCoords())),this._removeDrawTool()}))},o._removeDrawTool=function(){this.view.tools.remove(this._drawTool),this._drawTool=r.destroyMaybe(this._drawTool)},o._addVertex=function(e,t){const i=this._coordinateHelper.arrayToVector(e);if(this._isDuplicateOfLastVertex(i))return;this._lastVertexUnsnapped=this._stagedVertexUnsnapped,this._popCursorVertex(),this._editGeometryOperations.appendVertex(i);const o=t||new Event("placeholder");this._nativeEventHistory.undoStack.push(o)},o._updateCursor=function(e,t=!1){if(this._popCursorVertex(),!this._cursorScreenPoint)return;const i=this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);if(r.isSome(i)&&!t){this._pushCursorVertex(i.vertex);const t=()=>new v.CursorUpdateEvent(this.view,e,this._activeComponent.vertices.length,this.vertices,r.isSome(this._stagedVertex)?new m(this._stagedVertex):null);this.emit("cursor-update",t()),r.isSome(this._snappingTask)&&this._snappingTask.promise.then((e=>{e.valid&&this.emit("cursor-update",t())}),(()=>{}))}},o._completeDrawing=function(e){if(this._activePointerId=null,this._popCursorVertex(),this._committedVertices.length<3)return;this._snappingTask=r.abortMaybe(this._snappingTask),r.isSome(this._snappingManager)&&this._snappingManager.doneSnapping();const t=new v.DrawCompleteEvent(e,this.vertices);this.emit("draw-complete",t),t.defaultPrevented||this._removeViewHandles()},o._shouldHandlePointerEvent=function(e){return y(e)&&(r.isNone(this._activePointerId)||this._activePointerId===e.pointerId)},t._createClass(i,[{key:"_dragEnabled",get:function(){return"freehand"===this.mode||"hybrid"===this.mode}},{key:"_clickEnabled",get:function(){return"click"===this.mode||"hybrid"===this.mode}}]),i}(l),i.__decorate([s.property()],e.PolygonDrawAction.prototype,"_dragEnabled",null),i.__decorate([s.property()],e.PolygonDrawAction.prototype,"_clickEnabled",null),i.__decorate([s.property({type:c.drawingModes})],e.PolygonDrawAction.prototype,"mode",void 0),e.PolygonDrawAction=i.__decorate([p.subclass("esri.views.draw.PolygonDrawAction")],e.PolygonDrawAction),Object.defineProperty(e,"__esModule",{value:!0})}));
