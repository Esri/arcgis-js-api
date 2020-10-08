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

define(["require","exports","../../../geometry","../../../core/Error","../../../core/Logger","../../../core/maybe","../../../core/promiseUtils","../../../geometry/support/scaleUtils"],(function(e,t,r,n,i,o,s,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.scaleExtent=t.createExtentFromGeometry=t.getPointFromGeometry=t.getPointWithElevation=void 0;var m=i.getLogger("esri.widgets.Search.support.geometryUtils");function u(e,t,n){var i=e.hasZ?e.z:void 0;return t&&t.map?(n?a.getExtentForScale(t,n):t.extent).clone().centerAt(e).set({zmax:i,zmin:i}):new r.Extent({xmin:e.x-.25,ymin:e.y-.25,xmax:e.x+.25,ymax:e.y+.25,spatialReference:e.spatialReference,zmin:i,zmax:i})}t.getPointWithElevation=function(e,t){if(!t)return m.error("missing-parameter: view is missing."),s.reject(new n("searchgeometryutils:missing-parameter","view is missing."));if(!e)return m.error("missing-parameter: point is missing."),s.reject(new n("searchgeometryutils:missing-parameter","point is missing."));if(e.hasZ||"2d"===t.type)return s.resolve(e);var r=t.get("map.ground");return r&&r.layers.length?r.queryElevation(e).then((function(e){return e.geometry})):s.resolve(e)},t.getPointFromGeometry=function(e){if(o.isNone(e))return null;switch(e.type){case"point":return e;case"extent":return e.center;case"polygon":return e.centroid;case"multipoint":return e.getPoint(0);case"polyline":return e.getPoint(0,0)}return null},t.createExtentFromGeometry=function(e,t,r){return o.isNone(e)?null:"extent"===e.type?e:"multipoint"===e.type||"polygon"===e.type||"polyline"===e.type?e.extent:"point"===e.type?u(e,t,r):void 0},t.scaleExtent=function(e,t,r){return o.isNone(e)||o.isNone(t)?null:u(e.center,t,r)}}));