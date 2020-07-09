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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(e,r){function o(e,r,o){for(var n=0;n<o;++n)r[2*n]=e[n],r[2*n+1]=e[n]-r[2*n]}Object.defineProperty(r,"__esModule",{value:!0}),r.encodeDouble=function(e,r){a[0]=e,a[1]=e-a[0],r[0]=a[0],r[1]=a[1]},r.encodeDoubleArray=o,r.decodeDoubleArray=function(e,r,o){for(var n=0;n<o;++n)r[n]=e[2*n]+e[2*n+1]},r.encodeDoubleArraySplit=function(e,r,u,t){for(var c=0;c<t;++c)n[0]=e[c],o(n,a,1),r[c]=a[0],u[c]=a[1]};var n=new Float64Array(1),a=new Float32Array(2)}));