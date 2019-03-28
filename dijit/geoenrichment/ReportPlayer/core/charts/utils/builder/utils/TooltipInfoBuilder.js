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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["./ChartDataUtil","esri/dijit/geoenrichment/ReportPlayer/countryConfig","../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder"],function(e,a,i){var l={};return l.getTooltipInfo=function(l){function s(s,u,r){var t=e.formatNumber(s||0,void 0!==u?{dataLabelsDecimals:u}:void 0!==l.decimals?{dataLabelsDecimals:l.decimals}:l.visualProperties);return r?(l.visualProperties.dataLabelsShowValuePercentSymbol||l.fieldInfo&&i.isFieldInfoInPercentState(l.fieldInfo)?t+="%":l.visualProperties.dataLabelsShowValueCurrencySymbol&&(t=a.getCurrencySymbol()+t),t):t}var u=l.isMultiFeature?l.absSumInAreasValue:l.absSumInSeriesValue;return{isMultiFeature:l.isMultiFeature,value:l.yValue,label:l.pointLabel,color:l.color,seriesLabel:l.seriesLabel,valueLabel:s(l.yValue,void 0,!0),sumValueLabel:s(l.isMultiFeature?l.sumInAreasValue:l.sumInSeriesValue,void 0,!0),minValueLabel:s(l.isMultiFeature?l.minInAreasValue:l.minInSeriesValue,void 0,!0),maxValueLabel:s(l.isMultiFeature?l.maxInAreasValue:l.maxInSeriesValue,void 0,!0),avgValueLabel:s(l.isMultiFeature?l.avgInAreasValue:l.avgInSeriesValue,void 0,!0),weightValueLabel:u?s(Math.abs(l.yValue)/u*100,2)+"%":"",formatFunc:function(e){return s(e,void 0,!0)},isUnavailableData:isNaN(l.yValue),conditionalStyling:l.conditionalStyling,fieldInfo:l.fieldInfo,isThisAreaSpecific:l.isThisAreaSpecific,isThisAreaSingleSeries:l.isThisAreaSingleSeries,hasNegativeValues:l.hasNegativeValues,getGroup:null}},l});