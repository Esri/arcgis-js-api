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

define(["require","exports","./utils"],(function(e,r,t){"use strict";function i(e,r,i){var n="?"===e[e.length-1]?e.slice(0,-1):e;if(null!=i.getItemAt||Array.isArray(i)){var u=parseInt(n,10);if(!isNaN(u))return Array.isArray(i)?i[u]:i.getItemAt(u)}var a=t.getProperties(i);return r?t.isPropertyDeclared(a,n)?a.get(n):i[n]:t.isPropertyDeclared(a,n)?a.internalGet(n):i[n]}function n(e,r,n,u){return void 0===n&&(n=!1),void 0===u&&(u=0),"string"==typeof r&&-1===r.indexOf(".")?i(r,n,e):function e(r,t,n,u){if(null==r)return r;var a=i(t[u],n,r);return!a&&u<t.length-1?void 0:u===t.length-1?a:e(a,t,n,u+1)}(e,t.pathToArray(r),n,u)}function u(e,r){return n(e,r,!0)}Object.defineProperty(r,"__esModule",{value:!0}),r.exists=r.get=r.valueOf=void 0,r.valueOf=n,r.get=u,r.exists=function(e,r){return void 0!==n(r,e,!0)},r.default=u}));