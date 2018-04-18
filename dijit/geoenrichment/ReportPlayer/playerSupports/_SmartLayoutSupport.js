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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/when","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/window","dojo/on","esri/dijit/geoenrichment/utils/DomUtil","../PlayerResizeModes"],function(e,i,t,s,o,h,r,d,a){return e(null,{postCreate:function(){this.inherited(arguments);var e=this;this.listenToWindowResize&&this.resizeMode===a.FIT_WINDOW&&this.own(r(window,"resize",function(){setTimeout(function(){e.resize()})}))},_width:0,_height:0,resize:function(e,i){return this._resize({width:e,height:i})},_resize:function(e){if(e=e||{},this.resizeMode===a.MANUAL)this._width=void 0!==e.width?e.width:this._width,this._height=void 0!==e.height?e.height:this._height;else if(this.resizeMode===a.FIT_WINDOW){d.hide(this.domNode);var i=h.getBox();d.show(this.domNode),this._width=this._maxWidth=i.w,this._height=this._maxHeight=i.h}this._updateResizeModeDomClass();var t=this.resizeMode===a.AUTO||this.isSlidesView||0===this._width&&0===this._height;return this._doResize(t?void 0:this._width,t?void 0:this._height,e.isPaginating)},_updateResizeModeDomClass:function(){switch(t.remove(this.domNode,"esriGEReportPlayerFullScreen"),t.remove(this.domNode,"esriGEReportPlayerAutoResize"),t.remove(this.domNode,"esriGEReportPlayerManualResize"),this.resizeMode){case a.FIT_WINDOW:t.add(this.domNode,"esriGEReportPlayerFullScreen");break;case a.AUTO:t.add(this.domNode,"esriGEReportPlayerAutoResize");break;case a.MANUAL:t.add(this.domNode,"esriGEReportPlayerManualResize")}},_doResize:function(e,t,s){var h=this;if(o.set(this.domNode,{width:void 0===e?"auto":e+"px",height:void 0===t?"auto":t+"px"}),this._currentReportContainer)return this._applyConstraints(),i(this._currentReportContainer.resize(void 0===e?0:e,void 0===t?0:t),function(){h.playerTabs&&h.playerTabs.resize(),h._emitResizedEvent(s)})},_maxWidth:0,_maxHeight:0,setMaxWidth:function(e){this._maxWidth=e},setMaxHeight:function(e){this._maxHeight=e},_calcMaxWidth:function(){return this._maxWidth},_calcMaxHeight:function(){var e=s.getMarginBox(this.playerHeader).h||0;return Math.max(0,this._maxHeight-e)},_applyConstraints:function(){this._currentReportContainer.setMaxWidth&&this._currentReportContainer.setMaxWidth(this._calcMaxWidth()),this._currentReportContainer.setMaxHeight&&this._currentReportContainer.setMaxHeight(this._calcMaxHeight())}})});