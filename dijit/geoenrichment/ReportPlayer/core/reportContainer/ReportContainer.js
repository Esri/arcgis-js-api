// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-construct","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","../grid/valueField/ValueField","./utils/QueryUtil","./utils/SerializationManager","../supportClasses/DocumentOptions","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes","dojo/text!../templates/ReportContainer.html"],(function(e,t,i,n,o,s,r,l,a,h,c,d,m,u,g,p){return e([r,l],{templateString:p,isReportContainer:!0,viewModel:null,theme:null,parentWidget:null,currentFeatureIndex:null,documentOptions:null,_sampleWatermarkDiv:null,queryUtil:h,serializationManager:null,postCreate:function(){this.inherited(arguments),this.serializationManager=(new this._getSerializationManagerClass)(this),this.setViewMode(g.PREVIEW_VALUES)},_getSerializationManagerClass:function(){return c},_sectionWidth:0,setDocumentOptions:function(e){this.documentOptions&&t.mixin(this.documentOptions,e),this.updateLayout()},updateLayout:function(){if(this.documentOptions){this._sectionWidth=d.getPageBox(this.documentOptions).contentW,this._syncContainerSizeWithViewMode(),s.set(this.stackContainer,{paddingLeft:(this.documentOptions.left||0)+"px",paddingRight:(this.documentOptions.right||0)+"px",paddingTop:(this.documentOptions.top||0)+"px",paddingBottom:(this.documentOptions.bottom||0)+"px"});var e=this;this.getReportElements("setWidth").forEach((function(t){e.getElementSection(t).setWidth(e.getSectionWidth(),{resizeContentToFit:!0,preserveRightOffset:!0}),e.updateReportElement(t)}))}},resizeReportElementContentToFitPageWidth:function(e){var t=e&&this.getElementSection(e);t&&t.setWidth(this.getSectionWidth(),{resizeContentToFit:!0,forceResize:!0}),this.updateReportElement(e)},getCurrentPageDim:function(){return d.getPageBox(this.documentOptions)},_syncContainerSizeWithViewMode:function(){s.set(this.stackContainer,"width",this._sectionWidth+(this._viewMode===g.EDIT?145:0)+"px"),s.set(this.mainContainer,"height",s.get(this.domNode,"height")+(this._viewMode===g.EDIT?-17:0)+"px")},getSectionWidth:function(){return this._sectionWidth},resize:function(e,t){void 0!==e&&s.set(this.domNode,{width:e+"px",height:t+"px"}),this._syncContainerSizeWithViewMode()},getCanvasOffsets:function(){var e=s.get(this.domNode,"width"),t=s.get(this.stackContainer,"width")+o.getPadBorderExtents(this.stackContainer).w;return{l:Math.max(15,this.stackContainer.offsetLeft),r:Math.max(10,e-(this.stackContainer.offsetLeft+t))}},getFullWidth:function(){return Math.max(this.stackContainer.scrollWidth,s.get(this.stackContainer,"width"))},getFullHeight:function(){return Math.max(this.stackContainer.scrollHeight,s.get(this.stackContainer,"height"))},addSection:function(e,t,i,n,o){var s=this._createSectionCell(e);this._createSection(e,t,s);var r=this._createReportElement(e,s,i,n,t&&t.json,o);return this.updateReportElement(r),r},_createSection:function(e,t,i){var n;if((t=t||{}).class="reportContainer_Section",t.initialWidth=this.getSectionWidth(),t.initialHeight="empty"===e?t.isSmallSize?100:200:void 0,t.viewModel=this.viewModel,t.theme=this.theme,t.parentWidget=this,t.hasFixedLayout=!0,t.viewPortContainer=this.getScrollableContainer(),t.currentFeatureIndex=this.currentFeatureIndex,t.initialViewMode=this._viewMode,"empty"===e)n=this.viewModel.layoutBuilder.createElement("emptySection",t,i.getContentContainerNode());else{n=this.viewModel.layoutBuilder.createElement("section",t,i.getContentContainerNode());var o=this.documentOptions.backgroundColor||this.viewModel.getDocumentDefaultStyles(this.theme).backgroundColor;o&&s.set(n.domNode,"backgroundColor",o)}return i.setContent(n),n},_getSectionCellClass:function(){return a},_getSectionCellParams:function(){return null},_createSectionCell:function(e){return(new this._getSectionCellClass)(t.mixin({sectionId:e,class:"reportContainerCell"},this._getSectionCellParams()))},_createReportElement:function(e,t,n,o,s,r){var l=i.create("div",{class:"reportElement"}),a=this._getCellSection(t),h=l._fcPar={isReportElement:!0,sectionId:e,isEmpty:"empty"===e,cell:t,section:a,coverElement:null,reportElementContent:i.create("div",{class:"reportElementContent"},l)};return i.place(l,n||this.stackContainer,n?o:void 0),this._createAdditionalElementsForReportElement(l),i.place(t.domNode,h.reportElementContent),this.isEmptyElement(n)&&!1!==r&&(this._removeSection(n),this._tryProvidingSmallEmpty(l)),a.notifyShown&&a.notifyShown(),l},_createAdditionalElementsForReportElement:function(e){},updateReportElement:function(e){var t=this.getElementParams(e);this._sectionToSectionCell(t.cell),this._sectionCellToSection(t.cell),this._updateChildrenViewMode(e)},_sectionCellToSection:function(e){this._getCellSection(e).setHeight(e.getHeight())},_sectionToSectionCell:function(e){var t=this._getCellSection(e);e.setWidth(t.getWidth()),e.setMinHeight(t.hasTablesThatFitHeight()?20:t.getHeight()),e.setHeight(t.getResizedHeight())},_tryProvidingSmallEmpty:function(e){var t=this;this.getReportElements().filter((function(e){return t.isEmptyElement(e)})).length||this.addSection(u.EMPTY,{isSmallSize:!0},e,"after")},getElementHeight:function(e){return this.getElementCell(e).getHeight()},setElementHeight:function(e,t){var i=this.getElementCell(e);i.setHeight(t),this._sectionCellToSection(i),this.updateReportElement(e)},getElementParams:function(e){return e&&e._fcPar||{}},getElementSection:function(e){return this.getElementParams(e).section},getElementSectionAt:function(e){var t=this.getReportElements()[e];return t&&this.getElementSection(t)},getElementCell:function(e){return this.getElementParams(e).cell},isEmptyElement:function(e){return!!this.getElementParams(e).isEmpty},isReportElement:function(e){return!!this.getElementParams(e).isReportElement},_getCellSection:function(e){return e.content},scrollToElement:function(e){if(e)return this._animateScrolling(e.offsetTop-this.domNode.clientHeight/5)},_animateScrolling:function(e){this.getScrollableContainer().scrollTop=e},getScrollableContainer:function(){return this.mainContainer},getReportElements:function(e){return this.queryUtil.getReportElements(this,e)},getStackChildren:function(){for(var e=[],t=0;t<this.stackContainer.children.length;t++)e.push(this.stackContainer.children[t]);return e},clear:function(e){var t=this;this.getReportElements().forEach((function(i){t._removeSection(i,!0===e)}))},_removeSection:function(e,t){var n=this.getElementSection(e),o=this.getElementCell(e);e&&o&&(n&&n.destroy(),o.destroy(),delete e._fcPar,i.destroy(e),0===this.getReportElements().length&&!1!==t&&this.addSection(u.EMPTY))},removeSection:function(e){this._removeSection(e)},removeSectionAtIndex:function(e){this._removeSection(this.getReportElements()[e])},moveSection:function(e,t,n){var o=this.getReportElements()[e];if(o&&o.parentNode){o.parentNode.removeChild(o);var s=this.getReportElements();s.length===t?i.place(o,s[s.length-1],"after"):i.place(o,this.getReportElements()[t],n)}},setHeight:function(e){s.set(this.mainContainer,"height",e+"px")},_viewMode:null,getViewMode:function(){return this._viewMode},setViewMode:function(e){if(this._viewMode!==e){this._viewMode=e,this._memoInViewElementsInfo(),e===g.EDIT?(n.add(this.domNode,"reportContainerEditMode"),n.remove(this.domNode,"reportContainerPreviewMode")):(n.remove(this.domNode,"reportContainerEditMode"),n.add(this.domNode,"reportContainerPreviewMode")),e!==g.PREVIEW_VALUES||this.viewModel.dynamicReportInfo?m.hide(this._sampleWatermarkDiv):(this._sampleWatermarkDiv||(this._sampleWatermarkDiv=i.create("div",{class:"sampleValuesWatermark"},this.stackContainer,"first")),m.show(this._sampleWatermarkDiv)),this._syncContainerSizeWithViewMode(),this._updateChildrenViewMode(),this._adjustScrollForNewViewMode()}},_updateChildrenViewMode:function(e){},_inViewElementsInfo:null,_memoInViewElementsInfo:function(){var e;(this._inViewElementsInfo=null,this.mainContainer.scrollTop<1e3)||(this.getReportElements().some((function(t){if(t.offsetTop>this.mainContainer.scrollTop)return e=t,!0}),this),e&&(this._inViewElementsInfo={scrollTop:this.mainContainer.scrollTop,offsetTop:e.offsetTop,elementInView:e}))},_adjustScrollForNewViewMode:function(){if(this._inViewElementsInfo){var e=this._inViewElementsInfo.offsetTop-this._inViewElementsInfo.scrollTop,t=this._inViewElementsInfo.elementInView.offsetTop-this.mainContainer.scrollTop;this.mainContainer.scrollTop+=t-e}},notifyShown:function(){this.serializationManager.notifyShown()},fromJson:function(e){this.serializationManager.fromJson(e)},toJson:function(e){return this.serializationManager.toJson(e)},onPendingDataApplied:function(){},destroy:function(){this.clear(),this.viewModel=null,this.theme=null,this.parentWidget=null,this.documentOptions=null,this.queryUtil=null,this.serializationManager=null,this.inherited(arguments)}})}));