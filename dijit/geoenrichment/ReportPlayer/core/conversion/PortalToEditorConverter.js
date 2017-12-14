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

define(["dojo/_base/declare","dojo/promise/all","dojo/when","./portalToEditorUtils/LayoutParser","./portalToEditorUtils/MetadataParser","./portalToEditorUtils/ImageCollector","./portalToEditorUtils/parsers/Parsers","./portalToEditorUtils/variables/DummyVariableProvider","../supportClasses/DefaultStyles","../supportClasses/images/ImageDataHolder","../themes/conversion/CssParser","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/utils/DelayUtil"],function(e,t,r,a,o,n,s,i,u,l,c,p,f){var m={};return m.provideEditorJson=function(e,t){function m(){function e(e,a,o){return r(t.preProcessFile&&t.preProcessFile(e,a,g),function(n){return n!==!1?r(o&&o(),function(){return t.postProcessFile&&t.postProcessFile(e,a,g)}):void 0})}if(P&&P.files&&P.files){var n=t.filesToProcess||["theme.css.txt","metadata.xml","report.xml"],i={"theme.css.txt":function(r){return e(r,"theme.css.txt",function(){g.theme=c.fromCssText(r.data,t)})},"metadata.xml":function(r){return e(r,"metadata.xml",function(){return o.parseMetadataXML(r,g,t)})},"report.xml":function(r){return e(r,"report.xml",function(){return a.parseReportXML({isGraphicReport:d,parsers:s,file:r,templateJson:g,variableProvider:v,tableDefaultStyles:h,processFileName:D,putImageData:function(e,t){e=D(e),l.putImageData(e,t||y[e])},log:x,queryMetaDataFunc:function(e){return t.queryMetaDataFunc&&t.queryMetaDataFunc(e,g)}})})},generic:function(t,r){return e(t,r)}},u=new p;return n.forEach(function(e){var a=P.files.filter(function(t){return t.name===e})[0],o=a&&(i[e]||i.generic);o&&u.add(function(){return r(f.delay(50),function(){return o(a,e)}).otherwise(function(e){t.parseErrors.push(e)})})}),u.getPromise()}}t=t||{};var d=e.isGraphicReport,v=t.variableProvider=t.variableProvider||new i,h=t.tableDefaultStyles||new u;t.parseErrors=[];var g={documentOptions:{},metadata:{mapImageInfosHash:{},comparisonCalculatorsHash:{}},theme:{}};d?g.sectionsTables=[]:g.sections=[];var P=e.portalJson,y={},D=function(e){return e?e.toLowerCase():""},x=t.log||function(e){};return r(s.initialize(),function(){return r(n.collectImageResources(P,y,D),function(){for(var a in y)l.putImageData(a,y[a]);return r(m(),function(){delete g.metadata,t.parseErrors.length||(e.templateJson=g)})})})},m});