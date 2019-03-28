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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../geometry","../../Graphic","../../core/JSONSupport","../../core/accessorSupport/decorators","../../geometry/SpatialReference","./NAMessage"],function(e,r,o,t,n,i,p,a,l,s){function y(e){return e.features.map(function(r){var o=l.fromJSON(e.spatialReference),t=i.fromJSON(r);return t.geometry.spatialReference=o,t})}function u(e){return e.features.map(function(r){return r.geometry.spatialReference=e.spatialReference,n.fromJSON(r.geometry)})}return function(e){function r(r){var o=e.call(this)||this;return o.facilities=null,o.messages=null,o.pointBarriers=null,o.polylineBarriers=null,o.polygonBarriers=null,o.serviceAreaPolylines=null,o.serviceAreaPolygons=null,o}return o(r,e),r.prototype.readFacilities=function(e){return u(e)},r.prototype.readPointBarriers=function(e,r){return u(r.barriers)},r.prototype.readPolylineBarriers=function(e){return u(e)},r.prototype.readPolygonBarriers=function(e){return u(e)},r.prototype.readIncidents=function(e,r){return y(r.saPolylines)},r.prototype.readServiceAreaPolygons=function(e,r){return y(r.saPolygons)},t([a.property({type:[n.Point]})],r.prototype,"facilities",void 0),t([a.reader("facilities")],r.prototype,"readFacilities",null),t([a.property({type:[s]})],r.prototype,"messages",void 0),t([a.property({type:[n.Point]})],r.prototype,"pointBarriers",void 0),t([a.reader("pointBarriers",["barriers"])],r.prototype,"readPointBarriers",null),t([a.property({type:[n.Polyline]})],r.prototype,"polylineBarriers",void 0),t([a.reader("polylineBarriers")],r.prototype,"readPolylineBarriers",null),t([a.property({type:[n.Polygon]})],r.prototype,"polygonBarriers",void 0),t([a.reader("polygonBarriers")],r.prototype,"readPolygonBarriers",null),t([a.property({type:[i]})],r.prototype,"serviceAreaPolylines",void 0),t([a.reader("serviceAreaPolylines",["saPolylines"])],r.prototype,"readIncidents",null),t([a.property({type:[i]})],r.prototype,"serviceAreaPolygons",void 0),t([a.reader("serviceAreaPolygons",["saPolygons"])],r.prototype,"readServiceAreaPolygons",null),r=t([a.subclass("esri.tasks.support.ServiceAreaSolveResult")],r)}(a.declared(p))});