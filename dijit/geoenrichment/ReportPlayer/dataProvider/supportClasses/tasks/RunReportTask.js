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

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./parsers/DataXMLParser","./EnrichAreasTask","../areas/AnalysisAreaJsonUtil","esri/dijit/geoenrichment/utils/ArrayUtil","esri/dijit/geoenrichment/ReportPlayer/config","esri/dijit/geoenrichment/ReportPlayer/_devConfig"],(function(e,r,t,n,a,s,o,i,c,u,l){var h={_cache:{},_buildKey:function(e){return[e.countryID,e.hierarchy,JSON.stringify(i.areasToJson(e.analysisAreas,{excludeInfoTemplate:!0})),e.report.reportID,e.report.portalUrl,e.report.modified].join("_")},getCopy:function(e){var t=this._buildKey(e),n=this._cache[t];return n&&r.clone(n)},copyAndPut:function(e,t){var n=this._buildKey(e);this._cache[n]=t&&r.clone(t)},getResults:function(){var e=[];for(var r in this._cache)e.push(this._cache[r]);return e}},p={execute:function(e){var i=e.cacheResult&&h.getCopy(e);if(i)return a(i);var p,f=c.splitArrayToBunches(e.analysisAreas,10);return t(f.map((function(t){function i(){var i=r.mixin({},e,{analysisAreas:t});return i.getAttributes=function(r){return e.attachmentsStore?!e.attachmentsStore.supportsMultipleAreas&&p?p:(e.attachmentsStore.supportsMultipleAreas&&e.attachmentsStore.setCurrentAnalysisAreaIndex(e.analysisAreas.indexOf(r)),a(e.attachmentsStore.getAttributes(),(function(e){return p=p||e,e}))):null},(new o).createReport(i).then((function(e){var r=e&&e.taskID;e=e&&e.result;try{var t;if(l.emulateErrors.createReportError&&(e={error:{message:"Error test: something crashed on the server!"}}),e&&"object"==typeof e&&(t=e.error),!t&&"string"==typeof e&&-1!==e.indexOf("{"))try{var a=JSON.parse(e);t=a&&a.error}catch(e){}if(t){if(!u.runReportTask.ignoreErrors)return(new n).reject(t);e=[]}return{taskID:r,areaData:s.parse(e),originalXML:e,error:t}}catch(e){return(new n).reject(e)}}))}return a(i(),(function(e){return(!e||e.error)&&u.runReportTask.secondAttempt?i():e}),(function(e){return u.runReportTask.secondAttempt?i():(new n).reject(e)}))}))).then((function(r){var t={taskIDs:[],areaData:[],originalXMLs:[],errors:[]};return r.forEach((function(e){t.taskIDs.push(e.taskID),t.originalXMLs.push(e.originalXML),e.error&&t.errors.push(e.error),t.areaData=t.areaData.concat(e.areaData)})),e.cacheResult&&!t.errors.length&&h.copyAndPut(e,t),t}))}},f=e(null,{execute:function(e){return console.log("Creating a new report..."),p.execute(e)}});return f.CreateReportResultCache=h,f}));