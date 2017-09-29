// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/promiseUtils","../../../core/watchUtils","../terrain/terrainUtils","./TiledLayerView3D","./support/tiledLayerUtils"],function(e,t,r,i,o,a,n,l,s,p){var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),Object.defineProperty(t.prototype,"formatIsTransparent",{get:function(){return"jpg"!==this.get("layer.tileInfo.format")},enumerable:!0,configurable:!0}),t.prototype.initialize=function(){var e=this,t=this._getTileInfoSupportError(this.tileInfo,this.layer.fullExtent);if(t)this.addResolvingPromise(a.reject(t));else{var r=n.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var t=e.view.basemapTerrain.tilingScheme;p.throwIfError(e._getTileInfoCompatibilityError(e.tileInfo,t))});this.addResolvingPromise(r)}this.addResolvingPromise(p.checkArcGISServiceVersionCompatibility(this.layer)),this.addResolvingPromise(this.getHeightModelInfoResolvingPromise()),this._updateMinMaxDataLevel(),this.maxDataLevel=Math.min(this.maxDataLevel,l.getKnownTiledServiceLevelCap(this.layer.url))},i([o.property({readOnly:!0,dependsOn:["layer.tileInfo.format"]})],t.prototype,"formatIsTransparent",null),i([o.property({aliasOf:"layer.fullExtent"})],t.prototype,"fullExtent",void 0),i([o.property()],t.prototype,"layer",void 0),i([o.property({aliasOf:"layer.tileInfo"})],t.prototype,"tileInfo",void 0),t=i([o.subclass("esri.views.3d.layers.TileLayerView3D")],t)}(o.declared(s));return c});