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

define(["require","exports","../../../../../core/lang","../../../../../core/screenUtils","../../../../../core/libs/gl-matrix-2/mat4","../../../../../core/libs/gl-matrix-2/vec2","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64"],(function(e,r,t,n,c,a,i,o){Object.defineProperty(r,"__esModule",{value:!0});var s=o.vec3f64.create();function l(e,r,t){var c=t._stage.getCamera();t.renderCoordsHelper.toRenderCoords(e,f),c.projectPoint(f,v),n.renderArrayToScreen(t,v,r)}r.copyParameter=function(e,r){var n=t.mixin({},e),c=t.clone(r);return t.mixin(n,c),n},r.resizeArray=function(e,r,t,n){for(;e.length<r;)e.push(t());if(n)for(;e.length>r;){n(e.pop())}else e.length=r},r.scaleTranslateMatrix=function(e,r,t){c.mat4.identity(t),c.mat4.translate(t,t,r),i.vec3.set(s,e,e,e),c.mat4.scale(t,t,s)},r.midpoint=function(e,r){if(i.vec3.set(r,0,0,0),e.length>0){for(var t=0;t<e.length;++t)i.vec3.add(r,r,e[t]);i.vec3.scale(r,r,1/e.length)}},r.screenSpaceTangent=function(e,r,t,n){n.projectPoint(e,d),n.projectPoint(r,p),a.vec2.subtract(t,g,u),a.vec2.normalize(t,t)},r.projectPoint=l,r.pointToPointScreenDistance=function(e,r,t){return l(e,P,t),l(r,y,t),a.vec2.distance(P,y)},r.pointToScreenPositionDistance=function(e,r,t){return l(e,m,t),a.vec2.distance(m,r)};var f=o.vec3f64.create(),v=n.createRenderScreenPointArray3(),d=n.createRenderScreenPointArray3(),u=d,p=n.createRenderScreenPointArray3(),g=p,m=n.createScreenPointArray(),P=n.createScreenPointArray(),y=n.createScreenPointArray()}));