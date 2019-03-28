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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/string","dojo/dom-construct","dojo/dom-style","dojo/i18n!esri/nls/jsapi"],function(e,i,a,t){var r=t.geoenrichment.dijit.ReportPlayer.ChartContainer;return t=t.geoenrichment.dijit.ReportPlayer.ChartTooltip,{addTitle:function(e,a,t){var r=i.create("div",{class:"chartTooltip_title esriGERowHigh"},e,"first");t&&this.addColor(t,r),this.addLabel(a,r)},addColor:function(e,t){var r=i.create("div",{class:"chartTooltip_color dijitInline esriGESpaceAfterBig"},t);a.set(r,"backgroundColor",e||"transparent")},addRowOffset:function(e){this.addColor(null,e)},addLabel:function(e,a){return i.create("div",{class:"chartTooltip_label dijitInline esriGESpaceAfterBig",innerHTML:e},a)},addValue:function(e,a){return i.create("div",{class:"chartTooltip_value dijitInline esriGESpaceAfterBig",innerHTML:e},a)},buildStatLabels:function(e,a,t,r,o,n){function l(t,r){if(e[t]){var o=i.create("div",{class:"chartTooltip_row esriGERowHigh"},a);s.addColor(null,o),d.push(s.addLabel(r,o)),s.addValue(e[t],o)}}var s=this,d=[];return l("weightValueLabel",t),l("minValueLabel",r),l("maxValueLabel",o),l("avgValueLabel",n),d},formatTable:function(e){var i=0;e.forEach(function(e){i=Math.max(i,a.get(e,"width"))}),e.forEach(function(e){a.set(e,"width",i+"px")})},buildSeriesLabel:function(i){return!0===i.isThisAreaSpecific?i.seriesLabel&&!i.isThisAreaSingleSeries?e.substitute(t.thisAreaSeries,{seriesName:i.seriesLabel}):r.thisArea:i.seriesLabel}}});