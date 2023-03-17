// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["./RowDataUtil"],(function(e){var i={recalcRowsToFitHeight:function(i,t){var a=t/e.recalcGridHeight(i);function n(t){t.forEach((function(t){i.columns.some((function(n,r){if(!i.looseResize&&r)return!0;e.setDataHeight(i,t,n.field,e.getDataHeight(i,t,n.field)*a)}))}))}1!==a&&(n(i.rows),i._getSavedOriginalData()&&n(i._getSavedOriginalData()),e.recalcGridHeight(i))}};return i}));