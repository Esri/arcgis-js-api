// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../symbols/support/symbolConversion"],function(r,e,n,o){function t(r){return r?f(r)?s(r):a(r)?i(r):c(r)?l(r):new n("renderer-conversion-3d:unsupported-renderer","Unsupported renderer of type '"+(r.type||r.declaredClass)+"'",{renderer:r}):null}function u(r,e){if(!e)return null;var o;if(o=Array.isArray(e)?e:[e],o.length>0){var t=o.map(function(r){return r.details.symbol.type||r.details.symbol.declaredClass}).filter(function(r){return!!r});t.sort();var u=[];return t.forEach(function(r,e){(0===e||r!==t[e-1])&&u.push(r)}),new n("renderer-conversion-3d:unsupported-symbols","Renderer contains symbols ("+u.join(", ")+") which are not supported in 3D",{renderer:r,symbolErrors:o})}return null}function s(r){return u(r,o.to3D(r.symbol).error)}function i(r){var e=r.uniqueValueInfos.map(function(r){return o.to3D(r.symbol).error}).filter(function(r){return!!r}),n=o.to3D(r.defaultSymbol);return n.error&&e.unshift(n.error),u(r,e)}function l(r){var e=r.classBreakInfos.map(function(r){return o.to3D(r.symbol).error}).filter(function(r){return!!r}),n=o.to3D(r.defaultSymbol);return n.error&&e.unshift(n.error),u(r,e)}function f(r){return"simple"===r.type}function a(r){return"uniqueValue"===r.type}function c(r){return"classBreaks"===r.type}e.validateTo3D=t});