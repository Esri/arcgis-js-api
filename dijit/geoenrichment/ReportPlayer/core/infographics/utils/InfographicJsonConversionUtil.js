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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/lang","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../../supportClasses/tableJson/TableJsonUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes","../../grid/coreUtils/GridStyleUtil","../../annotations/shape/ShapeJsonUtil","./InfographicVariableLayoutUtil"],(function(e,i,t,l,a,s,n){var o={variableTableToNormalTables:function(o){var r=[],p=-1,d=-1,h=-1;function f(i,l){return t.createSingleCellTable(e.mixin({left:i.style.left,top:i.style.top,width:i.style.width,height:i.style.height,cellStyle:a.filterCellStyles(i.style)},l))}if(o.shape&&!s.isEmptyShapeJson(o.shape.shapeJson)){var b=f(o.shape,{fieldInfo:i.createFieldInfoFromShape(o.shape.shapeJson)});r.push(b),p=0}else if(o.image){var c=f(o.image,{fieldInfo:i.createFieldInfoFromImage(o.image.imageJson)});r.push(c),p=0}if(o.variable){var m=f(o.variable,{attributes:{viewMode:l.PREVIEW_VALUES},themeStyle:{fields:{field0:o.variable.themeStyle}},fieldInfo:o.variable.fieldInfo});r.push(m),d=r.length-1}if(o.description){var u=f(o.description,{text:o.description.text,themeStyle:{fields:{field0:o.description.themeStyle}}});r.push(u),h=r.length-1}return{tableJsons:r,iconIndex:p,variableIndex:d,descriptionIndex:h,isVariableInShape:n.isVariableInShape(o)}}};return o}));