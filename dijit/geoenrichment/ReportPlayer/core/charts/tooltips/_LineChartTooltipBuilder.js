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

define(["dojo/dom-construct","./_BuilderUtil","dojo/i18n!esri/nls/jsapi"],function(a,e,i){return i=i.geoenrichment.dijit.ReportPlayer.ChartTooltip,i.weightInAreas="Weight in areas:",i.minValueInAreas="Min in areas:",i.maxValueInAreas="Max in areas:",i.avgValueInAreas="Avg in areas:",{buildLineChartTooltip:function(l,r){var n=[];e.addTitle(r,l.label);var t=a.create("div",{class:"chartTooltip_row esriGERowHigh"},r);e.addColor(l.color,t),n.push(e.addLabel(e.buildSeriesLabel(l),t)),e.addValue(l.valueLabel,t);var o;o=l.isMultiFeature?e.buildStatLabels(l,r,i.weightInAreas,i.minValueInAreas,i.maxValueInAreas,i.avgValueInAreas):e.buildStatLabels(l,r,i.weightInSeries,i.minValueInSeries,i.maxValueInSeries,i.avgValueInSeries),n=n.concat(o),l.getGroup().forEach(function(t){if(l!==t){var o=a.create("div",{class:"chartTooltip_row esriGERowHigh"},r);e.addColor(t.color,o),n.push(e.addLabel(e.buildSeriesLabel(t),o)),t.isUnavailableData?e.addValue(i.unavailableData,o):e.addValue(t.valueLabel,o)}}),e.formatTable(n)}}});