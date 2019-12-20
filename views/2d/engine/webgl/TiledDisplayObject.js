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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/has","../../../../core/libs/gl-matrix-2/mat3","../../../../core/libs/gl-matrix-2/mat3f32","../DisplayObject","../../tiling/TileKey"],function(e,t,o,u,c,n,r,l){Object.defineProperty(t,"__esModule",{value:!0});var i=function(s){function e(e,t,o,r){void 0===r&&(r=o);var i=s.call(this)||this;return i.transforms={dvs:n.mat3f32.create(),tileMat3:n.mat3f32.create()},i.triangleCount=0,i.key=l.pool.acquire(e),i.bounds=t,i.size=o,i.coordRange=r,i}return o(e,s),e.prototype.destroy=function(){l.pool.release(this.key),this.key=null,this.texture&&(this.texture.dispose(),this.texture=null)},Object.defineProperty(e.prototype,"coords",{get:function(){return this._coords},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bounds",{get:function(){return this._bounds},set:function(e){this._coords=[e[0],e[3]],this._bounds=e},enumerable:!0,configurable:!0}),e.prototype.setTransform=function(e,t){u("esri-2d-debug")&&null==t&&console.debug("Tried to set tile transform but lod resolution was null");var o=t/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,i=e.toScreenNoRotation([0,0],this.coords),s=i[0],n=i[1],l=this.size[0]/this.coordRange[0]*o,a=this.size[1]/this.coordRange[1]*o;c.mat3.set(r,l,0,0,0,a,0,s,n,1),c.mat3.multiply(this.transforms.dvs,e.displayViewMat3,r)},e}(r.DisplayObject);t.TiledDisplayObject=i});