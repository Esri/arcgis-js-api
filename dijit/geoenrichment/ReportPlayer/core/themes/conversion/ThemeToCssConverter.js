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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define([],function(){var n={fontSize:"font-size",fontFamily:"font-family",fontStyle:"font-style",fontWeight:"font-weight",textDecoration:"text-decoration",color:"color",backgroundColor:"background-color",opacity:"opacity",data:"url",position:"background-position",repeat:"background-repeat",scale:"background-size"};return{toCssText:function(o){function e(n){for(var o="",e=0;e<n;e++)o+="    ";return o}function t(n,o,t){l+=e(t)+"."+n+" {\n";var r=Object.keys(o);r.forEach(function(n,r){l+=e(t+1)+n+": "+o[n]+";\n"}),l+=e(t)+"}\n\n"}function r(o){var e={};for(var t in o)if("border"===t)i(o[t],e);else{var r=o[t];if("object"!=typeof r){var f=c(t,r,o);!1!==f&&(e[f&&f.name||n[t]||t]=a(f?f.value:r))}}return e}function a(n){return void 0===n||null===n||"null"===n||"undefined"===n?"":n}function i(n,o){o.borderStyle=n.style,o.border=n.thickness+"px "+n.lineStyle+" "+n.color}function c(o,e,t){return"fontSize"===o?{name:n[o],value:e+"px"}:"repeat"===o?{name:n[o],value:e?"repeat":"no-repeat"}:"scale"===o?{name:n[o],value:e?t.repeat?"contain":"cover":"auto"}:null}function f(n,o){var e={};return n.forEach(function(n,t){e[o+"_"+t]=n}),e}function u(n,o,e){for(var a in n){var i=n[a];if(i&&"object"==typeof i){Array.isArray(i)&&(i=f(i,a));var c=(e?e+"_":"")+a;t(c,r(i),o),u(i,o+1,c)}}}var l="";return u(o,0),l}}});