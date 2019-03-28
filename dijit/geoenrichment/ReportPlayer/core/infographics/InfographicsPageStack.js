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

define(["dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dijit/_WidgetBase","dijit/_TemplatedMixin","../themes/BackgroundThemeUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ElementUsageTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes","../supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil","../sections/sectionUtils/SectionJsonUtil","esri/dijit/geoenrichment/utils/ColorUtil","dojo/i18n!esri/nls/jsapi"],function(e,t,i,s,n,o,a,r,c,l,h,d,u){function g(e){var t=l.getParentBox(e);return t&&t.w?t:h.calcSectionJsonBox(e)}u=u.geoenrichment.dijit.ReportPlayer.Infographics;return e([s,n],{templateString:"<div class='esriGEReportPlayer_infographicsPageStack'></div>",nls:u,viewModel:null,theme:null,parentWidget:null,currentFeatureIndex:null,scaleSectionsToFit:!0,isVertical:!0,_asyncQueue:null,_sections:null,_maxWidth:0,_maxHeight:0,_panelIndexToScaleCache:null,postCreate:function(){this.inherited(arguments),this._sections=[],this._panelIndexToScaleCache={},!this.isVertical&&t.add(this.domNode,"isHorizontal")},setItems:function(e){var t=this;return this._destroySections(),this._asyncQueue=new a,this._calcMaxSectionSize(e),e.forEach(function(e,i){t._asyncQueue.add(function(){t._createPanel(e,i)},{delayAfter:0})}),this._asyncQueue.getPromise()},_calcMaxSectionSize:function(e){this._maxWidth=0,this._maxHeight=0,e.forEach(function(e){var t=g(e);t&&(this._maxWidth=Math.max(this._maxWidth,t.w),this._maxHeight=Math.max(this._maxHeight,t.h))},this)},_createPanel:function(e,t){var s=i.create("div",{class:"infographicPageStack_infographicRow "+(this.isVertical?"":"dijitInline")},this.domNode),n=i.create("div",{class:"infographicPageStack_infographicSectionNode"},s),o={};o.class="adjustableGrid_inCellSection",o.json=e,o.viewModel=this.viewModel,o.theme=this.theme,o.parentWidget=this,o.initialWidth=this._maxWidth,o.currentFeatureIndex=this.currentFeatureIndex,o.elementUsageType=r.PAGE_PANEL_SECTION,o.initialViewMode=c.PREVIEW_VALUES;var a=this.viewModel.layoutBuilder.createElement("section",o,n);this._sections.push(a);var l=g(e);a.setHeight(l.h),a.setWidth(l.w),n.style.width=l.w+"px",n.style.height=l.h+"px",this.scaleSectionsToFit?this._scaleSectionToFit(s,n,l,t):n.style.margin="10px",this._renderPanelBackground(n,e,l),this.onSectionCreated(a)},_scaleSectionToFit:function(e,t,i,s){var n;this.isVertical?(n=(this._maxWidth+2)/(i.w+2),e.style.width=this._maxWidth+"px",e.style.height=(i.h+2)*n+"px",e.style.marginBottom="10px"):(n=(this._maxHeight+2)/(i.h+2),e.style.width=(i.w+2)*n+"px",e.style.height=this._maxHeight+"px",e.style.marginRight="10px"),t.style.transform="scale("+n+")",t.style.webkitTransform="scale("+n+")",t.style.position="absolute",t.style.left="0px",t.style.top="0px",t.style.margin="0px",this._panelIndexToScaleCache[s]=n||1},_renderPanelBackground:function(e,t,s){var n=l.getParentStyle(t),a=this.viewModel.getDocumentDefaultStyles(this.theme);if(a){var r=i.create("div",{class:"esriGEAbsoluteStretched"},e,"first");o.renderThemeBackgroundImage(r,a.backgroundImage,{documentOptions:this.parentWidget.documentOptions,pos:s})||(r.style.backgroundColor=n&&n.backgroundColor&&!d.isTransparent(n.backgroundColor)?n.backgroundColor:a.backgroundColor)}else e.style.backgroundColor=n&&n.backgroundColor},getSections:function(){return this._sections},getPanelScaleAt:function(e){return this._panelIndexToScaleCache[e]||1},onSectionCreated:function(e){},notifyShown:function(){this._sections.forEach(function(e){e.notifyShown()})},_destroySections:function(){this._asyncQueue&&this._asyncQueue.destroy(),this._asyncQueue=null,this._sections.forEach(function(e){e.destroy()}),this._sections.length=0,i.empty(this.domNode)},destroy:function(){this._destroySections(),this.inherited(arguments)}})});