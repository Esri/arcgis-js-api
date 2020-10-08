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

define(["require","exports","../../../../../core/Handles","../../../../../core/maybe","../../../../../core/screenUtils","../../../../../layers/graphics/hydratedFeatures","../../editingTools/dragEventPipeline3D","./AreaMeasurement3DView","../../../../interactive/dragEventPipeline"],(function(e,t,n,i,o,a,r,s,d){"use strict";function p(e){return"mouse"!==e.pointerType||0===e.button}return(function(){function e(e,t,i){this._manipulators=i,this._handles=new n,this._tempPickRequest=new s.PickRequest,this.model=e,this.view=t,this.model.reset(),this._setupManipulators()}return e.prototype.destroy=function(){this._handles.destroy(),this._handles=null},e.prototype.handleInputEvent=function(e){switch(e.type){case"immediate-click":this._handleImmediateClick(e);break;case"pointer-move":this._handlePointerMove(e);break;case"drag":this._handleDrag(e);break;case"key-down":this._handleKeyDown(e)}},e.prototype._setupManipulators=function(){var e=this,t=function(e){return"manipulator-"+e},n=0,o=function(o,s){e._handles.add([d.createManipulatorDragEventPipeline(s,(function(t,s,d){var p=r.hideManipulatorWhileDragging(t),u=i.unwrap(e.view.manipulatorIdToVertexId(o));s.next(function(t){return function(o){return"start"===o.action&&(n++,e.model.lastDraggedVertex=i.unwrap(e.view.manipulatorIdToVertexId(t)),"measured"===e.model.state&&(e.model.state="editing")),o}}(o)).next(p).next((function(t){return"end"===t.action?(0==--n&&"editing"===e.model.state&&(e.model.state="measured"),null):t})).next(e.view.screenToMap3D()).next((function(n){t.location=n.mapEnd,e.model.path.update(u,a.clonePoint(n.mapEnd))}));var l=a.clonePoint(e.model.path.vertex(u));d.next(p).next((function(){e.model.path.update(u,l),t.location=l}))})),s.events.on("double-click",(function(t){p(t)&&("drawing"===e.model.state&&e.model.finishMeasurement(),t.stopPropagation())}))],t(o))};this._manipulators.forEach((function(e){var t=e.id,n=e.manipulator;o(t,n)})),this._handles.add([this._manipulators.on("after-add",(function(e){var t=e.item,n=t.id,i=t.manipulator;o(n,i)})),this._manipulators.on("after-remove",(function(n){!function(n){e._handles.remove(t(n))}(n.item.id)}))])},e.prototype._handleDrag=function(e){"editing"===this.model.state&&e.stopPropagation()},e.prototype._handleImmediateClick=function(e){if(p(e)){var t=o.createScreenPointFromEvent(e);if(this.model.active)switch(this.model.state){case"initial":this._addVertexAt(t)&&(this.model.state="drawing",e.stopPropagation());break;case"drawing":var n=this.view.vertexHandleAt(t,e.pointerType);if(i.isNone(n)){if(this._addVertexAt(t))return}else 0===n&&(this.model.finishMeasurement(),e.stopPropagation())}"mouse"===e.pointerType&&this._hoverAt(t)}},e.prototype._handlePointerMove=function(e){if("mouse"===e.pointerType){var t=o.createScreenPointFromEvent(e);this._hoverAt(t)}},e.prototype._handleKeyDown=function(e){"Enter"===e.key&&"drawing"===this.model.state&&(this.model.finishMeasurement(),e.stopPropagation())},e.prototype._hoverAt=function(e){if(this.view.requiresCursorPoint){var t=this._pick(e);t.mapPoint&&(this.model.cursorPoint=t.mapPoint)}else this.model.cursorPoint=null},e.prototype._addVertexAt=function(e){var t=this._pick(e);return!!t.mapPoint&&(this.model.path.add(t.mapPoint),!0)},e.prototype._pick=function(e){var t=this._tempPickRequest;return t.screenPoint=e,this.view.pick(t)},e}())}));