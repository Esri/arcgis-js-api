// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../Color","./colors"],(function(r,n,e,a,u){function o(r){var n=[];for(var u in r){var o=Number(u);if(!isNaN(o)){var t=r[u];n.push({colors:t.map((function(r){return new a(r)})),numClasses:o})}}return{name:r.name,tags:e.__spreadArrays(r.tags),colors:r.stops.map((function(r){return new a(r)})),colorsForClassBreaks:n}}function t(r){return Array.isArray(r[2]&&r[2][0])}Object.defineProperty(n,"__esModule",{value:!0}),n.all=function(){var r=[];for(var n in u){var e=u[n];t(e)||r.push(o(e))}return r},n.names=function(){var r=[];for(var n in u){var e=u[n];t(e)||r.push(e.name)}return r},n.byName=function(r){var n=null;for(var e in u){var a=u[e];if(!t(a)&&a.name===r){n=o(a);break}}return n},n.byTag=function(r){var n=r.includedTags,e=r.excludedTags;if(!n&&!e)return[];var a=!(n&&n.length),s=!(e&&e.length),i=[],f=function(r){var f=u[r];if(!t(f)){var c=!!a||n.some((function(r){return f.tags.indexOf(r)>-1})),v=!s&&e.some((function(r){return f.tags.indexOf(r)>-1}));c&&!v&&i.push(o(f))}};for(var c in u)f(c);return i}}));