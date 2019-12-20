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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/lang","./gridLayoutCalcUtils/GridLayoutCalculatorQueryUtil","./gridLayoutCalcUtils/GridElementBoxCalculator","./gridLayoutCalcUtils/GridCellNodePlacer","./gridLayoutCalcUtils/rows/GridLayoutRowsCalculator","./gridLayoutCalcUtils/columns/GridLayoutColumnsCalculator","./gridLayoutCalcUtils/GridLayoutSnapper","../../supportClasses/tableJson/TableJsonUtil"],function(t,e,a,l,o,r,i,u){var n={};return a.calculator=n,n.markAsDirty=e.markAsDirty,n.fieldToColumn=e.fieldToColumn,n.dataIdToData=e.dataIdToData,n.getSpannedColumns=e.getSpannedColumns,n.recalcRows=o.recalcRows,n.recalcColumns=r.recalcColumns,n.recalcColumnsTableJson=r.recalcColumnsTableJson,n.recalcRowsToFitHeight=o.recalcRowsToFitHeight,n.adjustColumnWidth=r.adjustColumnWidth,n.getAffectedCellsForColumnAdjust=r.getAffectedCells,n.adjustRowHeight=o.adjustRowHeight,n.getAffectedCellsForRowAdjust=o.getAffectedCells,n.recalcGridWidth=r.recalcGridWidth,n.calcFieldWidth=r.calcFieldWidth,n.getFieldWidth=r.getFieldWidth,n.setFieldWidth=r.setFieldWidth,n.calcDataHeight=o.calcDataHeight,n.getDataHeight=o.getDataHeight,n.setDataHeight=o.setDataHeight,n.autoSnapLayout=i.autoSnapLayout,n.positionCells=l.positionCells,n.calcFeatureCount=function(t,e,a){return(t-e)/a},n.calcRingIndexForCell=function(t){var e=t.parentGrid;if(!e)return-1;if(e.getNumDynamicRows())return void 0!==t.gridData.currentFeatureIndex?t.gridData.currentFeatureIndex:t.gridData.index-e.getNumFixedRows();var a=e.getNumFixedColumns();return t.column.index<a?-1:Math.floor((t.column.index-a)/e.getNumDynamicColumns())},n.trimColumnsForNumberOfFeatures=function(t){for(var e=t.viewModel.dynamicReportInfo.fieldData.areaData.length,a=n.recalcGridWidth(t),l=0,o=0;o<t.getNumFixedColumns();o++)l+=t.columns[o].style.width;var r=a-l,i=n.calcFeatureCount(t.columns.length,t.getNumFixedColumns(),t.getNumDynamicColumns()),u=i-e;if(!(u<0)){for(var d=t.columns.slice(),o=d.length=t.getNumFixedColumns(),c=[],s=0;;){if(!t.columns[o])break;for(var m=0;m<e;m++){var g=t.columns[o++];s+=g.style.width,c.push(g)}o+=u}var C=r/s;c.forEach(function(t){t.style.width*=C}),t.columns=d.concat(c)}},n.adjustRowsForNumberOfFeatures=function(e){var a=e.viewModel.dynamicReportInfo.fieldData.areaData.length;if(!(a<=1)){var l=e.store.data[e.getNumFixedRows()];l.currentFeatureIndex=0;for(var o=1;o<a;o++){var r=t.clone(l);r.currentFeatureIndex=o,e.store.data.push(r)}u.applyDefaultStyling({data:{data:e.store.data,columns:e.columns}})}},n});