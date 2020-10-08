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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","./lang"],(function(e,r,n){"use strict";function t(e,r,n){for(var t=n,i=0,u=e;i<u.length;i++){var o=u[i];if(null==t)return;if(!(o in t)){if(!r)return;t[o]={}}t=t[o]}return t}Object.defineProperty(r,"__esModule",{value:!0}),r.setDeepValue=r.getDeepValue=r.deepMerge=void 0,r.deepMerge=function(e,r,t){return void 0===t&&(t=!1),function e(r,t,i){if(!t)return r;return Object.keys(t).reduce((function(r,u){var o=r[u],a=t[u];return o===a?r:void 0===o?(r[u]=n.clone(a),r):(Array.isArray(a)||Array.isArray(r)?(o=o?Array.isArray(o)?r[u]=o.concat():r[u]=[o]:r[u]=[],a&&(Array.isArray(a)||(a=[a]),i?a.forEach((function(e){-1===o.indexOf(e)&&o.push(e)})):r[u]=a.concat())):a&&"object"==typeof a?r[u]=e(o,a,i):r.hasOwnProperty(u)&&!t.hasOwnProperty(u)||(r[u]=a),r)}),r||{})}(e,r,t)},r.getDeepValue=function(e,r){if(null!=r)return r[e]||t(e.split("."),!1,r)},r.setDeepValue=function(e,r,n){var i=e.split("."),u=i.pop(),o=t(i,!0,n);o&&u&&(o[u]=r)}}));