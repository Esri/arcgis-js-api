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

define(["require","exports","./geometryEngineBase","./geometryAdapters/hydrated"],(function(e,r,t,n){function a(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function i(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent.center:null}Object.defineProperty(r,"__esModule",{value:!0}),r.extendedSpatialReferenceInfo=function(e){return t.extendedSpatialReferenceInfo(e)},r.clip=function(e,r){return t.clip(n.hydratedAdapter,a(e),e,r)},r.cut=function(e,r){return t.cut(n.hydratedAdapter,a(e),e,r)},r.contains=function(e,r){return t.contains(n.hydratedAdapter,a(e),e,r)},r.crosses=function(e,r){return t.crosses(n.hydratedAdapter,a(e),e,r)},r.distance=function(e,r,i){return t.distance(n.hydratedAdapter,a(e),e,r,i)},r.equals=function(e,r){return t.equals(n.hydratedAdapter,a(e),e,r)},r.intersects=function(e,r){return t.intersects(n.hydratedAdapter,a(e),e,r)},r.touches=function(e,r){return t.touches(n.hydratedAdapter,a(e),e,r)},r.within=function(e,r){return t.within(n.hydratedAdapter,a(e),e,r)},r.disjoint=function(e,r){return t.disjoint(n.hydratedAdapter,a(e),e,r)},r.overlaps=function(e,r){return t.overlaps(n.hydratedAdapter,a(e),e,r)},r.relate=function(e,r,i){return t.relate(n.hydratedAdapter,a(e),e,r,i)},r.isSimple=function(e){return t.isSimple(n.hydratedAdapter,a(e),e)},r.simplify=function(e){return t.simplify(n.hydratedAdapter,a(e),e)},r.convexHull=function(e,r){return void 0===r&&(r=!1),t.convexHull(n.hydratedAdapter,a(e),e,r)},r.difference=function(e,r){return t.difference(n.hydratedAdapter,a(e),e,r)},r.symmetricDifference=function(e,r){return t.symmetricDifference(n.hydratedAdapter,a(e),e,r)},r.intersect=function(e,r){return t.intersect(n.hydratedAdapter,a(e),e,r)},r.union=function(e,r){return void 0===r&&(r=null),t.union(n.hydratedAdapter,a(e),e,r)},r.offset=function(e,r,i,d,u,o){return t.offset(n.hydratedAdapter,a(e),e,r,i,d,u,o)},r.buffer=function(e,r,i,d){return void 0===d&&(d=!1),t.buffer(n.hydratedAdapter,a(e),e,r,i,d)},r.geodesicBuffer=function(e,r,i,d,u,o){return t.geodesicBuffer(n.hydratedAdapter,a(e),e,r,i,d,u,o)},r.nearestCoordinate=function(e,r,i){return void 0===i&&(i=!0),t.nearestCoordinate(n.hydratedAdapter,a(e),e,r,i)},r.nearestVertex=function(e,r){return t.nearestVertex(n.hydratedAdapter,a(e),e,r)},r.nearestVertices=function(e,r,i,d){return t.nearestVertices(n.hydratedAdapter,a(e),e,r,i,d)},r.rotate=function(e,r,n){if(null==e)throw new Error("Illegal Argument Exception");var a=e.spatialReference;if(null==(n=null!=n?n:i(e)))throw new Error("Illegal Argument Exception");var d=e.constructor.fromJSON(t.rotate(e,r,n));return d.spatialReference=a,d},r.flipHorizontal=function(e,r){if(null==e)throw new Error("Illegal Argument Exception");var n=e.spatialReference;if(null==(r=null!=r?r:i(e)))throw new Error("Illegal Argument Exception");var a=e.constructor.fromJSON(t.flipHorizontal(e,r));return a.spatialReference=n,a},r.flipVertical=function(e,r){if(null==e)throw new Error("Illegal Argument Exception");var n=e.spatialReference;if(null==(r=null!=r?r:i(e)))throw new Error("Illegal Argument Exception");var a=e.constructor.fromJSON(t.flipVertical(e,r));return a.spatialReference=n,a},r.generalize=function(e,r,i,d){return t.generalize(n.hydratedAdapter,a(e),e,r,i,d)},r.densify=function(e,r,i){return t.densify(n.hydratedAdapter,a(e),e,r,i)},r.geodesicDensify=function(e,r,i,d){return void 0===d&&(d=0),t.geodesicDensify(n.hydratedAdapter,a(e),e,r,i,d)},r.planarArea=function(e,r){return t.planarArea(n.hydratedAdapter,a(e),e,r)},r.planarLength=function(e,r){return t.planarLength(n.hydratedAdapter,a(e),e,r)},r.geodesicArea=function(e,r,i){return t.geodesicArea(n.hydratedAdapter,a(e),e,r,i)},r.geodesicLength=function(e,r,i){return t.geodesicLength(n.hydratedAdapter,a(e),e,r,i)}}));