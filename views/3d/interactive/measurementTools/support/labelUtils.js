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

define(["require","exports","../../../../../core/screenUtils","../../../../../core/libs/gl-matrix-2/vec2","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","./viewUtils"],(function(e,r,t,n,o,c,a){function i(e,r,t){return e.projectPoint(r,v),!(v[2]<0||v[2]>1)&&(e.renderToScreen(v,t),!0)}function s(e,r,t,o,c,i){if(!r)return!1;a.screenSpaceTangent(r.start,r.end,u,e),n.vec2.set(p,-u[1],u[0]);var s=!1;switch(o){case"top":s=p[1]<0;break;case"bottom":s=p[1]>0;break;case"left":s=p[0]>0;break;case"right":s=p[0]<0}if(s&&n.vec2.negate(p,p),0===n.vec2.length(p))switch(o){case"top":p[1]=1;break;case"bottom":p[1]=-1;break;case"left":p[0]=-1;break;case"right":p[0]=1}return e.projectPoint(r.origin,v),!(v[2]<0||v[2]>1)&&(e.renderToScreen(v,c),n.vec2.scale(p,p,t*e.pixelRatio),n.vec2.add(p,p,v),e.renderToScreen(p,i),!0)}function l(e,r,t,o,c,i){return!(!r||!t)&&(a.screenSpaceTangent(r.end,r.start,u,e),a.screenSpaceTangent(t.start,t.end,d,e),n.vec2.add(p,u,d),n.vec2.negate(p,p),n.vec2.normalize(p,p),e.projectPoint(r.end,v),!(v[2]<0||v[2]>1)&&(e.renderToScreen(v,c),n.vec2.scale(p,p,o*e.pixelRatio),n.vec2.add(p,p,v),e.renderToScreen(p,i),!0))}Object.defineProperty(r,"__esModule",{value:!0}),r.mirrorPosition=function(e){switch(e){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}},r.computeLabelPositionFromPoint=i,r.positionLabelOnPoint=function(e,r,t){var n=i(t,r,m);return n&&e.updatePosition(m,null),n},r.computeLabelPositionFromSegment=s,r.positionLabelOnSegment=function(e,r,t,n,o){var c=s(o,r,t,n,m,f);return c&&e.updatePosition(m,f),c},r.computeLabelPositionFromCorner=l,r.computeLabelPositionFromPlane=function(e,r,t,c,a,i){return e.projectPoint(r,v),o.vec3.add(b,r,t),e.projectPoint(b,P),!(v[2]<0||v[2]>1||P[2]<0||P[2]>1)&&(n.vec2.subtract(p,P,v),n.vec2.normalize(p,p),e.renderToScreen(v,a),n.vec2.scale(p,p,c*e.pixelRatio),n.vec2.add(p,p,v),e.renderToScreen(p,i),!0)},r.positionLabelOnCorner=function(e,r,t,n,o){var c=l(o,r,t,n,m,f);return c&&e.updatePosition(m,f),c};var u=t.createRenderScreenPointArray(),d=t.createRenderScreenPointArray(),p=t.createRenderScreenPointArray(),v=t.createRenderScreenPointArray3(),P=t.createRenderScreenPointArray3(),b=c.vec3f64.create(),m=t.createScreenPointArray(),f=t.createScreenPointArray()}));