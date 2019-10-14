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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/dom-construct","./_BuilderUtil","dojo/i18n!esri/nls/jsapi"],function(a,e,i){return i=i.geoenrichment.dijit.ReportPlayer.ChartTooltip,{buildLineChartTooltip:function(l,r){var t=[];e.addTitle(r,l.label);var o=a.create("div",{class:"chartTooltip_row esriGERowHigh"},r);e.addColor(l,o),t.push(e.addLabel(e.buildSeriesLabel(l),o)),e.addValue(l.valueLabel,o);var d;d=l.isMultiFeature?e.buildStatLabels(l,r,i.weightInAreas,i.minValueInAreas,i.maxValueInAreas,i.avgValueInAreas):e.buildStatLabels(l,r,i.weightInSeries,i.minValueInSeries,i.maxValueInSeries,i.avgValueInSeries,i.weightInStack),t=t.concat(d),l.getGroup().forEach(function(o){if(l!==o){var d=a.create("div",{class:"chartTooltip_row esriGERowHigh"},r);e.addColor(o,d),t.push(e.addLabel(e.buildSeriesLabel(o),d)),o.isUnavailableData?e.addValue(i.unavailableData,d):e.addValue(o.valueLabel,d)}}),e.formatTable(t)}}});