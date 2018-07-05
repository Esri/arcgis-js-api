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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["../GridLayoutCalculatorQueryUtil","./RowDataUtil","./_RowModifierLoose","./_RowModifierNormal"],function(e,t,i,a){var o={},n={checkHeightLimit:function(e,i,a,o){if(e.getMaxHeight()){var n=0;e.store.data.forEach(function(o){o!==i&&(n+=t.getDataHeight(e,o,a))}),o=Math.min(e.getMaxHeight()-n,o)}return o}},l={findDataToMove:function(i,a,o,n){var l=e.getMovableData(i,a,o);if(l){n-=t.calcDataHeight(i,a,o,l.index)}return{data:l||a,height:n}}},f={finalResizeGridCells:function(e){e.getFieldCells().forEach(function(i){i.setHeight(t.calcDataHeight(e,i.gridData,i.column.field))})}};return o.adjustRowHeight=function(e,t,o,r){r=n.checkHeightLimit(e,t,o,r);var c=l.findDataToMove(e,t,o,r);(e.looseResize?i:a).adjustRowHeight(e,c.data,o,c.height),f.finalResizeGridCells(e)},o.getAffectedCells=function(e,t,a){return e.looseResize?i.getAffectedCells(e,l.findDataToMove(e,t,a).data,a):null},o});