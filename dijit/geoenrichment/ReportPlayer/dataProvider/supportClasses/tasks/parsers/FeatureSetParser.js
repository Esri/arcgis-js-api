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

define(["./AttrUtil"],function(e){return{parse:function(r,a,t){if(!r||!r.features.length)return[];var n=[],s={},u=0;return r.features.forEach(function(r){var i=function(r){var n=r.attributes.ID||r.attributes.AREA_ID;if(!n)return null;void 0===s[n]&&(s[n]=u++);var i={};for(var o in r.attributes){var f=t?t(o):o;f&&(i[f]=r.attributes[o])}return e.cleanUpAttrs(i),{name:a,attrs:i,areaIndex:s[n]}}(r);if(i){var o=n[i.areaIndex]=n[i.areaIndex]||{};o[i.name]?o[i.name].comparisonLevels.push(i.attrs):o[i.name]={data:i.attrs,comparisonLevels:[]}}}),console.log("FeatureSetPareser.js => areaData:"),console.log(n),n}}});