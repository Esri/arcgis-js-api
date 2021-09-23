// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/when","dojox/uuid/generateRandomUuid","dojo/dom-class","dojo/dom-construct","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/Pagination","esri/dijit/geoenrichment/PageNavigator","../../supportClasses/ViewModes","../../supportClasses/tableJson/TableJsonUtil","../../supportClasses/tableJson/TablePrettyParameters","../../sections/supportClasses/SectionContentFitModes","../utils/InfographicThemeUtil","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/InvokeUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/text!../../templates/PaginatableTableInfographic.html"],(function(t,e,i,n,o,s,h,a,r,l,c,g,d,u,_,p,f,m,w){var y=t([h,a],{templateString:w,viewModel:null,theme:null,parentWidget:null,currentFeatureIndex:null,isEditMode:!1,minRowHeight:40,maxBulletsLimit:5,hasResizableColumns:!0,allowSorting:!0,noDataText:null,hideElementsIfEmpty:!0,canShowEmptyView:!0,pagination:null,pageNavigator:null,_titleSection:null,_sections:null,_currentInfographicJson:null,_isSinglePage:!1,_sectionJsons:null,_columnWidths:null,postCreate:function(){this.inherited(arguments),this._showEmptyView(!1),this._sections=[],this._createPagination(),this._createPageNavigator()},_createPagination:function(){var t=this;this.pagination=new r({createItemContainer:e.hitch(this,this._createItemContainer),scrollAnimation:"slide",cyclicPagination:!1,autoCenter:"stretch:1,1",detachChildrenUponHiding:!0,onPageChanged:function(){t.pageNavigator.setCurrentPageIndex(t.pagination.get("currentPage"))},onNodePlaced:function(e,i){t._updateItemContainer(e,i)}}).placeAt(this.paginationDiv),this.own(this.pagination),this.pagination.set("items",[]),this.pagination.startup()},_createPageNavigator:function(){var t=this;this.pageNavigator=new l({showArrows:!1,getNumPages:function(){return t.pagination.get("items").length},onPageChanged:function(e){t.pagination.set("currentPage",e)}}).placeAt(this.pageNavigatorDiv),this.own(this.pageNavigator)},_createItemContainer:function(){var t=s.create("div",{class:"paginatableTableInfographic_paginationRoot"});return t.style.width=this._getPageWidth()+"px",t.style.height=this._getPageHeight()+"px",t},_updateItemContainer:function(t,n){var o,s=this;if(t&&t.parentNode){t.innerHTML="";var h=this._getSectionByJson(n);if(h&&h.domNode)h.placeAt(t),this._columnWidths&&(o=h.getTrueTables()[0],this._columnWidths.forEach((function(t,e){o.columns[e].style.width=t})),o.refresh());else{h&&h.destroy();var a={};a.initialWidth=this._getPageWidth(),a.initialHeight=this._getPageHeight(),a.json=n,a.viewModel=this.viewModel,a.theme=this.theme,a.parentWidget=this,a.noContentOffset=!0,a.tableParams={allowSorting:this.allowSorting,trimTextIfOverflows:!1,autoDetectUrl:!0,keepGridWidthWhenResized:!0,hasResizableColumns:this.hasResizableColumns,disableResizableColumnsAutoDetection:!this.hasResizableColumns,fitParentWhenResized:!0,enableAsyncRendering:!this.isEditMode,asyncBatchSize:n.stack[0].columns.length,layoutDefaults:{columnMinWidth:d.MIN_COLUMN_WIDTH},onColumnWidthChanged:function(){s._columnWidths=o&&o.columns.map((function(t){return t.style.width})),s._onColumnWidthsChanged()}},a.initialViewMode=this.isEditMode?c.EDIT:c.PREVIEW_VALUES,e.mixin(a,this._prepareSectionCreationParams(a)),this._columnWidths&&this._columnWidths.forEach((function(t,e){n.stack[0].columns[e].style.width=t})),h=this.viewModel.layoutBuilder.createElement("section",a,t),this._sections.push(h),this._putSectionToHash(h,n),o=h.getTrueTables()[0],i(o.getRenderPromise(),(function(){o.domNode&&(s._resizeSection(h),o.onSortingChanged=function(t){s._setSorting(t)},s._sorting&&o.setSorting(s._sorting,{doNotRefresh:!0}))}))}return h}},_onColumnWidthsChanged:function(){},_resizeSection:function(t){if(this._currentInfographicJson.scaleToFitHeight){var e=0,i=t.getTrueTables();i.forEach((function(t){e+=t.rows.length})),i.forEach((function(t,i){var n=t.rows.length,o=n/e,s=Math.max(this._getPageHeight()*o,n*this.minRowHeight);t.resizeToFitHeight(s,!1)}),this)}this._adjustTablesVertically(t),t.fitContentNicely({fitMode:u.WIDTH})},_adjustTablesVertically:function(t){var e=0;t.getTrueTables().forEach((function(t,i){i>0&&t.setPosition(void 0,e),e+=t.domNode.clientHeight}),this)},_prepareSectionCreationParams:function(t){return null},_getPageWidth:function(){return this.width},_getPageHeight:function(){return this.height-this._getTitleHeight()-this._getFooterHeight()},_getTitleHeight:function(){return this._currentInfographicJson.titleSectionJson?g.getTableHeight(this._currentInfographicJson.titleSectionJson.stack[0])+d.TITLE_GAP:0},hasTitle:function(){return this._getTitleHeight()>0},_getFooterHeight:function(){return this._isSinglePage?0:30},_sectionsHash:null,_getSectionByJson:function(t){return this._sectionsHash=this._sectionsHash||{},t._idInPagination||(t._idInPagination=n()),this._sectionsHash[t._idInPagination]},_putSectionToHash:function(t,e){this._sectionsHash&&(this._sectionsHash[e._idInPagination]=t)},_updatePromise:null,getRenderPromise:function(){return this._updatePromise},updateInfographic:function(t){if(this.domNode)return this._currentInfographicJson=t,this._updateInfographicJsonTheme(),this._currentInfographicJson.style.backgroundColor&&(this.domNode.style.backgroundColor=this._currentInfographicJson.style.backgroundColor),this._updateContent(),this.onShowWaiting(this._updatePromise),this._updatePromise},_updateInfographicJsonTheme:function(){var t=this.viewModel.getStaticInfographicDefaultStyles(this.theme);_.applyThemeSettingsPaginatableInfographicJson(this._currentInfographicJson,t)},getUpdatePromise:function(){return this._updatePromise},_updateContent:function(){return this._updatePromise=f.invoke(this,"_doUpdateContent",50)},_doUpdateContent:function(){if(this.domNode&&this.width)return this._destroySections(),i(this._buildSectionJsonsAndStat(),function(t){if(this._showEmptyView(!1),this._sectionJsons=t&&t.sectionJsons,!this._sectionJsons||!this._sectionJsons.length)if(!this.hideElementsIfEmpty&&t&&t.unitedSectionJson){var i=e.clone(t.unitedSectionJson);this._currentInfographicJson.scaleToFitHeight&&(i.stack[0].rows[0].style.height=this.minRowHeight),this._sectionJsons=t.sectionJsons=[i],this._showEmptyView(!0,this._getTitleHeight()-this._getFooterHeight()+i.stack[0].rows[0].style.height),p.show(this.dataDiv)}else this._sectionJsons=null,t=null,this._showEmptyView(!0);t?(this._syncJsonDimensions(),this.domNode.style.width=this.width+"px",this.domNode.style.height=this.height+"px",this._isSinglePage=1===t.sectionJsons.length,o[this._isSinglePage?"add":"remove"](this.domNode,"singlePage"),this._renderParts(t),this.onContentUpdated()):this.onContentUpdated()}.bind(this))},_buildSectionJsonsAndStat:function(){},_renderParts:function(t){this._renderTitleSection(),this._renderData(t),this._renderNavigation(t),this._renderFootNote(),o[this.footnoteDiv.innerHTML?"add":"remove"](this.domNode,"hasFootnote")},_renderTitleSection:function(){if(this._titleSection&&this._titleSection.destroy(),this._titleSection=null,this._currentInfographicJson.titleSectionJson){var t={};t.initialWidth=this._getPageWidth(),t.json=this._currentInfographicJson.titleSectionJson,t.viewModel=this.viewModel,t.theme=this.theme,t.parentWidget=this,t.noContentOffset=!0,t.tableParams={trimTextIfOverflows:!1},t.initialViewMode=this.isEditMode?c.EDIT:c.PREVIEW_VALUES,e.mixin(t,this._prepareTitleSectionCreationParams()),this._titleSection=this.viewModel.layoutBuilder.createElement("section",t,this.titleDiv),this._titleSection.fitContentNicely({fitMode:u.WIDTH})}},_prepareTitleSectionCreationParams:function(){return null},_renderData:function(t){this.paginationDiv.style.top=this._getTitleHeight()?this._getTitleHeight()+"px":"",this.paginationDiv.style.bottom=this._getFooterHeight()?this._getFooterHeight()+"px":"",this.pagination.set("items",t.sectionJsons),this.pagination.resize()},_renderNavigation:function(t){this.pageNavigator.showAsBullets(t.sectionJsons.length<=this.maxBulletsLimit),this.pageNavigator.reset(),this.pageNavigator.currentPageLabel.style.color=this.viewModel.getDocumentDefaultStyles(this.theme).color},_renderFootNote:function(){},_emptyPlaceholderTopOffset:0,_showEmptyView:function(t,e){this.canShowEmptyView&&(this._emptyPlaceholderTopOffset=e||0,p[t?"hide":"show"](this.dataDiv),p[t?"show":"hide"](this.noDataPlaceHolder),t&&this._syncEmptyViewPlaceholder(),t&&setTimeout(this._syncEmptyViewPlaceholder.bind(this)))},_syncEmptyViewPlaceholder:function(){this.noDataPlaceHolder&&(this.noDataPlaceHolderLabel.innerHTML=this.noDataText,this.noDataPlaceHolder.style.marginTop=this._emptyPlaceholderTopOffset/2+(this.height-this.noDataPlaceHolder.clientHeight)/2+"px")},_sorting:null,_setSorting:function(t){return this._sorting=t,this._updateContent()},notifyShown:function(){this._sections.forEach((function(t){t.notifyShown()}))},width:null,height:null,resize:function(t,e,i){return void 0!==t&&(this.width=t,this.height=e),this._checkNeedResize()&&(i&&i.sync?this._doUpdateContent():this._updateContent())},_checkNeedResize:function(){return this._currentInfographicJson&&this.width&&this.height&&(!m.compareEqual(this._currentInfographicJson.style.width,this.width,1)||!m.compareEqual(this._currentInfographicJson.style.height,this.height,1))},_syncJsonDimensions:function(){this._currentInfographicJson.style=this._currentInfographicJson.style||{},this._currentInfographicJson.style.width=this.width,this._currentInfographicJson.style.height=this.height},toJson:function(){return e.clone(this._currentInfographicJson)},onContentUpdated:function(){},onShowWaiting:function(t){},_destroySections:function(){this._titleSection&&this._titleSection.destroy(),this._titleSection=null,this._sections.forEach((function(t){t.destroy()})),this._sections.length=0},destroy:function(){this._destroySections(),this.inherited(arguments)}});return y.MIN_ROW_HEIGHT=40,y.BOTTOM_AREA_HEIGHT=30,y}));