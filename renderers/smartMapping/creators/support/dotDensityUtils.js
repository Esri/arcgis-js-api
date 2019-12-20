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

define(["require","exports"],function(r,a){function e(r,a){void 0===a&&(a=5);var e=Math.round(r);if(e<=1)return 1;for(var t=e.toString().length,i=t-1>=3?3:t-1;i>=0;i--){var n=Math.pow(10,i),o=Math.floor(r/n)*n,f=Math.ceil(r/n)*n,u=Math.round((o+f)/2),h=Math.abs(r-o)/r*100,M=Math.abs(r-f)/r*100,b=Math.abs(r-u)/r*100,d=Math.min(h,M,b);if(d<=a){if(d===h){e=o;break}if(d===M){e=f;break}if(d===b){e=u;break}}}return e}Object.defineProperty(a,"__esModule",{value:!0}),a.roundValue=e});