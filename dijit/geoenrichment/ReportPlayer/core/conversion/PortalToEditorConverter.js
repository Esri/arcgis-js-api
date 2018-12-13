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

define(["dojo/when","./portalToEditorUtils/layout/LayoutParser","./portalToEditorUtils/metadata/MetadataParser","./portalToEditorUtils/ImageCollector","./portalToEditorUtils/parsers/Parsers","../supportClasses/DefaultStyles","../supportClasses/images/ImageDataHolder","../themes/conversion/CssParser","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/utils/DelayUtil"],function(e,t,r,o,s,a,n,i,c,u){var l={};return l.provideEditorJson=function(l,p){function f(){function o(t,r,o){return e(p.preProcessFile&&p.preProcessFile(t,r,P),function(s){if(!1!==s)return e(o&&o(),function(){return p.postProcessFile&&p.postProcessFile(t,r,P)})})}if(g&&g.files&&g.files){var a=p.filesToProcess||["theme.css.txt","metadata.xml","report.xml"],l={"theme.css.txt":function(e){return o(e,"theme.css.txt",function(){P.theme=i.fromCssText(e.data,p)})},"metadata.xml":function(e){return o(e,"metadata.xml",function(){return r.parseMetadataXML(e,P,p)})},"report.xml":function(e){return o(e,"report.xml",function(){return t.parseReportXML({isGraphicReport:m,parsers:s,file:e,templateJson:P,variableProvider:p.variableProvider,userVariableProviderToCollectOnly:p.userVariableProviderToCollectOnly,tableDefaultStyles:d,processFileName:I,putImageData:function(e,t){return e=I(e),t=t||h[e],n.putImageData(e,t),t},log:v,queryMetaDataFunc:function(e){return p.queryMetaDataFunc&&p.queryMetaDataFunc(e,P)},postProcessChartJson:function(e,t){p.postProcessChartJson&&p.postProcessChartJson(P,e,t)},postProcessImageJson:function(e,t){p.postProcessImageJson&&p.postProcessImageJson(P,e,t)},postProcessInfographicJson:function(e,t){p.postProcessInfographicJson&&p.postProcessInfographicJson(P,e,t)},postProcessTableInSection:function(e,t){p.postProcessTableInSection&&p.postProcessTableInSection(P,e,t)}})})},generic:function(e,t){return o(e,t)}},f=new c;return a.forEach(function(t){var r=g.files.filter(function(e){return e.name===t})[0],o=r&&(l[t]||l.generic);o&&f.add(function(){return e(u.delay(50),function(){return o(r,t)}).otherwise(function(e){P.metadata.parseErrors.push(e),console.log(e)})})}),f.getPromise()}}p=p||{};var m=l.isGraphicReport,d=p.tableDefaultStyles||new a,P={documentOptions:{},metadata:{parseErrors:[],mapImageInfosHash:{},comparisonCalculatorsHash:{},locatorCalculatorsHash:{}},theme:null};m?P.sectionsTables=[]:P.sections=[];var g=l.portalJson,h={};p.getImageData=function(e){return h[I(e)]};var I=function(e){return e?e.toLowerCase():""},v=p.log||function(e){};return e(s.initialize(),function(){return e(o.collectImageResources(g,h,I),function(){for(var t in h)n.putImageData(t,h[t]);return e(f(),function(){P.metadata.parseErrors.length||(l.templateJson=P),delete P.metadata})})})},l});