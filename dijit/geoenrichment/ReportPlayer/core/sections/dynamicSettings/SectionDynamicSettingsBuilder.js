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

define(["dojo/_base/declare","dojo/_base/lang","dojo/on","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/when","dojo/dom-class","dojo/dom-construct","dijit/Destroyable","esri/dijit/geoenrichment/OnDemandSelect","esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState","./SettingsProvider","./SectionDynamicSettings","./SectionDynamicFilter","./supportClasses/ToolbarAdjuster","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/DnDUtil","esri/dijit/geoenrichment/utils/MouseUtil","esri/dijit/geoenrichment/utils/PopupUtil","esri/dijit/geoenrichment/utils/TooltipUtil","dojo/i18n!esri/nls/jsapi"],(function(t,e,i,s,n,o,r,a,l,c,u,g,_,h,d,S,f,p,m,b){return b=b.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder,t(a,{_section:null,_settingsToolbar:null,_buttonBar:null,_settingsButton:null,_filterButton:null,_filtersOnIndicator:null,_featureSelect:null,_settingsWidget:null,_filterWidget:null,_stats:null,_onButtonBarShowCallbacks:null,_needRequerySettingsSet:!1,_getSettingsPromise:null,constructor:function(t,i){this._section=t,e.mixin(this,i),this._createSettings()},_createSettings:function(){var t=this;this._provideSettingsStats().then((function(){t._stats&&t._section.domNode&&(t._tryAddFeatureSelect(),t._tryAddLocatorExportButton(),t._tryAddFilterButton(),t._tryAddSettingsButton(),t.onButtonsCreated())}))},_provideSettingsStats:function(){var t=this;return this._getSettingsPromise=u.getSettingsSet(this._section).then((function(e){t._stats=e}))},_tryAddFeatureSelect:function(){var t=this;if(this._stats.multiFeatureSettings&&this._stats.multiFeatureSettings.canSelectFeatures){var e=this._section.viewModel.dynamicReportInfo.analysisAreas.map((function(t,e){return{value:e,label:t.shortName||t.name}}));this._provideSettingsToolbar();var i=r.create("div",{class:"dijitInline"},this._settingsToolbar,"first");this._featureSelect=new l({class:"esriGEOnDemandSelectNoBackground esriGEOnDemandSelectWhite",listClass:"esriGEOnDemandSelectVeryTallList esriGEOnDemandSelectSpacedOut",options:e,value:t._section.currentFeatureIndex||0,allowRepetitiveSelection:!1,onChange:function(e){t._needRequerySettingsSet=!0,t._setFiltersOnIndicatorVisible(!1);var i=t._section.toJson();i.currentFeatureIndex=e.value,t._section.fromJson(i),t._featureSelect.closePopup(),t._reset()}}).placeAt(i),this.own(this._featureSelect)}},_tryAddLocatorExportButton:function(){var t=this;if(this._stats.hasExport&&!this._section.isDataDrillingView){var e=this._createButton("dijitInline sectionDynamicSettings_exportButton");i(e,"click",(function(){t._stats.locatorSettings.exportSettings.exportToExcel()})),m.setTooltipToNode(e,b.exportInfographicPanel)}},_settingsStateTimeoutH:null,_filterPopupShown:!1,_filterPopupH:null,_tryAddFilterButton:function(){var t=this;if(this._stats.hasFilter){this._filterButton=this._createButton("dijitInline sectionDynamicSettings_filterButton",(function(){t._filterPopupH=t._filterPopupH||p.makePopup((function(){return t._provideFilterWidget()}),t._section,t._filterButton,{orient:["before","below"],onShow:function(){t._filterPopupShown=!0,clearTimeout(t._settingsStateTimeoutH),c.isViewingDynamicSettings=!0},onClose:function(){t._filterPopupShown=!1,t._settingsPopupShown||(t._settingsStateTimeoutH=setTimeout((function(){c.isViewingDynamicSettings=!1})))}})}));var e=this._stats.chartSettings&&this._stats.chartSettings.filter&&this._stats.chartSettings.filter.filter||this._stats.tableSettings&&this._stats.tableSettings.filter&&this._stats.tableSettings.filter.filter;this._setFiltersOnIndicatorVisible(e)}},_settingsPopupShown:!1,_settingsPopupH:null,_tryAddSettingsButton:function(){var t=this;this._stats.hasViewSettings&&(this._settingsButton=this._createButton("dijitInline sectionDynamicSettings_settingsButton",(function(){t._settingsPopupH=t._settingsPopupH||p.makePopup((function(){return t._provideSettingsWidget()}),t._section,t._settingsButton,{orient:["before","below"],onShow:function(){t._settingsPopupShown=!0,clearTimeout(t._settingsStateTimeoutH),c.isViewingDynamicSettings=!0},onClose:function(){t._settingsPopupShown=!1,t._filterPopupShown||(t._settingsStateTimeoutH=setTimeout((function(){c.isViewingDynamicSettings=!1})))}})})))},_filterOnMouseOverProvidedFlag:!1,_createButton:function(t,e){return this._provideSettingsToolbar(e),r.create("div",{class:t},this._buttonBar)},_provideSettingsToolbar:function(t){var e=this;function s(t,i){e._section.isDataDrillingView&&(t=!0),e._buttonBar.style.display=!t||!e._section.isDataDrillingView&&c.isViewingDataDrillingZoom?"none":"",t&&e._onButtonBarShowCallbacks.forEach((function(t){return t()})),t?e._adjustToolbarPosition():e._closePopup(),o[t?"add":"remove"](e._section.domNode,"hasDynamicSettingsToolbar"),t&&i&&!e._filterOnMouseOverProvidedFlag&&(e._filterOnMouseOverProvidedFlag=!0,e._provideFilterWidget())}this._settingsToolbar||(this._settingsToolbar=r.create("div",{class:"sectionDynamicSettings_toolbar"},this._section.domNode),this._buttonBar=r.create("div",{class:"dijitInline sectionDynamicSettings_buttonBar"},this._section.dynamicSettingsToolbarRoot||this._settingsToolbar),this._onButtonBarShowCallbacks=[],s(!0),s(!1),d.isMobileDevice()?(S.addNoDragClickHandler(this._section.domNode,(function(){s(!0)})),this.own(i(document.body,"touchstart",(function(t){e.isMouseOver(t)||s(!1)})))):this.own(i(document.body,"mousemove",(function(){s(e.isMouseOver(),!0)})))),t&&this._onButtonBarShowCallbacks.push(t)},_closePopup:function(){p.close(this._settingsWidget),p.close(this._filterWidget)},_reset:function(){this._filterWidget&&this._filterWidget.destroy(),this._filterWidget=null,this._settingsWidget&&this._settingsWidget.destroy(),this._settingsWidget=null,this._filterPopupH&&this._filterPopupH.remove(),this._filterPopupH=null,this._settingsPopupH&&this._settingsPopupH.remove(),this._settingsPopupH=null},_provideSettingsWidget:function(){var t=this;function e(){t._closePopup()}function i(){return t._section.getInfographic()&&t._section.getInfographic().getInnerInfographic()}return this._needRequerySettingsSet&&(this._needRequerySettingsSet=!1,this._provideSettingsStats()),n(this._getSettingsPromise,(function(){if(t._stats&&t._stats.hasViewSettings)return t._settingsWidget||(t._settingsWidget=new g({chartSettings:t._stats.chartSettings&&t._stats.chartSettings.viewSettings,comparisonSettings:t._stats.comparisonSettings&&t._stats.comparisonSettings.viewSettings,locatorSettings:t._stats.locatorSettings&&t._stats.locatorSettings.viewSettings,mapSettings:t._stats.mapSettings&&t._stats.mapSettings.viewSettings,tableSettings:t._stats.tableSettings&&t._stats.tableSettings.viewSettings,onSortChart:function(i){e(),t._section.getChart().sortChart(i)},onCalcStateChanged:function(i){e(),t._section.setChartCalculationState(i)},onChartToTable:function(s,n){!n&&e(),(t._section.getChart()||i()||t._section.getTrueTables()[0]).chartToTable(s)},onTableToChart:function(s){e(),(t._section.getChart()||i()||t._section.getTrueTables()[0]).tableToChart(s)},onLocatorSummaryChanged:function(t){i().setVisibleSummaryFields(t.visibleFields)},onLegendVisibilityChanged:function(e){t._section.getMapImages()[0].setLegendVisible(e,!0)},onClosePopup:function(){e()}}),t.own(t._settingsWidget),t._settingsWidget.setVisualState(t._section.getVisualState())),t._settingsWidget}))},_provideFilterWidget:function(){var t=this;function e(){return t._section.getInfographic().getInnerInfographic()}return this._needRequerySettingsSet&&(this._needRequerySettingsSet=!1,this._provideSettingsStats()),n(this._getSettingsPromise,(function(){if(t._stats&&t._stats.hasFilter)return t._filterWidget||(t._filterWidget=new _({areaDetailsFilter:t._stats.areaDetailsSettings&&t._stats.areaDetailsSettings.filter,chartFilter:t._stats.chartSettings&&t._stats.chartSettings.filter,comparisonFilter:t._stats.comparisonSettings&&t._stats.comparisonSettings.filter,dynamicInfographicFilter:t._stats.dynamicInfographicSettings&&t._stats.dynamicInfographicSettings.filter,locatorFilter:t._stats.locatorSettings&&t._stats.locatorSettings.filter,tableFilter:t._stats.tableSettings&&t._stats.tableSettings.filter,onChartFilterChanged:function(e){t._section.getChart().setFilterRanges(e.filterRanges),t._setFiltersOnIndicatorVisible(e.hasFiltersOn)},onLocatorFilterChanged:function(i){e().setSearchText(i.searchText),e().setFilterRanges(i.filterRanges),t._setFiltersOnIndicatorVisible(i.hasFiltersOn)},onAreaDetailsFilterChanged:function(i){e().setSearchText(i.searchText),t._setFiltersOnIndicatorVisible(i.hasFiltersOn)},onComparisonFilterChanged:function(i){e().setFilterRanges(i.filterRanges),t._setFiltersOnIndicatorVisible(i.hasFiltersOn)},onDynamicInfographicFilterChanged:function(i){e().setFilterRanges(i.filterRanges),t._setFiltersOnIndicatorVisible(i.hasFiltersOn)},onTableFilterChanged:function(e){t._section.getTrueTables()[0].setFilterRanges(e.filterRanges),t._setFiltersOnIndicatorVisible(e.hasFiltersOn)},onClosePopup:function(){t._closePopup()}}),t.own(t._filterWidget)),t._filterWidget.setVisualState(t._section.getVisualState()),t._setFiltersOnIndicatorVisible(t._filterWidget.hasFiltersOn()),t._filterWidget}))},_setFiltersOnIndicatorVisible:function(t){this._filtersOnIndicator&&r.destroy(this._filtersOnIndicator),this._filtersOnIndicator=t&&r.create("div",{class:"sectionDynamicSettings_filtersOnIndicator",innerHTML:b.on},this._filterButton)},setVisualState:function(t){return"number"==typeof t.currentFeatureIndex&&(this._needRequerySettingsSet=!0,this._featureSelect&&this._featureSelect.set("value",t.currentFeatureIndex)),s([this._provideFilterWidget(),this._provideSettingsWidget()])},notifyShown:function(){this._adjustToolbarPosition()},_panelScale:null,setPanelScale:function(t){this._panelScale=t,this._adjustToolbarPosition()},_adjustToolbarPosition:function(){this._buttonBar&&this._buttonBar.children.length>1&&o.add(this._buttonBar,"hasMultipleButtons"),h.adjustToolbarPosition({toolbar:this._settingsToolbar,section:this._section,panelScale:this._panelScale,toolbarNeedsTopOffset:this._stats&&(this._stats.locatorSettings&&!this._stats.locatorSettings.hasTitle||this._stats.areaDetailsSettings&&!this._stats.areaDetailsSettings.hasTitle||this._stats.comparisonSettings)})},isMouseOver:function(t){return this._section.isMouseOver(t,{noDynamic:!0})||f.isMouseOver(this._settingsToolbar,{event:t})||this._settingsWidget&&(this._settingsWidget.isMouseOver(t)||f.isMouseOver(this._settingsWidget.domNode.parentNode,{event:t}))||this._filterWidget&&(this._filterWidget.isMouseOver(t)||f.isMouseOver(this._filterWidget.domNode.parentNode,{event:t}))||this._featureSelect&&this._featureSelect.isMouseOver(t)},onButtonsCreated:function(){},destroy:function(){r.destroy(this._settingsToolbar)}})}));