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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../../core/screenUtils","../../../../../core/libs/gl-matrix-2/vec2","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","./viewUtils"],(function(e,r,t,n,o,i,c){"use strict";function a(e,r,t){return e.projectPoint(r,P),!(P[2]<0||P[2]>1)&&(e.renderToScreen(P,t),!0)}function s(e,r,t,o,i,a){if(!r)return!1;c.screenSpaceTangent(r.start,r.end,u,e),n.vec2.set(d,-u[1],u[0]);var s=!1;switch(o){case"top":s=d[1]<0;break;case"bottom":s=d[1]>0;break;case"left":s=d[0]>0;break;case"right":s=d[0]<0}if(s&&n.vec2.negate(d,d),0===n.vec2.length(d))switch(o){case"top":d[1]=1;break;case"bottom":d[1]=-1;break;case"left":d[0]=-1;break;case"right":d[0]=1}return e.projectPoint(r.origin,P),!(P[2]<0||P[2]>1)&&(e.renderToScreen(P,i),n.vec2.scale(d,d,t*e.pixelRatio),n.vec2.add(d,d,P),e.renderToScreen(d,a),!0)}function l(e,r,t,o,i,a){return!(!r||!t)&&(c.screenSpaceTangent(r.end,r.start,u,e),c.screenSpaceTangent(t.start,t.end,p,e),n.vec2.add(d,u,p),n.vec2.negate(d,d),n.vec2.normalize(d,d),e.projectPoint(r.end,P),!(P[2]<0||P[2]>1)&&(e.renderToScreen(P,i),n.vec2.scale(d,d,o*e.pixelRatio),n.vec2.add(d,d,P),e.renderToScreen(d,a),!0))}Object.defineProperty(r,"__esModule",{value:!0}),r.positionLabelOnCorner=r.computeLabelPositionFromPlane=r.computeLabelPositionFromCorner=r.positionLabelOnSegment=r.computeLabelPositionFromSegment=r.positionLabelOnPoint=r.computeLabelPositionFromPoint=r.mirrorPosition=void 0,r.mirrorPosition=function(e){switch(e){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}},r.computeLabelPositionFromPoint=a,r.positionLabelOnPoint=function(e,r,t){var n=a(t,r,v);return n&&e.updatePosition(v,null),n},r.computeLabelPositionFromSegment=s,r.positionLabelOnSegment=function(e,r,t,n,o){var i=s(o,r,t,n,v,S);return i&&e.updatePosition(v,S),i},r.computeLabelPositionFromCorner=l,r.computeLabelPositionFromPlane=function(e,r,t,i,c,a){return e.projectPoint(r,P),o.vec3.add(b,r,t),e.projectPoint(b,m),!(P[2]<0||P[2]>1||m[2]<0||m[2]>1)&&(n.vec2.subtract(d,m,P),n.vec2.normalize(d,d),e.renderToScreen(P,c),n.vec2.scale(d,d,i*e.pixelRatio),n.vec2.add(d,d,P),e.renderToScreen(d,a),!0)},r.positionLabelOnCorner=function(e,r,t,n,o){var i=l(o,r,t,n,v,S);return i&&e.updatePosition(v,S),i};var u=t.createRenderScreenPointArray(),p=t.createRenderScreenPointArray(),d=t.createRenderScreenPointArray(),P=t.createRenderScreenPointArray3(),m=t.createRenderScreenPointArray3(),b=i.vec3f64.create(),v=t.createScreenPointArray(),S=t.createScreenPointArray()}));