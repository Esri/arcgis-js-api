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

define(["require","exports","../../../geometry","../../../core/Error","../../../core/Logger","../../../core/promiseUtils","../../../geometry/support/scaleUtils","../../../views/MapView"],function(e,t,n,i,r,o,s,a){function c(e,t){if(!t)return l.error("missing-parameter: view is missing."),o.reject(new i("searchgeometryutils:missing-parameter","view is missing."));if(!e)return l.error("missing-parameter: point is missing."),o.reject(new i("searchgeometryutils:missing-parameter","point is missing."));if(e.hasZ||t instanceof a)return o.resolve(e);var n=t.get("map.ground");return n&&n.layers.length?n.queryElevation(e).then(function(e){return e.geometry}):o.resolve(e)}function m(e){return e instanceof n.Point?e:e instanceof n.Extent?e.center:e instanceof n.Polygon?e.centroid:e instanceof n.Multipoint?e.getPoint(0):e instanceof n.Polyline?e.getPoint(0,0):void 0}function g(e,t,i){if(e)return e instanceof n.Extent?e:e instanceof n.Multipoint||e instanceof n.Polygon||e instanceof n.Polyline?e.extent:e instanceof n.Point?u(e,t,i):void 0}function f(e,t,n){if(e&&t)return u(e.center,t,n)}function u(e,t,i){var r=e.hasZ?e.z:void 0;if(t&&t.map){return(i?s.getExtentForScale(t,i):t.extent).clone().centerAt(e).set({zmax:r,zmin:r})}return new n.Extent({xmin:e.x-.25,ymin:e.y-.25,xmax:e.x+.25,ymax:e.y+.25,spatialReference:e.spatialReference,zmin:r,zmax:r})}Object.defineProperty(t,"__esModule",{value:!0});var l=r.getLogger("esri.widgets.Search.support.geometryUtils");t.getPointWithElevation=c,t.getPointFromGeometry=m,t.createExtentFromGeometry=g,t.scaleExtent=f});