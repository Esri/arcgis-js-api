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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Evented","../../core/Logger","../../core/accessorSupport/decorators","../../geometry/support/aaBoundingRect","../../geometry/support/contains","../../geometry/support/webMercatorUtils","../../layers/support/ElevationSampler","../3d/terrain/TerrainConst"],function(e,t,r,n,a,o,i,p,s,l,u,c,v){var d=i.getLogger("esri.views.support.GroundViewElevationSampler");return function(e){function t(t){var r=e.call(this,t)||this;return r.demResolution={min:-1,max:-1},r.noDataValue=v.noDataValueOpt.noDataValue,r}return r(t,e),t.prototype.initialize=function(){var e=this;this.view.basemapTerrain.on("elevation-change",function(){return e.emit("changed",{})})},Object.defineProperty(t.prototype,"extent",{get:function(){var e=this.view.basemapTerrain;return e.extent&&e.spatialReference?s.toExtent(e.extent,e.spatialReference):null},enumerable:!0,configurable:!0}),t.prototype.elevationAt=function(e){var t=e.spatialReference,r=this.spatialReference;if(!u.canProject(t,r)){var n=t?t.wkid:"unknown";return d.error("Cannot sample elevation at a location with spatial reference ("+n+") different from the view ("+r.wkid+")"),null}if(!l.extentContainsPoint(this.extent,e)){var a=this.extent,o=a.xmin+", "+a.ymin+", "+a.xmax+", "+a.ymax;d.warn("#elevationAt()","Point used to sample elevation ("+e.x+", "+e.y+") is outside of the sampler extent ("+o+")")}return this.view.basemapTerrain.getElevation(e)},t.prototype.queryElevation=function(e){return c.updateGeometryElevation(e.clone(),this)},n([p.property({readOnly:!0})],t.prototype,"demResolution",void 0),n([p.property({readOnly:!0,dependsOn:["view.basemapTerrain.extent","view.basemapTerrain.spatialReference"]})],t.prototype,"extent",null),n([p.property({readOnly:!0})],t.prototype,"noDataValue",void 0),n([p.property({readOnly:!0,aliasOf:"view.basemapTerrain.spatialReference"})],t.prototype,"spatialReference",void 0),n([p.property({constructOnly:!0})],t.prototype,"view",void 0),t=n([p.subclass("esri.views.support.GroundViewElevationSampler")],t)}(p.declared(a,o))});