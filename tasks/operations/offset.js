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

define(["require","exports","../../core/jsonMap","../../geometry/support/jsonUtils"],(function(e,t,o,s){Object.defineProperty(t,"__esModule",{value:!0});var r=new o.default({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),f=new o.default({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});t.offsetToRESTParameters=function(e){var t=e.toJSON(),o=t.geometries,i=t.bevelRatio,n=t.offsetDistance,a=t.offsetHow,l=t.offsetUnit,d={bevelRatio:i,offsetDistance:n};return o&&o.length&&(d.geometries=JSON.stringify({geometryType:s.getJsonType(o[0]),geometries:o}),d.sr=JSON.stringify(o[0].spatialReference)),a&&(d.offsetHow=r.toJSON(a)),l&&(d.offsetUnit=f.toJSON(l)),d}}));