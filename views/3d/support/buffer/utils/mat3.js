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

define(["require","exports"],(function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.copy=void 0,r.copy=function(e,r,t){for(var d=e.typedBuffer,f=e.typedBufferStride,n=r.typedBuffer,o=r.typedBufferStride,u=t?t.count:r.count,c=(t&&t.dstIndex?t.dstIndex:0)*f,i=(t&&t.srcIndex?t.srcIndex:0)*o,p=0;p<u;++p){for(var s=0;s<9;++s)d[c+s]=n[i+s];c+=f,i+=o}}}));