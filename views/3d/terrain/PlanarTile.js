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

define(["./TileBase","./TileGeometryFactory","./TerrainConst","../support/ObjectPool","../support/mathUtils","../lib/glMatrix"],function(t,e,i,n,s,r){var o=r.vec3d,a=o.createFrom(0,0,1),p=function(e,i,n,s){t.call(this),this.tileUp=a,void 0!==e&&this.init(e,i,n,s)};return p.prototype=new t,p.prototype.constructor=p,p.prototype.init=function(e,i,n,r){t.prototype.init.call(this,e,i,n,r);var o=e[0],a=e[1],p=e[2];r.getExtent(o,a,p,this.extent,this.extentWGS84Rad),this.edgeLen=this.extent[2]-this.extent[0],this.centerAtSeaLevel[0]=s.lerp(this.extent[0],this.extent[2],.5),this.centerAtSeaLevel[1]=s.lerp(this.extent[1],this.extent[3],.5),this.centerAtSeaLevel[2]=0,this.updateRadiusAndCenter()},p.prototype.updateRadiusAndCenter=function(){t.prototype.updateRadiusAndCenter.call(this);var e=(this.extent[2]-this.extent[0])*Math.SQRT1_2,i=.5*(this.elevationBounds[0]-this.elevationBounds[1]);this.radius=Math.sqrt(e*e+i*i)},p.prototype.isVisible=function(t){if(!this.intersectsClippingArea)return!1;var e=this.extent[0],i=this.extent[1],n=this.elevationBounds[0],s=this.extent[2],r=this.extent[3],o=this.elevationBounds[1];return t[0][0]*(t[0][0]>0?e:s)+t[0][1]*(t[0][1]>0?i:r)+t[0][2]*(t[0][2]>0?n:o)+t[0][3]>0?!1:t[1][0]*(t[1][0]>0?e:s)+t[1][1]*(t[1][1]>0?i:r)+t[1][2]*(t[1][2]>0?n:o)+t[1][3]>0?!1:t[2][0]*(t[2][0]>0?e:s)+t[2][1]*(t[2][1]>0?i:r)+t[2][2]*(t[2][2]>0?n:o)+t[2][3]>0?!1:t[3][0]*(t[3][0]>0?e:s)+t[3][1]*(t[3][1]>0?i:r)+t[3][2]*(t[3][2]>0?n:o)+t[3][3]>0?!1:t[4][0]*(t[4][0]>0?e:s)+t[4][1]*(t[4][1]>0?i:r)+t[4][2]*(t[4][2]>0?n:o)+t[4][3]>0?!1:t[5][0]*(t[5][0]>0?e:s)+t[5][1]*(t[5][1]>0?i:r)+t[5][2]*(t[5][2]>0?n:o)+t[5][3]>0?!1:!0},p.prototype._numSubdivisionsAtLevel=[2,2,2,2,2,2,2,2],p.prototype.createGeometry=function(t,i,n){return t.needsUpdate=!1,e.createPlanarGlobeTile(t.numVertsPerRow,this.extent,t.samplerData,i,n,t.clippingArea)},p.prototype.elevationStartsAtLevel=i.Planar.ELEVATION_STARTS_AT_LEVEL,n.on(p,400),p});