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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/string","dojo/dom-construct","./ZoomSupportTooltip","./_BuilderUtil","./_ColumnBarChartTooltipBuilder","./_GaugeChartTooltipBuilder","./_WaffleChartTooltipBuilder","./_LineChartTooltipBuilder","./_PieDonutRingChartTooltipBuilder","../utils/ChartTypes","../../supportClasses/conditionalStyling/ConditionalStyleLegendBuilder","../../dataDrilling/DataDrillingVisualizer","../../supportClasses/WidgetQueryUtil","dojo/i18n!esri/nls/jsapi"],(function(i,t,o,e,n,l,a,r,s,d,h,c,u,p,f,g){g=g.geoenrichment.dijit.ReportPlayer.ChartTooltip;var T={lastShownInfo:null,setInfo:function(i){T.lastShownInfo=i,i&&setTimeout((function(){T.lastShownInfo===i&&(T.lastShownInfo=null)}),6e4)}};function v(i,t,o){i._hide();var e=new p({viewModel:t.viewModel,theme:t.theme,parentWidget:t.chartContainer,getPreviewValueFunction:l.buldPreviewValueFunction(t,{type:"dataDrilling"}),domNode:o,closeZoomedDDWhenClickedOutside:!0,closeZoomedDDOnEsc:!0,onClose:function(){e.play(!1,!0)}});e.play(!0,!0,null,t.dataDrillingPanelInfo.sectionJson)}var w=i(n,{tooltipClass:"esriGEChartContainer_chartTooltip_masterTooltip",_chartType:null,constructor:function(){var i=this,t=this.text;this.text=function(o,e){return function(t,o){var e=t.run&&t.run.data&&t.run.data[t.index];if(e.tooltip&&"object"==typeof e.tooltip)return i._renderTooltip(e.tooltip)}(o)||t(o,e)}},_needSetRectFromShape:function(){return c.isPictureLike(this._chartType)},setChartType:function(i){this._chartType=i},_renderTooltip:function(i){var o=!(i=t.mixin({},i,i.getContext())).viewModel.dynamicReportInfo,n=o&&!i.viewModel.isGraphicStyle,l=!f.isDataDrillingView(i.chartContainer);(i.viewModel.enableDataDrilling||o)&&l||delete i.dataDrillingPanelInfo;var a=e.create("div",{class:"esriGEChartContainer_chartTooltip"},document.body);if(!n)if(i.richTextFieldInfo||i.showTitle||i.showValue||i.showMin||i.showMax||i.showAvg||i.showWeight||i.showConditional||i.dataDrillingPanelInfo)this._buildTooltip(i,a,o,l);else{if(!o)return{node:null};e.create("div",{class:"chartTooltip_row esriGERowHigh",innerHTML:g.noTooltipAvailable},a)}return T.setInfo(i.dataDrillingPanelInfo&&i.dataDrillingPanelInfo.showOnClick&&!o?{tooltip:this,info:i,root:a}:null),document.body.removeChild(a),{node:a,style:i.tooltipStyle}},_buildTooltip:function(i,t,n,l){var p=this;if(this._chartType===c.PIE||this._chartType===c.DONUT||this._chartType===c.RING?h.buildPieDonutRingChartTooltip(i,t):this._chartType===c.GAUGE?r.buildGaugeChartTooltip(i,t):this._chartType===c.WAFFLE?s.buildWaffleChartTooltip(i,t):c.isColumnBarLike(this._chartType)?a.buildColumnChartTooltip(i,t):c.isLineLike(this._chartType)&&d.buildLineChartTooltip(i,t),i.conditionalStyling&&i.showConditional&&e.place(u.createLegendNode(i.conditionalStyling,"chart",i.isBenchmarked?i.unbenchmarkedValue:i.value),t),i.dataDrillingPanelInfo||n&&l){var f=e.create("div",{class:"chartTooltip_row esriGERowHigh esriGECenter",style:"margin-top:20px;"},t),T=n&&!i.dataDrillingPanelInfo;T||e.create("div",{class:"dijitInline esriGESpaceAfterMedium",innerHTML:o.substitute('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><path fill="${fill}" d="M30 28v1H3V4h1v24h2v-9h6v9h2V6h6v22h2V13h6v15h2z"/></svg>',{fill:i.tooltipLinkStyle.color})},f);var w=n?i.dataDrillingPanelInfo?g.drillForMoreDataEdit:g.addDataDrilling:g.drillForMoreData,C=e.create("div",{class:"dijitInline esriGELink",innerHTML:w},f);T||(C.style.color=i.tooltipLinkStyle.color),C.addEventListener("click",(function(){n?(p._hide(),i.chartContainer.onShowDataDrillingPreview(i)):v(p,i,t)}))}}});return w.tryShowDataDrillingForShownTooltip=function(){var i=T.lastShownInfo;i&&v(i.tooltip,i.info,i.root)},w}));