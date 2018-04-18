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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["./TileBase","./TileGeometryFactory","../../../core/ObjectPool","../support/mathUtils","../support/earthUtils","../lib/glMatrix"],function(t,e,i,s,r,o){var a=o.vec3d,n=r.earthRadius,h=function(t,e,i,s){var r=n+i,o=Math.cos(t);s[0]=Math.cos(e)*o*r,s[1]=Math.sin(e)*o*r,s[2]=Math.sin(t)*r},p=function(e,i,s,r){t.call(this),this.tileUp=a.create(),this.obb=new Array(8),this._isWebMercator=!1;for(var o=0;o<8;o++)this.obb[o]=a.create();void 0!==e&&this.init(e,i,s,r)};return p.prototype=new t,p.prototype.constructor=p,p.prototype.init=function(e,i,r,o){t.prototype.init.call(this,e,i,r,o),this._isWebMercator=o.spatialReference.isWebMercator;var p=this.extentWGS84Rad[0],u=this.extentWGS84Rad[1],l=this.extentWGS84Rad[2],c=this.extentWGS84Rad[3],d=e[0],f=s.lerp(u,c,.5),b=s.lerp(p,l,.5),v=0===d?0:Math.min(Math.abs(u),Math.abs(c));this.edgeLen=(l-p)*Math.cos(v)*n,this.curvatureHeight=n-Math.sqrt(n*n-this.edgeLen*this.edgeLen/4),h(f,b,0,this.centerAtSeaLevel),a.set(this.centerAtSeaLevel,this.tileUp),a.normalize(this.tileUp),this._updateOBB(),this.updateRadiusAndCenter()},p.prototype.isVisible=function(t,e){if(!this.intersectsClippingArea)return!1;if(this.lij[0]>9)for(var i=this.obb,s=0;s<6;s++){for(var r=0;r<8&&!(t[s][0]*i[r][0]+t[s][1]*i[r][1]+t[s][2]*i[r][2]+t[s][3]<0);r++);if(8===r)return!1}else{var o=this.radius,a=this.center;if(t[0][0]*a[0]+t[0][1]*a[1]+t[0][2]*a[2]+t[0][3]>o)return!1;if(t[1][0]*a[0]+t[1][1]*a[1]+t[1][2]*a[2]+t[1][3]>o)return!1;if(t[2][0]*a[0]+t[2][1]*a[1]+t[2][2]*a[2]+t[2][3]>o)return!1;if(t[3][0]*a[0]+t[3][1]*a[1]+t[3][2]*a[2]+t[3][3]>o)return!1;if(t[4][0]*a[0]+t[4][1]*a[1]+t[4][2]*a[2]+t[4][3]>o)return!1;if(t[5][0]*a[0]+t[5][1]*a[1]+t[5][2]*a[2]+t[5][3]>o)return!1}return!0},p.prototype.computeElevationBounds=function(){t.prototype.computeElevationBounds.call(this),this._updateOBB()},p.prototype.updateRadiusAndCenter=function(){if(0===this.lij[0])a.set3(0,0,0,this.center),this.radius=n+this.elevationBounds[1];else{t.prototype.updateRadiusAndCenter.call(this);var e=Math.max(a.dist2(this.center,this.obb[0]),a.dist2(this.center,this.obb[1]));this.radius=Math.sqrt(e)}},p.prototype._numSubdivisionsAtLevel=[128,64,32,16,16,8,8,4],p.prototype.createGeometry=function(t,i,s,r){var o=this._isPole(this.lij[1],this.lij[0]);return t.needsUpdate=!1,e.createSphericalGlobeTile(t.numVertsPerRow,this.extent,this.extentWGS84Rad,this._isWebMercator,t.samplerData,i,o,s,r)},p.prototype._updateOBB=function(){var t,e=this.extentWGS84Rad,i=this.obb;for(t=0;t<2;t++){var s=this.elevationBounds[t],r=4*t;h(e[1],e[0],s,i[r++]),h(e[3],e[0],s,i[r++]),h(e[3],e[2],s,i[r++]),h(e[1],e[2],s,i[r++])}if(this._isWebMercator){var o=this._isPole(this.lij[1],this.lij[0]);2===o?(a.set3(0,0,n,i[1]),a.set3(0,0,n,i[2]),a.set3(0,0,n,i[5]),a.set3(0,0,n,i[6])):1===o&&(a.set3(0,0,-n,i[0]),a.set3(0,0,-n,i[3]),a.set3(0,0,-n,i[4]),a.set3(0,0,-n,i[7]))}},p.prototype._isPole=function(t,e){var i=0;return t===(1<<e)-1&&(i+=1),0===t&&(i+=2),i},p.Pool=new i(p),p});