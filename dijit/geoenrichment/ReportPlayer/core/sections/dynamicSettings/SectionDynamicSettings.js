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

define(["dojo/_base/declare","dojo/aspect","dojo/dom-construct","dijit/_WidgetBase","dijit/_TemplatedMixin","./SectionDynamicChartSettings","./SectionDynamicLocatorSettings","./SectionDynamicMapSettings"],function(t,i,n,e,s,o,a,g){return t([e,s],{templateString:"<div class='esriGEReportPlayer_sectionDynamicSettings'></div>",chartSettings:null,locatorSettings:null,mapSettings:null,_chartSettingsWidget:null,_locatorSettingsWidget:null,_mapSettingsWidget:null,postCreate:function(){this._tryInitChartSettings(),this._tryInitLocatorSettings(),this._tryInitMapSettings()},_tryInitChartSettings:function(){this.chartSettings&&(this._chartSettingsWidget=new o({onSortChart:this.onSortChart.bind(this),onChartToTable:this.onChartToTable.bind(this),onTableToChart:this.onTableToChart.bind(this),onCalcStateChanged:this.onCalcStateChanged.bind(this)}).placeAt(n.create("div",{class:"sectionDynamicSettings_row"},this.domNode)),this.own(this._chartSettingsWidget),this._chartSettingsWidget.setSortingOptions(this.chartSettings.sortingOptions,this.chartSettings.sorting),this._chartSettingsWidget.setViewOptions(this.chartSettings.canViewTable),this._chartSettingsWidget.setToggleCalcStateOptions(this.chartSettings.group))},_tryInitLocatorSettings:function(){function t(){e._locatorSettingsWidget.setNumPoints(e.locatorSettings.locatorTableInfographic.getNumPointsTotal(),e.locatorSettings.locatorTableInfographic.getNumPointsShown())}var e=this;this.locatorSettings&&(this._locatorSettingsWidget=new a({onLocatorFilterChanged:this.onLocatorFilterChanged.bind(this)}).placeAt(n.create("div",{class:"sectionDynamicSettings_row"},this.domNode)),this.own(this._locatorSettingsWidget),this._locatorSettingsWidget.setStatRanges(this.locatorSettings.statRanges),t(),this.own(i.after(this.locatorSettings.locatorTableInfographic,"onContentUpdated",t)))},_tryInitMapSettings:function(){this.mapSettings&&(this._mapSettingsWidget=new g({onLegendVisibilityChanged:this.onLegendVisibilityChanged.bind(this)}).placeAt(n.create("div",{class:"sectionDynamicSettings_row"},this.domNode)),this.own(this._mapSettingsWidget),this._mapSettingsWidget.setLegendVisible(this.mapSettings.showLegend))},setVisualState:function(t){this._chartSettingsWidget&&this._chartSettingsWidget.setVisualState(t),this._locatorSettingsWidget&&this._locatorSettingsWidget.setVisualState(t),this._mapSettingsWidget&&this._mapSettingsWidget.setVisualState(t)},onSortChart:function(t){},onChartToTable:function(){},onTableToChart:function(){},onCalcStateChanged:function(t){},onLocatorFilterChanged:function(t){},onLegendVisibilityChanged:function(t){},onClosePopup:function(){}})});