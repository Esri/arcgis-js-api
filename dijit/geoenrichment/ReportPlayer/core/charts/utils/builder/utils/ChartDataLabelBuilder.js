// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/ObjectUtil","./ChartDataUtil","../../ChartDataLabelsTypes","esri/dijit/geoenrichment/ReportPlayer/countryConfig","../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder"],(function(e,a,r,t,n){var s={formatDataLabel:function(s,l){var i=s.originalValue,u=s.name,o=s.fieldInfo,b=r.hasLabel(l.dataLabels),d=r.hasValue(l.dataLabels),m=r.hasPercent(l.dataLabels),c=[];function f(r){if(l.dataLabelsShowValueCurrencySymbol)return e.formatNumberAsCurrency(r,t.getCurrencyFormat(),{places:l.dataLabelsDecimals||0,preserveTrailingZeroes:!0});var s=a.formatNumber(r,l);return(l.dataLabelsShowValuePercentSymbol||o&&n.isFieldInfoInPercentState(o))&&(s+="%"),s}function h(e,r){return a.formatNumber(r?e/r*100:0,l,!0)}if(b||d||m){if(b&&!l.dataLabelsShowLabelUnder&&c.push({isLabel:!0,text:u}),d){var L="";L=s.isBenchmarked?f(s.unbenchmarkedValue)+" ("+(i>0?"+":"")+f(i)+")":f(i),c.push({isValue:!0,text:L})}else if(m){L="";L=s.isBenchmarked?h(s.unbenchmarkedValue,s.unbenchmarkedValuesSumsInSeries)+" ("+(i>0?"+":"")+h(i,s.valuesSumsInSeries)+")":h(i,s.valuesSumsInSeries),c.push({isPercent:!0,text:L})}b&&l.dataLabelsShowLabelUnder&&c.push({isLabel:!0,text:u})}return c}};return s}));