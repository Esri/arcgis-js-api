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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../geometry/support/aaBoundingRect","../engine","./BitmapTile","./webgl/enums","./webgl/TileContainer"],function(e,t,r,n,i,o,a,s,p){Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.createTile=function(e){var t=this._tileInfoView.getTileBounds(i.create(),e);return new a.BitmapTile(e,t,this._tileInfoView.tileInfo.size)},t.prototype.destroyTile=function(){},t.prototype.prepareRenderPasses=function(t){var r=this,n=t.registerRenderPass({name:"bitmap (tile)",brushes:[o.brushes.Bitmap],target:function(){return r.children.map(function(e){return e.bitmap})},drawPhase:s.WGLDrawPhase.MAP});return e.prototype.prepareRenderPasses.call(this,t).concat([n])},t.prototype.doRender=function(t){this.visible&&t.drawPhase===s.WGLDrawPhase.MAP&&e.prototype.doRender.call(this,t)},t}(p.default);t.BitmapTileContainer=u});