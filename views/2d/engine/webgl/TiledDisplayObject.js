// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/has","../../../../core/libs/gl-matrix-2/mat3","../../../../core/libs/gl-matrix-2/mat3f32","../DisplayObject","../../tiling/TileKey"],(function(e,t,o,r,i,s,n,l){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t,o,r,i){void 0===i&&(i=r);var n=e.call(this)||this;return n.transforms={dvs:s.mat3f32.create(),tileMat3:s.mat3f32.create()},n.triangleCount=0,n.key=l.pool.acquire(t),n.bounds=o,n.size=r,n.coordRange=i,n}return o(t,e),t.prototype.destroy=function(){l.pool.release(this.key),this.key=null,this.texture&&(this.texture.dispose(),this.texture=null)},Object.defineProperty(t.prototype,"coords",{get:function(){return this._coords},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"bounds",{get:function(){return this._bounds},set:function(e){this._coords=[e[0],e[3]],this._bounds=e},enumerable:!0,configurable:!0}),t.prototype.setTransform=function(e,t){r("esri-2d-debug")&&null==t&&console.debug("Tried to set tile transform but lod resolution was null");var o=t/(e.resolution*e.pixelRatio),s=this.transforms.tileMat3,n=e.toScreenNoRotation([0,0],this.coords),l=n[0],a=n[1],u=this.size[0]/this.coordRange[0]*o,c=this.size[1]/this.coordRange[1]*o;i.mat3.set(s,u,0,0,0,c,0,l,a,1),i.mat3.multiply(this.transforms.dvs,e.displayViewMat3,s)},t}(n.DisplayObject);t.TiledDisplayObject=a}));