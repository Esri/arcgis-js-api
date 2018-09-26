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

define(["./AttrUtil"],function(r){var a={ID_FIELDS:["ID","AREA_ID"],parse:function(e,t,n){if(!e||!e.features.length)return[];var s=[],u={},i=0;return e.features.forEach(function(e){var o=function(e){var s=e.attributes[a.ID_FIELDS[0]]||e.attributes[a.ID_FIELDS[1]];if(!s)return null;void 0===u[s]&&(u[s]=i++);var o={};for(var f in e.attributes){var l=n?n(f):f;l&&(o[l]=e.attributes[f])}return r.cleanUpAttrs(o),{name:t,attrs:o,areaIndex:u[s]}}(e);if(o){var f=s[o.areaIndex]=s[o.areaIndex]||{};f[o.name]?f[o.name].comparisonLevels.push(o.attrs):f[o.name]={data:o.attrs,comparisonLevels:[]}}}),console.log("FeatureSetPareser.js => areaData:"),console.log(s),s}};return a});