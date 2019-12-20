// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["require","exports"],function(r,e){function n(r,e,n){void 0===n&&(n=0);for(var i=o(r,0,u),a=0;a<4;a++)e[n+a]=Math.floor(256*t(i*f[a]))}function o(r,e,n){return r<e?e:r>n?n:r}function t(r){return r-Math.floor(r)}Object.defineProperty(e,"__esModule",{value:!0});var f=[1,256,65536,16777216],i=[1/256,1/65536,1/16777216,1/4294967296],u=function(r,e){void 0===e&&(e=0);for(var n=0,o=0;o<4;o++)n+=r[e+o]*i[o];return n}(new Uint8ClampedArray([255,255,255,255]));e.packFloatRGBA=n});