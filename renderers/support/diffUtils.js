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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../core/Accessor","../../core/Collection","../../core/accessorSupport/utils"],function(e,t,n,r,o){function f(e){return e instanceof n}function i(e){return e instanceof r?Object.keys(e.items):f(e)?o.getProperties(e).keys():e?Object.keys(e):[]}function u(e,t){return e instanceof r?e.items[t]:e[t]}function l(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}function c(e){return e?e.declaredClass:null}function a(e,t){var n=e.diff;if(n&&"function"==typeof n)return n(e,t);var r=i(e),o=i(t);if(0!==r.length||0!==o.length){if(!r.length||!o.length||l(e,t))return{type:"complete",oldValue:e,newValue:t};var p=o.filter(function(e){return-1===r.indexOf(e)}),y=r.filter(function(e){return-1===o.indexOf(e)}),d=r.filter(function(n){return o.indexOf(n)>-1&&u(e,n)!==u(t,n)}),v=d.concat(p,y).sort(),g=c(e);if(g&&s.indexOf(g)>-1&&v.length)return{type:"complete",oldValue:e,newValue:t};var V,b=f(e)&&f(t);for(var h in v){var j=v[h],O=u(e,j),m=u(t,j),x=void 0;(b||"function"!=typeof O&&"function"!=typeof m)&&(O!==m&&(null==O&&null==m||(x=n&&n[j]&&"function"==typeof n[j]?n[j](O,m):"object"==typeof O&&"object"==typeof m&&c(O)===c(m)?a(O,m):{type:"complete",oldValue:O,newValue:m})&&(V=V||{type:"partial",diff:{}},V.diff[j]=x)))}return V}}function p(e,t){if("function"!=typeof e&&"function"!=typeof t&&(e||t))return!e||!t||"object"==typeof e&&"object"==typeof t&&c(e)!==c(t)?{type:"complete",oldValue:e,newValue:t}:a(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var s=["esri.Color","esri.portal.Portal"];t.diff=p});