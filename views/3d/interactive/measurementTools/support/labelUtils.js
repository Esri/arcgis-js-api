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

define(["require","exports","../../../../../core/screenUtils","../../../../../core/libs/gl-matrix-2/vec2","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","./viewUtils"],function(e,r,t,n,o,c,a){function i(e){switch(e){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}function s(e,r,t){return e.projectPoint(r,S),!(S[2]<0||S[2]>1)&&(e.renderToScreen(S,t),!0)}function l(e,r,t){var n=s(t,r,h);return n&&e.updatePosition(h,null),n}function u(e,r,t,o,c,i){if(!r)return!1;a.screenSpaceTangent(r.start,r.end,b,e),n.vec2.set(f,-b[1],b[0]);var s=!1;switch(o){case"top":s=f[1]<0;break;case"bottom":s=f[1]>0;break;case"left":s=f[0]>0;break;case"right":s=f[0]<0}if(s&&n.vec2.negate(f,f),0===n.vec2.length(f))switch(o){case"top":f[1]=1;break;case"bottom":f[1]=-1;break;case"left":f[0]=-1;break;case"right":f[0]=1}return e.projectPoint(r.origin,S),!(S[2]<0||S[2]>1)&&(e.renderToScreen(S,c),n.vec2.scale(f,f,t*e.pixelRatio),n.vec2.add(f,f,S),e.renderToScreen(f,i),!0)}function d(e,r,t,n,o){var c=u(o,r,t,n,h,y);return c&&e.updatePosition(h,y),c}function p(e,r,t,o,c,i){return!(!r||!t)&&(a.screenSpaceTangent(r.end,r.start,b,e),a.screenSpaceTangent(t.start,t.end,m,e),n.vec2.add(f,b,m),n.vec2.negate(f,f),n.vec2.normalize(f,f),e.projectPoint(r.end,S),!(S[2]<0||S[2]>1)&&(e.renderToScreen(S,c),n.vec2.scale(f,f,o*e.pixelRatio),n.vec2.add(f,f,S),e.renderToScreen(f,i),!0))}function v(e,r,t,c,a,i){return e.projectPoint(r,S),o.vec3.add(T,r,t),e.projectPoint(T,g),!(S[2]<0||S[2]>1||g[2]<0||g[2]>1)&&(n.vec2.subtract(f,g,S),n.vec2.normalize(f,f),e.renderToScreen(S,a),n.vec2.scale(f,f,c*e.pixelRatio),n.vec2.add(f,f,S),e.renderToScreen(f,i),!0)}function P(e,r,t,n,o){var c=p(o,r,t,n,h,y);return c&&e.updatePosition(h,y),c}Object.defineProperty(r,"__esModule",{value:!0}),r.mirrorPosition=i,r.computeLabelPositionFromPoint=s,r.positionLabelOnPoint=l,r.computeLabelPositionFromSegment=u,r.positionLabelOnSegment=d,r.computeLabelPositionFromCorner=p,r.computeLabelPositionFromPlane=v,r.positionLabelOnCorner=P;var b=t.createRenderScreenPointArray(),m=t.createRenderScreenPointArray(),f=t.createRenderScreenPointArray(),S=t.createRenderScreenPointArray3(),g=t.createRenderScreenPointArray3(),T=c.vec3f64.create(),h=t.createScreenPointArray(),y=t.createScreenPointArray()});