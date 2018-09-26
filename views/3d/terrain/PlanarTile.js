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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/ObjectPool","../lib/gl-matrix","../support/mathUtils","./Tile","./TileGeometryFactory"],function(e,t,i,n,r,s,o,a){var h=function(e){function t(i,n,r,s){var o=e.call(this,t.NumSubdivisionsAtLevel)||this;return o.tileUp=u,void 0!==i&&o.init(i,n,r,s),o}return i(t,e),t.prototype.init=function(t,i,n,r){e.prototype.init.call(this,t,i,n,r),this.edgeLen=this.extent[2]-this.extent[0],this.edgeLen2=this.edgeLen*this.edgeLen,this.curvatureHeight=0,this.centerAtSeaLevel[0]=s.lerp(this.extent[0],this.extent[2],.5),this.centerAtSeaLevel[1]=s.lerp(this.extent[1],this.extent[3],.5),this.centerAtSeaLevel[2]=0,this.updateRadiusAndCenter()},t.prototype.updateRadiusAndCenter=function(){e.prototype.updateRadiusAndCenter.call(this);var t=(this.extent[2]-this.extent[0])*Math.SQRT1_2,i=.5*(this.elevationBounds[0]-this.elevationBounds[1]);this.radius=Math.sqrt(t*t+i*i)},t.prototype.isVisible=function(e){if(!this.intersectsClippingArea)return!1;for(var t=this.extent[0],i=this.extent[1],n=this.elevationBounds[0],r=this.extent[2],s=this.extent[3],o=this.elevationBounds[1],a=0;a<6;++a){var h=e[a];if(h[0]*(h[0]>0?t:r)+h[1]*(h[1]>0?i:s)+h[2]*(h[2]>0?n:o)+h[3]>0)return!1}return!0},t.prototype.createGeometry=function(e,t,i){e.needsUpdate=!1,a.createPlanarGlobeTile(e.numVertsPerRow,this.extent,e.samplerData,t,i,e.clippingArea,this.renderData),this.updateMemoryUsed()},t.NumSubdivisionsAtLevel=[2,2,2,2,2,2,2,2],t.Pool=new n(t),t}(o),u=r.vec3d.createFrom(0,0,1);return h});