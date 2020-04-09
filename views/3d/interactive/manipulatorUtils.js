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

define(["require","exports","../../../core/maybe","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec4f64","../../../layers/graphics/dehydratedFeatures","../layers/graphics/graphicUtils","../support/stack","../webgl-engine/lib/Geometry","../webgl-engine/lib/GeometryUtil","../webgl-engine/materials/ColorMaterial","../webgl-engine/materials/ShadedColorMaterial","../../interactive/Manipulator3D"],(function(e,r,t,a,n,i,o,l,c,u,s,m,v,g){function p(e,r){void 0===r&&(r=4);var t=i.vec4f64.fromValues(e[0],e[1],e[2],e.length>3?e[3]:1),a=e[3]<1,n=new v.ShadedColorMaterial({color:t,transparent:a,writeDepth:!0,cullFace:2},"manipulator");return n.renderOccluded=r,n}function d(e,r,t,a){var i=n.vec3.normalize(c.sv3d.get(),e),o=n.vec3.normalize(c.sv3d.get(),r),l=n.vec3.cross(c.sv3d.get(),i,o);return a[0]=i[0],a[1]=i[1],a[2]=i[2],a[3]=0,a[4]=o[0],a[5]=o[1],a[6]=o[2],a[7]=0,a[8]=l[0],a[9]=l[1],a[10]=l[2],a[11]=0,a[12]=t[0],a[13]=t[1],a[14]=t[2],a[15]=1,a}function f(e,r){var a=e.getViewForGraphic(r);return t.isSome(a)&&"computeAttachmentOrigin"in a?a.computeAttachmentOrigin(r,e.spatialReference):null}Object.defineProperty(r,"__esModule",{value:!0}),r.createManipulatorMaterial=p,r.createManipulatorOutlineMaterial=function(e,r){void 0===r&&(r=4);var t=i.vec4f64.fromValues(e[0],e[1],e[2],4===e.length?e[3]:1),a=new m({color:t,transparent:!0,writeDepth:!0,cullFace:1},"manipulator-outline");return a.renderOccluded=r,a},r.createSphereManipulator=function(e,r,t){return new g.Manipulator3D({view:e,renderObjects:[{geometry:new u(s.createSphereGeometry(1,32,32),"manipulator"),material:p(i.vec4f64.fromValues(r[0],r[1],r[2],null!=t?t:1))}]})},r.calculateInputRotationTransform=function(e,r,t,i){var o=n.vec3.subtract(c.sv3d.get(),e,t),l=d(o,n.vec3.cross(c.sv3d.get(),i,o),t,c.sm4d.get());a.mat4.invert(l,l);var u=n.vec3.transformMat4(c.sv3d.get(),r,l);return Math.atan2(u[1],u[0])},r.calculateTranslateRotateFromBases=d,r.getGraphicAttachmentOrigin=f,r.placeAtGraphic=function(e,r,a){var n=f(e,a);t.isSome(n)?r.elevationAlignedLocation=n:function(e,r){if(t.isNone(r))return;var a=l.computeCentroid(r);if(t.isNone(a))return;e.location=o.hydrateGeometry(a)}(r,a.geometry)}}));