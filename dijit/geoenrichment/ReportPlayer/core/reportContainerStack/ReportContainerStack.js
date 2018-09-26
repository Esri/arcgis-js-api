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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","./_ScrollSupport","./_ZoomSupport","../supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil","../themes/ReportThemes","esri/dijit/geoenrichment/utils/DomUtil","dojo/text!../templates/ReportContainerStack.html","dojo/i18n!esri/nls/jsapi"],function(t,e,i,n,o,s,h,a,l,r){return r=r.geoenrichment.dijit.ReportPlayer.ReportPlayer,t([e,i,n,o],{templateString:l,nls:r,viewModel:null,theme:null,parentWidget:null,currentFeatureIndex:null,documentOptions:null,renderOptions:{center:!1,minTop:0,minRight:0,minBottom:0,minLeft:0},infographicPage:null,postCreate:function(){this.inherited(arguments),this.infographicPage=this.viewModel.layoutBuilder.createElement("infographicPageStack",{viewModel:this.viewModel,theme:this.theme,parentWidget:this,currentFeatureIndex:this.currentFeatureIndex},this.infographicPageDiv),this.own(this.infographicPage),this._setEmptyState(!1)},resize:function(t,e){this.domNode.style.width=t?t+"px":"auto",this.domNode.style.height=e?e+"px":"auto"},setMaxWidth:function(t){this.domNode.style.maxWidth=t+"px"},setMaxHeight:function(t){this.domNode.style.maxHeight=t+"px"},notifyShown:function(){this._pendingJson?(this.fromJson(this._pendingJson),!this._pendingJson&&this.onPendingDataApplied()):this.infographicPage.notifyShown()},_maxPanelWidth:null,getCurrentPageDim:function(){return{w:this._maxPanelWidth,h:1e6}},_calcMaxPanelWidth:function(t){this._maxPanelWidth=0,t.forEach(function(t){var e=s.getParentBox(t);e&&(this._maxPanelWidth=Math.max(this._maxPanelWidth,e.w))},this)},_pendingJson:null,fromJson:function(t){if(this._canApplyJson()){this._pendingJson=null,this.documentOptions=t.documentOptions;var e=t.theme&&t.theme.id!==h.GRAPHIC?t.theme:null;this.theme=this.infographicPage.theme=e;var i=s.collectSectionJsons(t,{backgroundForeground:!1});return this._setEmptyState(!i.length),this._calcMaxPanelWidth(i),this.infographicPage.setItems(i)}this._pendingJson=t},_canApplyJson:function(){return a.isNodeInLayout(this.domNode)},_setEmptyState:function(t){a.hide([this.fillerContainer,this.emptyPlaceholder]),a.show(t?this.emptyPlaceholder:this.fillerContainer)},onPendingDataApplied:function(){}})});