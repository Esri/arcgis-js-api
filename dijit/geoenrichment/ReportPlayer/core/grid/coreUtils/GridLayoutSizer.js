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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["./GridLayoutCalculator"],(function(e){var t={resizeToFitAllowedWidth:function(e,i){var o={resetWidth:!0,columnsToPreserve:e.columns,stickToRight:!0,rightOffsetWeight:i&&i.rightOffsetWeight};t._resizeWidthForParams(e,o)},resizeToFitWidth:function(e,i){if(i&&!isNaN(i)){var o={resetWidth:!0,columnsToPreserve:e.columns,newWidth:i};t._resizeWidthForParams(e,o)}},_resizeWidthForParams:function(i,o){e.recalcColumns(i,o),i.getCells().forEach((function(t){t.setWidth(e.calcFieldWidth(i,t.row,t.column.field))})),t._makeFinalAdjustments(i)},_makeFinalAdjustments:function(t){e.positionCells(t),t.getCells().forEach((function(e){e.updateSizers&&e.updateSizers()})),t.getCells().forEach((function(e){e.updateRotationControls&&e.updateRotationControls()}))},resizeToFitHeight:function(i,o){e.recalcRowsToFitHeight(i,o),i.getCells().forEach((function(t){t.setHeight(e.calcDataHeight(i,t.row,t.column.field))})),t._makeFinalAdjustments(i)},scaleProportionallyWithinParent:function(e,i){var o=e.getTableBox();e.setPosition(o.l*i.xScale,o.t*i.yScale),1!==i.xScale&&t.resizeToFitWidth(e,o.w*i.xScale),1!==i.yScale&&t.resizeToFitHeight(e,o.h*i.yScale)},scaleProportionallyPreservingCenter:function(e,i){var o=e.getTableBox(),a=o.w*i.xScale,l=o.h*i.yScale;e.setPosition(o.l+(o.w-a)/2,o.t+(o.h-l)/2),1!==i.xScale&&t.resizeToFitWidth(e,a),1!==i.yScale&&t.resizeToFitHeight(e,l)}};return t}));