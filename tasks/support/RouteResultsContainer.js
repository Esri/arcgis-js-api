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

define(["require","exports","tslib","../../Graphic","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/decorators/reader","./FeatureSet","./NAMessage","./RouteResult"],(function(r,e,o,t,p,a,i,s,n,u){"use strict";function l(r){return r&&s.fromJSON(r).features.map((function(r){return r}))}return function(r){function e(e){var o=r.call(this,e)||this;return o.barriers=null,o.messages=null,o.pointBarriers=null,o.polylineBarriers=null,o.polygonBarriers=null,o.routeResults=null,o}return o.__extends(e,r),e.prototype.readPointBarriers=function(r,e){return l(e.barriers||e.pointBarriers)},e.prototype.readPolylineBarriers=function(r){return l(r)},e.prototype.readPolygonBarriers=function(r){return l(r)},o.__decorate([a.property({aliasOf:"pointBarriers"})],e.prototype,"barriers",void 0),o.__decorate([a.property({type:[n]})],e.prototype,"messages",void 0),o.__decorate([a.property({type:[t]})],e.prototype,"pointBarriers",void 0),o.__decorate([i.reader("pointBarriers",["barriers","pointBarriers"])],e.prototype,"readPointBarriers",null),o.__decorate([a.property({type:[t]})],e.prototype,"polylineBarriers",void 0),o.__decorate([i.reader("polylineBarriers")],e.prototype,"readPolylineBarriers",null),o.__decorate([a.property({type:[t]})],e.prototype,"polygonBarriers",void 0),o.__decorate([i.reader("polygonBarriers")],e.prototype,"readPolygonBarriers",null),o.__decorate([a.property({type:[u]})],e.prototype,"routeResults",void 0),e=o.__decorate([a.subclass("esri.tasks.support.RouteResultsContainer")],e)}(p.JSONSupport)}));