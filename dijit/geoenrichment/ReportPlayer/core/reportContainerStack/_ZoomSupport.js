// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/dom-construct","./utils/ReportQueryUtil","../reportContainerGrid/utils/ZoomUtil","../../toolbar/ZoomUtil","esri/dijit/geoenrichment/utils/animation/AnimationUtil"],(function(t,e,o,i,n,s,l,r){var a={zoomLabel:null,_showTimeoutH:null,_dfd:null,_createLabel:function(){this.zoomLabel=i.create("div",null,document.body);var t=this.zoomLabel.style;t.position="absolute",t.zIndex="10000",t.right="5px",t.bottom="5px",t.backgroundColor="gray",t.color="white",t.padding="5px"},showLabel:function(t,i){var n=this;this._reset(),this._createLabel(),this._showScale(t),this._dfd=new e,this._dfd.promise.then((function(e){"cancel"!==e&&(n._showScale(t),n._showTimeoutH=setTimeout((function(){r.animateFadeOut({domNode:n.zoomLabel})}),1e3))})),o(i,this._dfd.resolve)},_showScale:function(t){this.zoomLabel&&(this.zoomLabel.innerHTML=Math.round(l.getClosestZoomAndUpdateOptions(100*t.getZoomInfo().scale,l.getOptions()))+"%")},_reset:function(){this._dfd&&this._dfd.resolve("cancel"),this._dfd=null,clearTimeout(this._showTimeoutH),this.zoomLabel&&i.destroy(this.zoomLabel),this.zoomLabel=null}};return t(null,{getZoomInfo:function(){return s.getZoomInfo(this)},setZoomInfo:function(t,e){s.setZoomInfo(this,t,e)},zoomIn:function(t){var e=s.zoomIn(this,t);t&&t.showLabel&&a.showLabel(this,e)},zoomOut:function(t){var e=s.zoomOut(this,t);t&&t.showLabel&&a.showLabel(this,e)},zoomToFitPageWidth:function(t){!(t&&t.showAnimation)&&this.isReportContainerStackAll?this.setBestZoom(t):s.zoomToFitPageWidth(this,t)},zoomToFitPageHeight:function(t){s.zoomToFitPageHeight(this,t)},setZoomPercent:function(t,e){s.setZoomPercent(this,t,e)},setBestZoom:function(t){this.isReportContainerStackAll?this.getInnerContainers({noHidden:!0}).length>6?this.resetZoom(t):s.zoomToFitPageWidth(this,t):s.setBestZoom(this,t)},resetZoom:function(t){s.reset(this,t)},syncFillerContainer:function(){this._syncFillerContainer()},_syncFillerContainer:function(){if(this.domNode&&this.fillerContainer){var t=this.getZoomInfo().scale;if(this.fillerContainer.style.marginTop="",this.fillerContainer.style.marginRight="",this.fillerContainer.style.marginBottom="",this.fillerContainer.style.marginLeft="",this.fillerContainer.style.width=this.scalableContainer.clientWidth*t+"px",this.fillerContainer.style.height=this.scalableContainer.clientHeight*t+"px",this.renderOptions&&this.renderOptions.center){var e=(this.domNode.clientHeight-this.fillerContainer.clientHeight)/2;this.fillerContainer.style.marginTop=Math.max(this.renderOptions.minTop,e)+"px"}this.renderOptions&&(this.fillerContainer.style.marginRight=this.renderOptions.minRight+"px",this.fillerContainer.style.marginBottom=this.renderOptions.minBottom+"px",this.fillerContainer.style.marginLeft=this.renderOptions.minLeft+"px"),this.onViewSyncronized()}},getPanelZoomScale:function(t){return n.getPanelInfoByNode(this,t).panelScale*this.getZoomInfo().scale},onViewSyncronized:function(){},emitZoomChangedEvent:function(){this.getSections().forEach((function(t){this._notifySectionAboutScale(t)}),this),this.onZoomChanged()},_notifySectionAboutScale:function(t){var e=this._sectionToInfographicPage(t),o=e.getSections().indexOf(t),i=e.getPanelScaleAt(o)*this.getZoomInfo().scale;t.notifyPanelScaleChanged(i)},onZoomChanged:function(){}})}));