// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/ObjectUtil","./ChartDataUtil","../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder"],(function(e,i,a,t){var l={},n=0;return l.getTooltipInfo=function(l){var o=l.visualProperties;function s(e,i,n){var s=o.dataLabelsShowValuePercentSymbol||o.yAxis&&o.yAxis.showPercentSymbol&&!o.yAxis.showValuesAsWeightsInSeries&&!o.showValuesAsWeightInStack||l.fieldInfo&&t.isFieldInfoInPercentState(l.fieldInfo),r=o.dataLabelsShowValueCurrencySymbol,u=void 0!==i?{dataLabelsDecimals:i}:void 0!==l.decimals?{dataLabelsDecimals:l.decimals}:o;return a.formatNumber(e,u,n&&s,n&&r)}var r=l.isMultiFeature?l.absSumInAreasValue:l.absSumInSeriesValue,u=o.tooltip||{},d=i.copyOwnJsonProperties(u.style,e.mixin({},l.themeSettings.tooltip)),m=i.copyOwnJsonProperties(u.linkStyle,e.mixin({},l.themeSettings.tooltipLink)),c={id:"tooltipId."+n++,getContext:function(){return{fieldData:l.viewModel.dynamicReportInfo&&l.viewModel.dynamicReportInfo.fieldData,conditionalStyling:l.conditionalStyling,conditionalStats:l.conditionalStats,fieldInfo:l.fieldInfo,comparisonFeatureAttribute:l.comparisonFeatureAttribute,richTextFieldInfo:u.fieldInfo,tooltipTemplateValues:u.templateValues,chartContainer:l.chartContainer,viewModel:l.viewModel,theme:l.theme,dataDrillingPanelInfo:l.dataDrillingPanelInfo}},isMultiFeature:l.isMultiFeature,value:l.yValue,label:l.pointLabel,seriesLabel:l.seriesLabel,valueLabel:s(l.yValue,void 0,!0),isSinglePointInSeries:l.isSinglePointInSeries,sumValueLabel:s(l.isMultiFeature?l.sumInAreasValue:l.sumInSeriesValue,void 0,!0),minValueLabel:s(l.isMultiFeature?l.minInAreasValue:l.minInSeriesValue,void 0,!0),maxValueLabel:s(l.isMultiFeature?l.maxInAreasValue:l.maxInSeriesValue,void 0,!0),avgValueLabel:s(l.isMultiFeature?l.avgInAreasValue:l.avgInSeriesValue,void 0,!0),weightValueLabel:r?s(Math.abs(l.yValue)/r*100,2)+"%":"",weightInStackLabel:l.weightInStack?s(100*l.weightInStack,2)+"%":"",formatFunc:function(e){return s(e,void 0,!0)},isUnavailableData:isNaN(l.yValue),isThisAreaSpecific:l.isThisAreaSpecific,isThisAreaSingleSeries:l.isThisAreaSingleSeries,hasNegativeValues:l.hasNegativeValues,getGroup:null,fill:l.fill,stroke:l.stroke,marker:l.marker,isBenchmarked:l.isBenchmarked,unbenchmarkedValue:l.unbenchmarkedValue,unbenchmarkedValueLabel:s(l.unbenchmarkedValue,void 0,!0),showTitle:u.title,showValue:u.value,showMin:u.min,showMax:u.max,showAvg:u.avg,showWeight:u.weight,showConditional:u.conditional,tooltipStyle:d,tooltipLinkStyle:m,pointName:l.pointName,seriesName:l.seriesName,areaName:l.areaName,featureIndex:l.featureIndex,isComparisonPoint:l.isComparisonPoint};return!l.viewModel.dynamicReportInfo&&l.dataDrillingPanelInfo&&l.chartContainer.onTooltipInfoCreated(c),c},l}));