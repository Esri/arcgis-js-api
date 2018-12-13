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

define(["require","exports","../../../core/libs/gl-matrix-2/gl-matrix","./projection","../../../views/3d/support/projectionUtils"],function(e,t,r,o,a){function i(e,t,r){if(e.vertexAttributes&&e.vertexAttributes.position){var o=e.spatialReference;o.isWGS84||o.isWebMercator&&(!r||!1!==r.geographic)?n(e,t):c(e,t)}}function n(e,t){var i=e.spatialReference,n=e.vertexAttributes.position,c=e.vertexAttributes.normal,u=new Float64Array(n.length),m=new Float32Array(c?c.length:0),v=e.extent.center,x=s;a.computeLinearTransformation(i,[v.x,v.y,v.z],l,a.SphericalECEFSpatialReference),r.mat3.fromMat4(p,l),r.vec3.transformMat3(x,t,p),o.projectToECEF(n,i,u),c&&o.projectNormalToECEF(c,n,u,i,m),f(u,x),o.projectFromECEF(u,n,i),c&&o.projectNormalFromECEF(m,n,u,i,c),e.clearCache()}function c(e,t){f(e.vertexAttributes.position,t),e.clearCache()}function f(e,t){if(e)for(var r=0;r<e.length;r+=3)for(var o=0;o<3;o++)e[r+o]+=t[o]}Object.defineProperty(t,"__esModule",{value:!0}),t.offset=i;var s=r.vec3f64.create(),l=r.mat4f64.create(),p=r.mat3f64.create()});