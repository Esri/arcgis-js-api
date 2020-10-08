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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../core/has","../../../../core/libs/gl-matrix-2/mat3","../../../../core/libs/gl-matrix-2/mat3f32","../DisplayObject","../../tiling/TileKey"],(function(t,e,o,i,r,s,n,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TiledDisplayObject=void 0;var l=function(t){function e(e,o,i,r){void 0===r&&(r=i);var n=t.call(this)||this;return n.triangleCountReportedInDebug=0,n.transforms={dvs:s.mat3f32.create(),tileMat3:s.mat3f32.create()},n.triangleCount=0,n.key=new a(e),n.bounds=o,n.size=i,n.coordRange=r,n}return o.__extends(e,t),e.prototype.destroy=function(){this.texture&&(this.texture.dispose(),this.texture=null)},Object.defineProperty(e.prototype,"coords",{get:function(){return this._coords},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bounds",{get:function(){return this._bounds},set:function(t){this._coords=[t[0],t[3]],this._bounds=t},enumerable:!1,configurable:!0}),e.prototype.setTransform=function(t,e){i("esri-2d-debug")&&null==e&&console.debug("Tried to set tile transform but lod resolution was null");var o=e/(t.resolution*t.pixelRatio),s=this.transforms.tileMat3,n=t.toScreenNoRotation([0,0],this.coords),a=n[0],l=n[1],u=this.size[0]/this.coordRange[0]*o,c=this.size[1]/this.coordRange[1]*o;r.mat3.set(s,u,0,0,0,c,0,a,l,1),r.mat3.multiply(this.transforms.dvs,t.displayViewMat3,s)},e}(n.DisplayObject);e.TiledDisplayObject=l}));