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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["./TileBase","./TileGeometryFactory","../../../core/ObjectPool","../support/mathUtils","../lib/glMatrix"],function(t,e,i,n,s){var r=s.vec3d,o=r.createFrom(0,0,1),a=function(e,i,n,s){t.call(this),this.tileUp=o,void 0!==e&&this.init(e,i,n,s)};return a.prototype=new t,a.prototype.constructor=a,a.prototype.init=function(e,i,s,r){t.prototype.init.call(this,e,i,s,r),this.edgeLen=this.extent[2]-this.extent[0],this.curvatureHeight=0,this.centerAtSeaLevel[0]=n.lerp(this.extent[0],this.extent[2],.5),this.centerAtSeaLevel[1]=n.lerp(this.extent[1],this.extent[3],.5),this.centerAtSeaLevel[2]=0,this.updateRadiusAndCenter()},a.prototype.updateRadiusAndCenter=function(){t.prototype.updateRadiusAndCenter.call(this);var e=(this.extent[2]-this.extent[0])*Math.SQRT1_2,i=.5*(this.elevationBounds[0]-this.elevationBounds[1]);this.radius=Math.sqrt(e*e+i*i)},a.prototype.isVisible=function(t){if(!this.intersectsClippingArea)return!1;var e=this.extent[0],i=this.extent[1],n=this.elevationBounds[0],s=this.extent[2],r=this.extent[3],o=this.elevationBounds[1];return t[0][0]*(t[0][0]>0?e:s)+t[0][1]*(t[0][1]>0?i:r)+t[0][2]*(t[0][2]>0?n:o)+t[0][3]>0?!1:t[1][0]*(t[1][0]>0?e:s)+t[1][1]*(t[1][1]>0?i:r)+t[1][2]*(t[1][2]>0?n:o)+t[1][3]>0?!1:t[2][0]*(t[2][0]>0?e:s)+t[2][1]*(t[2][1]>0?i:r)+t[2][2]*(t[2][2]>0?n:o)+t[2][3]>0?!1:t[3][0]*(t[3][0]>0?e:s)+t[3][1]*(t[3][1]>0?i:r)+t[3][2]*(t[3][2]>0?n:o)+t[3][3]>0?!1:t[4][0]*(t[4][0]>0?e:s)+t[4][1]*(t[4][1]>0?i:r)+t[4][2]*(t[4][2]>0?n:o)+t[4][3]>0?!1:t[5][0]*(t[5][0]>0?e:s)+t[5][1]*(t[5][1]>0?i:r)+t[5][2]*(t[5][2]>0?n:o)+t[5][3]>0?!1:!0},a.prototype._numSubdivisionsAtLevel=[2,2,2,2,2,2,2,2],a.prototype.createGeometry=function(t,i,n){return t.needsUpdate=!1,e.createPlanarGlobeTile(t.numVertsPerRow,this.extent,t.samplerData,i,n,t.clippingArea)},a.Pool=new i(a,function(){},!1),a});