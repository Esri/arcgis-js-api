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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports"],(function(e,r){function t(e,r){return r?"xoffset"in r&&r.xoffset?Math.max(e,Math.abs(r.xoffset)):"yoffset"in r&&r.yoffset?Math.max(e,Math.abs(r.yoffset||0)):e:e}function n(e,r){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){for(var r=0,t=0,n=0;n<e.length;n++){var a=e[n].size;"number"==typeof a&&(r+=a,t++)}return r/t}(e.stops):r}Object.defineProperty(r,"__esModule",{value:!0}),r.calculateTolerance=function(e){var r=e&&e.renderer,a="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!r)return a;var f="visualVariables"in r?function(e,r){if(!r)return e;var t=r.filter((function(e){return"size"===e.type})).map((function(r){var t=r.maxSize,a=r.minSize;return(n(t,e)+n(a,e))/2})),a=0,f=t.length;if(0===f)return e;for(var o=0;o<f;o++)a+=t[o];var u=Math.floor(a/f);return Math.max(u,e)}(a,r.visualVariables):a;if("simple"===r.type)return t(f,r.symbol);if("unique-value"===r.type){var o=f;return r.uniqueValueInfos.forEach((function(e){o=t(o,e.symbol)})),o}if("class-breaks"===r.type){var u=f;return r.classBreakInfos.forEach((function(e){u=t(u,e.symbol)})),u}return r.type,f}}));