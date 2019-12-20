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

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./parsers/DataXMLParser","./EnrichAreasTask","../areas/AnalysisAreaJsonUtil","esri/dijit/geoenrichment/utils/ArrayUtil","esri/dijit/geoenrichment/ReportPlayer/config","esri/dijit/geoenrichment/ReportPlayer/_devConfig"],function(r,e,t,n,a,o,i,s,c,u,h){var l={_cache:{},_buildKey:function(r){return[r.countryID,r.hierarchy,JSON.stringify(s.areasToJson(r.analysisAreas,{excludeInfoTemplate:!0})),r.report.reportID,r.report.portalUrl,r.report.modified].join("_")},getCopy:function(r){var t=this._buildKey(r),n=this._cache[t];return n&&e.clone(n)},copyAndPut:function(r,t){var n=this._buildKey(r);this._cache[n]=t&&e.clone(t)},getResults:function(){var r=[];for(var e in this._cache)r.push(this._cache[e]);return r}},p={execute:function(r){var s=r.cacheResult&&l.getCopy(r);if(s)return a(s);var p=c.splitArrayToBunches(r.analysisAreas,5);return t(p.map(function(t){function s(){var a=e.mixin({},r,{analysisAreas:t});return(new i).createReport(a).then(function(r){var e=r&&r.taskID;r=r&&r.result;try{h.emulateErrors.createReportError&&(r={error:{message:"Error test: something crashed on the server!"}});var t;if(r&&"object"==typeof r&&(t=r.error),!t&&"string"==typeof r&&-1!==r.indexOf("{"))try{var a=JSON.parse(r);t=a&&a.error}catch(r){}if(t){if(!u.runReportTask.ignoreErrors)return(new n).reject(t);r=[]}return{taskID:e,areaData:o.parse(r),originalXML:r,error:t}}catch(r){return(new n).reject(r)}})}return a(s(),function(r){return(!r||r.error)&&u.runReportTask.secondAttempt?s():r},function(r){return u.runReportTask.secondAttempt?s():(new n).reject(r)})})).then(function(e){var t={taskIDs:[],areaData:[],originalXMLs:[],errors:[]};return e.forEach(function(r){t.taskIDs.push(r.taskID),t.originalXMLs.push(r.originalXML),r.error&&t.errors.push(r.error),t.areaData=t.areaData.concat(r.areaData)}),r.cacheResult&&!t.errors.length&&l.copyAndPut(r,t),t})}},f=r(null,{execute:function(r){return console.log("Creating a new report..."),p.execute(r)}});return f.CreateReportResultCache=l,f});