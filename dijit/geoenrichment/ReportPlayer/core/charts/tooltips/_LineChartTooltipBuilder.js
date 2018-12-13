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

define(["dojo/dom-construct","./_BuilderUtil","dojo/i18n!esri/nls/jsapi"],function(a,e,l){return l=l.geoenrichment.dijit.ReportPlayer.ChartTooltip,{buildLineChartTooltip:function(i,r){var o=[];e.addTitle(r,i.label);var t=a.create("div",{class:"chartTooltip_row esriGERowHigh"},r);e.addColor(i.color,t),o.push(e.addLabel(e.buildSeriesLabel(i),t)),e.addValue(i.valueLabel,t);var d;d=i.isMultiFeature?e.buildStatLabels(i,r,l.weightInAreas,l.minValueInAreas,l.maxValueInAreas,l.avgValueInAreas):e.buildStatLabels(i,r,l.weightInSeries,l.minValueInSeries,l.maxValueInSeries,l.avgValueInSeries),o=o.concat(d),i.getGroup().forEach(function(t){if(i!==t){var d=a.create("div",{class:"chartTooltip_row esriGERowHigh"},r);e.addColor(t.color,d),o.push(e.addLabel(e.buildSeriesLabel(t),d)),t.isUnavailableData?e.addValue(l.unavailableData,d):e.addValue(t.valueLabel,d)}}),e.formatTable(o)}}});