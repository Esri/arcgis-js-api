// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/mathUtils","../../../geometry/support/aaBoundingBox","../support/geometryUtils","./PatchGeometryFactory","./Tile"],function(t,e,i,n,s,r,o,a){Object.defineProperty(e,"__esModule",{value:!0});var h=function(t){function e(i,n,s){var r=t.call(this,e.NumSubdivisionsAtLevel)||this;return void 0!==i&&r.init(i,n,s),r}return i(e,t),e.prototype.init=function(e,i,s){t.prototype.init.call(this,e,i,s),this._edgeLen=this.extent[2]-this.extent[0],this._edgeLen2=this._edgeLen*this._edgeLen,this.centerAtSeaLevel[0]=n.lerp(this.extent[0],this.extent[2],.5),this.centerAtSeaLevel[1]=n.lerp(this.extent[1],this.extent[3],.5),this.centerAtSeaLevel[2]=0,this.updateRadiusAndCenter()},e.prototype.updateRadiusAndCenter=function(){this._updateCenter();var t=(this.extent[2]-this.extent[0])*Math.SQRT1_2,e=.5*(this.elevationBounds[0]-this.elevationBounds[1]);this._radius=Math.sqrt(t*t+e*e)},e.prototype._isVisible=function(){return this.intersectsClippingArea&&r.frustum.intersectsAABB(this.surface.frustum.planes,s.wrap(this.extent[0],this.extent[1],this.elevationBounds[0],this.extent[2],this.extent[3],this.elevationBounds[1]))},e.prototype.createGeometry=function(t,e){o.createPlanarGlobePatch(t,this.extent,e,this.renderData),this.setMemoryDirty()},e.NumSubdivisionsAtLevel=[2,2,2,2,2,2,2,2],e}(a.Tile);e.PlanarPatch=h});