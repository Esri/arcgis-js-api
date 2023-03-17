// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/when","esri/kernel","./dataProvider/_CommandSupport","./dataProvider/_SerializationSupport","./dataProvider/_ServerSerializationSupport","./dataProvider/supportClasses/areas/AnalysisAreaUtil","./dataProvider/supportClasses/areas/AnalysisAreaJsonUtil","./dataProvider/supportClasses/areas/AreasPreprocessor","./dataProvider/supportClasses/CustomReportsManager","./dataProvider/supportClasses/TemplateJsonLoader","./dataProvider/supportClasses/ReportDataProcessor","./dataProvider/supportClasses/GEUtil","./dataProvider/supportClasses/attachments/DefaultAttachmentsStore","./dataProvider/supportClasses/attachments/CustomAttachmentsStore","./dataProvider/supportClasses/data/VariablesUtil","./dataProvider/commands/mapToImage/MapToURLUtil","./core/themes/ThemeLibrary","./core/themes/ReportThemes","esri/dijit/geoenrichment/ReportPlayer/config","esri/dijit/geoenrichment/ReportPlayer/countryConfig","esri/dijit/geoenrichment/utils/ProjectionUtil","esri/dijit/geoenrichment/utils/PortalUtil","esri/dijit/geoenrichment/utils/UrlUtil"],(function(e,r,t,a,s,o,n,i,l,p,c,u,m,d,h,g,y,f,A,v,I,C,U,b,P,S){return e([o,n,i],{analysisAreasLimit:-1,cacheTemplates:!0,printMapTaskUrl:null,resetReportItemsCache:!0,constructor:function(e){r.mixin(this,e)},_getAttachmentsStore:function(e){return new g(e).initialize()},_currentContext:null,getReportData:function(e,s){var o=this,n=s&&s.progressCallback||function(){},i=r.mixin({},e);return i.portalUrl=S.getPortalUrl(i.portalUrl),C.isPlayerOnServer||S.setArcgisUrl(i.portalUrl),l.parseSites(i),U.reset(),i.hierarchy||i.analysisAreas.some((function(e){if(e.geographies&&e.geographies[0].hierarchy)return i.hierarchy=e.geographies[0].hierarchy,!0})),o.resetReportItemsCache&&u.resetCache(),o._currentContext=i,i.analysisAreas=p.areasFromJson(i.analysisAreas),i.combinedAreasInfo=i.combinedAreasInfo&&p.combinedAreasInfoFromJson(i.combinedAreasInfo)||{},l.populateCombinedAreasInfo(i.combinedAreasInfo,i.analysisAreas),i.fieldData={specialTradeAreaCalculatorName:null,runReportTaskIDs:null,metadata:{},areaData:[],errors:[],reportInfo:null},t([a(u.tryFindReportIdByAlias(i),(function(e){i.reportID=e||i.reportID})),this._discoverPortal(i),i.variables&&a(f.preprocessVariables(i.variables,i.portalUrl),(function(e){i.variables=e}))]).then((function(){return a(c.preprocessAreas(i,{analysisAreasLimit:o.analysisAreasLimit}),(function(){n(.25),setTimeout((function(){o._onCreateReportStarted()}));var e=i.attachmentsProvider?y(i.attachmentsProvider):o._getAttachmentsStore(i.analysisAreas),r={initGE:h.initialize(),countryInfo:h.getCountryInfo(i.countryID),attachmentsStore:e};return i.reportID?(r.reportObject=u.getCustomReportByID(i),r.templateJsonInfo=m.getTemplateJsonByID(i,o.cacheTemplates),r.runReportResult=d.runReportAndGetData(i,e)):i.variables&&(r.reportObject=u.getFakeCustomReportByContext(i),r.templateJsonInfo=m.createTemplateJsonFromVariables(i),r.runReportResult=d.runReportFromVariables(i)),t(r).then((function(e){var r=e.reportObject,t=e.attachmentsStore,s=e.templateJsonInfo.templateJson,o=e.templateJsonInfo.templateVariableProvider,l=e.runReportResult;if(n(.75),!s||!r||!i.fieldData)return null;U.setCountry(e.countryInfo.country),U.setHierarchyID(i.hierarchy),U.setGeographiesModel(e.countryInfo.geographiesModels[U.getHierarchyID()]),s.theme||(s.theme=v.getReportThemeById(r.isGraphicReport?I.GRAPHIC:I.CLASSIC));var p={isMultiFeature:r.isMultiFeature&&i.analysisAreas.length>1,reportTitle:i.reportTitle||r.title,templateJson:s,reportObject:r,fieldData:i.fieldData,analysisAreas:i.analysisAreas,combinedAreasInfo:i.combinedAreasInfo,reverseAnalysisAreasOnMap:i.reverseAnalysisAreasOnMap,attachmentsStore:t,geClient:h.getClient(),templateVariableProvider:o,customLogo:i.customLogo,config:{portalUrl:i.portalUrl,geoenrichmentUrl:i.geoenrichmentUrl,geometryServiceUrl:i.geometryServiceUrl,printMapTaskUrl:i.printMapTaskUrl,countryID:i.countryID,hierarchy:i.hierarchy,reportID:i.reportID,variables:i.variables}};return a(d.applyRunReportAndGetDataResults(l,p),(function(){return n(1),p}))}))}))}))},_discoverPortal:function(e){return P.getPortalSelf(e.portalUrl).then((function(r){e.geoenrichmentUrl=e.geoenrichmentUrl||r.helperServices.geoenrichment.url;var t=s.id.findCredential(e.portalUrl),a=t&&t.token;h.setGeoenrichmentUrl(e.geoenrichmentUrl,a),e.geometryServiceUrl=e.geometryServiceUrl||r.helperServices.geometry.url,b.setGeometryServiceUrl(e.geometryServiceUrl),e.printMapTaskUrl=e.printMapTaskUrl||r.helperServices.printTask.url,A.setPrintMapTaskUrl(e.printMapTaskUrl)}))},reportDataToSingleAreaReportData:function(e,t){var a=t.currentFeatureIndex||0,s=r.mixin({},e.fieldData);s.areaData=[s.areaData[a]];var o=[r.mixin({},e.analysisAreas[a])];c.removeGroupInfo(o);var n=e.attachmentsStore,i=n&&{getImages:function(){return n.supportsMultipleAreas&&n.setCurrentAnalysisAreaIndex(a),n.getImages()},getAttributes:function(){return n.supportsMultipleAreas&&n.setCurrentAnalysisAreaIndex(a),n.getAttributes()},getNotes:function(){return n.supportsMultipleAreas&&n.setCurrentAnalysisAreaIndex(a),n.getNotes()}};return{isMultiFeature:!1,reportTitle:t.reportTitle,templateJson:t.templateJson,reportObject:e.reportObject,fieldData:s,analysisAreas:o,combinedAreasInfo:null,reverseAnalysisAreasOnMap:!1,attachmentsStore:i,geClient:e.geClient,templateVariableProvider:e.templateVariableProvider,config:e.config}},_getCurrentContext:function(){return this._currentContext},_onCreateReportStarted:function(){}})}));