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

define(["./ChartDataUtil","../../ChartDataLabelsTypes","esri/dijit/geoenrichment/ReportPlayer/countryConfig","../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder"],function(e,a,t,r){var l={};return l.formatDataLabel=function(l,n){var s=l.originalValue,u=l.name,i=l.valuesSumsInSeries,o=l.fieldInfo,b=a.hasLabel(n.dataLabels),d=a.hasValue(n.dataLabels),f=a.hasPercent(n.dataLabels),h=[];return(b||d||f)&&(b&&!n.dataLabelsShowLabelUnder&&h.push({isLabel:!0,text:u}),d?h.push({isValue:!0,text:function(){var a=e.formatNumber(s,n);return n.dataLabelsShowValuePercentSymbol||o&&r.isFieldInfoInPercentState(o)?a+="%":n.dataLabelsShowValueCurrencySymbol&&(a=t.getCurrencySymbol()+a),a}()}):f&&h.push({isPercent:!0,text:function(){return i?e.formatNumber(s/i*100,n,!0):""}()}),b&&n.dataLabelsShowLabelUnder&&h.push({isLabel:!0,text:u})),h},l});