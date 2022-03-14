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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define([],(function(){var e={getType:function(e,t){return e?0===e.indexOf("esriFieldType")?e:"esriFieldType"+e:t},fieldTagToVariable:function(t,a){return t.attributes.MapTo&&"AREA_ID"!==t.attributes.Name?{id:t.attributes.MapTo.substr(t.attributes.MapTo.lastIndexOf(".")+1),fullName:t.attributes.MapTo,alias:t.attributes.Alias,fieldName:t.attributes.Name,precision:Number(t.attributes.Decimals)||0,calculatorName:a,templateName:a+"."+t.attributes.Name,type:e.getType(t.attributes.Type,t.attributes.Decimals?"esriFieldTypeDouble":"esriFieldTypeString"),vintage:null,source:null}:null},scriptTagToVariable:function(t,a){return{id:t.attributes.Name,fullName:a+"."+t.attributes.Name,fieldName:t.attributes.Name,alias:t.attributes.Alias,precision:Number(t.attributes.Decimals)||0,usedFields:t.attributes.usedFields?t.attributes.usedFields.split(","):[],usedMapTos:null,expressionText:t.tags[0].text,calculatorName:a,templateName:a+"."+t.attributes.Name,type:e.getType(t.attributes.Type,t.attributes.Decimals?"esriFieldTypeDouble":"esriFieldTypeString")}}};return e}));