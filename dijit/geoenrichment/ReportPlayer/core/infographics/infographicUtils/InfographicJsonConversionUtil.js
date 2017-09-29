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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang","../../supportClasses/templateJsonUtils/FieldInfoBuilder","../../supportClasses/TableUtil"],function(e,i,l){var t={};return t.variableTableToNormalTables=function(t){function a(i,t){return l.createSingleCellTable(e.mixin({left:i.style.left,spaceBefore:i.style.top,width:i.style.width,height:i.style.height,cellStyle:i.style},t))}var s=[],n=-1,r=-1,o=-1;if(t.shape){var f=a(t.shape,{fieldInfo:i.createFieldInfoFromShape(t.shape.shapeJson)});s.push(f),n=0}else if(t.image){var d=a(t.image,{fieldInfo:i.createFieldInfoFromImage(t.image.imageJson)});s.push(d),n=0}if(t.variable){var p=a(t.variable,{attributes:{viewMode:"previewValues"},themeStyle:{fields:{field0:t.variable.themeStyle}},fieldInfo:t.variable.fieldInfo});s.push(p),r=s.length-1}if(t.description){var h=a(t.description,{text:t.description.text,themeStyle:{fields:{field0:t.description.themeStyle}}});s.push(h),o=s.length-1}return{tableJsons:s,iconIndex:n,variableIndex:r,descriptionIndex:o}},t});