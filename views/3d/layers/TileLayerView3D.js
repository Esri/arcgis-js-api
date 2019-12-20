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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/accessorSupport/decorators","./LayerView3D","./TiledLayerView3D","./support/tiledLayerUtils","../terrain/terrainUtils","../../layers/LayerView","../../layers/RefreshableLayerView","../../layers/TileLayerView","../../support/drapedUtils"],function(e,r,t,i,a,o,n,l,p,s,y,u,c,d,f){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),Object.defineProperty(r.prototype,"imageFormatIsOpaque",{get:function(){return"jpg"===this.get("layer.tileInfo.format")},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"dataLevelRange",{get:function(){var e=this.tileInfo.lods,r=e[0].scale,t=e[e.length-1].scale,i=this.levelRangeFromScaleRange(r,t);return i.maxLevel=Math.min(i.maxLevel,y.getKnownTiledServiceLevelCap(this.layer.url)),i},enumerable:!0,configurable:!0}),r.prototype.initialize=function(){this._addTilingSchemeMatchPromise(),"version"in this.layer&&this.addResolvingPromise(s.checkArcGISServiceVersionCompatibility(this.layer))},r.prototype.createFetchPopupFeaturesQueryGeometry=function(e,r){return f.createQueryGeometry(e,r,this.view)},r.prototype.doRefresh=function(e){return o(this,void 0,void 0,function(){return a(this,function(e){return this.suspended?[2]:(this.emit("data-changed"),[2])})})},r.prototype.getStats=function(){return{memory:Math.round(this.view.basemapTerrain.getUsedMemoryForLayerView(this)/1024/1024)+" MB (included in Terrain)"}},i([n.property({readOnly:!0,dependsOn:["layer.tileInfo.format"]})],r.prototype,"imageFormatIsOpaque",null),i([n.property({aliasOf:"layer.fullExtent"})],r.prototype,"fullExtent",void 0),i([n.property()],r.prototype,"layer",void 0),i([n.property({aliasOf:"layer.tileInfo"})],r.prototype,"tileInfo",void 0),i([n.property({readOnly:!0,dependsOn:["tileInfo","view.basemapTerrain.tilingScheme","layer.url"]})],r.prototype,"dataLevelRange",null),r=i([n.subclass("esri.views.3d.layers.TileLayerView3D")],r)}(n.declared(c.RefreshableLayerView(p.TiledLayerView3D(d.TileLayerView(l.LayerView3D(u))))))});