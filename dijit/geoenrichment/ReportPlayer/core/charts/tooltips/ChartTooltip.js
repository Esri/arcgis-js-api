// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/string","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojox/charting/action2d/Tooltip","../chartUtils/ChartTypes","../../supportClasses/conditionalStyling/ConditionalStyleLegendBuilder","dojo/i18n!../../../../../../nls/jsapi"],function(e,t,a,i,o,r,l,n,c){return c=c.geoenrichment.dijit.ReportPlayer.ReportPlayer,e(r,{showStatistics:!0,_chartType:null,constructor:function(){var e=this,t=function(t,a){var i=t.run&&t.run.data&&t.run.data[t.index];if(i.tooltip&&"object"==typeof i.tooltip)return e._renderTooltip(i.tooltip)},a=this.text;this.text=function(e,i){return t(e,i)||a(e,i)}},setChartType:function(e){this._chartType=e},_renderTooltip:function(e){function a(e,t){var a=i.create("div",{"class":"chartTooltip_title esriGERowHigh"},T,"first");t&&r(t,a),s(e,a)}function r(e,t){var a=i.create("div",{"class":"chartTooltip_color dijitInline esriGESpaceAfterBig"},t);o.set(a,"backgroundColor",e||"transparent")}function s(e,t){return i.create("div",{"class":"chartTooltip_label dijitInline esriGESpaceAfterBig",innerHTML:e},t)}function u(e,t){return i.create("div",{"class":"chartTooltip_value dijitInline esriGESpaceAfterBig",innerHTML:e},t)}function h(e){var t=0;e.forEach(function(e){t=Math.max(t,o.get(e,"width"))}),e.forEach(function(e){o.set(e,"width",t+"px")})}function p(t,a,o){function l(t,a){if(e[t]){var o=i.create("div",{"class":"chartTooltip_row esriGERowHigh"},T);r(null,o),g.push(s(a,o)),u(e[t],o)}}l("percentLabel",t),l("maxValueLabel",a),l("avgValueLabel",o)}function d(){a(e.label,e.color),r(null,b),s(t.substitute(c.pieChartTooltip_label,{value:e.valueLabel,total:e.sumValueLabel}),b),p(c.weight,c.maxValue,c.avgValue)}function f(){var t=e.getGroup&&e.getGroup();t&&1!=t.length?(a(e.label),r(e.color,b),g.push(s(e.seriesLabel,b)),u(e.valueLabel,b),p(c.weightInSeries,c.maxValueInSeries,c.avgValueInSeries),e.getGroup().forEach(function(t){if(e!==t){var a=i.create("div",{"class":"chartTooltip_row esriGERowHigh"},T);r(t.color,a),g.push(s(t.seriesLabel,a)),u(t.valueLabel,a)}})):(r(e.color,b),g.push(s(e.label,b)),u(e.valueLabel,b),p(c.weight,c.maxValue,c.avgValue))}function v(){a(e.label),r(e.color,b),g.push(s(e.seriesLabel,b)),u(e.valueLabel,b),p(c.weightInSeries,c.maxValueInSeries,c.avgValueInSeries),e.getGroup().forEach(function(t){if(e!==t){var a=i.create("div",{"class":"chartTooltip_row esriGERowHigh"},T);r(t.color,a),g.push(s(t.seriesLabel,a)),u(t.valueLabel,a)}})}var g=[],T=i.create("div",{"class":"chartContainer_chartTooltip"},document.body);if(this.showStatistics){var b=i.create("div",{"class":"chartTooltip_row esriGERowHigh"},T);(this._chartType==l.PIE||this._chartType==l.DONUT||this._chartType==l.RING)&&d(),this._chartType==l.COLUMN||this._chartType==l.BAR?f():this._chartType==l.LINE&&v(),h(g)}else i.create("div",{"class":"chartTooltip_row esriGERowHigh",innerHTML:c.colorOfBackWillDependOnValue},T);e.conditionalStyling&&i.place(n.createLegendNode(e.conditionalStyling,"chart",e.value),T);var L=T.outerHTML;return i.destroy(T),L}})});