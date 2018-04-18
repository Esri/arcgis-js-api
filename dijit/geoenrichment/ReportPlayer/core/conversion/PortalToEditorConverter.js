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

define(["dojo/_base/declare","dojo/promise/all","dojo/when","./portalToEditorUtils/LayoutParser","./portalToEditorUtils/MetadataParser","./portalToEditorUtils/ImageCollector","./portalToEditorUtils/parsers/Parsers","./portalToEditorUtils/variables/DummyVariableProvider","../supportClasses/DefaultStyles","../supportClasses/images/ImageDataHolder","../themes/conversion/CssParser","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/utils/DelayUtil"],function(e,t,r,o,a,n,s,i,l,u,c,p,f){var m={};return m.provideEditorJson=function(e,t){function m(){function e(e,o,a){return r(t.preProcessFile&&t.preProcessFile(e,o,v),function(n){if(!1!==n)return r(a&&a(),function(){return t.postProcessFile&&t.postProcessFile(e,o,v)})})}if(P&&P.files&&P.files){var n=t.filesToProcess||["theme.css.txt","metadata.xml","report.xml"],i={"theme.css.txt":function(r){return e(r,"theme.css.txt",function(){v.theme=c.fromCssText(r.data,t)})},"metadata.xml":function(r){return e(r,"metadata.xml",function(){return a.parseMetadataXML(r,v,t)})},"report.xml":function(r){return e(r,"report.xml",function(){return o.parseReportXML({isGraphicReport:d,parsers:s,file:r,templateJson:v,variableProvider:g,tableDefaultStyles:h,processFileName:y,putImageData:function(e,t){e=y(e),u.putImageData(e,t||b[e])},log:D,queryMetaDataFunc:function(e){return t.queryMetaDataFunc&&t.queryMetaDataFunc(e,v)},postProcessTableInSection:function(e,r){t.postProcessTableInSection&&t.postProcessTableInSection(v,e,r)}})})},generic:function(t,r){return e(t,r)}},l=new p;return n.forEach(function(e){var o=P.files.filter(function(t){return t.name===e})[0],a=o&&(i[e]||i.generic);a&&l.add(function(){return r(f.delay(50),function(){return a(o,e)}).otherwise(function(e){t.parseErrors.push(e),console.log(e)})})}),l.getPromise()}}t=t||{};var d=e.isGraphicReport,g=t.variableProvider=t.variableProvider||new i,h=t.tableDefaultStyles||new l;t.parseErrors=[];var v={documentOptions:{},metadata:{mapImageInfosHash:{},comparisonCalculatorsHash:{}},theme:null};d?v.sectionsTables=[]:v.sections=[];var P=e.portalJson,b={},y=function(e){return e?e.toLowerCase():""},D=t.log||function(e){};return r(s.initialize(),function(){return r(n.collectImageResources(P,b,y),function(){for(var o in b)u.putImageData(o,b[o]);return r(m(),function(){delete v.metadata,t.parseErrors.length||(e.templateJson=v)})})})},m});