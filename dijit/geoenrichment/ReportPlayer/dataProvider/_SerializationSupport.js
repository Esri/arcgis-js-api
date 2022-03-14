// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./supportClasses/areas/AnalysisAreaJsonUtil","./supportClasses/areas/AnalysisAreaUtil","../core/infographics/InfographicTypes","../core/supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil","esri/dijit/geoenrichment/ReportPlayer/countryConfig","esri/dijit/geoenrichment/utils/PortalUtil","esri/dijit/geoenrichment/utils/UrlUtil","esri/dijit/geoenrichment/ReportPlayer/config","esri/dijit/geoenrichment/ReportPlayer/_devConfig"],(function(e,r,t,a,o,n,s,i,l,c,p,m,f,u){var g,d,A,h,v,y;function I(){var r=new a;return e(["./supportClasses/attachments/AttachmentsStoreSerializer","./supportClasses/GEUtil","../core/supportClasses/templateJsonUtils/TemplateJsonSerializer","../core/supportClasses/templateJsonUtils/TemplateJsonAnalyzer","../core/infographics/utils/InfographicJsonUtil","../core/conversion/portalToEditorUtils/variables/PlayerVariableProvider","../core/infographics/InfographicTypes","./commands/mapToImage/MapToURLUtil","esri/dijit/geoenrichment/utils/ProjectionUtil"],(function(e,t,a,o,n,s,l,c,p){g=e,d=t,A=a,o,n,h=s,i=l,v=c,y=p,r.resolve()})),r.promise}return r(null,{reportDataToJson:function(e,r){var a=this;r=r||{};var s=!1;return l.processTemplateFieldInfos(e.templateJson,(function(e){e.isInfographic&&e.infographicJson.type===i.ATTACHMENTS&&(s=!0)})),I().then((function(){return o(e.attachmentsStore&&g.getAttachmentsStoreJson(e.attachmentsStore,{numAreas:e.analysisAreas.length,saveImages:s}),(function(o){var s=t.mixin({},e.config);!1!==r.forceFixedDataMode&&delete s.geoenrichmentUrl;var i={jsapiVersion:f.jsapiVersion,isMultiFeature:e.isMultiFeature,reportTitle:e.reportTitle,templateJson:A.serialize(e.templateJson),reportObject:a._prepareReportObjectJson(e.reportObject),fieldData:e.fieldData,analysisAreas:n.areasToJson(e.analysisAreas),combinedAreasInfo:e.combinedAreasInfo&&n.combinedAreasInfoToJson(e.combinedAreasInfo),reverseAnalysisAreasOnMap:e.reverseAnalysisAreasOnMap,attachmentsStore:o,templateVariableProvider:e.templateVariableProvider&&e.templateVariableProvider.toJson(),config:s,countryConfig:c.toJson(),mapImageInfos:r.mapImageInfos,loadedMapPortalItems:r.loadedMapPortalItems,customLogo:e.customLogo};return u.logData&&(console.log("_SerializationSupport.js => reportDataJson"),console.log(i)),i}))}))},_prepareReportObjectJson:function(e){var r={};for(var t in e)e[t]&&"object"!=typeof e[t]&&(r[t]=e[t]);return r},reportDataFromJson:function(e){return I().then((function(){var r=e.fieldData;r.featureData&&(r.areaData=r.featureData.map((function(e){return{mainCalculator:{data:e}}})),delete r.featureData);var t={isMultiFeature:e.isMultiFeature,reportTitle:e.reportTitle,templateJson:A.deserialize(e.templateJson),reportObject:e.reportObject,fieldData:r,analysisAreas:n.areasFromJson(e.analysisAreas),combinedAreasInfo:e.combinedAreasInfo&&n.combinedAreasInfoFromJson(e.combinedAreasInfo)||{},reverseAnalysisAreasOnMap:e.reverseAnalysisAreasOnMap,attachmentsStore:e.attachmentsStore&&g.getAttachmentsStoreFromJson(e.attachmentsStore),templateVariableProvider:e.templateVariableProvider&&new h(e.templateVariableProvider),config:e.config||{},mapImageInfos:e.mapImageInfos,loadedMapPortalItems:e.loadedMapPortalItems,customLogo:e.customLogo};s.populateCombinedAreasInfo(t.combinedAreasInfo,t.analysisAreas),d.setGeoenrichmentUrl(null);var a=!1;return t.config.portalUrl&&m.setArcgisUrl(m.getPortalUrl(t.config.portalUrl)),t.config.geometryServiceUrl?y.setGeometryServiceUrl(t.config.geometryServiceUrl):a=!0,t.config.printMapTaskUrl?v.setPrintMapTaskUrl(t.config.printMapTaskUrl):a=!0,c.fromJson(e.countryConfig),o(a&&p.tryConfigureServicesFromAGOLPublic()).then((function(){return t}))}))}})}));