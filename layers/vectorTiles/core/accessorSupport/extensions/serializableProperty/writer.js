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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","../../../object","./type"],(function(e,r,t,n){function i(e,r,n,i){t.setDeepValue(n,u(e,i),r)}function u(e,r){return e&&"function"==typeof e.write?e.write({},r):e&&"function"==typeof e.toJSON?e.toJSON():"number"==typeof e?function(e){return e===-1/0?-Number.MAX_VALUE:e===1/0?Number.MAX_VALUE:isNaN(e)?null:e}(e):e}function o(e,r,n,i){var o;null===e?o=null:e&&"function"==typeof e.map?"function"==typeof(o=e.map((function(e){return u(e,i)}))).toArray&&(o=o.toArray()):o=[u(e,i)],t.setDeepValue(n,o,r)}Object.defineProperty(r,"__esModule",{value:!0}),r.create=function(e,r,f,a){var l;a.write&&!a.write.writer&&!1!==a.write.enabled&&(1===r||n.isCollection(e)?a.write.writer=o:a.write.writer=r>1?(l=r,function(e,r,n,i){var o;if(null===e)o=null;else{o=function e(r,t,n){return 0!==n&&Array.isArray(r)?r.map((function(r){return e(r,t,n-1)})):u(r,t)}(e,i,l);for(var f=l,a=o;f>0&&Array.isArray(a);)f--,a=a[0];if(void 0!==a)for(var c=0;c<f;c++)o=[o]}t.setDeepValue(n,o,r)}):i)}}));
