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

define(["require","exports","../../../../geometry","../../../../core/maybe","../../../../geometry/support/triangulationUtils","./elevationAlignmentUtils","../../support/projectionUtils","../../terrain/OverlayRenderer","../../webgl-engine/lib/GeometryData","../../webgl-engine/lib/Util"],(function(t,e,n,o,i,a,r,s,p,u){function l(t,e,n){for(var o=new Array,i=0,a=t;i<a.length;i++){var r=a[i],s=r.index,p=r.count;if(!(p<=1)){var u=3*s,l=u+3*p;o.push({index:s,count:p,position:e.subarray(u,l),mapPosition:n?n.subarray(u,l):void 0})}}return o}function c(t,e,n){for(var o=new Array,i=function(t,i,a,r){if(i<=1)return"continue";var s=3*t,p=s+3*i,u=a.map((function(e){return e-t}));o.push({index:t,count:i,holeIndices:u,pathLengths:r,position:e.subarray(s,p),mapPosition:n?n.subarray(s,p):void 0})},a=0,r=t;a<r.length;a++){var s=r[a];i(s.index,s.count,s.holeIndices,s.pathLengths)}return o}Object.defineProperty(e,"__esModule",{value:!0}),e.createColorGeometryData=function(t){var e={},n={};if(n[u.VertexAttrConstants.POSITION]={size:3,data:t.attributeData.position},e[u.VertexAttrConstants.POSITION]=t.indices,o.isSome(t.attributeData.color)){var i=new Uint32Array(t.indices.length);n[u.VertexAttrConstants.COLOR]={size:4,data:t.attributeData.color},e[u.VertexAttrConstants.COLOR]=i}return o.isSome(t.attributeData.mapPosition)&&(n.mapPos={size:3,data:t.attributeData.mapPosition},e.mapPos=t.indices),new p.GeometryData(n,e)},e.createWaterGeometryData=function(t){var e={},n={};return n[u.VertexAttrConstants.POSITION]={size:3,data:t.attributeData.position},e[u.VertexAttrConstants.POSITION]=t.indices,n[u.VertexAttrConstants.UV0]={size:2,data:t.attributeData.uv0},e[u.VertexAttrConstants.UV0]=t.indices,o.isSome(t.attributeData.mapPosition)&&(n.mapPos={size:3,data:t.attributeData.mapPosition},e.mapPos=t.indices),new p.GeometryData(n,e)},e.geometryAsPolygon=function(t){switch(t.type){case"extent":if(t instanceof n.Extent)return n.Polygon.fromExtent(t);break;case"polygon":return t}return null},e.geometryToRenderInfo=function(t,e,n,o){var r=i.pathsToTriangulationInfo(t.rings,t.hasZ,1),s=new Float64Array(r.position.length),p=a.applyPerVertexElevationAlignment(r.position,t.spatialReference,0,s,0,r.position,0,r.position.length/3,e,n,o),u=null!=p;return{position:r.position,mapPosition:s,polygons:c(r.polygons,r.position,s),outlines:l(r.outlines,r.position,s),projectionSuccess:u,sampledElevation:p}},e.geometryToRenderInfoDraped=function(t,e){for(var n=i.pathsToTriangulationInfo(t.rings,!1,1),o=r.bufferToBuffer(n.position,t.spatialReference,0,n.position,e,0,n.position.length/3),a=2;a<n.position.length;a+=3)n.position[a]=s.DRAPED_Z;return{position:n.position,polygons:c(n.polygons,n.position),outlines:l(n.outlines,n.position),projectionSuccess:o}}}));