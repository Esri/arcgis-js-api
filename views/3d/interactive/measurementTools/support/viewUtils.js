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

define(["require","exports","dojo/_base/lang","../../../../../core/lang","../../../lib/glMatrix"],function(e,t,n,r,c){function o(e,t){var c=n.mixin({},e),o=r.clone(t);return n.mixin(c,o),c}function i(e,t,n,r){for(;e.length<t;)e.push(n());if(r)for(;e.length>t;){var c=e.pop();r(c)}else e.length=t}function a(e,t,n){c.mat4d.identity(n),c.mat4d.translate(n,t),c.vec3d.set3(e,e,e,f),c.mat4d.scale(n,f)}function d(e,t){c.vec3d.set3(0,0,0,t);for(var n=0;n<e.length;++n)c.vec3d.add(t,e[n]);c.vec3d.scale(t,1/e.length)}function s(e,t,n,r){r.projectPoint(e,h),r.projectPoint(t,m),c.vec2d.subtract(m,h,n),c.vec2d.normalize(n)}function v(e,t,n){var r=n._stage.getCamera();return n.renderCoordsHelper.toRenderCoords(e,p),r.projectPoint(p,g),c.vec2d.set2(g[0],n.height-g[1],t),[t[0],n.height-t[1]]}function l(e,t,n){return v(e,h,n),v(t,m,n),c.vec2d.dist(h,m)}function u(e,t,n){return v(e,g,n),c.vec2d.dist(g,t)}Object.defineProperty(t,"__esModule",{value:!0});var f=c.vec3d.create();t.copyParameter=o,t.resizeArray=i,t.scaleTranslateMatrix=a,t.midpoint=d,t.screenSpaceTangent=s,t.projectPoint=v,t.pointToPointScreenDistance=l,t.pointToScreenPositionDistance=u;var p=c.vec3d.create(),g=c.vec3d.create(),h=c.vec2d.create(),m=c.vec2d.create()});