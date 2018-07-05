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

define(["dojo/_base/declare","dojo/dom-style","../reportContainerGrid/utils/ZoomUtil"],function(t,o,e){return t(null,{getZoomInfo:function(){return e.getZoomInfo(this)},setZoomInfo:function(t,o){e.setZoomInfo(this,t,o)},zoomIn:function(t){e.zoomIn(this,t)},zoomOut:function(t){e.zoomOut(this,t)},zoomToFitPageWidth:function(t){e.zoomToFitPageWidth(this,t)},setZoomPercent:function(t,o){e.setZoomPercent(this,t,o)},setBestZoom:function(){e.setBestZoom(this)},resetZoom:function(){e.reset(this)},_syncFillerContainer:function(){if(this.domNode){var t=this.getZoomInfo().scale;if(o.set(this.fillerContainer,"marginTop",""),o.set(this.fillerContainer,{width:o.get(this.scalableContainer,"width")*t+"px",height:o.get(this.scalableContainer,"height")*t+"px"}),this.renderOptions&&this.renderOptions.center){var e=(o.get(this.domNode,"height")-o.get(this.fillerContainer,"height"))/2;o.set(this.fillerContainer,"marginTop",Math.max(this.renderOptions.minTop||0,e)+"px")}this.onViewSyncronized()}},onViewSyncronized:function(){},onZoomChanged:function(){}})});