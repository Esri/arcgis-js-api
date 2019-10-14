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

define(["dojo/_base/declare","dojo/dom-construct","./ZoomSupportTooltip","./_BuilderUtil","./_ColumnBarChartTooltipBuilder","./_GaugeChartTooltipBuilder","./_WaffleChartTooltipBuilder","./_LineChartTooltipBuilder","./_PieDonutRingChartTooltipBuilder","../utils/ChartTypes","../../supportClasses/conditionalStyling/ConditionalStyleLegendBuilder","dojo/i18n!esri/nls/jsapi"],function(t,i,o,e,r,a,l,n,s,c,h,p){return p=p.geoenrichment.dijit.ReportPlayer.ChartTooltip,t(o,{showStatistics:!0,tooltipClass:"esriGEChartContainer_chartTooltip_masterTooltip",_chartType:null,constructor:function(){var t=this,i=function(i,o){var e=i.run&&i.run.data&&i.run.data[i.index];if(e.tooltip&&"object"==typeof e.tooltip)return t._renderTooltip(e.tooltip)},o=this.text;this.text=function(t,e){return i(t)||o(t,e)}},_needSetRectFromShape:function(){return c.isPictureLike(this._chartType)},setChartType:function(t){this._chartType=t},_renderTooltip:function(t){var o=i.create("div",{class:"esriGEChartContainer_chartTooltip"},document.body);if(this.showStatistics)this._chartType===c.PIE||this._chartType===c.DONUT||this._chartType===c.RING?s.buildPieDonutRingChartTooltip(t,o):this._chartType===c.GAUGE?a.buildGaugeChartTooltip(t,o):this._chartType===c.WAFFLE?l.buildWaffleChartTooltip(t,o):c.isColumnBarLike(this._chartType)?r.buildColumnChartTooltip(t,o):c.isLineLike(this._chartType)&&n.buildLineChartTooltip(t,o);else{e.addTitle(o,t.label,t);var d=i.create("div",{class:"chartTooltip_row esriGERowHigh"},o);t.fieldInfo&&e.addValue((t.fieldInfo.script?t.fieldInfo.script.alias:t.fieldInfo.alias)||"",d)}t.conditionalStyling&&(this.showStatistics||i.create("div",{class:"chartTooltip_row",style:"margin-top:30px;",innerHTML:p.colorOfBackWillDependOnValue},o),i.place(h.createLegendNode(t.conditionalStyling,"chart",t.value),o));var u=o.outerHTML;return i.destroy(o),u}})});