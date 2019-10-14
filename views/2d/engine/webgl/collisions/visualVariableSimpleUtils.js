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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../../core/mathUtils","../../../../../renderers/support/utils"],function(e,n,m,p){Object.defineProperty(n,"__esModule",{value:!0});var f=Math.PI;function r(e,n){switch(n.transformationType){case"additive":return l=e,c=z((o=n).minSize,l),l+(c||o.minDataValue);case"constant":return function(e,n){var r=e.stops,t=r&&r.length&&r[0].size;null==t&&(t=e.minSize);return z(t,n)}(n,e);case"clamped-linear":return function(e,n){var r=(e-n.minDataValue)/(n.maxDataValue-n.minDataValue),t=z(n.minSize,e),a=z(n.maxSize,e);if(e<=n.minDataValue)return t;if(e>=n.maxDataValue)return a;return t+r*(a-t)}(e,n);case"proportional":return a=(r=e)/(t=n).minDataValue,i=z(t.minSize,r),u=z(t.maxSize,r),s=null,s=a*i,m.clamp(s,i,u);case"stops":return function(e,n){var r=function(r,e){if(!e)return;var t=0,a=e.length-1;return e.some(function(e,n){return r<e?(a=n,!0):(t=n,!1)}),[t,a,(r-e[t])/(e[a]-e[t])]}(e,n.cache.ipData),t=r[0],a=r[1],i=r[2];if(t===a)return z(n.stops[t].size,e);var u=z(n.stops[t].size,e),s=z(n.stops[a].size,e);return u+(s-u)*i}(e,n);case"real-world-size":return function(e,n){var r=p.meterIn[n.valueUnit],t=z(n.minSize,e),a=z(n.maxSize,e),i=n.valueRepresentation,u=null;u="area"===i?2*Math.sqrt(e/f)/r:"radius"===i||"distance"===i?2*e/r:e/r;return m.clamp(u,t,a)}(e,n);case"identity":return e;case"unknown":return null}var r,t,a,i,u,s,l,o,c}function z(e,n){return"number"==typeof e?e:r(n,e)}n.getSizeForValueSimple=r});