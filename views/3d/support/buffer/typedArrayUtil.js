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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports"],function(e,t){function n(e,t){if(e.forEach)e.forEach(t);else for(var n=0;n<e.length;n++)t(e[n],n,e)}function r(e,t,n){if(e.slice)return e.slice(t,n);void 0===t?t=0:(t<0&&(t+=e.length),t=Math.min(e.length,Math.max(0,t))),void 0===n?n=e.length:(n<0&&(n+=e.length),n=Math.min(e.length,Math.max(0,n)));for(var r=Math.max(0,n-t),i=e.constructor,o=new i(r),a=0;a<r;a++)o[a]=e[t+a];return o}Object.defineProperty(t,"__esModule",{value:!0}),t.forEach=n,t.slice=r});