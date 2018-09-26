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

define(["dojo/_base/declare","dojo/dom-construct","dijit/_WidgetBase","dijit/_TemplatedMixin","../themes/BackgroundThemeUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes","../supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil","../sections/sectionUtils/SectionJsonUtil","esri/dijit/geoenrichment/utils/ColorUtil","dojo/i18n!esri/nls/jsapi"],function(e,t,i,n,s,o,a,r,c,l,h){function d(e){var t=r.getParentBox(e);return t&&t.w?t:c.calcSectionJsonBox(e)}h=h.geoenrichment.dijit.ReportPlayer.Infographics;return e([i,n],{templateString:"<div class='esriGEReportPlayer_infographicsPageStack'></div>",nls:h,viewModel:null,theme:null,parentWidget:null,currentFeatureIndex:null,scaleSectionsToFit:!0,_asyncQueue:null,_sections:null,_maxWidth:0,_panelIndexToScaleCache:null,postCreate:function(){this.inherited(arguments),this._sections=[],this._panelIndexToScaleCache={}},setItems:function(e){var t=this;return this._destroySections(),this._asyncQueue=new o,this._calcMaxWidth(e),e.forEach(function(e,i){t._asyncQueue.add(function(){t._createPanel(e,i)},{delayAfter:0})}),this._asyncQueue.getPromise()},_calcMaxWidth:function(e){this._maxWidth=0,e.forEach(function(e){var t=d(e);t&&(this._maxWidth=Math.max(this._maxWidth,t.w))},this)},_createPanel:function(e,i){var n=t.create("div",{class:"infographicPageStack_infographicRow"},this.domNode),s=t.create("div",{class:"infographicPageStack_infographicSectionNode"},n),o={};o.class="adjustableGrid_inCellSection",o.json=e,o.viewModel=this.viewModel,o.theme=this.theme,o.parentWidget=this,o.initialWidth=this._maxWidth,o.hasFixedLayout=!1,o.currentFeatureIndex=this.currentFeatureIndex,o.isPagePanelSection=!0,o.initialViewMode=a.PREVIEW_VALUES;var r=this.viewModel.layoutBuilder.createElement("section",o,s);this._sections.push(r);var c=d(e);if(r.setResizedHeight(c.h),r.setWidth(c.w),s.style.width=c.w+"px",s.style.height=c.h+"px",this.scaleSectionsToFit){var l=(this._maxWidth+2)/(c.w+2);n.style.width=this._maxWidth+"px",n.style.height=(c.h+2)*l+"px",n.style.marginBottom="10px",s.style.transform="scale("+l+")",s.style.webkitTransform="scale("+l+")",s.style.position="absolute",s.style.left="0px",s.style.top="0px",s.style.margin="0px"}else s.style.margin="10px";this._panelIndexToScaleCache[i]=l||1,this._renderPanelBackground(s,e,c)},_renderPanelBackground:function(e,i,n){var o=r.getParentStyle(i),a=this.viewModel.getDocumentDefaultStyles(this.theme);if(a){var c=t.create("div",{class:"esriGEAbsoluteStretched"},e,"first");s.applyBackgroundImageFromSettings(c,a.backgroundImage,{documentOptions:this.parentWidget.documentOptions,pos:n})||(c.style.backgroundColor=o&&o.backgroundColor&&!l.isTransparent(o.backgroundColor)?o.backgroundColor:a.backgroundColor)}else e.style.backgroundColor=o&&o.backgroundColor},getSections:function(){return this._sections},getPanelScaleAt:function(e){return this._panelIndexToScaleCache[e]||1},notifyShown:function(){this._sections.forEach(function(e){e.notifyShown()})},_destroySections:function(){this._asyncQueue&&this._asyncQueue.destroy(),this._asyncQueue=null,this._sections.forEach(function(e){e.destroy()}),this._sections.length=0,t.empty(this.domNode)},destroy:function(){this._destroySections(),this.inherited(arguments)}})});