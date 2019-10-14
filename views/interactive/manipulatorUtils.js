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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/libs/gl-matrix-2/mat4","../../core/libs/gl-matrix-2/vec3","../3d/support/stack","../3d/webgl-engine/lib/Geometry","../3d/webgl-engine/lib/GeometryUtil","../3d/webgl-engine/materials/DefaultMaterial","./Manipulator3D"],function(e,t,a,r,n,i,c,o,l){function s(e,t){var a=1!==t,r=new o({diffuse:e,transparent:a,writeDepth:!a,cullFace:"back",opacity:t,castShadows:!1,softwareInstanced:!0},"manipulator");return r.renderOccluded=4,r}function u(e,t,a){return new l.Manipulator3D({view:e,renderObjects:[{geometry:new i(c.createSphereGeometry(1,32,32),"manipulator"),material:s(t,a)}]})}function d(e,t,i,c){var o=r.vec3.subtract(n.sv3d.get(),e,i),l=r.vec3.cross(n.sv3d.get(),c,o),s=v(o,l,i,n.sm4d.get());a.mat4.invert(s,s);var u=r.vec3.transformMat4(n.sv3d.get(),t,s);return Math.atan2(u[1],u[0])}function v(e,t,a,i){var c=r.vec3.normalize(n.sv3d.get(),e),o=r.vec3.normalize(n.sv3d.get(),t),l=r.vec3.cross(n.sv3d.get(),c,o);return i[0]=c[0],i[1]=c[1],i[2]=c[2],i[3]=0,i[4]=o[0],i[5]=o[1],i[6]=o[2],i[7]=0,i[8]=l[0],i[9]=l[1],i[10]=l[2],i[11]=0,i[12]=a[0],i[13]=a[1],i[14]=a[2],i[15]=1,i}Object.defineProperty(t,"__esModule",{value:!0}),t.createManipulatorMaterial=s,t.createSphereManipulator=u,t.calculateInputRotationTransform=d,t.calculateTranslateRotateFromBases=v});