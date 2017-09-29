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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/Deferred","esri/graphic","esri/tasks/FeatureSet","./EnrichAreasTask","esri/dijit/geoenrichment/utils/JsonXmlConverter"],function(e,r,t,n,a,s){function i(e){return e.innerHTML?e.innerHTML:e.tags&&e.tags.length&&e.tags[0].text||""}var o={execute:function(e){var t=this;return(new a).createReport(e).then(function(e){var n=e&&e.taskID;e=e&&e.result;var a;try{var i;if(e&&"object"==typeof e&&(i=e.error),!i&&"string"==typeof e&&-1!=e.indexOf("{"))try{var o=JSON.parse(e);i=o&&o.error}catch(u){}return i?(new r).reject(i):(a=s.parseXml(e),{taskID:n,featureSets:t._parseDataXmlJson(a)})}catch(u){return(new r).reject(u)}})},_parseDataXmlJson:function(e){function r(e){function r(e,r){var t,n={};if(e.tags.forEach(function(e){var r=i(e);if(!n[e.name]){var a=Number(r);n[e.name]=r.length&&!isNaN(a)?a:r}"AREA_ID"==e.name&&(t=r)}),void 0!==t){var u=a[r]=a[r]||{};u[t]=n,void 0===o[t]&&(o[t]=s++)}}e.tags[0].tags.forEach(function(e){"xs:schema"!=e.name&&"headers"!=e.name&&r(e,e.name)})}if(!e||!e.tags||e.tags.length<2)return null;var a={},s=0,o={};e.tags.forEach(function(e){"ReportData"==e.name&&r(e)});var u=[];for(var c in a){var f=new n;f.calculatorName=c;for(var l in a[c])f.features[o[l]]=new t(null,null,a[c][l]);u.push(f)}return u}};return e(null,{execute:function(e){return o.execute(e)}})});