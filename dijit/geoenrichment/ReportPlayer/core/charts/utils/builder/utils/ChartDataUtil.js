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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer","esri/dijit/geoenrichment/utils/ObjectUtil","../../ChartTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/conditionalStyling/ConditionalStyleUtil","esri/dijit/geoenrichment/ReportPlayer/countryConfig"],(function(e,n,t,a,i){var r,o={};o.formatNumber=function(e,t,a,r){e=e||0;var o={places:t.dataLabelsDecimals||0,preserveTrailingZeroes:!0};if(r)return n.formatNumberAsCurrency(e,i.getCurrencyFormat(),o);var l=n.formatNumber(e,o);return a&&(l+="%"),l},o.undefinedToDefault=function(e,n){return void 0===e?n:e};var l=[1e3,1100,1200,150,70,900,110,300,80,200,1700],s=[1e3,1100,1250,1200,1050,990,1010,1110,1260,1210,1060,995],f=[1,.7,1.2,.5,1.1,1.3,.3,2,.4],u=[.91,.92,.9,1.2,1.2,1.3];function c(e){return r||(e&&e.yAxis&&e.yAxis.nonZeroInclusive?s:l)}return o.CHART_DATA_SMOOTH=[1145,1134,1159,1275,1404,1408,1337,1149,1074,1040,1065,1078,964,798,531,360,254,258],o.getPointValue=function(a){var i,r=a.point,o=a.index,l=a.seriesIndex,s=a.chartType,d=a.visualProperties,m=a.viewModel,p=a.currentFeatureIndex,g=a.chartData,v=a.isComparisonSeries,y=a.comparisonFeatureAttribute,h=a.numPoints;if(r.value&&(r.value.value||m.dynamicReportInfo))return r.value.value;if(m.dynamicReportInfo)i=v?y&&y[r.fieldInfo.name]||0:e.getFieldDataValue(r.fieldInfo,{fieldData:m.dynamicReportInfo.fieldData,featureIndex:p}),i=n.parseNumber(i),isNaN(i)&&console.log("Can't render chart value for field => "+(r.fieldInfo?r.fieldInfo.name:"missing field"));else{var I=r.fieldInfo&&r.fieldInfo.statefulName&&r.fieldInfo.statefulName.charAt(0);if(i=(g=g||c(d))[o%g.length],s===t.GAUGE&&"p"!==I&&d.gaugeRangeMax){var b=d.gaugeRangeMin||0;i=.425123*(d.gaugeRangeMax-b)+b}else if(s===t.WAFFLE)if("p"===I||"number"!=typeof d.waffleRangeMin&&"number"!=typeof d.waffleRangeMax)h&&(i="p"===I?90.85/h:i/h);else{var S=d.waffleRangeMin,F=d.waffleRangeMax;"number"==typeof S&&"number"!=typeof F?F=0===S?1e3:S*((h>1?h:2)+1):"number"!=typeof S&&"number"==typeof F&&(S=0),i=.9085*(F-S)/(h||1)+S}else{i*=f[l%f.length]*(0===l?1:u[o%u.length]),d.conditionalStyling||(i=function(e,n,t){("p"===e||t.dataLabelsShowValuePercentSymbol||t.yAxis&&t.yAxis.showPercentSymbol||t.yAxis&&t.yAxis.showValuesAsWeightsInSeries)&&(n/=24.5123,n=Number(n.toFixed(t.dataLabelsDecimals||1)));"i"===e&&(n/=7,n=Number(n.toFixed(t.dataLabelsDecimals||1)));return n}(I,i,d))}}return i},o.getCaptionValue=function(n,t){return n.captionFieldInfo?t.dynamicReportInfo?e.getFieldDataValue(n.captionFieldInfo,{fieldData:t.dynamicReportInfo.fieldData}):e.renderFieldInfoInTableCell(n.captionFieldInfo).formattedValue:""},o.allowNegativeValuesInPreview=function(e,n){return t.supportsNegativeValues(e)&&!n.isStacked&&!n.renderColumnBarsInOppositeDirections},o.getChartData=function(e){var n,t,a=e.chartData;function i(){n=1/0,t=-1/0,a.forEach((function(e){n=Math.min(n,e),t=Math.max(t,e)}))}function r(e,i,r){var o=t-n,l=n;if(n=isFinite(e)?e:Math.min(0,n),t=isFinite(i)?i:t>=n?t:2*n,r){var s=.1*(t-n);n+=s,t-=s}var f=(t-n)/o;a=a.map((function(e){return(e-l)*f+n}))}if((a=(a||c(e.visualProperties)).slice()).length=Math.min(a.length,e.numPoints),e.filterRangesStats)return i(),r(e.filterRangesStats.min,e.filterRangesStats.max,!0),a;if(e.conditionalStats){i();var o=e.conditionalStats.min,l=e.conditionalStats.max;e.conditionalStats.canFallBelowMin&&(0===o?o=-10:o*=o<0?1.2:.8),e.conditionalStats.canFallAboveMax&&(0===l?l=10:l*=l<0?.8:1.2),r(o,l,!1)}return a},o.setPreviewChartData_dev=function(e){r=e},o.getConditionalStylesForStatsPointValues=function(e,n){var t=e.map((function(e){return"object"==typeof e?e.isBenchmarked?e.ownValue:e.value:e}));return a.getConditionalStylesOrFileNamesForGroup(n.conditionalStyling,t)},o}));