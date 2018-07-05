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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/promise/all","dojo/when","./dataProvider/_CommandSupport","./dataProvider/_SerializationSupport","./dataProvider/_ServerSerializationSupport","./dataProvider/supportClasses/AnalysisAreaJsonUtil","./dataProvider/supportClasses/CustomReportsManager","./dataProvider/supportClasses/TemplateJsonLoader","./dataProvider/supportClasses/ReportDataProcessor","./dataProvider/supportClasses/InfographicOptionsProvider","./dataProvider/supportClasses/AreasPreprocessor","./dataProvider/supportClasses/AreasInfoTemplateBuilder","./dataProvider/supportClasses/GEUtil","./dataProvider/supportClasses/attachments/DefaultAttachmentsStore","./dataProvider/supportClasses/StandardGraphicReportTemplates","./core/themes/ThemeLibrary","./core/themes/ReportThemes","./core/supportClasses/templateJsonUtils/countryConfig"],function(e,t,r,a,o,n,s,i,p,l,c,u,d,h,m,f,g,C,y,I){return e([o,n,s],{analysisAreasLimit:-1,cacheTemplates:!0,printMapTaskUrl:null,_infographicOptionsProvider:null,constructor:function(){this._infographicOptionsProvider=new u},_getAttachmentsStore:function(e){return new f(e).initialize()},getCustomReports:function(e,t){return p.getCustomReports(e,t)},_currentContext:null,getReportData:function(e,o){var n=this;o=o||function(){};var s=t.mixin({},e);return s.reportID=g.aliasToID(s.countryID,s.reportID)||s.reportID,s.analysisAreas=i.areasFromJson(s.analysisAreas),s.fieldData={runReportTaskID:null,metadata:{},areaData:[],errors:[]},this._currentContext=s,this._infographicOptionsProvider.setServerUrl(s),p.resetCache(),a(m.provideGeoenrichmentUrl(s),function(){return a(d.preprocessAreas(s,{analysisAreasLimit:n.analysisAreasLimit}),function(){return o(.25),r({initGE:m.initialize(s.geoenrichmentUrl),countryInfo:m.getCountryInfo(s.geoenrichmentUrl,s.countryID),reportObject:p.getCustomReportByID(s),infographicOptions:n._infographicOptionsProvider.getInfographicOptions(s),attachmentsStore:n._getAttachmentsStore(s),templateJsonInfo:l.getTemplateJsonByID(s,n.cacheTemplates),runReportResult:c.runReportAndGetData(s)}).then(function(e){var t=e.reportObject,a=e.infographicOptions,n=e.attachmentsStore,i=e.templateJsonInfo.templateJson,p=e.templateJsonInfo.templateVariableProvider,l=e.runReportResult;return o(.75),i&&t&&s.fieldData?(c.applyRunReportAndGetDataResults(l,s),I.setCountry(e.countryInfo.country),I.setHierarchyID(t.hierarchy),I.setGeographiesModel(e.countryInfo.geographiesModels[I.getHierarchyID()]),r([n&&h.buildInfoTemplates(n,s.analysisAreas),n&&c.populateReportDataFromAttachmentsStore(s,n)]).then(function(){return o(1),i.theme||(i.theme=C.getReportThemeById(t.isGraphicReport?y.GRAPHIC:y.CLASSIC)),{isClassic:!t.isGraphicReport,reportType:t.type,reportTitle:t.title,templateJson:i,reportObject:t,fieldData:s.fieldData,analysisAreas:s.analysisAreas,infographicOptions:a,attachmentsStore:n,geClient:m.getClient(),templateVariableProvider:p,config:{portalUrl:s.portalUrl,geoenrichmentUrl:s.geoenrichmentUrl,countryID:s.countryID,reportID:s.reportID}}})):null})})})},_getCurrentContext:function(){return this._currentContext},enrichFieldData:function(e,t){return c.enrichFieldData(e,t)}})});