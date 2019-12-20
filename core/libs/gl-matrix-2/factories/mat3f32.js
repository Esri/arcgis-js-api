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

define(["require","exports"],function(e,r){function n(){var e=new Float32Array(9);return e[0]=1,e[4]=1,e[8]=1,e}function t(e){var r=new Float32Array(9);return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r}function a(e,r,n,t,a,o,u,c,i){var f=new Float32Array(9);return f[0]=e,f[1]=r,f[2]=n,f[3]=t,f[4]=a,f[5]=o,f[6]=u,f[7]=c,f[8]=i,f}function o(e,r){return new Float32Array(e,r,9)}Object.defineProperty(r,"__esModule",{value:!0}),r.create=n,r.clone=t,r.fromValues=a,r.createView=o});