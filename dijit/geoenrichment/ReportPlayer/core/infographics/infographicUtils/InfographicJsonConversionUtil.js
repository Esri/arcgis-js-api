// COPYRIGHT © 2017 Esri
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

define(["dojo/_base/lang","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../../supportClasses/TableUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes","../../grid/coreUtils/GridStyleUtil"],function(e,i,l,t,s){var a={};return a.variableTableToNormalTables=function(a){function r(i,t){return l.createSingleCellTable(e.mixin({left:i.style.left,spaceBefore:i.style.top,width:i.style.width,height:i.style.height,cellStyle:s.filterCellStyles(i.style)},t))}var n=[],o=-1,d=-1,f=-1;if(a.shape){var p=r(a.shape,{fieldInfo:i.createFieldInfoFromShape(a.shape.shapeJson)});n.push(p),o=0}else if(a.image){var h=r(a.image,{fieldInfo:i.createFieldInfoFromImage(a.image.imageJson)});n.push(h),o=0}if(a.variable){var c=r(a.variable,{attributes:{viewMode:t.PREVIEW_VALUES},themeStyle:{fields:{field0:a.variable.themeStyle}},fieldInfo:a.variable.fieldInfo});n.push(c),d=n.length-1}if(a.description){var m=r(a.description,{text:a.description.text,themeStyle:{fields:{field0:a.description.themeStyle}}});n.push(m),f=n.length-1}return{tableJsons:n,iconIndex:o,variableIndex:d,descriptionIndex:f}},a});