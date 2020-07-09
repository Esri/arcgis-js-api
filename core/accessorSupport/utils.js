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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../handleUtils","../lang"],(function(r,n,e,t){function a(r,n,e){return n?Object.keys(n).reduce((function(r,i){var u=null,o="merge";if(e&&(u=e.path?e.path+"."+i:i,o=e.policy(u)),"replace"===o)return r[i]=n[i],r;if(void 0===r[i])return r[i]=t.clone(n[i]),r;var l=r[i],f=n[i];if(l===f)return r;if(Array.isArray(f)||Array.isArray(r))l=l?Array.isArray(l)?r[i]=l.concat():r[i]=[l]:r[i]=[],f&&(Array.isArray(f)||(f=[f]),f.forEach((function(r){-1===l.indexOf(r)&&l.push(r)})));else if(f&&"object"==typeof f)if(e){var c=e.path;e.path=u,r[i]=a(l,f,e),e.path=c}else r[i]=a(l,f,null);else r.hasOwnProperty(i)&&!n.hasOwnProperty(i)||(r[i]=f);return r}),r||{}):r}function i(r){return Array.isArray(r)?r:r.split(".")}function u(r){if(Array.isArray(r)||r.indexOf(",")>-1){for(var n=Array.isArray(r)?r:r.split(","),e=0;e<n.length;e++)n[e]=n[e].trim();return 1===n.length?n[0]:n}return r.trim()}Object.defineProperty(n,"__esModule",{value:!0}),n.getProperties=function(r){return r?r.__accessor__?r.__accessor__:r.propertyInvalidated?r:null:null},n.isPropertyDeclared=function(r,n){return r&&r.metadatas&&null!=r.metadatas[n]},n.merge=function(r,n,e){return a(r,n,e?{policy:e,path:""}:null)},n.pathToStringOrArray=function(r){return r?"string"==typeof r&&-1===r.indexOf(".")?r:i(r):r},n.pathToArray=i,n.splitPath=u,n.parseConditionalPath=function(r){if(-1===r.indexOf("?"))return null;for(var n=i(r),e=new Array(n.length),t=0;t<n.length;t++){var a=n[t];e[t]="?"===a[a.length-1],e[t]&&(n[t]=a.slice(0,-1))}return{fullPath:n.join("."),conditional:e}},n.parse=function(r,n,t,a){var i=u(n);if(Array.isArray(i)){var o=i.map((function(n){return a(r,n.trim(),t)}));return e.handlesGroup(o)}return a(r,i.trim(),t)},n.once=function(r){var n=!1;return function(){n||(n=!0,r())}}}));