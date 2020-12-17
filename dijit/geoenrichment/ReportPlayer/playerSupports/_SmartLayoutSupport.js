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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-class","dojo/on","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/DomUtil","../PlayerResizeModes","../PlayerViewModes"],(function(t,i,e,h,s,r,o){return t(null,{_width:0,_height:0,_measuredWinBox:null,_initSmartLayout:function(){var t=this;this.resizeMode===r.FIT_WINDOW&&this.own(e(window,"resize, orientationchange",(function(){setTimeout((function(){t._measuredWinBox=null,t.resize()}))}))),this._resize()},_resize:function(t){switch(t=t||{},i.remove(this.domNode,"esriGEReportPlayerFullScreen esriGEReportPlayerAutoResize esriGEReportPlayerManualResize"),this.resizeMode){case r.FIT_WINDOW:return this._resize_fitWindow(t);case r.AUTO:return this._resize_auto(t);case r.MANUAL:return this._resize_manual(t)}},_resize_fitWindow:function(t){this._measuredWinBox=this._measuredWinBox||s.getWindowBox(),this._width=this._maxWidth=this._measuredWinBox.w,this._height=this._maxHeight=this._measuredWinBox.h,i.add(this.domNode,"esriGEReportPlayerFullScreen"),this.domNode.style.width=this._width+"px",this.domNode.style.height=this._height+"px",this._currentReportContainer&&(this._currentReportContainer.setMaxWidth&&this._currentReportContainer.setMaxWidth(this._maxWidth),this._currentReportContainer.setMaxHeight&&this._currentReportContainer.setMaxHeight(this._maxHeight-this._getToolbarHeight()),this._currentReportContainer.resize(this._width,this._height-this._getToolbarHeight()),this._emitResizedEvent(t.isPaginating))},_resize_auto:function(t){this._width=0,this._height=0,i.add(this.domNode,"esriGEReportPlayerAutoResize"),this.domNode.style.width="auto",this.domNode.style.height="auto",this._currentReportContainer&&(this._currentReportContainer.setMaxWidth&&this._currentReportContainer.setMaxWidth(this._maxWidth),this._currentReportContainer.setMaxHeight&&this._currentReportContainer.setMaxHeight(this._maxHeight-this._getToolbarHeight()),this._currentReportContainer.resize(0,0),this._emitResizedEvent(t.isPaginating))},_resize_manual:function(t){this._width=void 0!==t.width?t.width:this._width,this._height=void 0!==t.height?t.height:this._height,this._width&&this._height&&(this._maxWidth&&(this._width=Math.min(this._maxWidth,this._width)),this._maxHeight&&(this._height=Math.min(this._maxHeight,this._height)),i.add(this.domNode,"esriGEReportPlayerManualResize"),this.domNode.style.width=this._width+"px",this.domNode.style.height=this._height+"px",this._currentReportContainer&&(this._currentReportContainer.setMaxWidth&&this._currentReportContainer.setMaxWidth(this._maxWidth||this._width),this._currentReportContainer.setMaxHeight&&this._currentReportContainer.setMaxHeight((this._maxHeight||this._height)-this._getToolbarHeight()),this._currentReportContainer.resize(this._width,this._height-this._getToolbarHeight()),this._emitResizedEvent(t.isPaginating)))},_getToolbarHeight:function(){if(this.showToolbarInPopup)return 0;var t=this.playerToolbar&&0===this.playerToolbar.toolbarHolder.infographicsSelectDiv.children.length,i=!this.showAreaTitle,e=this._reportData&&(this._reportData.isMultiFeature||1===this._reportData.analysisAreas.length),s=this.viewMode===o.PANELS_IN_SLIDES,r=h.isMobileDevice();return t&&i&&e&&s&&r?0:50},_maxWidth:0,_maxHeight:0,setMaxWidth:function(t){this._maxWidth=t},setMaxHeight:function(t){this._maxHeight=t}})}));