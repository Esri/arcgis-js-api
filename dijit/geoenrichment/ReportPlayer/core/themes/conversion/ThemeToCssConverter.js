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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define([],(function(){var n={fontSize:"font-size",fontFamily:"font-family",fontStyle:"font-style",fontWeight:"font-weight",textDecoration:"text-decoration",color:"color",backgroundColor:"background-color",opacity:"opacity",data:"url",position:"background-position",repeat:"background-repeat",scale:"background-size"};return{toCssText:function(e){var o="";function t(n){for(var e="",o=0;o<n;o++)e+="    ";return e}function r(n,e,r){o+=t(r)+"."+n+" {\n";Object.keys(e).forEach((function(n,a){o+=t(r+1)+n+": "+e[n]+";\n"})),o+=t(r)+"}\n\n"}function a(e){var o={};for(var t in e)if("border"===t)c(e[t],o);else{var r=e[t];if("object"!=typeof r){var a=f(t,r,e);!1!==a&&(o[a&&a.name||n[t]||t]=i(a?a.value:r))}}return o}function i(n){return null==n||"null"===n||"undefined"===n?"":n}function c(n,e){e.borderStyle=n.style,e.border=n.thickness+"px "+n.lineStyle+" "+n.color}function f(e,o,t){return"fontSize"===e?{name:n[e],value:o+"px"}:"repeat"===e?{name:n[e],value:o?"repeat":"no-repeat"}:"scale"===e?{name:n[e],value:o?t.repeat?"contain":"cover":t.size||"auto"}:null}function u(n,e){var o={};return n.forEach((function(n,t){o[e+"_"+t]=n})),o}return function n(e,o,t){for(var i in e){var c=e[i];if(c&&"object"==typeof c){Array.isArray(c)&&(c=u(c,i));var f=(t?t+"_":"")+i;r(f,a(c),o),n(c,o+1,f)}}}(e,0),o}}}));