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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/when","./tasks/EnrichAreasTask","./tasks/RunReportTask","./CustomReportsManager","esri/dijit/geoenrichment/utils/DateUtil","../../core/supportClasses/templateJsonUtils/FieldInfoNameUtil"],function(e,t,a,r,n,o,i){return{populateReportDataFromAttachmentsStore:function(e,t){var a=t.getNotes();a&&a.length&&(e.fieldData.metadata.SiteNote=a[0].text,e.fieldData.metadata.SiteNotes=a.map(function(e){return e.text}).join("<br/><br/>"))},runReportAndGetData:function(e){return t(n.getCustomReportByID(e),function(t){function a(t){return e.fieldData.errors.push(t),null}return(new r).execute({geoenrichmentUrl:e.geoenrichmentUrl,analysisAreas:e.analysisAreas,countryID:e.countryID,hierarchy:t.hierarchy,report:{reportID:t.reportID,portalUrl:t.templateData.getPortalUrl(!0)}}).then(function(e){return{taskID:e.taskID,selectedReport:t,featureSets:e.featureSets}},a)})},applyRunReportAndGetDataResults:function(e,t){if(e&&e.featureSets){t.fieldData.runReportTaskID=e.taskID;var a,r=[];e.featureSets.forEach(function(e){e.calculatorName===t.fieldData.mainCalculatorName?a=e:r.push(e)}),a&&(this._parseFeatureSet(a,t.fieldData.featureData),this._reportDataFromAreas(t.analysisAreas,t.fieldData.featureData),this._reportDataFromReport(e.selectedReport,t.fieldData))}},enrichFieldData:function(e,r){function o(e){return r.fieldData.featureData.every(function(t){return void 0!==t[e]})}var i=this,s=[],u={};return e.forEach(function(e){o(e.fieldName)||(s.push(e.mapTo),u[e.mapTo.toUpperCase()]=e.fieldName,u[e.mapTo.substr(e.mapTo.indexOf(".")+1).toUpperCase()]=e.fieldName)}),s.length?t(n.getCustomReportByID(r),function(e){function t(e){r.fieldData.errors.push(e)}return(new a).enrichAreas({geoenrichmentUrl:r.geoenrichmentUrl,analysisAreas:r.analysisAreas,countryID:r.countryID,hierarchy:e.hierarchy,fields:s}).then(function(e){i._parseFeatureSet(e[0],r.fieldData.featureData,function(e){var t={};for(var a in e){var r=u[a.toUpperCase()];r&&(t[r]=e[a])}return t})},t)}):void 0},_parseFeatureSet:function(t,a,r){t&&t.features.forEach(function(t,n){var o=a[n];o=e.mixin(o||{},r?r(t.attributes):t.attributes),a[n]=o})},_applyFeatureSetToFieldData:function(e,t,a){this._parseFeatureSet(e,t,a)},_reportDataFromReport:function(e,t){var a=t.metadata;e&&!a.Title&&(a.Title=e.title),a.Source="Esri",a.Date=o.getReportFooterDate(),a.Copyright="©"+o.getFullYear()+" Esri",a.ProductLabel="",a.ProductUrl="",a.PhoneNumber="",a.TrialUrlText=""},_reportDataFromAreas:function(e,t){e.forEach(function(e,a){var r=e.feature,n=t[a];if(n){for(var o in r.attributes){var s=i.createFieldNameFromVariable(o);void 0===n[s]&&(n[s]=r.attributes[o])}n["headers.SITE_NAME"]=e.name||e.shortName||"",n["headers.STORE_NAME"]=e.name||e.shortName||"",n["headers.AREA_DESC"]=e.description||"",n["headers.AREA_DESC2"]=e.description||"",n["headers.AREA_DESC3"]=e.description||"",n["headers.STORE_ADDR"]=e.address||"",n["headers.STORE_LAT"]=e.latitude||"",n["headers.STORE_LONG"]=e.longitude||"",n.AREA_ID=a}})},convertReportData:function(e){var t=this,a=e.fieldData;a.metadata=this._convertObjectToUpperCase(a.metadata),a.featureData=a.featureData.map(function(e){return t._convertObjectToUpperCase(e)})},_convertObjectToUpperCase:function(e){var t={};return Object.keys(e).forEach(function(a){t[a.toUpperCase()]=e[a]}),t}}});