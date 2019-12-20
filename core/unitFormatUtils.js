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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","dojo/i18n!./nls/Units","./unitUtils","../intl/number"],function(r,e,t,i,n){function o(r,e){return t.units[r][e]}function a(r,e,t,i){return void 0===t&&(t=2),void 0===i&&(i="abbr"),n.formatNumber(r,{minimumFractionDigits:t,maximumFractionDigits:t})+" "+o(e,i)}function c(r,e,t,n){void 0===t&&(t=2),void 0===n&&(n="abbr");var o=i.preferredMetricLengthUnit(r,e);return a(i.convertUnit(r,e,o),o,t,n)}function v(r,e,t,n){void 0===t&&(t=2),void 0===n&&(n="abbr");var o=i.preferredMetricVerticalLengthUnit(r,e);return a(i.convertUnit(r,e,o),o,t,n)}function d(r,e,t,n){void 0===t&&(t=2),void 0===n&&(n="abbr");var o=i.preferredImperialLengthUnit(r,e);return a(i.convertUnit(r,e,o),o,t,n)}function f(r,e,t,n){void 0===t&&(t=2),void 0===n&&(n="abbr");var o=i.preferredImperialVerticalLengthUnit(r,e);return a(i.convertUnit(r,e,o),o,t,n)}function u(r,e,t,n){void 0===t&&(t=2),void 0===n&&(n="abbr");var o=i.preferredMetricAreaUnit(r,e);return a(i.convertUnit(r,e,o),o,t,n)}function m(r,e,t,n){void 0===t&&(t=2),void 0===n&&(n="abbr");var o=i.preferredImperialAreaUnit(r,e);return a(i.convertUnit(r,e,o),o,t,n)}function l(r,e,t){void 0===t&&(t=2);var n=i.convertUnit(r,e,"degrees"),o=n-Math.floor(n);n-=o,o*=60;var a=o-Math.floor(o);return o-=a,a*=60,n.toFixed()+"° "+o.toFixed()+"' "+a.toFixed(t)+'"'}Object.defineProperty(e,"__esModule",{value:!0}),e.unitName=o,e.formatDecimal=a,e.formatMetricLength=c,e.formatMetricVerticalLength=v,e.formatImperialLength=d,e.formatImperialVerticalLength=f,e.formatMetricArea=u,e.formatImperialArea=m,e.formatDMS=l});