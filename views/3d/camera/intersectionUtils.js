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

define(["require","exports","../../../core/libs/gl-matrix-2/gl-matrix","../../../geometry/Point","../../../geometry/support/aaBoundingRect","../support/earthUtils","../webgl-engine/lib/Selector"],function(e,r,n,t,a,i,o){function c(e,r,n,t){return e.renderCoordsHelper.fromRenderCoords(r.eye,y,t)&&a.containsPoint(n,y)}function s(e,r){return l(e,r.eye)}function l(e,r){return e.renderCoordsHelper.fromRenderCoords(r,b,e.basemapTerrain.spatialReference)?e.basemapTerrain.getElevation(b)||0:0}function d(e,r,t,a){var i=e.state.camera.copy();r&&(i.eye=r),t&&(i.center=t),a&&(i.up=a),u(e,i.ray,p)||n.vec3.copy(p,i.center);var o=e.state.constraints,c=o.minimumPoiDistance;if(n.vec3.squaredDistance(i.eye,p)<c){var s=o.collision.enabled;n.vec3.copy(m,i.viewForward),n.vec3.scale(m,m,c),s?n.vec3.subtract(i.eye,p,m):n.vec3.add(p,i.eye,m);var l=e.renderCoordsHelper,d=l.getAltitude(i.eye),v=o.collision.elevationMargin;s&&d<v&&(n.vec3.subtract(m,p,i.eye),l.setAltitude(v,i.eye),n.vec3.add(p,i.eye,m))}return i.center=p,i}function v(e,r,t){if(!e.state.isGlobal)return!1;var a=l(e,r),i=e.stateManager.constraintsManager.nearFarHeuristic,o=i.compute(r,t,e.dataExtent,a,w).far,c=o*o;return n.vec3.squaredDistance(r,t)>c}function u(e,r,t){void 0===t&&(t=n.vec3f64.create());var a=g[e.viewingMode];a||(a=new o(e.viewingMode),a.enableBackfacesTerrain=!e.state.isGlobal,a.enableInvisibleTerrain=!0,g[e.viewingMode]=a);var i=e.state.isGlobal;return!(!e.sceneIntersectionHelper.intersectRay(r,t,a)||v(e,r.origin,t))||(!(!e.renderCoordsHelper.intersectManifold(r,0,t)||v(e,r.origin,t))||!!i&&f(r,t))}function f(e,r){var t=n.vec3.dot(e.origin,e.origin),a=i.earthRadius*i.earthRadius,o=t-a,c=o>0?Math.sqrt(o)/3:1;return n.vec3.scale(r,e.direction,c/n.vec3.length(e.direction)),n.vec3.add(r,r,e.origin),!0}Object.defineProperty(r,"__esModule",{value:!0}),r.eyeWithinExtent=c,r.surfaceElevationBelowEye=s,r.surfaceElevationBelowRenderPoint=l,r.cameraOnContentAlongViewDirection=d;var g={},y=n.vec3f64.create(),p=n.vec3f64.create(),b=new t,m=n.vec3f64.create(),w={near:0,far:0}});