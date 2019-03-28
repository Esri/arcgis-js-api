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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../../core/lang","../../../../../core/screenUtils","../../../../../core/libs/gl-matrix-2/mat4","../../../../../core/libs/gl-matrix-2/vec2","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64"],function(e,r,t,n,c,a,i,o){function s(e,r){var n=t.mixin({},e),c=t.clone(r);return t.mixin(n,c),n}function l(e,r,t,n){for(;e.length<r;)e.push(t());if(n)for(;e.length>r;){var c=e.pop();n(c)}else e.length=r}function v(e,r,t){c.mat4.identity(t),c.mat4.translate(t,t,r),i.vec3.set(m,e,e,e),c.mat4.scale(t,t,m)}function f(e,r){if(i.vec3.set(r,0,0,0),e.length>0){for(var t=0;t<e.length;++t)i.vec3.add(r,r,e[t]);i.vec3.scale(r,r,1/e.length)}}function d(e,r,t,n){n.projectPoint(e,S),n.projectPoint(r,A),a.vec2.subtract(t,h,x),a.vec2.normalize(t,t)}function u(e,r,t){var c=t._stage.getCamera();t.renderCoordsHelper.toRenderCoords(e,P),c.projectPoint(P,y),n.renderArrayToScreen(t,y,r)}function p(e,r,t){return u(e,j,t),u(r,T,t),a.vec2.distance(j,T)}function g(e,r,t){return u(e,b,t),a.vec2.distance(b,r)}Object.defineProperty(r,"__esModule",{value:!0});var m=o.vec3f64.create();r.copyParameter=s,r.resizeArray=l,r.scaleTranslateMatrix=v,r.midpoint=f,r.screenSpaceTangent=d,r.projectPoint=u,r.pointToPointScreenDistance=p,r.pointToScreenPositionDistance=g;var P=o.vec3f64.create(),y=n.createRenderScreenPointArray3(),S=n.createRenderScreenPointArray3(),x=S,A=n.createRenderScreenPointArray3(),h=A,b=n.createScreenPointArray(),j=n.createScreenPointArray(),T=n.createScreenPointArray()});