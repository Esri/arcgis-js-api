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

define(["require","exports","./geometryEngineBase","./geometryAdapters/json"],(function(e,n,r,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.geodesicLength=n.geodesicArea=n.planarLength=n.planarArea=n.geodesicDensify=n.densify=n.generalize=n.flipVertical=n.flipHorizontal=n.rotate=n.nearestVertices=n.nearestVertex=n.nearestCoordinate=n.geodesicBuffer=n.buffer=n.offset=n.union=n.intersect=n.symmetricDifference=n.difference=n.convexHull=n.simplify=n.isSimple=n.relate=n.overlaps=n.disjoint=n.within=n.touches=n.intersects=n.equals=n.distance=n.crosses=n.contains=n.cut=n.clip=n.extendedSpatialReferenceInfo=void 0,n.extendedSpatialReferenceInfo=function(e){return r.extendedSpatialReferenceInfo(e)},n.clip=function(e,n,i){return r.clip(t.jsonAdapter,e,n,i)},n.cut=function(e,n,i){return r.cut(t.jsonAdapter,e,n,i)},n.contains=function(e,n,i){return r.contains(t.jsonAdapter,e,n,i)},n.crosses=function(e,n,i){return r.crosses(t.jsonAdapter,e,n,i)},n.distance=function(e,n,i,o){return r.distance(t.jsonAdapter,e,n,i,o)},n.equals=function(e,n,i){return r.equals(t.jsonAdapter,e,n,i)},n.intersects=function(e,n,i){return r.intersects(t.jsonAdapter,e,n,i)},n.touches=function(e,n,i){return r.touches(t.jsonAdapter,e,n,i)},n.within=function(e,n,i){return r.within(t.jsonAdapter,e,n,i)},n.disjoint=function(e,n,i){return r.disjoint(t.jsonAdapter,e,n,i)},n.overlaps=function(e,n,i){return r.overlaps(t.jsonAdapter,e,n,i)},n.relate=function(e,n,i,o){return r.relate(t.jsonAdapter,e,n,i,o)},n.isSimple=function(e,n){return r.isSimple(t.jsonAdapter,e,n)},n.simplify=function(e,n){return r.simplify(t.jsonAdapter,e,n)},n.convexHull=function(e,n,i){return void 0===i&&(i=!1),r.convexHull(t.jsonAdapter,e,n,i)},n.difference=function(e,n,i){return r.difference(t.jsonAdapter,e,n,i)},n.symmetricDifference=function(e,n,i){return r.symmetricDifference(t.jsonAdapter,e,n,i)},n.intersect=function(e,n,i){return r.intersect(t.jsonAdapter,e,n,i)},n.union=function(e,n,i){return void 0===i&&(i=null),r.union(t.jsonAdapter,e,n,i)},n.offset=function(e,n,i,o,s,a,u){return r.offset(t.jsonAdapter,e,n,i,o,s,a,u)},n.buffer=function(e,n,i,o,s){return void 0===s&&(s=!1),r.buffer(t.jsonAdapter,e,n,i,o,s)},n.geodesicBuffer=function(e,n,i,o,s,a,u){return r.geodesicBuffer(t.jsonAdapter,e,n,i,o,s,a,u)},n.nearestCoordinate=function(e,n,i,o){return void 0===o&&(o=!0),r.nearestCoordinate(t.jsonAdapter,e,n,i,o)},n.nearestVertex=function(e,n,i){return r.nearestVertex(t.jsonAdapter,e,n,i)},n.nearestVertices=function(e,n,i,o,s){return r.nearestVertices(t.jsonAdapter,e,n,i,o,s)},n.rotate=function(e,n,t,i){if(null==n||null==i)throw new Error("Illegal Argument Exception");var o=r.rotate(n,t,i);return o.spatialReference=e,o},n.flipHorizontal=function(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");var i=r.flipHorizontal(n,t);return i.spatialReference=e,i},n.flipVertical=function(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");var i=r.flipVertical(n,t);return i.spatialReference=e,i},n.generalize=function(e,n,i,o,s){return r.generalize(t.jsonAdapter,e,n,i,o,s)},n.densify=function(e,n,i,o){return r.densify(t.jsonAdapter,e,n,i,o)},n.geodesicDensify=function(e,n,i,o,s){return void 0===s&&(s=0),r.geodesicDensify(t.jsonAdapter,e,n,i,o,s)},n.planarArea=function(e,n,i){return r.planarArea(t.jsonAdapter,e,n,i)},n.planarLength=function(e,n,i){return r.planarLength(t.jsonAdapter,e,n,i)},n.geodesicArea=function(e,n,i,o){return r.geodesicArea(t.jsonAdapter,e,n,i,o)},n.geodesicLength=function(e,n,i,o){return r.geodesicLength(t.jsonAdapter,e,n,i,o)}}));