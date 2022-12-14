/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e}from"../../../../core/maybe.js";import{I as t}from"../../../../chunks/mat4f64.js";import{c as r}from"../../../../chunks/vec3f64.js";import{projectPointToVector as o}from"../../../../geometry/projection.js";import{containsPoint as n}from"../../../../geometry/support/aaBoundingBox.js";import{getPointOnPath as i,getPathLength as s}from"../../../../geometry/support/coordsUtils.js";import{makeDehydratedPoint as a}from"../../../../layers/graphics/dehydratedFeatures.js";import{applyElevationAlignmentForHUD as l,applyPerVertexElevationAlignment as c}from"./elevationAlignmentUtils.js";import{computeCentroid as p}from"./graphicUtils.js";import{Object3D as m}from"../../webgl-engine/lib/Object3D.js";const u=r();function f(r,i,s,a,c,p,f,g){const d=s?s.length:0,h=r.clippingExtent;if(o(i,u,r.elevationProvider.spatialReference),e(h)&&!n(h,u))return null;o(i,u,r.renderCoordsHelper.spatialReference);const j=r.localOriginFactory.getOrigin(u),y=new m({castShadow:!1,metadata:{layerUid:p,graphicUid:f,usesVerticalDistanceToGround:!0}});for(let e=0;e<d;e++){const r=t;y.addGeometry(s[e],a[e],r,j,g)}return{object:y,sampledElevation:l(y,i,r.elevationProvider,r.renderCoordsHelper,c)}}function g(e,t,r){const n=e.elevationContext,i=r.spatialReference;o(t,u,i),n.centerPointInElevationSR=a(u[0],u[1],t.hasZ?u[2]:0,i)}function d(e){switch(e.type){case"point":return e;case"polygon":case"extent":return p(e);case"polyline":{const t=e.paths[0];if(!t||0===t.length)return null;const r=i(t,s(t)/2);return a(r[0],r[1],r[2],e.spatialReference)}case"mesh":return e.origin}return null}function h(e,t,r,o,n){const i=new Float64Array(3*e.length),s=new Float64Array(i.length);e.forEach(((e,t)=>{i[3*t+0]=e[0],i[3*t+1]=e[1],i[3*t+2]=e.length>2?e[2]:0}));const a=c(i,t,0,s,0,i,0,i.length/3,r,o,n),l=null!=a;return{numVertices:e.length,position:i,mapPosition:s,projectionSuccess:l,sampledElevation:a}}export{f as createStageObjectForHUD,g as extendPointGraphicElevationContext,h as geometryToRenderInfo,d as placePointOnGeometry};