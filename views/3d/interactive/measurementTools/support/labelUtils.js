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

define(["require","exports","../../../../../core/screenUtils","../../../../../core/libs/gl-matrix-2/vec2","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","./viewUtils"],function(e,r,t,n,o,c,a){function i(e){switch(e){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}function s(e,r,t){return e.projectPoint(r,g),!(g[2]<0||g[2]>1)&&(e.renderToScreen(g,t),!0)}function u(e,r,t){var n=s(t,r,y);return n&&e.updatePosition(y,null),n}function l(e,r,t,o,c,i){if(!r)return!1;a.screenSpaceTangent(r.start,r.end,f,e),n.vec2.set(S,-f[1],f[0]);var s=!1;switch(o){case"top":s=S[1]<0;break;case"bottom":s=S[1]>0;break;case"left":s=S[0]>0;break;case"right":s=S[0]<0}if(s&&n.vec2.negate(S,S),0===n.vec2.length(S))switch(o){case"top":S[1]=1;break;case"bottom":S[1]=-1;break;case"left":S[0]=-1;break;case"right":S[0]=1}return e.projectPoint(r.origin,g),!(g[2]<0||g[2]>1)&&(e.renderToScreen(g,c),n.vec2.scale(S,S,t*e.pixelRatio),n.vec2.add(S,S,g),e.renderToScreen(S,i),!0)}function d(e,r,t,n,o){var c=l(o,r,t,n,y,L);return c&&e.updatePosition(y,L),c}function p(e,r,t,o,c,i){return!(!r||!t)&&(a.screenSpaceTangent(r.end,r.start,f,e),a.screenSpaceTangent(t.start,t.end,m,e),n.vec2.add(S,f,m),n.vec2.negate(S,S),n.vec2.normalize(S,S),e.projectPoint(r.end,g),!(g[2]<0||g[2]>1)&&(e.renderToScreen(g,c),n.vec2.scale(S,S,o*e.pixelRatio),n.vec2.add(S,S,g),e.renderToScreen(S,i),!0))}function v(e,r,t,c,a,i){return e.projectPoint(r,g),o.vec3.add(h,r,t),e.projectPoint(h,T),!(g[2]<0||g[2]>1||T[2]<0||T[2]>1)&&(n.vec2.subtract(S,T,g),n.vec2.normalize(S,S),e.renderToScreen(g,a),n.vec2.scale(S,S,c*e.pixelRatio),n.vec2.add(S,S,g),e.renderToScreen(S,i),!0)}function P(e,r,t,n,o){var c=p(o,r,t,n,y,L);return c&&e.updatePosition(y,L),c}function b(e,r,t,n,o,c){var a=v(c,r,t,n,y,L);return a&&e.updatePosition(y,L),a}Object.defineProperty(r,"__esModule",{value:!0}),r.mirrorPosition=i,r.computeLabelPositionFromPoint=s,r.positionLabelOnPoint=u,r.computeLabelPositionFromSegment=l,r.positionLabelOnSegment=d,r.computeLabelPositionFromCorner=p,r.computeLabelPositionFromPlane=v,r.positionLabelOnCorner=P,r.positionLabelOnPlane=b;var f=t.createRenderScreenPointArray(),m=t.createRenderScreenPointArray(),S=t.createRenderScreenPointArray(),g=t.createRenderScreenPointArray3(),T=t.createRenderScreenPointArray3(),h=c.vec3f64.create(),y=t.createScreenPointArray(),L=t.createScreenPointArray()});