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

define(["dojo/_base/declare","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin","../RefineFilters","esri/dijit/geoenrichment/utils/DomUtil","dojo/text!../../../templates/sectionDynamicSettings/ComparisonSettings.html","dojo/i18n!esri/nls/jsapi"],function(t,e,i,n,s,o,r,a){return a=a.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder,t([i,n],{templateString:r,nls:a,_isChartShownFlag:!0,postCreate:function(){var t=this;this.inherited(arguments),e(this.toggleViewButton,"click",function(){t._isChartShownFlag=!t._isChartShownFlag,t._updateControlsForView(),t.onShowChart(t._isChartShownFlag)}),this.refineFilters=new s({hasTitle:!0,hasRangeFilters:!0,onFilterChanged:function(e){t.onComparisonFilterChanged(e)}}).placeAt(this.filtersBlock),this.own(this.refineFilters)},_updateControlsForView:function(){this.toggleViewButton.innerHTML=this._isChartShownFlag?a.viewTable:a.viewChart},setSettings:function(t){this._isChartShownFlag=t.isChartView,this._updateControlsForView(),t.filterRanges?(o.show(this.filtersBlock),this.refineFilters.setFilterRanges(t.filterRanges)):o.hide(this.filtersBlock)},setNumAreas:function(t,e){this.refineFilters.setTitle(a.refineYourAreas,t,e)},setVisualState:function(t){var e=t&&t.stackElements[0]&&t.stackElements[0].cells&&t.stackElements[0].cells[0];e&&(this._isChartShownFlag=e.isChartView,this._updateControlsForView(),this.refineFilters.setVisualState(e))},onShowChart:function(t){},onComparisonFilterChanged:function(t){}})});