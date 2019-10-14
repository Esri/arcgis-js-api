// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/Handles","../../../../../core/maybe","../../../../../core/screenUtils","../../../../../geometry/Point","../../../../../layers/graphics/dehydratedFeatures","./AreaMeasurement3DView"],function(e,t,i,o,n,r,a,s,d,p){function h(e){return"mouse"!==e.pointerType||0===e.button}return function(){function e(e,t,i){this._manipulators=i,this._handles=new n,this._tempPickRequest=new p.PickRequest,this.model=e,this.view=t,this.model.reset(),this._setupManipulators()}return e.prototype.destroy=function(){this._handles.destroy(),this._handles=null},e.prototype.handleInputEvent=function(e,t){switch(e.type){case"immediate-click":this._handleImmediateClick(e);break;case"pointer-move":this._handlePointerMove(e);break;case"double-click":this._handleDoubleClick(e);break;case"drag":this._handleDrag(e);break;case"key-down":this._handleKeyDown(e)}},e.prototype._setupManipulators=function(){var e=this,t=function(e){return"manipulator-"+e},i=0,o=function(o,n){e._handles.add(n.watch("dragging",function(t){t?(i++,e.model.lastDraggedVertex=r.expect(e.view.manipulatorIdToVertexId(o)),"measured"===e.model.state&&(e.model.state="editing")):0===--i&&"editing"===e.model.state&&(e.model.state="measured")},!0),t(o)),n.on("drag",function(){var t=r.expect(e.view.manipulatorIdToVertexId(o));e.model.path.update(t,d.clonePoint(n.mapPoint,new s))})},n=function(i){e._handles.remove(t(i))};this._manipulators.forEach(function(e){var t=e.id,i=e.manipulator;o(t,i)}),this._handles.add(this._manipulators.on("change",function(e){e.added.forEach(function(e){var t=e.id,i=e.manipulator;o(t,i)}),e.removed.forEach(function(e){var t=e.id;n(t)})}))},e.prototype._handleDrag=function(e){"editing"===this.model.state&&e.stopPropagation()},e.prototype._handleImmediateClick=function(e){if(h(e)){var t=a.createScreenPointFromEvent(e),i=!1;if(this.model.active)switch(this.model.state){case"initial":this._addVertexAt(t,e.pointerType)&&(this.model.state="drawing",i=!0);break;case"drawing":var o=this.view.vertexHandleAt(t,e.pointerType);if(r.isNone(o)){if(this._addVertexAt(t,e.pointerType))return void e.stopPropagation()}else 0===o&&(this.model.finishMeasurement(),i=!0);break;case"measured":r.isNone(this.view.vertexHandleAt(t,e.pointerType))&&(this.model.clearMeasurement(),this._addVertexAt(t,e.pointerType)&&(this.model.state="drawing",i=!0))}i&&e.stopPropagation(),"mouse"===e.pointerType&&this._hoverAt(t)}},e.prototype._handlePointerMove=function(e){var t=a.createScreenPointFromEvent(e);"mouse"===e.pointerType&&this._hoverAt(t)},e.prototype._handleDoubleClick=function(e){if(h(e)){var t=a.createScreenPointFromEvent(e);return"drawing"===this.model.state&&r.isSome(this.view.vertexHandleAt(t,e.pointerType))?(this.model.finishMeasurement(),void e.stopPropagation()):void 0}},e.prototype._handleKeyDown=function(e){"Escape"===e.key&&"drawing"===this.model.state&&(this.model.clearMeasurement(),e.stopPropagation()),"Enter"===e.key&&"drawing"===this.model.state&&(this.model.finishMeasurement(),e.stopPropagation())},e.prototype._hoverAt=function(e){if(this.view.requiresCursorPoint){var t=this._pick(e);t.mapPoint&&(this.model.cursorPoint=t.mapPoint)}else this.model.cursorPoint=null},e.prototype._addVertexAt=function(e,t){var i=this._pick(e);return!!i.mapPoint&&(this.model.path.add(i.mapPoint),!0)},e.prototype._pick=function(e){var t=this._tempPickRequest;return t.screenPoint=e,this.view.pick(t)},e}()});