// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer","esri/dijit/geoenrichment/utils/ObjectUtil","../ChartTypes"],function(e,n,t){function a(e,n,t){var a=e.fieldInfo&&e.fieldInfo.statefulName&&e.fieldInfo.statefulName.charAt(0);return"p"===a&&(n/=25,n=Number(n.toFixed(1))),"i"===a&&(n/=15,n=Number(n.toFixed(1))),n}var i={};i.formatNumber=function(e,t,a,i){var r=n.formatNumber(e||0,{places:t.dataLabelsDecimals||0,preserveTrailingZeroes:!0});return a&&(r+="%"),r},i.undefinedToDefault=function(e,n){return void 0===e?n:e};var r=[1e3,1200,500,150,70,900,110,300,80,200,1700],o=[1,.7,1.2,.5,1.1,1.3,.3,2,.4];return i.getPreviewValue=function(t,i,f,l,d,u,c,m,s,I){var p;return d.dynamicReportInfo?(p=m?I.getFieldValueAt(t.fieldInfo.name,s):e.getFieldDataValue(t.fieldInfo,d.dynamicReportInfo.fieldData,u),p=n.parseNumber(p),isNaN(p)&&console.log("Can't render chart value for field => "+(t.fieldInfo?t.fieldInfo.name:"missing field"))):(c=c||r,p=c[i%c.length],o[f]||(o[f]=.5+(.3-.6*Math.random())),p*=o[f],p=a(t,p,l)),p},i.getCaptionValue=function(n,t){return n.captionFieldInfo?t.dynamicReportInfo?e.getFieldDataValue(n.captionFieldInfo,t.dynamicReportInfo.fieldData):e.renderFieldInfoInTableCell(n.captionFieldInfo):""},i.getChartData=function(e,n){var t=r.slice();t.length=Math.min(t.length,n);var a=-(1/0);t.forEach(function(e){a=Math.max(a,e)});var i=1.1*e.max/a;return t=t.map(function(e){return e*i})},i});