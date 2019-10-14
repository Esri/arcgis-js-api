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

define(["require","exports"],function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var v=[1,256,65536,16777216],n=[1/256,1/65536,1/16777216,1/4294967296],d=function(r,e){void 0===e&&(e=0);for(var o=0,a=0;a<4;a++)o+=r[e+a]*n[a];return o}(new Uint8ClampedArray([255,255,255,255]));e.packFloatRGBA=function(r,e,o){void 0===o&&(o=0);for(var a,n=(f=r,i=0,u=d,f<i?i:u<f?u:f),t=0;t<4;t++)e[o+t]=Math.floor(256*((a=n*v[t])-Math.floor(a)));var f,i,u}});