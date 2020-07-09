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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","./utils"],(function(e,r,t){function n(e,r,n){var i="?"===e[e.length-1]?e.slice(0,-1):e;if(null!=n.getItemAt||Array.isArray(n)){var u=parseInt(i,10);if(!isNaN(u))return Array.isArray(n)?n[u]:n.getItemAt(u)}var a=t.getProperties(n);return r?t.isPropertyDeclared(a,i)?a.get(i):n[i]:t.isPropertyDeclared(a,i)?a.internalGet(i):n[i]}function i(e,r,i,u){return void 0===i&&(i=!1),void 0===u&&(u=0),"string"==typeof r&&-1===r.indexOf(".")?n(r,i,e):function e(r,t,i,u){if(null==r)return r;var a=n(t[u],i,r);return!a&&u<t.length-1?void 0:u===t.length-1?a:e(a,t,i,u+1)}(e,t.pathToArray(r),i,u)}function u(e,r){return i(e,r,!0)}Object.defineProperty(r,"__esModule",{value:!0}),r.valueOf=i,r.get=u,r.exists=function(e,r){return void 0!==i(r,e,!0)},r.default=u}));