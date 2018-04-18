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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Error","../../../core/accessorSupport/decorators","./LayerView3D","./support/LayerViewUpdatingPercentage","../terrain/terrainUtils"],function(e,t,r,i,a,n,o,p,l){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.minDataLevel=0,t.maxDataLevel=1/0,t._isUpdating=!1,t}return r(t,e),Object.defineProperty(t.prototype,"formatIsTransparent",{get:function(){return!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isTransparent",{get:function(){return this.fullOpacity<1||this.formatIsTransparent},enumerable:!0,configurable:!0}),t.prototype.getTileUrl=function(e,t,r){return this.layer.getTileUrl(e,t,r)},t.prototype._evaluateUpdatingState=function(e){this._isUpdating=e,this.notifyChange("updating")},t.prototype.isUpdating=function(){return this._isUpdating},t.prototype._getTileInfoSupportError=function(e,t){var r=l.checkIfTileInfoSupportedForView(e,t,this.view.spatialReference,this.view.basemapTerrain.manifold);if(r){var i={layer:this.layer,error:r},n=void 0;switch(r.name){case"tilingscheme:local-gcs-not-supported":n=new a("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",i);break;case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":n=new a("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",i);break;default:n=new a("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",i)}return n}return null},t.prototype._getTileInfoCompatibilityError=function(e,t){return t.compatibleWith(e)?null:new a("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")},t.prototype._updateMinMaxDataLevel=function(){var e=1/0,t=0;this.tileInfo.lods.forEach(function(r){e=Math.min(r.level,e),t=Math.max(r.level,t)}),r=[e,t],this.minDataLevel=r[0],this.maxDataLevel=r[1];var r},i([n.property({readOnly:!0})],t.prototype,"formatIsTransparent",null),i([n.property()],t.prototype,"fullExtent",void 0),i([n.property({readOnly:!0,dependsOn:["fullOpacity","formatIsTransparent"]})],t.prototype,"isTransparent",null),i([n.property()],t.prototype,"layer",void 0),i([n.property()],t.prototype,"minDataLevel",void 0),i([n.property()],t.prototype,"maxDataLevel",void 0),i([n.property()],t.prototype,"tileInfo",void 0),t=i([n.subclass("esri.views.3d.layers.TiledLayerView3D")],t)}(n.declared(o,p))});