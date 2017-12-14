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

define(["dojo/_base/declare","dojo/_base/lang","dojo/promise/all","dojo/when","./_CommandSupport","./_SerializationSupport","./_ServerSerializationSupport","./supportClasses/CustomReportsManager","./supportClasses/TemplateJsonLoader","./supportClasses/ReportDataProcessor","./supportClasses/InfographicOptionsProvider","./supportClasses/AreasPreprocessor","./supportClasses/GEUtil","./supportClasses/attachments/DefaultAttachmentsStore","../core/themes/ThemeLibrary","../core/themes/ReportThemes","../core/supportClasses/templateJsonUtils/countryConfig","esri/dijit/geoenrichment/utils/UrlUtil"],function(t,e,r,o,n,s,a,i,p,l,c,u,h,m,g,f,C,d){return t([n,s,a],{analysisAreasLimit:-1,cacheTemplates:!0,printMapTaskUrl:null,_infographicOptionsProvider:null,constructor:function(){this._infographicOptionsProvider=new c},_getAttachmentsStore:function(t){return new m(t).initialize()},getCustomReports:function(t,e){return i.getCustomReports(t,e)},_currentContext:null,getReportData:function(t,n){var s=this;n=n||function(){},d.registerCORS(t.geoenrichmentUrl);var a=e.mixin({},t);return a.fieldData={runReportTaskID:null,metadata:{},areaData:[],errors:[]},this._currentContext=a,this._infographicOptionsProvider.setServerUrl(a),i.resetCache(),o(u.preprocessAreas(a,{analysisAreasLimit:s.analysisAreasLimit}),function(){return n(.25),r({initGE:h.initialize(a.geoenrichmentUrl),countryInfo:h.getCountryInfo(a.geoenrichmentUrl,a.countryID),reportObject:i.getCustomReportByID(a),infographicOptions:s._infographicOptionsProvider.getInfographicOptions(a),attachmentsStore:s._getAttachmentsStore(a),templateJson:p.getTemplateJsonByID(a,s.cacheTemplates),runReportResult:l.runReportAndGetData(a)}).then(function(t){var e=t.reportObject,r=t.infographicOptions,s=t.attachmentsStore,i=t.templateJson,p=t.runReportResult;return n(.75),i&&e&&a.fieldData?(l.applyRunReportAndGetDataResults(p,a),C.setCountry(t.countryInfo.country),C.setHierarchyID(e.hierarchy),C.setGeographiesModel(t.countryInfo.geographiesModels[C.getHierarchyID()]),o(s&&l.populateReportDataFromAttachmentsStore(a,s),function(){return n(1),i.theme||(i.theme=g.getReportThemeById(e.isGraphicReport?f.GRAPHIC:f.CLASSIC)),{isClassic:!e.isGraphicReport,reportType:e.type,reportTitle:e.title,templateJson:i,reportObject:e,fieldData:a.fieldData,analysisAreas:a.analysisAreas,infographicOptions:r,attachmentsStore:s,geClient:h.getClient(),config:{portalUrl:a.portalUrl,geoenrichmentUrl:a.geoenrichmentUrl,countryID:a.countryID,reportID:a.reportID}}})):null})})},_getCurrentContext:function(){return this._currentContext},enrichFieldData:function(t,e){return l.enrichFieldData(t,e)}})});