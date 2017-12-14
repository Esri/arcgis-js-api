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

define([],function(){var t={};return t.fieldTagToVariable=function(t,e){return t.attributes.MapTo&&"AREA_ID"!==t.attributes.Name?{id:t.attributes.MapTo.substr(t.attributes.MapTo.lastIndexOf(".")+1),fullName:t.attributes.MapTo,alias:t.attributes.Alias,fieldCategory:t.attributes.FieldCategory,fieldName:t.attributes.Name,precision:Number(t.attributes.Decimals)||0,calculatorName:e,templateName:e?e+"."+t.attributes.Name:null,isScriptVariable:!1}:null},t.scriptTagToVariable=function(t,e){return{id:t.attributes.Name,fullName:t.attributes.Name,fieldName:t.attributes.Name,alias:t.attributes.Alias,fieldCategory:t.attributes.FieldCategory,precision:Number(t.attributes.Decimals)||0,usedFields:t.attributes.usedFields?t.attributes.usedFields.split(","):[],calculatorName:e,templateName:e?e+"."+t.attributes.Name:null,isScriptVariable:!0}},t});