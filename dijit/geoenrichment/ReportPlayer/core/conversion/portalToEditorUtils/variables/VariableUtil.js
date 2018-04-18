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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define([],function(){var t={};return t.getType=function(t){return t&&(0===t.indexOf("esriFieldType")?t:"esriFieldType"+t)},t.fieldTagToVariable=function(e,a){return e.attributes.MapTo&&"AREA_ID"!==e.attributes.Name?{id:e.attributes.MapTo.substr(e.attributes.MapTo.lastIndexOf(".")+1),fullName:e.attributes.MapTo,alias:e.attributes.Alias,fieldName:e.attributes.Name,precision:Number(e.attributes.Decimals)||0,calculatorName:a,templateName:a+"."+e.attributes.Name,type:t.getType(e.attributes.Type)}:null},t.scriptTagToVariable=function(e,a){return{id:e.attributes.Name,fullName:a+"."+e.attributes.Name,fieldName:e.attributes.Name,alias:e.attributes.Alias,precision:Number(e.attributes.Decimals)||0,usedFields:e.attributes.usedFields?e.attributes.usedFields.split(","):[],calculatorName:a,templateName:a+"."+e.attributes.Name,type:t.getType(e.attributes.Type)}},t});