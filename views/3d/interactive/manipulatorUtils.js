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

define(["require","exports","../../../core/maybe","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec4f64","../../../layers/graphics/hydratedFeatures","./Manipulator3D","../layers/graphics/graphicUtils","../support/stack","../webgl-engine/lib/Geometry","../webgl-engine/lib/GeometryUtil","../webgl-engine/materials/ColorMaterial","../webgl-engine/materials/ShadedColorMaterial"],(function(e,t,r,a,n,i,l,o,c,u,s,m,p,g){"use strict";function v(e,t){void 0===t&&(t=4);var r=i.vec4f64.fromValues(e[0],e[1],e[2],e.length>3?e[3]:1),a=e[3]<1,n=new g.ShadedColorMaterial({color:r,transparent:a,writeDepth:!0,cullFace:2},"manipulator");return n.renderOccluded=t,n}function d(e,t,r,a){var i=n.vec3.normalize(u.sv3d.get(),e),l=n.vec3.normalize(u.sv3d.get(),t),o=n.vec3.cross(u.sv3d.get(),i,l);return a[0]=i[0],a[1]=i[1],a[2]=i[2],a[3]=0,a[4]=l[0],a[5]=l[1],a[6]=l[2],a[7]=0,a[8]=o[0],a[9]=o[1],a[10]=o[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function f(e,t){var a=e.getViewForGraphic(t);return r.isSome(a)&&"computeAttachmentOrigin"in a?a.computeAttachmentOrigin(t,e.spatialReference):null}Object.defineProperty(t,"__esModule",{value:!0}),t.placeAtGraphic=t.getGraphicAttachmentOrigin=t.calculateTranslateRotateFromBases=t.calculateInputRotationTransform=t.createSphereManipulator=t.createManipulatorOutlineMaterial=t.createManipulatorMaterial=void 0,t.createManipulatorMaterial=v,t.createManipulatorOutlineMaterial=function(e,t){void 0===t&&(t=4);var r=i.vec4f64.fromValues(e[0],e[1],e[2],4===e.length?e[3]:1),a=new p({color:r,transparent:!0,writeDepth:!0,cullFace:1},"manipulator-outline");return a.renderOccluded=t,a},t.createSphereManipulator=function(e,t,r){return new o.Manipulator3D({view:e,renderObjects:[{geometry:new s(m.createSphereGeometry(1,32,32),"manipulator"),material:v(i.vec4f64.fromValues(t[0],t[1],t[2],null!=r?r:1))}]})},t.calculateInputRotationTransform=function(e,t,r,i){var l=n.vec3.subtract(u.sv3d.get(),e,r),o=d(l,n.vec3.cross(u.sv3d.get(),i,l),r,u.sm4d.get());a.mat4.invert(o,o);var c=n.vec3.transformMat4(u.sv3d.get(),t,o);return Math.atan2(c[1],c[0])},t.calculateTranslateRotateFromBases=d,t.getGraphicAttachmentOrigin=f,t.placeAtGraphic=function(e,t,a){var n=f(e,a);r.isSome(n)?t.elevationAlignedLocation=n:function(e,t){if(r.isNone(t))return;var a=c.computeCentroid(t);if(r.isNone(a))return;e.location=l.hydrateGeometry(a)}(t,a.geometry)}}));