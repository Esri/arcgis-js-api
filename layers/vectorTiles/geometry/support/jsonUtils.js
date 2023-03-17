// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports","../Extent","../Multipoint","../Point","../Polygon","../Polyline"],(function(e,o,n,i,r,t,s){function u(e){return void 0!==e.points}function l(e){return void 0!==e.x&&void 0!==e.y}function f(e){return void 0!==e.paths}function y(e){return void 0!==e.rings}function m(e){return e?l(e)?r.fromJSON(e):f(e)?s.fromJSON(e):y(e)?t.fromJSON(e):u(e)?i.fromJSON(e):function(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}(e)?n.fromJSON(e):null:null}Object.defineProperty(o,"__esModule",{value:!0}),o.fromJson=function(e){try{throw new Error("fromJson is deprecated, use fromJSON instead")}catch(e){console.warn(e.stack)}return m(e)},o.isMultipoint=u,o.isPoint=l,o.isPolyline=f,o.isPolygon=y,o.fromJSON=m,o.getJsonType=function(e){return e instanceof r?"esriGeometryPoint":e instanceof s?"esriGeometryPolyline":e instanceof t?"esriGeometryPolygon":e instanceof n?"esriGeometryEnvelope":e instanceof i?"esriGeometryMultipoint":null};var c={esriGeometryPoint:r,esriGeometryPolyline:s,esriGeometryPolygon:t,esriGeometryEnvelope:n,esriGeometryMultipoint:i};o.getGeometryType=function(e){return e&&c[e]||null}}));