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

define(["require","exports","./geometryEngineBase","./geometryAdapters/json"],(function(e,n,r,t){Object.defineProperty(n,"__esModule",{value:!0}),n.extendedSpatialReferenceInfo=function(e){return r.extendedSpatialReferenceInfo(e)},n.clip=function(e,n,o){return r.clip(t.jsonAdapter,e,n,o)},n.cut=function(e,n,o){return r.cut(t.jsonAdapter,e,n,o)},n.contains=function(e,n,o){return r.contains(t.jsonAdapter,e,n,o)},n.crosses=function(e,n,o){return r.crosses(t.jsonAdapter,e,n,o)},n.distance=function(e,n,o,i){return r.distance(t.jsonAdapter,e,n,o,i)},n.equals=function(e,n,o){return r.equals(t.jsonAdapter,e,n,o)},n.intersects=function(e,n,o){return r.intersects(t.jsonAdapter,e,n,o)},n.touches=function(e,n,o){return r.touches(t.jsonAdapter,e,n,o)},n.within=function(e,n,o){return r.within(t.jsonAdapter,e,n,o)},n.disjoint=function(e,n,o){return r.disjoint(t.jsonAdapter,e,n,o)},n.overlaps=function(e,n,o){return r.overlaps(t.jsonAdapter,e,n,o)},n.relate=function(e,n,o,i){return r.relate(t.jsonAdapter,e,n,o,i)},n.isSimple=function(e,n){return r.isSimple(t.jsonAdapter,e,n)},n.simplify=function(e,n){return r.simplify(t.jsonAdapter,e,n)},n.convexHull=function(e,n,o){return void 0===o&&(o=!1),r.convexHull(t.jsonAdapter,e,n,o)},n.difference=function(e,n,o){return r.difference(t.jsonAdapter,e,n,o)},n.symmetricDifference=function(e,n,o){return r.symmetricDifference(t.jsonAdapter,e,n,o)},n.intersect=function(e,n,o){return r.intersect(t.jsonAdapter,e,n,o)},n.union=function(e,n,o){return void 0===o&&(o=null),r.union(t.jsonAdapter,e,n,o)},n.offset=function(e,n,o,i,u,s,a){return r.offset(t.jsonAdapter,e,n,o,i,u,s,a)},n.buffer=function(e,n,o,i,u){return void 0===u&&(u=!1),r.buffer(t.jsonAdapter,e,n,o,i,u)},n.geodesicBuffer=function(e,n,o,i,u,s,a){return r.geodesicBuffer(t.jsonAdapter,e,n,o,i,u,s,a)},n.nearestCoordinate=function(e,n,o,i){return void 0===i&&(i=!0),r.nearestCoordinate(t.jsonAdapter,e,n,o,i)},n.nearestVertex=function(e,n,o){return r.nearestVertex(t.jsonAdapter,e,n,o)},n.nearestVertices=function(e,n,o,i,u){return r.nearestVertices(t.jsonAdapter,e,n,o,i,u)},n.rotate=function(e,n,t,o){if(null==n||null==o)throw new Error("Illegal Argument Exception");var i=r.rotate(n,t,o);return i.spatialReference=e,i},n.flipHorizontal=function(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");var o=r.flipHorizontal(n,t);return o.spatialReference=e,o},n.flipVertical=function(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");var o=r.flipVertical(n,t);return o.spatialReference=e,o},n.generalize=function(e,n,o,i,u){return r.generalize(t.jsonAdapter,e,n,o,i,u)},n.densify=function(e,n,o,i){return r.densify(t.jsonAdapter,e,n,o,i)},n.geodesicDensify=function(e,n,o,i,u){return void 0===u&&(u=0),r.geodesicDensify(t.jsonAdapter,e,n,o,i,u)},n.planarArea=function(e,n,o){return r.planarArea(t.jsonAdapter,e,n,o)},n.planarLength=function(e,n,o){return r.planarLength(t.jsonAdapter,e,n,o)},n.geodesicArea=function(e,n,o,i){return r.geodesicArea(t.jsonAdapter,e,n,o,i)},n.geodesicLength=function(e,n,o,i){return r.geodesicLength(t.jsonAdapter,e,n,o,i)}}));