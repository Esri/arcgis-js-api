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

define(["require","exports","../../../../../core/maybe","../../../../../core/libs/gl-matrix-2/mat4","../../../../../core/libs/gl-matrix-2/mat4f64","../../lib/ComponentUtils","../../lib/doublePrecisionUtils","../../lib/Util","../../../../webgl/Util"],(function(e,t,n,r,a,i,s,l,o){Object.defineProperty(t,"__esModule",{value:!0}),t.checkIsHidden=function(e){if(e.instanceParameters.hidden)return!0;var t=e.instanceParameters.componentVisibilities,n=e.componentOffsets;return!!i.generateVisibleIndexRanges(t,n)},t.generateRenderGeometryHighlightRanges=function(e){if(e.instanceParameters.hidden)return null;var t=e.instanceParameters.componentVisibilities,n=e.instanceParameters.componentHighlights,r=e.componentOffsets;return i.generateHighlightedIndexRanges(t,n,r)},t.doesRenderGeometryHaveHighlights=function(e){if(e.instanceParameters.hidden)return!1;var t=e.instanceParameters.componentVisibilities,n=e.instanceParameters.componentHighlights,r=e.componentOffsets;return i.hasHighlights(t,n,r)},t.isRenderGeometryHidden=function(e){if(e.instanceParameters.hidden)return!0;var t=e.instanceParameters.componentVisibilities,n=e.componentOffsets;return i.isAllHidden(t,n)},t.drawArrays=function(e,t,n,r,a){e.drawArrays(t,n,r),a&&(a.drawCalls++,4===t&&(a.triangles+=r))},t.drawElements=function(e,t,n,r,a,i){var s=o.getBytesPerElement(n);e.drawElements(t,a,n,r*s),i&&(i.drawCalls++,4===t&&(i.triangles+=a))},t.drawArraysFaceRange=function(e,t,n,r,a){for(var i=0,s=0,l=t;s<l.length;s++){var o=l[s],c=o[0]+n,m=o[1]-o[0]+1;i+=m,e.drawArrays(r,c,m)}a&&(a.drawCalls+=t.length,4===r&&(a.triangles=i/3))},t.drawElementsFaceRange=function(e,t,n,r,a,i){for(var s=o.getBytesPerElement(a),l=0,c=0,m=t;c<m.length;c++){var d=m[c],g=d[0]+n,u=d[1]-d[0]+1;l+=u,e.drawElements(r,u,a,g*s)}i&&(i.drawCalls+=t.length,4===r&&(i.triangles+=l/3))},t.acquireMaterials=function(e,t){var n=new Map;return n.set(0,t.acquire(e,0)),n.set(3,t.acquire(e,3)),n.set(2,t.acquire(e,2)),n.set(1,t.acquire(e,1)),n.set(4,t.acquire(e,4)),n},t.releaseMaterials=function(e,t){t.release(e,0),t.release(e,3),t.release(e,2),t.release(e,1),t.release(e,4)},t.calculateTransformRelToOrigin=function(e,t,a){var i=e.origin.vec3;l.setMatrixTranslation3(d,-i[0],-i[1],-i[2]),n.isSome(e.transformation)?r.mat4.multiply(t,d,e.transformation):r.mat4.copy(t,d),a&&(r.mat4.invert(a,t),r.mat4.transpose(a,a))},t.encodeDoubleVec3=function(e,t,n,r,a){c[0]=e.get(t,0),c[1]=e.get(t,1),c[2]=e.get(t,2),s.encodeDoubleArray(c,m,3),n.set(a,0,m[0]),r.set(a,0,m[1]),n.set(a,1,m[2]),r.set(a,1,m[3]),n.set(a,2,m[4]),r.set(a,2,m[5])};var c=new Float64Array(3),m=new Float32Array(6),d=a.mat4f64.create()}));