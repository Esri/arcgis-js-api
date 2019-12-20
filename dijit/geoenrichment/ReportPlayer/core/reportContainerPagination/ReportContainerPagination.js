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

define(["dojo/_base/declare","dojo/dom-class","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/PageNavigator","../supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil","../themes/ReportThemes","./utils/KeyboardNavigationUtil","./utils/MobileGesturesUtil","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/DomUtil","dojo/text!../templates/ReportContainerPagination.html","dojo/i18n!esri/nls/jsapi"],function(e,i,t,n,o,a,s,r,h,g,l,u,d){return d=d.geoenrichment.dijit.ReportPlayer.ReportPlayer,e([t,n],{templateString:u,nls:d,isReportContainerPagination:!0,viewModel:null,theme:null,parentWidget:null,currentFeatureIndex:null,scaleSectionsToFit:!1,maxBulletsLimit:g.isMobileDevice()?6:10,documentOptions:null,infographicPage:null,pageNavigator:null,postCreate:function(){var e=this;this.inherited(arguments),this.infographicPage=this.viewModel.layoutBuilder.createElement("infographicPage",{viewModel:this.viewModel,theme:this.theme,parentWidget:this,keepPagePosition:!1,renderBackgroundImage:!0,currentFeatureIndex:this.currentFeatureIndex,scaleSectionsToFit:this.scaleSectionsToFit,onResized:function(i){e.onResized(i)},onPageIndexChanged:function(i){e.pageNavigator.setCurrentPageIndex(i)}},this.infographicPageDiv),this.own(this.infographicPage),this.pageNavigator=new o({showArrows:!1,getNumPages:function(){return e.infographicPage.getNumItems()},onPageChanged:function(i){e.showSlideAt(i)}}).placeAt(this.pageNavigatorDiv),this.own(this.pageNavigator),this._setEmptyState(!1),g.isMobileDevice()?h.enableMobileGestures(this):r.setUpKeyboardNavigation(this)},resize:function(e,i){this.infographicPage.resize(e,i)},notifyShown:function(){this._pendingJson?(this.fromJson(this._pendingJson),!this._pendingJson&&this.onPendingDataApplied()):this.infographicPage.notifyShown()},getCurrentSlideIndex:function(){return this.infographicPage.getCurrentPageIndex()},showSlideAt:function(e){this.infographicPage.setCurrentPageIndex(e)},showNextSlide:function(){this.infographicPage.showNextPage()},showPreviousSlide:function(){this.infographicPage.showPreviousPage()},_pendingJson:null,fromJson:function(e){if(this._canApplyJson()){this._pendingJson=null,this.documentOptions=e.documentOptions;var t=e.theme&&e.theme.id!==s.GRAPHIC?e.theme:null;this.theme=this.infographicPage.theme=t;var n=a.collectSectionJsons(e,{backgroundForeground:!1,populateWithFloatingElementsBehind:!0});this._setEmptyState(!n.length);var o=n.length>this.maxBulletsLimit;return i[o?"add":"remove"](this.domNode,"hasCustomPaginationBullets"),l[o?"show":"hide"](this.pageNavigatorDiv),this.infographicPage.setItems(n).then(function(){this.pageNavigator.reset()}.bind(this))}this._pendingJson=e},_canApplyJson:function(){return l.isNodeInLayout(this.domNode)},_setEmptyState:function(e){l.hide([this.infographicPageDiv,this.emptyPlaceholder,this.reportBackgroundDiv]),l.show(e?this.emptyPlaceholder:[this.infographicPageDiv,this.reportBackgroundDiv])},getPanelZoomScale:function(e){return this.infographicPage.getPanelScaleByNode(e)},getVisualState:function(){return this.infographicPage.getVisualState()},setVisualState:function(e){return this.infographicPage.setVisualState(e)},onResized:function(e){},onPendingDataApplied:function(){}})});