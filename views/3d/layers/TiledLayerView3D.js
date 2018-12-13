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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Error","../../../core/accessorSupport/decorators","./LayerView3D","./support/layerViewUpdatingProperties","../terrain/terrainUtils"],function(e,t,r,i,o,a,n,p,l){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.minDataLevel=0,t.maxDataLevel=1/0,t._isUpdating=!1,t}return r(t,e),Object.defineProperty(t.prototype,"imageFormatIsOpaque",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isOpaque",{get:function(){return this.fullOpacity>=1&&this.imageFormatIsOpaque},enumerable:!0,configurable:!0}),t.prototype.getTileUrl=function(e,t,r){return this.layer.getTileUrl(e,t,r)},t.prototype.updatingChanged=function(e){this._isUpdating=e,this.notifyChange("updating")},t.prototype.isUpdating=function(){return this._isUpdating},t.prototype._getTileInfoSupportError=function(e,t){var r=l.checkIfTileInfoSupportedForView(e,t,this.view.spatialReference,this.view.basemapTerrain.manifold);if(r){var i={layer:this.layer,error:r},a=void 0;switch(r.name){case"tilingscheme:local-gcs-not-supported":a=new o("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",i);break;case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":a=new o("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",i);break;default:a=new o("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",i)}return a}return null},t.prototype._getTileInfoCompatibilityError=function(e,t){return t.compatibleWith(e)?null:new o("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")},t.prototype._updateMinMaxDataLevel=function(){var e,t=1/0,r=0;this.tileInfo.lods.forEach(function(e){t=Math.min(e.level,t),r=Math.max(e.level,r)}),e=[t,r],this.minDataLevel=e[0],this.maxDataLevel=e[1]},i([a.property({readOnly:!0})],t.prototype,"imageFormatIsOpaque",null),i([a.property(p.updatingPercentage)],t.prototype,"updatingPercentage",void 0),i([a.property(p.updatingPercentageValue)],t.prototype,"updatingPercentageValue",void 0),i([a.property()],t.prototype,"fullExtent",void 0),i([a.property({readOnly:!0,dependsOn:["fullOpacity","imageFormatIsOpaque"]})],t.prototype,"isOpaque",null),i([a.property()],t.prototype,"layer",void 0),i([a.property()],t.prototype,"minDataLevel",void 0),i([a.property()],t.prototype,"maxDataLevel",void 0),i([a.property()],t.prototype,"tileInfo",void 0),t=i([a.subclass("esri.views.3d.layers.TiledLayerView3D")],t)}(a.declared(n))});