/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/Handles","../../../../../core/maybe","../dragEventPipeline3D","./Manipulation","./moveUtils","../../../../interactive/dragEventPipeline","../../../../interactive/GraphicManipulator"],(function(e,t,i,a,r,n,o,l,c){"use strict";let p=function(e){function n(t){var a;return(a=e.call(this)||this)._handles=new i,a._view=t.view,a._tool=t.tool,a._graphicState=t.graphicState,a._createManipulator(),a.forEachManipulator((e=>a._tool.manipulators.add(e))),a}t._inheritsLoose(n,e);var p=n.prototype;return p.destroy=function(){this._handles.destroy(),this.forEachManipulator((e=>{this._tool.manipulators.remove(e),e.destroy()})),this._tool=null,this._view=null,this._manipulator=null,this._graphicState=null},p.forEachManipulator=function(e){e(this._manipulator,1)},p.createGraphicDragPipeline=function(e){return o.createGraphicMoveDragPipeline(this._graphicState,e,(e=>this.createDragPipeline(e)),this._view.state.viewingMode)},p.createDragPipeline=function(e){const t=this._view,i=this._graphicState.graphic,n=a.isSome(i.geometry)?i.geometry.spatialReference:null;return l.createManipulatorDragEventPipeline(this._manipulator,((a,o,c,p,s)=>{const h=o.next(r.screenToMapXYForGraphic(s,t,i,n)).next(l.addMapDelta()).next(l.addScreenDelta());e(a,h,c,p,s)}))},p._createManipulator=function(){const e=this._view,t=this._graphicState.graphic;this._manipulator=new c.GraphicManipulator({graphic:t,view:e,selectable:!0,cursor:"move"})},n}(n.Manipulation);e.MoveXYGraphicManipulation=p,Object.defineProperty(e,"__esModule",{value:!0})}));
