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

define(["require","exports","../../../geometry","../../../core/maybe","../../../core/libs/gl-matrix-2/vec3f64","./projectionUtils"],(function(e,o,t,n,r,i){"use strict";function a(e,o){return f[0]=e.x,f[1]=e.y,f[2]=e.hasZ?e.z:0,i.vectorToWGS84ComparableLonLat(f,e.spatialReference,o)}Object.defineProperty(o,"__esModule",{value:!0}),o.pointToWGS84ComparableLonLatPoint=o.pointToWGS84ComparableLonLat=o.pointToVector=o.pointToPoint=o.vectorToDehydratedPoint=o.vectorToPoint=void 0,o.vectorToPoint=function(e,o,r,a){return a=n.isSome(a)?a:new t.Point({spatialReference:r}),i.bufferToBuffer(e,o,0,f,r,0,1)?(a.x=f[0],a.y=f[1],a.z=f[2],a.spatialReference=r,a):null},o.vectorToDehydratedPoint=function(e,o,t,r){return n.isNone(r)&&(r=t.spatialReference),i.bufferToBuffer(e,o,0,f,r,0,1)?(t.x=f[0],t.y=f[1],t.z=f[2],t.spatialReference=r,t):null},o.pointToPoint=function(e,o,t,n){void 0===t&&(t=o.spatialReference),void 0===n&&(n=0),f[0]=e.x,f[1]=e.y;var r=e.z;return f[2]=void 0!==r?r:n,!!i.bufferToBuffer(f,e.spatialReference,0,f,t,0,1)&&(o.x=f[0],o.y=f[1],o.spatialReference=t,void 0!==r?(o.z=f[2],o.hasZ=!0):(o.z=void 0,o.hasZ=!1),!0)},o.pointToVector=function(e,o,t,n){void 0===n&&(n=0),f[0]=e.x,f[1]=e.y;var r=e.z;return f[2]=void 0!==r?r:n,i.bufferToBuffer(f,e.spatialReference,0,o,t,0,1)},o.pointToWGS84ComparableLonLat=a,o.pointToWGS84ComparableLonLatPoint=function(e,o){return!!a(e,f)&&(o.x=f[0],o.y=f[1],o.z=f[2],!0)};var f=r.vec3f64.create()}));