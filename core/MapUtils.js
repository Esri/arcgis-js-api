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

define(["require","exports","./maybe"],(function(r,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.test=e.firstValueOfMap=e.firstKeyOfMap=e.MapFromValues=e.keysOfMap=e.valuesOfMap=e.pairsOfMap=e.someMap=void 0;var t=!!Map.prototype.entries;e.someMap=t?function(r,e){for(var n=r.entries(),t=n.next();!t.done;t=n.next())if(e(t.value[1],t.value[0]))return!0;return!1}:function(r,e){var n=!0;return r.forEach((function(r,t){n&&(n=!e(r,t))})),!n};var a=!!Map.prototype.values,u=!!Map.prototype.keys,o=!!Array.from;function f(r){if(0===r.size)throw new Error("Map is empty");var e=void 0,t=!1;return r.forEach((function(r,n){t||(e=n,t=!0)})),n.assumeNonNull(e)}function i(r){if(0===r.size)throw new Error("Map is empty");var e=void 0,t=!1;return r.forEach((function(r){t||(e=r,t=!0)})),n.assumeNonNull(e)}e.pairsOfMap=function(r){var e=[];return r.forEach((function(r,n){return e.push([n,r])})),e},e.valuesOfMap=a&&o?function(r){return Array.from(r.values())}:function(r){var e=new Array(r.size),n=0;return r.forEach((function(r){return e[n++]=r})),e},e.keysOfMap=u&&o?function(r){return Array.from(r.keys())}:function(r){var e=new Array(r.size),n=0;return r.forEach((function(r,t){return e[n++]=t})),e},e.MapFromValues=a?function(r){return new Map(r)}:function(r){for(var e=new Map,n=0,t=r;n<t.length;n++){var a=t[n];e.set(a[0],a[1])}return e},e.firstKeyOfMap=u?function(r){if(0===r.size)throw new Error("Map is empty");return r.keys().next().value}:f,e.firstValueOfMap=a?function(r){if(0===r.size)throw new Error("Map is empty");return r.values().next().value}:i,e.test={firstKeyOfMapFallback:f,firstValueOfMapFallback:i}}));