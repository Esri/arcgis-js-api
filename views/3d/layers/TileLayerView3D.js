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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","./TiledLayerView3D","./support/popupUtils3D","./support/tiledLayerUtils","../terrain/terrainUtils","../../layers/TileLayerView"],function(e,t,r,i,o,a,l,n,s,p,u,c){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),Object.defineProperty(t.prototype,"imageFormatIsOpaque",{get:function(){return"jpg"===this.get("layer.tileInfo.format")},enumerable:!0,configurable:!0}),t.prototype.initialize=function(){var e=this,t=this._getTileInfoSupportError(this.tileInfo,this.layer.fullExtent);if(t)this.addResolvingPromise(o.reject(t));else{var r=a.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var t=e.view.basemapTerrain.tilingScheme;p.throwIfError(e._getTileInfoCompatibilityError(e.tileInfo,t))});this.addResolvingPromise(r)}"version"in this.layer&&this.addResolvingPromise(p.checkArcGISServiceVersionCompatibility(this.layer)),this._updateMinMaxDataLevel(),this.maxDataLevel=Math.min(this.maxDataLevel,u.getKnownTiledServiceLevelCap(this.layer.url))},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return s.createQueryGeometry(e,t,this.view)},t.prototype.doRefresh=function(){this.suspended||this.emit("data-changed")},i([l.property({readOnly:!0,dependsOn:["layer.tileInfo.format"]})],t.prototype,"imageFormatIsOpaque",null),i([l.property({aliasOf:"layer.fullExtent"})],t.prototype,"fullExtent",void 0),i([l.property()],t.prototype,"layer",void 0),i([l.property({aliasOf:"layer.tileInfo"})],t.prototype,"tileInfo",void 0),t=i([l.subclass("esri.views.3d.layers.TileLayerView3D")],t)}(l.declared(n,c))});