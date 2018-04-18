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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/dom-construct","./_BuilderUtil","dojo/i18n!../../../../../../nls/jsapi"],function(a,e,l){return l=l.geoenrichment.dijit.ReportPlayer.ChartTooltip,{buildColumnChartTooltip:function(a,e){var l=a.getGroup&&a.getGroup();l&&1!==l.length?this._buildMultiSeriesTooltip(a,e):this._buildSingleSeriesTooltip(a,e)},_buildSingleSeriesTooltip:function(i,o){var t=[],r=a.create("div",{class:"chartTooltip_row esriGERowHigh"},o);e.addColor(i.color,r),t.push(e.addLabel(i.label,r)),i.isUnavailableData?e.addValue(l.unavailableData,r):(e.addValue(i.valueLabel,r),t=t.concat(e.buildStatLabels(i,o,l.weight,l.minValue,l.maxValue,l.avgValue))),e.formatTable(t)},_buildMultiSeriesTooltip:function(i,o){var t=[];e.addTitle(o,i.label);var r=a.create("div",{class:"chartTooltip_row esriGERowHigh"},o);e.addColor(i.color,r),t.push(e.addLabel(e.buildSeriesLabel(i),r)),i.isUnavailableData?e.addValue(l.unavailableData,r):(e.addValue(i.valueLabel,r),t=t.concat(e.buildStatLabels(i,o,l.weightInSeries,l.minValueInSeries,l.maxValueInSeries,l.avgValueInSeries))),i.getGroup().forEach(function(r){if(i!==r){var d=a.create("div",{class:"chartTooltip_row esriGERowHigh"},o);e.addColor(r.color,d),t.push(e.addLabel(e.buildSeriesLabel(r),d)),r.isUnavailableData?e.addValue(l.unavailableData,d):e.addValue(r.valueLabel,d)}}),e.formatTable(t)}}});