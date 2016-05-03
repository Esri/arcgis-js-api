// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["./TileBase","./TileGeometryFactory","./TerrainConst","../support/ObjectPool","../support/mathUtils","../support/earthUtils","../lib/glMatrix"],function(t,e,i,r,s,a,n){var o=n.vec3d,h=a.earthRadius,p=(o.create(),function(t,e,i,r){var s=h+i,a=Math.cos(t);r[0]=Math.cos(e)*a*s,r[1]=Math.sin(e)*a*s,r[2]=Math.sin(t)*s}),l=function(e,i,r,s){t.call(this),this.tileUp=o.create(),this.obb=new Array(8),this._isWebMercator=!1;for(var a=0;8>a;a++)this.obb[a]=o.create();void 0!==e&&this.init(e,i,r,s)};return l.prototype=new t,l.prototype.constructor=l,l.prototype.init=function(e,i,r,a){t.prototype.init.call(this,e,i,r,a),this._isWebMercator=a.spatialReference.isWebMercator;var n=e[0],l=e[1],u=e[2];a.getExtent(n,l,u,this.extent,this.extentWGS84Rad);var c=this.extentWGS84Rad[0],d=this.extentWGS84Rad[1],f=this.extentWGS84Rad[2],v=this.extentWGS84Rad[3],b=s.lerp(d,v,.5),y=s.lerp(c,f,.5),M=0===n?0:Math.min(Math.abs(d),Math.abs(v));this.edgeLen=(f-c)*Math.cos(M)*h,p(b,y,0,this.centerAtSeaLevel),o.set(this.centerAtSeaLevel,this.tileUp),o.normalize(this.tileUp),this._updateOBB(),this.updateRadiusAndCenter()},l.prototype.isVisible=function(t){if(!this.intersectsClippingArea)return!1;var e=this.lij[0];if(e>9)for(var i=this.obb,r=0;6>r;r++){for(var s=0;8>s&&!(t[r][0]*i[s][0]+t[r][1]*i[s][1]+t[r][2]*i[s][2]+t[r][3]<0);s++);if(8===s)return!1}else{var a=this.radius,n=this.center;if(t[0][0]*n[0]+t[0][1]*n[1]+t[0][2]*n[2]+t[0][3]>a)return!1;if(t[1][0]*n[0]+t[1][1]*n[1]+t[1][2]*n[2]+t[1][3]>a)return!1;if(t[2][0]*n[0]+t[2][1]*n[1]+t[2][2]*n[2]+t[2][3]>a)return!1;if(t[3][0]*n[0]+t[3][1]*n[1]+t[3][2]*n[2]+t[3][3]>a)return!1;if(t[4][0]*n[0]+t[4][1]*n[1]+t[4][2]*n[2]+t[4][3]>a)return!1;if(t[5][0]*n[0]+t[5][1]*n[1]+t[5][2]*n[2]+t[5][3]>a)return!1}return!0},l.prototype.updateElevationBounds=function(){t.prototype.updateElevationBounds.call(this),this._updateOBB()},l.prototype.updateRadiusAndCenter=function(){if(0===this.lij[0])o.set3(0,0,0,this.center),this.radius=h+this.elevationBounds[1];else{t.prototype.updateRadiusAndCenter.call(this);var e=Math.max(o.dist2(this.center,this.obb[0]),o.dist2(this.center,this.obb[1]));this.radius=Math.sqrt(e)}},l.prototype._numSubdivisionsAtLevel=[128,64,32,16,16,8,8,4],l.prototype.createGeometry=function(t,i,r){var s=this._isPole(this.lij[1],this.lij[0]);return t.needsUpdate=!1,e.createSphericalGlobeTile(t.numVertsPerRow,this.extent,this.extentWGS84Rad,this._isWebMercator,t.samplerData,i,s,r)},l.prototype._updateOBB=function(){var t,e=this.extentWGS84Rad,i=this.obb;for(t=0;2>t;t++){var r=this.elevationBounds[t],s=4*t;p(e[1],e[0],r,i[s++]),p(e[3],e[0],r,i[s++]),p(e[3],e[2],r,i[s++]),p(e[1],e[2],r,i[s++])}if(this._isWebMercator){var a=this._isPole(this.lij[1],this.lij[0]);2===a?(o.set3(0,0,h,i[1]),o.set3(0,0,h,i[2]),o.set3(0,0,h,i[5]),o.set3(0,0,h,i[6])):1===a&&(o.set3(0,0,-h,i[0]),o.set3(0,0,-h,i[3]),o.set3(0,0,-h,i[4]),o.set3(0,0,-h,i[7]))}},l.prototype._isPole=function(t,e){var i=0;return t===(1<<e)-1&&(i+=1),0===t&&(i+=2),i},l.prototype.elevationStartsAtLevel=i.Spherical.ELEVATION_STARTS_AT_LEVEL,r.on(l,400),l});