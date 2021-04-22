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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/on","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","../PlayerResizeModes","../PlayerViewModes","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/TooltipUtil","dojo/i18n!esri/nls/jsapi"],(function(e,t,i,a,o,r,s,n,g,d){return d=d.geoenrichment.dijit.ReportPlayer.ReportPlayer,e(null,{_currentPageIndex:null,_initPageNavigationControls:function(){var e=this;t(this.prevPageButton,"click",(function(){e._showPrevPage()})),t(this.nextPageButton,"click",(function(){e._showNextPage()})),n.hide(this.sidePageNavigator),g.setTooltipToNode(this.prevPageButton,d.previousPage),g.setTooltipToNode(this.nextPageButton,d.nextPage)},showPageAt:function(e){this.viewMode!==s.FULL_PAGES||this.isPlayerOnServer||(e=Math.max(0,e),e=Math.min(this.getCurrentReportContainer().getNumberOfPages()-1,e),this._currentPageIndex=e,this.getCurrentReportContainer().showPageAt(e),this._updatePageNavigator())},_updatePageNavigator:function(){if(this.playerToolbar){var e=this.getCurrentReportContainer()&&this.getCurrentReportContainer().getNumberOfPages&&this.viewMode===s.FULL_PAGES;if(this.playerToolbar.setPageControlsVisible(e),e){var t=this.getCurrentReportContainer().getNumberOfPages(),g=t>1;if(g&&this._provideSideNavigationNodes(),n.display(this.sidePageNavigator,g),g&&(i[0===this._currentPageIndex?"add":"remove"](this.prevPageButton,"disabled"),i[this._currentPageIndex===t-1?"add":"remove"](this.nextPageButton,"disabled"),this.resizeMode===r.FIT_WINDOW)){var d=a.position(this.getCurrentReportContainer().stackContainer);o.set(this.sidePageNavigator,"left",Math.min(d.x+d.w+20,document.body.clientWidth-70)+"px"),o.set(this.sidePageNavigator,"top",Math.max(60,d.y+10)+"px")}this.playerToolbar.updatePageSelect(t,this._currentPageIndex)}else n.hide(this.sidePageNavigator)}},_provideSideNavigationNodes:function(){var e=this;this.sidePageNavigator||(this.sidePageNavigator=n.create("div",{class:"reportPlayer_sidePageNavigator"},this.domNode),this.prevPageButton=n.create("div",{class:"reportPlayer_paginationArrowUp"},this.sidePageNavigator),this.nextPageButton=n.create("div",{class:"reportPlayer_paginationArrowDown"},this.sidePageNavigator),t(this.prevPageButton,"click",(function(){e._showPrevPage()})),t(this.nextPageButton,"click",(function(){e._showNextPage()})),g.setTooltipToNode(this.prevPageButton,d.previousPage),g.setTooltipToNode(this.nextPageButton,d.nextPage))},_showPrevPage:function(){0!==this._currentPageIndex&&(this._currentPageIndex--,this.showPageAt(this._currentPageIndex))},_showNextPage:function(){this._currentPageIndex!==this.getCurrentReportContainer().getNumberOfPages()-1&&(this._currentPageIndex++,this.showPageAt(this._currentPageIndex))}})}));