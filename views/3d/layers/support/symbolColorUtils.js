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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports"],function(o,e){function r(o,e,r,i){if(void 0===i&&(i=0),null==o||"ignore"===e)return r[i+0]=255,r[i+1]=255,r[i+2]=255,void(r[i+3]=255);r[i+0]=Math.floor(255*o[0]),r[i+1]=Math.floor(255*o[1]),r[i+2]=Math.floor(255*o[2]);var l=Math.floor(o[3]*n);r[i+3]=0===l?0:"tint"===e?l:"replace"===e?l+a:l+c}function i(o,e){void 0===e&&(e=0);var r,i=0,t=o[e+3];switch(l(o,e)){case 0:i=(t-c)/n,r="multiply";break;case 2:i=(t-a)/n,r="replace";break;case 3:i=t/n,r="tint"}return{color:[o[e+0]/255,o[e+1]/255,o[e+2]/255,i],colorMixMode:r}}function l(o,e){void 0===e&&(e=0);var r=o[e+3];return r>c?0:r>a?2:r>0?3:0}function t(o,e){void 0===e&&(e=0);var r=o[e+3];return r===a||r===c||r===d}Object.defineProperty(e,"__esModule",{value:!0}),e.encodeSymbolColor=r,e.decodeSymbolColor=i,e.decodeSymbolColorMixMode=l,e.isOpaqueSymbolColor=t;var n=85,a=n,c=2*n,d=3*n});