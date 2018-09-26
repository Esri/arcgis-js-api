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

define(["dojo/_base/declare","dojo/dom-construct","./ZoomSupportTooltip","./_BuilderUtil","./_ColumnBarChartTooltipBuilder","./_GaugeChartTooltipBuilder","./_LineChartTooltipBuilder","./_PieDonutRingChartTooltipBuilder","../utils/ChartTypes","../../supportClasses/conditionalStyling/ConditionalStyleLegendBuilder","dojo/i18n!esri/nls/jsapi"],function(t,i,o,e,r,a,n,l,s,c,p){return p=p.geoenrichment.dijit.ReportPlayer.ChartTooltip,t(o,{showStatistics:!0,tooltipClass:"esriGEChartContainer_chartTooltip_masterTooltip",tooltipContainerClass:"esriGEChartContainer_chartTooltip_containerNode",_chartType:null,constructor:function(){var t=this,i=function(i,o){var e=i.run&&i.run.data&&i.run.data[i.index];if(e.tooltip&&"object"==typeof e.tooltip)return t._renderTooltip(e.tooltip)},o=this.text;this.text=function(t,e){return i(t)||o(t,e)}},_needSetRectFromShape:function(){return s.isPictureLike(this._chartType)},setChartType:function(t){this._chartType=t},_renderTooltip:function(t){var o=i.create("div",{class:"esriGEChartContainer_chartTooltip"},document.body);if(this.showStatistics)this._chartType===s.PIE||this._chartType===s.DONUT||this._chartType===s.RING?l.buildPieDonutRingChartTooltip(t,o):this._chartType===s.GAUGE?a.buildGaugeChartTooltip(t,o):s.isColumnBarLike(this._chartType)?r.buildColumnChartTooltip(t,o):s.isLineLike(this._chartType)&&n.buildLineChartTooltip(t,o);else{e.addTitle(o,t.label,t.color);var h=i.create("div",{class:"chartTooltip_row esriGERowHigh"},o);t.fieldInfo&&e.addValue((t.fieldInfo.script?t.fieldInfo.script.alias:t.fieldInfo.alias)||"",h)}t.conditionalStyling&&(this.showStatistics||i.create("div",{class:"chartTooltip_row",style:"margin-top:30px;margin-left:10px;",innerHTML:p.colorOfBackWillDependOnValue},o),i.place(c.createLegendNode(t.conditionalStyling,"chart",t.value),o));var d=o.outerHTML;return i.destroy(o),d}})});