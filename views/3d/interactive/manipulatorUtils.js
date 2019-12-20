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

define(["require","exports","../../../core/maybe","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/vec3","../../../layers/graphics/dehydratedFeatures","../layers/graphics/graphicUtils","../support/stack","../webgl-engine/lib/Geometry","../webgl-engine/lib/GeometryUtil","../webgl-engine/materials/DefaultMaterial","../../interactive/Manipulator3D"],function(e,t,a,r,i,n,o,c,l,s,u,m){function p(e,t){var a=1!==t,r=new u({diffuse:e,transparent:a,writeDepth:!a,cullFace:2,opacity:t,castShadows:!1,softwareInstanced:!0},"manipulator");return r.renderOccluded=4,r}function v(e,t,a){return new m.Manipulator3D({view:e,renderObjects:[{geometry:new l(s.createSphereGeometry(1,32,32),"manipulator"),material:p(t,a)}]})}function g(e,t,a,n){var o=i.vec3.subtract(c.sv3d.get(),e,a),l=i.vec3.cross(c.sv3d.get(),n,o),s=d(o,l,a,c.sm4d.get());r.mat4.invert(s,s);var u=i.vec3.transformMat4(c.sv3d.get(),t,s);return Math.atan2(u[1],u[0])}function d(e,t,a,r){var n=i.vec3.normalize(c.sv3d.get(),e),o=i.vec3.normalize(c.sv3d.get(),t),l=i.vec3.cross(c.sv3d.get(),n,o);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=0,r[4]=o[0],r[5]=o[1],r[6]=o[2],r[7]=0,r[8]=l[0],r[9]=l[1],r[10]=l[2],r[11]=0,r[12]=a[0],r[13]=a[1],r[14]=a[2],r[15]=1,r}function f(e,t){var r=e.view.getViewForGraphic(t),i=a.isSome(r)&&"computeAttachmentOrigin"in r?r.computeAttachmentOrigin(t,e.view.spatialReference):null;a.isSome(i)?e.elevationAlignedLocation=i:h(e,t.geometry)}function h(e,t){if(!a.isNone(t)){var r=o.computeCentroid(t);a.isNone(r)||(e.location=n.hydrateGeometry(r))}}Object.defineProperty(t,"__esModule",{value:!0}),t.createManipulatorMaterial=p,t.createSphereManipulator=v,t.calculateInputRotationTransform=g,t.calculateTranslateRotateFromBases=d,t.placeManipulatorAtGraphic=f});