// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../lang"],function(r,n,e){function t(r){return r?r.__accessor__?r.__accessor__:r.propertyInvalidated?r:null:null}function a(r,n){return r&&r.metadatas&&null!=r.metadatas[n]}function i(r,n,e){if(e){return u(r,n,{policy:e,path:""})}return u(r,n,null)}function u(r,n,t){return n?Object.keys(n).reduce(function(r,a){var i=null,o="merge";if(t&&(i=t.path?t.path+"."+a:a,o=t.policy(i)),"replace"===o)return r[a]=n[a],r;if(void 0===r[a])return r[a]=e.clone(n[a]),r;var f=r[a],l=n[a];if(f===l)return r;if(Array.isArray(l)||Array.isArray(r))f=f?Array.isArray(f)?r[a]=f.concat():r[a]=[f]:r[a]=[],l&&(Array.isArray(l)||(l=[l]),l.forEach(function(r){-1===f.indexOf(r)&&f.push(r)}));else if(l&&"object"==typeof l)if(t){var c=t.path;t.path=i,r[a]=u(f,l,t),t.path=c}else r[a]=u(f,l,null);else r.hasOwnProperty(a)&&!n.hasOwnProperty(a)||(r[a]=l);return r},r||{}):r}function o(r){return r?"string"==typeof r&&-1===r.indexOf(".")?r:f(r):r}function f(r){return Array.isArray(r)?r:r.split(".")}function l(r){if(Array.isArray(r)||r.indexOf(",")>-1){for(var n=Array.isArray(r)?r:r.split(","),e=0;e<n.length;e++)n[e]=n[e].trim();return 1===n.length?n[0]:n}return r.trim()}function c(r){if(-1===r.indexOf("?"))return null;for(var n=f(r),e=new Array(n.length),t=0;t<n.length;t++){var a=n[t];e[t]="?"===a[a.length-1],e[t]&&(n[t]=a.slice(0,-1))}return{fullPath:n.join("."),conditional:e}}function s(r,n,e,t){var a=l(n);if(Array.isArray(a)){var i=a.map(function(n){return t(r,n.trim(),e)});return{remove:y(function(){return i.forEach(function(r){return r.remove()})})}}return t(r,a.trim(),e)}function y(r){var n=!1;return function(){n||(n=!0,r())}}Object.defineProperty(n,"__esModule",{value:!0}),n.getProperties=t,n.isPropertyDeclared=a,n.merge=i,n.pathToStringOrArray=o,n.pathToArray=f,n.splitPath=l,n.parseConditionalPath=c,n.parse=s,n.once=y});