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

define(["dojo/_base/declare","dojo/promise/all","dojo/when","./portalToEditorUtils/LayoutParser","./portalToEditorUtils/MetadataParser","./portalToEditorUtils/ImageCollector","./portalToEditorUtils/parsers/Parsers","./portalToEditorUtils/DummyVariableProvider","../supportClasses/DefaultStyles","../supportClasses/images/ImageDataHolder","../themes/conversion/CssParser"],function(a,t,e,r,o,s,n,i,l,u,c){var p={};return p.provideEditorJson=function(a,t){function p(){function a(){return e(o.parseMetadataXML(i,h,t),function(){return t.processMetadataFile&&t.processMetadataFile(i,h)})}var s,i,l;v&&v.files&&v.files.forEach(function(a){"report.xml"==a.name?s=s||a:"graphicReport.xml"==a.name?s=a:"metadata.xml"==a.name?i=a:"theme.css.txt"==a.name?l=a:"graphicLayout.txt"==a.name&&(g=JSON.parse(a.data))});var p=t.log||function(a){};if(!g)return l&&(h.theme=c.fromCssText(l.data)),s?e(!i||a(),function(){return r.parseReportXML({isGraphicReport:m,parsers:n,file:s,templateJson:h,variableProvider:f,tableDefaultStyles:d,processFileName:b,putImageData:function(a,t){a=b(a),u.putImageData(a,t||D[a])},log:p,queryMetaDataFunc:function(a){return t.queryMetaDataFunc?t.queryMetaDataFunc(a,h):f.statefulNameToCalculator("n/DC."+a)}})}):void 0}t=t||{};var m=a.isGraphicReport,f=t.variableProvider||new i,d=t.tableDefaultStyles||new l,h={thumbnailUrl:a.portalJson.thumbnailUrl,mainCalculatorName:null,documentOptions:{},metadata:{calculatorsHash:{},scriptsHash:{},mapImageInfosHash:{},infographicCalculatorsHash:{}},missingDataInfo:{missingVariables:[]}};m?h.sectionsTables=[]:h.sections=[];var g,v=a.portalJson,D={},b=function(a){return a?a.toLowerCase():""};return e(n.initialize(),function(){return e(s.collectImageResources(v,D,b),function(){for(var t in D)u.putImageData(t,D[t]);return e(p(),function(){delete h.metadata,a.templateJson=g||h})})})},p});