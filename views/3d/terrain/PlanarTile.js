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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/support/aaBoundingBox","../support/geometryUtils","../support/mathUtils","./Tile","./TileGeometryFactory"],function(t,e,i,s,n,r,o,u,a){var h=function(t){function e(i,s,n){var r=t.call(this,e.NumSubdivisionsAtLevel)||this;return r.tileUp=p,void 0!==i&&r.init(i,s,n),r}return i(e,t),e.prototype.init=function(e,i,s){t.prototype.init.call(this,e,i,s),this.edgeLen=this.extent[2]-this.extent[0],this.edgeLen2=this.edgeLen*this.edgeLen,this.curvatureHeight=0,this.centerAtSeaLevel[0]=o.lerp(this.extent[0],this.extent[2],.5),this.centerAtSeaLevel[1]=o.lerp(this.extent[1],this.extent[3],.5),this.centerAtSeaLevel[2]=0,this.updateRadiusAndCenter()},e.prototype.updateRadiusAndCenter=function(){t.prototype.updateRadiusAndCenter.call(this);var e=(this.extent[2]-this.extent[0])*Math.SQRT1_2,i=.5*(this.elevationBounds[0]-this.elevationBounds[1]);this.radius=Math.sqrt(e*e+i*i)},e.prototype._isVisible=function(){return this.intersectsClippingArea&&r.frustum.intersectsAABB(this.surface.frustum.planes,n.wrap(this.extent[0],this.extent[1],this.elevationBounds[0],this.extent[2],this.extent[3],this.elevationBounds[1]))},e.prototype.createGeometry=function(t,e,i){a.createPlanarGlobeTile(t,this.extent,e,i,this.renderData),this.updateMemoryUsed()},e.NumSubdivisionsAtLevel=[2,2,2,2,2,2,2,2],e}(u),p=s.vec3f64.fromValues(0,0,1);return h});