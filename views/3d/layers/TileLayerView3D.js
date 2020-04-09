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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","../../../core/accessorSupport/decorators","./LayerView3D","./TiledLayerView3D","./support/tiledLayerUtils","../support/projectionUtils","../../layers/LayerView","../../layers/RefreshableLayerView","../../layers/TileLayerView","../../support/drapedUtils"],(function(e,r,t,i,o,a,l,n,s,p,y,u,c,f,d,h,m,g){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),Object.defineProperty(r.prototype,"imageFormatIsOpaque",{get:function(){return"jpg"===this.layer.tileInfo.format},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"hasMixedImageFormats",{get:function(){return"mixed"===this.layer.tileInfo.format},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"dataLevelRange",{get:function(){var e=this.tileInfo.lods,r=e[0].scale,t=e[e.length-1].scale;return this.levelRangeFromScaleRange(r,t)},enumerable:!0,configurable:!0}),r.prototype.initialize=function(){if("web-tile"===this.layer.type){var e=this.layer.get("fullExtent.spatialReference"),r=this.layer.get("tileInfo.spatialReference");if(n.isNone(e)||n.isNone(r)||!f.canProject(e,r)){var t="defaults"===this.layer.originOf("fullExtent")||n.isNone(this.layer.fullExtent)?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(s.reject(new l("layerview:incompatible-fullextent",t)))}}this._addTilingSchemeMatchPromise(),"version"in this.layer&&this.addResolvingPromise(c.checkArcGISServiceVersionCompatibility(this.layer))},r.prototype.createFetchPopupFeaturesQueryGeometry=function(e,r){return g.createQueryGeometry(e,r,this.view)},r.prototype.doRefresh=function(e){return a(this,void 0,void 0,(function(){return o(this,(function(e){return this.suspended?[2]:(this.emit("data-changed"),[2])}))}))},i([p.property({readOnly:!0,dependsOn:["layer.tileInfo.format"]})],r.prototype,"imageFormatIsOpaque",null),i([p.property({readOnly:!0,dependsOn:["layer.tileInfo.format"]})],r.prototype,"hasMixedImageFormats",null),i([p.property({aliasOf:"layer.fullExtent"})],r.prototype,"fullExtent",void 0),i([p.property()],r.prototype,"layer",void 0),i([p.property({aliasOf:"layer.tileInfo"})],r.prototype,"tileInfo",void 0),i([p.property({readOnly:!0,dependsOn:["tileInfo","view.basemapTerrain.tilingScheme","layer.url"]})],r.prototype,"dataLevelRange",null),r=i([p.subclass("esri.views.3d.layers.TileLayerView3D")],r)}(p.declared(h.RefreshableLayerView(u.TiledLayerView3D(m.TileLayerView(y.LayerView3D(d))))))}));