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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Evented","../../core/Logger","../../core/accessorSupport/decorators","../../geometry/support/aaBoundingRect","../../geometry/support/webMercatorUtils","../../layers/support/ElevationSampler"],function(e,r,t,n,o,a,i,p,s,l,c){var u=i.getLogger("esri.views.support.GroundViewElevationSampler");return function(e){function r(r){var t=e.call(this,r)||this;return t.demResolution={min:-1,max:-1},t}return t(r,e),r.prototype.initialize=function(){var e=this;this.view.basemapTerrain.on("elevation-change",function(){return e.emit("changed",{})})},Object.defineProperty(r.prototype,"extent",{get:function(){var e=this.view.basemapTerrain;return e.extent&&e.spatialReference?s.toExtent(e.extent,e.spatialReference):null},enumerable:!0,configurable:!0}),r.prototype.elevationAt=function(e){var r=e.spatialReference,t=this.spatialReference;if(!l.canProject(r,t)){var n=r?r.wkid:"unknown";return u.error("Cannot sample elevation at a location with spatial reference ("+n+") different from the view ("+t.wkid+")"),null}return this.view.basemapTerrain.getElevation(e)},r.prototype.queryElevation=function(e){return c.updateGeometryElevation(e.clone(),this)},n([p.property({readOnly:!0})],r.prototype,"demResolution",void 0),n([p.property({readOnly:!0,dependsOn:["view.basemapTerrain.extent","view.basemapTerrain.spatialReference"]})],r.prototype,"extent",null),n([p.property({readOnly:!0,aliasOf:"view.basemapTerrain.spatialReference"})],r.prototype,"spatialReference",void 0),n([p.property({constructOnly:!0})],r.prototype,"view",void 0),r=n([p.subclass("esri.views.support.GroundViewElevationSampler")],r)}(p.declared(o,a))});