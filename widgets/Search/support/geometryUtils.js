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

define(["require","exports","../../../geometry","../../../core/Error","../../../core/Logger","../../../core/maybe","../../../core/promiseUtils","../../../geometry/support/scaleUtils","../../../views/MapView"],(function(e,n,t,i,r,o,s,a,c){Object.defineProperty(n,"__esModule",{value:!0});var m=r.getLogger("esri.widgets.Search.support.geometryUtils");function l(e,n,i){var r=e.hasZ?e.z:void 0;return n&&n.map?(i?a.getExtentForScale(n,i):n.extent).clone().centerAt(e).set({zmax:r,zmin:r}):new t.Extent({xmin:e.x-.25,ymin:e.y-.25,xmax:e.x+.25,ymax:e.y+.25,spatialReference:e.spatialReference,zmin:r,zmax:r})}n.getPointWithElevation=function(e,n){if(!n)return m.error("missing-parameter: view is missing."),s.reject(new i("searchgeometryutils:missing-parameter","view is missing."));if(!e)return m.error("missing-parameter: point is missing."),s.reject(new i("searchgeometryutils:missing-parameter","point is missing."));if(e.hasZ||n instanceof c)return s.resolve(e);var t=n.get("map.ground");return t&&t.layers.length?t.queryElevation(e).then((function(e){return e.geometry})):s.resolve(e)},n.getPointFromGeometry=function(e){return e instanceof t.Point?e:e instanceof t.Extent?e.center:e instanceof t.Polygon?e.centroid:e instanceof t.Multipoint?e.getPoint(0):e instanceof t.Polyline?e.getPoint(0,0):null},n.createExtentFromGeometry=function(e,n,i){return o.isNone(e)?null:e instanceof t.Extent?e:e instanceof t.Multipoint||e instanceof t.Polygon||e instanceof t.Polyline?e.extent:e instanceof t.Point?l(e,n,i):void 0},n.scaleExtent=function(e,n,t){return o.isNone(e)||o.isNone(n)?null:l(e.center,n,t)}}));