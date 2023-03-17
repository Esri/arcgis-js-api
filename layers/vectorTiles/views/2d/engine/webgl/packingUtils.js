// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports"],(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var n=[1,256,65536,16777216],o=[1/256,1/65536,1/16777216,1/4294967296],t=function(r,e){void 0===e&&(e=0);for(var n=0,t=0;t<4;t++)n+=r[e+t]*o[t];return n}(new Uint8ClampedArray([255,255,255,255]));e.packFloatRGBA=function(r,e,o){void 0===o&&(o=0);for(var f,i=function(r,e,n){if(r<e)return e;if(r>n)return n;return r}(r,0,t),u=0;u<4;u++)e[o+u]=Math.floor(256*((f=i*n[u])-Math.floor(f)))}}));