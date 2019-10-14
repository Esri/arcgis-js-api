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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["../PageBorderStyles","../ThemeUpdateUtil","../../../_devConfig"],function(r,e,t){var o={"font-size":"fontSize","font-family":"fontFamily","font-style":"fontStyle","font-weight":"fontWeight","text-decoration":"textDecoration",color:"color","background-color":"backgroundColor",opacity:"opacity",url:"data","background-position":"position","background-repeat":"repeat","background-size":"scale"},n={colors:1,colors3series:1};return{fromCssText:function(i){function a(r,e,t){return"font-size"===r?(t[o[r]]=c(e.replace("px","")),!0):"background-repeat"===r?(t[o[r]]=c("repeat"===e),!0):"background-size"===r&&(t[o[r]]=c("contain"===e||"cover"===e),t.size="auto"===e?null:e,!0)}function f(e,t){if((t.borderStyle||t.border)&&(e.border={},e.border.style=r.toSupportedValue(t.borderStyle),"string"==typeof t.border)){var o=t.border.split(" ");3===o.length&&(e.border.thickness=Number(o[0].replace("px","")),e.border.lineStyle=o[1],e.border.color=o[2])}}function c(r){if(void 0===r||null===r||"null"===r||"undefined"===r)return"";if("true"===r)return!0;if("false"===r)return!1;if(!0===r)return!0;if(!1===r)return!1;var e=Number(r);return isNaN(e)?r:e}function l(r){if(t.emulateErrors.themeParseError)throw new Error("Error test: something crashed during the parsing of the theme!");if("object"==typeof r)for(var e in r){var o=r[e];if(n[e]){var i=[],a=Object.keys(o);if(a.length){var f=a.every(function(r){return-1!==r.indexOf("_")});a.forEach(function(r,e){i[f?r.split("_")[1]:e]=o[r]})}r[e]=i}else l(o)}}var u={};i=i.replace(/\n/g,""),i=i.replace(/(\w|\d)_(\w|\d)/g,"$1@$2"),i=i.replace("data:","dataM"),i=i.replace(";base64","Mbase64");var s=function(){var r={};return(i.match(/\..*?\}/g)||[]).forEach(function(e){var t=e.substring(1,e.indexOf("{")).trim(),o=e.substring(e.indexOf("{")+1,e.indexOf("}")).trim().split(";"),n={};o.forEach(function(r){if(r=r.trim()){var e=r.split(":"),t=e[1].trim();t=t.replace("dataM","data:"),t=t.replace("Mbase64",";base64"),n[e[0].trim()]=t}}),r[t]=n}),r}();for(var d in s)!function(r,e){f(r,e);for(var t in e)if("border"!==t&&"borderStyle"!==t){var n=e[t];a(t,n,r)||(r[o[t]||t]=c(n))}}(function(r){var e=u;return r.split("@").forEach(function(r){e=e[r]=e[r]||{}}),e}(d),s[d]);return delete u.themeMetadata,l(u),e.populateMissingStyles(u),u}}});