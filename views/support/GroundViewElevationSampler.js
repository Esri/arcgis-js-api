// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/Evented","../../core/Logger","../../core/accessorSupport/decorators","../../geometry/support/aaBoundingRect","../../geometry/support/contains","../../geometry/support/webMercatorUtils","../../layers/support/ElevationSampler","../3d/support/ElevationProvider","../3d/terrain/TerrainConst"],(function(e,t,r,n,o,a,i,p,s,l,c,u){"use strict";var d=o.getLogger("esri.views.support.GroundViewElevationSampler");return function(e){function t(t){var r=e.call(this,t)||this;return r.demResolution={min:-1,max:-1},r.noDataValue=u.ELEVATION_NODATA_VALUE,r}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this.view.basemapTerrain.on("elevation-change",(function(){return e.emit("changed",{})}))},Object.defineProperty(t.prototype,"extent",{get:function(){var e=this.view.basemapTerrain;return e.extent&&e.spatialReference?i.toExtent(e.extent,e.spatialReference):null},enumerable:!1,configurable:!0}),t.prototype.elevationAt=function(e){var t=e.spatialReference,r=this.spatialReference;if(!s.canProject(t,r)){var n=t?t.wkid:"unknown";return d.error("Cannot sample elevation at a location with spatial reference ("+n+") different from the view ("+r.wkid+")"),null}if(!p.extentContainsPoint(this.extent,e)){var o=this.extent,a=o.xmin+", "+o.ymin+", "+o.xmax+", "+o.ymax;d.warn("#elevationAt()","Point used to sample elevation ("+e.x+", "+e.y+") is outside of the sampler extent ("+a+")")}return c.getElevationAtPoint(this.view.elevationProvider,e)},t.prototype.queryElevation=function(e){return l.updateGeometryElevation(e.clone(),this)},r.__decorate([a.property({readOnly:!0})],t.prototype,"demResolution",void 0),r.__decorate([a.property({readOnly:!0,dependsOn:["view.basemapTerrain.extent","view.basemapTerrain.spatialReference"]})],t.prototype,"extent",null),r.__decorate([a.property({readOnly:!0})],t.prototype,"noDataValue",void 0),r.__decorate([a.property({readOnly:!0,aliasOf:"view.basemapTerrain.spatialReference"})],t.prototype,"spatialReference",void 0),r.__decorate([a.property({constructOnly:!0})],t.prototype,"view",void 0),t=r.__decorate([a.subclass("esri.views.support.GroundViewElevationSampler")],t)}(n.EventedAccessor)}));