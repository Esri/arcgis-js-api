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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/string","dojo/dom-construct","dojo/dom-style","dojo/i18n!../../../../../../nls/jsapi"],function(e,i,t,a){return a=a.geoenrichment.dijit.ReportPlayer.ChartTooltip,{addTitle:function(e,t,a){var r=i.create("div",{class:"chartTooltip_title esriGERowHigh"},e,"first");a&&this.addColor(a,r),this.addLabel(t,r)},addColor:function(e,a){var r=i.create("div",{class:"chartTooltip_color dijitInline esriGESpaceAfterBig"},a);t.set(r,"backgroundColor",e||"transparent")},addRowOffset:function(e){this.addColor(null,e)},addLabel:function(e,t){return i.create("div",{class:"chartTooltip_label dijitInline esriGESpaceAfterBig",innerHTML:e},t)},addValue:function(e,t){return i.create("div",{class:"chartTooltip_value dijitInline esriGESpaceAfterBig",innerHTML:e},t)},buildStatLabels:function(e,t,a,r,o,l){function n(a,r){if(e[a]){var o=i.create("div",{class:"chartTooltip_row esriGERowHigh"},t);s.addColor(null,o),d.push(s.addLabel(r,o)),s.addValue(e[a],o)}}var s=this,d=[];return n("weightValueLabel",a),n("minValueLabel",r),n("maxValueLabel",o),n("avgValueLabel",l),d},formatTable:function(e){var i=0;e.forEach(function(e){i=Math.max(i,t.get(e,"width"))}),e.forEach(function(e){t.set(e,"width",i+"px")})},buildSeriesLabel:function(i){return!0===i.isPrimarySeries?e.substitute(a.thisAreaSeries,{seriesName:i.seriesLabel}):i.seriesLabel}}});