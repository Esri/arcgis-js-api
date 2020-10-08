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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer","esri/dijit/geoenrichment/utils/ObjectUtil","../../ChartTypes","esri/dijit/geoenrichment/ReportPlayer/countryConfig"],(function(e,n,a,t){var i,r={};r.formatNumber=function(e,a,i,r){e=e||0;var o={places:a.dataLabelsDecimals||0,preserveTrailingZeroes:!0};if(r)return n.formatNumberAsCurrency(e,t.getCurrencyFormat(),o);var l=n.formatNumber(e,o);return i&&(l+="%"),l},r.undefinedToDefault=function(e,n){return void 0===e?n:e};var o=[1e3,1100,1200,150,70,900,110,300,80,200,1700],l=[1e3,1100,1250,1200,1050,990],f=[1,.7,1.2,.5,1.1,1.3,.3,2,.4],s=[.91,.92,.9,1.2,1.2,1.3];function u(e){return i||(e&&e.yAxis&&e.yAxis.nonZeroInclusive?l:o)}return r.CHART_DATA_SMOOTH=[1145,1134,1159,1275,1404,1408,1337,1149,1074,1040,1065,1078,964,798,531,360,254,258],r.getPointValue=function(t){var i,r=t.point,o=t.index,l=t.seriesIndex,d=t.chartType,c=t.visualProperties,m=t.viewModel,p=t.currentFeatureIndex,g=t.chartData,v=t.isComparisonSeries,y=t.comparisonFeatureAttribute,I=t.numPoints;if(r.value&&(r.value.value||m.dynamicReportInfo))return r.value.value;if(m.dynamicReportInfo)i=v?y&&y[r.fieldInfo.name]||0:e.getFieldDataValue(r.fieldInfo,{fieldData:m.dynamicReportInfo.fieldData,featureIndex:p}),i=n.parseNumber(i),isNaN(i)&&console.log("Can't render chart value for field => "+(r.fieldInfo?r.fieldInfo.name:"missing field"));else{var h=r.fieldInfo&&r.fieldInfo.statefulName&&r.fieldInfo.statefulName.charAt(0);if(i=(g=g||u(c))[o%g.length],d===a.GAUGE&&"p"!==h&&c.gaugeRangeMax){var b=c.gaugeRangeMin||0;i=.425123*(c.gaugeRangeMax-b)+b}else if(d===a.WAFFLE)if("p"===h||"number"!=typeof c.waffleRangeMin&&"number"!=typeof c.waffleRangeMax)I&&(i="p"===h?90.85/I:i/I);else{var x=c.waffleRangeMin,R=c.waffleRangeMax;"number"==typeof x&&"number"!=typeof R?R=0===x?1e3:x*((I>1?I:2)+1):"number"!=typeof x&&"number"==typeof R&&(x=0),i=.9085*(R-x)/(I||1)+x}else{i*=f[l%f.length]*(0===l?1:s[o%s.length]),c.conditionalStyling||(i=function(e,n,a){("p"===e||a.dataLabelsShowValuePercentSymbol||a.yAxis&&a.yAxis.showPercentSymbol||a.yAxis&&a.yAxis.showValuesAsWeightsInSeries)&&(n/=24.5123,n=Number(n.toFixed(a.dataLabelsDecimals||1)));"i"===e&&(n/=7,n=Number(n.toFixed(a.dataLabelsDecimals||1)));return n}(h,i,c))}}return i},r.getCaptionValue=function(n,a){return n.captionFieldInfo?a.dynamicReportInfo?e.getFieldDataValue(n.captionFieldInfo,{fieldData:a.dynamicReportInfo.fieldData}):e.renderFieldInfoInTableCell(n.captionFieldInfo).formattedValue:""},r.allowNegativeValuesInPreview=function(e,n){return a.supportsNegativeValues(e)&&!n.isStacked&&!n.renderColumnBarsInOppositeDirections},r.getChartData=function(e){var n,a,t=e.chartData;function i(){n=1/0,a=-1/0,t.forEach((function(e){n=Math.min(n,e),a=Math.max(a,e)}))}function r(e,i,r){var o=a-n,l=n;if(n=isFinite(e)?e:Math.min(0,n),a=isFinite(i)?i:a>=n?a:2*n,r){var f=.1*(a-n);n+=f,a-=f}var s=(a-n)/o;t=t.map((function(e){return(e-l)*s+n}))}if((t=(t||u(e.visualProperties)).slice()).length=Math.min(t.length,e.numPoints),e.filterRangesStats)return i(),r(e.filterRangesStats.min,e.filterRangesStats.max,!0),t;if(e.conditionalStats){i();var o=e.conditionalStats.min,l=e.conditionalStats.max;0===o?o=-10:o*=o<0?1.2:.8,0===l?l=10:l*=l<0?.8:1.2,r(o,l,!1)}return t},r.setPreviewChartData_dev=function(e){i=e},r}));