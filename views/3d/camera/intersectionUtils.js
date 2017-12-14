// COPYRIGHT © 2017 Esri
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

define(["require","exports","../../../geometry/Point","../lib/glMatrix","../support/aaBoundingRect","../support/earthUtils","../webgl-engine/lib/Selector"],function(e,t,n,r,i,a,o){function c(e,t,n,r){return e.renderCoordsHelper.fromRenderCoords(t.eye,f,r)&&i.containsPoint(n,f)}function d(e,t){return e.renderCoordsHelper.fromRenderCoords(t.eye,p,e.basemapTerrain.spatialReference)?e.basemapTerrain.getElevation(p)||0:0}function l(e,t,n,i){var a=e.state.camera.copy();t&&(a.eye=t),n&&(a.center=n),i&&(a.up=i),s(e,a.eye,a.center,y);var o=e.state.constraints,c=o.minimumPoiDistance;if(r.vec3d.dist2(a.eye,y)<c){var d=o.collision.enabled;r.vec3d.set(a.viewForward,b),r.vec3d.scale(b,c),d?r.vec3d.subtract(y,b,a.eye):r.vec3d.add(a.eye,b,y);var l=e.renderCoordsHelper,v=l.getAltitude(a.eye),u=o.collision.elevationMargin;d&&u>v&&(r.vec3d.subtract(y,a.eye,b),l.setAltitude(u,a.eye),r.vec3d.add(a.eye,b,y))}return a.center=y,a}function s(e,t,n,i){void 0===i&&(i=r.vec3d.create());var a=g[e.viewingMode];a||(a=new o(e.viewingMode),a.enableBackfacesTerrain=!e.state.isGlobal,a.enableInvisibleTerrain=!0,g[e.viewingMode]=a),e._stage.pickRay(t,n,null,null,null,null,a);var c=a.getMinResult();if(c&&c.getIntersectionPoint(i))return i;var d=r.vec3d.direction(n,t,b);return e.renderCoordsHelper.intersectManifold(t,d,0,i)||("global"===e.viewingMode?v(t,n,i):u(t,n,i)),i}function v(e,t,n){var i=r.vec3d.dot(e,e),o=a.earthRadius*a.earthRadius,c=i>o?Math.sqrt(i-o)/3:1;r.vec3d.subtract(t,e,n),r.vec3d.scale(n,c/r.vec3d.length(n),n),r.vec3d.add(n,e)}function u(e,t,n){t!==n&&r.vec3d.set(t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.eyeWithinExtent=c,t.surfaceElevationBelowEye=d,t.cameraOnContentAlongViewDirection=l,t.contentAlongViewDirection=s;var g={},f=r.vec3d.create(),y=r.vec3d.create(),p=new n,b=r.vec3d.create()});