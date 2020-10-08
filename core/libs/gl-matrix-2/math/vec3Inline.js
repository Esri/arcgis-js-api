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

define(["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cross=t.normalize=t.scale=t.subtract=t.add=void 0,t.add=function(e,t,n){e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2]},t.subtract=function(e,t,n){e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2]},t.scale=function(e,t,n){e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n},t.normalize=function(e,t){var n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];n>0&&(n=1/Math.sqrt(n),e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n)},t.cross=function(e,t,n){e[0]=t[1]*n[2]-t[2]*n[1],e[1]=t[2]*n[0]-t[0]*n[2],e[2]=t[0]*n[1]-t[1]*n[0]}}));