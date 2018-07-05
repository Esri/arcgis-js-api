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

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/dom-construct","dojo/dom-style","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin","../themes/BackgroundThemeUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes","../supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil","dojo/i18n!esri/nls/jsapi"],function(e,t,i,o,n,s,r,a,c,d,l,u,h){return h=h.geoenrichment.dijit.ReportPlayer.Infographics,e([r,a],{templateString:"<div class='esriGEReportPlayer_infographicsPageStack'></div>",nls:h,viewModel:null,theme:null,parentWidget:null,_asyncQueue:null,_sections:null,postCreate:function(){this.inherited(arguments),this._sections=[]},setItems:function(e){var t=this;return this._destroySections(),this._asyncQueue=new d,e.forEach(function(e){t._asyncQueue.add(function(){t._createPanel(e)},{delayAfter:0})}),this._asyncQueue.getPromise()},_createPanel:function(e){var t=o.create("div",{class:"infographicPageStack_infographicRow"},this.domNode),i=o.create("div",{class:"infographicPageStack_infographicSectionNode"},t),s={};s.class="adjustableGrid_inCellSection",s.json=e,s.viewModel=this.viewModel,s.theme=this.theme,s.parentWidget=this,s.initialWidth=n.get(i,"width"),s.hasFixedLayout=!1;var r=this.viewModel.layoutBuilder.createElement("section",s,i);this._sections.push(r),r.setViewMode(l.PREVIEW_VALUES);var a=u.getParentBox(e);a&&(r.setResizedHeight(a.h),r.setWidth(a.w),n.set(i,{width:a.w+"px",height:a.h+"px"}));var c=u.getParentStyle(e);c&&c.backgroundColor&&(i.style.backgroundColor=c.backgroundColor),this._renderPanelBackground(i,e,a)},_renderPanelBackground:function(e,t,i){var s=this.viewModel.getDocumentDefaultStyles(this.theme);if(s){var r=o.create("div",{class:"esriGEAbsoluteStretched infographicPageStack_infographicSectionBackground"},e,"first");c.applyBackgroundImageFromSettings(r,s.backgroundImage,{documentOptions:this.parentWidget.documentOptions,pos:i})||s.backgroundColor&&n.set(r,"backgroundColor",s.backgroundColor)}},notifyShown:function(){this._sections.forEach(function(e){e.notifyShown()})},_destroySections:function(){this._asyncQueue&&this._asyncQueue.destroy(),this._asyncQueue=null,this._sections.forEach(function(e){e.destroy()}),this._sections.length=0,o.empty(this.domNode)},destroy:function(){this._destroySections(),this.inherited(arguments)}})});