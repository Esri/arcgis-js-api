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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/jsonMap","../../geometry/support/jsonUtils"],(function(e,i,t,r){Object.defineProperty(i,"__esModule",{value:!0});var n=new t.default({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});i.generalizeToRESTParameters=function(e){var i=e.toJSON(),t=i.geometries,s=i.deviationUnit,o={maxDeviation:i.maxDeviation};return t&&t.length&&(o.geometries=JSON.stringify({geometryType:r.getJsonType(t[0]),geometries:t}),o.sr=JSON.stringify(t[0].spatialReference)),n.write(s,o,"deviationUnit"),o}}));