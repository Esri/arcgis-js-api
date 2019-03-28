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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Error","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","./TiledLayerView3D","./support/tiledLayerUtils"],function(e,r,i,t,o,a,l,s,n,p){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return i(r,e),r.prototype.initialize=function(){var e=this,r=this.get("view.map.ground.layers"),i=this.get("view.map.allLayers"),t=i&&i.includes(this.layer),s=r&&r.includes(this.layer);if(t&&!s){var n=new o("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added in the map ground");this.addResolvingPromise(a.reject(n))}var c=this._getTileInfoSupportError(this.tileInfo,this.layer.fullExtent);if(c)this.addResolvingPromise(a.reject(c));else{var d=l.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){var r=e.view.basemapTerrain.tilingScheme;p.throwIfError(e._getTileInfoCompatibilityError(e.tileInfo,r))});this.addResolvingPromise(d)}this.addResolvingPromise(p.checkArcGISServiceVersionCompatibility(this.layer)),this._updateMinMaxDataLevel()},t([s.property({aliasOf:"layer.fullExtent"})],r.prototype,"fullExtent",void 0),t([s.property()],r.prototype,"layer",void 0),t([s.property({aliasOf:"layer.tileInfo"})],r.prototype,"tileInfo",void 0),r=t([s.subclass("esri.views.3d.layers.ElevationLayerView3D")],r)}(s.declared(n))});