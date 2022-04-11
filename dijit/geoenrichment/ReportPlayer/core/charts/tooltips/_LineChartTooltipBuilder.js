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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/dom-construct","./_BuilderUtil","dojo/i18n!esri/nls/jsapi"],(function(e,a,i){return i=i.geoenrichment.dijit.ReportPlayer.ChartTooltip,{buildLineChartTooltip:function(l,r){var d=[];l.showTitle&&a.addTitle(r,l.label),l.richTextFieldInfo&&a.buildRichText(l,r);var t,n=e.create("div",{class:"chartTooltip_row esriGERowHigh"},r);a.addColor(l,n),d.push(a.addLabel(a.buildSeriesLabel(l),n)),l.isBenchmarked?a.addBenchmarkValue(l,n):a.addValue(l.valueLabel,n),n.style.display=l.showValue?"":"none",l.isMultiFeature?t=a.buildStatLabels(l,r,i.weightInAreas,i.minValueInAreas,i.maxValueInAreas,i.avgValueInAreas):l.isBenchmarked||(t=a.buildStatLabels(l,r,i.weightInSeries,i.minValueInSeries,i.maxValueInSeries,i.avgValueInSeries,i.weightInStack)),t&&(d=d.concat(t)),l.showValue&&l.getGroup().forEach((function(t){if(l.id!==t.id){var n=e.create("div",{class:"chartTooltip_row esriGERowHigh"},r);a.addColor(t,n),d.push(a.addLabel(a.buildSeriesLabel(t),n)),t.isUnavailableData?a.addValue(i.unavailableData,n):t.isBenchmarked?a.addBenchmarkValue(t,n):a.addValue(t.valueLabel,n)}})),a.formatTable(d)}}}));