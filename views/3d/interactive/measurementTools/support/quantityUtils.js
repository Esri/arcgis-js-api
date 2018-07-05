// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","./unitUtils"],function(r,t,e){var n;return function(r){function t(r,t,n,a){return void 0===n&&(n=2),void 0===a&&(a="abbr"),e.formatDecimal(r.toUnit(t).value,t,n,a)}function n(r,t,n){if(void 0===t&&(t=2),void 0===n&&(n="abbr"),"length"!==r.measure)throw new Error("quantity is not a length");return e.formatMetricLength(r.value,r.unit,t,n)}function a(r,t,n){if(void 0===t&&(t=2),void 0===n&&(n="abbr"),"length"!==r.measure)throw new Error("quantity is not a length");return e.formatMetricVerticalLength(r.value,r.unit,t,n)}function i(r,t,n){if(void 0===t&&(t=2),void 0===n&&(n="abbr"),"area"!==r.measure)throw new Error("quantity is not an area");return e.formatMetricArea(r.value,r.unit,t,n)}function o(r,t,n){if(void 0===t&&(t=2),void 0===n&&(n="abbr"),"length"!==r.measure)throw new Error("quantity is not a length");return e.formatImperialLength(r.value,r.unit,t,n)}function u(r,t,n){if(void 0===t&&(t=2),void 0===n&&(n="abbr"),"length"!==r.measure)throw new Error("quantity is not a length");return e.formatImperialVerticalLength(r.value,r.unit,t,n)}function f(r,t,n){if(void 0===t&&(t=2),void 0===n&&(n="abbr"),"area"!==r.measure)throw new Error("quantity is not an area");return e.formatImperialArea(r.value,r.unit,t,n)}function l(r){if("angle"!==r.measure)throw new Error("quantity is not an angle");return e.formatDMS(r.value,r.unit)}r.formatDecimal=t,r.formatMetricLength=n,r.formatMetricVerticalLength=a,r.formatMetricArea=i,r.formatImperialLength=o,r.formatImperialVerticalLength=u,r.formatImperialArea=f,r.formatDMS=l}(n||(n={})),n});