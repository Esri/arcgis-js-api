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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","../../AreaDataUtil","./AttrUtil","esri/dijit/geoenrichment/ReportPlayer/_devConfig"],function(e,a,t,n){function r(e){return e.innerHTML?e.innerHTML:e.tags&&e.tags.length&&e.tags[0].text||""}var s={parseSchema:function(a){var t={};return a.tags.forEach(function(a){if("xs:element"===a.name&&a.attributes&&"ReportData"===a.attributes.name){e.queryJson(a,"xs:element").filter(function(e){return!!e.tags}).forEach(function(a){var n=t[a.attributes.name]={};e.queryJson(a,"xs:element").forEach(function(e){n[e.attributes.name]="xs:string"===e.attributes.type?"string":"number"})})}}),t}};return{parse:function(a,t){return this._parseDataXmlJson(e.parseXml(a,{saveInnerHTML:!0}),t)},_parseDataXmlJson:function(e,i){function o(e){function o(e){var s=function(e){var a,s,o,u={};if(e.tags.forEach(function(t){var m=r(t),c=m;"string"===f[e.name][t.name]?m=String(m):(m=Number(m),isNaN(m)&&(m=c),n.emulateErrors.createReportNaN&&(m=NaN)),i&&(m=i(t.name,m)),u[t.name]||(u[t.name]=m),"AREA_ID"===t.name&&(a=m),"IDFNDFIELD"===t.name&&(s=m),"STORE_ID"===t.name&&(o=m)}),!(a=a||s)&&!o)return null;var l;return!a&&o&&(l=Number(o)),a&&void 0===m[a]&&(m[a]=c++),t.cleanUpAttrs(u),{name:e.name,attrs:u,areaIndex:void 0!==l?l:m[a]}}(e);if(s){var o=u[s.areaIndex]=u[s.areaIndex]||{};o[s.name]?o[s.name].comparisonLevels.push(s.attrs):o[s.name]=a.createCalculator(s.attrs)}}var f;e.tags[0].tags.forEach(function(e){if("xs:schema"===e.name)return void(f=s.parseSchema(e));o(e)})}if(!e||!e.tags||e.tags.length<2)return[];var u=[],m={},c=0;return e.tags.forEach(function(e){"ReportData"===e.name&&o(e)}),console.log("DataXMLPareser.js => areaData:"),console.log(u),u}}});