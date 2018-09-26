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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","./viewUtils","../../../lib/gl-matrix"],function(e,t,n,r){function c(e){switch(e){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}function o(e,t,n){return e.projectPoint(t,m),!(m[2]<0||m[2]>1)&&(n[0]=m[0],n[1]=m[1],p(e,n),!0)}function a(e,t,n){var r=o(n,t,L);return r&&e.updatePosition(L,null),r}function i(e,t,c,o,a,i){if(!t)return!1;n.screenSpaceTangent(t.start,t.end,b,e),r.vec2d.set2(-b[1],b[0],P);var d=!1;switch(o){case"top":d=P[1]<0;break;case"bottom":d=P[1]>0;break;case"left":d=P[0]>0;break;case"right":d=P[0]<0}if(d&&r.vec2d.negate(P),0===r.vec2d.length(P))switch(o){case"top":P[1]=1;break;case"bottom":P[1]=-1;break;case"left":P[0]=-1;break;case"right":P[0]=1}return e.projectPoint(t.origin,m),!(m[2]<0||m[2]>1)&&(a[0]=m[0],a[1]=m[1],r.vec2d.scale(P,c,i),r.vec2d.add(i,a,i),p(e,a),p(e,i),!0)}function d(e,t,n,r,c){var o=i(c,t,n,r,L,j);return o&&e.updatePosition(L,j),o}function s(e,t,c,o,a,i){return!(!t||!c)&&(n.screenSpaceTangent(t.end,t.start,b,e),n.screenSpaceTangent(c.start,c.end,f,e),r.vec2d.add(b,f,P),r.vec2d.negate(P),r.vec2d.normalize(P),e.projectPoint(t.end,m),!(m[2]<0||m[2]>1)&&(a[0]=m[0],a[1]=m[1],r.vec2d.scale(P,o,i),r.vec2d.add(i,a,i),p(e,a),p(e,i),!0))}function u(e,t,n,c,o,a){return e.projectPoint(t,m),r.vec3d.add(t,n,h),e.projectPoint(h,g),!(m[2]<0||m[2]>1||g[2]<0||g[2]>1)&&(r.vec2d.subtract(g,m,P),r.vec2d.normalize(P),r.vec2d.set(m,o),r.vec2d.scale(P,c,a),r.vec2d.add(a,o,a),p(e,o),p(e,a),!0)}function v(e,t,n,r,c){var o=s(c,t,n,r,L,j);return o&&e.updatePosition(L,j),o}function l(e,t,n,r,c,o){var a=u(o,t,n,r,L,j);return a&&e.updatePosition(L,j),a}function p(e,t){t[1]=e.fullHeight-t[1]}Object.defineProperty(t,"__esModule",{value:!0}),t.mirrorPosition=c,t.computeLabelPositionFromPoint=o,t.positionLabelOnPoint=a,t.computeLabelPositionFromSegment=i,t.positionLabelOnSegment=d,t.computeLabelPositionFromCorner=s,t.computeLabelPositionFromPlane=u,t.positionLabelOnCorner=v,t.positionLabelOnPlane=l;var b=r.vec2d.create(),f=r.vec2d.create(),P=r.vec2d.create(),m=r.vec3d.create(),g=r.vec3d.create(),h=r.vec3d.create(),L=r.vec2d.create(),j=r.vec2d.create()});