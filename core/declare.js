// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","dojo/_base/declare","./deprecate","./Logger"],function(e,r,n,t,o){function s(e,r){return e&&!Array.isArray(e)&&"function"!=typeof e&&(r=e,e=null),e=e||[],r=r||{},i([this].concat(e),r)}function i(e,r){e&&!Array.isArray(e)&&"function"!=typeof e&&(r=e,e=null),"function"==typeof e?e=[e]:e||(e=[]),e.length>1&&t.deprecated(c,"Extending multiple classes with Accessor",{version:"4.13",see:"https://arcg.is/T8fr4"}),r=r||{};var o,i;for(o=0,i=a.length;o<i;o++)a[o](e,r);var u=n(e,r);u.createSubclass=s;var p=u.prototype.isInstanceOf;for(u.prototype.isInstanceOf=function(){return t.deprecatedFunction(c,"isInstanceOf",{moduleName:"Accessor",replacement:"Use `instanceof` or check for property presence `'property' in instance`",version:"4.13"}),p.apply(this,arguments)},o=0,i=f.length;o<i;o++)f[o](u);return u}var c=o.getLogger("esri.core.Accessor"),a=[],f=[];return function(e){function r(e,r){var n;if(!(n=Array.isArray(e)?e.reduce(function(e,r){return r._meta?e.concat(r._meta.bases):e},[]):e._meta?e._meta.bases:e))return!1;if("string"==typeof r)for(var t=n.length-1;t>=0;t--)if(n[t].prototype.declaredClass===r)return!0;return-1!==n.indexOf(r)}function t(e,r){return n.safeMixin(e,r)}function o(e){a.push(e)}function s(e){f.push(e)}e.hasMixin=r,e.safeMixin=t,e.before=o,e.after=s}(i||(i={})),i});