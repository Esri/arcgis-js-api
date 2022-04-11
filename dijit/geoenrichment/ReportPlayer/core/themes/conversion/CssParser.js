// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["../PageBorderStyles","../ThemeUpdateUtil","../../../_devConfig"],(function(r,e,t){var o={"font-size":"fontSize","font-family":"fontFamily","font-style":"fontStyle","font-weight":"fontWeight","text-decoration":"textDecoration",color:"color","background-color":"backgroundColor",opacity:"opacity",url:"data","background-position":"position","background-repeat":"repeat","background-size":"scale"},n={colors:1,colors3series:1};return{fromCssText:function(i){var a={};function f(r){var e=a;return r.split("@").forEach((function(r){e=e[r]=e[r]||{}})),e}function c(e,t){for(var n in function(e,t){if(!t.borderStyle&&!t.border)return;if(e.border={},e.border.style=r.toSupportedValue(t.borderStyle),"string"==typeof t.border){var o=t.border.split(" ");3===o.length&&(e.border.thickness=Number(o[0].replace("px","")),e.border.lineStyle=o[1],e.border.color=o[2])}}(e,t),t)if("border"!==n&&"borderStyle"!==n){var i=t[n];l(n,i,e)||(e[o[n]||n]=u(i))}}function l(r,e,t){return"font-size"===r?(t[o[r]]=u(e.replace("px","")),!0):"background-repeat"===r?(t[o[r]]=u("repeat"===e),!0):"background-size"===r&&(t[o[r]]=u("contain"===e||"cover"===e),t.size="auto"===e?null:e,!0)}function u(r){if(null==r||"null"===r||"undefined"===r)return"";if("true"===r)return!0;if("false"===r)return!1;if(!0===r)return!0;if(!1===r)return!1;var e=Number(r);return isNaN(e)?r:e}i=(i=(i=(i=i.replace(/\r?\n|\r/g,"")).replace(/(\w|\d)_(\w|\d)/g,"$1@$2")).replace("data:","dataM")).replace(";base64","Mbase64");var s,d=(s={},(i.match(/\..*?\}/g)||[]).forEach((function(r){var e=r.substring(1,r.indexOf("{")).trim(),t=r.substring(r.indexOf("{")+1,r.indexOf("}")).trim().split(";"),o={};t.forEach((function(r){if(r=r.trim()){var e=r.split(":"),t=e[1].trim();t=(t=t.replace("dataM","data:")).replace("Mbase64",";base64"),o[e[0].trim()]=t}})),s[e]=o})),s);for(var p in d)c(f(p),d[p]);return delete a.themeMetadata,function r(e){if(t.emulateErrors.themeParseError)throw new Error("Error test: something crashed during the parsing of the theme!");if("object"==typeof e)for(var o in e){var i=e[o];if(n[o]){var a=[],f=Object.keys(i);if(f.length){var c=f.every((function(r){return-1!==r.indexOf("_")}));f.forEach((function(r,e){a[c?r.split("_")[1]:e]=i[r]}))}e[o]=a}else r(i)}}(a),e.populateMissingStyles(a),a}}}));