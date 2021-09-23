/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Error","../../../core/watchUtils","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../support/updatingProperties","../terrain/terrainUtils"],(function(e,t,r,i,a,o,n,s,l,p,c,u){"use strict";const h=e=>{let n=function(e){function r(){return e.apply(this,arguments)||this}t._inheritsLoose(r,e);var o=r.prototype;return o.getTileUrl=function(e,t,r){return this.layer.getTileUrl(e,t,r)},o._addTilingSchemeMatchPromise=function(){const e=this._getTileInfoSupportError(this.tileInfo,this.layer.fullExtent);if(e)this.addResolvingPromise(Promise.reject(e));else{const e=a.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then((()=>{const e=this.view.basemapTerrain.tilingScheme,t=this._getTileInfoCompatibilityError(this.tileInfo,e);if(t)throw t}));this.addResolvingPromise(e)}},o._getTileInfoSupportError=function(e,t){const r=u.checkIfTileInfoSupportedForView(e,t,this.view.spatialReference,this.view.state.viewingMode);if(r){const e={layer:this.layer,error:r};let t;switch(r.name){case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":case"tilingscheme:local-unsupported-spatial-reference":t=new i("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",e);break;default:t=new i("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",e)}return t}return null},o._getTileInfoCompatibilityError=function(e,t){return t.compatibleWith(e)?null:new i("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")},o.levelRangeFromScaleRange=function(e,t){const r={minLevel:0,maxLevel:1/0},i=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!i)return r;const a=i.levels[0],o=e=>{const t=Math.log(a.scale/e)/Math.LN2;return.5-Math.abs(.5-t%1)<1e-9?Math.round(t):Math.ceil(t)};return null!=e&&e>0&&(r.minLevel=Math.max(0,o(e))),null!=t&&t>0&&(r.maxLevel=Math.max(0,o(t))),r},o.isUpdating=function(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)},t._createClass(r,[{key:"imageFormatIsOpaque",get:function(){return!1}},{key:"isOpaque",get:function(){return this.fullOpacity>=1&&this.imageFormatIsOpaque}},{key:"dataLevelRange",get:function(){const e=this.tileInfo.lods,t=e[0].scale,r=e[e.length-1].scale;return this.levelRangeFromScaleRange(t,r)}},{key:"displayLevelRange",get:function(){const e=this.tileInfo.lods,t=this.layer.minScale||e[0].scale,r=this.layer.maxScale||e[e.length-1].scale,i=this.levelRangeFromScaleRange(t,r);return this.layer.maxScale&&i.maxLevel++,i}}]),r}(e);return r.__decorate([o.property({readOnly:!0})],n.prototype,"imageFormatIsOpaque",null),r.__decorate([o.property({readOnly:!0})],n.prototype,"updating",void 0),r.__decorate([o.property(c.updatingProgress)],n.prototype,"updatingProgress",void 0),r.__decorate([o.property(c.updatingProgressValue)],n.prototype,"updatingProgressValue",void 0),r.__decorate([o.property({readOnly:!0})],n.prototype,"fullExtent",void 0),r.__decorate([o.property({readOnly:!0})],n.prototype,"isOpaque",null),r.__decorate([o.property({readOnly:!0})],n.prototype,"dataLevelRange",null),r.__decorate([o.property({readOnly:!0})],n.prototype,"displayLevelRange",null),r.__decorate([o.property()],n.prototype,"layer",void 0),r.__decorate([o.property({readOnly:!0})],n.prototype,"tileInfo",void 0),n=r.__decorate([p.subclass("esri.views.3d.layers.TiledLayerView3D")],n),n};e.TiledLayerView3D=h,Object.defineProperty(e,"__esModule",{value:!0})}));
