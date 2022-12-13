// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/ReportPlayer/config","./portalToEditorUtils/layout/LayoutParser","./portalToEditorUtils/metadata/MetadataParser","./portalToEditorUtils/ImageCollector","./portalToEditorUtils/parsers/Parsers","./portalToEditorUtils/variables/PlayerVariableProvider","../supportClasses/DefaultStyles","../supportClasses/images/ImageDataHolder","../themes/conversion/CssParser","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/utils/DelayUtil"],(function(e,t,r,o,a,s,n,i,l,c,u,p){var f={};return f.provideEditorJson=function(f,m){(m=m||{}).variableProvider=m.variableProvider||new n,m.tableDefaultStyles=m.tableDefaultStyles||new i;var d={documentOptions:{},metadata:{specialTradeAreaCalculatorName:null,parseErrors:[],mapImageInfosHash:{},comparisonCalculatorsHash:{},locatorCalculatorsHash:{}},theme:null},P=f.portalJson,g={};m.getImageData=function(e){return g[h(e)]};var h=function(e){return e?e.toLowerCase():""},v=m.log||function(e){};return e(s.initialize(),(function(){return e(a.collectImageResources(P,g,h),(function(){for(var a in g)l.putImageData(a,g[a]);return e(function(){if(P&&P.files&&P.files){var a=m.filesToProcess||["theme.css.txt","metadata.xml","report.xml"],n={"theme.css.txt":function(e){return y(e,"theme.css.txt",(function(){d.theme=c.fromCssText(e.data,m)}))},"metadata.xml":function(e){return y(e,"metadata.xml",(function(){return o.parseMetadataXML(e,d,m)}))},"report.xml":function(e){return y(e,"report.xml",(function(){return r.parseReportXML({report:f,parsers:s,file:e,templateJson:d,variableProvider:m.variableProvider,useVariableProviderToCollectOnly:m.useVariableProviderToCollectOnly,tableDefaultStyles:m.tableDefaultStyles,processFileName:h,putImageData:function(e,t){return e=h(e),t=t||g[e],l.putImageData(e,t),t},log:v,queryMetaDataFunc:function(e){return m.queryMetaDataFunc&&m.queryMetaDataFunc(e,d)},postProcessChartJson:function(e,t){m.postProcessChartJson&&m.postProcessChartJson(d,e,t)},postProcessMapJson:function(e,t){m.postProcessMapJson&&m.postProcessMapJson(d,e,t)},postProcessInfographicJson:function(e,t){m.postProcessInfographicJson&&m.postProcessInfographicJson(d,e,t)},postProcessTableInSection:function(e,t){m.postProcessTableInSection&&m.postProcessTableInSection(d,e,t)}})}))},generic:function(e,t){return y(e,t)}},i=new u;return a.forEach((function(r){var o=P.files.filter((function(e){return e.name===r}))[0],a=o&&(n[r]||n.generic);a&&i.add((function(){return e(t.isPlayerOnServer?e():p.delay(50)).then((function(){return a(o,r)})).otherwise((function(e){d.metadata.parseErrors.push(e),console.log(e)}))}))})),i.getPromise()}function y(t,r,o){return e(m.preProcessFile&&m.preProcessFile(t,r,d),(function(a){if(!1!==a)return e(o&&o(),(function(){return m.postProcessFile&&m.postProcessFile(t,r,d)}))}))}}(),(function(){d.metadata.parseErrors.length||(f.templateJson=d)}))}))}))},f}));