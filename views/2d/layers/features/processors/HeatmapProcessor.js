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

define(["require","exports","tslib","../../../../../core/accessorSupport/decorators","../../../../../renderers/support/heatmapUtils","./BaseProcessor"],(function(e,t,r,o,i,n){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="heatmap",t.updating=!1,t}return r.__extends(t,e),t.prototype.update=function(e){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(t){return this._set("config",e),[2]}))}))},t.prototype.onTileData=function(e,t,r){if(t&&t.addOrUpdate&&t.addOrUpdate.length>0){var o=i.calculateHeatmapIntensityInfo(t.addOrUpdate,this.config.renderer,512,512);return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.key.id,intensityInfo:o},{transferList:[o.matrix]})}return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.key.id,intensityInfo:null},r)},t.prototype.onTileError=function(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)},r.__decorate([o.property()],t.prototype,"config",void 0),r.__decorate([o.property()],t.prototype,"updating",void 0),t=r.__decorate([o.subclass("esri.views.2d.layers.features.processors.HeatmapProcessor")],t)}(n.default);t.default=a}));