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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../types"],(function(e,r,t){"use strict";function f(e,r,t){for(var f=e.typedBuffer,n=e.typedBufferStride,d=r.typedBuffer,u=r.typedBufferStride,i=t?t.count:r.count,o=(t&&t.dstIndex?t.dstIndex:0)*n,s=(t&&t.srcIndex?t.srcIndex:0)*u,p=0;p<i;++p)f[o]=d[s],f[o+1]=d[s+1],o+=n,s+=u}Object.defineProperty(r,"__esModule",{value:!0}),r.normalizeIntegerBuffer=r.copy=void 0,r.copy=f,r.normalizeIntegerBuffer=function(e,r,n){var d=e.typedBuffer,u=e.typedBufferStride,i=r.typedBuffer,o=r.typedBufferStride,s=n?n.count:r.count,p=(n&&n.dstIndex?n.dstIndex:0)*u,c=(n&&n.srcIndex?n.srcIndex:0)*o;if(t.isInteger(r.elementType)){var y=t.maximumValue(r.elementType);if(t.isSigned(r.elementType))for(var a=0;a<s;++a)d[p]=Math.max(i[c]/y,-1),d[p+1]=Math.max(i[c+1]/y,-1),p+=u,c+=o;else for(a=0;a<s;++a)d[p]=i[c]/y,d[p+1]=i[c+1]/y,p+=u,c+=o}else f(e,r,n);return e}}));