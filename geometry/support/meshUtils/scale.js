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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/Logger","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","./projection","../../../views/3d/support/projectionUtils"],function(e,t,r,o,i,a,c){function n(e,t,r){if(e.vertexAttributes&&e.vertexAttributes.position){var o=e.spatialReference,i=o.isWGS84||o.isWebMercator&&(!r||!1!==r.geographic),a=r&&r.origin||e.extent.center;i?s(e,t,a):l(e,t,a)}}function s(e,t,r){var o=e.spatialReference,i=u;c.pointToVector(r,i,c.SphericalECEFSpatialReference)||c.pointToVector(e.extent.center,i,c.SphericalECEFSpatialReference);var n=e.vertexAttributes.position,s=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,f=new Float64Array(n.length),v=new Float32Array(s?s.length:0),g=new Float32Array(l?l.length:0);a.projectToECEF(n,o,f),s&&a.projectNormalToECEF(s,n,f,o,v),l&&a.projectTangentToECEF(l,n,f,o,g),p(f,t,i),a.projectFromECEF(f,n,o),s&&a.projectNormalFromECEF(v,n,f,o,s),l&&a.projectTangentFromECEF(g,n,f,o,l),e.clearCache()}function l(e,t,r){var o=u;if(!c.pointToVector(r,o,e.spatialReference)){var i=e.extent.center;o[0]=i.x,o[1]=i.y,o[2]=i.z,f.error("Failed to project specified origin (wkid:"+r.spatialReference.wkid+") to mesh spatial reference (wkid:"+e.spatialReference.wkid+"). Using mesh extent.center instead")}p(e.vertexAttributes.position,t,o),e.clearCache()}function p(e,t,r){if(void 0===r&&(r=g),e)for(var i=0;i<e.length;i+=3){for(var a=0;a<3;a++)v[a]=e[i+a]-r[a];o.vec3.scale(v,v,t);for(var a=0;a<3;a++)e[i+a]=v[a]+r[a]}}Object.defineProperty(t,"__esModule",{value:!0});var f=r.getLogger("esri.geometry.support.meshUtils.scale");t.scale=n;var v=i.vec3f64.create(),g=i.vec3f64.create(),u=i.vec3f64.create()});