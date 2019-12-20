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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/decorateHelper","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/generatorHelper","../../../../../core/tsSupport/awaiterHelper","../../../../../core/Handles","../../../../../core/maybe","../../../../../core/watchUtils","../../manipulatorUtils","../manipulatorUtils","../../../../interactive/dragUtils/dragActions","../../../../interactive/dragUtils/dragHandlers"],function(t,a,i,r,e,o,n,l,p,s,c,u,h){Object.defineProperty(a,"__esModule",{value:!0});var d=function(){function t(t){this._handles=new n,this.zManipulator=null,this.tool=t.tool}return t.prototype.destroy=function(){this._clear()},t.prototype._clear=function(){this._handles.removeAll(),l.isSome(this.zManipulator)&&this.tool.manipulators.remove(this.zManipulator),this.zManipulator=null},Object.defineProperty(t.prototype,"dragging",{get:function(){return l.isSome(this.zManipulator)&&this.zManipulator.dragging},enumerable:!0,configurable:!0}),t.prototype.recreateManipulators=function(){var t=this;if(this._clear(),this.zManipulator=c.createGraphicMoveZManipulator({view:this.tool.view,graphic:this.tool.graphic,worldOriented:!1}),l.isSome(this.zManipulator)){this.tool.manipulators.add(this.zManipulator);var a=this.createDragEventMappingFunction(),i=u.createGraphicDragAction(this.tool.graphic),r=h.createManipulatorDragHandler(this.zManipulator,a,i);this._handles.add(r),this._handles.add([p.init(this.tool.graphic,"geometry",function(){l.isSome(t.zManipulator)&&s.placeManipulatorAtGraphic(t.zManipulator,t.tool.graphic)}),this.zManipulator.events.on("immediate-click",function(t){t.stopPropagation()}),p.init(this.tool.graphic,["visible","layer.visible"],function(){l.isSome(t.zManipulator)&&(t.zManipulator.visible=t.tool.graphic.visible&&t.tool.graphic.layer.visible)})])}},t.prototype.updateManipulators=function(t){l.isSome(this.zManipulator)&&(this.zManipulator.modelTransform=t)},t.prototype.createDragEventMappingFunction=function(){var t=this;return function(a){var i=c.createGraphicMoveZScreenDragToMap(t.tool.view,a);return l.isNone(i)?null:function(a){var r=i(a);if(l.isNone(r))return null;switch(a.action){case"start":t.tool.emit("graphic-translate-start",{graphic:t.tool.graphic});break;case"update":t.tool.emit("graphic-translate",{graphic:t.tool.graphic,dx:r.deltaX,dy:r.deltaY,dz:r.deltaZ});break;case"end":t.tool.emit("graphic-translate-stop",{graphic:t.tool.graphic})}return r}}},t}();a.GraphicZTransform=d});