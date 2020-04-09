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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","./utils/ZoomUtil"],(function(t,i){return t(null,{getZoomInfo:function(){return i.getZoomInfo(this)},setZoomInfo:function(t,n){i.setZoomInfo(this,t,n)},zoomIn:function(t){i.zoomIn(this,t)},zoomOut:function(t){i.zoomOut(this,t)},zoomToFitPage:function(t){i.zoomToFitPage(this,t)},zoomToFitPageWidth:function(t){i.zoomToFitPageWidth(this,t)},setZoomPercent:function(t,n){i.setZoomPercent(this,t,n)},setBestZoom:function(){i.setBestZoom(this)},resetZoom:function(){i.reset(this)},syncFillerContainer:function(){this._syncFillerContainer()},_syncFillerContainer:function(){if(this.domNode){var t=this.getZoomInfo().scale;if(this.fillerContainer.style.marginTop="",this.fillerContainer.style.marginRight="",this.fillerContainer.style.marginBottom="",this.fillerContainer.style.marginLeft="",this.fillerContainer.style.width=this.scalableContainer.clientWidth*t+"px",this.fillerContainer.style.height=this.scalableContainer.clientHeight*t+"px",this.renderOptions&&this.renderOptions.center){var i=(this.mainContainer.clientHeight-this.fillerContainer.clientHeight)/2;this.fillerContainer.style.marginTop=Math.max(this.renderOptions.minTop,i)+"px"}this.renderOptions&&(this.fillerContainer.style.marginRight=this.renderOptions.minRight+"px",this.fillerContainer.style.marginBottom=this.renderOptions.minBottom+"px",this.fillerContainer.style.marginLeft=this.renderOptions.minLeft+"px"),this.onViewSyncronized()}},onViewSyncronized:function(){},emitZoomChangedEvent:function(){this.onZoomChanged()},onZoomChanged:function(){}})}));