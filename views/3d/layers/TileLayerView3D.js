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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/promiseUtils","../../../core/watchUtils","../terrain/terrainUtils","./TiledLayerView3D","./support/tiledLayerUtils"],function(e,r,t,i,o,a,n,l,s,p){var c=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),Object.defineProperty(r.prototype,"formatIsTransparent",{get:function(){return"jpg"!==this.get("layer.tileInfo.format")},enumerable:!0,configurable:!0}),r.prototype.initialize=function(){var e=this,r=this._getTileInfoSupportError(this.tileInfo,this.layer.fullExtent);if(r)this.addResolvingPromise(a.reject(r));else{var t=n.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var r=e.view.basemapTerrain.tilingScheme;p.throwIfError(e._getTileInfoCompatibilityError(e.tileInfo,r))});this.addResolvingPromise(t)}this.addResolvingPromise(p.checkArcGISServiceVersionCompatibility(this.layer)),this._updateMinMaxDataLevel(),this.maxDataLevel=Math.min(this.maxDataLevel,l.getKnownTiledServiceLevelCap(this.layer.url))},i([o.property({readOnly:!0,dependsOn:["layer.tileInfo.format"]})],r.prototype,"formatIsTransparent",null),i([o.property({aliasOf:"layer.fullExtent"})],r.prototype,"fullExtent",void 0),i([o.property()],r.prototype,"layer",void 0),i([o.property({aliasOf:"layer.tileInfo"})],r.prototype,"tileInfo",void 0),r=i([o.subclass("esri.views.3d.layers.TileLayerView3D")],r)}(o.declared(s));return c});