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

define(["require","exports","tslib","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","../../../core/accessorSupport/decorators","./LayerView3D","./TiledLayerView3D","./support/tiledLayerUtils","../support/projectionUtils","../../layers/LayerView","../../layers/RefreshableLayerView","../../layers/TileLayerView","../../support/drapedUtils"],(function(e,t,r,i,a,o,n,l,s,p,y,c,u,f,d){"use strict";return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),Object.defineProperty(t.prototype,"imageFormatIsOpaque",{get:function(){return"jpg"===this.layer.tileInfo.format},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasMixedImageFormats",{get:function(){return"mixed"===this.layer.tileInfo.format},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dataLevelRange",{get:function(){if(this.tileInfo){var e=this.tileInfo.lods,t=e[0].scale,r=e[e.length-1].scale;return this.levelRangeFromScaleRange(t,r)}return{minLevel:0,maxLevel:0}},enumerable:!1,configurable:!0}),t.prototype.initialize=function(){if("web-tile"===this.layer.type){var e=this.layer.get("fullExtent.spatialReference"),t=this.layer.get("tileInfo.spatialReference");if(a.isNone(e)||a.isNone(t)||!y.canProject(e,t)){var r="defaults"===this.layer.originOf("fullExtent")||a.isNone(this.layer.fullExtent)?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(o.reject(new i("layerview:incompatible-fullextent",r)))}}this._addTilingSchemeMatchPromise(),"version"in this.layer&&this.addResolvingPromise(p.checkArcGISServiceVersionCompatibility(this.layer))},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return d.createQueryGeometry(e,t,this.view)},t.prototype.doRefresh=function(e){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return this.suspended?[2]:(this.emit("data-changed"),[2])}))}))},r.__decorate([n.property({readOnly:!0,dependsOn:["layer.tileInfo.format"]})],t.prototype,"imageFormatIsOpaque",null),r.__decorate([n.property({readOnly:!0,dependsOn:["layer.tileInfo.format"]})],t.prototype,"hasMixedImageFormats",null),r.__decorate([n.property({aliasOf:"layer.fullExtent"})],t.prototype,"fullExtent",void 0),r.__decorate([n.property()],t.prototype,"layer",void 0),r.__decorate([n.property({aliasOf:"layer.tileInfo"})],t.prototype,"tileInfo",void 0),r.__decorate([n.property({readOnly:!0,dependsOn:["tileInfo","view.basemapTerrain.tilingScheme","layer.url"]})],t.prototype,"dataLevelRange",null),t=r.__decorate([n.subclass("esri.views.3d.layers.TileLayerView3D")],t)}(u.RefreshableLayerView(s.TiledLayerView3D(f.TileLayerView(l.LayerView3D(c)))))}));