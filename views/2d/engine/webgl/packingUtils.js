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

define(["require","exports"],(function(r,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.packFloatRGBA=void 0;var o=[1,256,65536,16777216],t=[1/256,1/65536,1/16777216,1/4294967296],n=function(r,e){void 0===e&&(e=0);for(var o=0,n=0;n<4;n++)o+=r[e+n]*t[n];return o}(new Uint8ClampedArray([255,255,255,255]));e.packFloatRGBA=function(r,e,t){void 0===t&&(t=0);for(var i,a=function(r,e,o){if(r<e)return e;if(r>o)return o;return r}(r,0,n),f=0;f<4;f++)e[t+f]=Math.floor(256*((i=a*o[f])-Math.floor(i)))}}));