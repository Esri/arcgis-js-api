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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../geometry/support/aaBoundingRect","../engine","./BitmapTile","./webgl/enums","./webgl/TileContainer"],(function(e,t,r,i,n,a,s,o){Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.createTile=function(e){var t=this._tileInfoView.getTileBounds(i.create(),e);return new a.BitmapTile(e,t,this._tileInfoView.tileInfo.size)},t.prototype.destroyTile=function(){},t.prototype.prepareRenderPasses=function(t){var i=this,a=t.registerRenderPass({name:"bitmap (tile)",brushes:[n.brushes.Bitmap],target:function(){return i.children.map((function(e){return e.bitmap}))},drawPhase:s.WGLDrawPhase.MAP});return r.__spreadArrays(e.prototype.prepareRenderPasses.call(this,t),[a])},t.prototype.doRender=function(t){this.visible&&t.drawPhase===s.WGLDrawPhase.MAP&&e.prototype.doRender.call(this,t)},t}(o.default);t.BitmapTileContainer=p}));