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

define(["require","exports"],(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=!!Set.prototype.entries;e.someSet=t?function(r,e){for(var t=r.entries(),n=t.next();!n.done;n=t.next())if(e(n.value[0]))return!0;return!1}:function(r,e){var t=!0;return r.forEach((function(r){t&&(t=!e(r))})),!t};var n=!!Set.prototype.values,u=!!Array.from;e.valuesOfSet=n&&u?function(r){return Array.from(r.values())}:function(r){var e=new Array(r.size),t=0;return r.forEach((function(r){return e[t++]=r})),e},e.SetFromValues=n?function(r){return new Set(r)}:function(r){for(var e=new Set,t=0,n=r;t<n.length;t++){var u=n[t];e.add(u)}return e},e.firstOfSet=n?function(r){if(0===r.size)throw new Error("Set is empty");return r.values().next().value}:function(r){if(0===r.size)throw new Error("Set is empty");var e,t=!1;return r.forEach((function(r){t||(e=r,t=!0)})),e},e.reduceSet=function(r,e,t){var n=t;return r.forEach((function(r){return n=e(r,n)})),n}}));