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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","dojo/i18n!./nls/Units","dojo/number","./unitUtils"],function(r,e,t,i,n){function o(r,e){return t.units[r][e]}function a(r,e,t,n){return void 0===t&&(t=2),void 0===n&&(n="abbr"),i.format(r,{places:t})+" "+o(e,n)}function v(r,e,t,i){void 0===t&&(t=2),void 0===i&&(i="abbr");var o=n.preferredMetricLengthUnit(r,e);return a(n.convertUnit(r,e,o),o,t,i)}function c(r,e,t,i){void 0===t&&(t=2),void 0===i&&(i="abbr");var o=n.preferredMetricVerticalLengthUnit(r,e);return a(n.convertUnit(r,e,o),o,t,i)}function d(r,e,t,i){void 0===t&&(t=2),void 0===i&&(i="abbr");var o=n.preferredImperialLengthUnit(r,e);return a(n.convertUnit(r,e,o),o,t,i)}function f(r,e,t,i){void 0===t&&(t=2),void 0===i&&(i="abbr");var o=n.preferredImperialVerticalLengthUnit(r,e);return a(n.convertUnit(r,e,o),o,t,i)}function u(r,e,t,i){void 0===t&&(t=2),void 0===i&&(i="abbr");var o=n.preferredMetricAreaUnit(r,e);return a(n.convertUnit(r,e,o),o,t,i)}function l(r,e,t,i){void 0===t&&(t=2),void 0===i&&(i="abbr");var o=n.preferredImperialAreaUnit(r,e);return a(n.convertUnit(r,e,o),o,t,i)}function m(r,e,t){void 0===t&&(t=2);var i=n.convertUnit(r,e,"degrees"),o=i-Math.floor(i);i-=o,o*=60;var a=o-Math.floor(o);return o-=a,a*=60,i.toFixed()+"° "+o.toFixed()+"' "+a.toFixed(t)+'"'}Object.defineProperty(e,"__esModule",{value:!0}),e.unitName=o,e.formatDecimal=a,e.formatMetricLength=v,e.formatMetricVerticalLength=c,e.formatImperialLength=d,e.formatImperialVerticalLength=f,e.formatMetricArea=u,e.formatImperialArea=l,e.formatDMS=m});