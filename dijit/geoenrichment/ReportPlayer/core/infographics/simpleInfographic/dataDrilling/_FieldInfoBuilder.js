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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder"],function(e,l){var i={};return i.provideFieldInfoForChartPoint=function(i,a,t,f,r){var o=i.fullName;if(delete i.fullName,o){f=f||"n";var n=f+"/"+o;i.fieldInfo={name:e.createFieldNameFromVariable(o,f),alias:i.label,fieldCategory:t?"":a.label,hasVariable:!0,variableID:o.substr(o.indexOf(".")+1),fullName:o,statefulName:n},e.provideQualifiedFieldInfoTemplateName(i.fieldInfo,r||e.ENRICHED_DATA_NO_LEVELS)}else i.script&&(i.fieldInfo=l.createFieldInfoFromScript(i.script),delete i.script)},i});