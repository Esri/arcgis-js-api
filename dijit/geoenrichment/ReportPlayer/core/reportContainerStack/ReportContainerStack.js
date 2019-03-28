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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dijit/_WidgetBase","dijit/_TemplatedMixin","./_ScrollSupport","./_ZoomSupport","../supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil","../themes/ReportThemes","./utils/MobileGesturesUtil","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/DomUtil","dojo/text!../templates/ReportContainerStack.html","dojo/i18n!esri/nls/jsapi"],function(e,t,i,n,o,s,a,h,l,r,d,m,c){return c=c.geoenrichment.dijit.ReportPlayer.ReportPlayer,e([i,n,o,s],{templateString:m,nls:c,viewModel:null,theme:null,parentWidget:null,currentFeatureIndex:null,isVertical:!0,documentOptions:null,renderOptions:{},infographicPage:null,postCreate:function(){var e=this;this.inherited(arguments),this.renderOptions=t.mixin({center:!1,minTop:0,minRight:0,minBottom:0,minLeft:0},this.renderOptions),this.infographicPage=this.viewModel.layoutBuilder.createElement("infographicPageStack",{viewModel:this.viewModel,theme:this.theme,parentWidget:this,currentFeatureIndex:this.currentFeatureIndex,isVertical:this.isVertical,onSectionCreated:function(t){e._notifySectionAboutScale(t)}},this.infographicPageDiv),this.own(this.infographicPage),this._setEmptyState(!1),r.isMobileDevice()&&l.enableMobileGestures(this)},resize:function(e,t){this.domNode.style.width=e?e+"px":"auto",this.domNode.style.height=t?t+"px":"auto"},setMaxWidth:function(e){this.domNode.style.maxWidth=e+"px"},setMaxHeight:function(e){this.domNode.style.maxHeight=e+"px"},notifyShown:function(){this._pendingJson?(this.fromJson(this._pendingJson),!this._pendingJson&&this.onPendingDataApplied()):this.infographicPage.notifyShown()},_maxPanelWidth:null,_maxPanelHeight:null,getCurrentPageDim:function(){return this.isVertical?{w:this._maxPanelWidth,h:1e6}:{w:1e6,h:this._maxPanelHeight}},_calcMaxPanelSize:function(e){this._maxPanelWidth=0,this._maxPanelHeight=0,e.forEach(function(e){var t=a.getParentBox(e);t&&(this._maxPanelWidth=Math.max(this._maxPanelWidth,t.w),this._maxPanelHeight=Math.max(this._maxPanelHeight,t.h))},this)},_pendingJson:null,fromJson:function(e){if(this._canApplyJson()){this._pendingJson=null,this.documentOptions=e.documentOptions;var t=e.theme&&e.theme.id!==h.GRAPHIC?e.theme:null;this.theme=this.infographicPage.theme=t;var i=a.collectSectionJsons(e,{backgroundForeground:!1,populateWithFloatingElementsBehind:!0});return this._setEmptyState(!i.length),this._calcMaxPanelSize(i),this.infographicPage.setItems(i)}this._pendingJson=e},_canApplyJson:function(){return d.isNodeInLayout(this.domNode)},_setEmptyState:function(e){d.hide([this.fillerContainer,this.emptyPlaceholder]),d.show(e?this.emptyPlaceholder:this.fillerContainer)},onPendingDataApplied:function(){}})});