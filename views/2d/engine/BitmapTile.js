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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","./Bitmap","./webgl/TiledDisplayObject"],(function(t,e,i,r,a,n){Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,i,r,n){void 0===n&&(n=null);var o=t.call(this,e,i,r,r)||this,s=o.requestRender.bind(o);return o.bitmap=new a.Bitmap(n,s),o.bitmap.coordScale=r,o.bitmap.once("isReady",(function(){return o.ready()})),o}return i(e,t),Object.defineProperty(e.prototype,"stencilRef",{get:function(){return this.bitmap.stencilRef},set:function(t){this.bitmap.stencilRef=t},enumerable:!0,configurable:!0}),e.prototype.setTransform=function(e,i){t.prototype.setTransform.call(this,e,i),this.bitmap.transforms.dvs=this.transforms.dvs},e.prototype.attach=function(){this.bitmap.stage=this.stage;var t=this.bitmap.attach();return t&&(this.bitmap.attached=!0),t},e.prototype.detach=function(){this.bitmap.detach()},e}(n.TiledDisplayObject);e.BitmapTile=o}));