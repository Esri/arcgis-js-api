// COPYRIGHT © 2016 Esri
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

define(["require","exports","./utils"],function(e,r,t){function n(e,r,n){if(null!=n.getItemAt||Array.isArray(n)){var i=parseInt(e,10);if(!isNaN(i))return Array.isArray(n)?n[i]:n.getItemAt(i)}var u=t.getProperties(n);return r?t.isPropertyDeclared(u,e)?u.get(e):n[e]:t.isPropertyDeclared(u,e)?u.internalGet(e):n[e]}function i(e,r,t,u){if(null==e)return e;var o=r[u],a=n(o,t,e);return!a&&u<r.length-1?void 0:u===r.length-1?a:i(a,r,t,u+1)}function u(e,r,u,o){return void 0===u&&(u=!1),void 0===o&&(o=0),"string"==typeof r&&-1===r.indexOf(".")?n(r,u,e):i(e,t.pathToArray(r),u,o)}function o(e,r){return u(e,r,!0)}function a(e,r){return void 0!==u(r,e,!0)}r.valueOf=u,r.get=o,r.exists=a,Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=o});