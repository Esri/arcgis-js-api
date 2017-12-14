// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","../../../core/promiseUtils","../../../geometry","../../../geometry/support/scaleUtils","../../../views/MapView"],function(e,t,n,i,r,o,s){function a(e,t){if(!t)return i.reject(new n("searchgeometryutils:missing-parameter","view is missing."));if(!e)return i.reject(new n("searchgeometryutils:missing-parameter","point is missing."));if(e.hasZ||t instanceof s)return i.resolve(e);var r=t.get("map.ground");return r&&r.layers.length?r.queryElevation(e).then(function(e){return e.geometry}):i.resolve(e)}function c(e){return e instanceof r.Point?e:e instanceof r.Extent?e.center:e instanceof r.Polygon?e.centroid:e instanceof r.Multipoint?e.getPoint(0):e instanceof r.Polyline?e.getPoint(0,0):void 0}function u(e,t,n){return e?e instanceof r.Extent?e:e instanceof r.Multipoint||e instanceof r.Polygon||e instanceof r.Polyline?e.extent:e instanceof r.Point?l(e,t,n):void 0:void 0}function f(e,t,n){return e&&t?l(e.center,t,n):void 0}function l(e,t,n){if(t&&t.map){var i=n?o.getExtentForScale(t,n):t.extent;return i.clone().centerAt(e)}return new r.Extent({xmin:e.x-.25,ymin:e.y-.25,xmax:e.x+.25,ymax:e.y+.25,spatialReference:e.spatialReference})}Object.defineProperty(t,"__esModule",{value:!0}),t.getPointWithElevation=a,t.getPointFromGeometry=c,t.createExtentFromGeometry=u,t.scaleExtent=f});