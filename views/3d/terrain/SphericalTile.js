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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/ObjectPool","../lib/glMatrix","../support/earthUtils","../support/mathUtils","./Tile","./TileGeometryFactory"],function(t,e,i,s,r,a,o,h,n){function d(t,e,i,s){var r=a.earthRadius+i,o=Math.cos(t);s[0]=Math.cos(e)*o*r,s[1]=Math.sin(e)*o*r,s[2]=Math.sin(t)*r}return function(t){function e(i,s,a,o){var h=t.call(this,e.NumSubdivisionsAtLevel)||this;h.obb=[],h.isWebMercator=!1,h.tileUp=r.vec3d.create(),h.obb=new Array(8);for(var n=0;n<8;n++)h.obb[n]=r.vec3d.create();return void 0!==i&&h.init(i,s,a,o),h}return i(e,t),e.prototype.init=function(e,i,s,h){t.prototype.init.call(this,e,i,s,h),this.isWebMercator=h.spatialReference.isWebMercator;var n=this.extentWGS84Rad[0],u=this.extentWGS84Rad[1],c=this.extentWGS84Rad[2],l=this.extentWGS84Rad[3],p=e[0],v=o.lerp(u,l,.5),b=o.lerp(n,c,.5),R=0===p?0:Math.min(Math.abs(u),Math.abs(l));this.edgeLen=(c-n)*Math.cos(R)*a.earthRadius,this.curvatureHeight=a.earthRadius-Math.sqrt(a.earthRadius*a.earthRadius-this.edgeLen*this.edgeLen/4),d(v,b,0,this.centerAtSeaLevel),r.vec3d.set(this.centerAtSeaLevel,this.tileUp),r.vec3d.normalize(this.tileUp),this._updateOBB(),this.updateRadiusAndCenter()},e.prototype.updateRadiusAndCenter=function(){if(0===this.lij[0])r.vec3d.set3(0,0,0,this.center),this.radius=a.earthRadius+this.elevationBounds[1];else{t.prototype.updateRadiusAndCenter.call(this);var e=Math.max(r.vec3d.dist2(this.center,this.obb[0]),r.vec3d.dist2(this.center,this.obb[1]));this.radius=Math.sqrt(e)}},e.prototype.isVisible=function(t){if(!this.intersectsClippingArea)return!1;if(this.lij[0]>9){for(var e=this.obb,i=0;i<6;i++){var s=void 0;for(s=0;s<8&&!(t[i][0]*e[s][0]+t[i][1]*e[s][1]+t[i][2]*e[s][2]+t[i][3]<0);s++);if(8===s)return!1}return!0}var r=this.radius,a=this.center;return!(t[0][0]*a[0]+t[0][1]*a[1]+t[0][2]*a[2]+t[0][3]>r||t[1][0]*a[0]+t[1][1]*a[1]+t[1][2]*a[2]+t[1][3]>r||t[2][0]*a[0]+t[2][1]*a[1]+t[2][2]*a[2]+t[2][3]>r||t[3][0]*a[0]+t[3][1]*a[1]+t[3][2]*a[2]+t[3][3]>r||t[4][0]*a[0]+t[4][1]*a[1]+t[4][2]*a[2]+t[4][3]>r||t[5][0]*a[0]+t[5][1]*a[1]+t[5][2]*a[2]+t[5][3]>r)},e.prototype.computeElevationBounds=function(){t.prototype.computeElevationBounds.call(this),this._updateOBB()},e.prototype.createGeometry=function(t,e,i){var s=this._isPole(this.lij[1],this.lij[0]);t.needsUpdate=!1,n.createSphericalGlobeTile(t.numVertsPerRow,this.extent,this.extentWGS84Rad,this.isWebMercator,t.samplerData,e,s,i,this.renderData),this.updateMemoryUsed()},e.prototype._updateOBB=function(){for(var t=this.extentWGS84Rad,e=this.obb,i=0;i<2;i++){var s=this.elevationBounds[i],o=4*i;d(t[1],t[0],s,e[o++]),d(t[3],t[0],s,e[o++]),d(t[3],t[2],s,e[o++]),d(t[1],t[2],s,e[o++])}if(this.isWebMercator){var h=this._isPole(this.lij[1],this.lij[0]);2===h?(r.vec3d.set3(0,0,a.earthRadius,e[1]),r.vec3d.set3(0,0,a.earthRadius,e[2]),r.vec3d.set3(0,0,a.earthRadius,e[5]),r.vec3d.set3(0,0,a.earthRadius,e[6])):1===h&&(r.vec3d.set3(0,0,-a.earthRadius,e[0]),r.vec3d.set3(0,0,-a.earthRadius,e[3]),r.vec3d.set3(0,0,-a.earthRadius,e[4]),r.vec3d.set3(0,0,-a.earthRadius,e[7]))}},e.prototype._isPole=function(t,e){var i=0;return t===(1<<e)-1&&(i+=1),0===t&&(i+=2),i},e.NumSubdivisionsAtLevel=[128,64,32,16,16,8,8,4],e.Pool=new s(e),e}(h)});