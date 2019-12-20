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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["./ChartDataUtil","../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder"],function(e,a){var i={};return i.getTooltipInfo=function(i){function l(l,n,u){var t=s.dataLabelsShowValuePercentSymbol||s.yAxis&&s.yAxis.showPercentSymbol&&!s.yAxis.showValuesAsWeightsInSeries&&!s.showValuesAsWeightInStack||i.fieldInfo&&a.isFieldInfoInPercentState(i.fieldInfo),r=s.dataLabelsShowValueCurrencySymbol,o=void 0!==n?{dataLabelsDecimals:n}:void 0!==i.decimals?{dataLabelsDecimals:i.decimals}:s;return e.formatNumber(l,o,u&&t,u&&r)}var s=i.visualProperties,n=i.isMultiFeature?i.absSumInAreasValue:i.absSumInSeriesValue;return{isMultiFeature:i.isMultiFeature,value:i.yValue,label:i.pointLabel,seriesLabel:i.seriesLabel,valueLabel:l(i.yValue,void 0,!0),isSinglePointInSeries:i.isSinglePointInSeries,sumValueLabel:l(i.isMultiFeature?i.sumInAreasValue:i.sumInSeriesValue,void 0,!0),minValueLabel:l(i.isMultiFeature?i.minInAreasValue:i.minInSeriesValue,void 0,!0),maxValueLabel:l(i.isMultiFeature?i.maxInAreasValue:i.maxInSeriesValue,void 0,!0),avgValueLabel:l(i.isMultiFeature?i.avgInAreasValue:i.avgInSeriesValue,void 0,!0),weightInStackLabel:i.weightInStack?l(100*i.weightInStack,2)+"%":"",weightValueLabel:n?l(Math.abs(i.yValue)/n*100,2)+"%":"",formatFunc:function(e){return l(e,void 0,!0)},isUnavailableData:isNaN(i.yValue),conditionalStyling:i.conditionalStyling,fieldInfo:i.fieldInfo,isThisAreaSpecific:i.isThisAreaSpecific,isThisAreaSingleSeries:i.isThisAreaSingleSeries,hasNegativeValues:i.hasNegativeValues,getGroup:null,fill:i.fill,stroke:i.stroke,marker:i.marker,isBenchmarked:i.isBenchmarked,unbenchmarkedValue:i.unbenchmarkedValue,unbenchmarkedValueLabel:l(i.unbenchmarkedValue,void 0,!0)}},i});