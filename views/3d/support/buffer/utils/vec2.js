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

define(["require","exports","../types"],function(e,r,t){function d(e,r,t){for(var d=e.typedBuffer,f=e.typedBufferStride,n=r.typedBuffer,u=r.typedBufferStride,i=t?t.count:r.count,o=(t&&t.dstIndex?t.dstIndex:0)*f,p=(t&&t.srcIndex?t.srcIndex:0)*u,s=0;s<i;++s)d[o]=n[p],d[o+1]=n[p+1],o+=f,p+=u}function f(e,r,f){var n=e.typedBuffer,u=e.typedBufferStride,i=r.typedBuffer,o=r.typedBufferStride,p=f?f.count:r.count,s=(f&&f.dstIndex?f.dstIndex:0)*u,y=(f&&f.srcIndex?f.srcIndex:0)*o;if(t.isInteger(r.elementType)){var a=t.maximumValue(r.elementType);if(t.isSigned(r.elementType))for(var c=0;c<p;++c)n[s]=Math.max(i[y]/a,-1),n[s+1]=Math.max(i[y+1]/a,-1),s+=u,y+=o;else for(var c=0;c<p;++c)n[s]=i[y]/a,n[s+1]=i[y+1]/a,s+=u,y+=o}else d(e,r,f);return e}Object.defineProperty(r,"__esModule",{value:!0}),r.copy=d,r.normalizeIntegerBuffer=f});