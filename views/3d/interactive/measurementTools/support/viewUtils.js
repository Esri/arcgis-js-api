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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../../core/lang","../../../../../core/libs/gl-matrix-2/gl-matrix"],function(e,t,n,r){function c(e,t){var r=n.mixin({},e),c=n.clone(t);return n.mixin(r,c),r}function i(e,t,n,r){for(;e.length<t;)e.push(n());if(r)for(;e.length>t;){var c=e.pop();r(c)}else e.length=t}function o(e,t,n){r.mat4.identity(n),r.mat4.translate(n,n,t),r.vec3.set(u,e,e,e),r.mat4.scale(n,n,u)}function a(e,t){if(r.vec3.set(t,0,0,0),e.length>0){for(var n=0;n<e.length;++n)r.vec3.add(t,t,e[n]);r.vec3.scale(t,t,1/e.length)}}function s(e,t,n,c){c.projectPoint(e,g),c.projectPoint(t,m),r.vec2.subtract(n,m,g),r.vec2.normalize(n,n)}function l(e,t,n){var c=n._stage.getCamera();n.renderCoordsHelper.toRenderCoords(e,p),c.projectPoint(p,d),r.vec2.set(t,d[0],c.fullHeight-d[1])}function f(e,t,n){return l(e,g,n),l(t,m,n),r.vec2.distance(g,m)}function v(e,t,n){return l(e,d,n),r.vec2.distance(d,t)}Object.defineProperty(t,"__esModule",{value:!0});var u=r.vec3f64.create();t.copyParameter=c,t.resizeArray=i,t.scaleTranslateMatrix=o,t.midpoint=a,t.screenSpaceTangent=s,t.projectPoint=l,t.pointToPointScreenDistance=f,t.pointToScreenPositionDistance=v;var p=r.vec3f64.create(),d=r.vec3f64.create(),g=r.vec3f64.create(),m=r.vec3f64.create()});