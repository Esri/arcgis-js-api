/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/has","../../../../core/Logger","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/decorators/subclass","../../../../core/urlUtils","../../../../core/uuid","../../../../portal/support/resourceExtension","../../../../geometry/Polygon","../../../../geometry","../../../../core/Handles","../../../support/WatchUpdatingTracking","../../../support/TileTreeDebugger"],(function(e,r,t,i,a,o,s,n,u,l,c,g,p,d,h,T){"use strict";e.FeatureTileTree3DDebugger=function(e){function t(r){var t;return(t=e.call(this,r)||this).watchUpdatingTracking=new h.WatchUpdatingTracking,t.handles=new d,t}r._inheritsLoose(t,e);var i=t.prototype;return i.initialize=function(){this.handles.add(this.view.featureTiles.addClient()),this.watchUpdatingTracking.addOnCollectionPropertyChange(this.view.featureTiles,"tiles",(()=>this.update()),2)},i.destroy=function(){this.handles&&(this.handles.destroy(),this.handles=null),this.watchUpdatingTracking.destroy()},i.getTiles=function(){const e=e=>{const[r,t,i]=e.lij;return g.fromExtent(this.view.featureTiles.tilingScheme.getExtentGeometry(r,t,i))};return this.view.featureTiles.tiles.toArray().sort(((e,r)=>e.loadPriority-r.loadPriority)).map((r=>({...r,geometry:e(r)})))},t}(T.TileTreeDebugger),t.__decorate([s.property({readOnly:!0})],e.FeatureTileTree3DDebugger.prototype,"watchUpdatingTracking",void 0),t.__decorate([s.property({readOnly:!0,aliasOf:"watchUpdatingTracking.updating"})],e.FeatureTileTree3DDebugger.prototype,"updating",void 0),e.FeatureTileTree3DDebugger=t.__decorate([n.subclass("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],e.FeatureTileTree3DDebugger);var y=e.FeatureTileTree3DDebugger;e.default=y,Object.defineProperty(e,"__esModule",{value:!0})}));
