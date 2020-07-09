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

define(["require","exports","tslib","../../geometry","../../Graphic","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators","../../geometry/SpatialReference","./NAMessage"],(function(e,r,o,t,n,a,i,p,l,s){function y(e){return e.features.map((function(r){var o=l.fromJSON(e.spatialReference),t=n.fromJSON(r);return i.unwrap(t.geometry).spatialReference=o,t}))}function c(e){return e.features.map((function(r){return r.geometry.spatialReference=e.spatialReference,t.fromJSON(r.geometry)}))}return function(e){function r(r){var o=e.call(this,r)||this;return o.facilities=null,o.messages=null,o.pointBarriers=null,o.polylineBarriers=null,o.polygonBarriers=null,o.serviceAreaPolylines=null,o.serviceAreaPolygons=null,o}return o.__extends(r,e),r.prototype.readFacilities=function(e){return c(e)},r.prototype.readPointBarriers=function(e,r){return c(r.barriers)},r.prototype.readPolylineBarriers=function(e){return c(e)},r.prototype.readPolygonBarriers=function(e){return c(e)},r.prototype.readIncidents=function(e,r){return y(r.saPolylines)},r.prototype.readServiceAreaPolygons=function(e,r){return y(r.saPolygons)},o.__decorate([p.property({type:[t.Point]})],r.prototype,"facilities",void 0),o.__decorate([p.reader("facilities")],r.prototype,"readFacilities",null),o.__decorate([p.property({type:[s]})],r.prototype,"messages",void 0),o.__decorate([p.property({type:[t.Point]})],r.prototype,"pointBarriers",void 0),o.__decorate([p.reader("pointBarriers",["barriers"])],r.prototype,"readPointBarriers",null),o.__decorate([p.property({type:[t.Polyline]})],r.prototype,"polylineBarriers",void 0),o.__decorate([p.reader("polylineBarriers")],r.prototype,"readPolylineBarriers",null),o.__decorate([p.property({type:[t.Polygon]})],r.prototype,"polygonBarriers",void 0),o.__decorate([p.reader("polygonBarriers")],r.prototype,"readPolygonBarriers",null),o.__decorate([p.property({type:[n]})],r.prototype,"serviceAreaPolylines",void 0),o.__decorate([p.reader("serviceAreaPolylines",["saPolylines"])],r.prototype,"readIncidents",null),o.__decorate([p.property({type:[n]})],r.prototype,"serviceAreaPolygons",void 0),o.__decorate([p.reader("serviceAreaPolygons",["saPolygons"])],r.prototype,"readServiceAreaPolygons",null),r=o.__decorate([p.subclass("esri.tasks.support.ServiceAreaSolveResult")],r)}(a.JSONSupport)}));