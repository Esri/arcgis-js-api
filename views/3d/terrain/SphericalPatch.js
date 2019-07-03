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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../support/earthUtils","../support/geometryUtils","../support/mathUtils","../support/projectionUtils","./PatchGeometryFactory","./Tile"],function(t,e,i,s,r,a,n,o,h,u,c){return function(t){function e(i,s,a){var n=t.call(this,e.NumSubdivisionsAtLevel)||this;n.obb=new Array(8),n.isWebMercator=!1;for(var o=0;o<8;o++)n.obb[o]=r.vec3f64.create();return void 0!==i&&n.init(i,s,a),n}return i(e,t),e.prototype.init=function(e,i,n){t.prototype.init.call(this,e,i,n),this.isWebMercator=n.tilingScheme.spatialReference.isWebMercator;var u=this.extentInRadians[0],c=this.extentInRadians[1],p=this.extentInRadians[2],d=this.extentInRadians[3],l=e[0],v=o.lerp(c,d,.5),b=o.lerp(u,p,.5),f=0===l?0:Math.min(Math.abs(c),Math.abs(d));this.edgeLen=(p-u)*Math.cos(f)*a.earthRadius,this.edgeLen2=this.edgeLen*this.edgeLen,this.curvatureHeight=a.earthRadius-Math.sqrt(a.earthRadius*a.earthRadius-this.edgeLen2/4),h.wgs84ComparableLonLatToECEF(this.centerAtSeaLevel,b,v,0);var m=r.vec3f64.fromArray(this.centerAtSeaLevel);s.vec3.normalize(m,this.centerAtSeaLevel),this.up=m,this._updateOBB(),this.updateRadiusAndCenter()},e.prototype.updateRadiusAndCenter=function(){if(0===this.lij[0])s.vec3.set(this.center,0,0,0),this.radius=a.earthRadius+this.elevationBounds[1];else{t.prototype.updateRadiusAndCenter.call(this);var e=Math.max(s.vec3.squaredDistance(this.center,this.obb[0]),s.vec3.squaredDistance(this.center,this.obb[1]));this.radius=Math.sqrt(e)}},e.prototype._isVisible=function(){if(!this.intersectsClippingArea)return!1;var t=this.lij[0],e=this.surface.frustum.planes;if(t<10)return n.frustum.intersectsSphere(e,n.sphere.wrap(this.radius,this.center));for(var i=this.obb,s=0;s<6;s++){var r=void 0;for(r=0;r<8&&!n.plane.isPointOutside(e[s],i[r]);r++);if(8===r)return!1}return!0},e.prototype.computeElevationBounds=function(){t.prototype.computeElevationBounds.call(this),this._updateOBB()},e.prototype.createGeometry=function(t,e,i){var s=this._isPole(this.lij[1],this.lij[0]);u.createSphericalGlobePatch(t,this.extent,e,this.renderData,i,this.extentInRadians,this.isWebMercator,s),this.updateMemoryUsed()},e.prototype._updateOBB=function(){for(var t=this.extentInRadians,e=this.obb,i=0;i<2;i++){var r=this.elevationBounds[i],n=4*i;h.wgs84ComparableLonLatToECEF(e[n++],t[0],t[1],r),h.wgs84ComparableLonLatToECEF(e[n++],t[0],t[3],r),h.wgs84ComparableLonLatToECEF(e[n++],t[2],t[3],r),h.wgs84ComparableLonLatToECEF(e[n++],t[2],t[1],r)}if(this.isWebMercator){var o=this._isPole(this.lij[1],this.lij[0]);2===o?(s.vec3.set(e[1],0,0,a.earthRadius),s.vec3.set(e[2],0,0,a.earthRadius),s.vec3.set(e[5],0,0,a.earthRadius),s.vec3.set(e[6],0,0,a.earthRadius)):1===o&&(s.vec3.set(e[0],0,0,-a.earthRadius),s.vec3.set(e[3],0,0,-a.earthRadius),s.vec3.set(e[4],0,0,-a.earthRadius),s.vec3.set(e[7],0,0,-a.earthRadius))}},e.prototype._isPole=function(t,e){var i=0;return t===(1<<e)-1&&(i+=1),0===t&&(i+=2),i},e.NumSubdivisionsAtLevel=[128,64,32,16,16,8,8,4],e}(c)});