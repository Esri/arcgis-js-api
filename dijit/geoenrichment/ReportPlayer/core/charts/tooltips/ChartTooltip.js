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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-construct","./ZoomSupportTooltip","./_BuilderUtil","./_ColumnBarChartTooltipBuilder","./_GaugeChartTooltipBuilder","./_WaffleChartTooltipBuilder","./_LineChartTooltipBuilder","./_PieDonutRingChartTooltipBuilder","../utils/ChartTypes","../../supportClasses/conditionalStyling/ConditionalStyleLegendBuilder","dojo/i18n!esri/nls/jsapi"],(function(t,i,e,o,r,a,l,n,s,c,h,d){return d=d.geoenrichment.dijit.ReportPlayer.ChartTooltip,t(e,{showStatistics:!0,tooltipClass:"esriGEChartContainer_chartTooltip_masterTooltip",_chartType:null,constructor:function(){var t=this,i=this.text;this.text=function(e,o){return function(i,e){var o=i.run&&i.run.data&&i.run.data[i.index];if(o.tooltip&&"object"==typeof o.tooltip)return t._renderTooltip(o.tooltip)}(e)||i(e,o)}},_needSetRectFromShape:function(){return c.isPictureLike(this._chartType)},setChartType:function(t){this._chartType=t},_renderTooltip:function(t){var e=i.create("div",{class:"esriGEChartContainer_chartTooltip"},document.body);if(this.showStatistics)this._chartType===c.PIE||this._chartType===c.DONUT||this._chartType===c.RING?s.buildPieDonutRingChartTooltip(t,e):this._chartType===c.GAUGE?a.buildGaugeChartTooltip(t,e):this._chartType===c.WAFFLE?l.buildWaffleChartTooltip(t,e):c.isColumnBarLike(this._chartType)?r.buildColumnChartTooltip(t,e):c.isLineLike(this._chartType)&&n.buildLineChartTooltip(t,e);else{o.addTitle(e,t.label,t);var p=i.create("div",{class:"chartTooltip_row esriGERowHigh"},e);t.fieldInfo&&o.addValue((t.fieldInfo.script?t.fieldInfo.script.alias:t.fieldInfo.alias)||"",p)}t.conditionalStyling&&(this.showStatistics||i.create("div",{class:"chartTooltip_row",style:"margin-top:30px;",innerHTML:d.colorOfBackWillDependOnValue},e),i.place(h.createLegendNode(t.conditionalStyling,"chart",t.isBenchmarked?t.unbenchmarkedValue:t.value),e));var u=e.outerHTML;return i.destroy(e),u}})}));