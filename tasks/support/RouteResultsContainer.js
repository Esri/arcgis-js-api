// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../Graphic","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/decorators/reader","./FeatureSet","./NAMessage","./RouteResult"],function(r,e,o,t,p,s,i,n,a,l,u){function y(r){return r&&a.fromJSON(r).features.map(function(r){return r})}return function(r){function e(e){var o=r.call(this,e)||this;return o.barriers=null,o.messages=null,o.pointBarriers=null,o.polylineBarriers=null,o.polygonBarriers=null,o.routeResults=null,o}return o(e,r),e.prototype.readPointBarriers=function(r,e){return y(e.barriers||e.pointBarriers)},e.prototype.readPolylineBarriers=function(r){return y(r)},e.prototype.readPolygonBarriers=function(r){return y(r)},t([i.property({aliasOf:"pointBarriers"})],e.prototype,"barriers",void 0),t([i.property({type:[l]})],e.prototype,"messages",void 0),t([i.property({type:[p]})],e.prototype,"pointBarriers",void 0),t([n.reader("pointBarriers",["barriers","pointBarriers"])],e.prototype,"readPointBarriers",null),t([i.property({type:[p]})],e.prototype,"polylineBarriers",void 0),t([n.reader("polylineBarriers")],e.prototype,"readPolylineBarriers",null),t([i.property({type:[p]})],e.prototype,"polygonBarriers",void 0),t([n.reader("polygonBarriers")],e.prototype,"readPolygonBarriers",null),t([i.property({type:[u]})],e.prototype,"routeResults",void 0),e=t([i.subclass("esri.tasks.support.RouteResultsContainer")],e)}(i.declared(s.JSONSupport))});