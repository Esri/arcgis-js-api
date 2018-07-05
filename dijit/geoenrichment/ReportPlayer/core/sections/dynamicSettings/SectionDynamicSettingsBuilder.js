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

define(["dojo/_base/declare","dojo/on","dojo/promise/all","dojo/dom-class","dojo/dom-construct","esri/dijit/geoenrichment/utils/MouseUtil","esri/dijit/geoenrichment/utils/PopupUtil","esri/dijit/geoenrichment/utils/TooltipUtil","./_ChartSettingsBuilder","./_LocatorSettingsBuilder","./_MapSettingsBuilder","./SectionDynamicSettings","dojo/i18n!esri/nls/jsapi"],function(t,e,i,n,o,s,a,r,c,g,l,u,h){return h=h.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder,t(null,{_section:null,_settingsWidget:null,_settingsToolbar:null,constructor:function(t){this._section=t,this._createSettings()},_createSettings:function(){var t=this;i({chartSettings:c.provideChartSettings(this._section),locatorSettings:g.provideLocatorSettings(this._section),mapSettings:l.provideMapSettings(this._section)}).then(function(e){(e.chartSettings||e.locatorSettings||e.mapSettings)&&(t._addExportButton(e.locatorSettings),t._addSettingsButton(e),t._settingsToolbar.children.length>1&&n.add(t._settingsToolbar,"hasMultipleButtons"))})},_addSettingsButton:function(t){function e(){n||(n=!0,a.makePopup(function(){return i._createPopup(t)},this._section,o,{orient:["before","below"]}))}var i=this,n=!1,o=this._createButton("dijitInline sectionDynamicSettings_settingsButton "+(t.locatorSettings?"locatorTable":""),e)},_addExportButton:function(t){if(t&&t.canExportToExcel){var i=this._createButton("dijitInline sectionDynamicSettings_exportButton");e(i,"click",function(){t.locatorTableInfographic.exportToExcel()}),r.setTooltipToNode(i,h.exportInfographicPanel)}},_createButton:function(t,e){return o.create("div",{class:t},this._createSettingsToolbar(e))},_createSettingsToolbar:function(t){function i(t){n._settingsToolbar.style.opacity=t?"":"0",t&&n._settingsToolbar.__onShowHandles.forEach(function(t){return t()})}var n=this;return this._settingsToolbar||(this._settingsToolbar=o.create("div",{class:"sectionDynamicSettings_toolbar"},this._section.domNode),this._settingsToolbar.__onShowHandles=[],i(!1),this._section.own(e(document.body,"mousemove",function(){i(s.isMouseOver(n._section.domNode))}))),t&&this._settingsToolbar.__onShowHandles.push(t),this._settingsToolbar},_createPopup:function(t){function e(){a.close(i._settingsWidget)}var i=this;return this._settingsWidget||(this._settingsWidget=new u({chartSettings:t.chartSettings,locatorSettings:t.locatorSettings,mapSettings:t.mapSettings,onSortChart:function(t){e(),i._section.sortChart(t)},onChartToTable:function(){e(),i._section.chartToTable()},onTableToChart:function(){e(),i._section.tableToChart()},onCalcStateChanged:function(t){e(),i._section.setChartCalculationState(t)},onLocatorFilterChanged:function(t){i._section.getInfographic().getInnerInfographic().setSearchText(t.searchText),i._section.getInfographic().getInnerInfographic().setFilterRanges(t.filterRanges)},onLegendVisibilityChanged:function(t){i._section.getMapImages()[0].setLegendVisible(t)},onClosePopup:function(){e()}}),this._section.own(this._settingsWidget),this._settingsWidget.setVisualState(this._section.getVisualState())),this._settingsWidget},setVisualState:function(t){this._settingsWidget&&this._settingsWidget.setVisualState(t)}})});