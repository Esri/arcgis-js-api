// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/on","dojo/sniff","dojo/when","dijit/Destroyable"],function(e,i,t,n,r){return e(r,{_info:null,constructor:function(e){this._info=e,this._layerIndexes={},this._rendererJsons={},this._mapInfos={},this._graphicLayerInfos={}},getCalculatorName:function(){return this._info.calculatorName},getVariableObjects:function(){return this._info.variableObjects},getLayerID:function(){return this._info.layerID},getLayerUrl:function(){return this._info.layerUrl},getLayerName:function(){return this._info.layerName},_rendererJsons:null,getRendererJson:function(e){return this._rendererJsons[e]},setRendererJson:function(e,i){this._rendererJsons[e]=i},_layerIndexes:null,getLayerIndex:function(e){return this._layerIndexes[e]},setLayerIndex:function(e,i){this._layerIndexes[e]=i},_mapInfos:null,getMapInfo:function(e){return this._mapInfos[e]},getMapInfos:function(){var e=[];for(var i in this._mapInfos)e.push(this._mapInfos[i]);return e},setMapInfo:function(e,i){this._mapInfos[e]=i},_getPointIndexForCellFunc:null,_getCellForPointAtFunc:null,_highlightedCell:null,setLocatorTableCallbacks:function(e){this._getPointIndexForCellFunc=e.getPointIndexForCellFunc,this._getCellForPointAtFunc=e.getCellForPointAtFunc},registerLocatorTable:function(e){var t,n=this;e.set("highlightRowsOnHover",!0),i(e.domNode,"mouseover,mousemove",function(){var i=e.getOverFieldCell();i&&i!==t&&(t=i,n._highlightGraphicForFieldCell(t))}),i(e.domNode,"mouseout",function(){n._highlightGraphicForFieldCell(null),t=null})},_highlightRowForGraphic:function(e,i){if(this._highlightedCell&&(this._highlightedCell.parentGrid&&this._highlightedCell.parentGrid.setCellRowHighlighted(this._highlightedCell,!1),this._highlightedCell=null),i&&this._getCellForPointAtFunc){var t=e.getPointIndexForGraphicFunc(i);n(this._getCellForPointAtFunc(t),function(e){e&&e.parentGrid&&(e.parentGrid.setCellRowHighlighted(e,!0),this._highlightedCell=e)}.bind(this))}},_graphicLayerInfos:null,setLocatorPointsLayer:function(e,i,t,n){this._unSetInfo(e);var r={graphicsLayer:i,getPointIndexForGraphicFunc:n.getPointIndexForGraphicFunc,getGraphicForPointAtFunc:n.getGraphicForPointAtFunc,setGraphicHighlightedFunc:n.setGraphicHighlightedFunc,layerMouseOverHandle:null,layerMouseOutHandle:null,highlightedGraphic:null};this._graphicLayerInfos[e]=r,this._addLayerListeners(r,t)},_addLayerListeners:function(e,n){var r,o=this,h=e.graphicsLayer;e.layerMouseOverHandle=i(t("touch")?n:h,t("touch")?"mouse-down, mouse-move":"mouse-move",function(t){t.graphic&&t.graphic._graphicsLayer===h&&r!==t.graphic&&(e.layerMouseOutHandle&&e.layerMouseOutHandle.remove(),e.layerMouseOutHandle=null,r&&e.setGraphicHighlightedFunc(r,!1),r=t.graphic,o._highlightRowForGraphic(e,r),e.setGraphicHighlightedFunc(r,!0),e.layerMouseOutHandle=i.once(h,"mouse-out",function(i){o._highlightRowForGraphic(e,null),r&&e.setGraphicHighlightedFunc(r,!1),r=null}))})},_highlightGraphicForFieldCell:function(e){for(var i in this._graphicLayerInfos){var t=this._graphicLayerInfos[i];if(t.highlightedGraphic&&(t.setGraphicHighlightedFunc(t.highlightedGraphic,!1),t.highlightedGraphic=null),e){var n=this._getPointIndexForCellFunc(e),r=t.getGraphicForPointAtFunc(n);r&&(t.setGraphicHighlightedFunc(r,!0),t.highlightedGraphic=r)}}},setPointVisibleAt:function(e,i){for(var t in this._graphicLayerInfos){var n=this._graphicLayerInfos[t],r=n.getGraphicForPointAtFunc(e);r&&r[i?"show":"hide"]()}},_unSetInfo:function(e){var i=this._graphicLayerInfos[e];delete this._graphicLayerInfos[e],i&&(i.layerMouseOverHandle&&i.layerMouseOverHandle.remove(),i.layerMouseOutHandle&&i.layerMouseOutHandle.remove())},_unSetLayers:function(){Object.keys(this._graphicLayerInfos).forEach(this._unSetInfo.bind(this)),this._graphicLayerInfos={}},destroy:function(){this._unSetLayers()}})});