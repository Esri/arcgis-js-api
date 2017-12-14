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

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","../../AreaDataUtil","./AttrUtil"],function(a,t,e){function n(a){return a.innerHTML?a.innerHTML:a.tags&&a.tags.length&&a.tags[0].text||""}var r={parseSchema:function(t){var e={};return t.tags.forEach(function(t){if("xs:element"===t.name&&t.attributes&&"ReportData"===t.attributes.name){var n=a.queryJson(t,"xs:element").filter(function(a){return!!a.tags});n.forEach(function(t){var n=e[t.attributes.name]={};a.queryJson(t,"xs:element").forEach(function(a){n[a.attributes.name]="xs:string"===a.attributes.type?"string":"number"})})}}),e}},s={parse:function(t,e){return this._parseDataXmlJson(a.parseXml(t),e)},_parseDataXmlJson:function(a,s){function i(a){function i(a){function r(a){var t,r={};return a.tags.forEach(function(e){var i=n(e),o=i,u=m[a.name][e.name];"string"===u?i=String(i):(i=Number(i),isNaN(i)&&(i=o)),s&&(i=s(e.name,i)),r[e.name]||(r[e.name]=i),"AREA_ID"===e.name&&(t=i)}),t?(void 0===u[t]&&(u[t]=c++),e.cleanUpAttrs(r),{name:a.name,attrs:r,areaIndex:u[t]}):null}var i=r(a);if(i){var f=o[i.areaIndex]=o[i.areaIndex]||{};f[i.name]?f[i.name].comparisonLevels.push(i.attrs):f[i.name]=t.createCalculator(i.attrs)}}var m;a.tags[0].tags.forEach(function(a){return"xs:schema"===a.name?void(m=r.parseSchema(a)):void i(a)})}if(!a||!a.tags||a.tags.length<2)return[];var o=[],u={},c=0;return a.tags.forEach(function(a){"ReportData"===a.name&&i(a)}),console.log("DataXMLPareser.js => areaData:"),console.log(o),o}};return s});