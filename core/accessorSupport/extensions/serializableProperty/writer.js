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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../object","./type"],function(e,r,t,n){function i(e,r,t,i){i.write&&!i.write.writer&&!1!==i.write.enabled&&(1===r||n.isCollection(e)?i.write.writer=a:i.write.writer=r>1?l(r):u)}function u(e,r,n,i){t.setDeepValue(n,o(e,i),r)}function o(e,r){return e&&"function"==typeof e.write?e.write({},r):e&&"function"==typeof e.toJSON?e.toJSON():"number"==typeof e?f(e):e}function f(e){return e===-1/0?-Number.MAX_VALUE:e===1/0?Number.MAX_VALUE:isNaN(e)?null:e}function a(e,r,n,i){var u;null===e?u=null:e&&"function"==typeof e.map?(u=e.map(function(e){return o(e,i)}),"function"==typeof u.toArray&&(u=u.toArray())):u=[o(e,i)],t.setDeepValue(n,u,r)}function c(e,r,t){return 0!==t&&Array.isArray(e)?e.map(function(e){return c(e,r,t-1)}):o(e,r)}function l(e){return function(r,n,i,u){var o;if(null===r)o=null;else{o=c(r,u,e);for(var f=e,a=o;f>0&&Array.isArray(a);)f--,a=a[0];if(void 0!==a)for(var l=0;l<f;l++)o=[o]}t.setDeepValue(i,o,n)}}Object.defineProperty(r,"__esModule",{value:!0}),r.create=i});