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

define(["require","exports"],(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var n=!!Map.prototype.entries;e.someMap=n?function(r,e){for(var n=r.entries(),t=n.next();!t.done;t=n.next())if(e(t.value[1],t.value[0]))return!0;return!1}:function(r,e){var n=!0;return r.forEach((function(r,t){n&&(n=!e(r,t))})),!n};var t=!!Map.prototype.values,a=!!Map.prototype.keys,u=!!Array.from;function o(r){if(0===r.size)throw new Error("Map is empty");var e,n=!1;return r.forEach((function(r,t){n||(e=t,n=!0)})),e}function f(r){if(0===r.size)throw new Error("Map is empty");var e,n=!1;return r.forEach((function(r){n||(e=r,n=!0)})),e}e.pairsOfMap=function(r){var e=[];return r.forEach((function(r,n){return e.push([n,r])})),e},e.valuesOfMap=t&&u?function(r){return Array.from(r.values())}:function(r){var e=new Array(r.size),n=0;return r.forEach((function(r){return e[n++]=r})),e},e.keysOfMap=a&&u?function(r){return Array.from(r.keys())}:function(r){var e=new Array(r.size),n=0;return r.forEach((function(r,t){return e[n++]=t})),e},e.MapFromValues=t?function(r){return new Map(r)}:function(r){for(var e=new Map,n=0,t=r;n<t.length;n++){var a=t[n];e.set(a[0],a[1])}return e},e.firstKeyOfMap=a?function(r){if(0===r.size)throw new Error("Map is empty");return r.keys().next().value}:o,e.firstValueOfMap=t?function(r){if(0===r.size)throw new Error("Map is empty");return r.values().next().value}:f,e.test={firstKeyOfMapFallback:o,firstValueOfMapFallback:f}}));