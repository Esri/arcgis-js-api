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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../../core/libs/gl-matrix-2/gl-matrix","./viewUtils"],function(e,t,n,r){function c(e){switch(e){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}function o(e,t,n){return e.projectPoint(t,P),!(P[2]<0||P[2]>1)&&(n[0]=P[0],n[1]=P[1],p(e,n),!0)}function a(e,t,n){var r=o(n,t,L);return r&&e.updatePosition(L,null),r}function i(e,t,c,o,a,i){if(!t)return!1;r.screenSpaceTangent(t.start,t.end,b,e),n.vec2.set(m,-b[1],b[0]);var s=!1;switch(o){case"top":s=m[1]<0;break;case"bottom":s=m[1]>0;break;case"left":s=m[0]>0;break;case"right":s=m[0]<0}if(s&&n.vec2.negate(m,m),0===n.vec2.length(m))switch(o){case"top":m[1]=1;break;case"bottom":m[1]=-1;break;case"left":m[0]=-1;break;case"right":m[0]=1}return e.projectPoint(t.origin,P),!(P[2]<0||P[2]>1)&&(a[0]=P[0],a[1]=P[1],n.vec2.scale(i,m,c),n.vec2.add(i,i,a),p(e,a),p(e,i),!0)}function s(e,t,n,r,c){var o=i(c,t,n,r,L,j);return o&&e.updatePosition(L,j),o}function u(e,t,c,o,a,i){return!(!t||!c)&&(r.screenSpaceTangent(t.end,t.start,b,e),r.screenSpaceTangent(c.start,c.end,d,e),n.vec2.add(m,b,d),n.vec2.negate(m,m),n.vec2.normalize(m,m),e.projectPoint(t.end,P),!(P[2]<0||P[2]>1)&&(a[0]=P[0],a[1]=P[1],n.vec2.scale(i,m,o),n.vec2.add(i,i,a),p(e,a),p(e,i),!0))}function v(e,t,r,c,o,a){return e.projectPoint(t,P),n.vec3.add(h,t,r),e.projectPoint(h,g),!(P[2]<0||P[2]>1||g[2]<0||g[2]>1)&&(n.vec2.subtract(m,g,P),n.vec2.normalize(m,m),n.vec2.copy(o,P),n.vec2.scale(a,m,c),n.vec2.add(a,a,o),p(e,o),p(e,a),!0)}function l(e,t,n,r,c){var o=u(c,t,n,r,L,j);return o&&e.updatePosition(L,j),o}function f(e,t,n,r,c,o){var a=v(o,t,n,r,L,j);return a&&e.updatePosition(L,j),a}function p(e,t){t[1]=e.fullHeight-t[1]}Object.defineProperty(t,"__esModule",{value:!0}),t.mirrorPosition=c,t.computeLabelPositionFromPoint=o,t.positionLabelOnPoint=a,t.computeLabelPositionFromSegment=i,t.positionLabelOnSegment=s,t.computeLabelPositionFromCorner=u,t.computeLabelPositionFromPlane=v,t.positionLabelOnCorner=l,t.positionLabelOnPlane=f;var b=n.vec2f64.create(),d=n.vec2f64.create(),m=n.vec2f64.create(),P=n.vec3f64.create(),g=n.vec3f64.create(),h=n.vec3f64.create(),L=n.vec2f64.create(),j=n.vec2f64.create()});