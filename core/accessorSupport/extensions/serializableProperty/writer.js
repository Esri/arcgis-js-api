// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","./type"],function(r,t,e,n){function i(r,t,e,i){i.write&&!i.write.writer&&i.write.enabled!==!1&&(1===t||n.isCollection(r)?i.write.writer=c:t>1?i.write.writer=l(t):i.write.writer=o)}function o(r,t,n,i){e.setObject(n,u(r,i),t)}function u(r,t){return r&&"function"==typeof r.write?r.write({},t):r&&"function"==typeof r.toJSON?r.toJSON():"number"==typeof r?f(r):r}function f(r){return r===-(1/0)?-Number.MAX_VALUE:r===1/0?Number.MAX_VALUE:isNaN(r)?null:r}function c(r,t,n,i){var o;null===r?o=null:r&&"function"==typeof r.map?(o=r.map(function(r){return u(r,i)}),"function"==typeof o.toArray&&(o=o.toArray())):o=[u(r,i)],e.setObject(n,o,t)}function a(r,t,e){return 0!==e&&Array.isArray(r)?r.map(function(r){return a(r,t,e-1)}):u(r,t)}function l(r){return function(t,n,i,o){var u;if(null===t)u=null;else{u=a(t,o,r);for(var f=r,c=u;f>0&&Array.isArray(c);)f--,c=c[0];if(void 0!==c)for(var l=0;f>l;l++)u=[u]}e.setObject(i,u,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.create=i});