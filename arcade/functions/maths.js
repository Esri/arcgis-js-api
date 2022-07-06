// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","exports","../polyfill/tsSupport/assign","../polyfill/tsSupport/spreadarray","../languageUtils","dojo/number"],(function(r,n,t,e,u,o){"use strict";function i(r,n,t){return void 0===t||0==+t?Math[r](n):(n=+n,t=+t,isNaN(n)||"number"!=typeof t||t%1!=0?NaN:(n=n.toString().split("e"),+((n=(n=Math[r](+(n[0]+"e"+(n[1]?+n[1]-t:-t)))).toString().split("e"))[0]+"e"+(n[1]?+n[1]+t:t))))}Object.defineProperty(n,"__esModule",{value:!0}),n.registerFunctions=void 0,n.registerFunctions=function(r,n){function t(r,n,t){var e=u.toNumber(r);return isNaN(e)?e:isNaN(n)||isNaN(t)?NaN:n>t?NaN:e<n?n:e>t?t:e}r.number=function(r,t){return n(r,t,(function(r,n,t){u.pcCheck(t,1,2);var e=t[0];if(u.isNumber(e))return e;if(null===e)return 0;if(u.isDate(e))return Number(e);if(u.isBoolean(e))return Number(e);if(u.isArray(e))return NaN;if(""===e)return Number(e);if(void 0===e)return Number(e);if(u.isString(e)){if(void 0!==t[1]){var i=u.multiReplace(t[1],"‰","");return i=u.multiReplace(i,"¤",""),o.parse(e,{pattern:i})}return Number(e.trim())}return Number(e)}))},r.abs=function(r,t){return n(r,t,(function(r,n,t){return u.pcCheck(t,1,1),Math.abs(u.toNumber(t[0]))}))},r.acos=function(r,t){return n(r,t,(function(r,n,t){return u.pcCheck(t,1,1),Math.acos(u.toNumber(t[0]))}))},r.asin=function(r,t){return n(r,t,(function(r,n,t){return u.pcCheck(t,1,1),Math.asin(u.toNumber(t[0]))}))},r.atan=function(r,t){return n(r,t,(function(r,n,t){return u.pcCheck(t,1,1),Math.atan(u.toNumber(t[0]))}))},r.atan2=function(r,t){return n(r,t,(function(r,n,t){return u.pcCheck(t,2,2),Math.atan2(u.toNumber(t[0]),u.toNumber(t[1]))}))},r.ceil=function(r,t){return n(r,t,(function(r,n,t){if(u.pcCheck(t,1,2),2===t.length){var e=u.toNumber(t[1]);return isNaN(e)&&(e=0),i("ceil",u.toNumber(t[0]),-1*e)}return Math.ceil(u.toNumber(t[0]))}))},r.round=function(r,t){return n(r,t,(function(r,n,t){if(u.pcCheck(t,1,2),2===t.length){var e=u.toNumber(t[1]);return isNaN(e)&&(e=0),i("round",u.toNumber(t[0]),-1*e)}return Math.round(u.toNumber(t[0]))}))},r.floor=function(r,t){return n(r,t,(function(r,n,t){if(u.pcCheck(t,1,2),2===t.length){var e=u.toNumber(t[1]);return isNaN(e)&&(e=0),i("floor",u.toNumber(t[0]),-1*e)}return Math.floor(u.toNumber(t[0]))}))},r.cos=function(r,t){return n(r,t,(function(r,n,t){return u.pcCheck(t,1,1),Math.cos(u.toNumber(t[0]))}))},r.isnan=function(r,t){return n(r,t,(function(r,n,t){return u.pcCheck(t,1,1),"number"==typeof t[0]&&isNaN(t[0])}))},r.exp=function(r,t){return n(r,t,(function(r,n,t){return u.pcCheck(t,1,1),Math.exp(u.toNumber(t[0]))}))},r.log=function(r,t){return n(r,t,(function(r,n,t){return u.pcCheck(t,1,1),Math.log(u.toNumber(t[0]))}))},r.pow=function(r,t){return n(r,t,(function(r,n,t){return u.pcCheck(t,2,2),Math.pow(u.toNumber(t[0]),u.toNumber(t[1]))}))},r.random=function(r,t){return n(r,t,(function(r,n,t){return u.pcCheck(t,0,0),Math.random()}))},r.sin=function(r,t){return n(r,t,(function(r,n,t){return u.pcCheck(t,1,1),Math.sin(u.toNumber(t[0]))}))},r.sqrt=function(r,t){return n(r,t,(function(r,n,t){return u.pcCheck(t,1,1),Math.sqrt(u.toNumber(t[0]))}))},r.tan=function(r,t){return n(r,t,(function(r,n,t){return u.pcCheck(t,1,1),Math.tan(u.toNumber(t[0]))}))},r.defaultvalue=function(r,t){return n(r,t,(function(r,n,t){return u.pcCheck(t,2,2),null===t[0]?t[1]:""===t[0]?t[1]:void 0===t[0]?t[1]:t[0]}))},r.isempty=function(r,t){return n(r,t,(function(r,n,t){return u.pcCheck(t,1,1),null===t[0]||(""===t[0]||void 0===t[0])}))},r.boolean=function(r,t){return n(r,t,(function(r,n,t){u.pcCheck(t,1,1);var e=t[0];return u.toBoolean(e)}))},r.constrain=function(r,e){return n(r,e,(function(r,n,e){u.pcCheck(e,3,3);var o=u.toNumber(e[1]),i=u.toNumber(e[2]);if(u.isArray(e[0])){for(var c=[],a=0,f=e[0];a<f.length;a++){var N=f[a];c.push(t(N,o,i))}return c}if(u.isImmutableArray(e[0])){c=[];for(var s=0;s<e[0].length();s++)c.push(t(e[0].get(s),o,i));return c}return t(e[0],o,i)}))}}}));