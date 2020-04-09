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

define(["require","exports","../../../core/Logger","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/vec3f64","./projection","../../../views/3d/support/projectionUtils"],(function(e,r,t,i,a,o,n,c){Object.defineProperty(r,"__esModule",{value:!0});var l=t.getLogger("esri.geometry.support.meshUtils.centerAt");r.centerAt=function(e,r,t){if(e.vertexAttributes&&e.vertexAttributes.position){var a=e.spatialReference,o=a.isWGS84||a.isWebMercator&&(!t||!1!==t.geographic),E=t&&t.origin||e.extent.center;o?function(e,r,t){var a=e.spatialReference,o=f,E=p;if(!c.pointToVector(r,E,c.SphericalECEFSpatialReference))return void l.error("Failed to project centerAt location (wkid:"+r.spatialReference.wkid+") to ECEF");c.pointToVector(t,o,c.SphericalECEFSpatialReference)||c.pointToVector(e.extent.center,o,c.SphericalECEFSpatialReference);var u=e.vertexAttributes.position,v=e.vertexAttributes.normal,d=new Float64Array(u.length),F=new Float32Array(v?v.length:0);n.projectToECEF(u,a,d),v&&n.projectNormalToECEF(v,u,d,a,F);c.computeLinearTransformation(c.SphericalECEFSpatialReference,o,s,c.SphericalECEFSpatialReference),c.computeLinearTransformation(c.SphericalECEFSpatialReference,E,m,c.SphericalECEFSpatialReference),i.mat4.invert(s,s),i.mat4.multiply(m,m,s),n.transformBufferInPlace(d,m),i.mat4.invert(m,m),i.mat4.transpose(m,m),v&&n.transformBufferInPlace(F,m,!0);n.projectFromECEF(d,u,a),v&&n.projectNormalFromECEF(F,u,d,a,v);e.clearCache()}(e,r,E):function(e,r,t){var i=f,a=p;if(!c.pointToVector(r,a,e.spatialReference))return void l.error("Failed to project centerAt location (wkid:"+r.spatialReference.wkid+") to mesh spatial reference (wkid:"+e.spatialReference.wkid+")");if(!c.pointToVector(t,i,e.spatialReference)){var o=e.extent.center;i[0]=o.x,i[1]=o.y,i[2]=o.z,l.error("Failed to project specified origin (wkid:"+t.spatialReference.wkid+") to mesh spatial reference (wkid:"+e.spatialReference.wkid+"). Using mesh extent.center instead")}(function(e,r,t){if(!e)return;for(var i=0;i<e.length;i+=3)for(var a=0;a<3;a++)e[i+a]+=r[a]-t[a]})(e.vertexAttributes.position,a,i),e.clearCache()}(e,r,E)}};var p=o.vec3f64.create(),f=o.vec3f64.create(),s=a.mat4f64.create(),m=a.mat4f64.create()}));