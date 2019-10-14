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

define(["require","exports","../../../../../core/tsSupport/decorateHelper","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/Error","../../../../../core/Logger","../../../../../core/promiseUtils","../../../../../core/accessorSupport/decorators","../../../../../renderers/support/heatmapUtils","../../../engine/BitmapTileContainer","./BaseTileRenderer","./support/HeatmapSource"],function(e,t,r,i,n,o,a,s,l,p,d,u){Object.defineProperty(t,"__esModule",{value:!0});var c=o.getLogger("esri.2d.layers.features.tileRenderers.HeatmapTileRenderer"),y=function(e){function t(t){var r=e.call(this,t)||this;r.featuresView={attributeView:{initialize:function(){},requestUpdate:function(){}}};var i=t.layerView.clips;return r.container=new p.BitmapTileContainer(t.tileInfoView,t.layerView.clips),r.handles.add([i.on("change",function(){return r.container.setClips(i)})]),r}return i(t,e),Object.defineProperty(t.prototype,"gradient",{get:function(){return l.generateGradient(this.renderer.toJSON())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"renderer",{get:function(){var e=this.layer.renderer.type;return"heatmap"!==this.layer.renderer.type?(c.error(new n("mapview-bad-type","Found invalid type "+e+" for renderer")),null):this.layer.renderer},enumerable:!0,configurable:!0}),t.prototype.createTile=function(e){var t=this.container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t},t.prototype.onConfigUpdate=function(){var e=this.renderer,t=e.minPixelIntensity,r=e.maxPixelIntensity,i=this.gradient;this.tiles.forEach(function(e){var n=e.bitmap.source;n&&(n.minPixelIntensity=t,n.maxPixelIntensity=r,n.gradient=i,e.bitmap.invalidateTexture())})},t.prototype.hitTest=function(e,t){return a.resolve([])},t.prototype.install=function(e){e.addChild(this.container)},t.prototype.uninstall=function(e){this.container.removeAllChildren(),e.removeChild(this.container)},t.prototype.disposeTile=function(e){this.container.removeChild(e),e.destroy()},t.prototype.supportsRenderer=function(e){return e&&"heatmap"===e.type},t.prototype.onTileData=function(e){var t=this.tiles.get(e.tileKey);if(t){var r=e.intensityInfo,i=this.renderer,n=i.minPixelIntensity,o=i.maxPixelIntensity,a=t.bitmap.source||new u.HeatmapSource;a.intensities=r&&r.matrix||null,a.minPixelIntensity=n,a.maxPixelIntensity=o,a.gradient=this.gradient,t.bitmap.source=a,this.container.addChild(t),this.requestUpdate()}},t.prototype.onTileError=function(e){console.error(e)},r([s.property({readOnly:!0,dependsOn:["layer.renderer"]})],t.prototype,"gradient",null),t=r([s.subclass("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],t)}(s.declared(d.default));t.default=y});