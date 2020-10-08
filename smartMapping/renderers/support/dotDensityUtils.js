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

define(["require","exports"],(function(r,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.roundValue=void 0,e.roundValue=function(r,e){void 0===e&&(e=5);var a=Math.round(r);if(a<=1)return 1;for(var t=a.toString().length,i=t-1>=3?3:t-1;i>=0;i--){var o=Math.pow(10,i),n=Math.floor(r/o)*o,u=Math.ceil(r/o)*o,f=Math.round((n+u)/2),h=Math.abs(r-n)/r*100,M=Math.abs(r-u)/r*100,d=Math.abs(r-f)/r*100,b=Math.min(h,M,d);if(b<=e){if(b===h){a=n;break}if(b===M){a=u;break}if(b===d){a=f;break}}}return a}}));