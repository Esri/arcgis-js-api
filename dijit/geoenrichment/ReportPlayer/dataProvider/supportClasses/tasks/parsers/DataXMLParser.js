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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","../../AreaDataUtil","./AttrUtil"],function(t,a,e){function n(t){return t.innerHTML?t.innerHTML:t.tags&&t.tags.length&&t.tags[0].text||""}var r={parseSchema:function(a){var e={};return a.tags.forEach(function(a){if("xs:element"===a.name&&a.attributes&&"ReportData"===a.attributes.name){t.queryJson(a,"xs:element").filter(function(t){return!!t.tags}).forEach(function(a){var n=e[a.attributes.name]={};t.queryJson(a,"xs:element").forEach(function(t){n[t.attributes.name]="xs:string"===t.attributes.type?"string":"number"})})}}),e}};return{parse:function(a,e){return this._parseDataXmlJson(t.parseXml(a),e)},_parseDataXmlJson:function(t,s){function i(t){function i(t){var r=function(t){var a,r={};return t.tags.forEach(function(e){var i=n(e),o=i;"string"===m[t.name][e.name]?i=String(i):(i=Number(i),isNaN(i)&&(i=o)),s&&(i=s(e.name,i)),r[e.name]||(r[e.name]=i),"AREA_ID"===e.name&&(a=i)}),a?(void 0===u[a]&&(u[a]=c++),e.cleanUpAttrs(r),{name:t.name,attrs:r,areaIndex:u[a]}):null}(t);if(r){var i=o[r.areaIndex]=o[r.areaIndex]||{};i[r.name]?i[r.name].comparisonLevels.push(r.attrs):i[r.name]=a.createCalculator(r.attrs)}}var m;t.tags[0].tags.forEach(function(t){if("xs:schema"===t.name)return void(m=r.parseSchema(t));i(t)})}if(!t||!t.tags||t.tags.length<2)return[];var o=[],u={},c=0;return t.tags.forEach(function(t){"ReportData"===t.name&&i(t)}),console.log("DataXMLPareser.js => areaData:"),console.log(o),o}}});