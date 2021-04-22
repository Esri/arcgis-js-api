// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ElementUsageTypes","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../../supportClasses/tableJson/TableJsonUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes","../../grid/coreUtils/GridStyleUtil","../../annotations/shape/ShapeJsonUtil","./InfographicVariableLayoutUtil"],(function(e,i,t,l,a,s,n,o){var r={variableTableToNormalTables:function(r){var p=[],d=-1,f=-1,h=-1;function I(i,t){return l.createSingleCellTable(e.mixin({left:i.style.left,top:i.style.top,width:i.style.width,height:i.style.height,cellStyle:s.filterCellStyles(i.style)},t))}if(r.shape&&!n.isEmptyShapeJson(r.shape.shapeJson)){var m=I(r.shape,{fieldInfo:t.createFieldInfoFromShape(r.shape.shapeJson)});m.elementUsageType=i.INFOGRAPHIC_ICON_TABLE,p.push(m),d=0}else if(r.image){var y=I(r.image,{fieldInfo:t.createFieldInfoFromImage(r.image.imageJson)});y.elementUsageType=i.INFOGRAPHIC_ICON_TABLE,p.push(y),d=0}if(r.variable){var c=I(r.variable,{attributes:{viewMode:a.PREVIEW_VALUES},themeStyle:{fields:{field0:r.variable.themeStyle}},fieldInfo:r.variable.fieldInfo});c.elementUsageType=i.INFOGRAPHIC_VARIABLE_TABLE,p.push(c),f=p.length-1}if(r.description){var g=I(r.description,{text:r.description.text,themeStyle:{fields:{field0:r.description.themeStyle}},fieldInfo:r.description.fieldInfo});g.elementUsageType=i.INFOGRAPHIC_DESC_TABLE,p.push(g),h=p.length-1}return{tableJsons:p,iconIndex:d,variableIndex:f,descriptionIndex:h,isVariableInShape:o.isVariableInShape(r)}}};return r}));