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

define(["require","exports","../languageUtils","dojo/number"],function(n,t,r,e){function u(n,t,r){return"undefined"==typeof r||0===+r?Math[n](t):(t=+t,r=+r,isNaN(t)||"number"!=typeof r||r%1!==0?NaN:(t=t.toString().split("e"),t=Math[n](+(t[0]+"e"+(t[1]?+t[1]-r:-r))),t=t.toString().split("e"),+(t[0]+"e"+(t[1]?+t[1]+r:r))))}function o(n,t){n.number=function(n,u){return t(n,u,function(n,t,u){r.pcCheck(u,1,2);var o=u[0];if(r.isNumber(o))return o;if(null===o)return 0;if(r.isDate(o))return Number(o);if(r.isBoolean(o))return Number(o);if(""===o)return Number(o);if(void 0===o)return Number(o);if(r.isString(o)){if(void 0!==u[1]){var c=r.multiReplace(u[1],"‰","");return c=r.multiReplace(c,"¤",""),e.parse(o,{pattern:c})}return Number(o.trim())}return Number(o)})},n.abs=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),Math.abs(r.toNumber(e[0]))})},n.acos=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),Math.acos(r.toNumber(e[0]))})},n.asin=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),Math.asin(r.toNumber(e[0]))})},n.atan=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),Math.atan(r.toNumber(e[0]))})},n.atan2=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,2,2),Math.atan2(r.toNumber(e[0]),r.toNumber(e[1]))})},n.ceil=function(n,e){return t(n,e,function(n,t,e){if(r.pcCheck(e,1,2),2===e.length){var o=r.toNumber(e[1]);return isNaN(o)&&(o=0),u("ceil",r.toNumber(e[0]),-1*o)}return Math.ceil(r.toNumber(e[0]))})},n.round=function(n,e){return t(n,e,function(n,t,e){if(r.pcCheck(e,1,2),2===e.length){var o=r.toNumber(e[1]);return isNaN(o)&&(o=0),u("round",r.toNumber(e[0]),-1*o)}return Math.round(r.toNumber(e[0]))})},n.floor=function(n,e){return t(n,e,function(n,t,e){if(r.pcCheck(e,1,2),2===e.length){var o=r.toNumber(e[1]);return isNaN(o)&&(o=0),u("floor",r.toNumber(e[0]),-1*o)}return Math.floor(r.toNumber(e[0]))})},n.cos=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),Math.cos(r.toNumber(e[0]))})},n.isnan=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),"number"==typeof e[0]&&isNaN(e[0])})},n.exp=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),Math.exp(r.toNumber(e[0]))})},n.log=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),Math.log(r.toNumber(e[0]))})},n.pow=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,2,2),Math.pow(r.toNumber(e[0]),r.toNumber(e[1]))})},n.random=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,0,0),Math.random()})},n.sin=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),Math.sin(r.toNumber(e[0]))})},n.sqrt=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),Math.sqrt(r.toNumber(e[0]))})},n.tan=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),Math.tan(r.toNumber(e[0]))})},n.defaultvalue=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,2,2),null===e[0]?e[1]:""===e[0]?e[1]:void 0===e[0]?e[1]:e[0]})},n.isempty=function(n,e){return t(n,e,function(n,t,e){return r.pcCheck(e,1,1),null===e[0]?!0:""===e[0]?!0:void 0===e[0]?!0:!1})},n["boolean"]=function(n,e){return t(n,e,function(n,t,e){r.pcCheck(e,1,1);var u=e[0];return r.toBoolean(u)})}}t.registerFunctions=o});