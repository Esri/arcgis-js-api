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

define(["require","exports","../../../core/Logger","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","./projection","../../../views/3d/support/projectionUtils"],(function(e,t,r,o,i,a,n){Object.defineProperty(t,"__esModule",{value:!0});var c=r.getLogger("esri.geometry.support.meshUtils.scale");function s(e,t,r){if(void 0===r&&(r=i.vec3f64.ZEROS),e)for(var a=0;a<e.length;a+=3){for(var n=0;n<3;n++)l[n]=e[a+n]-r[n];o.vec3.scale(l,l,t);for(n=0;n<3;n++)e[a+n]=l[n]+r[n]}}t.scale=function(e,t,r){if(e.vertexAttributes&&e.vertexAttributes.position){var o=e.spatialReference,i=o.isWGS84||o.isWebMercator&&(!r||!1!==r.geographic),l=r&&r.origin||e.extent.center;i?function(e,t,r){var o=e.spatialReference,i=p;n.pointToVector(r,i,n.SphericalECEFSpatialReference)||n.pointToVector(e.extent.center,i,n.SphericalECEFSpatialReference);var c=e.vertexAttributes.position,l=e.vertexAttributes.normal,f=e.vertexAttributes.tangent,v=new Float64Array(c.length),g=new Float32Array(l?l.length:0),E=new Float32Array(f?f.length:0);a.projectToECEF(c,o,v),l&&a.projectNormalToECEF(l,c,v,o,g);f&&a.projectTangentToECEF(f,c,v,o,E);s(v,t,i),a.projectFromECEF(v,c,o),l&&a.projectNormalFromECEF(g,c,v,o,l);f&&a.projectTangentFromECEF(E,c,v,o,f);e.clearCache()}(e,t,l):function(e,t,r){var o=p;if(!n.pointToVector(r,o,e.spatialReference)){var i=e.extent.center;o[0]=i.x,o[1]=i.y,o[2]=i.z,c.error("Failed to project specified origin (wkid:"+r.spatialReference.wkid+") to mesh spatial reference (wkid:"+e.spatialReference.wkid+"). Using mesh extent.center instead")}s(e.vertexAttributes.position,t,o),e.clearCache()}(e,t,l)}};var l=i.vec3f64.create(),p=i.vec3f64.create()}));