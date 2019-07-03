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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./parsers/DataXMLParser","./EnrichAreasTask","../AnalysisAreaJsonUtil","esri/dijit/geoenrichment/ReportPlayer/config","esri/dijit/geoenrichment/ReportPlayer/_devConfig"],function(e,r,t,n,o,a,i,c,s){var u={_cache:{},_buildKey:function(e){return[e.countryID,e.hierarchy,JSON.stringify(i.areasToJson(e.analysisAreas,{excludeInfoTemplate:!0})),e.report.reportID,e.report.portalUrl,e.report.modified].join("_")},getCopy:function(e){var t=this._buildKey(e),n=this._cache[t];return n&&r.clone(n)},copyAndPut:function(e,t){var n=this._buildKey(e);this._cache[n]=t&&r.clone(t)},getResults:function(){var e=[];for(var r in this._cache)e.push(this._cache[r]);return e}},h={execute:function(e){function r(){return(new a).createReport(e).then(function(r){var n=r&&r.taskID;r=r&&r.result;try{s.emulateErrors.createReportError&&(r={error:{message:"Error test: something crashed on the server!"}});var a;if(r&&"object"==typeof r&&(a=r.error),!a&&"string"==typeof r&&-1!==r.indexOf("{"))try{var i=JSON.parse(r);a=i&&i.error}catch(e){}if(a){if(!c.runReportTask.ignoreErrors)return(new t).reject(a);r=[]}var h={taskID:n,areaData:o.parse(r),originalXML:r,error:a};return e.cacheResult&&!a&&u.copyAndPut(e,h),h}catch(e){return(new t).reject(e)}})}var i=e.cacheResult&&u.getCopy(e);return i?n(i):n(r(),function(e){return(!e||e.error)&&c.runReportTask.secondAttempt?r():e},function(e){return c.runReportTask.secondAttempt?r():(new t).reject(e)})}},l=e(null,{execute:function(e){return console.log("Creating a new report..."),h.execute(e)}});return l.CreateReportResultCache=u,l});