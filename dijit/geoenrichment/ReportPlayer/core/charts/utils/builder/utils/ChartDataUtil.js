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

define(["../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer","esri/dijit/geoenrichment/utils/ObjectUtil","../../ChartTypes"],function(e,a,n){function t(e,a,n){return"p"===e&&(a/=24.5123,a=Number(a.toFixed(n||1))),"i"===e&&(a/=7,a=Number(a.toFixed(n||1))),a}var i={};i.formatNumber=function(e,n,t){var i=a.formatNumber(e||0,{places:n.dataLabelsDecimals||0,preserveTrailingZeroes:!0});return t&&(i+="%"),i},i.undefinedToDefault=function(e,a){return void 0===e?a:e};var r=[1e3,1100,1200,150,70,900,110,300,80,200,1700],l=[1e3,-300,700,-150,70,100,-200,900,110,300,80,200,1700],o=[1,.7,1.2,.5,1.1,1.3,.3,2,.4],f=[.91,.92,.9,1.2,1.2,1.3];i.CHART_DATA_SMOOTH=[1145,1134,1159,1275,1404,1408,1337,1149,1074,1040,1065,1078,964,798,531,360,254,258],i.getPointValue=function(i){var u,s=i.point,d=i.index,c=i.seriesIndex,g=i.chartType,m=i.visualProperties,p=i.viewModel,v=i.currentFeatureIndex,I=i.chartData,h=i.isComparisonSeries,F=i.comparisonFeatureAttribute,R=i.allowNegativeValuesInPreview,D=i.numPoints;if(s.value&&(s.value.value||p.dynamicReportInfo))return s.value.value;if(p.dynamicReportInfo)u=h?F&&F[s.fieldInfo.name]||0:e.getFieldDataValue(s.fieldInfo,p.dynamicReportInfo.fieldData,v),u=a.parseNumber(u),isNaN(u)&&console.log("Can't render chart value for field => "+(s.fieldInfo?s.fieldInfo.name:"missing field"));else{var N=s.fieldInfo&&s.fieldInfo.statefulName&&s.fieldInfo.statefulName.charAt(0);if(g===n.GAUGE&&"p"!==N&&m.gaugeRangeMax){var x=m.gaugeRangeMin||0;u=.425123*(m.gaugeRangeMax-x)+x}else if(g===n.WAFFLE&&"p"!==N&&m.waffleRangeMax){var b=m.waffleRangeMin||0;u=.9085*(m.waffleRangeMax-b)+b}else{I=I||(R?l:r),u=I[d%I.length];var C=o[c%o.length],M=0===c?1:f[d%f.length];u*=C*M,m.conditionalStyling||(u=t(N,u,m.dataLabelsDecimals))}g===n.WAFFLE&&D&&(u="p"===N?90.85/D:u/D)}return u},i.getCaptionValue=function(a,n){return a.captionFieldInfo?n.dynamicReportInfo?e.getFieldDataValue(a.captionFieldInfo,n.dynamicReportInfo.fieldData):e.renderFieldInfoInTableCell(a.captionFieldInfo).formattedValue:""},i.allowNegativeValuesInPreview=function(e,a){return n.supportsNegativeValues(e)&&!a.isStacked&&!a.renderColumnBarsInOppositeDirections},i.getChartData=function(e,a,n,t){n=(n||(t?l:r)).slice(),n.length=Math.min(n.length,a);var i=-1/0;n.forEach(function(e){i=Math.max(i,e)});var o=1.1*e.max/i;return n=n.map(function(e){return e*o})};var u=r;return i.setPreviewChartData=function(e){r=e||u},i});