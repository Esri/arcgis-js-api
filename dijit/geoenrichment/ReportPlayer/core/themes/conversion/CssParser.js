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

define(["../BorderStyles","../ThemeUpdateUtil","../../../_devConfig"],function(e,r,t){var n={"font-size":"fontSize","font-family":"fontFamily","font-style":"fontStyle","font-weight":"fontWeight","text-decoration":"textDecoration",color:"color","background-color":"backgroundColor",opacity:"opacity",url:"data","background-position":"position","background-repeat":"repeat","background-size":"scale"},o={fromCssText:function(o){function a(){var e={},r=o.match(/\..*?\}/g)||[];return r.forEach(function(r){var t=r.substring(1,r.indexOf("{")).trim(),n=r.substring(r.indexOf("{")+1,r.indexOf("}")).trim().split(";"),o={};n.forEach(function(e){if(e=e.trim()){var r=e.split(":"),t=r[1].trim();t=t.replace("dataM","data:"),t=t.replace("Mbase64",";base64"),o[r[0].trim()]=t}}),e[t]=o}),e}function i(e){var r=s;return e.split("@").forEach(function(e){r=r[e]=r[e]||{}}),r}function f(e,r){l(e,r);for(var t in r)if("border"!==t&&"borderStyle"!==t){var o=r[t],a=c(t,o,e);e[a&&a.name||n[t]||t]=u(a?a.value:o)}}function c(e,r,t){return"font-size"===e?{name:n[e],value:r.replace("px","")}:"background-repeat"===e?{name:n[e],value:"repeat"===r}:"background-size"===e?{name:n[e],value:"contain"===r||"cover"===r}:void 0}function l(r,t){if((t.borderStyle||t.border)&&(r.border={},r.border.style=t.borderStyle||e.ALL,"string"==typeof t.border)){var n=t.border.split(" ");3===n.length&&(r.border.thickness=Number(n[0].replace("px","")),r.border.lineStyle=n[1],r.border.color=n[2])}}function u(e){if(void 0===e||null===e||"null"===e||"undefined"===e)return"";if("true"===e)return!0;if("false"===e)return!1;if(e===!0)return!0;if(e===!1)return!1;var r=Number(e);return isNaN(r)?e:r}function d(e){if(t.emulateErrors.themeParseError)throw new Error("Error test: something crashed during the parsing of the theme!");if("object"==typeof e)for(var r in e){var n=e[r];if("colors"===r){var o=[],a=Object.keys(n);if(a.length){var i=a.every(function(e){return-1!==e.indexOf("_")});a.forEach(function(e,r){o[i?e.split("_")[1]:r]=n[e]})}e[r]=o}else d(n)}}var s={};o=o.replace(/\n/g,""),o=o.replace(/(\w|\d)_(\w|\d)/g,"$1@$2"),o=o.replace("data:","dataM"),o=o.replace(";base64","Mbase64");var b=a();for(var p in b)f(i(p),b[p]);return delete s.themeMetadata,d(s),r.populateMissingStyles(s),s}};return o});