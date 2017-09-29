// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["require","exports","../languageUtils","dojo/number"],function(n,r,t,e){function u(n,r,t){return"undefined"==typeof t||0===+t?Math[n](r):(r=+r,t=+t,isNaN(r)||"number"!=typeof t||t%1!==0?NaN:(r=r.toString().split("e"),r=Math[n](+(r[0]+"e"+(r[1]?+r[1]-t:-t))),r=r.toString().split("e"),+(r[0]+"e"+(r[1]?+r[1]+t:t))))}function o(n,r){function o(n,r,e){var u=t.toNumber(n);return isNaN(u)?u:isNaN(r)||isNaN(e)?NaN:r>e?NaN:r>u?r:u>e?e:u}n.number=function(n,u){return r(n,u,function(n,r,u){t.pcCheck(u,1,2);var o=u[0];if(t.isNumber(o))return o;if(null===o)return 0;if(t.isDate(o))return Number(o);if(t.isBoolean(o))return Number(o);if(t.isArray(o))return NaN;if(""===o)return Number(o);if(void 0===o)return Number(o);if(t.isString(o)){if(void 0!==u[1]){var i=t.multiReplace(u[1],"‰","");return i=t.multiReplace(i,"¤",""),e.parse(o,{pattern:i})}return Number(o.trim())}return Number(o)})},n.abs=function(n,e){return r(n,e,function(n,r,e){return t.pcCheck(e,1,1),Math.abs(t.toNumber(e[0]))})},n.acos=function(n,e){return r(n,e,function(n,r,e){return t.pcCheck(e,1,1),Math.acos(t.toNumber(e[0]))})},n.asin=function(n,e){return r(n,e,function(n,r,e){return t.pcCheck(e,1,1),Math.asin(t.toNumber(e[0]))})},n.atan=function(n,e){return r(n,e,function(n,r,e){return t.pcCheck(e,1,1),Math.atan(t.toNumber(e[0]))})},n.atan2=function(n,e){return r(n,e,function(n,r,e){return t.pcCheck(e,2,2),Math.atan2(t.toNumber(e[0]),t.toNumber(e[1]))})},n.ceil=function(n,e){return r(n,e,function(n,r,e){if(t.pcCheck(e,1,2),2===e.length){var o=t.toNumber(e[1]);return isNaN(o)&&(o=0),u("ceil",t.toNumber(e[0]),-1*o)}return Math.ceil(t.toNumber(e[0]))})},n.round=function(n,e){return r(n,e,function(n,r,e){if(t.pcCheck(e,1,2),2===e.length){var o=t.toNumber(e[1]);return isNaN(o)&&(o=0),u("round",t.toNumber(e[0]),-1*o)}return Math.round(t.toNumber(e[0]))})},n.floor=function(n,e){return r(n,e,function(n,r,e){if(t.pcCheck(e,1,2),2===e.length){var o=t.toNumber(e[1]);return isNaN(o)&&(o=0),u("floor",t.toNumber(e[0]),-1*o)}return Math.floor(t.toNumber(e[0]))})},n.cos=function(n,e){return r(n,e,function(n,r,e){return t.pcCheck(e,1,1),Math.cos(t.toNumber(e[0]))})},n.isnan=function(n,e){return r(n,e,function(n,r,e){return t.pcCheck(e,1,1),"number"==typeof e[0]&&isNaN(e[0])})},n.exp=function(n,e){return r(n,e,function(n,r,e){return t.pcCheck(e,1,1),Math.exp(t.toNumber(e[0]))})},n.log=function(n,e){return r(n,e,function(n,r,e){return t.pcCheck(e,1,1),Math.log(t.toNumber(e[0]))})},n.pow=function(n,e){return r(n,e,function(n,r,e){return t.pcCheck(e,2,2),Math.pow(t.toNumber(e[0]),t.toNumber(e[1]))})},n.random=function(n,e){return r(n,e,function(n,r,e){return t.pcCheck(e,0,0),Math.random()})},n.sin=function(n,e){return r(n,e,function(n,r,e){return t.pcCheck(e,1,1),Math.sin(t.toNumber(e[0]))})},n.sqrt=function(n,e){return r(n,e,function(n,r,e){return t.pcCheck(e,1,1),Math.sqrt(t.toNumber(e[0]))})},n.tan=function(n,e){return r(n,e,function(n,r,e){return t.pcCheck(e,1,1),Math.tan(t.toNumber(e[0]))})},n.defaultvalue=function(n,e){return r(n,e,function(n,r,e){return t.pcCheck(e,2,2),null===e[0]?e[1]:""===e[0]?e[1]:void 0===e[0]?e[1]:e[0]})},n.isempty=function(n,e){return r(n,e,function(n,r,e){return t.pcCheck(e,1,1),null===e[0]?!0:""===e[0]?!0:void 0===e[0]?!0:!1})},n["boolean"]=function(n,e){return r(n,e,function(n,r,e){t.pcCheck(e,1,1);var u=e[0];return t.toBoolean(u)})},n.constrain=function(n,e){return r(n,e,function(n,r,e){t.pcCheck(e,3,3);var u=t.toNumber(e[1]),i=t.toNumber(e[2]);if(t.isArray(e[0])){for(var c=[],a=0,f=e[0];a<f.length;a++){var N=f[a];c.push(o(N,u,i))}return c}if(t.isImmutableArray(e[0])){for(var c=[],h=0;h<e[0].length();h++)c.push(o(e[0].get(h),u,i));return c}return o(e[0],u,i)})}}Object.defineProperty(r,"__esModule",{value:!0}),r.registerFunctions=o});