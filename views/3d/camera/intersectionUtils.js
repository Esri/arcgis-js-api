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

define(["require","exports","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/Point","../../../geometry/support/aaBoundingRect","../support/earthUtils","../webgl-engine/lib/Intersector"],function(e,r,t,n,i,a,o,c){function s(e,r,t,n){return e.renderCoordsHelper.fromRenderCoords(r.eye,y,n)&&a.containsPoint(t,y)}function d(e,r){return l(e,r.eye)}function l(e,r){return e.basemapTerrain&&e.renderCoordsHelper.fromRenderCoords(r,m,e.basemapTerrain.spatialReference)?e.basemapTerrain.getElevation(m)||0:0}function v(e,r,n,i){var a=e.state.camera.clone();r&&(a.eye=r),n&&(a.center=n),i&&(a.up=i),f(e,a.ray,b)||t.vec3.copy(b,a.center);var o=e.state.constraints,c=o.minimumPoiDistance;if(t.vec3.squaredDistance(a.eye,b)<c){var s=o.collision.enabled;t.vec3.copy(w,a.viewForward),t.vec3.scale(w,w,c),s?t.vec3.subtract(a.eye,b,w):t.vec3.add(b,a.eye,w);var d=e.renderCoordsHelper,l=d.getAltitude(a.eye),v=o.collision.elevationMargin;s&&l<v&&(t.vec3.subtract(w,b,a.eye),d.setAltitude(v,a.eye),t.vec3.add(b,a.eye,w))}return a.center=b,a}function u(e,r,n){if(!e.state.isGlobal)return!1;var i=l(e,r),a=e.stateManager.constraintsManager.nearFarHeuristic,o=a.compute(r,n,e.dataExtent,i,M).far,c=o*o;return t.vec3.squaredDistance(r,n)>c}function f(e,r,t){void 0===t&&(t=n.vec3f64.create());var i=p[e.viewingMode];i||(i=new c(e.viewingMode),i.options.backfacesTerrain=!e.state.isGlobal,i.options.invisibleTerrain=!0,p[e.viewingMode]=i);var a=e.state.isGlobal;return!(!e.sceneIntersectionHelper.intersectRay(r,i,t)||u(e,r.origin,t))||(!(!e.renderCoordsHelper.intersectManifold(r,0,t)||u(e,r.origin,t))||!!a&&g(r,t))}function g(e,r){var n=t.vec3.dot(e.origin,e.origin),i=o.earthRadius*o.earthRadius,a=n-i,c=a>0?Math.sqrt(a)/3:1;return t.vec3.scale(r,e.direction,c/t.vec3.length(e.direction)),t.vec3.add(r,r,e.origin),!0}Object.defineProperty(r,"__esModule",{value:!0}),r.eyeWithinExtent=s,r.surfaceElevationBelowEye=d,r.cameraOnContentAlongViewDirection=v;var p={},y=n.vec3f64.create(),b=n.vec3f64.create(),m=new i,w=n.vec3f64.create(),M={near:0,far:0}});