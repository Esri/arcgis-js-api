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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports"],function(e,r){function t(e,r,t){for(var f=Math.min(e.count,r.count),u=e.typedBuffer,d=e.typedBufferStride,n=r.typedBuffer,i=r.typedBufferStride,o=0;o<f;o++){var c=o*d,p=o*i;u[c]=t*n[p],u[c+1]=t*n[p+1],u[c+2]=t*n[p+2],u[c+3]=t*n[p+3]}}Object.defineProperty(r,"__esModule",{value:!0}),r.scale=t});