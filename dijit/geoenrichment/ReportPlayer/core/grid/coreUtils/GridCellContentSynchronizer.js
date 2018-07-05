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

define(["./GridDataUtil","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder"],function(e,o){return{syncParentFieldInfoWithElementState:function(i,n){if(i&&n){var t=e.getFieldInfo(i);t&&(t.isChart||(t.isImage?e.setFieldInfo(i,o.createFieldInfoFromImage(n.toJson(),n.imageTriggerJson)):t.isShape?e.setFieldInfo(i,o.createFieldInfoFromShape(n.toJson())):t.isReportSection?e.setFieldInfo(i,o.createFieldInfoFromSection(n.toJson())):t.isInfographic&&e.setFieldInfo(i,o.createFieldInfoFromInfographic(n.toJson()))))}}}});