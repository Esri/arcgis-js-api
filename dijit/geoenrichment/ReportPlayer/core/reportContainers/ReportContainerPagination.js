// COPYRIGHT © 2017 Esri
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

define(["dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/PageNavigator","esri/dijit/geoenrichment/utils/DomUtil","../supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil","../themes/BackgroundThemeUtil","../themes/ReportThemes","dojo/text!../templates/ReportContainerPagination.html","dojo/i18n!../../../../../nls/jsapi"],function(e,t,i,n,o,a,s,r,h,g,d,u,l,c){return c=c.geoenrichment.dijit.ReportPlayer.ReportPlayer,e([a,s],{templateString:l,nls:c,viewModel:null,themeContext:null,theme:null,parentWidget:null,maxBulletsLimit:10,documentOptions:null,infographicPage:null,pageNavigator:null,postCreate:function(){var e=this;this.inherited(arguments),this.infographicPage=this.viewModel.layoutBuilder.createElement("infographicPage",{viewModel:this.viewModel,themeContext:this.themeContext,theme:this.theme,parentWidget:this,keepPagePosition:!1,onResized:function(t){e.onResized(t),e._renderBackgroundImage(e.infographicPage.getCurrentSectionBox())},onPageIndexChanged:function(t){e.pageNavigator.setCurrentPageIndex(t)}},this.infographicPageDiv),this.own(this.infographicPage),this.pageNavigator=new r({showArrows:!1,getNumPages:function(){return e.infographicPage.getNumItems()},onPageChanged:function(t){e.showSlideAt(t)}}).placeAt(this.pageNavigatorDiv),this.own(this.pageNavigator),this._setEmptyState(!1)},_renderBackgroundImage:function(e){var t=this.viewModel.getDocumentDefaultStyles(this.theme||this.themeContext);t&&(e&&(e={x:e.x-20,y:e.y+7}),n.set(this.reportBackgroundDiv,"backgroundColor",""),d.applyBackgroundImageFromSettings(this.reportBackgroundDiv,t.backgroundImage,{documentOptions:this.documentOptions,pos:e})||t.backgroundColor&&n.set(this.reportBackgroundDiv,"backgroundColor",t.backgroundColor))},resize:function(e,t){this.infographicPage.resize(e,t)},notifyShown:function(){this._pendingJson?(this.fromJson(this._pendingJson),!this._pendingJson&&this.onPendingDataApplied()):this.infographicPage.notifyShown()},getCurrentSlideIndex:function(){return this.infographicPage.getCurrentPageIndex()},showSlideAt:function(e){this.infographicPage.setCurrentPageIndex(e)},showNextSlide:function(){this.infographicPage.showNextPage()},showPreviousSlide:function(){this.infographicPage.showPreviousPage()},_pendingJson:null,fromJson:function(e){if(this._renderBackgroundImage(),this._canApplyJson()){this._pendingJson=null,this.documentOptions=e.documentOptions;var i=e.theme&&e.theme.id!==u.GRAPHIC?e.theme:null;this.themeContext=this.infographicPage.themeContext=i&&i.id,this.theme=this.infographicPage.theme=i;var n=g.collectSectionJsons(e,{backgroundForeground:!1});this._setEmptyState(!n.length);var o=n.length>this.maxBulletsLimit;return t[o?"add":"remove"](this.domNode,"hasCustomPaginationBullets"),h[o?"show":"hide"](this.pageNavigatorDiv),this.infographicPage.setItems(n).then(function(){this.pageNavigator.reset()}.bind(this))}this._pendingJson=e},_canApplyJson:function(){return h.isNodeInLayout(this.domNode)},_setEmptyState:function(e){h.hide([this.infographicPageDiv,this.emptyPlaceholder,this.reportBackgroundDiv]),h.show(e?this.emptyPlaceholder:[this.infographicPageDiv,this.reportBackgroundDiv])},onResized:function(e){},onPendingDataApplied:function(){}})});