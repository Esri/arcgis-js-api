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

define(["require","exports","../../../../../core/tsSupport/decorateHelper","../../../../../core/tsSupport/extendsHelper","../../../../../core/tsSupport/generatorHelper","../../../../../core/tsSupport/awaiterHelper","../../../../../core/tsSupport/assignHelper","../../../../../core/Handles","../../../../../core/maybe","../manipulatorDragUtils","./Manipulation","./moveUtils","../../../../interactive/GraphicManipulator"],(function(e,t,r,a,i,o,n,p,l,c,u,s,h){Object.defineProperty(t,"__esModule",{value:!0});var _=function(e){function t(t){var r=e.call(this)||this;return r._handles=new p,r._view=t.view,r._tool=t.tool,r._graphicState=t.graphicState,r._createManipulator(),r.forEachManipulator((function(e){return r._tool.manipulators.add(e)})),r}return a(t,e),t.prototype.destroy=function(){var e=this;this._handles.destroy(),this.forEachManipulator((function(t){e._tool.manipulators.remove(t),t.destroy()})),this._tool=null,this._view=null,this._manipulator=null,this._graphicState=null},t.prototype.forEachManipulator=function(e){e(this._manipulator,1)},t.prototype.createGraphicDragPipeline=function(e){var t=this;return s.createGraphicMoveDragPipeline(this._graphicState,e,(function(e){return t.createDragPipeline(e)}))},t.prototype.createDragPipeline=function(e){var t=this._view,r=this._graphicState.graphic,a=l.isSome(r.geometry)?r.geometry.spatialReference:null;return c.createManipulatorDragEventPipeline(this._manipulator,(function(i,o,n,p){var l=o.next(c.screenToMapXYForGraphic(p,t,r,a)).next(c.addMapDelta()).next(c.addScreenDelta());e(i,l,n,p)}))},t.prototype._createManipulator=function(){var e=this._view,t=this._graphicState.graphic;this._manipulator=new h.GraphicManipulator({graphic:t,view:e,selectable:!0,cursor:"move"})},t}(u.Manipulation);t.MoveXYGraphicManipulation=_}));