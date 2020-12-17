// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./parsers/DataXMLParser","./EnrichAreasTask","../areas/AnalysisAreaJsonUtil","esri/dijit/geoenrichment/utils/ArrayUtil","esri/dijit/geoenrichment/utils/CacheUtil","esri/dijit/geoenrichment/ReportPlayer/config","esri/dijit/geoenrichment/ReportPlayer/_devConfig"],(function(e,r,t,n,a,o,i,s,c,u,l,h){var p={_getCache:function(){return u.get("CreateReportResultCache")},_buildKey:function(e){return[e.countryID,e.hierarchy,JSON.stringify(s.areasToJson(e.analysisAreas,{excludeInfoTemplate:!0})),e.report.reportID,e.report.portalUrl,e.report.modified].join("_")},getCopy:function(e){var t=this._buildKey(e),n=this._getCache()[t];return n&&r.clone(n)},copyAndPut:function(e,t){var n=this._buildKey(e);this._getCache()[n]=t&&r.clone(t)},getResults:function(){var e=[];for(var r in this._getCache())e.push(this._getCache()[r]);return e}},f={execute:function(e){var s=e.cacheResult&&p.getCopy(e);if(s)return a(s);var u,f=c.splitArrayToBunches(e.analysisAreas,10);return t(f.map((function(t){function s(){var s=r.mixin({},e,{analysisAreas:t});return s.getAttributes=function(r){return e.attachmentsStore?!e.attachmentsStore.supportsMultipleAreas&&u?u:(e.attachmentsStore.supportsMultipleAreas&&e.attachmentsStore.setCurrentAnalysisAreaIndex(e.analysisAreas.indexOf(r)),a(e.attachmentsStore.getAttributes(),(function(e){return u=u||e,e}))):null},(new i).createReport(s).then((function(e){var r=e&&e.taskID;e=e&&e.result;try{var t;if(h.emulateErrors.createReportError&&(e={error:{message:"Error test: something crashed on the server!"}}),e&&"object"==typeof e&&(t=e.error),!t&&"string"==typeof e&&-1!==e.indexOf("{"))try{var a=JSON.parse(e);t=a&&a.error}catch(e){}if(t){if(!l.runReportTask.ignoreErrors)return(new n).reject(t);e=[]}var i=o.parse(e);return{taskID:r,areaData:i.areaData,reportInfo:i.reportInfo,originalXML:e,error:t}}catch(e){return(new n).reject(e)}}))}return a(s(),(function(e){return(!e||e.error)&&l.runReportTask.secondAttempt?s():e}),(function(e){return l.runReportTask.secondAttempt?s():(new n).reject(e)}))}))).then((function(r){var t={taskIDs:[],areaData:[],reportInfo:null,originalXMLs:[],errors:[]};return r.forEach((function(e){t.taskIDs.push(e.taskID),t.originalXMLs.push(e.originalXML),e.error&&t.errors.push(e.error),t.areaData=t.areaData.concat(e.areaData),t.reportInfo=e.reportInfo})),e.cacheResult&&!t.errors.length&&p.copyAndPut(e,t),t}))}},g=e(null,{execute:function(e){return console.log("Creating a new report..."),f.execute(e)}});return g.CreateReportResultCache=p,g}));