// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/Accessor","../../../../../core/Error","../../../../../core/Logger","../../../../../core/promiseUtils","../../../../../core/accessorSupport/decorators","../../../../../renderers/support/heatmapUtils","../../../engine","./BaseTileRenderer","./support/HeatmapSource"],function(e,t,r,n,i,o,a,s,l,p,u,c,d){Object.defineProperty(t,"__esModule",{value:!0});var f=a.getLogger("esri.2d.layers.features.tileRenderers.HeatmapTileRenderer"),y=function(e){function t(t){var r=e.call(this,t)||this;return r.container=new u.BitmapContainer,r.featuresView={attributeView:{initialize:function(){},requestUpdate:function(){}}},r}return r(t,e),Object.defineProperty(t.prototype,"gradient",{get:function(){return p.generateGradient(this.renderer.toJSON())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"renderer",{get:function(){var e=this.layer.renderer.type;return"heatmap"!==this.layer.renderer.type?(f.error(new o("mapview-bad-type","Found invalid type "+e+" for renderer")),null):this.layer.renderer},enumerable:!0,configurable:!0}),t.prototype.createTile=function(e){var t=u.BitmapTile.pool.acquire();return t.key.set(e),this.tileInfoView.getTileCoords(t,e),t.resolution=this.tileInfoView.getTileResolution(e),t},t.prototype.onConfigUpdate=function(){var e=this.renderer,t=e.minPixelIntensity,r=e.maxPixelIntensity,n=this.gradient;this.tiles.forEach(function(e){var i=e.source;i&&(i.minPixelIntensity=t,i.maxPixelIntensity=r,i.gradient=n,e.invalidateTexture())})},t.prototype.clear=function(){this.tiles.forEach(function(e){var t=e.source;t&&(t.intensities=null)})},t.prototype.hitTest=function(e,t){return s.resolve([])},t.prototype.highlight=function(e){return{remove:function(){},pause:function(){},resume:function(){}}},t.prototype.install=function(e){e.addChild(this.container)},t.prototype.uninstall=function(e){this.container.removeAllChildren(),e.removeChild(this.container)},t.prototype.disposeTile=function(e){this.container.removeChild(e),u.BitmapTile.pool.release(e)},t.prototype.supportsRenderer=function(e){return e&&"heatmap"===e.type},t.prototype.onTileData=function(e){var t=this.tiles.get(e.tileKey);if(t){var r=e.intensityInfo,n=this.renderer,i=n.minPixelIntensity,o=n.maxPixelIntensity,a=t.source||new d.HeatmapSource;a.intensities=r&&r.matrix||null,a.minPixelIntensity=i,a.maxPixelIntensity=o,a.gradient=this.gradient,t.source=a,this.container.addChild(t),this.requestUpdate()}},t.prototype.onTileError=function(e){console.error(e)},n([l.property({readOnly:!0,dependsOn:["layer.renderer"]})],t.prototype,"gradient",null),t=n([l.subclass("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],t)}(l.declared(i,c.default));t.default=y});