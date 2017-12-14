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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/HandleRegistry","../../../../../geometry/ScreenPoint","../../../../input/InputHandler","../support/inputUtils"],function(t,e,n,o,r,a,i){function l(t){return"mouse"===t["native"].pointerType}var d=function(t){function e(e,n){var r=t.call(this,!0)||this;return r._dragHandle=null,r._viewEventHandles=new o,r._tool=e,r._controller=n,r.registerIncoming("first-click",function(t){return r._handleFirstClick(t)}),r.registerIncoming("click",function(t){return r._handleClick(t)}),r.registerIncoming("double-click",function(t){return r._handleDoubleClick(t)}),r.registerIncoming("drag",function(t){return r._handleDrag(t)}),r.registerIncoming("pointer-move",function(t){return r._handlePointerMove(t)}),r.registerIncoming("key-down",function(t){return r._handleKeyDown(t)}),r}return n(e,t),e.prototype.onInstall=function(e){t.prototype.onInstall.call(this,e);for(var n=this._tool.view,o=0,r=["click","double-click","drag"];o<r.length;o++){var a=r[o];this._viewEventHandles.add(n.on(a,function(){}))}},e.prototype.onUninstall=function(){t.prototype.onUninstall.call(this),this._viewEventHandles.removeAll()},e.prototype._handleDrag=function(t){var e=t.data.pointers[0].currentEvent,n=new r([e.x,e.y]);l(t.data.pointers[0].startEvent)&&0!==t.data.pointers[0].startEvent["native"].button||("start"===t.data.action?"measured"===this._controller.model.state&&(this._dragHandle=this._controller.handleAt(n),this._dragHandle&&(this._controller.model.state="editing",this._controller.model.draggedHandles.add(this._dragHandle),t.stopPropagation())):"update"===t.data.action?null!==this._dragHandle&&(this._controller.moveHandleTo(this._dragHandle,n),t.stopPropagation()):"end"===t.data.action&&null!==this._dragHandle&&(t.stopPropagation(),this._controller.model.draggedHandles.remove(this._dragHandle),this._dragHandle=null,this._controller.model.finishedMeasurement({cameraAboveGround:this._controller.view.cameraAboveGround}),l(t.data.pointers[0].startEvent)||(this._controller.model.hoveredHandle=null)))},e.prototype._handlePointerMove=function(t){var e=i.screenPointFromEvent(t);l(t.data)&&(this._controller.hoverAt(e),"drawing"===this._controller.model.state&&(this._controller.endAt(e),t.stopPropagation()))},e.prototype._handleFirstClick=function(t){var e=i.screenPointFromEvent(t);if(!l(t.data)||0===t.data["native"].button){switch(this._controller.model.state){case"initial":if(this._controller.startAt(i.screenPointFromEvent(t),t.data["native"].pointerType))return this._controller.model.state="drawing",void t.stopPropagation();break;case"drawing":if(this._controller.endAt(e,t.data["native"].pointerType))return this._controller.model.finishedMeasurement({cameraAboveGround:this._controller.view.cameraAboveGround}),void t.stopPropagation();break;case"measured":if(null===this._controller.handleAt(e)&&(this._controller.clearMeasurement(),this._controller.startAt(e,t.data["native"].pointerType)))return this._controller.model.state="drawing",void t.stopPropagation()}l(t.data)&&this._controller.hoverAt(e)}},e.prototype._handleClick=function(t){l(t.data)&&0!==t.data["native"].button||t.stopPropagation()},e.prototype._handleDoubleClick=function(t){l(t.data)&&0!==t.data["native"].button||t.stopPropagation()},e.prototype._handleKeyDown=function(t){var e=this._controller.model.state;"Escape"===t.data.key&&"drawing"===e&&(this._controller.clearMeasurement(),t.stopPropagation())},e}(a.InputHandler);return d});