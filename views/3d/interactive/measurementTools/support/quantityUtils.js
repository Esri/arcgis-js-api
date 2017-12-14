// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./unitUtils"],function(t,r,e){var n;return function(t){function r(t,r,n,i){return void 0===n&&(n=2),void 0===i&&(i="abbr"),e.formatDecimal(t.toUnit(r).value,r,n,i)}function n(t,r,n){if(void 0===r&&(r=2),void 0===n&&(n="abbr"),"length"!==t.measure)throw new Error("quantity is not a length");return e.formatMetricLength(t.value,t.unit,r,n)}function i(t,r,n){if(void 0===r&&(r=2),void 0===n&&(n="abbr"),"length"!==t.measure)throw new Error("quantity is not a length");return e.formatMetricVerticalLength(t.value,t.unit,r,n)}function a(t,r,n){if(void 0===r&&(r=2),void 0===n&&(n="abbr"),"length"!==t.measure)throw new Error("quantity is not a length");return e.formatImperialLength(t.value,t.unit,r,n)}function o(t,r,n){if(void 0===r&&(r=2),void 0===n&&(n="abbr"),"length"!==t.measure)throw new Error("quantity is not a length");return e.formatImperialVerticalLength(t.value,t.unit,r,n)}function u(t){if("angle"!==t.measure)throw new Error("quantity is not an angle");return e.formatDMS(t.value,t.unit)}t.formatDecimal=r,t.formatMetricLength=n,t.formatMetricVerticalLength=i,t.formatImperialLength=a,t.formatImperialVerticalLength=o,t.formatDMS=u}(n||(n={})),n});