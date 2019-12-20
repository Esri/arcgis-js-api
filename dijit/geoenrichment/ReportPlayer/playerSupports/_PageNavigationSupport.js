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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/on","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","../PlayerResizeModes","../PlayerViewModes","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/TooltipUtil","dojo/i18n!esri/nls/jsapi"],function(e,t,i,o,r,a,n,s,g,h){return h=h.geoenrichment.dijit.ReportPlayer.ReportPlayer,e(null,{_currentPageIndex:null,_initPageNavigationControls:function(){var e=this;t(this.prevPageButton,"click",function(){e._showPrevPage()}),t(this.nextPageButton,"click",function(){e._showNextPage()}),s.hide(this.sidePageNavigator),g.setTooltipToNode(this.prevPageButton,h.previousPage),g.setTooltipToNode(this.nextPageButton,h.nextPage)},showPageAt:function(e){this.viewMode===n.FULL_PAGES&&(e=Math.max(0,e),e=Math.min(this.getCurrentReportContainer().getNumberOfPages()-1,e),this._currentPageIndex=e,this.getCurrentReportContainer().showPageAt(e),this._updatePageNavigator())},_updatePageNavigator:function(){var e=this.getCurrentReportContainer()&&this.getCurrentReportContainer().getNumberOfPages&&this.viewMode===n.FULL_PAGES;if(this.playerToolbar.setPageControlsVisible(e),!e)return void s.hide([this.sidePageNavigator]);var t=this.getCurrentReportContainer().getNumberOfPages();if(s[1===t?"hide":"show"]([this.sidePageNavigator]),i[0===this._currentPageIndex?"add":"remove"](this.prevPageButton,"disabled"),i[this._currentPageIndex===t-1?"add":"remove"](this.nextPageButton,"disabled"),this.resizeMode===a.FIT_WINDOW){var g=o.position(this.getCurrentReportContainer().stackContainer);r.set(this.sidePageNavigator,"left",Math.min(g.x+g.w+20,document.body.clientWidth-70)+"px"),r.set(this.sidePageNavigator,"top",Math.max(60,g.y+10)+"px")}this.playerToolbar.updatePageSelect(t,this._currentPageIndex)},_showPrevPage:function(){0!==this._currentPageIndex&&(this._currentPageIndex--,this.showPageAt(this._currentPageIndex))},_showNextPage:function(){this._currentPageIndex!==this.getCurrentReportContainer().getNumberOfPages()-1&&(this._currentPageIndex++,this.showPageAt(this._currentPageIndex))}})});