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

define(["require","exports","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/Point","../../../geometry/support/aaBoundingRect","../support/earthUtils","../webgl-engine/lib/Intersector"],function(e,r,n,t,i,a,o,c){function s(e,r,n,t){return e.renderCoordsHelper.fromRenderCoords(r.eye,p,t)&&a.containsPoint(n,p)}function l(e,r){return d(e,r.eye)}function d(e,r){return e.renderCoordsHelper.fromRenderCoords(r,m,e.basemapTerrain.spatialReference)?e.basemapTerrain.getElevation(m)||0:0}function v(e,r,t,i){var a=e.state.camera.copy();r&&(a.eye=r),t&&(a.center=t),i&&(a.up=i),f(e,a.ray,b)||n.vec3.copy(b,a.center);var o=e.state.constraints,c=o.minimumPoiDistance;if(n.vec3.squaredDistance(a.eye,b)<c){var s=o.collision.enabled;n.vec3.copy(w,a.viewForward),n.vec3.scale(w,w,c),s?n.vec3.subtract(a.eye,b,w):n.vec3.add(b,a.eye,w);var l=e.renderCoordsHelper,d=l.getAltitude(a.eye),v=o.collision.elevationMargin;s&&d<v&&(n.vec3.subtract(w,b,a.eye),l.setAltitude(v,a.eye),n.vec3.add(b,a.eye,w))}return a.center=b,a}function u(e,r,t){if(!e.state.isGlobal)return!1;var i=d(e,r),a=e.stateManager.constraintsManager.nearFarHeuristic,o=a.compute(r,t,e.dataExtent,i,M).far,c=o*o;return n.vec3.squaredDistance(r,t)>c}function f(e,r,n){void 0===n&&(n=t.vec3f64.create());var i=y[e.viewingMode];i||(i=new c(e.viewingMode),i.enable.backfacesTerrain=!e.state.isGlobal,i.enable.invisibleTerrain=!0,y[e.viewingMode]=i);var a=e.state.isGlobal;return!(!e.sceneIntersectionHelper.intersectRay(r,n,null,i)||u(e,r.origin,n))||(!(!e.renderCoordsHelper.intersectManifold(r,0,n)||u(e,r.origin,n))||!!a&&g(r,n))}function g(e,r){var t=n.vec3.dot(e.origin,e.origin),i=o.earthRadius*o.earthRadius,a=t-i,c=a>0?Math.sqrt(a)/3:1;return n.vec3.scale(r,e.direction,c/n.vec3.length(e.direction)),n.vec3.add(r,r,e.origin),!0}Object.defineProperty(r,"__esModule",{value:!0}),r.eyeWithinExtent=s,r.surfaceElevationBelowEye=l,r.cameraOnContentAlongViewDirection=v;var y={},p=t.vec3f64.create(),b=t.vec3f64.create(),m=new i,w=t.vec3f64.create(),M={near:0,far:0}});