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

define(["require","exports","../expression/expression"],(function(e,r,t){"use strict";return function(){function e(e){this._expression=e}return e.prototype.filter=function(e,r){if(!this._expression)return!0;try{return this._expression.evaluate(e,r)}catch(e){return console.log(e.message),!0}},e.createFilter=function(r){if(!r)return null;this.isLegacyFilter(r)&&(r=this.convertLegacyFilter(r));try{return new e(t.createExpression(r))}catch(e){return console.log(e.message),null}},e.isLegacyFilter=function(e){if(!Array.isArray(e))return!0;if(0===e.length)return!0;switch(e[0]){case"==":case"!=":case">":case"<":case">=":case"<=":return 3===e.length&&"string"==typeof e[1]&&!Array.isArray(e[2]);case"in":return e.length>=3&&"string"==typeof e[1]&&!Array.isArray(e[2]);case"!in":return!0;case"any":case"all":for(var r=1;r<e.length;r++)if(!this.isLegacyFilter(e[1]))return!1;return!0;case"none":return!0;case"has":return 2===e.length&&("$id"===e[1]||"$type"===e[1]);case"!has":return!0;default:return!1}},e.convertLegacyFilter=function(r){if(!Array.isArray(r)||0===r.length)return!0;var t=r[0];if(1===r.length)return"any"!==t;switch(t){case"==":return e.convertComparison("==",r[1],r[2]);case"!=":return e.negate(e.convertComparison("==",r[1],r[2]));case">":case"<":case">=":case"<=":return e.convertComparison(t,r[1],r[2]);case"in":return e.convertIn(r[1],r.slice(2));case"!in":return e.negate(e.convertIn(r[1],r.slice(2)));case"any":case"all":case"none":return e.convertCombining(t,r.slice(1));case"has":return e.convertHas(r[1]);case"!has":return e.negate(e.convertHas(r[1]));default:throw new Error("Unexpected legacy filter.")}},e.convertComparison=function(e,r,t){switch(r){case"$type":return[e,["geometry-type"],t];case"$id":return[e,["id"],t];default:return[e,["get",r],t]}},e.convertIn=function(e,r){switch(e){case"$type":return["in",["geometry-type"],["literal",r]];case"$id":return["in",["id"],["literal",r]];default:return["in",["get",e],["literal",r]]}},e.convertHas=function(e){switch(e){case"$type":return!0;case"$id":return["has-id"];default:return["has",e]}},e.convertCombining=function(e,r){return[e].concat(r.map(this.convertLegacyFilter))},e.negate=function(e){return["!",e]},e}()}));