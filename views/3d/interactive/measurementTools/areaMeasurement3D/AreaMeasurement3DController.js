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

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/Handles","../../../../../core/maybe","../../../../../core/screenUtils","../../../../../geometry/Point","../../../../../layers/graphics/dehydratedFeatures","./AreaMeasurement3DView"],(function(e,t,i,o,n,r,a,s,d,p){function u(e){return"mouse"!==e.pointerType||0===e.button}return(function(){function e(e,t,i){this._manipulators=i,this._handles=new n,this._tempPickRequest=new p.PickRequest,this.model=e,this.view=t,this.model.reset(),this._setupManipulators()}return e.prototype.destroy=function(){this._handles.destroy(),this._handles=null},e.prototype.handleInputEvent=function(e){switch(e.type){case"immediate-click":this._handleImmediateClick(e);break;case"pointer-move":this._handlePointerMove(e);break;case"drag":this._handleDrag(e);break;case"key-down":this._handleKeyDown(e)}},e.prototype._setupManipulators=function(){var e=this,t=function(e){return"manipulator-"+e},i=0,o=function(o,n){e._handles.add(n.watch("dragging",(function(t){t?(i++,e.model.lastDraggedVertex=r.expect(e.view.manipulatorIdToVertexId(o)),"measured"===e.model.state&&(e.model.state="editing")):0===--i&&"editing"===e.model.state&&(e.model.state="measured")}),!0),t(o)),n.events.on("drag",(function(){var t=r.expect(e.view.manipulatorIdToVertexId(o));e.model.path.update(t,d.clonePoint(n.mapPoint,new s))})),n.events.on("double-click",(function(t){u(t)&&("drawing"===e.model.state&&e.model.finishMeasurement(),t.stopPropagation())}))};this._manipulators.forEach((function(e){var t=e.id,i=e.manipulator;o(t,i)})),this._handles.add([this._manipulators.on("after-add",(function(e){var t=e.item,i=t.id,n=t.manipulator;o(i,n)})),this._manipulators.on("after-remove",(function(i){!function(i){e._handles.remove(t(i))}(i.item.id)}))])},e.prototype._handleDrag=function(e){"editing"===this.model.state&&e.stopPropagation()},e.prototype._handleImmediateClick=function(e){if(u(e)){var t=a.createScreenPointFromEvent(e);if(this.model.active)switch(this.model.state){case"initial":this._addVertexAt(t)&&(this.model.state="drawing",e.stopPropagation());break;case"drawing":var i=this.view.vertexHandleAt(t,e.pointerType);if(r.isNone(i)){if(this._addVertexAt(t))return}else 0===i&&(this.model.finishMeasurement(),e.stopPropagation())}"mouse"===e.pointerType&&this._hoverAt(t)}},e.prototype._handlePointerMove=function(e){if("mouse"===e.pointerType){var t=a.createScreenPointFromEvent(e);this._hoverAt(t)}},e.prototype._handleKeyDown=function(e){"Enter"===e.key&&"drawing"===this.model.state&&(this.model.finishMeasurement(),e.stopPropagation())},e.prototype._hoverAt=function(e){if(this.view.requiresCursorPoint){var t=this._pick(e);t.mapPoint&&(this.model.cursorPoint=t.mapPoint)}else this.model.cursorPoint=null},e.prototype._addVertexAt=function(e){var t=this._pick(e);return!!t.mapPoint&&(this.model.path.add(t.mapPoint),!0)},e.prototype._pick=function(e){var t=this._tempPickRequest;return t.screenPoint=e,this.view.pick(t)},e}())}));