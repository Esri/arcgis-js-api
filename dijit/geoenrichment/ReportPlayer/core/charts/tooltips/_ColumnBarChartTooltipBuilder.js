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

define(["dojo/dom-construct","./_BuilderUtil","dojo/i18n!esri/nls/jsapi"],function(a,e,l){return l=l.geoenrichment.dijit.ReportPlayer.ChartTooltip,l.weightInAreas="Weight in areas:",l.minValueInAreas="Min in areas:",l.maxValueInAreas="Max in areas:",l.avgValueInAreas="Avg in areas:",{buildColumnChartTooltip:function(a,e){var l=a.getGroup&&a.getGroup();a.isMultiFeature||l&&1!==l.length?this._buildMultiSeriesTooltip(a,e):this._buildSingleSeriesTooltip(a,e)},_buildSingleSeriesTooltip:function(i,t){var r=[],u=a.create("div",{class:"chartTooltip_row esriGERowHigh"},t);e.addColor(i.color,u),r.push(e.addLabel(i.label,u)),i.isUnavailableData?e.addValue(l.unavailableData,u):(e.addValue(i.valueLabel,u),r=r.concat(e.buildStatLabels(i,t,l.weight,l.minValue,l.maxValue,l.avgValue))),e.formatTable(r)},_buildMultiSeriesTooltip:function(i,t){var r=[];e.addTitle(t,i.isMultiFeature?e.buildSeriesLabel(i):i.label);var u=a.create("div",{class:"chartTooltip_row esriGERowHigh"},t);if(e.addColor(i.color,u),r.push(e.addLabel(i.isMultiFeature?i.label:e.buildSeriesLabel(i),u)),i.isUnavailableData)e.addValue(l.unavailableData,u);else{e.addValue(i.valueLabel,u);var o;o=i.isMultiFeature?e.buildStatLabels(i,t,l.weightInAreas,l.minValueInAreas,l.maxValueInAreas,l.avgValueInAreas):e.buildStatLabels(i,t,l.weightInSeries,l.minValueInSeries,l.maxValueInSeries,l.avgValueInSeries),r=r.concat(o)}i.getGroup().forEach(function(u){if(i!==u){var o=a.create("div",{class:"chartTooltip_row esriGERowHigh"},t);e.addColor(u.color,o),r.push(e.addLabel(u.isMultiFeature?u.label:e.buildSeriesLabel(u),o)),u.isUnavailableData?e.addValue(l.unavailableData,o):e.addValue(u.valueLabel,o)}}),e.formatTable(r)}}});