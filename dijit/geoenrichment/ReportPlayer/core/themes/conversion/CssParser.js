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

define(["../BorderStyles","../ThemeUtil"],function(e,r){var t={"font-size":"fontSize","font-family":"fontFamily","font-style":"fontStyle","font-weight":"fontWeight","text-decoration":"textDecoration",color:"color","background-color":"backgroundColor",opacity:"opacity",url:"data","background-position":"position","background-repeat":"repeat","background-size":"scale"},n={fromCssText:function(n){function o(){var e={},r=n.match(/\..*?\}/g)||[];return r.forEach(function(r){var t=r.substring(1,r.indexOf("{")).trim(),n=r.substring(r.indexOf("{")+1,r.indexOf("}")).trim().split(";"),o={};n.forEach(function(e){if(e=e.trim()){var r=e.split(":"),t=r[1].trim();t=t.replace("dataM","data:"),t=t.replace("Mbase64",";base64"),o[r[0].trim()]=t}}),e[t]=o}),e}function a(e){var r=d;return e.split("@").forEach(function(e){r=r[e]=r[e]||{}}),r}function i(e,r){c(e,r);for(var n in r)if("border"!=n&&"borderStyle"!=n){var o=r[n],a=f(n,o,e);e[a&&a.name||t[n]||n]=l(a?a.value:o)}}function f(e,r,n){return"font-size"==e?{name:t[e],value:r.replace("px","")}:"background-repeat"==e?{name:t[e],value:"repeat"==r}:"background-size"==e?{name:t[e],value:"contain"==r||"cover"==r}:void 0}function c(r,t){if((t.borderStyle||t.border)&&(r.border={},r.border.style=t.borderStyle||e.ALL,"string"==typeof t.border)){var n=t.border.split(" ");3===n.length&&(r.border.thickness=Number(n[0].replace("px","")),r.border.lineStyle=n[1],r.border.color=n[2])}}function l(e){if(void 0===e||null===e||"null"===e||"undefined"===e)return"";if("true"===e||"false"===e)return"true"==e;if(e===!0)return!0;if(e===!1)return!1;var r=Number(e);return isNaN(r)?e:r}function u(e){if("object"==typeof e)for(var r in e){var t=e[r];if("colors"==r){var n=[],o=Object.keys(t);if(o.length){var a=o.every(function(e){return-1!=e.indexOf("_")});o.forEach(function(e,r){n[a?e.split("_")[1]:r]=t[e]})}e[r]=n}else u(t)}}var d={};n=n.replace(/\n/g,""),n=n.replace(/(\w|\d)_(\w|\d)/g,"$1@$2"),n=n.replace("data:","dataM"),n=n.replace(";base64","Mbase64");var s=o();for(var b in s)i(a(b),s[b]);return delete d.themeMetadata,u(d),r.populateMissingStyles(d),d}};return n});