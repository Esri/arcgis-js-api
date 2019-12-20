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

define(["dojo/_base/lang","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../../supportClasses/tableJson/TableJsonUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes","../../grid/coreUtils/GridStyleUtil","../../annotations/shape/ShapeJsonUtil","./InfographicVariableLayoutUtil"],function(e,i,t,l,a,s,n){var o={};return o.variableTableToNormalTables=function(o){function r(i,l){return t.createSingleCellTable(e.mixin({left:i.style.left,top:i.style.top,width:i.style.width,height:i.style.height,cellStyle:a.filterCellStyles(i.style)},l))}var p=[],d=-1,h=-1,f=-1;if(o.shape&&!s.isEmptyShapeJson(o.shape.shapeJson)){var b=r(o.shape,{fieldInfo:i.createFieldInfoFromShape(o.shape.shapeJson)});p.push(b),d=0}else if(o.image){var c=r(o.image,{fieldInfo:i.createFieldInfoFromImage(o.image.imageJson)});p.push(c),d=0}if(o.variable){var m=r(o.variable,{attributes:{viewMode:l.PREVIEW_VALUES},themeStyle:{fields:{field0:o.variable.themeStyle}},fieldInfo:o.variable.fieldInfo});p.push(m),h=p.length-1}if(o.description){var u=r(o.description,{text:o.description.text,themeStyle:{fields:{field0:o.description.themeStyle}}});p.push(u),f=p.length-1}return{tableJsons:p,iconIndex:d,variableIndex:h,descriptionIndex:f,isVariableInShape:n.isVariableInShape(o)}},o});