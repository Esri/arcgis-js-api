// COPYRIGHT © 2017 Esri
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

define(["./RowDataUtil"],function(e){var t={};return t.recalcRowsToFitHeight=function(t,i){var a=e.recalcGridHeight(t),o=i/a;1!==o&&(t.store.data.forEach(function(i){t.columns.some(function(a,r){return!t.looseResize&&r?!0:void e.setDataHeight(t,i,a.field,e.getDataHeight(t,i,a.field)*o)})}),e.recalcGridHeight(t))},t});