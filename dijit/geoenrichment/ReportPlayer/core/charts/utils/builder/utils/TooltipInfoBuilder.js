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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["./ChartDataUtil","../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder"],function(e,a){var i={};return i.getTooltipInfo=function(i){function l(l,t,u){var r=s.dataLabelsShowValuePercentSymbol||s.yAxis&&s.yAxis.showPercentSymbol&&!s.yAxis.showValuesAsWeightsInSeries||i.fieldInfo&&a.isFieldInfoInPercentState(i.fieldInfo),n=s.dataLabelsShowValueCurrencySymbol,o=void 0!==t?{dataLabelsDecimals:t}:void 0!==i.decimals?{dataLabelsDecimals:i.decimals}:s;return e.formatNumber(l,o,u&&r,u&&n)}var s=i.visualProperties,t=i.isMultiFeature?i.absSumInAreasValue:i.absSumInSeriesValue;return{isMultiFeature:i.isMultiFeature,value:i.yValue,label:i.pointLabel,seriesLabel:i.seriesLabel,valueLabel:l(i.yValue,void 0,!0),sumValueLabel:l(i.isMultiFeature?i.sumInAreasValue:i.sumInSeriesValue,void 0,!0),minValueLabel:l(i.isMultiFeature?i.minInAreasValue:i.minInSeriesValue,void 0,!0),maxValueLabel:l(i.isMultiFeature?i.maxInAreasValue:i.maxInSeriesValue,void 0,!0),avgValueLabel:l(i.isMultiFeature?i.avgInAreasValue:i.avgInSeriesValue,void 0,!0),weightInStackLabel:i.weightInStack?l(100*i.weightInStack,2)+"%":"",weightValueLabel:t?l(Math.abs(i.yValue)/t*100,2)+"%":"",formatFunc:function(e){return l(e,void 0,!0)},isUnavailableData:isNaN(i.yValue),conditionalStyling:i.conditionalStyling,fieldInfo:i.fieldInfo,isThisAreaSpecific:i.isThisAreaSpecific,isThisAreaSingleSeries:i.isThisAreaSingleSeries,hasNegativeValues:i.hasNegativeValues,getGroup:null,fill:i.fill,stroke:i.stroke,marker:i.marker}},i});