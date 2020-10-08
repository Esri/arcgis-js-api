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

define(["require","exports","../../../../../core/mathUtils","../../../../../renderers/support/utils"],(function(e,n,r,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getSizeForValueSimple=void 0;var a=Math.PI;function i(e,n){switch(n.transformationType){case"additive":return function(e,n){var r=u(n.minSize,e);return e+(r||n.minDataValue)}(e,n);case"constant":return function(e,n){var r=e.stops,t=r&&r.length&&r[0].size;null==t&&(t=e.minSize);return u(t,n)}(n,e);case"clamped-linear":return function(e,n){var r=(e-n.minDataValue)/(n.maxDataValue-n.minDataValue),t=u(n.minSize,e),a=u(n.maxSize,e);if(e<=n.minDataValue)return t;if(e>=n.maxDataValue)return a;return t+r*(a-t)}(e,n);case"proportional":return function(e,n){var t,a=e/n.minDataValue,i=u(n.minSize,e),s=u(n.maxSize,e);return t=a*i,r.clamp(t,i,s)}(e,n);case"stops":return function(e,n){var r=function(e,n){if(!n)return;var r=0,t=n.length-1;return n.some((function(n,a){return e<n?(t=a,!0):(r=a,!1)})),[r,t,(e-n[r])/(n[t]-n[r])]}(e,n.cache.ipData),t=r[0],a=r[1],i=r[2];if(t===a)return u(n.stops[t].size,e);var s=u(n.stops[t].size,e),o=u(n.stops[a].size,e);return s+(o-s)*i}(e,n);case"real-world-size":return function(e,n){var i=t.meterIn[n.valueUnit],s=u(n.minSize,e),o=u(n.maxSize,e),l=n.valueRepresentation,c=null;c="area"===l?2*Math.sqrt(e/a)/i:"radius"===l||"distance"===l?2*e/i:e/i;return r.clamp(c,s,o)}(e,n);case"identity":return e;case"unknown":return null}}function u(e,n){return"number"==typeof e?e:i(n,e)}n.getSizeForValueSimple=i}));