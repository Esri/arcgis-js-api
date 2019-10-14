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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/has","../../../../core/libs/gl-matrix-2/mat3","../../../../core/libs/gl-matrix-2/mat3f32","../DisplayObject","../../tiling/TileKey"],function(t,e,o,l,u,i,r,n){Object.defineProperty(e,"__esModule",{value:!0});var s=function(s){function t(t,e,o){var r=s.call(this)||this;return r.transforms={dvs:i.mat3f32.create(),tileMat3:i.mat3f32.create()},r.key=n.pool.acquire(t),r.bounds=e,r.size=o,r}return o(t,s),t.prototype.destroy=function(){n.pool.release(this.key),this.texture&&this.texture.dispose()},Object.defineProperty(t.prototype,"coords",{get:function(){return this._coords},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"bounds",{get:function(){return this._bounds},set:function(t){this._coords=[t[0],t[3]],this._bounds=t},enumerable:!0,configurable:!0}),t.prototype.setTransform=function(t,e){l("esri-2d-debug")&&null==e&&console.debug("Tried to set tile transform but lod resolution was null");var o=e/(t.resolution*t.pixelRatio),r=this.transforms.tileMat3,s=t.toScreenNoRotation([0,0],this.coords),i=s[0],n=s[1],a=o;u.mat3.set(this.transforms.tileMat3,a,0,0,0,a,0,i,n,1),u.mat3.multiply(this.transforms.dvs,t.displayViewMat3,r)},t}(r.DisplayObject);e.TiledDisplayObject=s});