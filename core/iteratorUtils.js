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

define(["require","exports","@dojo/framework/shim/array"],function(r,e,n){function t(r){var e=[];return r.forEach(function(r,n){return e.push([n,r])}),e}Object.defineProperty(e,"__esModule",{value:!0});var u=!!Map.prototype.entries;e.everyMap=u?function(r,e){for(var n=r.entries(),t=n.next();!t.done;t=n.next())if(!1===e(t.value[1],t.value[0]))return!1;return!0}:function(r,e){var n=!0,t=function(r,t){n&&(n=!1!==e(r,t))};return r.forEach(t),n};var a=!!Map.prototype.values;e.pairsOfMap=t,e.valuesOfMap=a?function(r){return n.from(r.values())}:function(r){var e=new Array(r.size),n=0;return r.forEach(function(r){return e[n++]=r}),e},e.keysOfMap=function(r){var e=new Array(r.size),n=0;return r.forEach(function(r,t){return e[n++]=t}),e},e.MapFromValues=a?function(r){return new Map(r)}:function(r){for(var e=new Map,n=0,t=r;n<t.length;n++){var u=t[n];e.set(u[0],u[1])}return e};var o=!!Set.prototype.entries;e.everySet=o?function(r,e){for(var n=r.entries(),t=n.next();!t.done;t=n.next())if(!1===e(t.value[0]))return!1;return!0}:function(r,e){var n=!0,t=function(r){n&&(n=!1!==e(r))};return r.forEach(t),n};var f=!!Set.prototype.values;e.valuesOfSet=f?function(r){return n.from(r.values())}:function(r){var e=new Array(r.size),n=0;return r.forEach(function(r){return e[n++]=r}),e},e.SetFromValues=f?function(r){return new Set(r)}:function(r){for(var e=new Set,n=0,t=r;n<t.length;n++){var u=t[n];e.add(u)}return e}});