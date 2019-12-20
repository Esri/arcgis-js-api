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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/when","./portalToEditorUtils/layout/LayoutParser","./portalToEditorUtils/metadata/MetadataParser","./portalToEditorUtils/ImageCollector","./portalToEditorUtils/parsers/Parsers","./portalToEditorUtils/variables/PlayerVariableProvider","../supportClasses/DefaultStyles","../supportClasses/images/ImageDataHolder","../themes/conversion/CssParser","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/utils/DelayUtil"],function(e,t,r,o,a,s,n,i,l,c,u){var p={};return p.provideEditorJson=function(p,f){function m(){function o(t,r,o){return e(f.preProcessFile&&f.preProcessFile(t,r,P),function(a){if(!1!==a)return e(o&&o(),function(){return f.postProcessFile&&f.postProcessFile(t,r,P)})})}if(h&&h.files&&h.files){var s=f.filesToProcess||["theme.css.txt","metadata.xml","report.xml"],n={"theme.css.txt":function(e){return o(e,"theme.css.txt",function(){P.theme=l.fromCssText(e.data,f)})},"metadata.xml":function(e){return o(e,"metadata.xml",function(){return r.parseMetadataXML(e,P,f)})},"report.xml":function(e){return o(e,"report.xml",function(){return t.parseReportXML({isGraphicReport:d,parsers:a,file:e,templateJson:P,variableProvider:f.variableProvider,useVariableProviderToCollectOnly:f.useVariableProviderToCollectOnly,tableDefaultStyles:f.tableDefaultStyles,processFileName:v,putImageData:function(e,t){return e=v(e),t=t||g[e],i.putImageData(e,t),t},log:y,queryMetaDataFunc:function(e){return f.queryMetaDataFunc&&f.queryMetaDataFunc(e,P)},postProcessChartJson:function(e,t){f.postProcessChartJson&&f.postProcessChartJson(P,e,t)},postProcessMapJson:function(e,t){f.postProcessMapJson&&f.postProcessMapJson(P,e,t)},postProcessInfographicJson:function(e,t){f.postProcessInfographicJson&&f.postProcessInfographicJson(P,e,t)},postProcessTableInSection:function(e,t){f.postProcessTableInSection&&f.postProcessTableInSection(P,e,t)}})})},generic:function(e,t){return o(e,t)}},p=new c;return s.forEach(function(t){var r=h.files.filter(function(e){return e.name===t})[0],o=r&&(n[t]||n.generic);o&&p.add(function(){return e(u.delay(50),function(){return o(r,t)}).otherwise(function(e){P.metadata.parseErrors.push(e),console.log(e)})})}),p.getPromise()}}f=f||{};var d=p.isGraphicReport;f.variableProvider=f.variableProvider||new s,f.tableDefaultStyles=f.tableDefaultStyles||new n;var P={documentOptions:{},metadata:{parseErrors:[],mapImageInfosHash:{},comparisonCalculatorsHash:{},locatorCalculatorsHash:{}},theme:null};d?P.sectionsTables=[]:P.sections=[];var h=p.portalJson,g={};f.getImageData=function(e){return g[v(e)]};var v=function(e){return e?e.toLowerCase():""},y=f.log||function(e){};return e(a.initialize(),function(){return e(o.collectImageResources(h,g,v),function(){for(var t in g)i.putImageData(t,g[t]);return e(m(),function(){P.metadata.parseErrors.length||(p.templateJson=P),delete P.metadata})})})},p});