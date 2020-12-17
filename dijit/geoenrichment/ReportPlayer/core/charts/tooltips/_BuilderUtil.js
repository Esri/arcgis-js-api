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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/string","dojo/dom-class","dojo/dom-construct","dojo/dom-style","../legends/ChartLegendSymbols","../legends/LegendSymbolRenderer","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer","../../../dataProvider/supportClasses/data/AreaDataUtil","dojo/i18n!esri/nls/jsapi"],(function(e,a,t,i,r,l,n,o,s){var d=s.geoenrichment.dijit.ReportPlayer.ChartContainer;return s=s.geoenrichment.dijit.ReportPlayer.ChartTooltip,{addTitle:function(e,a,i){var r=t.create("div",{class:"chartTooltip_title esriGERowHigh"},e);i&&this.addColor(i,r),this.addLabel(a,r)},addColor:function(e,i){e=e||{};var n=l.renderSymbol({defaultSymbol:r.CIRCLE,fill:e.fill,stroke:e.stroke,marker:e.marker,width:8,height:10});a.add(n,"esriGESpaceAfterBig"),t.place(n,i)},addRowOffset:function(e){this.addColor(null,e)},addLabel:function(e,a){return t.create("div",{class:"chartTooltip_label dijitInline esriGESpaceAfterBig",innerHTML:e},a)},addValue:function(e,a){return t.create("div",{class:"chartTooltip_value dijitInline esriGESpaceAfterBig",innerHTML:e},a)},buildStatLabels:function(e,a,i,r,l,n,o){var s=this,d=[];function u(i,r){if(e[i]&&r){var l=t.create("div",{class:"chartTooltip_row esriGERowHigh"},a);s.addColor(null,l),d.push(s.addLabel(r,l)),s.addValue(e[i],l)}}return e.showWeight&&u("weightValueLabel",i),e.showMin&&u("minValueLabel",r),e.showMax&&u("maxValueLabel",l),e.showAvg&&u("avgValueLabel",n),e.showWeight&&u("weightInStackLabel",o),d},formatTable:function(e){var a=0;e.forEach((function(e){a=Math.max(a,i.get(e,"width"))})),e.forEach((function(e){i.set(e,"width",a+"px")}))},buildSeriesLabel:function(a){return!0===a.isThisAreaSpecific?a.seriesLabel&&!a.isThisAreaSingleSeries?e.substitute(s.thisAreaSeries,{seriesName:a.seriesLabel}):d.thisArea:a.seriesLabel},addBenchmarkValue:function(e,a){return this.addValue(e.unbenchmarkedValueLabel+" ("+(e.value>0?"+":"")+e.valueLabel+")",a)},buildRichText:function(e,a){var i=n.renderFieldInfoInTableCell(e.richTextFieldInfo,{previewValues:!0,fieldData:e.fieldData,isGraphicReport:!0,getPreviewValueFunction:this.buldPreviewValueFunction(e,{type:"tooltip"})});t.create("div",{class:"chartTooltip_row esriGERow20",innerHTML:i.formattedValue},a)},buldPreviewValueFunction:function(e,a){return function(t){if(!t||!t.fieldInfo)return null;switch(t.fieldInfo.name){case"headers.CHART_POINT_VALUE":return{value:e.isBenchmarked?e.unbenchmarkedValue:e.value};case"headers.CHART_POINT_NAME":return{formattedValue:e.pointName};case"headers.CHART_SERIES_NAME":return{formattedValue:e.seriesName};case"headers.CHART_AREA_NAME":return{formattedValue:e.areaName||d.thisArea}}if(!e.fieldData)return null;var i=t.fieldInfo;if(i.expressionText&&-1!==i.expressionText.indexOf("!headers.CHART_POINT_VALUE!")){var r;switch(a.type){case"tooltip":r=e.tooltipTemplateValues;break;case"dataDrilling":r=e.dataDrillingPanelInfo.templateValues}var l=r&&r[i.templateName]&&r[i.templateName][e.fieldInfo&&e.fieldInfo.templateName];l&&(i=l)}var n=o.getAreaDataValue({featureAttributes:e.isComparisonPoint?e.comparisonFeatureAttribute:null,fieldData:e.fieldData,featureIndex:e.featureIndex,fieldName:i.templateName||i.name});return"number"==typeof n?{value:n||0}:{formattedValue:n}}}}}));