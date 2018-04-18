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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/Logger","./projection","../../../views/3d/lib/glMatrix","../../../views/3d/support/projectionUtils"],function(e,r,t,i,a,o){function n(e,r,t){if(e.vertexAttributes&&e.vertexAttributes.position){var i=e.spatialReference,a=i.isWGS84||i.isWebMercator&&(!t||!1!==t.geographic),o=t&&t.origin||e.extent.center;a?c(e,r,o):p(e,r,o)}}function c(e,r,t){var n=e.spatialReference,c=d,p=f;if(!o.pointToVector(r,p,o.SphericalECEFSpatialReference))return void s.error("Failed to project centerAt location (wkid:"+r.spatialReference.wkid+") to ECEF");o.pointToVector(t,c,o.SphericalECEFSpatialReference)||o.pointToVector(e.extent.center,c,o.SphericalECEFSpatialReference);var l=e.vertexAttributes.position,v=e.vertexAttributes.normal,u=new Float64Array(l.length),F=new Float32Array(v?v.length:0);i.projectToECEF(l,n,u),v&&i.projectNormalToECEF(v,l,u,n,F),o.computeLinearTransformation(o.SphericalECEFSpatialReference,c,E,o.SphericalECEFSpatialReference),o.computeLinearTransformation(o.SphericalECEFSpatialReference,p,m,o.SphericalECEFSpatialReference),a.mat4d.inverse(E),a.mat4d.multiply(m,E,m),i.transformBufferInPlace(u,m),a.mat4d.inverse(m),a.mat4d.transpose(m),v&&i.transformBufferInPlace(F,m,!0),i.projectFromECEF(u,l,n),v&&i.projectNormalFromECEF(F,l,u,n,v),e.clearCache()}function p(e,r,t){var i=d,a=f;if(!o.pointToVector(r,a,e.spatialReference))return void s.error("Failed to project centerAt location (wkid:"+r.spatialReference.wkid+") to mesh spatial reference (wkid:"+e.spatialReference.wkid+")");if(!o.pointToVector(t,i,e.spatialReference)){var n=e.extent.center;i[0]=n.x,i[1]=n.y,i[2]=n.z,s.error("Failed to project specified origin (wkid:"+t.spatialReference.wkid+") to mesh spatial reference (wkid:"+e.spatialReference.wkid+"). Using mesh extent.center instead")}l(e.vertexAttributes.position,a,i),e.clearCache()}function l(e,r,t){if(e)for(var i=0;i<e.length;i+=3)for(var a=0;a<3;a++)e[i+a]+=r[a]-t[a]}Object.defineProperty(r,"__esModule",{value:!0});var s=t.getLogger("esri.geometry.support.meshUtils.centerAt");r.centerAt=n;var f=a.vec3d.create(),d=a.vec3d.create(),E=a.mat4d.create(),m=a.mat4d.create()});