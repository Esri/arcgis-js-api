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

define(["require","exports","../../../core/Logger","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/vec3f64","./projection","../../../views/3d/support/pointUtils","../../../views/3d/support/projectionUtils"],(function(e,t,r,i,a,o,n,c,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.centerAt=void 0;var l=r.getLogger("esri.geometry.support.meshUtils.centerAt");t.centerAt=function(e,t,r){if(e.vertexAttributes&&e.vertexAttributes.position){var a=e.spatialReference,o=a.isWGS84||a.isWebMercator&&(!r||!1!==r.geographic),v=r&&r.origin||e.extent.center;o?function(e,t,r){var a=e.spatialReference,o=f,v=s;if(!c.pointToVector(t,v,p.SphericalECEFSpatialReference))return void l.error("Failed to project centerAt location (wkid:"+t.spatialReference.wkid+") to ECEF");c.pointToVector(r,o,p.SphericalECEFSpatialReference)||c.pointToVector(e.extent.center,o,p.SphericalECEFSpatialReference);var E=e.vertexAttributes.position,d=e.vertexAttributes.normal,F=new Float64Array(E.length),g=new Float32Array(d?d.length:0);n.projectToECEF(E,a,F),d&&n.projectNormalToECEF(d,E,F,a,g);p.computeLinearTransformation(p.SphericalECEFSpatialReference,o,m,p.SphericalECEFSpatialReference),p.computeLinearTransformation(p.SphericalECEFSpatialReference,v,u,p.SphericalECEFSpatialReference),i.mat4.invert(m,m),i.mat4.multiply(u,u,m),n.transformBufferInPlace(F,u),i.mat4.invert(u,u),i.mat4.transpose(u,u),d&&n.transformBufferInPlace(g,u,!0);n.projectFromECEF(F,E,a),d&&n.projectNormalFromECEF(g,E,F,a,d);e.clearCache()}(e,t,v):function(e,t,r){var i=f,a=s;if(!c.pointToVector(t,a,e.spatialReference))return void l.error("Failed to project centerAt location (wkid:"+t.spatialReference.wkid+") to mesh spatial reference (wkid:"+e.spatialReference.wkid+")");if(!c.pointToVector(r,i,e.spatialReference)){var o=e.extent.center;i[0]=o.x,i[1]=o.y,i[2]=o.z,l.error("Failed to project specified origin (wkid:"+r.spatialReference.wkid+") to mesh spatial reference (wkid:"+e.spatialReference.wkid+"). Using mesh extent.center instead")}(function(e,t,r){if(!e)return;for(var i=0;i<e.length;i+=3)for(var a=0;a<3;a++)e[i+a]+=t[a]-r[a]})(e.vertexAttributes.position,a,i),e.clearCache()}(e,t,v)}};var s=o.vec3f64.create(),f=o.vec3f64.create(),m=a.mat4f64.create(),u=a.mat4f64.create()}));