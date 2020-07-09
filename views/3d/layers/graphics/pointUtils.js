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

define(["require","exports","../../../../core/maybe","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/support/aaBoundingBox","../../../../geometry/support/coordsUtils","../../../../layers/graphics/dehydratedFeatures","./elevationAlignmentUtils","./elevationAlignmentUtils","./graphicUtils","../../support/projectionUtils","../../webgl-engine/lib/Object3D"],(function(e,t,n,r,o,a,i,l,c,s,p,u,d){Object.defineProperty(t,"__esModule",{value:!0});var g=o.vec3f64.create();t.createStageObjectForHUD=function(e,t,o,i,l,c,p,v,m,h,f){var y=o?o.length:0,P=e.clippingExtent;if(u.pointToVector(t,g,e.elevationProvider.spatialReference),n.isSome(P)&&!a.containsPoint(P,g))return null;var x=e.renderCoordsHelper.spatialReference;u.pointToVector(t,g,x);for(var b=e.localOriginFactory.getOrigin(g),E=new d({castShadow:!1,metadata:{layerUid:m,graphicUid:h,usesVerticalDistanceToGround:!0},idHint:v}),U=0;U<y;U++){var D=l?l[U]:r.mat4f64.IDENTITY;E.addGeometry(o[U],i[U],D,c,b,f)}return{object:E,sampledElevation:s.applyElevationAlignmentForHUD(E,t,e.elevationProvider,e.renderCoordsHelper,p)}},t.extendPointGraphicElevationContext=function(e,t,n){var r=e.elevationContext,o=n.spatialReference;u.pointToVector(t,g,o),r.centerPointInElevationSR=l.makeDehydratedPoint(g[0],g[1],t.hasZ?g[2]:0,o)},t.placePointOnGeometry=function(e){switch(e.type){case"point":return e;case"polygon":case"extent":return p.computeCentroid(e);case"polyline":var t=e.paths[0];if(!t||0===t.length)return null;var n=i.getPointOnPath(t,i.getPathLength(t)/2);return l.makeDehydratedPoint(n[0],n[1],n[2],e.spatialReference);case"mesh":return e.extent.center}return null},t.geometryToRenderInfo=function(e,t,n,r,o){var a=new Float64Array(3*e.length),i=new Float64Array(a.length);e.forEach((function(e,t){a[3*t+0]=e[0],a[3*t+1]=e[1],a[3*t+2]=e.length>2?e[2]:0}));var l=c.applyPerVertexElevationAlignment(a,t,0,i,0,a,0,a.length/3,n,r,o),s=null!=l;return{numVertices:e.length,position:a,mapPosition:i,projectionSuccess:s,sampledElevation:l}}}));