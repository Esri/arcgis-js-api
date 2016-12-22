// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../Point","../Polyline","../Polygon","../Multipoint","../Extent"],function(o,e,n,r,i){function t(o){try{throw new Error("fromJson is deprecated, use fromJSON instead")}catch(e){console.warn(e.stack)}return s(o)}function s(t){return t&&t?void 0!==t.x&&void 0!==t.y?o.fromJSON(t):void 0!==t.paths?e.fromJSON(t):void 0!==t.rings?n.fromJSON(t):void 0!==t.points?r.fromJSON(t):void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax?i.fromJSON(t):null:null}function m(t){return t instanceof o?"esriGeometryPoint":t instanceof e?"esriGeometryPolyline":t instanceof n?"esriGeometryPolygon":t instanceof i?"esriGeometryEnvelope":t instanceof r?"esriGeometryMultipoint":null}function l(o){return o&&y[o]||null}var y={esriGeometryPoint:o,esriGeometryPolyline:e,esriGeometryPolygon:n,esriGeometryEnvelope:i,esriGeometryMultipoint:r},f={fromJSON:s,fromJson:t,getJsonType:m,getGeometryType:l};return f});