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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports"],function(o,e){function r(o,e,r,n){if(void 0===n&&(n=0),null==o||"ignore"===e)return r[n+0]=255,r[n+1]=255,r[n+2]=255,void(r[n+3]=255);r[n+0]=Math.floor(255*o[0]),r[n+1]=Math.floor(255*o[1]),r[n+2]=Math.floor(255*o[2]);var a=Math.floor(o[3]*t);r[n+3]=0===a?0:"tint"===e?a:"replace"===e?a+i:a+l}function n(o,e){void 0===e&&(e=0);var r=o[e+3];return r===i||r===l||r===a}Object.defineProperty(e,"__esModule",{value:!0}),e.encodeSymbolColor=r,e.isOpaqueSymbolColor=n;var t=85,i=t,l=2*t,a=3*t});