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

define(["dojo/when","dojo/promise/all","dojo/Deferred","./tasks/EnrichAreasTask","./tasks/RunReportTask","./AreaDataUtil","./AreaCalculatorsUtil","./CustomReportsManager","./attachments/AttributesUtil","esri/dijit/geoenrichment/utils/DateUtil","../../core/supportClasses/templateJsonUtils/fieldInfo/FieldLibrary","../../core/infographics/dataDrilling/EnrichUtil","../../core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil"],function(e,a,t,r,n,i,o,s,l,u,c,f,d){return{populateReportDataFromAttachmentsStore:function(t,r){var n=[];return r.setCurrentAnalysisAreaIndex&&r.setCurrentAnalysisAreaIndex(0),n.push(e(r.getNotes(),function(e){e&&e.length&&(t.fieldData.metadata[c.SITENOTE_FIELD_NAME]=e[0].text,t.fieldData.metadata[c.SITENOTES_FIELD_NAME]=e.map(function(e){return e.text}).join("<br/><br/>"))})),n.push(e(r.getAttributes(),function(e){if(!e||!e.length)return null;var a={attributes:{}};e.forEach(function(e){var t=e.name;a.attributes[t]=l.formatAttributeValue(e)}),t.analysisAreas.forEach(function(e,r){var n=t.fieldData.areaData[r];n&&o.addFeatureAttributesCalculator(a,n)})})),a(n)},runReportAndGetData:function(a){return e(s.getCustomReportByID(a),function(e){function r(e){return a.fieldData.errors.push(e),(new t).reject(e)}return(new n).execute({analysisAreas:a.analysisAreas,countryID:a.countryID,hierarchy:e.hierarchy,report:{reportID:e.reportID,portalUrl:e.templateData.getPortalUrl(!0),modified:e.modified},cacheResult:!0}).then(function(a){return{taskID:a.taskID,selectedReport:e,areaData:a.areaData}},r)})},applyRunReportAndGetDataResults:function(e,a){e&&e.areaData&&(a.fieldData.runReportTaskID=e.taskID,a.fieldData.areaData=e.areaData,a.analysisAreas&&this._reportDataFromAreas(a.analysisAreas,a.fieldData.areaData),e.selectedReport&&this._reportDataFromReport(e.selectedReport,a.fieldData,a.combinedAreasInfo))},_reportDataFromAreas:function(e,a){e.forEach(function(e,t){var r=e.feature,n=a[t];n&&(o.addFeatureAttributesCalculator(r,n),o.addAreaInfoCalculator(e,n))})},_reportDataFromReport:function(e,a,t){var r=a.metadata;e&&!r.Title&&(r.Title=e.title),r.Source="Esri",r.Date=u.getReportFooterDate(),r.Copyright="©"+u.getFullYear()+" Esri",r.ProductLabel="",r.ProductUrl="",r.PhoneNumber="",r.TrialUrlText="",e.isMultiFeature&&(r.SITE_NAME=t.locationName||t.name,r.STORE_NAME=t.locationName||t.name,r.AREA_DESC2=t.description||t.name,r.STORE_ADDR=t.address)},enrichFieldData:function(t,n){function l(e,a,t){function r(e){return n.fieldData.areaData.every(function(a,r){return void 0!==i.getAreaDataValue({fieldName:e,fieldData:n.fieldData,calculatorName:t,featureIndex:r,ignoreMetadata:!0})})}t=t||d.ENRICHED_DATA_NO_LEVELS;var o=[],s={};return e.forEach(function(e){r(e.fieldName)||(o.push(e.mapTo),s[e.mapTo]=e.fieldName,s[e.mapTo.substr(e.mapTo.indexOf(".")+1)]=e.fieldName)}),o.length?{fields:o,fieldsMap:s,comparisonLevels:a,calculatorName:t}:null}var u=[];if(t=f.optimizeInfos(t),t.forEach(function(e){var a;(e.isGeneral||e.isChart)&&(a=l(e.fields,e.levels,e.calculatorName)),a&&u.push(a)}),u.length)return e(s.getCustomReportByID(n),function(e){function t(e){n.fieldData.errors.push(e)}return a(u.map(function(a){return(new r).enrichAreas({analysisAreas:n.analysisAreas,countryID:n.countryID,hierarchy:e.hierarchy,fields:a.fields,comparisonLevels:a.comparisonLevels}).then(function(e){o.addEnrichFeatureSet(e[0],a.fieldsMap,a.calculatorName,n)},t)}))})}}});