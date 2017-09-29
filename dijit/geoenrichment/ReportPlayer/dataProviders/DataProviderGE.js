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

define(["dojo/_base/declare","dojo/_base/lang","dojo/promise/all","dojo/when","./_CommandSupport","./_SerializationSupport","./supportClasses/CustomReportsManager","./supportClasses/TemplateJsonLoader","./supportClasses/ReportDataProcessor","./supportClasses/InfographicOptionsProvider","./supportClasses/AreasPreprocessor","./supportClasses/GEUtil","../core/themes/ThemeLibrary","../core/themes/ReportThemes","../core/supportClasses/templateJsonUtils/countryConfig","esri/dijit/geoenrichment/utils/UrlUtil"],function(t,e,r,o,a,n,s,i,p,l,c,u,m,h,g,C){return t([a,n],{analysisAreasLimit:-1,cacheTemplates:!0,printMapTaskUrl:null,_infographicOptionsProvider:null,constructor:function(){this._infographicOptionsProvider=new l},_getAttachmentsStore:function(t){return null},getCustomReports:function(t,e){return s.getCustomReports(t,e)},_currentContext:null,getReportData:function(t){var a=this;C.registerCORS(t.geoenrichmentUrl);var n=e.mixin({},t);return n.fieldData={runReportTaskID:null,mainCalculatorName:null,metadata:{},featureData:[],additionalCalcHash:{},errors:[]},this._currentContext=n,this._infographicOptionsProvider.setServerUrl(n),s.resetCache(),o(c.preprocessAreas(n,{analysisAreasLimit:a.analysisAreasLimit}),function(){return r({country:u.getCountry(n.geoenrichmentUrl,n.countryID),reportObject:s.getCustomReportByID(n),infographicOptions:a._infographicOptionsProvider.getInfographicOptions(n),attachmentsStore:a._getAttachmentsStore(n),templateJson:i.getTemplateJsonByID(n,a.cacheTemplates),runReportResult:p.runReportAndGetData(n)}).then(function(t){g.setCountry(t.country);var e=t.reportObject,r=t.infographicOptions,o=t.attachmentsStore,a=t.templateJson,s=t.runReportResult;return n.fieldData.mainCalculatorName=a.mainCalculatorName,p.applyRunReportAndGetDataResults(s,n),e&&n.fieldData?(o&&p.populateReportDataFromAttachmentsStore(n,o),p.convertReportData(n),{isClassic:!e.isGraphicReport,theme:a.theme||m.getReportThemeById(e.isGraphicReport?h.GRAPHIC:h.CLASSIC),reportType:e.type,reportTitle:e.title,templateJson:a,reportObject:e,fieldData:n.fieldData,analysisAreas:n.analysisAreas,infographicOptions:r,attachmentsStore:o,config:{portalUrl:n.portalUrl,geoenrichmentUrl:n.geoenrichmentUrl,countryID:n.countryID,reportID:n.reportID}}):null})})},_getCurrentContext:function(){return this._currentContext},enrichFieldData:function(t,e){return p.enrichFieldData(t,e)}})});