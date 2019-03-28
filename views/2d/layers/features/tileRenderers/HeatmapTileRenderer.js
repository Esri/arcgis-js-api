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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../renderers","../../../../../core/Accessor","../../../../../core/maybe","../../../../../core/promiseUtils","../../../../../core/accessorSupport/decorators","../../../../../renderers/support/diffUtils","../../../../../renderers/support/heatmapUtils","../../../engine/BitmapContainer","../../../engine/BitmapTile","./BaseTileRenderer","./support/HeatmapSource"],function(e,t,i,r,n,o,s,a,l,u,p,c,d,f,h){Object.defineProperty(t,"__esModule",{value:!0});var y=function(e){function t(t){var i=e.call(this,t)||this;return i.container=new c.BitmapContainer,i}return i(t,e),Object.defineProperty(t.prototype,"gradient",{get:function(){return p.generateGradient(this.configuration.renderer)},enumerable:!0,configurable:!0}),t.prototype.createTile=function(e){var t=d.BitmapTile.pool.acquire();return t.key.set(e),this.tileInfoView.getTileCoords(t,e),t.resolution=this.tileInfoView.getTileResolution(e),t},t.prototype.applyConfiguration=function(e){this.configuration=e;var t=e.renderer,i=t.minPixelIntensity,r=t.maxPixelIntensity,n=this.gradient;this.tiles.forEach(function(e){var t=e.source;t&&(t.minPixelIntensity=i,t.maxPixelIntensity=r,t.gradient=n,e.invalidateTexture())})},t.prototype.clear=function(){this.tiles.forEach(function(e){var t=e.source;t&&(t.intensities=null)})},t.prototype.getProcessorConfiguration=function(){var e=this.layer,t=this.layerView;return{type:"heatmap",renderer:e.renderer.toJSON(),definitionExpression:e.definitionExpression,availableFields:t.availableFields,gdbVersion:e.gdbVersion,historicMoment:e.historicMoment&&e.historicMoment.getTime()}},t.prototype.hitTest=function(e,t){return a.resolve([])},t.prototype.highlight=function(e){return{remove:function(){},pause:function(){},resume:function(){}}},t.prototype.install=function(e){e.addChild(this.container)},t.prototype.uninstall=function(e){this.container.removeAllChildren(),e.removeChild(this.container)},t.prototype.needsProcessorReconfiguration=function(e){var t=this.configuration;return this.wouldClear(e)||t.definitionExpression!==e.definitionExpression},t.prototype.wouldClear=function(e){var t=this.configuration;if(!t||t.availableFields.join()!==e.availableFields.join())return!0;var i=this.configuration&&n.fromJSON(this.configuration.renderer)||null,r=e&&n.fromJSON(e.renderer)||null,o=u.diff(i,r);if(s.isNone(o))return!1;switch(o.type){case"complete":return!0;case"partial":for(var a in o.diff)if("colorStops"!==a&&"minPixelIntensity"!==a&&"maxPixelIntensity"!==a)return!0}return!1},t.prototype.disposeTile=function(e){this.container.removeChild(e),d.BitmapTile.pool.release(e)},t.prototype.supportsRenderer=function(e){return e&&"heatmap"===e.type},t.prototype.onTileData=function(e){var t=this.tiles.get(e.tileKey);if(t){var i=e.intensityInfo,r=this.configuration.renderer,n=r.minPixelIntensity,o=r.maxPixelIntensity,s=t.source||new h.HeatmapSource;s.intensities=i&&i.matrix||null,s.minPixelIntensity=n,s.maxPixelIntensity=o,s.gradient=this.gradient,t.source=s,this.container.addChild(t),this.requestUpdate()}},t.prototype.onTileError=function(e){console.error(e)},t.prototype.setFilterFlags=function(e,t,i,r){},r([l.property({readOnly:!0,dependsOn:["configuration"]})],t.prototype,"gradient",null),t=r([l.subclass()],t)}(l.declared(o,f.default));t.default=y});