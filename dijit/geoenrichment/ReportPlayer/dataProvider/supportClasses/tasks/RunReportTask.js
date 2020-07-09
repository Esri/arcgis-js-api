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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./parsers/DataXMLParser","./EnrichAreasTask","../areas/AnalysisAreaJsonUtil","esri/dijit/geoenrichment/utils/ArrayUtil","esri/dijit/geoenrichment/ReportPlayer/config","esri/dijit/geoenrichment/ReportPlayer/_devConfig"],(function(r,e,t,n,a,o,s,i,c,u,l){var p={_cache:{},_buildKey:function(r){return[r.countryID,r.hierarchy,JSON.stringify(i.areasToJson(r.analysisAreas,{excludeInfoTemplate:!0})),r.report.reportID,r.report.portalUrl,r.report.modified].join("_")},getCopy:function(r){var t=this._buildKey(r),n=this._cache[t];return n&&e.clone(n)},copyAndPut:function(r,t){var n=this._buildKey(r);this._cache[n]=t&&e.clone(t)},getResults:function(){var r=[];for(var e in this._cache)r.push(this._cache[e]);return r}},h={execute:function(r){var i=r.cacheResult&&p.getCopy(r);if(i)return a(i);var h,f=c.splitArrayToBunches(r.analysisAreas,10);return t(f.map((function(t){function i(){var i=e.mixin({},r,{analysisAreas:t});return i.getAttributes=function(e){return r.attachmentsStore?!r.attachmentsStore.supportsMultipleAreas&&h?h:(r.attachmentsStore.supportsMultipleAreas&&r.attachmentsStore.setCurrentAnalysisAreaIndex(r.analysisAreas.indexOf(e)),a(r.attachmentsStore.getAttributes(),(function(r){return h=h||r,r}))):null},(new s).createReport(i).then((function(r){var e=r&&r.taskID;r=r&&r.result;try{var t;if(l.emulateErrors.createReportError&&(r={error:{message:"Error test: something crashed on the server!"}}),r&&"object"==typeof r&&(t=r.error),!t&&"string"==typeof r&&-1!==r.indexOf("{"))try{var a=JSON.parse(r);t=a&&a.error}catch(r){}if(t){if(!u.runReportTask.ignoreErrors)return(new n).reject(t);r=[]}var s=o.parse(r);return{taskID:e,areaData:s.areaData,reportInfo:s.reportInfo,originalXML:r,error:t}}catch(r){return(new n).reject(r)}}))}return a(i(),(function(r){return(!r||r.error)&&u.runReportTask.secondAttempt?i():r}),(function(r){return u.runReportTask.secondAttempt?i():(new n).reject(r)}))}))).then((function(e){var t={taskIDs:[],areaData:[],reportInfo:null,originalXMLs:[],errors:[]};return e.forEach((function(r){t.taskIDs.push(r.taskID),t.originalXMLs.push(r.originalXML),r.error&&t.errors.push(r.error),t.areaData=t.areaData.concat(r.areaData),t.reportInfo=r.reportInfo})),r.cacheResult&&!t.errors.length&&p.copyAndPut(r,t),t}))}},f=r(null,{execute:function(r){return console.log("Creating a new report..."),h.execute(r)}});return f.CreateReportResultCache=p,f}));