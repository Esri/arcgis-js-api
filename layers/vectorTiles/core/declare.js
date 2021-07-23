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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["require","exports","dojo/_base/declare"],(function(r,n,e){var t=[],a=[];function i(r,n){return r&&!Array.isArray(r)&&"function"!=typeof r&&(n=r,r=null),n=n||{},f([this].concat(r=r||[]),n)}function f(r,n){var f,o;for(r&&!Array.isArray(r)&&"function"!=typeof r&&(n=r,r=null),"function"==typeof r?r=[r]:r||(r=[]),n=n||{},f=0,o=t.length;f<o;f++)t[f](r,n);var u=e(r,n);for(u.createSubclass=i,f=0,o=a.length;f<o;f++)a[f](u);return u}return function(r){r.hasMixin=function(r,n){var e;if(!(e=Array.isArray(r)?r.reduce((function(r,n){return n._meta?r.concat(n._meta.bases):r}),[]):r._meta?r._meta.bases:r))return!1;if("string"==typeof n)for(var t=e.length-1;t>=0;t--)if(e[t].prototype.declaredClass===n)return!0;return-1!==e.indexOf(n)},r.safeMixin=function(r,n){return e.safeMixin(r,n)},r.before=function(r){t.push(r)},r.after=function(r){a.push(r)}}(f||(f={})),f}));