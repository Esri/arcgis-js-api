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

define(["require","exports","../../../../core/maybe","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/support/aaBoundingBox","../../../../geometry/support/coordsUtils","../../../../layers/graphics/dehydratedFeatures","./elevationAlignmentUtils","./graphicUtils","../../support/projectionUtils","../../webgl-engine/lib/Object3D"],(function(e,t,r,n,o,a,i,l,c,s,p,d){Object.defineProperty(t,"__esModule",{value:!0});var u=o.vec3f64.create();t.createStageObjectForHUD=function(e,t,o,i,l,s,g,v,m,f,h){var y=o?o.length:0,P=e.clippingExtent;if(p.pointToVector(t,u,e.elevationProvider.spatialReference),r.isSome(P)&&!a.containsPoint(P,u))return null;var x=e.renderCoordsHelper.spatialReference;p.pointToVector(t,u,x);for(var b=e.localOriginFactory.getOrigin(u),U=new d({castShadow:!1,metadata:{layerUid:m,graphicUid:f,usesVerticalDistanceToGround:!0},idHint:v}),D=0;D<y;D++){var O=l?l[D]:n.mat4f64.IDENTITY;U.addGeometry(o[D],i[D],O,s,b,h)}return{object:U,sampledElevation:c.applyElevationAlignmentForHUD(U,t,e.elevationProvider,e.renderCoordsHelper,g)}},t.extendPointGraphicElevationContext=function(e,t,r){var n=e.elevationContext,o=r.spatialReference;p.pointToVector(t,u,o),n.centerPointInElevationSR=l.makeDehydratedPoint(u[0],u[1],t.hasZ?u[2]:0,o)},t.placePointOnGeometry=function(e){switch(e.type){case"point":return e;case"polygon":case"extent":return s.computeCentroid(e);case"polyline":var t=e.paths[0];if(!t||0===t.length)return null;var r=i.getPointOnPath(t,i.getPathLength(t)/2);return l.makeDehydratedPoint(r[0],r[1],r[2],e.spatialReference);case"mesh":return e.extent.center}return null}}));