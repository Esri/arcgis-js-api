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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../geometry/Point","../../../geometry/SpatialReference","../../../geometry/support/scaleUtils","../../../layers/graphics/dehydratedFeatures","../lib/gl-matrix","./earthUtils","./geometryUtils","./mathUtils","./projectionUtils","../webgl-engine/lib/Util"],function(e,t,r,o,n,i,s,a,c,l,d,u,p){function f(e,t){return"global"===e?new y(t):new w(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.createRenderCoordsHelper=f;var h;!function(e){e[e.X=0]="X",e[e.Y=1]="Y",e[e.Z=2]="Z"}(h=t.BasisDimension||(t.BasisDimension={}));var v=function(){function e(e,t){this.spatialReference=e,this.unitInMeters=t}return e.prototype.toRenderCoords=function(e,t,r){return s.isPoint(e)?u.pointToVector(e,t,this.spatialReference):u.vectorToVector(e,t,r,this.spatialReference)},e.prototype.fromRenderCoords=function(e,t,r){return t instanceof o?u.vectorToPoint(e,this.spatialReference,t,r):t instanceof n?u.vectorToPoint(e,this.spatialReference,t):u.vectorToVector(e,this.spatialReference,t,r)},e}();t.RenderCoordsHelper=v;var y=function(e){function t(t){var r=e.call(this,t||u.SphericalECEFSpatialReference,1)||this;return r.type="global",r}return r(t,e),t.prototype.getAltitude=function(e){return a.vec3d.length(e)-c.earthRadius},t.prototype.setAltitude=function(e,t){var r=(e+c.earthRadius)/a.vec3d.length(t);a.vec3d.scale(t,r)},t.prototype.setAltitudeOfTransformation=function(e,t){var r=t[12],o=t[13],n=t[14],i=Math.sqrt(r*r+o*o+n*n),s=(e+c.earthRadius)/i;t[12]=r*s,t[13]=o*s,t[14]=n*s},t.prototype.worldUpAtPosition=function(e,t){return this.worldBasisAtPosition(e,h.Z,t)},t.prototype.worldBasisAtPosition=function(e,t,r){switch(t){case h.X:d.cartesianToSpherical(e||A,g);var o=g[2];return a.vec3d.set3(-Math.sin(o),Math.cos(o),0,r);case h.Y:d.cartesianToSpherical(e||A,g);var n=g[1],o=g[2],i=Math.sin(n);return a.vec3d.set3(-i*Math.cos(o),-i*Math.sin(o),Math.cos(n),r);case h.Z:return a.vec3d.normalize(e||A,r)}},t.prototype.intersectManifold=function(e,t,r,o){return void 0===o&&(o=a.vec3d.create()),!!p.raySphere(e,t,null,c.earthRadius+r,g)&&(!(a.vec3d.dot(a.vec3d.direction(g,e,m),t)<0)&&(a.vec3d.set(g,o),!0))},t}(v),w=function(e){function t(t){var r=e.call(this,t,i.getMetersPerUnitForSR(t))||this;return r.type="local",r.worldX=[1,0,0],r.worldY=[0,1,0],r.worldZ=[0,0,1],r}return r(t,e),t.prototype.getAltitude=function(e,t){return t?e[t+2]:e[2]},t.prototype.setAltitude=function(e,t){t[2]=e},t.prototype.setAltitudeOfTransformation=function(e,t){t[14]=e},t.prototype.worldUpAtPosition=function(e,t){return a.vec3d.set(this.worldZ,t)},t.prototype.worldBasisAtPosition=function(e,t,r){switch(t){case h.X:return a.vec3d.set(this.worldX,r);case h.Y:return a.vec3d.set(this.worldY,r);case h.Z:return a.vec3d.set(this.worldZ,r)}},t.prototype.intersectManifold=function(e,t,r,o){return void 0===o&&(o=a.vec3d.create()),l.plane.fromNormalAndOffset(this.worldZ,-r,R),!!l.plane.intersectRay(R,e,t,g)&&(a.vec3d.set(g,o),!0)},t}(v),R=l.plane.create(),g=a.vec3d.create(),m=a.vec3d.create(),A=[0,0,0]});