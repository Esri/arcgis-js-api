/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/Error","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","./LayerView3D","./TiledLayerView3D","../../layers/LayerView"],(function(e,r,t,o,i,a,s,l,n,c,y){"use strict";let p=function(r){function o(){var e;return(e=r.apply(this,arguments)||this).type="elevation-3d",e}return e._inheritsLoose(o,r),o.prototype.initialize=function(){const e=this.get("view.map.allLayers"),r=e&&e.includes(this.layer),o=this.get("view.map.ground.layers"),i=o&&o.includes(this.layer);if(r&&!i){const e=new t("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added in the map ground");this.addResolvingPromise(Promise.reject(e))}this._addTilingSchemeMatchPromise()},o}(c.TiledLayerView3D(n.LayerView3D(y)));return r.__decorate([o.property({readOnly:!0,aliasOf:"layer.fullExtent"})],p.prototype,"fullExtent",void 0),r.__decorate([o.property()],p.prototype,"layer",void 0),r.__decorate([o.property({readOnly:!0,aliasOf:"layer.tileInfo"})],p.prototype,"tileInfo",void 0),p=r.__decorate([l.subclass("esri.views.3d.layers.ElevationLayerView3D")],p),p}));
