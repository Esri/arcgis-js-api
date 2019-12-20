// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/Logger","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/vec3f64","./projection","../../../views/3d/support/projectionUtils"],function(e,r,t,i,a,o,n,c){function l(e,r,t){if(e.vertexAttributes&&e.vertexAttributes.position){var i=e.spatialReference,a=i.isWGS84||i.isWebMercator&&(!t||!1!==t.geographic),o=t&&t.origin||e.extent.center;a?p(e,r,o):f(e,r,o)}}function p(e,r,t){var a=e.spatialReference,o=v,l=E;if(!c.pointToVector(r,l,c.SphericalECEFSpatialReference))return void m.error("Failed to project centerAt location (wkid:"+r.spatialReference.wkid+") to ECEF");c.pointToVector(t,o,c.SphericalECEFSpatialReference)||c.pointToVector(e.extent.center,o,c.SphericalECEFSpatialReference);var p=e.vertexAttributes.position,f=e.vertexAttributes.normal,s=new Float64Array(p.length),F=new Float32Array(f?f.length:0);n.projectToECEF(p,a,s),f&&n.projectNormalToECEF(f,p,s,a,F),c.computeLinearTransformation(c.SphericalECEFSpatialReference,o,u,c.SphericalECEFSpatialReference),c.computeLinearTransformation(c.SphericalECEFSpatialReference,l,d,c.SphericalECEFSpatialReference),i.mat4.invert(u,u),i.mat4.multiply(d,d,u),n.transformBufferInPlace(s,d),i.mat4.invert(d,d),i.mat4.transpose(d,d),f&&n.transformBufferInPlace(F,d,!0),n.projectFromECEF(s,p,a),f&&n.projectNormalFromECEF(F,p,s,a,f),e.clearCache()}function f(e,r,t){var i=v,a=E;if(!c.pointToVector(r,a,e.spatialReference))return void m.error("Failed to project centerAt location (wkid:"+r.spatialReference.wkid+") to mesh spatial reference (wkid:"+e.spatialReference.wkid+")");if(!c.pointToVector(t,i,e.spatialReference)){var o=e.extent.center;i[0]=o.x,i[1]=o.y,i[2]=o.z,m.error("Failed to project specified origin (wkid:"+t.spatialReference.wkid+") to mesh spatial reference (wkid:"+e.spatialReference.wkid+"). Using mesh extent.center instead")}s(e.vertexAttributes.position,a,i),e.clearCache()}function s(e,r,t){if(e)for(var i=0;i<e.length;i+=3)for(var a=0;a<3;a++)e[i+a]+=r[a]-t[a]}Object.defineProperty(r,"__esModule",{value:!0});var m=t.getLogger("esri.geometry.support.meshUtils.centerAt");r.centerAt=l;var E=o.vec3f64.create(),v=o.vec3f64.create(),u=a.mat4f64.create(),d=a.mat4f64.create()});