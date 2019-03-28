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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../support/earthUtils","../support/geometryUtils","../support/mathUtils","./Tile","./TileGeometryFactory"],function(t,e,i,s,r,a,h,n,o,u){function c(t,e,i,s){var r=a.earthRadius+i,h=Math.cos(t);s[0]=Math.cos(e)*h*r,s[1]=Math.sin(e)*h*r,s[2]=Math.sin(t)*r}return function(t){function e(i,s,a){var h=t.call(this,e.NumSubdivisionsAtLevel)||this;h.obb=new Array(8),h.isWebMercator=!1,h.tileUp=r.vec3f64.create();for(var n=0;n<8;n++)h.obb[n]=r.vec3f64.create();return void 0!==i&&h.init(i,s,a),h}return i(e,t),e.prototype.init=function(e,i,r){t.prototype.init.call(this,e,i,r),this.isWebMercator=r.tilingScheme.spatialReference.isWebMercator;var h=this.extentWGS84Rad[0],o=this.extentWGS84Rad[1],u=this.extentWGS84Rad[2],d=this.extentWGS84Rad[3],p=e[0],l=n.lerp(o,d,.5),v=n.lerp(h,u,.5),f=0===p?0:Math.min(Math.abs(o),Math.abs(d));this.edgeLen=(u-h)*Math.cos(f)*a.earthRadius,this.edgeLen2=this.edgeLen*this.edgeLen,this.curvatureHeight=a.earthRadius-Math.sqrt(a.earthRadius*a.earthRadius-this.edgeLen2/4),c(l,v,0,this.centerAtSeaLevel),s.vec3.copy(this.tileUp,this.centerAtSeaLevel),s.vec3.normalize(this.tileUp,this.tileUp),this._updateOBB(),this.updateRadiusAndCenter()},e.prototype.updateRadiusAndCenter=function(){if(0===this.lij[0])s.vec3.set(this.center,0,0,0),this.radius=a.earthRadius+this.elevationBounds[1];else{t.prototype.updateRadiusAndCenter.call(this);var e=Math.max(s.vec3.squaredDistance(this.center,this.obb[0]),s.vec3.squaredDistance(this.center,this.obb[1]));this.radius=Math.sqrt(e)}},e.prototype._isVisible=function(){if(!this.intersectsClippingArea)return!1;var t=this.lij[0],e=this.surface.frustum.planes;if(t<10)return h.frustum.intersectsSphere(e,h.sphere.wrap(this.radius,this.center));for(var i=this.obb,s=0;s<6;s++){var r=void 0;for(r=0;r<8&&!h.plane.isPointOutside(e[s],i[r]);r++);if(8===r)return!1}return!0},e.prototype.computeElevationBounds=function(){t.prototype.computeElevationBounds.call(this),this._updateOBB()},e.prototype.createGeometry=function(t,e,i){var s=this._isPole(this.lij[1],this.lij[0]);u.createSphericalGlobeTile(t,this.extent,this.extentWGS84Rad,this.isWebMercator,e,s,i,this.renderData),this.updateMemoryUsed()},e.prototype._updateOBB=function(){for(var t=this.extentWGS84Rad,e=this.obb,i=0;i<2;i++){var r=this.elevationBounds[i],h=4*i;c(t[1],t[0],r,e[h++]),c(t[3],t[0],r,e[h++]),c(t[3],t[2],r,e[h++]),c(t[1],t[2],r,e[h++])}if(this.isWebMercator){var n=this._isPole(this.lij[1],this.lij[0]);2===n?(s.vec3.set(e[1],0,0,a.earthRadius),s.vec3.set(e[2],0,0,a.earthRadius),s.vec3.set(e[5],0,0,a.earthRadius),s.vec3.set(e[6],0,0,a.earthRadius)):1===n&&(s.vec3.set(e[0],0,0,-a.earthRadius),s.vec3.set(e[3],0,0,-a.earthRadius),s.vec3.set(e[4],0,0,-a.earthRadius),s.vec3.set(e[7],0,0,-a.earthRadius))}},e.prototype._isPole=function(t,e){var i=0;return t===(1<<e)-1&&(i+=1),0===t&&(i+=2),i},e.NumSubdivisionsAtLevel=[128,64,32,16,16,8,8,4],e}(o)});