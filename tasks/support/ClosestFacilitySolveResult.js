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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../geometry","../../Graphic","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators","../../core/accessorSupport/decorators/reader","../../geometry/SpatialReference","./DirectionsFeatureSet","./FeatureSet","./NAMessage"],(function(e,r,t,o,i,n,p,a,s,l,c,u,y){function d(e){return u.fromJSON(e).features.map((function(e){return e.geometry}))}return function(e){function r(r){var t=e.call(this,r)||this;return t.directions=null,t.facilities=null,t.incidents=null,t.messages=null,t.pointBarriers=null,t.polylineBarriers=null,t.polygonBarriers=null,t.routes=null,t}return t.__extends(r,e),r.prototype.readFacilities=function(e){return d(e)},r.prototype.readIncidents=function(e){return d(e)},r.prototype.readPointBarriers=function(e,r){return d(r.barriers)},r.prototype.readPolylineBarriers=function(e){return d(e)},r.prototype.readPolygonBarriers=function(e){return d(e)},r.prototype.readRoutes=function(e){return function(e){return e.features.map((function(r){var t=l.fromJSON(e.spatialReference),o=i.fromJSON(r);return p.isSome(o.geometry)&&(o.geometry.spatialReference=t),o}))}(e)},t.__decorate([a.property({type:c})],r.prototype,"directions",void 0),t.__decorate([a.property({type:[o.Point]})],r.prototype,"facilities",void 0),t.__decorate([s.reader("facilities")],r.prototype,"readFacilities",null),t.__decorate([a.property({type:[o.Point]})],r.prototype,"incidents",void 0),t.__decorate([s.reader("incidents")],r.prototype,"readIncidents",null),t.__decorate([a.property({type:[y]})],r.prototype,"messages",void 0),t.__decorate([a.property({type:[o.Point]})],r.prototype,"pointBarriers",void 0),t.__decorate([s.reader("pointBarriers",["barriers"])],r.prototype,"readPointBarriers",null),t.__decorate([a.property({type:[o.Polyline]})],r.prototype,"polylineBarriers",void 0),t.__decorate([s.reader("polylineBarriers")],r.prototype,"readPolylineBarriers",null),t.__decorate([a.property({type:[o.Polygon]})],r.prototype,"polygonBarriers",void 0),t.__decorate([s.reader("polygonBarriers")],r.prototype,"readPolygonBarriers",null),t.__decorate([a.property({type:[i]})],r.prototype,"routes",void 0),t.__decorate([s.reader("routes")],r.prototype,"readRoutes",null),r=t.__decorate([a.subclass("esri.tasks.support.ClosestFacilitySolveResult")],r)}(n.JSONSupport)}));