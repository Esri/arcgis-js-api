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

define(["require","exports","../../../core/Logger","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","./projection","../../../views/3d/support/pointUtils","../../../views/3d/support/projectionUtils"],(function(e,t,r,i,o,a,c,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.scale=void 0;var s=r.getLogger("esri.geometry.support.meshUtils.scale");function l(e,t,r){if(void 0===r&&(r=o.vec3f64.ZEROS),e)for(var a=0;a<e.length;a+=3){for(var c=0;c<3;c++)p[c]=e[a+c]-r[c];i.vec3.scale(p,p,t);for(c=0;c<3;c++)e[a+c]=p[c]+r[c]}}t.scale=function(e,t,r){if(e.vertexAttributes&&e.vertexAttributes.position){var i=e.spatialReference,o=i.isWGS84||i.isWebMercator&&(!r||!1!==r.geographic),p=r&&r.origin||e.extent.center;o?function(e,t,r){var i=e.spatialReference,o=f;c.pointToVector(r,o,n.SphericalECEFSpatialReference)||c.pointToVector(e.extent.center,o,n.SphericalECEFSpatialReference);var s=e.vertexAttributes.position,p=e.vertexAttributes.normal,v=e.vertexAttributes.tangent,g=new Float64Array(s.length),u=new Float32Array(p?p.length:0),E=new Float32Array(v?v.length:0);a.projectToECEF(s,i,g),p&&a.projectNormalToECEF(p,s,g,i,u);v&&a.projectTangentToECEF(v,s,g,i,E);l(g,t,o),a.projectFromECEF(g,s,i),p&&a.projectNormalFromECEF(u,s,g,i,p);v&&a.projectTangentFromECEF(E,s,g,i,v);e.clearCache()}(e,t,p):function(e,t,r){var i=f;if(!c.pointToVector(r,i,e.spatialReference)){var o=e.extent.center;i[0]=o.x,i[1]=o.y,i[2]=o.z,s.error("Failed to project specified origin (wkid:"+r.spatialReference.wkid+") to mesh spatial reference (wkid:"+e.spatialReference.wkid+"). Using mesh extent.center instead")}l(e.vertexAttributes.position,t,i),e.clearCache()}(e,t,p)}};var p=o.vec3f64.create(),f=o.vec3f64.create()}));