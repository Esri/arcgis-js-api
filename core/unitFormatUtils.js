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

define(["require","exports","./mathUtils","./string","./unitUtils","../intl/number"],(function(r,t,e,i,n,o){function a(r,t,e){return r.units[t][e]}function c(r,t,e,i,n){return void 0===i&&(i=2),void 0===n&&(n="abbr"),o.formatNumber(t,{minimumFractionDigits:i,maximumFractionDigits:i})+" "+a(r,e,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.unitName=a,t.formatDecimal=c,t.formatMetricLength=function(r,t,e,i,o){void 0===i&&(i=2),void 0===o&&(o="abbr");var a=n.preferredMetricLengthUnit(t,e);return c(r,n.convertUnit(t,e,a),a,i,o)},t.formatMetricVerticalLength=function(r,t,e,i,o){void 0===i&&(i=2),void 0===o&&(o="abbr");var a=n.preferredMetricVerticalLengthUnit(t,e);return c(r,n.convertUnit(t,e,a),a,i,o)},t.formatImperialLength=function(r,t,e,i,o){void 0===i&&(i=2),void 0===o&&(o="abbr");var a=n.preferredImperialLengthUnit(t,e);return c(r,n.convertUnit(t,e,a),a,i,o)},t.formatImperialVerticalLength=function(r,t,e,i,o){void 0===i&&(i=2),void 0===o&&(o="abbr");var a=n.preferredImperialVerticalLengthUnit(t,e);return c(r,n.convertUnit(t,e,a),a,i,o)},t.formatMetricArea=function(r,t,e,i,o){void 0===i&&(i=2),void 0===o&&(o="abbr");var a=n.preferredMetricAreaUnit(t,e);return c(r,n.convertUnit(t,e,a),a,i,o)},t.formatImperialArea=function(r,t,e,i,o){void 0===i&&(i=2),void 0===o&&(o="abbr");var a=n.preferredImperialAreaUnit(t,e);return c(r,n.convertUnit(t,e,a),a,i,o)},t.formatDMS=function(r,t,e){void 0===e&&(e=2);var i=n.convertUnit(r,t,"degrees"),o=i-Math.floor(i);i-=o;var a=(o*=60)-Math.floor(o);return o-=a,a*=60,i.toFixed()+"° "+o.toFixed()+"' "+a.toFixed(e)+'"'};var f=["B","kB","MB","GB","TB"];t.formatFileSize=function(r,t){var n=0===t?0:Math.floor(Math.log(t)/Math.log(1024));n=e.clamp(n,0,f.length-1);var a=o.formatNumber(t/Math.pow(1024,n),{maximumFractionDigits:2});return i.replace(r.units.bytes[f[n]],{fileSize:a})}}));