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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports"],function(e,r){function f(e,r){for(var f=e.typedBuffer,t=e.typedBufferStride,u=r.typedBuffer,d=r.typedBufferStride,n=r.count,o=0;o<n;o++){var p=o*t,y=o*d;f[p]=u[y],f[p+1]=u[y+1],f[p+2]=u[y+2],f[p+3]=u[y+3]}}function t(e,r){for(var f=e.typedBuffer,t=e.typedBufferStride,u=r.typedBuffer,d=r.typedBufferStride,n=r.count,o=0;o<n;o++){var p=o*t,y=o*d;f[p]=u[y],f[p+1]=u[y+1],f[p+2]=u[y+2]}}function u(e,r){for(var f=e.typedBuffer,t=e.typedBufferStride,u=r.typedBuffer,d=r.typedBufferStride,n=r.count,o=0;o<n;o++){var p=o*t,y=o*d;f[p]=u[y],f[p+1]=u[y+1]}}function d(e,r){var f=e.count;r||(r=new e.TypedArrayConstructor(f));for(var t=0;t<f;t++)r[t]=e.get(t);return r}Object.defineProperty(r,"__esModule",{value:!0}),r.unrolledCopyVec4=f,r.unrolledCopyVec3=t,r.unrolledCopyVec2=u,r.makeDenseSingle=d});