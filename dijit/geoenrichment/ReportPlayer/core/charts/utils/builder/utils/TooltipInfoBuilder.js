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

define(["./ChartDataUtil","../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder"],(function(e,a){var i={getTooltipInfo:function(i){var l=i.visualProperties;function s(s,n,u){var t=l.dataLabelsShowValuePercentSymbol||l.yAxis&&l.yAxis.showPercentSymbol&&!l.yAxis.showValuesAsWeightsInSeries&&!l.showValuesAsWeightInStack||i.fieldInfo&&a.isFieldInfoInPercentState(i.fieldInfo),r=l.dataLabelsShowValueCurrencySymbol,o=void 0!==n?{dataLabelsDecimals:n}:void 0!==i.decimals?{dataLabelsDecimals:i.decimals}:l;return e.formatNumber(s,o,u&&t,u&&r)}var n=i.isMultiFeature?i.absSumInAreasValue:i.absSumInSeriesValue;return{isMultiFeature:i.isMultiFeature,value:i.yValue,label:i.pointLabel,seriesLabel:i.seriesLabel,valueLabel:s(i.yValue,void 0,!0),isSinglePointInSeries:i.isSinglePointInSeries,sumValueLabel:s(i.isMultiFeature?i.sumInAreasValue:i.sumInSeriesValue,void 0,!0),minValueLabel:s(i.isMultiFeature?i.minInAreasValue:i.minInSeriesValue,void 0,!0),maxValueLabel:s(i.isMultiFeature?i.maxInAreasValue:i.maxInSeriesValue,void 0,!0),avgValueLabel:s(i.isMultiFeature?i.avgInAreasValue:i.avgInSeriesValue,void 0,!0),weightInStackLabel:i.weightInStack?s(100*i.weightInStack,2)+"%":"",weightValueLabel:n?s(Math.abs(i.yValue)/n*100,2)+"%":"",formatFunc:function(e){return s(e,void 0,!0)},isUnavailableData:isNaN(i.yValue),conditionalStyling:i.conditionalStyling,fieldInfo:i.fieldInfo,isThisAreaSpecific:i.isThisAreaSpecific,isThisAreaSingleSeries:i.isThisAreaSingleSeries,hasNegativeValues:i.hasNegativeValues,getGroup:null,fill:i.fill,stroke:i.stroke,marker:i.marker,isBenchmarked:i.isBenchmarked,unbenchmarkedValue:i.unbenchmarkedValue,unbenchmarkedValueLabel:s(i.unbenchmarkedValue,void 0,!0)}}};return i}));