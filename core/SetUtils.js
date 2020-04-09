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

define(["require","exports","@dojo/framework/shim/array"],(function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var n=!!Set.prototype.entries;r.someSet=n?function(e,r){for(var t=e.entries(),n=t.next();!n.done;n=t.next())if(r(n.value[0]))return!0;return!1}:function(e,r){var t=!0;return e.forEach((function(e){t&&(t=!r(e))})),!t};var o=!!Set.prototype.values;r.valuesOfSet=o?function(e){return t.from(e.values())}:function(e){var r=new Array(e.size),t=0;return e.forEach((function(e){return r[t++]=e})),r},r.createSetFromValues=o?function(e){return new Set(e)}:function(e){for(var r=new Set,t=0,n=e;t<n.length;t++){var o=n[t];r.add(o)}return r},r.firstOfSet=o?function(e){if(0===e.size)throw new Error("Set is empty");return e.values().next().value}:function(e){if(0===e.size)throw new Error("Set is empty");var r,t=!1;return e.forEach((function(e){t||(r=e,t=!0)})),r},r.reduceSet=function(e,r,t){var n=t;return e.forEach((function(e){return n=r(e,n)})),n}}));