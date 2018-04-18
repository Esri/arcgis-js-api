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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["./GridLayoutCalculator"],function(e){var i={};return i.resizeToFitAllowedWidth=function(e,t){var a={resetWidth:!0,columnsToPreserve:e.columns,stickToRight:!0,rightOffsetWeight:t&&t.rightOffsetWeight};i._resizeWidthForParams(e,a)},i.resizeToFitWidth=function(e,t){if(t&&!isNaN(t)){var a={resetWidth:!0,columnsToPreserve:e.columns,newWidth:t};i._resizeWidthForParams(e,a)}},i._resizeWidthForParams=function(t,a){e.recalcColumns(t,a),t.getFieldCells().forEach(function(i){i.setWidth(e.calcFieldWidth(t,i.gridData,i.column.field))}),i._makeFinalAdjustments(t)},i._makeFinalAdjustments=function(i){e.positionCells(i),i.getFieldCells().forEach(function(e){e.updateSizers&&e.updateSizers()})},i.resizeToFitHeight=function(t,a){e.recalcRowsToFitHeight(t,a),t.getFieldCells().forEach(function(i){i.setHeight(e.calcDataHeight(t,i.gridData,i.column.field))}),i._makeFinalAdjustments(t)},i.scaleProportionallyWithinParent=function(e,t){var a=e.getTableBox();e.setGridPosition(a.l*t.xScale,a.t*t.yScale),1!==t.xScale&&i.resizeToFitWidth(e,a.w*t.xScale),1!==t.yScale&&i.resizeToFitHeight(e,a.h*t.yScale)},i.scaleProportionallyPreservingCenter=function(e,t){var a=e.getTableBox(),o=a.w*t.xScale,l=a.h*t.yScale;e.setGridPosition(a.l+(a.w-o)/2,a.t+(a.h-l)/2),1!==t.xScale&&i.resizeToFitWidth(e,o),1!==t.yScale&&i.resizeToFitHeight(e,l)},i});