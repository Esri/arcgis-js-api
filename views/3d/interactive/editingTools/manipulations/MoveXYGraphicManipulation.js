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

define(["require","exports","tslib","../../../../../core/Handles","../../../../../core/maybe","../dragEventPipeline3D","./Manipulation","./moveUtils","../../../../interactive/dragEventPipeline","../../../../interactive/GraphicManipulator"],(function(t,e,i,a,r,n,o,p,l,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MoveXYGraphicManipulation=void 0;var u=function(t){function e(e){var i=t.call(this)||this;return i._handles=new a,i._view=e.view,i._tool=e.tool,i._graphicState=e.graphicState,i._createManipulator(),i.forEachManipulator((function(t){return i._tool.manipulators.add(t)})),i}return i.__extends(e,t),e.prototype.destroy=function(){var t=this;this._handles.destroy(),this.forEachManipulator((function(e){t._tool.manipulators.remove(e),e.destroy()})),this._tool=null,this._view=null,this._manipulator=null,this._graphicState=null},e.prototype.forEachManipulator=function(t){t(this._manipulator,1)},e.prototype.createGraphicDragPipeline=function(t){var e=this;return p.createGraphicMoveDragPipeline(this._graphicState,t,(function(t){return e.createDragPipeline(t)}))},e.prototype.createDragPipeline=function(t){var e=this._view,i=this._graphicState.graphic,a=r.isSome(i.geometry)?i.geometry.spatialReference:null;return l.createManipulatorDragEventPipeline(this._manipulator,(function(r,o,p,c){var u=o.next(n.screenToMapXYForGraphic(c,e,i,a)).next(l.addMapDelta()).next(l.addScreenDelta());t(r,u,p,c)}))},e.prototype._createManipulator=function(){var t=this._view,e=this._graphicState.graphic;this._manipulator=new c.GraphicManipulator({graphic:e,view:t,selectable:!0,cursor:"move"})},e}(o.Manipulation);e.MoveXYGraphicManipulation=u}));