/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../geometry/support/webMercatorUtils","../../geometry/support/contains","../../core/Evented","../../geometry/support/aaBoundingRect","../../layers/support/ElevationSampler","../3d/support/ElevationProvider","../3d/terrain/TerrainConst"],(function(e,t,r,o,n,a,i,s,p,c,l,u,d,v,y,m,f){"use strict";const h=o.getLogger("esri.views.support.GroundViewElevationSampler");let _=function(t){function r(e){var r;return(r=t.call(this,e)||this).demResolution={min:-1,max:-1},r.noDataValue=f.ELEVATION_NODATA_VALUE,r}e._inheritsLoose(r,t);var o=r.prototype;return o.initialize=function(){this.view.basemapTerrain.on("elevation-change",(()=>this.emit("changed",{})))},o.elevationAt=function(e){const t=e.spatialReference,r=this.spatialReference;if(!l.canProject(t,r)){const e=t?t.wkid:"unknown";return h.error(`Cannot sample elevation at a location with spatial reference (${e}) different from the view (${r.wkid})`),null}if(!u.extentContainsPoint(this.extent,e)){const t=this.extent,r=`${t.xmin}, ${t.ymin}, ${t.xmax}, ${t.ymax}`;h.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler extent (${r})`)}return m.getElevationAtPoint(this.view.elevationProvider,e)},o.queryElevation=function(e){return y.updateGeometryElevation(e.clone(),this)},e._createClass(r,[{key:"extent",get:function(){const e=this.view.basemapTerrain;return e.extent&&e.spatialReference?v.toExtent(e.extent,e.spatialReference):null}}]),r}(d.EventedAccessor);return t.__decorate([a.property({readOnly:!0})],_.prototype,"demResolution",void 0),t.__decorate([a.property({readOnly:!0})],_.prototype,"extent",null),t.__decorate([a.property({readOnly:!0})],_.prototype,"noDataValue",void 0),t.__decorate([a.property({readOnly:!0,aliasOf:"view.basemapTerrain.spatialReference"})],_.prototype,"spatialReference",void 0),t.__decorate([a.property({constructOnly:!0})],_.prototype,"view",void 0),_=t.__decorate([i.subclass("esri.views.support.GroundViewElevationSampler")],_),_}));
