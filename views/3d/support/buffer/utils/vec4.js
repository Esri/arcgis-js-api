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

define(["require","exports"],(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.copy=function(e,t,d){for(var f=e.typedBuffer,r=e.typedBufferStride,n=t.typedBuffer,u=t.typedBufferStride,o=d?d.count:t.count,c=(d&&d.dstIndex?d.dstIndex:0)*r,i=(d&&d.srcIndex?d.srcIndex:0)*u,p=0;p<o;++p)f[c]=n[i],f[c+1]=n[i+1],f[c+2]=n[i+2],f[c+3]=n[i+3],c+=r,i+=u},t.fill=function(e,t,d,f,r,n){for(var u=e.typedBuffer,o=e.typedBufferStride,c=n?n.count:e.count,i=(n&&n.dstIndex?n.dstIndex:0)*o,p=0;p<c;++p)u[i]=t,u[i+1]=d,u[i+2]=f,u[i+3]=r,i+=o}}));