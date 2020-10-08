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

define(["require","exports","./mathUtils","./string","./unitUtils","../intl/number"],(function(r,t,e,i,n,a){"use strict";function o(r,t,e){return r.units[t][e]}function m(r,t,e,i,n){return void 0===i&&(i=2),void 0===n&&(n="abbr"),a.formatNumber(t,{minimumFractionDigits:i,maximumFractionDigits:i})+" "+o(r,e,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.formatFileSize=t.formatDMS=t.formatImperialArea=t.formatMetricArea=t.formatImperialVerticalLength=t.formatImperialLength=t.formatMetricVerticalLength=t.formatMetricLength=t.formatDecimal=t.unitName=void 0,t.unitName=o,t.formatDecimal=m,t.formatMetricLength=function(r,t,e,i,a){void 0===i&&(i=2),void 0===a&&(a="abbr");var o=n.preferredMetricLengthUnit(t,e);return m(r,n.convertUnit(t,e,o),o,i,a)},t.formatMetricVerticalLength=function(r,t,e,i,a){void 0===i&&(i=2),void 0===a&&(a="abbr");var o=n.preferredMetricVerticalLengthUnit(t,e);return m(r,n.convertUnit(t,e,o),o,i,a)},t.formatImperialLength=function(r,t,e,i,a){void 0===i&&(i=2),void 0===a&&(a="abbr");var o=n.preferredImperialLengthUnit(t,e);return m(r,n.convertUnit(t,e,o),o,i,a)},t.formatImperialVerticalLength=function(r,t,e,i,a){void 0===i&&(i=2),void 0===a&&(a="abbr");var o=n.preferredImperialVerticalLengthUnit(t,e);return m(r,n.convertUnit(t,e,o),o,i,a)},t.formatMetricArea=function(r,t,e,i,a){void 0===i&&(i=2),void 0===a&&(a="abbr");var o=n.preferredMetricAreaUnit(t,e);return m(r,n.convertUnit(t,e,o),o,i,a)},t.formatImperialArea=function(r,t,e,i,a){void 0===i&&(i=2),void 0===a&&(a="abbr");var o=n.preferredImperialAreaUnit(t,e);return m(r,n.convertUnit(t,e,o),o,i,a)},t.formatDMS=function(r,t,e){void 0===e&&(e=2);var i=n.convertUnit(r,t,"degrees"),a=i-Math.floor(i);i-=a;var o=(a*=60)-Math.floor(a);return a-=o,o*=60,i.toFixed()+"° "+a.toFixed()+"' "+o.toFixed(e)+'"'};var f=["B","kB","MB","GB","TB"];t.formatFileSize=function(r,t){var n=0===t?0:Math.floor(Math.log(t)/Math.log(1024));n=e.clamp(n,0,f.length-1);var o=a.formatNumber(t/Math.pow(1024,n),{maximumFractionDigits:2});return i.replace(r.units.bytes[f[n]],{fileSize:o})}}));