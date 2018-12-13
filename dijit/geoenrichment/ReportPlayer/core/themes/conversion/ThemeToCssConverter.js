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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define([],function(){var n={fontSize:"font-size",fontFamily:"font-family",fontStyle:"font-style",fontWeight:"font-weight",textDecoration:"text-decoration",color:"color",backgroundColor:"background-color",opacity:"opacity",data:"url",position:"background-position",repeat:"background-repeat",scale:"background-size"};return{toCssText:function(e){function o(n){for(var e="",o=0;o<n;o++)e+="    ";return e}function t(n,e,t){l+=o(t)+"."+n+" {\n";var r=Object.keys(e);r.forEach(function(n,r){l+=o(t+1)+n+": "+e[n]+";\n"}),l+=o(t)+"}\n\n"}function r(e){var o={};for(var t in e)if("border"===t)i(e[t],o);else{var r=e[t];if("object"!=typeof r){var f=c(t,r,e);!1!==f&&(o[f&&f.name||n[t]||t]=a(f?f.value:r))}}return o}function a(n){return void 0===n||null===n||"null"===n||"undefined"===n?"":n}function i(n,e){e.borderStyle=n.style,e.border=n.thickness+"px "+n.lineStyle+" "+n.color}function c(e,o,t){return"fontSize"===e?{name:n[e],value:o+"px"}:"repeat"===e?{name:n[e],value:o?"repeat":"no-repeat"}:"scale"===e?{name:n[e],value:o?t.repeat?"contain":"cover":t.size||"auto"}:null}function f(n,e){var o={};return n.forEach(function(n,t){o[e+"_"+t]=n}),o}function u(n,e,o){for(var a in n){var i=n[a];if(i&&"object"==typeof i){Array.isArray(i)&&(i=f(i,a));var c=(o?o+"_":"")+a;t(c,r(i),e),u(i,e+1,c)}}}var l="";return u(e,0),l}}});