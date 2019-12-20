// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../Color","./colors"],function(r,n,e,a){function u(r){var n=[];for(var a in r){var u=Number(a);if(!isNaN(u)){var o=r[a];n.push({colors:o.map(function(r){return new e(r)}),numClasses:u})}}return{name:r.name,tags:r.tags.slice(),colors:r.stops.map(function(r){return new e(r)}),colorsForClassBreaks:n}}function o(r){return Array.isArray(r[2]&&r[2][0])}function t(){var r=[];for(var n in a){var e=a[n];o(e)||r.push(u(e))}return r}function i(){var r=[];for(var n in a){var e=a[n];o(e)||r.push(e.name)}return r}function s(r){var n=null;for(var e in a){var t=a[e];if(!o(t)&&t.name===r){n=u(t);break}}return n}function f(r){var n=r.includedTags,e=r.excludedTags;if(!n&&!e)return[];var t=!(n&&n.length),i=!(e&&e.length),s=[];for(var f in a)!function(r){var f=a[r];if(!o(f)){var c=!!t||n.some(function(r){return f.tags.indexOf(r)>-1}),v=!i&&e.some(function(r){return f.tags.indexOf(r)>-1});c&&!v&&s.push(u(f))}}(f);return s}Object.defineProperty(n,"__esModule",{value:!0}),n.all=t,n.names=i,n.byName=s,n.byTag=f});