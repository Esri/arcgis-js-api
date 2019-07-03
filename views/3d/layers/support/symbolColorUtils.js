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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports"],function(o,r){function e(o,r,e,l){if(void 0===l&&(l=0),null==o||"ignore"===r)return e[l+0]=255,e[l+1]=255,e[l+2]=255,void(e[l+3]=255);e[l+0]=Math.floor(255*o[0]),e[l+1]=Math.floor(255*o[1]),e[l+2]=Math.floor(255*o[2]);var t=Math.floor(o[3]*i);e[l+3]=0===t?0:"tint"===r?t:"replace"===r?t+n:t+u}function l(o,r){void 0===r&&(r=0);var e=0,l="multiply",t=o[r+3];return t>u?e=(t-u)/i:t>n?(e=(t-n)/i,l="replace"):t>0&&(e=t/i,l="tint"),{color:[o[r+0]/255,o[r+1]/255,o[r+2]/255,e],colorMixMode:l}}function t(o,r){void 0===r&&(r=0);var e=o[r+3];return e===n||e===u||e===a}Object.defineProperty(r,"__esModule",{value:!0}),r.encodeSymbolColor=e,r.decodeSymbolColor=l,r.isOpaqueSymbolColor=t;var i=85,n=i,u=2*i,a=3*i});