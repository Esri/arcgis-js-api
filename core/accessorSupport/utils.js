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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../handleUtils","../lang","../maybe"],(function(r,e,t,n,a){"use strict";function i(r,e,t){return e?Object.keys(e).reduce((function(r,o){var u=null,l="merge";if(t&&(u=t.path?t.path+"."+o:o,l=t.policy(u)),"replace"===l)return r[o]=e[o],r;if(void 0===r[o])return r[o]=n.clone(e[o]),r;var s=r[o],c=e[o];if(s===c)return r;if(Array.isArray(c)||Array.isArray(r))s=s?Array.isArray(s)?r[o]=s.concat():r[o]=[s]:r[o]=[],c&&(Array.isArray(c)||(c=[c]),c.forEach((function(r){-1===s.indexOf(r)&&s.push(r)})));else if(c&&"object"==typeof c)if(t){var f=t.path;t.path=a.assumeNonNull(u),r[o]=i(s,c,t),t.path=f}else r[o]=i(s,c,null);else r.hasOwnProperty(o)&&!e.hasOwnProperty(o)||(r[o]=c);return r}),r||{}):r}function o(r){return Array.isArray(r)?r:r.split(".")}function u(r){if(Array.isArray(r)||r.indexOf(",")>-1){for(var e=Array.isArray(r)?r:r.split(","),t=0;t<e.length;t++)e[t]=e[t].trim();return 1===e.length?e[0]:e}return r.trim()}Object.defineProperty(e,"__esModule",{value:!0}),e.once=e.parse=e.parseConditionalPath=e.splitPath=e.pathToArray=e.pathToStringOrArray=e.merge=e.isPropertyDeclared=e.getProperties=void 0,e.getProperties=function(r){return r?r.__accessor__?r.__accessor__:r.propertyInvalidated?r:null:null},e.isPropertyDeclared=function(r,e){return null!=r&&r.metadatas&&null!=r.metadatas[e]},e.merge=function(r,e,t){return i(r,e,t?{policy:t,path:""}:null)},e.pathToStringOrArray=function(r){return r?"string"==typeof r&&-1===r.indexOf(".")?r:o(r):r},e.pathToArray=o,e.splitPath=u,e.parseConditionalPath=function(r){if(-1===r.indexOf("?"))return null;for(var e=o(r),t=new Array(e.length),n=0;n<e.length;n++){var a=e[n];t[n]="?"===a[a.length-1],t[n]&&(e[n]=a.slice(0,-1))}return{fullPath:e.join("."),conditional:t}},e.parse=function(r,e,n,a){var i=u(e);if(Array.isArray(i)){var o=i.map((function(e){return a(r,e.trim(),n)}));return t.handlesGroup(o)}return a(r,i.trim(),n)},e.once=function(r){var e=!1;return function(){e||(e=!0,r())}}}));