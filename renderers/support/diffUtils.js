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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../core/Accessor","../../core/Collection","../../core/accessorSupport/utils"],function(e,t,n,r,o,i){function l(e){return e instanceof o?Object.keys(e.items):e instanceof r?i.getProperties(e).keys():e?Object.keys(e):[]}function u(e,t){return e instanceof o?e.items[t]:e[t]}function c(e,t){return Array.isArray(e)&&Array.isArray(t)?e.length!==t.length:!1}function f(e){return e?e.declaredClass:null}function a(e,t){var r=e.diff;if(r&&n.isFunction(r))return r(e,t);var o=l(e),i=l(t);if(0!==o.length||0!==i.length){if(!o.length||!i.length||c(e,t))return{type:"complete",oldValue:e,newValue:t};var s=i.filter(function(e){return-1===o.indexOf(e)}),p=o.filter(function(e){return-1===i.indexOf(e)}),y=o.filter(function(n){return i.indexOf(n)>-1&&u(e,n)!==u(t,n)}),v=y.concat(s,p).sort(),g=f(e),b=g&&d.indexOf(g)>-1;if(b&&v.length)return{type:"complete",oldValue:e,newValue:t};var j;for(var V in v){var h=v[V],O=u(e,h),m=u(t,h),F=void 0;n.isFunction(O)||n.isFunction(m)||O!==m&&(null!=O||null!=m)&&(F=r&&r[h]&&n.isFunction(r[h])?r[h](O,m):"object"==typeof O&&"object"==typeof m&&f(O)===f(m)?a(O,m):{type:"complete",oldValue:O,newValue:m},F&&(j=j||{type:"partial",diff:{}},j.diff[h]=F))}return j}}function s(e,t){return n.isFunction(e)||n.isFunction(t)||!e&&!t?void 0:!e||!t||"object"==typeof e&&"object"==typeof e&&f(e)!==f(t)?{type:"complete",oldValue:e,newValue:t}:a(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var d=["esri.Color","esri.portal.Portal"];t.diff=s});