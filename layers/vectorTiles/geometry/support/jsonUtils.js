// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","../Extent","../Multipoint","../Point","../Polygon","../Polyline"],function(e,o,n,r,t,i,u){function s(e){try{throw new Error("fromJson is deprecated, use fromJSON instead")}catch(e){console.warn(e.stack)}return a(e)}function f(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function l(e){return void 0!==e.points}function m(e){return void 0!==e.x&&void 0!==e.y}function y(e){return void 0!==e.paths}function c(e){return void 0!==e.rings}function a(e){return e?m(e)?t.fromJSON(e):y(e)?u.fromJSON(e):c(e)?i.fromJSON(e):l(e)?r.fromJSON(e):f(e)?n.fromJSON(e):null:null}function d(e){return e instanceof t?"esriGeometryPoint":e instanceof u?"esriGeometryPolyline":e instanceof i?"esriGeometryPolygon":e instanceof n?"esriGeometryEnvelope":e instanceof r?"esriGeometryMultipoint":null}function v(e){return e&&p[e]||null}Object.defineProperty(o,"__esModule",{value:!0}),o.fromJson=s,o.fromJSON=a,o.getJsonType=d;var p={esriGeometryPoint:t,esriGeometryPolyline:u,esriGeometryPolygon:i,esriGeometryEnvelope:n,esriGeometryMultipoint:r};o.getGeometryType=v});