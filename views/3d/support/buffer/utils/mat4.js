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

define(["require","exports"],function(e,r){function d(e,r,d){for(var t=e.typedBuffer,f=e.typedBufferStride,n=r.typedBuffer,u=r.typedBufferStride,o=d?d.count:r.count,c=(d&&d.dstIndex?d.dstIndex:0)*f,i=(d&&d.srcIndex?d.srcIndex:0)*u,p=0;p<o;++p){for(var s=0;s<16;++s)t[c+s]=n[i+s];c+=f,i+=u}}Object.defineProperty(r,"__esModule",{value:!0}),r.copy=d});