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

define(["../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer","esri/dijit/geoenrichment/utils/ObjectUtil","../../ChartTypes"],function(e,n,a){function t(e,n,a){return"p"===e&&(n/=25,n=Number(n.toFixed(1))),"i"===e&&(n/=7,n=Number(n.toFixed(1))),n}var i={};i.formatNumber=function(e,a,t,i){var r=n.formatNumber(e||0,{places:a.dataLabelsDecimals||0,preserveTrailingZeroes:!0});return t&&(r+="%"),r},i.undefinedToDefault=function(e,n){return void 0===e?n:e};var r=[1e3,1100,1200,150,70,900,110,300,80,200,1700],l=[1e3,-300,700,-150,70,100,-200,900,110,300,80,200,1700],o=[1,.7,1.2,.5,1.1,1.3,.3,2,.4],f=[.91,.92,.9,1.2,1.2,1.3];i.CHART_DATA_SMOOTH=[1145,1134,1159,1275,1404,1408,1337,1149,1074,1040,1065,1078,964,798,531,360,254,258],i.getPreviewValue=function(i,u,d,s,c,g,m,p,v,I,h,N,D){var F;if(i.value&&(i.value.value||m.dynamicReportInfo))return i.value.value;if(m.dynamicReportInfo)F=I?N.getFieldValueAt(i.fieldInfo.name,h):e.getFieldDataValue(i.fieldInfo,m.dynamicReportInfo.fieldData,p),F=n.parseNumber(F),isNaN(F)&&console.log("Can't render chart value for field => "+(i.fieldInfo?i.fieldInfo.name:"missing field"));else{var R=i.fieldInfo&&i.fieldInfo.statefulName&&i.fieldInfo.statefulName.charAt(0);if(c===a.GAUGE&&"p"!==R&&g.gaugeRangeMax){var C=g.gaugeRangeMin||0;F=.4*(g.gaugeRangeMax-C)+C}else{v=v||(D?l:r),F=v[u%v.length];F*=o[d%o.length]*(0===d?1:f[u%f.length]),g.conditionalStyling||(F=t(R,F,s))}}return F},i.getCaptionValue=function(n,a){return n.captionFieldInfo?a.dynamicReportInfo?e.getFieldDataValue(n.captionFieldInfo,a.dynamicReportInfo.fieldData):e.renderFieldInfoInTableCell(n.captionFieldInfo).formattedValue:""},i.allowNegativeValuesInPreview=function(e,n){return a.supportsNegativeValues(e)&&!n.isStacked&&!n.renderColumnBarsInOppositeDirections},i.getChartData=function(e,n,a,t){a=(a||(t?l:r)).slice(),a.length=Math.min(a.length,n);var i=-1/0;a.forEach(function(e){i=Math.max(i,e)});var o=1.1*e.max/i;return a=a.map(function(e){return e*o})};var u=r;return i.setPreviewChartData=function(e){r=e||u},i});