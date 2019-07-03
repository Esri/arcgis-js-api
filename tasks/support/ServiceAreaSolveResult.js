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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../geometry","../../Graphic","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators","../../geometry/SpatialReference","./NAMessage"],function(e,r,o,t,n,i,p,a,l,s,y){function c(e){return e.features.map(function(r){var o=s.fromJSON(e.spatialReference),t=i.fromJSON(r);return a.expect(t.geometry).spatialReference=o,t})}function u(e){return e.features.map(function(r){return r.geometry.spatialReference=e.spatialReference,n.fromJSON(r.geometry)})}return function(e){function r(r){var o=e.call(this)||this;return o.facilities=null,o.messages=null,o.pointBarriers=null,o.polylineBarriers=null,o.polygonBarriers=null,o.serviceAreaPolylines=null,o.serviceAreaPolygons=null,o}return o(r,e),r.prototype.readFacilities=function(e){return u(e)},r.prototype.readPointBarriers=function(e,r){return u(r.barriers)},r.prototype.readPolylineBarriers=function(e){return u(e)},r.prototype.readPolygonBarriers=function(e){return u(e)},r.prototype.readIncidents=function(e,r){return c(r.saPolylines)},r.prototype.readServiceAreaPolygons=function(e,r){return c(r.saPolygons)},t([l.property({type:[n.Point]})],r.prototype,"facilities",void 0),t([l.reader("facilities")],r.prototype,"readFacilities",null),t([l.property({type:[y]})],r.prototype,"messages",void 0),t([l.property({type:[n.Point]})],r.prototype,"pointBarriers",void 0),t([l.reader("pointBarriers",["barriers"])],r.prototype,"readPointBarriers",null),t([l.property({type:[n.Polyline]})],r.prototype,"polylineBarriers",void 0),t([l.reader("polylineBarriers")],r.prototype,"readPolylineBarriers",null),t([l.property({type:[n.Polygon]})],r.prototype,"polygonBarriers",void 0),t([l.reader("polygonBarriers")],r.prototype,"readPolygonBarriers",null),t([l.property({type:[i]})],r.prototype,"serviceAreaPolylines",void 0),t([l.reader("serviceAreaPolylines",["saPolylines"])],r.prototype,"readIncidents",null),t([l.property({type:[i]})],r.prototype,"serviceAreaPolygons",void 0),t([l.reader("serviceAreaPolygons",["saPolygons"])],r.prototype,"readServiceAreaPolygons",null),r=t([l.subclass("esri.tasks.support.ServiceAreaSolveResult")],r)}(l.declared(p))});