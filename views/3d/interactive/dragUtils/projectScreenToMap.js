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

define(["require","exports","../../../../geometry","../../../../core/mathUtils","../../../../core/screenUtils","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../support/elevationInfoUtils","../../support/geometryUtils","../../support/projectionUtils","../../support/geometryUtils/plane","../../support/geometryUtils/ray"],function(e,r,t,o,n,c,a,i,s,l,u,d){function f(e,r,t){switch(i.getGraphicEffectiveElevationMode(r)){case"on-the-ground":return p(e);case"absolute-height":return g(e,e.toMap(t,{include:[r]}).z);default:return null}}function v(e,r,t){switch(i.getGraphicEffectiveElevationMode(r)){case"on-the-ground":return p(e);case"absolute-height":return g(e,t.z);default:return null}}function p(e){return function(r,t){var o=e.toMap(r);return o&&l.pointToPoint(o,o,t)?o:null}}function g(e,r){var t=n.createScreenPointArray(),o=d.create(),c=a.vec3f64.create();return function(a,i){n.screenPointObjectToArray(a,t),d.fromScreenAtEye(e.state.camera,t,o);var s=e.renderCoordsHelper.intersectManifoldClosestSilhouette(o,r,c);return e.renderCoordsHelper.fromRenderCoords(s,i)}}function h(e,r){var i=a.vec3f64.create();if(!e.renderCoordsHelper.toRenderCoords(r,i))return null;var l=c.vec3.length(i),f=a.vec3f64.create();e.renderCoordsHelper.worldUpAtPosition(i,f);var v=u.create(),p=n.createScreenPointArray(),g=a.vec3f64.create(),h=d.create();return function(r,a){var m=e.state.camera,y=c.vec3.cross(v,f,c.vec3.subtract(g,i,m.eye));if(c.vec3.cross(y,y,f),u.fromPositionAndNormal(i,y,v),d.fromScreenAtEye(m,n.screenPointObjectToArray(r,p),h),!u.intersectRay(v,h,g))return null;if(c.vec3.subtract(g,g,i),s.vector.projectPoint(f,g,g),"global"===e.viewingMode){c.vec3.length(g)*o.sign(c.vec3.dot(f,g))<.001-l&&c.vec3.subtract(g,c.vec3.scale(g,f,.001),i)}return c.vec3.add(g,g,i),e.renderCoordsHelper.fromRenderCoords(g,new t.Point,a)}}Object.defineProperty(r,"__esModule",{value:!0}),r.createForGraphic=f,r.createForGraphicAtLocation=v,r.createOnTheGround=p,r.createAbsoluteHeight=g,r.createCameraAlignedWorldUp=h});