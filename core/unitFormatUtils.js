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

define(["require","exports","dojo/i18n!./nls/Units","./string","./unitUtils","../intl/number"],(function(r,t,e,i,n,o){function a(r,t){return e.units[r][t]}function c(r,t,e,i){return void 0===e&&(e=2),void 0===i&&(i="abbr"),o.formatNumber(r,{minimumFractionDigits:e,maximumFractionDigits:e})+" "+a(t,i)}Object.defineProperty(t,"__esModule",{value:!0}),t.unitName=a,t.formatDecimal=c,t.formatMetricLength=function(r,t,e,i){void 0===e&&(e=2),void 0===i&&(i="abbr");var o=n.preferredMetricLengthUnit(r,t);return c(n.convertUnit(r,t,o),o,e,i)},t.formatMetricVerticalLength=function(r,t,e,i){void 0===e&&(e=2),void 0===i&&(i="abbr");var o=n.preferredMetricVerticalLengthUnit(r,t);return c(n.convertUnit(r,t,o),o,e,i)},t.formatImperialLength=function(r,t,e,i){void 0===e&&(e=2),void 0===i&&(i="abbr");var o=n.preferredImperialLengthUnit(r,t);return c(n.convertUnit(r,t,o),o,e,i)},t.formatImperialVerticalLength=function(r,t,e,i){void 0===e&&(e=2),void 0===i&&(i="abbr");var o=n.preferredImperialVerticalLengthUnit(r,t);return c(n.convertUnit(r,t,o),o,e,i)},t.formatMetricArea=function(r,t,e,i){void 0===e&&(e=2),void 0===i&&(i="abbr");var o=n.preferredMetricAreaUnit(r,t);return c(n.convertUnit(r,t,o),o,e,i)},t.formatImperialArea=function(r,t,e,i){void 0===e&&(e=2),void 0===i&&(i="abbr");var o=n.preferredImperialAreaUnit(r,t);return c(n.convertUnit(r,t,o),o,e,i)},t.formatDMS=function(r,t,e){void 0===e&&(e=2);var i=n.convertUnit(r,t,"degrees"),o=i-Math.floor(i);i-=o;var a=(o*=60)-Math.floor(o);return o-=a,a*=60,i.toFixed()+"° "+o.toFixed()+"' "+a.toFixed(e)+'"'};var f=e.units.bytes,u=[f.B,f.kB,f.MB,f.GB,f.TB];t.formatFileSize=function(r){var t=0===r?0:Math.floor(Math.log(r)/Math.log(1024)),e=o.formatNumber(r/Math.pow(1024,t),{maximumFractionDigits:2});return i.replace(u[t],{fileSize:e})}}));