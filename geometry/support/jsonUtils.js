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

define(["require","exports","../Extent","../Geometry","../Multipoint","../Point","../Polygon","../Polyline"],(function(e,o,n,r,t,i,u,s){function l(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function y(e){return void 0!==e.points}function m(e){return void 0!==e.x&&void 0!==e.y}function f(e){return void 0!==e.paths}function c(e){return void 0!==e.rings}function d(e){return e?e instanceof r?e:m(e)?i.fromJSON(e):f(e)?s.fromJSON(e):c(e)?u.fromJSON(e):y(e)?t.fromJSON(e):l(e)?n.fromJSON(e):null:null}Object.defineProperty(o,"__esModule",{value:!0}),o.fromJson=function(e){try{throw new Error("fromJson is deprecated, use fromJSON instead")}catch(e){console.warn(e.stack)}return d(e)},o.isExtent=l,o.isMultipoint=y,o.isPoint=m,o.isPolyline=f,o.isPolygon=c,o.isMesh=function(e){return void 0!==e.vertexAttributes},o.fromJSON=d,o.getJsonType=function(e){return e?m(e)?"esriGeometryPoint":f(e)?"esriGeometryPolyline":c(e)?"esriGeometryPolygon":l(e)?"esriGeometryEnvelope":y(e)?"esriGeometryMultipoint":null:null};var v={esriGeometryPoint:i,esriGeometryPolyline:s,esriGeometryPolygon:u,esriGeometryEnvelope:n,esriGeometryMultipoint:t};o.getGeometryType=function(e){return e&&v[e]||null}}));