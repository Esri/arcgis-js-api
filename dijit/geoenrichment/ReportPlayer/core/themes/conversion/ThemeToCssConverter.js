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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define([],function(){var n={fontSize:"font-size",fontFamily:"font-family",fontStyle:"font-style",fontWeight:"font-weight",textDecoration:"text-decoration",color:"color",backgroundColor:"background-color",opacity:"opacity",data:"url",position:"background-position",repeat:"background-repeat",scale:"background-size"},e={toCssText:function(e){function o(n){for(var e="",o=0;n>o;o++)e+="    ";return e}function r(n,e,r){l+=o(r)+"."+n+" {\n";var t=Object.keys(e);t.forEach(function(n,t){l+=o(r+1)+n+": "+e[n]+";\n"}),l+=o(r)+"}\n\n"}function t(e){var o={};for(var r in e)if("border"===r)i(e[r],o);else{var t=e[r];if("object"!=typeof t){var f=c(r,t,e);f!==!1&&(o[f&&f.name||n[r]||r]=a(f?f.value:t))}}return o}function a(n){return void 0===n||null===n||"null"===n||"undefined"===n?"":n}function i(n,e){e.borderStyle=n.style,e.border=n.thickness+"px "+n.lineStyle+" "+n.color}function c(e,o,r){return"fontSize"===e?{name:n[e],value:o+"px"}:"repeat"===e?{name:n[e],value:o?"repeat":"no-repeat"}:"scale"===e?o?{name:n[e],value:r.repeat?"contain":"cover"}:!1:null}function f(n,e){var o={};return n.forEach(function(n,r){o[e+"_"+r]=n}),o}function u(n,e,o){for(var a in n){var i=n[a];if(i&&"object"==typeof i){Array.isArray(i)&&(i=f(i,a));var c=(o?o+"_":"")+a;r(c,t(i),e),u(i,e+1,c)}}}var l="";return u(e,0),l}};return e});