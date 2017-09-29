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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","../../../core/promiseUtils","../../../geometry/Point","../../../geometry/Extent","../../../geometry/Polygon","../../../geometry/Polyline","../../../geometry/Multipoint","../../../geometry/support/scaleUtils","../../../views/MapView"],function(e,t,n,r,i,o,s,a,c,f,m){function u(e,t){if(!t)return r.reject(new n("searchgeometryutils:missing-parameter","view is missing."));if(!e)return r.reject(new n("searchgeometryutils:missing-parameter","point is missing."));if(e.hasZ||t instanceof m)return r.resolve(e);var i=t.get("map.ground");return i&&i.layers.length?i.queryElevation(e).then(function(e){return e.geometry}):r.resolve(e)}function g(e){return e instanceof i?e:e instanceof o?e.center:e instanceof s?e.centroid:e instanceof c?e.getPoint(0):e instanceof a?e.getPoint(0,0):void 0}function l(e,t,n){return e?e instanceof o?e:e instanceof c||e instanceof s||e instanceof a?e.extent:e instanceof i?p(e,t,n):void 0:void 0}function y(e,t,n){return e&&t?p(e.center,t,n):void 0}function p(e,t,n){if(t&&t.map){var r=n?f.getExtentForScale(t,n):t.extent;return r.clone().centerAt(e)}return new o({xmin:e.x-.25,ymin:e.y-.25,xmax:e.x+.25,ymax:e.y+.25,spatialReference:e.spatialReference})}Object.defineProperty(t,"__esModule",{value:!0}),t.getPointWithElevation=u,t.getPointFromGeometry=g,t.createExtentFromGeometry=l,t.scaleExtent=y});