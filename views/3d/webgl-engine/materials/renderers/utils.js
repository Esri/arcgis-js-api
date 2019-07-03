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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../../core/libs/gl-matrix-2/mat4","../../../../../core/libs/gl-matrix-2/mat4f64","../../lib/ComponentUtils","../../lib/Util","../../../../webgl/Util"],function(e,t,r,n,a,i,s){function l(e){if(e.instanceParameters.hidden)return[];var t=e.instanceParameters.componentVisibilities,r=e.componentOffsets;return a.generateVisibleIndexRanges(t,r)}function o(e){if(e.instanceParameters.hidden)return null;var t=e.instanceParameters.componentVisibilities,r=e.instanceParameters.componentHighlights,n=e.componentOffsets;return a.generateHighlightedIndexRanges(t,r,n)}function c(e){if(e.instanceParameters.hidden)return!1;var t=e.instanceParameters.componentVisibilities,r=e.instanceParameters.componentHighlights,n=e.componentOffsets;return a.hasHighlights(t,r,n)}function d(e){if(e.instanceParameters.hidden)return!0;var t=e.instanceParameters.componentVisibilities,r=e.componentOffsets;return a.isAllHidden(t,r)}function m(e,t,r,n,a){e.drawArrays(t,r,n),a&&(a.drawCalls++,4===t&&(a.triangles+=n))}function g(e,t,r,n,a,i){var l=s.getBytesPerElement(r);e.drawElements(t,a,r,n*l),i&&(i.drawCalls++,4===t&&(i.triangles+=a))}function h(e,t,r,n,a){for(var i=0,s=0,l=t;s<l.length;s++){var o=l[s],c=o[0]+r,d=o[1]-o[0]+1;i+=d,e.drawArrays(n,c,d)}a&&(a.drawCalls+=t.length,4===n&&(a.triangles=i/3))}function u(e,t,r,n,a,i){for(var l=s.getBytesPerElement(a),o=0,c=0,d=t;c<d.length;c++){var m=d[c],g=m[0]+r,h=m[1]-m[0]+1;o+=h,e.drawElements(n,h,a,g*l)}i&&(i.drawCalls+=t.length,4===n&&(i.triangles+=o/3))}function f(e,t){var r=new Map;return r.set(0,t.acquire(e,"color")),r.set(3,t.acquire(e,"depthShadowMap")),r.set(2,t.acquire(e,"normal")),r.set(1,t.acquire(e,"depth")),r.set(4,t.acquire(e,"highlight")),r}function p(e,t){t.release(e.id,"color"),t.release(e.id,"depthShadowMap"),t.release(e.id,"normal"),t.release(e.id,"depth"),t.release(e.id,"highlight")}function v(e,t,n){var a=e.origin.vec3;i.setMatrixTranslation3(w,-a[0],-a[1],-a[2]),r.mat4.multiply(t,w,e.transformation),n&&(r.mat4.invert(n,t),r.mat4.transpose(n,n))}Object.defineProperty(t,"__esModule",{value:!0}),t.generateRenderGeometryVisibleIndexRanges=l,t.generateRenderGeometryHighlightRanges=o,t.doesRenderGeometryHaveHighlights=c,t.isRenderGeometryHidden=d,t.drawArrays=m,t.drawElements=g,t.drawArraysFaceRange=h,t.drawElementsFaceRange=u,t.acquireMaterials=f,t.releaseMaterials=p,t.calculateTransformRelToOrigin=v;var w=n.mat4f64.create()});