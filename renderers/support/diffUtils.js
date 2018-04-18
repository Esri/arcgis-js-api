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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../core/Accessor","../../core/Collection","../../core/accessorSupport/utils"],function(e,n,t,r,o,i){function u(e){return e instanceof r}function l(e){return e instanceof o?Object.keys(e.items):u(e)?i.getProperties(e).keys():e?Object.keys(e):[]}function c(e,n){return e instanceof o?e.items[n]:e[n]}function f(e,n){return!(!Array.isArray(e)||!Array.isArray(n))&&e.length!==n.length}function a(e){return e?e.declaredClass:null}function s(e,n){var r=e.diff;if(r&&t.isFunction(r))return r(e,n);var o=l(e),i=l(n);if(0!==o.length||0!==i.length){if(!o.length||!i.length||f(e,n))return{type:"complete",oldValue:e,newValue:n};var p=i.filter(function(e){return-1===o.indexOf(e)}),y=o.filter(function(e){return-1===i.indexOf(e)}),g=o.filter(function(t){return i.indexOf(t)>-1&&c(e,t)!==c(n,t)}),v=g.concat(p,y).sort(),b=a(e);if(b&&d.indexOf(b)>-1&&v.length)return{type:"complete",oldValue:e,newValue:n};var j,V=u(e)&&u(n);for(var h in v){var O=v[h],m=c(e,O),F=c(n,O),x=void 0;(V||!t.isFunction(m)&&!t.isFunction(F))&&(m!==F&&(null==m&&null==F||(x=r&&r[O]&&t.isFunction(r[O])?r[O](m,F):"object"==typeof m&&"object"==typeof F&&a(m)===a(F)?s(m,F):{type:"complete",oldValue:m,newValue:F})&&(j=j||{type:"partial",diff:{}},j.diff[O]=x)))}return j}}function p(e,n){if(!t.isFunction(e)&&!t.isFunction(n)&&(e||n))return!e||!n||"object"==typeof e&&"object"==typeof e&&a(e)!==a(n)?{type:"complete",oldValue:e,newValue:n}:s(e,n)}Object.defineProperty(n,"__esModule",{value:!0});var d=["esri.Color","esri.portal.Portal"];n.diff=p});