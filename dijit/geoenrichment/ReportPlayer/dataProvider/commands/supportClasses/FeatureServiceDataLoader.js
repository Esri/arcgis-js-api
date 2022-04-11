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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define([],(function(){var e={};return e.getMinifiedFunction=function(){return'function enrichReportDataWithFeatureServiceData(e,r){require(["dojo/_base/lang","dojo/when","dojo/promise/all","esri/dijit/geoenrichment/utils/DateUtil","esri/dijit/geoenrichment/utils/UrlUtil","esri/dijit/geoenrichment/utils/requests/UniversalClient","esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/data/AreaDataUtil"],function(t,a,i,n,o,u,l){function s(e,r,a,i,s,f){return function(e,r,t){var a=r+"="+("number"==typeof t?t:"\'"+t+"\'");return u.requestPublicFirst(o.combine(e,"query"),{content:{f:"json",where:a,returnGeometry:!1,outFields:"*"},handleAs:"json"})}(a,i,s).then(function(a){var i={};a.fields.forEach(function(e){i[e.name]=e});var o=a.features;if(o.length){var u={};o.forEach(function(e){for(var r in e.attributes){var t=e.attributes[r];if("number"!=typeof t||isNaN(t))u[r]=t;else{var a=i[r];a&&"esriFieldTypeDate"===a.type?u[r]=n.formatDateShort(t):(u[r]=u[r]||0,u[r]+=t||0)}}}),t.mixin(e.feature.attributes,u),function(e,r,t){for(var a in r){var i=r[a];l.setAreaDataValue(a,i,e.fieldData.areaData,e.fieldData.specialTradeAreaCalculatorName,t)}}(r,u,f)}}).always(function(e){console.log(e)})}try{var f=[];e.analysisAreas.forEach(function(r,t){var a=r.featureServiceQueryInfos;a&&a.forEach(function(a){var i=r.feature&&r.feature.attributes;i&&null!=i[a.areaIdField]&&f.push(s(r,e,a.layerUrl,a.lookupIdField,i[a.areaIdField],t))})})}catch(e){return console.log(e),void r()}i(f).always(r)})}'},e}));