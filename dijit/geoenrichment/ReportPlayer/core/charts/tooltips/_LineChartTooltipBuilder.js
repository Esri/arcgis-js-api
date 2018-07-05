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

define(["dojo/dom-construct","./_BuilderUtil","dojo/i18n!esri/nls/jsapi"],function(a,e,l){return l=l.geoenrichment.dijit.ReportPlayer.ChartTooltip,{buildLineChartTooltip:function(i,o){var r=[];e.addTitle(o,i.label);var t=a.create("div",{class:"chartTooltip_row esriGERowHigh"},o);e.addColor(i.color,t),r.push(e.addLabel(e.buildSeriesLabel(i),t)),e.addValue(i.valueLabel,t),r=r.concat(e.buildStatLabels(i,o,l.weightInSeries,l.minValueInSeries,l.maxValueInSeries,l.avgValueInSeries)),i.getGroup().forEach(function(t){if(i!==t){var d=a.create("div",{class:"chartTooltip_row esriGERowHigh"},o);e.addColor(t.color,d),r.push(e.addLabel(e.buildSeriesLabel(t),d)),t.isUnavailableData?e.addValue(l.unavailableData,d):e.addValue(t.valueLabel,d)}}),e.formatTable(r)}}});