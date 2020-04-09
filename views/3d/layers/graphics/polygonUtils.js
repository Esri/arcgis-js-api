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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../geometry","../../../../core/maybe","../../../../geometry/support/triangulationUtils","./elevationAlignmentUtils","../../support/projectionUtils","../../terrain/OverlayRenderer","../../webgl-engine/lib/GeometryData","../../webgl-engine/lib/Util"],(function(t,e,n,o,i,r,a,s,p,u,l){function c(t,e,n){for(var o=new Array,i=0,r=t;i<r.length;i++){var a=r[i],s=a.index,p=a.count;if(!(p<=1)){var u=3*s,l=u+3*p;o.push({index:s,count:p,position:e.subarray(u,l),mapPosition:n?n.subarray(u,l):void 0})}}return o}function g(t,e,n){for(var o=new Array,i=function(t,i,r,a){if(i<=1)return"continue";var s=3*t,p=s+3*i,u=r.map((function(e){return e-t}));o.push({index:t,count:i,holeIndices:u,pathLengths:a,position:e.subarray(s,p),mapPosition:n?n.subarray(s,p):void 0})},r=0,a=t;r<a.length;r++){var s=a[r];i(s.index,s.count,s.holeIndices,s.pathLengths)}return o}Object.defineProperty(e,"__esModule",{value:!0}),e.createColorGeometryData=function(t){var e={},n={};if(n[l.VertexAttrConstants.POSITION]={size:3,data:t.attributeData.position},e[l.VertexAttrConstants.POSITION]=t.indices,i.isSome(t.attributeData.color)){var o=new Uint32Array(t.indices.length);n[l.VertexAttrConstants.COLOR]={size:4,data:t.attributeData.color},e[l.VertexAttrConstants.COLOR]=o}return i.isSome(t.attributeData.mapPosition)&&(n.mapPos={size:3,data:t.attributeData.mapPosition},e.mapPos=t.indices),new u.GeometryData(n,e)},e.createWaterGeometryData=function(t){var e={},n={};return n[l.VertexAttrConstants.POSITION]={size:3,data:t.attributeData.position},e[l.VertexAttrConstants.POSITION]=t.indices,n[l.VertexAttrConstants.UV0]={size:2,data:t.attributeData.uv0},e[l.VertexAttrConstants.UV0]=t.indices,i.isSome(t.attributeData.mapPosition)&&(n.mapPos={size:3,data:t.attributeData.mapPosition},e.mapPos=t.indices),new u.GeometryData(n,e)},e.geometryAsPolygon=function(t){switch(t.type){case"extent":if(t instanceof o.Extent)return o.Polygon.fromExtent(t);break;case"polygon":return t}return null},e.geometryToRenderInfo=function(t,e,n,o){var i=r.pathsToTriangulationInfo(t.rings,t.hasZ,1),s=new Float64Array(i.position.length),p=a.applyPerVertexElevationAlignment(i.position,t.spatialReference,0,s,0,i.position,0,i.position.length/3,e,n,o),u=null!=p;return{position:i.position,mapPosition:s,polygons:g(i.polygons,i.position,s),outlines:c(i.outlines,i.position,s),projectionSuccess:u,sampledElevation:p}},e.geometryToRenderInfoDraped=function(t,e){for(var n=r.pathsToTriangulationInfo(t.rings,!1,1),o=s.bufferToBuffer(n.position,t.spatialReference,0,n.position,e,0,n.position.length/3),i=2;i<n.position.length;i+=3)n.position[i]=p.DRAPED_Z;return{position:n.position,polygons:g(n.polygons,n.position),outlines:c(n.outlines,n.position),projectionSuccess:o}}}));