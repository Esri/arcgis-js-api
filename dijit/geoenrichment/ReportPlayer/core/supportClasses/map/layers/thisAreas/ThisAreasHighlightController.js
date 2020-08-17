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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/Deferred","dojo/on","dijit/Destroyable","../../MapEventUtil"],(function(e,r,i,a,s){return e(a,{_hasRegisteredLayers:!1,_hasRegisteredTables:!1,constructor:function(e){this._graphicLayerInfos={},this._registerTableDfds=[],this._highlightTableForAreaIndexFuncs=[],this._pendingLayerInfos={}},_highlightTableForAreaIndexFuncs:null,_registerTableDfds:null,registerTable:function(e){this._highlightTableForAreaIndexFuncs.push(e.highlightTableForAreaIndex);var i=new r;return this._registerTableDfds.push(i),this._hasRegisteredLayers&&this._doRegisterTables(),this._hasRegisteredTables||(this._hasRegisteredTables=!0,this._doRegisterLayers()),i.promise},_doRegisterTables:function(){this._registerTableDfds.forEach((function(e){e.resolve()})),this._registerTableDfds.length=0},_graphicLayerInfos:null,_pendingLayerInfos:null,setThisAreaLayer:function(e,r,i,a){this._unSetInfo(e);var s={graphicsLayer:r,areaIndex:a.thisAreaIndex,getGraphicForAreaIndexFunc:a.getGraphicForAreaIndexFunc,setGraphicHighlightedFunc:a.setGraphicHighlightedFunc,layerMouseOverHandle:null,layerMouseOutHandle:null,highlightedGraphic:null,map:i};this._pendingLayerInfos[e]=s,this._hasRegisteredTables&&this._doRegisterLayers(),this._hasRegisteredLayers||(this._hasRegisteredLayers=!0,this._doRegisterTables())},_doRegisterLayers:function(){for(var e in this._pendingLayerInfos){var r=this._pendingLayerInfos[e];this._graphicLayerInfos[e]=r,this._addLayerListeners(r)}this._pendingLayerInfos={}},_addLayerListeners:function(e){var r,a=this,h=e.graphicsLayer;e.layerMouseOverHandle=s.onLayerMouseOver(h,e.map,(function(s){s.graphic&&s.graphic._graphicsLayer===h&&r!==s.graphic&&(e.layerMouseOutHandle&&e.layerMouseOutHandle.remove(),e.layerMouseOutHandle=null,r&&e.setGraphicHighlightedFunc(r,!1),r=s.graphic,a._highlightTableForAreaIndexFuncs.forEach((function(r){r(e.areaIndex)})),e.setGraphicHighlightedFunc(r,!0),e.layerMouseOutHandle=i.once(h,"mouse-out",(function(i){a._highlightTableForAreaIndexFuncs.forEach((function(e){e(null)})),r&&e.setGraphicHighlightedFunc(r,!1),r=null})))}))},highlightGraphicForAreaIndex:function(e){for(var r in this._graphicLayerInfos){var i=this._graphicLayerInfos[r];i.highlightedGraphic&&(i.setGraphicHighlightedFunc(i.highlightedGraphic,!1),i.highlightedGraphic=null);var a=i.getGraphicForAreaIndexFunc(e);a&&(i.setGraphicHighlightedFunc(a,!0),i.highlightedGraphic=a)}},_unSetInfo:function(e){var r=this._graphicLayerInfos[e];delete this._graphicLayerInfos[e],r&&(r.layerMouseOverHandle&&r.layerMouseOverHandle.remove(),r.layerMouseOutHandle&&r.layerMouseOutHandle.remove())},_unSetLayers:function(){Object.keys(this._graphicLayerInfos).forEach(this._unSetInfo.bind(this)),this._graphicLayerInfos={}},destroy:function(){this._unSetLayers()}})}));
