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

define(["../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer","esri/dijit/geoenrichment/utils/ObjectUtil","../../ChartTypes","esri/dijit/geoenrichment/ReportPlayer/countryConfig"],function(e,a,n,t){function i(e){return l||(e&&e.yAxis&&e.yAxis.nonZeroInclusive?s:f)}function r(e,a,n){return("p"===e||n.dataLabelsShowValuePercentSymbol||n.yAxis&&n.yAxis.showPercentSymbol||n.yAxis&&n.yAxis.showValuesAsWeightsInSeries)&&(a/=24.5123,a=Number(a.toFixed(n.dataLabelsDecimals||1))),"i"===e&&(a/=7,a=Number(a.toFixed(n.dataLabelsDecimals||1))),a}var o={};o.formatNumber=function(e,n,i,r){e=e||0;var o={places:n.dataLabelsDecimals||0,preserveTrailingZeroes:!0};if(r)return a.formatNumberAsCurrency(e,t.getCurrencyFormat(),o);var l=a.formatNumber(e,o);return i&&(l+="%"),l},o.undefinedToDefault=function(e,a){return void 0===e?a:e};var l,f=[1e3,1100,1200,150,70,900,110,300,80,200,1700],s=[1e3,1100,1250,1200,1050,990],u=[1,.7,1.2,.5,1.1,1.3,.3,2,.4],m=[.91,.92,.9,1.2,1.2,1.3];return o.CHART_DATA_SMOOTH=[1145,1134,1159,1275,1404,1408,1337,1149,1074,1040,1065,1078,964,798,531,360,254,258],o.getPointValue=function(t){var o,l=t.point,f=t.index,s=t.seriesIndex,d=t.chartType,c=t.visualProperties,g=t.viewModel,p=t.currentFeatureIndex,v=t.chartData,y=t.isComparisonSeries,I=t.comparisonFeatureAttribute,h=t.numPoints;if(l.value&&(l.value.value||g.dynamicReportInfo))return l.value.value;if(g.dynamicReportInfo)o=y?I&&I[l.fieldInfo.name]||0:e.getFieldDataValue(l.fieldInfo,g.dynamicReportInfo.fieldData,p),o=a.parseNumber(o),isNaN(o)&&console.log("Can't render chart value for field => "+(l.fieldInfo?l.fieldInfo.name:"missing field"));else{var b=l.fieldInfo&&l.fieldInfo.statefulName&&l.fieldInfo.statefulName.charAt(0);if(v=v||i(c),o=v[f%v.length],d===n.GAUGE&&"p"!==b&&c.gaugeRangeMax){var R=c.gaugeRangeMin||0;o=.425123*(c.gaugeRangeMax-R)+R}else if(d===n.WAFFLE){if("p"!==b&&("number"==typeof c.waffleRangeMin||"number"==typeof c.waffleRangeMax)){var x=c.waffleRangeMin,F=c.waffleRangeMax;"number"==typeof x&&"number"!=typeof F?F=0===x?1e3:x*((h>1?h:2)+1):"number"!=typeof x&&"number"==typeof F&&(x=0),o=.9085*(F-x)+x}h&&(o="p"===b?90.85/h:o/h)}else{var A=u[s%u.length],S=0===s?1:m[f%m.length];o*=A*S,c.conditionalStyling||(o=r(b,o,c))}}return o},o.getCaptionValue=function(a,n){return a.captionFieldInfo?n.dynamicReportInfo?e.getFieldDataValue(a.captionFieldInfo,n.dynamicReportInfo.fieldData):e.renderFieldInfoInTableCell(a.captionFieldInfo).formattedValue:""},o.allowNegativeValuesInPreview=function(e,a){return n.supportsNegativeValues(e)&&!a.isStacked&&!a.renderColumnBarsInOppositeDirections},o.getChartData=function(e){var a=e.chartData;a=(a||i(e.visualProperties)).slice(),a.length=Math.min(a.length,e.numPoints);var n=1/0,t=-1/0;if(a.forEach(function(e){n=Math.min(n,e),t=Math.max(t,e)}),e.conditionalStats){var r=1.1*e.conditionalStats.max/t;return a.map(function(e){return e*r})}if(e.filterRangesStats){var o=t-n,l=n;n=isFinite(e.filterRangesStats.min)?e.filterRangesStats.min:Math.min(0,n),t=isFinite(e.filterRangesStats.max)?e.filterRangesStats.max:t>=n?t:2*n;var f=.1*(t-n);n+=f,t-=f;var r=(t-n)/o;return a.map(function(e){return(e-l)*r+n})}return a},o.setPreviewChartData_dev=function(e){l=e},o});