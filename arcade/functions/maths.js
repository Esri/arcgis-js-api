// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["require","exports","../languageUtils","dojo/number"],(function(r,n,t,e){"use strict";function u(r,n,t){return void 0===t||0==+t?Math[r](n):(n=+n,t=+t,isNaN(n)||"number"!=typeof t||t%1!=0?NaN:(n=n.toString().split("e"),+((n=(n=Math[r](+(n[0]+"e"+(n[1]?+n[1]-t:-t)))).toString().split("e"))[0]+"e"+(n[1]?+n[1]+t:t))))}Object.defineProperty(n,"__esModule",{value:!0}),n.registerFunctions=void 0,n.registerFunctions=function(r,n){function o(r,n,e){var u=t.toNumber(r);return isNaN(u)?u:isNaN(n)||isNaN(e)?NaN:n>e?NaN:u<n?n:u>e?e:u}r.number=function(r,u){return n(r,u,(function(r,n,u){t.pcCheck(u,1,2);var o=u[0];if(t.isNumber(o))return o;if(null===o)return 0;if(t.isDate(o))return Number(o);if(t.isBoolean(o))return Number(o);if(t.isArray(o))return NaN;if(""===o)return Number(o);if(void 0===o)return Number(o);if(t.isString(o)){if(void 0!==u[1]){var i=t.multiReplace(u[1],"‰","");return i=t.multiReplace(i,"¤",""),e.parse(o,{pattern:i})}return Number(o.trim())}return Number(o)}))},r.abs=function(r,e){return n(r,e,(function(r,n,e){return t.pcCheck(e,1,1),Math.abs(t.toNumber(e[0]))}))},r.acos=function(r,e){return n(r,e,(function(r,n,e){return t.pcCheck(e,1,1),Math.acos(t.toNumber(e[0]))}))},r.asin=function(r,e){return n(r,e,(function(r,n,e){return t.pcCheck(e,1,1),Math.asin(t.toNumber(e[0]))}))},r.atan=function(r,e){return n(r,e,(function(r,n,e){return t.pcCheck(e,1,1),Math.atan(t.toNumber(e[0]))}))},r.atan2=function(r,e){return n(r,e,(function(r,n,e){return t.pcCheck(e,2,2),Math.atan2(t.toNumber(e[0]),t.toNumber(e[1]))}))},r.ceil=function(r,e){return n(r,e,(function(r,n,e){if(t.pcCheck(e,1,2),2===e.length){var o=t.toNumber(e[1]);return isNaN(o)&&(o=0),u("ceil",t.toNumber(e[0]),-1*o)}return Math.ceil(t.toNumber(e[0]))}))},r.round=function(r,e){return n(r,e,(function(r,n,e){if(t.pcCheck(e,1,2),2===e.length){var o=t.toNumber(e[1]);return isNaN(o)&&(o=0),u("round",t.toNumber(e[0]),-1*o)}return Math.round(t.toNumber(e[0]))}))},r.floor=function(r,e){return n(r,e,(function(r,n,e){if(t.pcCheck(e,1,2),2===e.length){var o=t.toNumber(e[1]);return isNaN(o)&&(o=0),u("floor",t.toNumber(e[0]),-1*o)}return Math.floor(t.toNumber(e[0]))}))},r.cos=function(r,e){return n(r,e,(function(r,n,e){return t.pcCheck(e,1,1),Math.cos(t.toNumber(e[0]))}))},r.isnan=function(r,e){return n(r,e,(function(r,n,e){return t.pcCheck(e,1,1),"number"==typeof e[0]&&isNaN(e[0])}))},r.exp=function(r,e){return n(r,e,(function(r,n,e){return t.pcCheck(e,1,1),Math.exp(t.toNumber(e[0]))}))},r.log=function(r,e){return n(r,e,(function(r,n,e){return t.pcCheck(e,1,1),Math.log(t.toNumber(e[0]))}))},r.pow=function(r,e){return n(r,e,(function(r,n,e){return t.pcCheck(e,2,2),Math.pow(t.toNumber(e[0]),t.toNumber(e[1]))}))},r.random=function(r,e){return n(r,e,(function(r,n,e){return t.pcCheck(e,0,0),Math.random()}))},r.sin=function(r,e){return n(r,e,(function(r,n,e){return t.pcCheck(e,1,1),Math.sin(t.toNumber(e[0]))}))},r.sqrt=function(r,e){return n(r,e,(function(r,n,e){return t.pcCheck(e,1,1),Math.sqrt(t.toNumber(e[0]))}))},r.tan=function(r,e){return n(r,e,(function(r,n,e){return t.pcCheck(e,1,1),Math.tan(t.toNumber(e[0]))}))},r.defaultvalue=function(r,e){return n(r,e,(function(r,n,e){return t.pcCheck(e,2,2),null===e[0]?e[1]:""===e[0]?e[1]:void 0===e[0]?e[1]:e[0]}))},r.isempty=function(r,e){return n(r,e,(function(r,n,e){return t.pcCheck(e,1,1),null===e[0]||(""===e[0]||void 0===e[0])}))},r.boolean=function(r,e){return n(r,e,(function(r,n,e){t.pcCheck(e,1,1);var u=e[0];return t.toBoolean(u)}))},r.constrain=function(r,e){return n(r,e,(function(r,n,e){t.pcCheck(e,3,3);var u=t.toNumber(e[1]),i=t.toNumber(e[2]);if(t.isArray(e[0])){for(var c=[],a=0,f=e[0];a<f.length;a++){var N=f[a];c.push(o(N,u,i))}return c}if(t.isImmutableArray(e[0])){c=[];for(var h=0;h<e[0].length();h++)c.push(o(e[0].get(h),u,i));return c}return o(e[0],u,i)}))}}}));