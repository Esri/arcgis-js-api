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

define(["require","exports","tslib","./RasterBitmap","./webgl/TiledDisplayObject"],(function(t,e,i,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RasterTile=void 0;var s=function(t){function e(e,i,r,s){void 0===s&&(s=null);var o=t.call(this,e,i,r)||this;return o.bitmap=new n.RasterBitmap(s,null,null),o.bitmap.coordScale=r,o.bitmap.once("isReady",(function(){return o.ready()})),o}return i.__extends(e,t),Object.defineProperty(e.prototype,"stencilRef",{get:function(){return this.bitmap.stencilRef},set:function(t){this.bitmap.stencilRef=t},enumerable:!1,configurable:!0}),e.prototype.getMemoryUsage=function(){return this.bitmap.getMemoryUsage()},e.prototype.setTransform=function(e,i){t.prototype.setTransform.call(this,e,i),this.bitmap.transforms.dvs=this.transforms.dvs},e.prototype.release=function(){return this.destroy(),this.bitmap=null,this.stage=null,!0},e.prototype.onAttach=function(){this.bitmap.stage=this.stage},e.prototype.onDetach=function(){this.bitmap.stage=null},e}(r.TiledDisplayObject);e.RasterTile=s}));