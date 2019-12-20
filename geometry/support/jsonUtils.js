// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../Extent","../Geometry","../Multipoint","../Point","../Polygon","../Polyline"],function(e,o,n,r,t,i,u,s){function l(e){try{throw new Error("fromJson is deprecated, use fromJSON instead")}catch(e){console.warn(e.stack)}return p(e)}function y(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function m(e){return void 0!==e.points}function f(e){return void 0!==e.x&&void 0!==e.y}function c(e){return void 0!==e.paths}function d(e){return void 0!==e.rings}function v(e){return void 0!==e.vertexAttributes}function p(e){return e?e instanceof r?e:f(e)?i.fromJSON(e):c(e)?s.fromJSON(e):d(e)?u.fromJSON(e):m(e)?t.fromJSON(e):y(e)?n.fromJSON(e):null:null}function P(e){return e?f(e)?"esriGeometryPoint":c(e)?"esriGeometryPolyline":d(e)?"esriGeometryPolygon":y(e)?"esriGeometryEnvelope":m(e)?"esriGeometryMultipoint":null:null}function G(e){return e&&a[e]||null}Object.defineProperty(o,"__esModule",{value:!0}),o.fromJson=l,o.isExtent=y,o.isMultipoint=m,o.isPoint=f,o.isPolyline=c,o.isPolygon=d,o.isMesh=v,o.fromJSON=p,o.getJsonType=P;var a={esriGeometryPoint:i,esriGeometryPolyline:s,esriGeometryPolygon:u,esriGeometryEnvelope:n,esriGeometryMultipoint:t};o.getGeometryType=G});