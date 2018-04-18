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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./viewUtils","../../../lib/glMatrix"],function(e,t,n,r){function c(e){switch(e){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}function o(e,t,n){return e.projectPoint(t,g),!(g[2]<0||g[2]>1)&&(n[0]=g[0],n[1]=g[1],n[1]=e.height-n[1],!0)}function i(e,t,n){var r=o(n,t,m);return r&&e.updatePosition(m,null),r}function a(e,t,c,o,i,a){if(!t)return!1;n.screenSpaceTangent(t.start,t.end,p,e),r.vec2d.set2(-p[1],p[0],b);var d=!1;switch(o){case"top":d=b[1]<0;break;case"bottom":d=b[1]>0;break;case"left":d=b[0]>0;break;case"right":d=b[0]<0}if(d&&r.vec2d.negate(b),0===r.vec2d.length(b))switch(o){case"top":b[1]=1;break;case"bottom":b[1]=-1;break;case"left":b[0]=-1;break;case"right":b[0]=1}return e.projectPoint(t.origin,g),!(g[2]<0||g[2]>1)&&(i[0]=g[0],i[1]=g[1],r.vec2d.scale(b,c,a),r.vec2d.add(a,i,a),i[1]=e.height-i[1],a[1]=e.height-a[1],!0)}function d(e,t,n,r,c){var o=a(c,t,n,r,m,L);return o&&e.updatePosition(m,L),o}function s(e,t,c,o,i,a){return!(!t||!c)&&(n.screenSpaceTangent(t.end,t.start,p,e),n.screenSpaceTangent(c.start,c.end,h,e),r.vec2d.add(p,h,b),r.vec2d.negate(b),r.vec2d.normalize(b),e.projectPoint(t.end,g),!(g[2]<0||g[2]>1)&&(i[0]=g[0],i[1]=g[1],r.vec2d.scale(b,o,a),r.vec2d.add(a,i,a),i[1]=e.height-i[1],a[1]=e.height-a[1],!0))}function u(e,t,n,c,o,i){return e.projectPoint(t,g),r.vec3d.add(t,n,f),e.projectPoint(f,P),!(g[2]<0||g[2]>1||P[2]<0||P[2]>1)&&(r.vec2d.subtract(P,g,b),r.vec2d.normalize(b),r.vec2d.set(g,o),r.vec2d.scale(b,c,i),r.vec2d.add(i,o,i),o[1]=e.height-o[1],i[1]=e.height-i[1],!0)}function v(e,t,n,r,c){var o=s(c,t,n,r,m,L);return o&&e.updatePosition(m,L),o}function l(e,t,n,r,c,o){var i=u(o,t,n,r,m,L);return i&&e.updatePosition(m,L),i}Object.defineProperty(t,"__esModule",{value:!0}),t.mirrorPosition=c,t.computeLabelPositionFromPoint=o,t.positionLabelOnPoint=i,t.computeLabelPositionFromSegment=a,t.positionLabelOnSegment=d,t.computeLabelPositionFromCorner=s,t.computeLabelPositionFromPlane=u,t.positionLabelOnCorner=v,t.positionLabelOnPlane=l;var p=r.vec2d.create(),h=r.vec2d.create(),b=r.vec2d.create(),g=r.vec3d.create(),P=r.vec3d.create(),f=r.vec3d.create(),m=r.vec2d.create(),L=r.vec2d.create()});