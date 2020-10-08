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

define(["require","exports","../../../object","./type"],(function(e,r,t,n){"use strict";function i(e,r,n,i){t.setDeepValue(n,o(e,i),r)}function o(e,r){return e&&"function"==typeof e.write?e.write({},r):e&&"function"==typeof e.toJSON?e.toJSON():"number"==typeof e?u(e):e}function u(e){return e===-1/0?-Number.MAX_VALUE:e===1/0?Number.MAX_VALUE:isNaN(e)?null:e}function f(e,r,n,i){var u;null===e?u=null:e&&"function"==typeof e.map?"function"==typeof(u=e.map((function(e){return o(e,i)}))).toArray&&(u=u.toArray()):u=[o(e,i)],t.setDeepValue(n,u,r)}Object.defineProperty(r,"__esModule",{value:!0}),r.numberToJSON=r.create=void 0,r.create=function(e,r){var u;if(r.write&&!r.write.writer&&(!1!==r.write.enabled||r.write.overridePolicy)){var a,l=null!==(u=null==e?void 0:e.ndimArray)&&void 0!==u?u:0;e&&(1===l||"type"in e&&n.isCollection(e.type))?r.write.writer=f:r.write.writer=l>1?(a=l,function(e,r,n,i){var u;if(null===e)u=null;else{u=function e(r,t,n){return 0!==n&&Array.isArray(r)?r.map((function(r){return e(r,t,n-1)})):o(r,t)}(e,i,a);for(var f=a,l=u;f>0&&Array.isArray(l);)f--,l=l[0];if(void 0!==l)for(var c=0;c<f;c++)u=[u]}t.setDeepValue(n,u,r)}):i}},r.numberToJSON=u}));