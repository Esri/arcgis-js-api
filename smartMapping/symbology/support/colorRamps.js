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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../Color","./colors"],(function(r,n,e,a,t){"use strict";function u(r){var n=[];for(var t in r){var u=Number(t);if(!isNaN(u)){var o=r[t];n.push({colors:o.map((function(r){return new a(r)})),numClasses:u})}}return{name:r.name,tags:e.__spreadArrays(r.tags),colors:r.stops.map((function(r){return new a(r)})),colorsForClassBreaks:n}}function o(r){return Array.isArray(r[2]&&r[2][0])}Object.defineProperty(n,"__esModule",{value:!0}),n.byTag=n.byName=n.names=n.all=void 0,n.all=function(){var r=[];for(var n in t){var e=t[n];o(e)||r.push(u(e))}return r},n.names=function(){var r=[];for(var n in t){var e=t[n];o(e)||r.push(e.name)}return r},n.byName=function(r){var n=null;for(var e in t){var a=t[e];if(!o(a)&&a.name===r){n=u(a);break}}return n},n.byTag=function(r){var n=r.includedTags,e=r.excludedTags;if(!n&&!e)return[];var a=!(n&&n.length),s=!(e&&e.length),i=[],f=function(r){var f=t[r];if(!o(f)){var v=!!a||n.every((function(r){return f.tags.indexOf(r)>-1})),c=!s&&e.every((function(r){return f.tags.indexOf(r)>-1}));v&&!c&&i.push(u(f))}};for(var v in t)f(v);return i}}));