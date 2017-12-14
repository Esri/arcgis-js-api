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

define(["./AttrUtil"],function(r){var a={parse:function(a,e,t){if(!a||!a.features.length)return[];var n=[],s={},u=0;return a.features.forEach(function(a){function i(a){var n=a.attributes.ID||a.attributes.AREA_ID;if(!n)return null;void 0===s[n]&&(s[n]=u++);var i={};for(var o in a.attributes){var f=t?t(o):o;f&&(i[f]=a.attributes[o])}return r.cleanUpAttrs(i),{name:e,attrs:i,areaIndex:s[n]}}var o=i(a);if(o){var f=n[o.areaIndex]=n[o.areaIndex]||{};f[o.name]?f[o.name].comparisonLevels.push(o.attrs):f[o.name]={data:o.attrs,comparisonLevels:[]}}}),console.log("FeatureSetPareser.js => areaData:"),console.log(n),n}};return a});