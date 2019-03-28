// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports"],function(e,r){function o(e,r){c[0]=e,c[1]=e-c[0],r[0]=c[0],r[1]=c[1]}function n(e,r,o){for(var n=0;n<o;++n)r[2*n]=e[n],r[2*n+1]=e[n]-r[2*n]}function a(e,r,o){for(var n=0;n<o;++n)r[n]=e[2*n]+e[2*n+1]}function u(e,r,o,a){for(var u=0;u<a;++u)t[0]=e[u],n(t,c,1),r[u]=c[0],o[u]=c[1]}Object.defineProperty(r,"__esModule",{value:!0}),r.encodeDouble=o,r.encodeDoubleArray=n,r.decodeDoubleArray=a,r.encodeDoubleArraySplit=u;var t=new Float64Array(1),c=new Float32Array(2)});