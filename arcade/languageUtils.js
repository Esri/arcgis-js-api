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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["require","exports","../moment","dojo/number"],function(n,t,e,r){function i(n,t){return void 0===n?t:n}function o(n){return"string"==typeof n||n instanceof String}function u(n){return"boolean"==typeof n}function a(n){return"number"==typeof n}function f(n){return n instanceof Array}function l(n){return n instanceof Date}function c(n,t,e){if(n.length<t||n.length>e)throw new Error("Function called with wrong number of Parameters")}function s(n,t){return isNaN(n)===!1?void 0===t||null===t||""===t?n.toString():r.format(n,{pattern:t}):n.toString()}function m(n,t){var r=e(n);return void 0===t||null===t||""===t?r.format():r.format(t)}function d(n,t){return n===t?!0:l(n)&&l(t)?n.getTime()===t.getTime():!1}function g(n,t){return o(n)?n:null===n?"":a(n)?s(n,t):u(n)?n.toString():l(n)?m(n,t):""}function p(n){return a(n)?n:null===n?0/0:l(n)?0/0:u(n)?0/0:""===n?0/0:void 0===n?0/0:Number(n)}function v(n,t){if(l(n))return n;if(o(n)){var r=e(n,[void 0===t||null===t||""===t?e.ISO_8601:t]);if(r.isValid())return r.toDate()}return null}function S(n,t){if(l(n))return e(n);if(o(n)){var r=e(n,[void 0===t||null===t||""===t?e.ISO_8601:t]);if(r.isValid())return r}return null}function b(n){if(u(n))return n;switch(o(n)&&(n=n.toLowerCase()),n){case!0:case"true":case 1:case"1":case"on":case"yes":return!0;default:return!1}}function y(n,t){return null===n?null:((null===n.spatialReference||void 0===n.spatialReference)&&(n.spatialReference=t),n)}t.defaultUndefined=i,t.isString=o,t.isBoolean=u,t.isNumber=a,t.isArray=f,t.isDate=l,t.pcCheck=c,t.formatNumber=s,t.formatDate=m,t.equalityTest=d,t.toString=g,t.toNumber=p,t.toDate=v,t.toDateM=S,t.toBoolean=b,t.fixSpatialReference=y});