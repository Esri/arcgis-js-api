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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix-2/mat3","../../../core/libs/gl-matrix-2/mat3f64","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","./projection","../../../views/3d/support/projectionUtils"],function(e,t,r,o,a,i,n,c,l){function s(e,t,r){if(e.vertexAttributes&&e.vertexAttributes.position){var o=e.spatialReference;o.isWGS84||o.isWebMercator&&(!r||!1!==r.geographic)?f(e,t):m(e,t)}}function f(e,t){var o=e.spatialReference,a=e.vertexAttributes.position,n=e.vertexAttributes.normal,s=e.vertexAttributes.tangent,f=new Float64Array(a.length),m=new Float32Array(n?n.length:0),x=new Float32Array(s?s.length:0),E=e.extent.center,b=v;l.computeLinearTransformation(o,[E.x,E.y,E.z],u,l.SphericalECEFSpatialReference),r.mat3.fromMat4(g,u),i.vec3.transformMat3(b,t,g),c.projectToECEF(a,o,f),n&&c.projectNormalToECEF(n,a,f,o,m),s&&c.projectTangentToECEF(s,a,f,o,x),p(f,b),c.projectFromECEF(f,a,o),n&&c.projectNormalFromECEF(m,a,f,o,n),s&&c.projectTangentFromECEF(x,a,f,o,s),e.clearCache()}function m(e,t){p(e.vertexAttributes.position,t),e.clearCache()}function p(e,t){if(e)for(var r=0;r<e.length;r+=3)for(var o=0;o<3;o++)e[r+o]+=t[o]}Object.defineProperty(t,"__esModule",{value:!0}),t.offset=s;var v=n.vec3f64.create(),u=a.mat4f64.create(),g=o.mat3f64.create()});