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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["./RowDataUtil"],function(e){var t={};return t.recalcRowsToFitHeight=function(t,i){function a(i){i.forEach(function(i){t.columns.some(function(a,n){if(!t.looseResize&&n)return!0;e.setDataHeight(t,i,a.field,e.getDataHeight(t,i,a.field)*r)})})}var n=e.recalcGridHeight(t),r=i/n;1!==r&&(a(t.store.data),t._getSavedOriginalData()&&a(t._getSavedOriginalData()),e.recalcGridHeight(t))},t});