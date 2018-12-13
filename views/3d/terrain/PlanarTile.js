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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/ObjectPool","../../../core/libs/gl-matrix-2/gl-matrix","../../../geometry/support/aaBoundingBox","../support/geometryUtils","../support/mathUtils","./Tile","./TileGeometryFactory"],function(t,e,i,n,s,r,o,a,u,h){var l=function(t){function e(i,n,s,r){var o=t.call(this,e.NumSubdivisionsAtLevel)||this;return o.tileUp=p,void 0!==i&&o.init(i,n,s,r),o}return i(e,t),e.prototype.init=function(e,i,n,s){t.prototype.init.call(this,e,i,n,s),this.edgeLen=this.extent[2]-this.extent[0],this.edgeLen2=this.edgeLen*this.edgeLen,this.curvatureHeight=0,this.centerAtSeaLevel[0]=a.lerp(this.extent[0],this.extent[2],.5),this.centerAtSeaLevel[1]=a.lerp(this.extent[1],this.extent[3],.5),this.centerAtSeaLevel[2]=0,this.updateRadiusAndCenter()},e.prototype.updateRadiusAndCenter=function(){t.prototype.updateRadiusAndCenter.call(this);var e=(this.extent[2]-this.extent[0])*Math.SQRT1_2,i=.5*(this.elevationBounds[0]-this.elevationBounds[1]);this.radius=Math.sqrt(e*e+i*i)},e.prototype.isVisible=function(t){return!!this.intersectsClippingArea&&o.frustum.intersectsAABB(t,r.wrap(this.extent[0],this.extent[1],this.elevationBounds[0],this.extent[2],this.extent[3],this.elevationBounds[1]))},e.prototype.createGeometry=function(t,e,i){t.needsUpdate=!1,h.createPlanarGlobeTile(t.numVertsPerRow,this.extent,t.samplerData,e,i,t.clippingArea,this.renderData),this.updateMemoryUsed()},e.NumSubdivisionsAtLevel=[2,2,2,2,2,2,2,2],e.Pool=new n(e),e}(u),p=s.vec3f64.fromValues(0,0,1);return l});