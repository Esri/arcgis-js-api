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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/when","./portalToEditorUtils/layout/LayoutParser","./portalToEditorUtils/metadata/MetadataParser","./portalToEditorUtils/ImageCollector","./portalToEditorUtils/parsers/Parsers","./portalToEditorUtils/variables/PlayerVariableProvider","../supportClasses/DefaultStyles","../supportClasses/images/ImageDataHolder","../themes/conversion/CssParser","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/utils/DelayUtil"],(function(e,t,r,o,a,s,n,i,l,c,u){var p={};return p.provideEditorJson=function(p,f){f=f||{};var m=p.isGraphicReport;f.variableProvider=f.variableProvider||new s,f.tableDefaultStyles=f.tableDefaultStyles||new n;var d={documentOptions:{},metadata:{parseErrors:[],mapImageInfosHash:{},comparisonCalculatorsHash:{},locatorCalculatorsHash:{}},theme:null};m?d.sectionsTables=[]:d.sections=[];var P=p.portalJson,h={};f.getImageData=function(e){return h[g(e)]};var g=function(e){return e?e.toLowerCase():""},v=f.log||function(e){};return e(a.initialize(),(function(){return e(o.collectImageResources(P,h,g),(function(){for(var o in h)i.putImageData(o,h[o]);return e(function(){if(P&&P.files&&P.files){var o=f.filesToProcess||["theme.css.txt","metadata.xml","report.xml"],s={"theme.css.txt":function(e){return p(e,"theme.css.txt",(function(){d.theme=l.fromCssText(e.data,f)}))},"metadata.xml":function(e){return p(e,"metadata.xml",(function(){return r.parseMetadataXML(e,d,f)}))},"report.xml":function(e){return p(e,"report.xml",(function(){return t.parseReportXML({isGraphicReport:m,parsers:a,file:e,templateJson:d,variableProvider:f.variableProvider,useVariableProviderToCollectOnly:f.useVariableProviderToCollectOnly,tableDefaultStyles:f.tableDefaultStyles,processFileName:g,putImageData:function(e,t){return e=g(e),t=t||h[e],i.putImageData(e,t),t},log:v,queryMetaDataFunc:function(e){return f.queryMetaDataFunc&&f.queryMetaDataFunc(e,d)},postProcessChartJson:function(e,t){f.postProcessChartJson&&f.postProcessChartJson(d,e,t)},postProcessMapJson:function(e,t){f.postProcessMapJson&&f.postProcessMapJson(d,e,t)},postProcessInfographicJson:function(e,t){f.postProcessInfographicJson&&f.postProcessInfographicJson(d,e,t)},postProcessTableInSection:function(e,t){f.postProcessTableInSection&&f.postProcessTableInSection(d,e,t)}})}))},generic:function(e,t){return p(e,t)}},n=new c;return o.forEach((function(t){var r=P.files.filter((function(e){return e.name===t}))[0],o=r&&(s[t]||s.generic);o&&n.add((function(){return e(u.delay(50),(function(){return o(r,t)})).otherwise((function(e){d.metadata.parseErrors.push(e),console.log(e)}))}))})),n.getPromise()}function p(t,r,o){return e(f.preProcessFile&&f.preProcessFile(t,r,d),(function(a){if(!1!==a)return e(o&&o(),(function(){return f.postProcessFile&&f.postProcessFile(t,r,d)}))}))}}(),(function(){d.metadata.parseErrors.length||(p.templateJson=d),delete d.metadata}))}))}))},p}));