// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/dom-construct","./_BuilderUtil","dojo/i18n!esri/nls/jsapi"],(function(a,e,l){return l=l.geoenrichment.dijit.ReportPlayer.ChartTooltip,{buildColumnChartTooltip:function(a,e){var l=a.getGroup&&a.getGroup();a.isMultiFeature||l&&1!==l.length?this._buildMultiSeriesTooltip(a,e):this._buildSingleSeriesTooltip(a,e)},_buildSingleSeriesTooltip:function(i,t){var u=[];i.richTextFieldInfo&&e.buildRichText(i,t);var r=a.create("div",{class:"chartTooltip_row esriGERowHigh"},t);e.addColor(i,r),u.push(e.addLabel(i.label,r)),i.isUnavailableData?e.addValue(l.unavailableData,r):i.isBenchmarked?e.addBenchmarkValue(i,r):(e.addValue(i.valueLabel,r),u=u.concat(e.buildStatLabels(i,t,l.weight,l.minValue,l.maxValue,l.avgValue))),r.style.display=i.showValue?"":"none",e.formatTable(u)},_buildMultiSeriesTooltip:function(i,t){var u=[];i.showTitle&&e.addTitle(t,i.isMultiFeature?e.buildSeriesLabel(i):i.label),i.richTextFieldInfo&&e.buildRichText(i,t);var r=a.create("div",{class:"chartTooltip_row esriGERowHigh"},t);if(e.addColor(i,r),u.push(e.addLabel(i.isMultiFeature?i.label:e.buildSeriesLabel(i),r)),i.isUnavailableData)e.addValue(l.unavailableData,r);else if(i.isBenchmarked)e.addBenchmarkValue(i,r);else{var d;e.addValue(i.valueLabel,r),d=i.isMultiFeature?e.buildStatLabels(i,t,l.weightInAreas,l.minValueInAreas,l.maxValueInAreas,l.avgValueInAreas,l.weightInStack):i.isSinglePointInSeries?e.buildStatLabels(i,t,null,null,null,null,l.weightInStack):e.buildStatLabels(i,t,l.weightInSeries,l.minValueInSeries,l.maxValueInSeries,l.avgValueInSeries,l.weightInStack),u=u.concat(d)}r.style.display=i.showValue?"":"none",i.showValue&&i.getGroup().forEach((function(r){if(i.id!==r.id){var d=a.create("div",{class:"chartTooltip_row esriGERowHigh"},t);e.addColor(r,d),u.push(e.addLabel(r.isMultiFeature?r.label:e.buildSeriesLabel(r),d)),r.isUnavailableData?e.addValue(l.unavailableData,d):i.isBenchmarked?e.addBenchmarkValue(r,d):e.addValue(r.valueLabel,d)}})),e.formatTable(u)}}}));
