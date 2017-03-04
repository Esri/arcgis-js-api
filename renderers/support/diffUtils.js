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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../core/Accessor","../../core/Collection","../../core/accessorSupport/utils"],function(e,t,n,r,o,i){function c(e){return e instanceof o?Object.keys(e.items):e instanceof r?i.getProperties(e).keys():e?Object.keys(e):[]}function u(e,t){return e instanceof o?e.items[t]:e[t]}function f(e,t){return Array.isArray(e)&&Array.isArray(t)?e.length!==t.length:!1}function l(e){return e?e.declaredClass:null}function a(e,t){var r=e.diff;if(r&&n.isFunction(r))return r(e,t);var o=c(e),i=c(t);if(0!==o.length||0!==i.length){if(!o.length||!i.length||f(e,t))return{type:"complete",oldValue:e,newValue:t};var s=i.filter(function(e){return-1===o.indexOf(e)}),d=o.filter(function(e){return-1===i.indexOf(e)}),y=o.filter(function(n){return i.indexOf(n)>-1&&u(e,n)!==u(t,n)}),g=y.concat(s,d).sort(),v=l(e),V=v&&p.indexOf(v)>-1;if(V&&g.length)return{type:"complete",oldValue:e,newValue:t};var b;for(var h in g){var j=g[h],m=u(e,j),F=u(t,j),O=void 0;n.isFunction(m)||n.isFunction(F)||m!==F&&(O=r&&r[j]&&n.isFunction(r[j])?r[j](m,F):"object"==typeof m&&"object"==typeof F&&l(m)===l(F)?a(m,F):{type:"complete",oldValue:m,newValue:F},O&&(b=b||{type:"partial",diff:{}},b.diff[j]=O))}return b}}function s(e,t){return n.isFunction(e)||n.isFunction(t)||!e&&!t?void 0:!e||!t||"object"==typeof e&&"object"==typeof e&&l(e)!==l(t)?{type:"complete",oldValue:e,newValue:t}:a(e,t)}var p=["esri.Color","esri.portal.Portal"];t.diff=s});