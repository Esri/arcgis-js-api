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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define([],(function(){var o={};return o.studyAreaToJson=function(e){var t=e.toJson();return t.geometry&&(t.geometry.points?o._processPoints(t.geometry.points):t.geometry.paths?t.geometry.paths.forEach(o._processPoints):t.geometry.rings&&t.geometry.rings.forEach(o._processPoints)),t},o._processPoints=function(o){o.forEach((function(o){o[0]=parseFloat(o[0].toFixed(10)),o[1]=parseFloat(o[1].toFixed(10))}))},o}));