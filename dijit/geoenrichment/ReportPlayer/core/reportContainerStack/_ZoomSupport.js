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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-style","./utils/ReportQueryUtil","../reportContainerGrid/utils/ZoomUtil"],function(t,e,o,i){return t(null,{getZoomInfo:function(){return i.getZoomInfo(this)},setZoomInfo:function(t,e){i.setZoomInfo(this,t,e)},zoomIn:function(t){i.zoomIn(this,t)},zoomOut:function(t){i.zoomOut(this,t)},zoomToFitPageWidth:function(t){i.zoomToFitPageWidth(this,t)},setZoomPercent:function(t,e){i.setZoomPercent(this,t,e)},setBestZoom:function(){i.setBestZoom(this)},resetZoom:function(){i.reset(this)},_syncFillerContainer:function(){if(this.domNode){var t=this.getZoomInfo().scale;if(e.set(this.fillerContainer,"marginTop",""),e.set(this.fillerContainer,{width:e.get(this.scalableContainer,"width")*t+"px",height:e.get(this.scalableContainer,"height")*t+"px"}),this.renderOptions&&this.renderOptions.center){var o=(e.get(this.domNode,"height")-e.get(this.fillerContainer,"height"))/2;e.set(this.fillerContainer,"marginTop",Math.max(this.renderOptions.minTop||0,o)+"px")}this.renderOptions&&(this.fillerContainer.style.marginRight=this.renderOptions.minRight+"px",this.fillerContainer.style.marginBottom=this.renderOptions.minBottom+"px",this.fillerContainer.style.marginLeft=this.renderOptions.minLeft+"px"),this.onViewSyncronized()}},getPanelZoomScale:function(t){return o.getPanelInfoByNode(this,t).panelScale*this.getZoomInfo().scale},onViewSyncronized:function(){},onZoomChanged:function(){}})});