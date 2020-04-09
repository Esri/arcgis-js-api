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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../types"],(function(e,t,r){function d(e,t,r){for(var d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,u=t.typedBufferStride,i=r?r.count:t.count,o=(r&&r.dstIndex?r.dstIndex:0)*f,p=(r&&r.srcIndex?r.srcIndex:0)*u,s=0;s<i;++s)d[o]=n[p],d[o+1]=n[p+1],o+=f,p+=u}Object.defineProperty(t,"__esModule",{value:!0}),t.copy=d,t.normalizeIntegerBuffer=function(e,t,f){var n=e.typedBuffer,u=e.typedBufferStride,i=t.typedBuffer,o=t.typedBufferStride,p=f?f.count:t.count,s=(f&&f.dstIndex?f.dstIndex:0)*u,y=(f&&f.srcIndex?f.srcIndex:0)*o;if(r.isInteger(t.elementType)){var c=r.maximumValue(t.elementType);if(r.isSigned(t.elementType))for(var a=0;a<p;++a)n[s]=Math.max(i[y]/c,-1),n[s+1]=Math.max(i[y+1]/c,-1),s+=u,y+=o;else for(a=0;a<p;++a)n[s]=i[y]/c,n[s+1]=i[y+1]/c,s+=u,y+=o}else d(e,t,f);return e}}));