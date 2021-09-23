/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Error","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../../../geometry/projection","./LayerView3D","./TiledLayerView3D","../../layers/LayerView","../../layers/RefreshableLayerView","../../layers/TileLayerView","../../support/drapedUtils"],(function(e,t,r,i,a,o,n,l,s,c,y,p,u,f,d,h){"use strict";let m=function(t){function a(){var e;return(e=t.apply(this,arguments)||this).type="tile-3d",e}e._inheritsLoose(a,t);var o=a.prototype;return o.initialize=function(){if("web-tile"===this.layer.type){const e=this.layer.get("fullExtent.spatialReference"),t=this.layer.get("tileInfo.spatialReference");if(i.isNone(e)||i.isNone(t)||!c.canProjectWithoutEngine(e,t)){const e="defaults"===this.layer.originOf("fullExtent")||i.isNone(this.layer.fullExtent)?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new r("layerview:incompatible-fullextent",e)))}}this._addTilingSchemeMatchPromise()},o.createFetchPopupFeaturesQueryGeometry=function(e,t){return h.createQueryGeometry(e,t,this.view)},o.doRefresh=function(){var t=e._asyncToGenerator((function*(e){this.suspended||this.emit("data-changed")}));function r(e){return t.apply(this,arguments)}return r}(),e._createClass(a,[{key:"imageFormatIsOpaque",get:function(){return"jpg"===this.layer.tileInfo.format}},{key:"hasMixedImageFormats",get:function(){return"mixed"===this.layer.tileInfo.format}},{key:"dataLevelRange",get:function(){if(this.tileInfo){const e=this.tileInfo.lods,t=e[0].scale,r=e[e.length-1].scale;return this.levelRangeFromScaleRange(t,r)}return{minLevel:0,maxLevel:0}}}]),a}(f.RefreshableLayerView(p.TiledLayerView3D(d.TileLayerView(y.LayerView3D(u)))));return t.__decorate([a.property({readOnly:!0})],m.prototype,"imageFormatIsOpaque",null),t.__decorate([a.property({readOnly:!0})],m.prototype,"hasMixedImageFormats",null),t.__decorate([a.property({aliasOf:"layer.fullExtent"})],m.prototype,"fullExtent",void 0),t.__decorate([a.property()],m.prototype,"layer",void 0),t.__decorate([a.property({aliasOf:"layer.tileInfo"})],m.prototype,"tileInfo",void 0),t.__decorate([a.property({readOnly:!0})],m.prototype,"dataLevelRange",null),m=t.__decorate([s.subclass("esri.views.3d.layers.TileLayerView3D")],m),m}));
