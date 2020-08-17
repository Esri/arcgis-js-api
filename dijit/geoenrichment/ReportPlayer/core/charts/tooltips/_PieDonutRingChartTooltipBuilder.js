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

define(["dojo/dom-construct","dojo/string","./_BuilderUtil","dojo/i18n!esri/nls/jsapi"],(function(e,a,l,i){return i=i.geoenrichment.dijit.ReportPlayer.ChartTooltip,{buildPieDonutRingChartTooltip:function(t,o){t.showTitle&&l.addTitle(o,t.label,t),t.richTextFieldInfo&&l.buildRichText(t,o);var d=e.create("div",{class:"chartTooltip_row esriGERowHigh"},o);if(l.addRowOffset(d),t.isUnavailableData)l.addLabel(i.unavailableData,d);else if(t.isBenchmarked)l.addBenchmarkValue(t,d);else{l.addLabel(a.substitute(i.pieChartTooltip_label,{value:t.valueLabel,total:t.sumValueLabel}),d);var n=l.buildStatLabels(t,o,i.weight,i.minValue,i.maxValue,i.avgValue);l.formatTable(n)}d.style.display=t.showValue?"":"none"}}}));
