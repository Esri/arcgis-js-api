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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../renderers","../../../../../core/Accessor","../../../../../core/promiseUtils","../../../../../core/accessorSupport/decorators","../../../../../renderers/support/diffUtils","../../../../../renderers/support/heatmapUtils","../../../engine/BitmapContainer","../../../engine/BitmapTile","./BaseTileRenderer","./support/HeatmapSource"],function(e,t,i,r,n,o,s,a,l,u,p,c,d,f){Object.defineProperty(t,"__esModule",{value:!0});var h=function(e){function t(t){var i=e.call(this,t)||this;return i.container=new p.BitmapContainer,i}return i(t,e),Object.defineProperty(t.prototype,"gradient",{get:function(){return u.generateGradient(this.configuration.renderer)},enumerable:!0,configurable:!0}),t.prototype.createTile=function(e){var t=c.BitmapTile.pool.acquire();return t.key.set(e),this.tileInfoView.getTileCoords(t,e),t.resolution=this.tileInfoView.getTileResolution(e),t},t.prototype.applyConfiguration=function(e){this.configuration=e;var t=e.renderer,i=t.minPixelIntensity,r=t.maxPixelIntensity,n=this.gradient;this.tiles.forEach(function(e){var t=e.source;t&&(t.minPixelIntensity=i,t.maxPixelIntensity=r,t.gradient=n,e.invalidateTexture())})},t.prototype.clear=function(){this.tiles.forEach(function(e){var t=e.source;t&&(t.intensities=null)})},t.prototype.getProcessorConfiguration=function(){var e=this.layer;return{type:"heatmap",renderer:e.renderer.toJSON(),definitionExpression:e.definitionExpression,outFields:e.outFields,gdbVersion:e.gdbVersion,historicMoment:e.historicMoment&&e.historicMoment.getTime()}},t.prototype.hitTest=function(e,t){return s.resolve([])},t.prototype.highlight=function(e){return{remove:function(){}}},t.prototype.install=function(e){e.addChild(this.container)},t.prototype.uninstall=function(e){this.container.removeAllChildren(),e.removeChild(this.container)},t.prototype.needsProcessorReconfiguration=function(e){var t=this.configuration;return this.wouldClear(e)||t.definitionExpression!==e.definitionExpression},t.prototype.wouldClear=function(e){var t=this.configuration;if(!t||t.outFields.join()!==e.outFields.join())return!0;var i=this.configuration&&n.fromJSON(this.configuration.renderer)||null,r=e&&n.fromJSON(e.renderer)||null,o=l.diff(i,r);if(!o)return!1;switch(o.type){case"complete":return!0;case"partial":for(var s in o.diff)if("colorStops"!==s&&"minPixelIntensity"!==s&&"maxPixelIntensity"!==s)return!0}return!1},t.prototype.disposeTile=function(e){this.container.removeChild(e),c.BitmapTile.pool.release(e)},t.prototype.supportsRenderer=function(e){return e&&"heatmap"===e.type},t.prototype.onTileData=function(e){var t=this.tiles.get(e.tileKey);if(t){var i=e.intensityInfo,r=this.configuration.renderer,n=r.minPixelIntensity,o=r.maxPixelIntensity,s=t.source||new f.HeatmapSource;s.intensities=i&&i.matrix||null,s.minPixelIntensity=n,s.maxPixelIntensity=o,s.gradient=this.gradient,t.source=s,this.container.addChild(t),this.requestUpdate()}},t.prototype.onTileError=function(e){console.error(e)},r([a.property({readOnly:!0,dependsOn:["configuration"]})],t.prototype,"gradient",null),t=r([a.subclass()],t)}(a.declared(o,d.default));t.default=h});