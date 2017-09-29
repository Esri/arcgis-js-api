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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/utils/DomUtil","../supportClasses/templateJsonUtils/TemplateJsonQueryUtil","../themes/ThemeUtil","dojo/text!../templates/ReportContainerPagination.html","dojo/i18n!../../../../../nls/jsapi"],function(e,t,i,n,o,s,r,a,h,g,d,l){return l=l.geoenrichment.dijit.ReportPlayer.ReportPlayer,e([s,r],{templateString:d,nls:l,viewModel:null,themeContext:null,theme:null,infographicPage:null,postCreate:function(){var e=this;this.inherited(arguments),this.infographicPage=this.viewModel.layoutBuilder.createElement("infographicPage",{viewModel:this.viewModel,themeContext:this.themeContext,theme:this.theme,keepPagePosition:!1,onResized:function(t){e.onResized(t)}},this.infographicPageDiv),this.own(this.infographicPage),this._setEmptyState(!1)},_renderBackgroundImage:function(){var e=this.viewModel.getDocumentDefaultStyles(this.theme||this.themeContext);e&&(n.set(this.reportBackgroundDiv,"backgroundColor",""),g.applyBackgroundImageFromSettings(this.reportBackgroundDiv,e.backgroundImage)||e.backgroundColor&&n.set(this.reportBackgroundDiv,"backgroundColor",e.backgroundColor))},resize:function(e,t){this.infographicPage.resize(e,t)},notifyShown:function(){this._pendingJson?(this.fromJson(this._pendingJson),!this._pendingJson&&this.onPendingDataApplied()):this.infographicPage.notifyShown()},getCurrentSlideIndex:function(){return this.infographicPage.getCurrentPageIndex()},showSlideAt:function(e){this.infographicPage.setCurrentPageIndex(e)},showNextSlide:function(){this.infographicPage.showNextPage()},showPreviousSlide:function(){this.infographicPage.showPreviousPage()},_pendingJson:null,fromJson:function(e){if(this._renderBackgroundImage(),this._canApplyJson()){this._pendingJson=null;var t=h.collectSectionJsons(e);return this._setEmptyState(!t.length),this.infographicPage.setItems(t)}this._pendingJson=e},_canApplyJson:function(){return a.isNodeInLayout(this.domNode)},_setEmptyState:function(e){a.hide([this.infographicPageDiv,this.emptyPlaceholder,this.reportBackgroundDiv]),a.show(e?this.emptyPlaceholder:[this.infographicPageDiv,this.reportBackgroundDiv])},onResized:function(e){},onPendingDataApplied:function(){}})});