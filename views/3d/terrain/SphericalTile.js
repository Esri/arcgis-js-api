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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/ObjectPool","../../../core/libs/gl-matrix-2/gl-matrix","../support/earthUtils","../support/geometryUtils","../support/mathUtils","./Tile","./TileGeometryFactory"],function(t,e,i,s,r,a,o,n,h,u){function c(t,e,i,s){var r=a.earthRadius+i,o=Math.cos(t);s[0]=Math.cos(e)*o*r,s[1]=Math.sin(e)*o*r,s[2]=Math.sin(t)*r}return function(t){function e(i,s,a,o){var n=t.call(this,e.NumSubdivisionsAtLevel)||this;n.obb=[],n.isWebMercator=!1,n.tileUp=r.vec3f64.create(),n.obb=new Array(8);for(var h=0;h<8;h++)n.obb[h]=r.vec3f64.create();return void 0!==i&&n.init(i,s,a,o),n}return i(e,t),e.prototype.init=function(e,i,s,o){t.prototype.init.call(this,e,i,s,o),this.isWebMercator=o.spatialReference.isWebMercator;var h=this.extentWGS84Rad[0],u=this.extentWGS84Rad[1],d=this.extentWGS84Rad[2],p=this.extentWGS84Rad[3],l=e[0],v=n.lerp(u,p,.5),b=n.lerp(h,d,.5),f=0===l?0:Math.min(Math.abs(u),Math.abs(p));this.edgeLen=(d-h)*Math.cos(f)*a.earthRadius,this.edgeLen2=this.edgeLen*this.edgeLen,this.curvatureHeight=a.earthRadius-Math.sqrt(a.earthRadius*a.earthRadius-this.edgeLen2/4),c(v,b,0,this.centerAtSeaLevel),r.vec3.copy(this.tileUp,this.centerAtSeaLevel),r.vec3.normalize(this.tileUp,this.tileUp),this._updateOBB(),this.updateRadiusAndCenter()},e.prototype.updateRadiusAndCenter=function(){if(0===this.lij[0])r.vec3.set(this.center,0,0,0),this.radius=a.earthRadius+this.elevationBounds[1];else{t.prototype.updateRadiusAndCenter.call(this);var e=Math.max(r.vec3.squaredDistance(this.center,this.obb[0]),r.vec3.squaredDistance(this.center,this.obb[1]));this.radius=Math.sqrt(e)}},e.prototype.isVisible=function(t){if(!this.intersectsClippingArea)return!1;var e=this.lij[0],i=t.planes;if(e>9){for(var s=this.obb,r=0;r<6;r++){var a=void 0;for(a=0;a<8&&!o.plane.isPointOutside(i[r],s[a]);a++);if(8===a)return!1}return!0}return o.frustum.intersectsSphere(t,o.sphere.wrap(this.radius,this.center))},e.prototype.computeElevationBounds=function(){t.prototype.computeElevationBounds.call(this),this._updateOBB()},e.prototype.createGeometry=function(t,e,i){var s=this._isPole(this.lij[1],this.lij[0]);t.needsUpdate=!1,u.createSphericalGlobeTile(t.numVertsPerRow,this.extent,this.extentWGS84Rad,this.isWebMercator,t.samplerData,e,s,i,this.renderData),this.updateMemoryUsed()},e.prototype._updateOBB=function(){for(var t=this.extentWGS84Rad,e=this.obb,i=0;i<2;i++){var s=this.elevationBounds[i],o=4*i;c(t[1],t[0],s,e[o++]),c(t[3],t[0],s,e[o++]),c(t[3],t[2],s,e[o++]),c(t[1],t[2],s,e[o++])}if(this.isWebMercator){var n=this._isPole(this.lij[1],this.lij[0]);2===n?(r.vec3.set(e[1],0,0,a.earthRadius),r.vec3.set(e[2],0,0,a.earthRadius),r.vec3.set(e[5],0,0,a.earthRadius),r.vec3.set(e[6],0,0,a.earthRadius)):1===n&&(r.vec3.set(e[0],0,0,-a.earthRadius),r.vec3.set(e[3],0,0,-a.earthRadius),r.vec3.set(e[4],0,0,-a.earthRadius),r.vec3.set(e[7],0,0,-a.earthRadius))}},e.prototype._isPole=function(t,e){var i=0;return t===(1<<e)-1&&(i+=1),0===t&&(i+=2),i},e.NumSubdivisionsAtLevel=[128,64,32,16,16,8,8,4],e.Pool=new s(e),e}(h)});