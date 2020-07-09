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

define(["require","exports","tslib","../../../../../core/promiseUtils","../../../../../core/accessorSupport/decorators","../../../../../renderers/support/heatmapUtils","../../../engine/BitmapTileContainer","./BaseTileRenderer","./support/HeatmapSource"],(function(e,t,i,n,r,o,s,a,l){Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(t){var i=e.call(this,t)||this;return i._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},i.featuresView={attributeView:{initialize:function(){},requestUpdate:function(){}},requestRender:function(){}},i._container=new s.BitmapTileContainer(t.tileInfoView),i}return i.__extends(t,e),t.prototype.createTile=function(e){var t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t},t.prototype.onConfigUpdate=function(){var e=this,t=this.layer.renderer;if("heatmap"===t.type){var i=t.minPixelIntensity,n=t.maxPixelIntensity;this._intensityInfo.minPixelIntensity=i,this._intensityInfo.maxPixelIntensity=n,this._gradient=o.generateGradient(t.toJSON()),this.tiles.forEach((function(t){var r=t.bitmap.source;r&&(r.minPixelIntensity=i,r.maxPixelIntensity=n,r.gradient=e._gradient,t.bitmap.invalidateTexture())}))}},t.prototype.hitTest=function(){return n.resolve([])},t.prototype.install=function(e){e.addChild(this._container)},t.prototype.uninstall=function(e){this._container.removeAllChildren(),e.removeChild(this._container)},t.prototype.disposeTile=function(e){this._container.removeChild(e),e.destroy()},t.prototype.supportsRenderer=function(e){return e&&"heatmap"===e.type},t.prototype.onTileData=function(e){var t=this.tiles.get(e.tileKey);if(t){var i=e.intensityInfo,n=this._intensityInfo,r=n.minPixelIntensity,o=n.maxPixelIntensity,s=t.bitmap.source||new l.HeatmapSource;s.intensities=i&&i.matrix||null,s.minPixelIntensity=r,s.maxPixelIntensity=o,s.gradient=this._gradient,t.bitmap.source=s,this._container.addChild(t),this.requestUpdate()}},t.prototype.onTileError=function(e){console.error(e)},t=i.__decorate([r.subclass("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],t)}(a.default);t.default=p}));