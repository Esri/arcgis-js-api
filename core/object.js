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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","./lang"],(function(r,e,n){function t(r,e,n){for(var t=n,i=0,u=r;i<u.length;i++){var o=u[i];if(null==t)return;if(!(o in t)){if(!e)return;t[o]={}}t=t[o]}return t}Object.defineProperty(e,"__esModule",{value:!0}),e.deepMerge=function(r,e,t){return void 0===t&&(t=!1),function r(e,t,i){if(!t)return e;return Object.keys(t).reduce((function(e,u){var o=e[u],a=t[u];return o===a?e:void 0===o?(e[u]=n.clone(a),e):(Array.isArray(a)||Array.isArray(e)?(o=o?Array.isArray(o)?e[u]=o.concat():e[u]=[o]:e[u]=[],a&&(Array.isArray(a)||(a=[a]),i?a.forEach((function(r){-1===o.indexOf(r)&&o.push(r)})):e[u]=a.concat())):a&&"object"==typeof a?e[u]=r(o,a,i):e.hasOwnProperty(u)&&!t.hasOwnProperty(u)||(e[u]=a),e)}),e||{})}(r,e,t)},e.getDeepValue=function(r,e){if(null!=e)return e[r]||t(r.split("."),!1,e)},e.setDeepValue=function(r,e,n){var i=r.split("."),u=i.pop(),o=t(i,!0,n);o&&u&&(o[u]=e)}}));