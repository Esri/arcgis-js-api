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

define(["require","exports","./projection","../../../views/3d/lib/gl-matrix","../../../views/3d/support/projectionUtils"],function(e,t,r,o,a){function i(e,t,r){if(e.vertexAttributes&&e.vertexAttributes.position){var o=e.spatialReference;o.isWGS84||o.isWebMercator&&(!r||!1!==r.geographic)?n(e,t):c(e,t)}}function n(e,t){var i=e.spatialReference,n=e.vertexAttributes.position,c=e.vertexAttributes.normal,u=new Float64Array(n.length),v=new Float32Array(c?c.length:0),m=e.extent.center,d=p;a.computeLinearTransformation(i,[m.x,m.y,m.z],s,a.SphericalECEFSpatialReference),o.mat4d.toMat3(s,f),o.mat3d.multiplyVec3(f,t,d),r.projectToECEF(n,i,u),c&&r.projectNormalToECEF(c,n,u,i,v),l(u,d),r.projectFromECEF(u,n,i),c&&r.projectNormalFromECEF(v,n,u,i,c),e.clearCache()}function c(e,t){l(e.vertexAttributes.position,t),e.clearCache()}function l(e,t){if(e)for(var r=0;r<e.length;r+=3)for(var o=0;o<3;o++)e[r+o]+=t[o]}Object.defineProperty(t,"__esModule",{value:!0}),t.offset=i;var p=o.vec3d.create(),s=o.mat4d.create(),f=o.mat3d.create()});