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

define(["require","exports","../../../../geometry","../../../../core/maybe","../../../../geometry/support/triangulationUtils","./elevationAlignmentUtils","../../support/projectionUtils","../../terrain/OverlayRenderer","../../webgl-engine/lib/GeometryData","../../webgl-engine/lib/Util"],(function(t,e,n,o,a,i,r,s,u,p){"use strict";function l(t,e,n){for(var o=new Array,a=0,i=t;a<i.length;a++){var r=i[a],s=r.index,u=r.count;if(!(u<=1)){var p=3*s,l=p+3*u;o.push({index:s,count:u,position:e.subarray(p,l),mapPosition:n?n.subarray(p,l):void 0})}}return o}function c(t,e,n){for(var o=new Array,a=function(t,a,i,r){if(a<=1)return"continue";var s=3*t,u=s+3*a,p=i.map((function(e){return e-t}));o.push({index:t,count:a,holeIndices:p,pathLengths:r,position:e.subarray(s,u),mapPosition:n?n.subarray(s,u):void 0})},i=0,r=t;i<r.length;i++){var s=r[i];a(s.index,s.count,s.holeIndices,s.pathLengths)}return o}Object.defineProperty(e,"__esModule",{value:!0}),e.geometryToRenderInfoDraped=e.geometryToRenderInfo=e.geometryAsPolygon=e.createWaterGeometryData=e.createColorGeometryData=void 0,e.createColorGeometryData=function(t){var e={},n={};if(n[p.VertexAttrConstants.POSITION]={size:3,data:t.attributeData.position},e[p.VertexAttrConstants.POSITION]=t.indices,o.isSome(t.attributeData.color)){var a=new Uint32Array(t.indices.length);n[p.VertexAttrConstants.COLOR]={size:4,data:t.attributeData.color},e[p.VertexAttrConstants.COLOR]=a}return o.isSome(t.attributeData.uvMapSpace)&&(n[p.VertexAttrConstants.UVMAPSPACE]={size:4,data:t.attributeData.uvMapSpace},e[p.VertexAttrConstants.UVMAPSPACE]=t.indices),o.isSome(t.attributeData.bound1)&&(n[p.VertexAttrConstants.BOUND1]={size:3,data:t.attributeData.bound1},e[p.VertexAttrConstants.BOUND1]=t.indices),o.isSome(t.attributeData.bound2)&&(n[p.VertexAttrConstants.BOUND2]={size:3,data:t.attributeData.bound2},e[p.VertexAttrConstants.BOUND2]=t.indices),o.isSome(t.attributeData.bound3)&&(n[p.VertexAttrConstants.BOUND3]={size:3,data:t.attributeData.bound3},e[p.VertexAttrConstants.BOUND3]=t.indices),o.isSome(t.attributeData.mapPosition)&&(n.mapPos={size:3,data:t.attributeData.mapPosition},e.mapPos=t.indices),new u.GeometryData(n,e)},e.createWaterGeometryData=function(t){var e={},n={};return n[p.VertexAttrConstants.POSITION]={size:3,data:t.attributeData.position},e[p.VertexAttrConstants.POSITION]=t.indices,n[p.VertexAttrConstants.UV0]={size:2,data:t.attributeData.uv0},e[p.VertexAttrConstants.UV0]=t.indices,o.isSome(t.attributeData.mapPosition)&&(n.mapPos={size:3,data:t.attributeData.mapPosition},e.mapPos=t.indices),new u.GeometryData(n,e)},e.geometryAsPolygon=function(t){switch(t.type){case"extent":if(t instanceof n.Extent)return n.Polygon.fromExtent(t);break;case"polygon":return t}return null},e.geometryToRenderInfo=function(t,e,n,o){var r=a.pathsToTriangulationInfo(t.rings,t.hasZ,1),s=new Float64Array(r.position.length),u=i.applyPerVertexElevationAlignment(r.position,t.spatialReference,0,s,0,r.position,0,r.position.length/3,e,n,o),p=null!=u;return{position:r.position,mapPosition:s,polygons:c(r.polygons,r.position,s),outlines:l(r.outlines,r.position,s),projectionSuccess:p,sampledElevation:u}},e.geometryToRenderInfoDraped=function(t,e){for(var n=a.pathsToTriangulationInfo(t.rings,!1,1),o=r.bufferToBuffer(n.position,t.spatialReference,0,n.position,e,0,n.position.length/3),i=2;i<n.position.length;i+=3)n.position[i]=s.DRAPED_Z;return{position:n.position,polygons:c(n.polygons,n.position),outlines:l(n.outlines,n.position),projectionSuccess:o}}}));