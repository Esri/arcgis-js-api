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

define(["dojo/_base/declare","dojo/when","dojo/dom-class","dojo/window","dojo/on","esri/dijit/geoenrichment/utils/DomUtil","../PlayerResizeModes","../PlayerViewModes"],function(t,i,e,h,s,r,o,n){return t(null,{_width:0,_height:0,_measuredWinBox:null,_initSmartLayout:function(){var t=this;this.resizeMode===o.FIT_WINDOW&&this.own(s(window,"resize",function(){setTimeout(function(){t._measuredWinBox=null,t.resize()})})),this._resize()},_resize:function(t){switch(t=t||{},e.remove(this.domNode,"esriGEReportPlayerFullScreen esriGEReportPlayerAutoResize esriGEReportPlayerManualResize"),this.resizeMode){case o.FIT_WINDOW:return this._resize_fitWindow(t);case o.AUTO:return this._resize_auto(t);case o.MANUAL:return this._resize_manual(t)}},_resize_fitWindow:function(t){var s=this;if(this._measuredWinBox||(r.hide(this.domNode),this._measuredWinBox=h.getBox(),r.show(this.domNode)),this._width=this._maxWidth=this._measuredWinBox.w,this._height=this._maxHeight=this._measuredWinBox.h,e.add(this.domNode,"esriGEReportPlayerFullScreen"),this.domNode.style.width=this._width+"px",this.domNode.style.height=this._height+"px",this._currentReportContainer)return this._currentReportContainer.setMaxWidth&&this._currentReportContainer.setMaxWidth(this._maxWidth),this._currentReportContainer.setMaxHeight&&this._currentReportContainer.setMaxHeight(this._maxHeight-this._getToolbarHeight()),i(this._currentReportContainer.resize(this._width,this._height-this._getToolbarHeight()),function(){s._emitResizedEvent(t.isPaginating)})},_resize_auto:function(t){var h=this;if(this._width=0,this._height=0,e.add(this.domNode,"esriGEReportPlayerAutoResize"),this.domNode.style.width="auto",this.domNode.style.height="auto",this._currentReportContainer)return this._currentReportContainer.setMaxWidth&&this._currentReportContainer.setMaxWidth(this._maxWidth),this._currentReportContainer.setMaxHeight&&this._currentReportContainer.setMaxHeight(this._maxHeight-this._getToolbarHeight()),i(this._currentReportContainer.resize(0,0),function(){h._emitResizedEvent(t.isPaginating)})},_resize_manual:function(t){var h=this;if(this._width=void 0!==t.width?t.width:this._width,this._height=void 0!==t.height?t.height:this._height,this._width&&this._height&&(this._maxWidth&&(this._width=Math.min(this._maxWidth,this._width)),this._maxHeight&&(this._height=Math.min(this._maxHeight,this._height)),e.add(this.domNode,"esriGEReportPlayerManualResize"),this.domNode.style.width=this._width+"px",this.domNode.style.height=this._height+"px",this._currentReportContainer))return this._currentReportContainer.setMaxWidth&&this._currentReportContainer.setMaxWidth(this._maxWidth||this._width),this._currentReportContainer.setMaxHeight&&this._currentReportContainer.setMaxHeight((this._maxHeight||this._height)-this._getToolbarHeight()),i(this._currentReportContainer.resize(this._width,this._height-this._getToolbarHeight()),function(){h._emitResizedEvent(t.isPaginating)})},_getToolbarHeight:function(){return this.showToolbarInPopup?0:50},_maxWidth:0,_maxHeight:0,setMaxWidth:function(t){this._maxWidth=t},setMaxHeight:function(t){this._maxHeight=t}})});