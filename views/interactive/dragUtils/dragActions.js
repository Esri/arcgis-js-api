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

define(["require","exports","../../../core/maybe","../../../geometry/support/webMercatorUtils","../../draw/support/drawUtils"],function(e,r,t,n,a){function o(e,r){function o(e,r){return t.isNone(e)||"mesh"===e.type?null:e.spatialReference.equals(r)?e.clone():n.canProject(e,r)?n.project(e,r):null}var c=null,i=t.isSome(e[r])?e[r].spatialReference:null;return function(u){if("start"===u.action&&t.isSome(e[r])&&(c=o(e[r],u.spatialReference)),!t.isNone(c)){var l=a.move(c.clone(),u.deltaX,u.deltaY,u.deltaZ);l.spatialReference.equals(i)?e[r]=l:e[r]=n.project(l,i)}}}function c(e){return o(e,"geometry")}function i(e){var r=e.map(c);return function(e){return r.forEach(function(r){return r(e)})}}Object.defineProperty(r,"__esModule",{value:!0}),r.createGeometryDragAction=o,r.createGraphicDragAction=c,r.createGraphicDragActionMany=i});