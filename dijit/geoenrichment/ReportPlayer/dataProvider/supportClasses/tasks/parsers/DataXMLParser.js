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

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","../../AreaDataUtil","./AttrUtil"],function(a,e,n){function t(a){return a.innerHTML?a.innerHTML:a.tags&&a.tags.length&&a.tags[0].text||""}var r={parseSchema:function(e){var n={};return e.tags.forEach(function(e){if("xs:element"===e.name&&e.attributes&&"ReportData"===e.attributes.name){a.queryJson(e,"xs:element").filter(function(a){return!!a.tags}).forEach(function(e){var t=n[e.attributes.name]={};a.queryJson(e,"xs:element").forEach(function(a){t[a.attributes.name]="xs:string"===a.attributes.type?"string":"number"})})}}),n}};return{parse:function(e,n){return this._parseDataXmlJson(a.parseXml(e,{saveInnerHTML:!0}),n)},_parseDataXmlJson:function(a,s){function i(a){function i(a){var r=function(a){var e,r,i={};if(a.tags.forEach(function(n){var o=t(n),u=o;"string"===c[a.name][n.name]?o=String(o):(o=Number(o),isNaN(o)&&(o=u)),s&&(o=s(n.name,o)),i[n.name]||(i[n.name]=o),"AREA_ID"!==n.name&&"IDFNDFIELD"!==n.name||(e=o),"STORE_ID"===n.name&&(r=o)}),!e&&!r)return null;var o;return!e&&r&&(o=Number(r)),e&&void 0===u[e]&&(u[e]=m++),n.cleanUpAttrs(i),{name:a.name,attrs:i,areaIndex:void 0!==o?o:u[e]}}(a);if(r){var i=o[r.areaIndex]=o[r.areaIndex]||{};i[r.name]?i[r.name].comparisonLevels.push(r.attrs):i[r.name]=e.createCalculator(r.attrs)}}var c;a.tags[0].tags.forEach(function(a){if("xs:schema"===a.name)return void(c=r.parseSchema(a));i(a)})}if(!a||!a.tags||a.tags.length<2)return[];var o=[],u={},m=0;return a.tags.forEach(function(a){"ReportData"===a.name&&i(a)}),console.log("DataXMLPareser.js => areaData:"),console.log(o),o}}});