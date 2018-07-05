// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../Extent","../Multipoint","../Point","../Polygon","../Polyline"],function(e,o,n,i,r,t,s){function u(e){try{throw new Error("fromJson is deprecated, use fromJSON instead")}catch(e){console.warn(e.stack)}return a(e)}function l(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function f(e){return void 0!==e.points}function y(e){return void 0!==e.x&&void 0!==e.y}function m(e){return void 0!==e.paths}function c(e){return void 0!==e.rings}function a(e){return e?y(e)?r.fromJSON(e):m(e)?s.fromJSON(e):c(e)?t.fromJSON(e):f(e)?i.fromJSON(e):l(e)?n.fromJSON(e):null:null}function d(e){return e instanceof r?"esriGeometryPoint":e instanceof s?"esriGeometryPolyline":e instanceof t?"esriGeometryPolygon":e instanceof n?"esriGeometryEnvelope":e instanceof i?"esriGeometryMultipoint":null}function p(e){return e&&v[e]||null}Object.defineProperty(o,"__esModule",{value:!0}),o.fromJson=u,o.isMultipoint=f,o.isPoint=y,o.isPolyline=m,o.isPolygon=c,o.fromJSON=a,o.getJsonType=d;var v={esriGeometryPoint:r,esriGeometryPolyline:s,esriGeometryPolygon:t,esriGeometryEnvelope:n,esriGeometryMultipoint:i};o.getGeometryType=p});