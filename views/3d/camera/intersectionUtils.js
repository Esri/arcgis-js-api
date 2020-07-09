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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/support/aaBoundingRect","../support/earthUtils","../webgl-engine/lib/Intersector"],(function(e,r,t,n,i,a,o){function c(e,r){return e.basemapTerrain&&e.elevationProvider.getElevation(r[0],r[1],r[2],e.renderCoordsHelper.spatialReference)||0}function s(e,r,n){if(!e.state.isGlobal)return!1;var i=c(e,r),a=e.stateManager.constraintsManager.nearFarHeuristic.compute(r,n,e.dataExtent,i,f).far,o=a*a;return t.vec3.squaredDistance(r,n)>o}Object.defineProperty(r,"__esModule",{value:!0}),r.eyeWithinExtent=function(e,r,t,n){return e.renderCoordsHelper.fromRenderCoords(r.eye,v,n)&&i.containsPoint(t,v)},r.surfaceElevationBelowEye=function(e,r){return c(e,r.eye)},r.cameraOnContentAlongViewDirection=function(e,r,i,c){var v=e.state.camera.clone();r&&(v.eye=r),i&&(v.center=i),c&&(v.up=c),function(e,r,i){void 0===i&&(i=n.vec3f64.create());var c=l[e.viewingMode];c||((c=new o.Intersector(e.viewingMode)).options.backfacesTerrain=!e.state.isGlobal,c.options.invisibleTerrain=!0,l[e.viewingMode]=c);var v=e.state.isGlobal;if(e.sceneIntersectionHelper.intersectRay(r,c,i)&&!s(e,r.origin,i))return!0;if(!e.renderCoordsHelper.intersectManifold(r,0,i)||s(e,r.origin,i))return!!v&&function(e,r){var n=t.vec3.dot(e.origin,e.origin),i=a.earthRadius*a.earthRadius,o=n-i,c=o>0?Math.sqrt(o)/3:1;return t.vec3.scale(r,e.direction,c/t.vec3.length(e.direction)),t.vec3.add(r,r,e.origin),!0}(r,i);return!0}(e,v.ray,d)||t.vec3.copy(d,v.center);var f=e.state.constraints,g=f.minimumPoiDistance;if(t.vec3.squaredDistance(v.eye,d)<g){var p=f.collision.enabled;t.vec3.copy(u,v.viewForward),t.vec3.scale(u,u,g),p?t.vec3.subtract(v.eye,d,u):t.vec3.add(d,v.eye,u);var y=e.renderCoordsHelper,b=y.getAltitude(v.eye),m=f.collision.elevationMargin;p&&b<m&&(t.vec3.subtract(u,d,v.eye),y.setAltitude(m,v.eye),t.vec3.add(d,v.eye,u))}return v.center=d,v};var l={},v=n.vec3f64.create(),d=n.vec3f64.create(),u=n.vec3f64.create(),f={near:0,far:0}}));