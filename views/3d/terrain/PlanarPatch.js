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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/support/aaBoundingBox","../support/geometryUtils","../support/mathUtils","./PatchGeometryFactory","./Tile"],function(t,e,i,n,s,r,o,u,h){return function(t){function e(i,s,r){var o=t.call(this,e.NumSubdivisionsAtLevel)||this;return o.up=n.vec3f64.unitZ(),void 0!==i&&o.init(i,s,r),o}return i(e,t),e.prototype.init=function(e,i,n){t.prototype.init.call(this,e,i,n),this.edgeLen=this.extent[2]-this.extent[0],this.edgeLen2=this.edgeLen*this.edgeLen,this.curvatureHeight=0,this.centerAtSeaLevel[0]=o.lerp(this.extent[0],this.extent[2],.5),this.centerAtSeaLevel[1]=o.lerp(this.extent[1],this.extent[3],.5),this.centerAtSeaLevel[2]=0,this.updateRadiusAndCenter()},e.prototype.updateRadiusAndCenter=function(){t.prototype.updateRadiusAndCenter.call(this);var e=(this.extent[2]-this.extent[0])*Math.SQRT1_2,i=.5*(this.elevationBounds[0]-this.elevationBounds[1]);this.radius=Math.sqrt(e*e+i*i)},e.prototype._isVisible=function(){return this.intersectsClippingArea&&r.frustum.intersectsAABB(this.surface.frustum.planes,s.wrap(this.extent[0],this.extent[1],this.elevationBounds[0],this.extent[2],this.extent[3],this.elevationBounds[1]))},e.prototype.createGeometry=function(t,e,i){u.createPlanarGlobePatch(t,this.extent,e,this.renderData,i),this.updateMemoryUsed()},e.NumSubdivisionsAtLevel=[2,2,2,2,2,2,2,2],e}(h)});