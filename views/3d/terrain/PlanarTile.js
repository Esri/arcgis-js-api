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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/ObjectPool","../lib/glMatrix","../support/mathUtils","./Tile","./TileGeometryFactory"],function(t,e,i,n,r,s,o,a){var h=function(t){function e(i,n,r,s){var o=t.call(this,e.NumSubdivisionsAtLevel)||this;return o.tileUp=u,void 0!==i&&o.init(i,n,r,s),o}return i(e,t),e.prototype.init=function(e,i,n,r){t.prototype.init.call(this,e,i,n,r),this.edgeLen=this.extent[2]-this.extent[0],this.curvatureHeight=0,this.centerAtSeaLevel[0]=s.lerp(this.extent[0],this.extent[2],.5),this.centerAtSeaLevel[1]=s.lerp(this.extent[1],this.extent[3],.5),this.centerAtSeaLevel[2]=0,this.updateRadiusAndCenter()},e.prototype.updateRadiusAndCenter=function(){t.prototype.updateRadiusAndCenter.call(this);var e=(this.extent[2]-this.extent[0])*Math.SQRT1_2,i=.5*(this.elevationBounds[0]-this.elevationBounds[1]);this.radius=Math.sqrt(e*e+i*i)},e.prototype.isVisible=function(t){if(!this.intersectsClippingArea)return!1;for(var e=this.extent[0],i=this.extent[1],n=this.elevationBounds[0],r=this.extent[2],s=this.extent[3],o=this.elevationBounds[1],a=0;a<6;++a){var h=t[a];if(h[0]*(h[0]>0?e:r)+h[1]*(h[1]>0?i:s)+h[2]*(h[2]>0?n:o)+h[3]>0)return!1}return!0},e.prototype.createGeometry=function(t,e,i){t.needsUpdate=!1,a.createPlanarGlobeTile(t.numVertsPerRow,this.extent,t.samplerData,e,i,t.clippingArea,this.renderData),this.updateMemoryUsed()},e.NumSubdivisionsAtLevel=[2,2,2,2,2,2,2,2],e.Pool=new n(e),e}(o),u=r.vec3d.createFrom(0,0,1);return h});