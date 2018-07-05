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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../../core/lang","../../../lib/glMatrix"],function(e,t,n,r){function c(e,t){var r=n.mixin({},e),c=n.clone(t);return n.mixin(r,c),r}function o(e,t,n,r){for(;e.length<t;)e.push(n());if(r)for(;e.length>t;){var c=e.pop();r(c)}else e.length=t}function i(e,t,n){r.mat4d.identity(n),r.mat4d.translate(n,t),r.vec3d.set3(e,e,e,u),r.mat4d.scale(n,u)}function a(e,t){r.vec3d.set3(0,0,0,t);for(var n=0;n<e.length;++n)r.vec3d.add(t,e[n]);r.vec3d.scale(t,1/e.length)}function d(e,t,n,c){c.projectPoint(e,g),c.projectPoint(t,m),r.vec2d.subtract(m,g,n),r.vec2d.normalize(n)}function s(e,t,n){var c=n._stage.getCamera();n.renderCoordsHelper.toRenderCoords(e,f),c.projectPoint(f,p),r.vec2d.set2(p[0],c.fullHeight-p[1],t)}function l(e,t,n){return s(e,g,n),s(t,m,n),r.vec2d.dist(g,m)}function v(e,t,n){return s(e,p,n),r.vec2d.dist(p,t)}Object.defineProperty(t,"__esModule",{value:!0});var u=r.vec3d.create();t.copyParameter=c,t.resizeArray=o,t.scaleTranslateMatrix=i,t.midpoint=a,t.screenSpaceTangent=d,t.projectPoint=s,t.pointToPointScreenDistance=l,t.pointToScreenPositionDistance=v;var f=r.vec3d.create(),p=r.vec3d.create(),g=r.vec2d.create(),m=r.vec2d.create()});