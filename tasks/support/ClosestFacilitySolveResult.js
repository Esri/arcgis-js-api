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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../geometry","../../Graphic","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators","../../core/accessorSupport/decorators/reader","../../geometry/SpatialReference","./DirectionsFeatureSet","./FeatureSet","./NAMessage"],function(r,e,t,o,p,i,n,a,s,l,u,y,c,d){function f(r){return r.features.map(function(e){var t=u.fromJSON(r.spatialReference),o=i.fromJSON(e);return a.isSome(o.geometry)&&(o.geometry.spatialReference=t),o})}function B(r){return c.fromJSON(r).features.map(function(r){return r.geometry})}return function(r){function e(e){var t=r.call(this)||this;return t.directions=null,t.facilities=null,t.incidents=null,t.messages=null,t.pointBarriers=null,t.polylineBarriers=null,t.polygonBarriers=null,t.routes=null,t}return t(e,r),e.prototype.readFacilities=function(r){return B(r)},e.prototype.readIncidents=function(r){return B(r)},e.prototype.readPointBarriers=function(r,e){return B(e.barriers)},e.prototype.readPolylineBarriers=function(r){return B(r)},e.prototype.readPolygonBarriers=function(r){return B(r)},e.prototype.readRoutes=function(r){return f(r)},o([s.property({type:y})],e.prototype,"directions",void 0),o([s.property({type:[p.Point]})],e.prototype,"facilities",void 0),o([l.reader("facilities")],e.prototype,"readFacilities",null),o([s.property({type:[p.Point]})],e.prototype,"incidents",void 0),o([l.reader("incidents")],e.prototype,"readIncidents",null),o([s.property({type:[d]})],e.prototype,"messages",void 0),o([s.property({type:[p.Point]})],e.prototype,"pointBarriers",void 0),o([l.reader("pointBarriers",["barriers"])],e.prototype,"readPointBarriers",null),o([s.property({type:[p.Polyline]})],e.prototype,"polylineBarriers",void 0),o([l.reader("polylineBarriers")],e.prototype,"readPolylineBarriers",null),o([s.property({type:[p.Polygon]})],e.prototype,"polygonBarriers",void 0),o([l.reader("polygonBarriers")],e.prototype,"readPolygonBarriers",null),o([s.property({type:[i]})],e.prototype,"routes",void 0),o([l.reader("routes")],e.prototype,"readRoutes",null),e=o([s.subclass("esri.tasks.support.ClosestFacilitySolveResult")],e)}(s.declared(n))});