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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dijit/_WidgetBase","dijit/_TemplatedMixin","./_ScrollSupport","./_ZoomSupport","../supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil","../themes/ReportThemes","./utils/MobileGesturesUtil","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/DomUtil","dojo/text!../templates/ReportContainerStack.html","dojo/i18n!esri/nls/jsapi"],function(t,e,i,n,o,s,a,h,l,r,d,u,c){return c=c.geoenrichment.dijit.ReportPlayer.ReportPlayer,t([i,n,o,s],{templateString:u,nls:c,viewModel:null,theme:null,parentWidget:null,currentFeatureIndex:null,isVertical:!0,documentOptions:null,renderOptions:{},infographicPage:null,postCreate:function(){var t=this;this.inherited(arguments),this.renderOptions=e.mixin({center:!1,minTop:0,minRight:0,minBottom:0,minLeft:0},this.renderOptions),this.infographicPage=this.viewModel.layoutBuilder.createElement("infographicPageStack",{viewModel:this.viewModel,theme:this.theme,parentWidget:this,currentFeatureIndex:this.currentFeatureIndex,isVertical:this.isVertical,onSectionCreated:function(e){t._notifySectionAboutScale(e)}},this.infographicPageDiv),this.own(this.infographicPage),this._setEmptyState(!1),r.isMobileDevice()&&l.enableMobileGestures(this)},resize:function(t,e){this.domNode.style.width=t?t+"px":"auto",this.domNode.style.height=e?e+"px":"auto"},setMaxWidth:function(t){this.domNode.style.maxWidth=t+"px"},setMaxHeight:function(t){this.domNode.style.maxHeight=t+"px"},notifyShown:function(){this._pendingJson?(this.fromJson(this._pendingJson),!this._pendingJson&&this.onPendingDataApplied()):this.infographicPage.notifyShown()},_maxPanelWidth:null,_maxPanelHeight:null,getCurrentPageDim:function(){return this.isVertical?{w:this._maxPanelWidth,h:1e6}:{w:1e6,h:this._maxPanelHeight}},_calcMaxPanelSize:function(t){this._maxPanelWidth=0,this._maxPanelHeight=0,t.forEach(function(t){var e=a.getParentBox(t);e&&(this._maxPanelWidth=Math.max(this._maxPanelWidth,e.w),this._maxPanelHeight=Math.max(this._maxPanelHeight,e.h))},this)},getVisualState:function(){return this.infographicPage.getVisualState()},setVisualState:function(t){return this.infographicPage.setVisualState(t)},_pendingJson:null,fromJson:function(t){if(this._canApplyJson()){this._pendingJson=null,this.documentOptions=t.documentOptions;var e=t.theme&&t.theme.id!==h.GRAPHIC?t.theme:null;this.theme=this.infographicPage.theme=e;var i=a.collectSectionJsons(t,{backgroundForeground:!1,populateWithFloatingElementsBehind:!0});return this._setEmptyState(!i.length),this._calcMaxPanelSize(i),this.infographicPage.setItems(i)}this._pendingJson=t},_canApplyJson:function(){return d.isNodeInLayout(this.domNode)},_setEmptyState:function(t){d.hide([this.fillerContainer,this.emptyPlaceholder]),d.show(t?this.emptyPlaceholder:this.fillerContainer)},onPendingDataApplied:function(){}})});