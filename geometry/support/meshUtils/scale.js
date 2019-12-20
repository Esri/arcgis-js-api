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

define(["require","exports","../../../core/Logger","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","./projection","../../../views/3d/support/projectionUtils"],function(e,t,r,o,i,a,n){function c(e,t,r){if(e.vertexAttributes&&e.vertexAttributes.position){var o=e.spatialReference,i=o.isWGS84||o.isWebMercator&&(!r||!1!==r.geographic),a=r&&r.origin||e.extent.center;i?s(e,t,a):l(e,t,a)}}function s(e,t,r){var o=e.spatialReference,i=g;n.pointToVector(r,i,n.SphericalECEFSpatialReference)||n.pointToVector(e.extent.center,i,n.SphericalECEFSpatialReference);var c=e.vertexAttributes.position,s=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,f=new Float64Array(c.length),v=new Float32Array(s?s.length:0),E=new Float32Array(l?l.length:0);a.projectToECEF(c,o,f),s&&a.projectNormalToECEF(s,c,f,o,v),l&&a.projectTangentToECEF(l,c,f,o,E),p(f,t,i),a.projectFromECEF(f,c,o),s&&a.projectNormalFromECEF(v,c,f,o,s),l&&a.projectTangentFromECEF(E,c,f,o,l),e.clearCache()}function l(e,t,r){var o=g;if(!n.pointToVector(r,o,e.spatialReference)){var i=e.extent.center;o[0]=i.x,o[1]=i.y,o[2]=i.z,f.error("Failed to project specified origin (wkid:"+r.spatialReference.wkid+") to mesh spatial reference (wkid:"+e.spatialReference.wkid+"). Using mesh extent.center instead")}p(e.vertexAttributes.position,t,o),e.clearCache()}function p(e,t,r){if(void 0===r&&(r=i.vec3f64.ZEROS),e)for(var a=0;a<e.length;a+=3){for(var n=0;n<3;n++)v[n]=e[a+n]-r[n];o.vec3.scale(v,v,t);for(var n=0;n<3;n++)e[a+n]=v[n]+r[n]}}Object.defineProperty(t,"__esModule",{value:!0});var f=r.getLogger("esri.geometry.support.meshUtils.scale");t.scale=c;var v=i.vec3f64.create(),g=i.vec3f64.create()});