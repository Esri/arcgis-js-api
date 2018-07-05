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

define(["require","exports","../../../geometry/Point","../../../geometry/support/aaBoundingRect","../lib/glMatrix","../support/earthUtils","../webgl-engine/lib/Selector"],function(e,t,r,n,a,i,o){function c(e,t,r,a){return e.renderCoordsHelper.fromRenderCoords(t.eye,p,a)&&n.containsPoint(r,p)}function d(e,t){return s(e,t.eye)}function s(e,t){return e.renderCoordsHelper.fromRenderCoords(t,b,e.basemapTerrain.spatialReference)?e.basemapTerrain.getElevation(b)||0:0}function l(e,t,r,n){var i=e.state.camera.copy();t&&(i.eye=t),r&&(i.center=r),n&&(i.up=n),v(e,i.eye,i.center,y);var o=e.state.constraints,c=o.minimumPoiDistance;if(a.vec3d.dist2(i.eye,y)<c){var d=o.collision.enabled;a.vec3d.set(i.viewForward,m),a.vec3d.scale(m,c),d?a.vec3d.subtract(y,m,i.eye):a.vec3d.add(i.eye,m,y);var s=e.renderCoordsHelper,l=s.getAltitude(i.eye),u=o.collision.elevationMargin;d&&l<u&&(a.vec3d.subtract(y,i.eye,m),s.setAltitude(u,i.eye),a.vec3d.add(i.eye,m,y))}return i.center=y,i}function v(e,t,r,n){void 0===n&&(n=a.vec3d.create());var i=f[e.viewingMode];i||(i=new o(e.viewingMode),i.enableBackfacesTerrain=!e.state.isGlobal,i.enableInvisibleTerrain=!0,f[e.viewingMode]=i),e._stage.pickRay(t,r,null,null,null,null,i);var c=i.getMinResult();if(c&&c.getIntersectionPoint(n))return n;var d=a.vec3d.direction(r,t,m),l="global"===e.viewingMode;if(e.renderCoordsHelper.intersectManifold(t,d,0,n)){if(l&&e.renderCoordsHelper.getAltitude(t)<0){var v=s(e,t),p=e.stateManager.constraintsManager.nearFarHeuristic,y=p.compute(t,n,e.dataExtent,v),b=y.distance,w=y.maxFarNearRatio,M=y.minNearDistance,R=b/w>M?b:M*w;a.vec3d.dist2(t,n)>R&&u(t,r,!0,n)}}else l?u(t,r,!1,n):g(t,r,n);return n}function u(e,t,r,n){var o=a.vec3d.dot(e,e),c=i.earthRadius*i.earthRadius,d=o-c;r&&(d=Math.abs(d));var s=d>0?Math.sqrt(d)/3:1;a.vec3d.subtract(t,e,n),a.vec3d.scale(n,s/a.vec3d.length(n),n),a.vec3d.add(n,e)}function g(e,t,r){t!==r&&a.vec3d.set(t,r)}Object.defineProperty(t,"__esModule",{value:!0}),t.eyeWithinExtent=c,t.surfaceElevationBelowEye=d,t.surfaceElevationBelowRenderPoint=s,t.cameraOnContentAlongViewDirection=l,t.contentAlongViewDirection=v;var f={},p=a.vec3d.create(),y=a.vec3d.create(),b=new r,m=a.vec3d.create()});