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

define(["require","exports","./utils"],function(e,r,t){function n(e,r,n){var i="?"===e[e.length-1]?e.slice(0,-1):e;if(null!=n.getItemAt||Array.isArray(n)){var u=parseInt(i,10);if(!isNaN(u))return Array.isArray(n)?n[u]:n.getItemAt(u)}var a=t.getProperties(n);return r?t.isPropertyDeclared(a,i)?a.get(i):n[i]:t.isPropertyDeclared(a,i)?a.internalGet(i):n[i]}function i(e,r,t,u){if(null==e)return e;var a=r[u],o=n(a,t,e);return!o&&u<r.length-1?void 0:u===r.length-1?o:i(o,r,t,u+1)}function u(e,r,u,a){return void 0===u&&(u=!1),void 0===a&&(a=0),"string"==typeof r&&-1===r.indexOf(".")?n(r,u,e):i(e,t.pathToArray(r),u,a)}function a(e,r){return u(e,r,!0)}function o(e,r){return void 0!==u(r,e,!0)}Object.defineProperty(r,"__esModule",{value:!0}),r.valueOf=u,r.get=a,r.exists=o,r.default=a});