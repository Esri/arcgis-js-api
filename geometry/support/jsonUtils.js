/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","../Extent","../Geometry","../Multipoint","../Point","../Polygon","../Polyline"],(function(e,o,n,t,r,i,s,u){"use strict";function l(e){try{throw new Error("fromJson is deprecated, use fromJSON instead")}catch(o){console.warn(o.stack)}return p(e)}function y(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function m(e){return void 0!==e.points}function f(e){return void 0!==e.x&&void 0!==e.y}function c(e){return void 0!==e.paths}function d(e){return void 0!==e.rings}function v(e){return void 0!==e.vertexAttributes}function p(e){return o.isNone(e)?null:e instanceof t?e:f(e)?i.fromJSON(e):c(e)?u.fromJSON(e):d(e)?s.fromJSON(e):m(e)?r.fromJSON(e):y(e)?n.fromJSON(e):null}function P(e){return e?f(e)?"esriGeometryPoint":c(e)?"esriGeometryPolyline":d(e)?"esriGeometryPolygon":y(e)?"esriGeometryEnvelope":m(e)?"esriGeometryMultipoint":null:null}const G={esriGeometryPoint:i,esriGeometryPolyline:u,esriGeometryPolygon:s,esriGeometryEnvelope:n,esriGeometryMultipoint:r};function a(e){return e&&G[e]||null}e.fromJSON=p,e.fromJson=l,e.getGeometryType=a,e.getJsonType=P,e.isExtent=y,e.isMesh=v,e.isMultipoint=m,e.isPoint=f,e.isPolygon=d,e.isPolyline=c,Object.defineProperty(e,"__esModule",{value:!0})}));
