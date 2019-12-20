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

define(["require","exports"],function(n,e){function t(n,e,t){n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2]}function o(n,e,t){n[0]=e[0]-t[0],n[1]=e[1]-t[1],n[2]=e[2]-t[2]}function c(n,e,t){n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t}function i(n,e){var t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2];t>0&&(t=1/Math.sqrt(t),n[0]=e[0]*t,n[1]=e[1]*t,n[2]=e[2]*t)}function r(n,e,t){n[0]=e[1]*t[2]-e[2]*t[1],n[1]=e[2]*t[0]-e[0]*t[2],n[2]=e[0]*t[1]-e[1]*t[0]}Object.defineProperty(e,"__esModule",{value:!0}),e.add=t,e.subtract=o,e.scale=c,e.normalize=i,e.cross=r});