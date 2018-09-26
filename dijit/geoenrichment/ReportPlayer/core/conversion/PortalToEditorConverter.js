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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/when","./portalToEditorUtils/layout/LayoutParser","./portalToEditorUtils/metadata/MetadataParser","./portalToEditorUtils/ImageCollector","./portalToEditorUtils/parsers/Parsers","../supportClasses/DefaultStyles","../supportClasses/images/ImageDataHolder","../themes/conversion/CssParser","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/utils/DelayUtil"],function(e,t,r,o,s,a,n,i,c,u){var l={};return l.provideEditorJson=function(l,p){function f(){function o(t,r,o){return e(p.preProcessFile&&p.preProcessFile(t,r,h),function(s){if(!1!==s)return e(o&&o(),function(){return p.postProcessFile&&p.postProcessFile(t,r,h)})})}if(P&&P.files&&P.files){var a=p.filesToProcess||["theme.css.txt","metadata.xml","report.xml"],l={"theme.css.txt":function(e){return o(e,"theme.css.txt",function(){h.theme=i.fromCssText(e.data,p)})},"metadata.xml":function(e){return o(e,"metadata.xml",function(){return r.parseMetadataXML(e,h,p)})},"report.xml":function(e){return o(e,"report.xml",function(){return t.parseReportXML({isGraphicReport:m,parsers:s,file:e,templateJson:h,variableProvider:d,tableDefaultStyles:g,processFileName:v,putImageData:function(e,t){e=v(e),n.putImageData(e,t||I[e])},log:y,queryMetaDataFunc:function(e){return p.queryMetaDataFunc&&p.queryMetaDataFunc(e,h)},postProcessTableInSection:function(e,t){p.postProcessTableInSection&&p.postProcessTableInSection(h,e,t)},postProcessImageJson:function(e,t){p.postProcessImageJson&&p.postProcessImageJson(h,e,t)},postProcessInfographicJson:function(e,t){p.postProcessInfographicJson&&p.postProcessInfographicJson(h,e,t)}})})},generic:function(e,t){return o(e,t)}},f=new c;return a.forEach(function(t){var r=P.files.filter(function(e){return e.name===t})[0],o=r&&(l[t]||l.generic);o&&f.add(function(){return e(u.delay(50),function(){return o(r,t)}).otherwise(function(e){h.metadata.parseErrors.push(e),console.log(e)})})}),f.getPromise()}}p=p||{};var m=l.isGraphicReport,d=p.variableProvider,g=p.tableDefaultStyles||new a,h={documentOptions:{},metadata:{parseErrors:[],mapImageInfosHash:{},comparisonCalculatorsHash:{},locatorCalculatorsHash:{}},theme:null};m?h.sectionsTables=[]:h.sections=[];var P=l.portalJson,I={},v=function(e){return e?e.toLowerCase():""},y=p.log||function(e){};return e(s.initialize(),function(){return e(o.collectImageResources(P,I,v),function(){for(var t in I)n.putImageData(t,I[t]);return e(f(),function(){h.metadata.parseErrors.length||(l.templateJson=h),delete h.metadata})})})},l});