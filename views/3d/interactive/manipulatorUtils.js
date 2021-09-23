/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../chunks/mat4","../../../chunks/vec3","../../../chunks/vec4f64","../../../geometry/support/vectorStacks","../../../layers/graphics/hydratedFeatures","./Manipulator3D","../layers/graphics/graphicUtils","../webgl-engine/lib/GeometryUtil","../webgl-engine/materials/ColorMaterial","../webgl-engine/materials/ShadedColorMaterial"],(function(e,t,r,n,a,o,c,i,l,s,u,p){"use strict";function d(e,t=4,r=!0){const n=a.fromValues(e[0],e[1],e[2],e.length>3?e[3]:1),o=e[3]<1;return r?new p.ShadedColorMaterial({color:n,transparent:o,writeDepth:!0,cullFace:2,renderOccluded:t}):new u.ColorMaterial({color:n,transparent:o,writeDepth:!0,cullFace:2,renderOccluded:t})}function m(e,t=4){const r=a.fromValues(e[0],e[1],e[2],4===e.length?e[3]:1);return new u.ColorMaterial({color:r,transparent:!0,writeDepth:!0,cullFace:1,renderOccluded:t})}function g(e,t,r){return new i.Manipulator3D({view:e,renderObjects:[{geometry:s.createSphereGeometry(1,32,32),material:d(a.fromValues(t[0],t[1],t[2],null!=r?r:1))}]})}function h(e,t,a,c){const i=n.subtract(o.sv3d.get(),e,a),l=f(i,n.cross(o.sv3d.get(),c,i),a,o.sm4d.get());r.invert(l,l);const s=n.transformMat4(o.sv3d.get(),t,l);return Math.atan2(s[1],s[0])}function f(e,t,r,a){const c=n.normalize(o.sv3d.get(),e),i=n.normalize(o.sv3d.get(),t),l=n.cross(o.sv3d.get(),c,i);return a[0]=c[0],a[1]=c[1],a[2]=c[2],a[3]=0,a[4]=i[0],a[5]=i[1],a[6]=i[2],a[7]=0,a[8]=l[0],a[9]=l[1],a[10]=l[2],a[11]=0,a[12]=r[0],a[13]=r[1],a[14]=r[2],a[15]=1,a}function M(e,r){const n=e.getViewForGraphic(r);return t.isSome(n)&&"computeAttachmentOrigin"in n?n.computeAttachmentOrigin(r,e.spatialReference):null}function v(e,r,n){const a=M(e,n);t.isSome(a)?r.elevationAlignedLocation=a:y(r,n.geometry)}function y(e,r){if(t.isNone(r))return;const n="mesh"===r.type?r.anchor:l.computeCentroid(r);t.isNone(n)||(e.location=c.hydrateGeometry(n))}e.calculateInputRotationTransform=h,e.calculateTranslateRotateFromBases=f,e.createManipulatorMaterial=d,e.createManipulatorOutlineMaterial=m,e.createSphereManipulator=g,e.getGraphicAttachmentOrigin=M,e.placeAtGraphic=v,Object.defineProperty(e,"__esModule",{value:!0})}));
