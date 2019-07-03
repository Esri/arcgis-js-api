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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["require","exports","dojo/_base/declare"],function(r,n,e){function t(r,n){return r&&!Array.isArray(r)&&"function"!=typeof r&&(n=r,r=null),r=r||[],n=n||{},a([this].concat(r),n)}function a(r,n){r&&!Array.isArray(r)&&"function"!=typeof r&&(n=r,r=null),"function"==typeof r?r=[r]:r||(r=[]),n=n||{};var a,o;for(a=0,o=i.length;a<o;a++)i[a](r,n);var u=e(r,n);for(u.createSubclass=t,a=0,o=f.length;a<o;a++)f[a](u);return u}var i=[],f=[];return function(r){function n(r,n){var e;if(!(e=Array.isArray(r)?r.reduce(function(r,n){return n._meta?r.concat(n._meta.bases):r},[]):r._meta?r._meta.bases:r))return!1;if("string"==typeof n)for(var t=e.length-1;t>=0;t--)if(e[t].prototype.declaredClass===n)return!0;return-1!==e.indexOf(n)}function t(r,n){return e.safeMixin(r,n)}function a(r){i.push(r)}function o(r){f.push(r)}r.hasMixin=n,r.safeMixin=t,r.before=a,r.after=o}(a||(a={})),a});