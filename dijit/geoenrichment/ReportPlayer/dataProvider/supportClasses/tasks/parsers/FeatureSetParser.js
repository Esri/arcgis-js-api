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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["./AttrUtil"],function(r){var e={ID_FIELDS:["ID","AREA_ID","IDFNDFIELD"],KNOWN_ATTRIBUTES:{StdGeographyLevel:1,StdGeographyName:1,StdGeographyID:1},parse:function(a,t,n){if(!a)return[];var o=a.features||a;if(!o.length)return[];var s=[],i={},u=0;return o.forEach(function(a){var o=function(a){var o=a.attributes[e.ID_FIELDS[0]]||a.attributes[e.ID_FIELDS[1]];if(!o)return null;void 0===i[o]&&(i[o]=u++);var s={};for(var I in a.attributes){var v=e.KNOWN_ATTRIBUTES[I]?I:n?n(I):I;v&&(s[v]=a.attributes[I])}return r.cleanUpAttrs(s),{name:t,attrs:s,areaIndex:i[o]}}(a);if(o){var I=s[o.areaIndex]=s[o.areaIndex]||{};I[o.name]?I[o.name].comparisonLevels.push(o.attrs):I[o.name]={data:o.attrs,comparisonLevels:[]}}}),console.log("FeatureSetPareser.js => areaData:"),console.log(s),s}};return e});