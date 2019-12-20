// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["require","exports","dojo/number","../languageUtils"],function(r,n,t,e){"use strict";function u(r,n,t){return void 0===t||0==+t?Math[r](n):(n=+n,t=+t,isNaN(n)||"number"!=typeof t||t%1!=0?NaN:(n=n.toString().split("e"),n=Math[r](+(n[0]+"e"+(n[1]?+n[1]-t:-t))),n=n.toString().split("e"),+(n[0]+"e"+(n[1]?+n[1]+t:t))))}function o(r,n){function o(r,n,t){var u=e.toNumber(r);return isNaN(u)?u:isNaN(n)||isNaN(t)?NaN:n>t?NaN:u<n?n:u>t?t:u}r.number=function(r,u){return n(r,u,function(r,n,u){e.pcCheck(u,1,2);var o=u[0];if(e.isNumber(o))return o;if(null===o)return 0;if(e.isDate(o))return Number(o);if(e.isBoolean(o))return Number(o);if(e.isArray(o))return NaN;if(""===o)return Number(o);if(void 0===o)return Number(o);if(e.isString(o)){if(void 0!==u[1]){var i=e.multiReplace(u[1],"‰","");return i=e.multiReplace(i,"¤",""),t.parse(o,{pattern:i})}return Number(o.trim())}return Number(o)})},r.abs=function(r,t){return n(r,t,function(r,n,t){return e.pcCheck(t,1,1),Math.abs(e.toNumber(t[0]))})},r.acos=function(r,t){return n(r,t,function(r,n,t){return e.pcCheck(t,1,1),Math.acos(e.toNumber(t[0]))})},r.asin=function(r,t){return n(r,t,function(r,n,t){return e.pcCheck(t,1,1),Math.asin(e.toNumber(t[0]))})},r.atan=function(r,t){return n(r,t,function(r,n,t){return e.pcCheck(t,1,1),Math.atan(e.toNumber(t[0]))})},r.atan2=function(r,t){return n(r,t,function(r,n,t){return e.pcCheck(t,2,2),Math.atan2(e.toNumber(t[0]),e.toNumber(t[1]))})},r.ceil=function(r,t){return n(r,t,function(r,n,t){if(e.pcCheck(t,1,2),2===t.length){var o=e.toNumber(t[1]);return isNaN(o)&&(o=0),u("ceil",e.toNumber(t[0]),-1*o)}return Math.ceil(e.toNumber(t[0]))})},r.round=function(r,t){return n(r,t,function(r,n,t){if(e.pcCheck(t,1,2),2===t.length){var o=e.toNumber(t[1]);return isNaN(o)&&(o=0),u("round",e.toNumber(t[0]),-1*o)}return Math.round(e.toNumber(t[0]))})},r.floor=function(r,t){return n(r,t,function(r,n,t){if(e.pcCheck(t,1,2),2===t.length){var o=e.toNumber(t[1]);return isNaN(o)&&(o=0),u("floor",e.toNumber(t[0]),-1*o)}return Math.floor(e.toNumber(t[0]))})},r.cos=function(r,t){return n(r,t,function(r,n,t){return e.pcCheck(t,1,1),Math.cos(e.toNumber(t[0]))})},r.isnan=function(r,t){return n(r,t,function(r,n,t){return e.pcCheck(t,1,1),"number"==typeof t[0]&&isNaN(t[0])})},r.exp=function(r,t){return n(r,t,function(r,n,t){return e.pcCheck(t,1,1),Math.exp(e.toNumber(t[0]))})},r.log=function(r,t){return n(r,t,function(r,n,t){return e.pcCheck(t,1,1),Math.log(e.toNumber(t[0]))})},r.pow=function(r,t){return n(r,t,function(r,n,t){return e.pcCheck(t,2,2),Math.pow(e.toNumber(t[0]),e.toNumber(t[1]))})},r.random=function(r,t){return n(r,t,function(r,n,t){return e.pcCheck(t,0,0),Math.random()})},r.sin=function(r,t){return n(r,t,function(r,n,t){return e.pcCheck(t,1,1),Math.sin(e.toNumber(t[0]))})},r.sqrt=function(r,t){return n(r,t,function(r,n,t){return e.pcCheck(t,1,1),Math.sqrt(e.toNumber(t[0]))})},r.tan=function(r,t){return n(r,t,function(r,n,t){return e.pcCheck(t,1,1),Math.tan(e.toNumber(t[0]))})},r.defaultvalue=function(r,t){return n(r,t,function(r,n,t){return e.pcCheck(t,2,2),null===t[0]?t[1]:""===t[0]?t[1]:void 0===t[0]?t[1]:t[0]})},r.isempty=function(r,t){return n(r,t,function(r,n,t){return e.pcCheck(t,1,1),null===t[0]||(""===t[0]||void 0===t[0])})},r.boolean=function(r,t){return n(r,t,function(r,n,t){e.pcCheck(t,1,1);var u=t[0];return e.toBoolean(u)})},r.constrain=function(r,t){return n(r,t,function(r,n,t){e.pcCheck(t,3,3);var u=e.toNumber(t[1]),i=e.toNumber(t[2]);if(e.isArray(t[0])){for(var c=[],a=0,f=t[0];a<f.length;a++){var N=f[a];c.push(o(N,u,i))}return c}if(e.isImmutableArray(t[0])){for(var c=[],h=0;h<t[0].length();h++)c.push(o(t[0].get(h),u,i));return c}return o(t[0],u,i)})}}Object.defineProperty(n,"__esModule",{value:!0}),n.registerFunctions=o});