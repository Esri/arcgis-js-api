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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["require","exports","../../core/Accessor","../../core/Collection","../../core/accessorSupport/utils"],(function(e,t,n,r,o){Object.defineProperty(t,"__esModule",{value:!0});var f=["esri.Color","esri.portal.Portal"];function i(e){return e instanceof n}function u(e){return e instanceof r?Object.keys(e.items):i(e)?o.getProperties(e).keys():e?Object.keys(e):[]}function l(e,t){return e instanceof r?e.items[t]:e[t]}function c(e){return e?e.declaredClass:null}function a(e,t){var n=e.diff;if(n&&"function"==typeof n)return n(e,t);var r=u(e),o=u(t);if(0!==r.length||0!==o.length){if(!r.length||!o.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(e,t))return{type:"complete",oldValue:e,newValue:t};var p,s=o.filter((function(e){return-1===r.indexOf(e)})),y=r.filter((function(e){return-1===o.indexOf(e)})),d=r.filter((function(n){return o.indexOf(n)>-1&&l(e,n)!==l(t,n)})).concat(s,y).sort(),v=c(e);if(v&&f.indexOf(v)>-1&&d.length)return{type:"complete",oldValue:e,newValue:t};var g=i(e)&&i(t);for(var V in d){var b=d[V],h=l(e,b),j=l(t,b),O=void 0;(g||"function"!=typeof h&&"function"!=typeof j)&&(h!==j&&(null==h&&null==j||(O=n&&n[b]&&"function"==typeof n[b]?n[b](h,j):"object"==typeof h&&"object"==typeof j&&c(h)===c(j)?a(h,j):{type:"complete",oldValue:h,newValue:j})&&((p=p||{type:"partial",diff:{}}).diff[b]=O)))}return p}}t.diff=function(e,t){if("function"!=typeof e&&"function"!=typeof t&&(e||t))return!e||!t||"object"==typeof e&&"object"==typeof t&&c(e)!==c(t)?{type:"complete",oldValue:e,newValue:t}:a(e,t)}}));