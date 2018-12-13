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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/when","./parsers/DataXMLParser","./EnrichAreasTask","../AnalysisAreaJsonUtil","esri/dijit/geoenrichment/ReportPlayer/config"],function(e,r,t,n,o,a,c,i){var u={_cache:{},_buildKey:function(e){return[e.countryID,e.hierarchy,JSON.stringify(c.areasToJson(e.analysisAreas,{excludeInfoTemplate:!0})),e.report.reportID,e.report.portalUrl,e.report.modified].join("_")},getCopy:function(e){var t=this._buildKey(e),n=this._cache[t];return n&&r.clone(n)},copyAndPut:function(e,t){var n=this._buildKey(e);this._cache[n]=t&&r.clone(t)}},s={execute:function(e){function r(){return(new a).createReport(e).then(function(r){var n=r&&r.taskID;r=r&&r.result;try{var a;if(r&&"object"==typeof r&&(a=r.error),!a&&"string"==typeof r&&-1!==r.indexOf("{"))try{var c=JSON.parse(r);a=c&&c.error}catch(e){}if(a){if(!i.runReportTask.ignoreErrors)return(new t).reject(a);r=[]}var s={taskID:n,areaData:o.parse(r),error:a};return e.cacheResult&&!a&&u.copyAndPut(e,s),s}catch(e){return(new t).reject(e)}})}var c=e.cacheResult&&u.getCopy(e);return c?n(c):n(r(),function(e){return(!e||e.error)&&i.runReportTask.secondAttempt?r():e},function(e){return i.runReportTask.secondAttempt?r():(new t).reject(e)})}};return e(null,{execute:function(e){return console.log("Creating a new report..."),s.execute(e)}})});