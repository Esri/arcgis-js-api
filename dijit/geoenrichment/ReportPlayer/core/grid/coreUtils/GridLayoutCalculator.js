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

define(["dojo/_base/lang","./gridLayoutCalcUtils/GridLayoutCalculatorQueryUtil","./gridLayoutCalcUtils/GridElementBoxCalculator","./gridLayoutCalcUtils/GridCellNodePlacer","./gridLayoutCalcUtils/rows/GridLayoutRowsCalculator","./gridLayoutCalcUtils/columns/GridLayoutColumnsCalculator","./gridLayoutCalcUtils/GridLayoutSnapper","../../supportClasses/TableUtil"],function(t,e,a,l,o,i,r,u){var d={};return a.calculator=d,d.markAsDirty=e.markAsDirty,d.fieldToColumn=e.fieldToColumn,d.dataIdToData=e.dataIdToData,d.getSpannedColumns=e.getSpannedColumns,d.recalcRows=o.recalcRows,d.recalcColumns=i.recalcColumns,d.recalcColumnsTableJson=i.recalcColumnsTableJson,d.recalcRowsToFitHeight=o.recalcRowsToFitHeight,d.adjustColumnWidth=i.adjustColumnWidth,d.getAffectedCellsForColumnAdjust=i.getAffectedCells,d.adjustRowHeight=o.adjustRowHeight,d.getAffectedCellsForRowAdjust=o.getAffectedCells,d.recalcGridWidth=i.recalcGridWidth,d.calcFieldWidth=i.calcFieldWidth,d.getFieldWidth=i.getFieldWidth,d.setFieldWidth=i.setFieldWidth,d.calcDataHeight=o.calcDataHeight,d.getDataHeight=o.getDataHeight,d.setDataHeight=o.setDataHeight,d.autoSnapLayout=r.autoSnapLayout,d.positionCells=l.positionCells,d.calcFeatureCount=function(t,e,a){return(t-e)/a},d.calcRingIndexForCell=function(t){var e=t.parentGrid;if(!e)return-1;if(e.getNumDynamicRows())return void 0!==t.gridData.previewFeatureIndex?t.gridData.previewFeatureIndex:t.gridData.index-e.getNumFixedRows();var a=e.getNumFixedColumns();return t.column.index<a?-1:Math.floor((t.column.index-a)/e.getNumDynamicColumns())},d.trimColumnsForNumberOfFeatures=function(t){for(var e=t.viewModel.dynamicReportInfo.fieldData.areaData.length,a=d.recalcGridWidth(t),l=0,o=0;o<t.getNumFixedColumns();o++)l+=t.columns[o].style.width;var i=a-l,r=d.calcFeatureCount(t.columns.length,t.getNumFixedColumns(),t.getNumDynamicColumns()),u=r-e;if(!(u<0)){for(var n=t.columns.slice(),o=n.length=t.getNumFixedColumns(),c=[],s=0;;){if(!t.columns[o])break;for(var m=0;m<e;m++){var g=t.columns[o++];s+=g.style.width,c.push(g)}o+=u}var C=i/s;c.forEach(function(t){t.style.width*=C}),t.columns=n.concat(c)}},d.adjustRowsForNumberOfFeatures=function(e){var a=e.viewModel.dynamicReportInfo.fieldData.areaData.length;if(!(a<=1)){var l=e.store.data[e.getNumFixedRows()];l.previewFeatureIndex=0;for(var o=1;o<a;o++){var i=t.clone(l);i.previewFeatureIndex=o,e.store.data.push(i)}u.applyDefaultStyling({data:{data:e.store.data,columns:e.columns}})}},d});