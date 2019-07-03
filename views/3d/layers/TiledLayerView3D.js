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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/assignHelper","../../../core/Error","../../../core/accessorSupport/decorators","./LayerView3D","./support/layerViewUpdatingProperties","../terrain/terrainUtils"],function(e,t,r,a,i,n,l,o,p,s){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._isUpdating=!1,t}return r(t,e),Object.defineProperty(t.prototype,"imageFormatIsOpaque",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isOpaque",{get:function(){return this.fullOpacity>=1&&this.imageFormatIsOpaque},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dataLevelRange",{get:function(){var e=this.tileInfo.lods,t=e[0].scale,r=e[e.length-1].scale;return this.levelRangeFromScaleRange(t,r)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"displayLevelRange",{get:function(){var e=this.tileInfo.lods,t=this.layer.minScale||e[0].scale,r=this.layer.maxScale||e[e.length-1].scale,a=this.levelRangeFromScaleRange(t,r);return this.layer.maxScale&&a.maxLevel++,a},enumerable:!0,configurable:!0}),t.prototype.getTileUrl=function(e,t,r){return this.layer.getTileUrl(e,t,r)},t.prototype.updatingChanged=function(e){this._isUpdating=e,this.notifyChange("updating")},t.prototype.isUpdating=function(){return this._isUpdating},t.prototype._getTileInfoSupportError=function(e,t){var r=s.checkIfTileInfoSupportedForView(e,t,this.view.spatialReference,this.view.basemapTerrain.manifold);if(r){var a={layer:this.layer,error:r},i=void 0;switch(r.name){case"tilingscheme:local-gcs-not-supported":i=new n("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",a);break;case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":i=new n("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",a);break;default:i=new n("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",a)}return i}return null},t.prototype._getTileInfoCompatibilityError=function(e,t){return t.compatibleWith(e)?null:new n("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")},t.prototype.levelRangeFromScaleRange=function(e,t){var r={minLevel:0,maxLevel:1/0},a=this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!a)return r;var i=a.levels[0],n=function(e){var t=Math.log(i.scale/e)/Math.LN2;return.5-Math.abs(.5-t%1)<1e-9?Math.round(t):Math.ceil(t)};return null!=e&&e>0&&(r.minLevel=Math.max(0,n(e))),null!=t&&t>0&&(r.maxLevel=Math.max(0,n(t))),r},a([l.property({readOnly:!0})],t.prototype,"imageFormatIsOpaque",null),a([l.property(p.updatingPercentage)],t.prototype,"updatingPercentage",void 0),a([l.property(p.updatingPercentageValue)],t.prototype,"updatingPercentageValue",void 0),a([l.property({readOnly:!0})],t.prototype,"fullExtent",void 0),a([l.property({readOnly:!0,dependsOn:["fullOpacity","imageFormatIsOpaque"]})],t.prototype,"isOpaque",null),a([l.property({readOnly:!0,dependsOn:["tileInfo","view.basemapTerrain.tilingScheme"]})],t.prototype,"dataLevelRange",null),a([l.property({readOnly:!0,dependsOn:["tileInfo","view.basemapTerrain.tilingScheme","layer.minScale","layer.maxScale"]})],t.prototype,"displayLevelRange",null),a([l.property()],t.prototype,"layer",void 0),a([l.property({readOnly:!0})],t.prototype,"tileInfo",void 0),t=a([l.subclass("esri.views.3d.layers.TiledLayerView3D")],t)}(l.declared(o))});