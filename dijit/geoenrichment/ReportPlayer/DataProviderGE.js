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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/promise/all","dojo/when","./dataProvider/_CommandSupport","./dataProvider/_SerializationSupport","./dataProvider/_ServerSerializationSupport","./dataProvider/supportClasses/AnalysisAreaJsonUtil","./dataProvider/supportClasses/CustomReportsManager","./dataProvider/supportClasses/TemplateJsonLoader","./dataProvider/supportClasses/ReportDataProcessor","./dataProvider/supportClasses/InfographicOptionsProvider","./dataProvider/supportClasses/AreasPreprocessor","./dataProvider/supportClasses/GEUtil","./dataProvider/supportClasses/attachments/DefaultAttachmentsStore","./dataProvider/supportClasses/StandardGraphicReportTemplates","./core/themes/ThemeLibrary","./core/themes/ReportThemes","./core/supportClasses/templateJsonUtils/countryConfig"],function(e,t,r,o,a,n,s,i,p,l,c,u,d,h,m,g,f,C,y){return e([a,n,s],{analysisAreasLimit:-1,cacheTemplates:!0,printMapTaskUrl:null,_infographicOptionsProvider:null,constructor:function(){this._infographicOptionsProvider=new u},_getAttachmentsStore:function(e){return new m(e).initialize()},getCustomReports:function(e,t){return p.getCustomReports(e,t)},_currentContext:null,getReportData:function(e,a){var n=this;a=a||function(){};var s=t.mixin({},e);return s.reportID=g.aliasToID(s.reportID)||s.reportID,s.analysisAreas=i.areasFromJson(s.analysisAreas),s.fieldData={runReportTaskID:null,metadata:{},areaData:[],errors:[]},this._currentContext=s,this._infographicOptionsProvider.setServerUrl(s),p.resetCache(),o(h.provideGeoenrichmentUrl(s),function(){return o(d.preprocessAreas(s,{analysisAreasLimit:n.analysisAreasLimit}),function(){return a(.25),r({initGE:h.initialize(s.geoenrichmentUrl),countryInfo:h.getCountryInfo(s.geoenrichmentUrl,s.countryID),reportObject:p.getCustomReportByID(s),infographicOptions:n._infographicOptionsProvider.getInfographicOptions(s),attachmentsStore:n._getAttachmentsStore(s),templateJson:l.getTemplateJsonByID(s,n.cacheTemplates),runReportResult:c.runReportAndGetData(s)}).then(function(e){var t=e.reportObject,r=e.infographicOptions,n=e.attachmentsStore,i=e.templateJson,p=e.runReportResult;return a(.75),i&&t&&s.fieldData?(c.applyRunReportAndGetDataResults(p,s),y.setCountry(e.countryInfo.country),y.setHierarchyID(t.hierarchy),y.setGeographiesModel(e.countryInfo.geographiesModels[y.getHierarchyID()]),o(n&&c.populateReportDataFromAttachmentsStore(s,n),function(){return a(1),i.theme||(i.theme=f.getReportThemeById(t.isGraphicReport?C.GRAPHIC:C.CLASSIC)),{isClassic:!t.isGraphicReport,reportType:t.type,reportTitle:t.title,templateJson:i,reportObject:t,fieldData:s.fieldData,analysisAreas:s.analysisAreas,infographicOptions:r,attachmentsStore:n,geClient:h.getClient(),config:{portalUrl:s.portalUrl,geoenrichmentUrl:s.geoenrichmentUrl,countryID:s.countryID,reportID:s.reportID}}})):null})})})},_getCurrentContext:function(){return this._currentContext},enrichFieldData:function(e,t){return c.enrichFieldData(e,t)}})});