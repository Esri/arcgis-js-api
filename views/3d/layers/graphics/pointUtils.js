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

define(["require","exports","../../../../core/maybe","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/support/aaBoundingBox","../../../../geometry/support/coordsUtils","../../../../layers/graphics/dehydratedFeatures","./elevationAlignmentUtils","./elevationAlignmentUtils","./graphicUtils","../../support/pointUtils","../../webgl-engine/lib/Object3D"],(function(e,t,n,r,o,i,a,l,c,s,p,d,g){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.geometryToRenderInfo=t.placePointOnGeometry=t.extendPointGraphicElevationContext=t.createStageObjectForHUD=void 0;var u=o.vec3f64.create();t.createStageObjectForHUD=function(e,t,o,a,l,c,p,v,m,h,f){var y=o?o.length:0,P=e.clippingExtent;if(d.pointToVector(t,u,e.elevationProvider.spatialReference),n.isSome(P)&&!i.containsPoint(P,u))return null;var x=e.renderCoordsHelper.spatialReference;d.pointToVector(t,u,x);for(var b=e.localOriginFactory.getOrigin(u),E=new g({castShadow:!1,metadata:{layerUid:m,graphicUid:h,usesVerticalDistanceToGround:!0},idHint:v}),U=0;U<y;U++){var O=l?l[U]:r.mat4f64.IDENTITY;E.addGeometry(o[U],a[U],O,c,b,f)}return{object:E,sampledElevation:s.applyElevationAlignmentForHUD(E,t,e.elevationProvider,e.renderCoordsHelper,p)}},t.extendPointGraphicElevationContext=function(e,t,n){var r=e.elevationContext,o=n.spatialReference;d.pointToVector(t,u,o),r.centerPointInElevationSR=l.makeDehydratedPoint(u[0],u[1],t.hasZ?u[2]:0,o)},t.placePointOnGeometry=function(e){switch(e.type){case"point":return e;case"polygon":case"extent":return p.computeCentroid(e);case"polyline":var t=e.paths[0];if(!t||0===t.length)return null;var n=a.getPointOnPath(t,a.getPathLength(t)/2);return l.makeDehydratedPoint(n[0],n[1],n[2],e.spatialReference);case"mesh":return e.extent.center}return null},t.geometryToRenderInfo=function(e,t,n,r,o){var i=new Float64Array(3*e.length),a=new Float64Array(i.length);e.forEach((function(e,t){i[3*t+0]=e[0],i[3*t+1]=e[1],i[3*t+2]=e.length>2?e[2]:0}));var l=c.applyPerVertexElevationAlignment(i,t,0,a,0,i,0,i.length/3,n,r,o),s=null!=l;return{numVertices:e.length,position:i,mapPosition:a,projectionSuccess:s,sampledElevation:l}}}));