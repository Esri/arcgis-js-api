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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../geometry/Point","../../../geometry/support/aaBoundingRect","../lib/gl-matrix","../support/earthUtils","../webgl-engine/lib/Selector"],function(e,r,t,n,a,i,o){function c(e,r,t,a){return e.renderCoordsHelper.fromRenderCoords(r.eye,b,a)&&n.containsPoint(t,b)}function d(e,r){return s(e,r.eye)}function s(e,r){return e.renderCoordsHelper.fromRenderCoords(r,m,e.basemapTerrain.spatialReference)?e.basemapTerrain.getElevation(m)||0:0}function l(e,r,t,n){var i=e.state.camera.copy();r&&(i.eye=r),t&&(i.center=t),n&&(i.up=n),u(e,i.eye,i.center,y);var o=e.state.constraints,c=o.minimumPoiDistance;if(a.vec3d.dist2(i.eye,y)<c){var d=o.collision.enabled;a.vec3d.set(i.viewForward,w),a.vec3d.scale(w,c),d?a.vec3d.subtract(y,w,i.eye):a.vec3d.add(i.eye,w,y);var s=e.renderCoordsHelper,l=s.getAltitude(i.eye),v=o.collision.elevationMargin;d&&l<v&&(a.vec3d.subtract(y,i.eye,w),s.setAltitude(v,i.eye),a.vec3d.add(i.eye,w,y))}return i.center=y,i}function v(e,r,t){if(!e.state.isGlobal)return!1;var n=s(e,r),i=e.stateManager.constraintsManager.nearFarHeuristic,o=i.compute(r,t,e.dataExtent,n,M).far,c=o*o;return a.vec3d.dist2(r,t)>c}function u(e,r,t,n){void 0===n&&(n=a.vec3d.create());var i=p[e.viewingMode];i||(i=new o(e.viewingMode),i.enableBackfacesTerrain=!e.state.isGlobal,i.enableInvisibleTerrain=!0,p[e.viewingMode]=i);var c=e.state.isGlobal;if(e.sceneIntersectionHelper.pickPointFromSegment(r,t,n,i)&&!v(e,r,n))return n;var d=a.vec3d.direction(t,r,w);return e.renderCoordsHelper.intersectManifold(r,d,0,n)&&!v(e,r,n)||(c?f(r,t,!1,n):g(r,t,n)),n}function f(e,r,t,n){var o=a.vec3d.dot(e,e),c=i.earthRadius*i.earthRadius,d=o-c;t&&(d=Math.abs(d));var s=d>0?Math.sqrt(d)/3:1;a.vec3d.subtract(r,e,n),a.vec3d.scale(n,s/a.vec3d.length(n),n),a.vec3d.add(n,e)}function g(e,r,t){r!==t&&a.vec3d.set(r,t)}Object.defineProperty(r,"__esModule",{value:!0}),r.eyeWithinExtent=c,r.surfaceElevationBelowEye=d,r.surfaceElevationBelowRenderPoint=s,r.cameraOnContentAlongViewDirection=l,r.contentAlongViewDirection=u;var p={},b=a.vec3d.create(),y=a.vec3d.create(),m=new t,w=a.vec3d.create(),M={near:0,far:0}});