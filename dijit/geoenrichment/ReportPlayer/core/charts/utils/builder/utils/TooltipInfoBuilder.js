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

define(["./ChartDataUtil"],function(e){var a={};return a.getTooltipInfo=function(a){function i(i,l){return e.formatNumber(i||0,void 0!==l?{dataLabelsDecimals:l}:void 0!==a.decimals?{dataLabelsDecimals:a.decimals}:a.fieldInfo&&void 0!==a.fieldInfo.decimals?{dataLabelsDecimals:a.fieldInfo.decimals}:a.visualProperties,void 0,a.chartType)}var l=a.isMultiFeature?a.absSumInAreasValue:a.absSumInSeriesValue;return{isMultiFeature:a.isMultiFeature,value:a.yValue,label:a.pointLabel,color:a.color,seriesLabel:a.seriesLabel,valueLabel:i(a.yValue),sumValueLabel:i(a.isMultiFeature?a.sumInAreasValue:a.sumInSeriesValue),minValueLabel:i(a.isMultiFeature?a.minInAreasValue:a.minInSeriesValue),maxValueLabel:i(a.isMultiFeature?a.maxInAreasValue:a.maxInSeriesValue),avgValueLabel:i(a.isMultiFeature?a.avgInAreasValue:a.avgInSeriesValue),weightValueLabel:l?i(Math.abs(a.yValue)/l*100,2)+"%":"",formatFunc:i,isUnavailableData:isNaN(a.yValue),conditionalStyling:a.conditionalStyling,fieldInfo:a.fieldInfo,isThisAreaSpecific:a.isThisAreaSpecific,isThisAreaSingleSeries:a.isThisAreaSingleSeries,getGroup:null}},a});