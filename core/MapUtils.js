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

define(["require","exports","@dojo/framework/shim/array"],(function(r,e,n){Object.defineProperty(e,"__esModule",{value:!0});var t=!!Map.prototype.entries;e.someMap=t?function(r,e){for(var n=r.entries(),t=n.next();!t.done;t=n.next())if(e(t.value[1],t.value[0]))return!0;return!1}:function(r,e){var n=!0;return r.forEach((function(r,t){n&&(n=!e(r,t))})),!n};var a=!!Map.prototype.values,o=!!Map.prototype.keys;function u(r){if(0===r.size)throw new Error("Map is empty");var e,n=!1;return r.forEach((function(r,t){n||(e=t,n=!0)})),e}function f(r){if(0===r.size)throw new Error("Map is empty");var e,n=!1;return r.forEach((function(r){n||(e=r,n=!0)})),e}e.pairsOfMap=function(r){var e=[];return r.forEach((function(r,n){return e.push([n,r])})),e},e.valuesOfMap=a?function(r){return n.from(r.values())}:function(r){var e=new Array(r.size),n=0;return r.forEach((function(r){return e[n++]=r})),e},e.keysOfMap=o?function(r){return n.from(r.keys())}:function(r){var e=new Array(r.size),n=0;return r.forEach((function(r,t){return e[n++]=t})),e},e.MapFromValues=a?function(r){return new Map(r)}:function(r){for(var e=new Map,n=0,t=r;n<t.length;n++){var a=t[n];e.set(a[0],a[1])}return e},e.firstKeyOfMap=o?function(r){if(0===r.size)throw new Error("Map is empty");return r.keys().next().value}:u,e.firstValueOfMap=a?function(r){if(0===r.size)throw new Error("Map is empty");return r.values().next().value}:f,e.test={firstKeyOfMapFallback:u,firstValueOfMapFallback:f}}));