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

define(["dojo/_base/declare","dojo/promise/all","dojo/when","./portalToEditorUtils/layout/LayoutParser","./portalToEditorUtils/metadata/MetadataParser","./portalToEditorUtils/ImageCollector","./portalToEditorUtils/parsers/Parsers","../supportClasses/DefaultStyles","../supportClasses/images/ImageDataHolder","../themes/conversion/CssParser","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/utils/DelayUtil"],function(e,t,r,o,s,a,n,i,c,u,l,p){var f={};return f.provideEditorJson=function(e,t){function f(){function e(e,o,s){return r(t.preProcessFile&&t.preProcessFile(e,o,h),function(a){if(!1!==a)return r(s&&s(),function(){return t.postProcessFile&&t.postProcessFile(e,o,h)})})}if(P&&P.files&&P.files){var a=t.filesToProcess||["theme.css.txt","metadata.xml","report.xml"],i={"theme.css.txt":function(r){return e(r,"theme.css.txt",function(){h.theme=u.fromCssText(r.data,t)})},"metadata.xml":function(r){return e(r,"metadata.xml",function(){return s.parseMetadataXML(r,h,t)})},"report.xml":function(r){return e(r,"report.xml",function(){return o.parseReportXML({isGraphicReport:m,parsers:n,file:r,templateJson:h,variableProvider:d,tableDefaultStyles:g,processFileName:v,putImageData:function(e,t){e=v(e),c.putImageData(e,t||I[e])},log:y,queryMetaDataFunc:function(e){return t.queryMetaDataFunc&&t.queryMetaDataFunc(e,h)},postProcessTableInSection:function(e,r){t.postProcessTableInSection&&t.postProcessTableInSection(h,e,r)},postProcessImageJson:function(e,r){t.postProcessImageJson&&t.postProcessImageJson(h,e,r)},postProcessInfographicJson:function(e,r){t.postProcessInfographicJson&&t.postProcessInfographicJson(h,e,r)}})})},generic:function(t,r){return e(t,r)}},f=new l;return a.forEach(function(e){var t=P.files.filter(function(t){return t.name===e})[0],o=t&&(i[e]||i.generic);o&&f.add(function(){return r(p.delay(50),function(){return o(t,e)}).otherwise(function(e){h.metadata.parseErrors.push(e),console.log(e)})})}),f.getPromise()}}t=t||{};var m=e.isGraphicReport,d=t.variableProvider,g=t.tableDefaultStyles||new i,h={documentOptions:{},metadata:{parseErrors:[],mapImageInfosHash:{},comparisonCalculatorsHash:{},locatorCalculatorsHash:{}},theme:null};m?h.sectionsTables=[]:h.sections=[];var P=e.portalJson,I={},v=function(e){return e?e.toLowerCase():""},y=t.log||function(e){};return r(n.initialize(),function(){return r(a.collectImageResources(P,I,v),function(){for(var t in I)c.putImageData(t,I[t]);return r(f(),function(){h.metadata.parseErrors.length||(e.templateJson=h),delete h.metadata})})})},f});