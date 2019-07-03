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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/dom-construct","./_BuilderUtil","dojo/i18n!esri/nls/jsapi"],function(a,e,l){return l=l.geoenrichment.dijit.ReportPlayer.ChartTooltip,{buildColumnChartTooltip:function(a,e){var l=a.getGroup&&a.getGroup();a.isMultiFeature||l&&1!==l.length?this._buildMultiSeriesTooltip(a,e):this._buildSingleSeriesTooltip(a,e)},_buildSingleSeriesTooltip:function(i,t){var u=[],r=a.create("div",{class:"chartTooltip_row esriGERowHigh"},t);e.addColor(i,r),u.push(e.addLabel(i.label,r)),i.isUnavailableData?e.addValue(l.unavailableData,r):(e.addValue(i.valueLabel,r),u=u.concat(e.buildStatLabels(i,t,l.weight,l.minValue,l.maxValue,l.avgValue))),e.formatTable(u)},_buildMultiSeriesTooltip:function(i,t){var u=[];e.addTitle(t,i.isMultiFeature?e.buildSeriesLabel(i):i.label);var r=a.create("div",{class:"chartTooltip_row esriGERowHigh"},t);if(e.addColor(i,r),u.push(e.addLabel(i.isMultiFeature?i.label:e.buildSeriesLabel(i),r)),i.isUnavailableData)e.addValue(l.unavailableData,r);else{e.addValue(i.valueLabel,r);var o;o=i.isMultiFeature?e.buildStatLabels(i,t,l.weightInAreas,l.minValueInAreas,l.maxValueInAreas,l.avgValueInAreas):e.buildStatLabels(i,t,l.weightInSeries,l.minValueInSeries,l.maxValueInSeries,l.avgValueInSeries,l.weightInStack),u=u.concat(o)}i.getGroup().forEach(function(r){if(i!==r){var o=a.create("div",{class:"chartTooltip_row esriGERowHigh"},t);e.addColor(r,o),u.push(e.addLabel(r.isMultiFeature?r.label:e.buildSeriesLabel(r),o)),r.isUnavailableData?e.addValue(l.unavailableData,o):e.addValue(r.valueLabel,o)}}),e.formatTable(u)}}});