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

define(["require","exports","../../../core/libs/gl-matrix-2/mat3","../../../core/libs/gl-matrix-2/mat3f64","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","./projection","../../../views/3d/support/projectionUtils"],(function(e,t,r,o,a,i,n,c,l){"use strict";function s(e,t){if(e)for(var r=0;r<e.length;r+=3)for(var o=0;o<3;o++)e[r+o]+=t[o]}Object.defineProperty(t,"__esModule",{value:!0}),t.offset=void 0,t.offset=function(e,t,o){if(e.vertexAttributes&&e.vertexAttributes.position){var a=e.spatialReference;a.isWGS84||a.isWebMercator&&(!o||!1!==o.geographic)?function(e,t){var o=e.spatialReference,a=e.vertexAttributes.position,n=e.vertexAttributes.normal,v=e.vertexAttributes.tangent,u=new Float64Array(a.length),g=new Float32Array(n?n.length:0),x=new Float32Array(v?v.length:0),E=e.extent.center,b=f;l.computeLinearTransformation(o,[E.x,E.y,E.z],m,l.SphericalECEFSpatialReference),r.mat3.fromMat4(p,m),i.vec3.transformMat3(b,t,p),c.projectToECEF(a,o,u),n&&c.projectNormalToECEF(n,a,u,o,g);v&&c.projectTangentToECEF(v,a,u,o,x);s(u,b),c.projectFromECEF(u,a,o),n&&c.projectNormalFromECEF(g,a,u,o,n);v&&c.projectTangentFromECEF(x,a,u,o,v);e.clearCache()}(e,t):function(e,t){s(e.vertexAttributes.position,t),e.clearCache()}(e,t)}};var f=n.vec3f64.create(),m=a.mat4f64.create(),p=o.mat3f64.create()}));