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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/JsonXmlConverter","../../data/AreaDataUtil","./AttrUtil","esri/dijit/geoenrichment/ReportPlayer/_devConfig"],(function(e,t,a,n){var r=function(t){var a={};return t.tags.forEach((function(t){"xs:element"===t.name&&t.attributes&&"ReportData"===t.attributes.name&&e.queryJson(t,"xs:element").filter((function(e){return!!e.tags})).forEach((function(t){var n=a[t.attributes.name]={};e.queryJson(t,"xs:element").forEach((function(e){n[e.attributes.name]="xs:string"===e.attributes.type?"string":"number"}))}))})),a};return{parse:function(t,a){return this._parseDataXmlJson(e.parseXml(t,{saveInnerHTML:!0}),a)},_parseDataXmlJson:function(e,s){if(!e||!e.tags||e.tags.length<2)return[];var i=[],o={},u=0;function m(e){var m;e.tags[0].tags.forEach((function(e){"xs:schema"!==e.name?function(e){var r=function(e){var t,r,i,c,f={};return e.tags.forEach((function(a){var o=function(e){return e.innerHTML?e.innerHTML:e.tags&&e.tags.length&&e.tags[0].text||""}(a),u=o;"string"===m[e.name][a.name]?o=String(o):(o=Number(o),isNaN(o)&&(o=u),n.emulateErrors.createReportNaN&&(o=NaN)),s&&(o=s(a.name,o)),f[a.name]||(f[a.name]=o),"AREA_ID"===a.name&&(t=o),"IDFNDFIELD"===a.name&&(r=o),"STORE_ID"===a.name&&(i=o)})),(t=t||r)||i?(!t&&i&&(c=Number(i)),t&&void 0===o[t]&&(o[t]=u++),a.cleanUpAttrs(f),{name:e.name,attrs:f,areaIndex:void 0!==c?c:o[t]}):null}(e);if(r){var c=i[r.areaIndex]=i[r.areaIndex]||{};c[r.name]?c[r.name].comparisonLevels.push(r.attrs):c[r.name]=t.createCalculator(r.attrs)}}(e):m=r(e)}))}return e.tags.forEach((function(e){"ReportData"===e.name&&m(e)})),console.log("DataXMLPareser.js => areaData:"),console.log(i),i}}}));