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

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/when","dojo/promise/all","./supportClasses/AnalysisAreaJsonUtil","./supportClasses/AreasPreprocessor","./supportClasses/ReportDataProcessor","./supportClasses/attachments/AttributesUtil","./supportClasses/attachments/NotesUtil","../core/supportClasses/templateJsonUtils/TemplateJsonSerializer","../core/conversion/PortalToEditorConverter","../core/themes/ThemeLibrary","../core/infographics/dataDrilling/EnrichUtil","../core/infographics/utils/InfographicJsonUtil"],function(t,e,r,n,a,o,i,s,c,l,u,p,f,m,h){var g={getAttachmentsStoreJson:function(t){return t?a([t.getAttachments(),t.getAttributes(),t.getNotes()]).then(function(t){var e=t[0]||[],r=t[1]||[],n=t[2]||[];return a(e.map(function(t){return a([t.getThumbnail(),t.getAttachmentUrl()]).then(function(e){t.__thumbnail=e[0],t.__url=e[1]})})).then(function(){return{attachments:e.map(function(t){var e=t.__thumbnail,r=t.__url;return delete t.__thumbnail,delete t.__url,{description:t.description,thumbnail:e,url:r}}),attributes:r.map(function(t){return c.attributeToJson(t)}),notes:n.map(function(t){return l.noteToJson(t)})}})}):null},getAttachmentsStoreFromJson:function(t){if(!t)return null;var e=t.attributes||[];e=e.map(c.attributeFromJson);var r=t.notes||[];return r=r.map(l.noteFromJson),{getAttachments:function(){return t.attachments?t.attachments.map(function(t){return{description:t.description,getThumbnail:function(){return t.thumbnail},getAttachmentUrl:function(){return t.url}}}):[]},getAttributes:function(){return e},getNotes:function(){return r}}}};return t(null,{reportDataToJson:function(t,r){function a(){var e={};for(var r in t.reportObject)t.reportObject[r]&&"object"!=typeof t.reportObject[r]&&(e[r]=t.reportObject[r]);return e}return r=r||{},n(r.allowDataDrilling&&this._serializeDataDrilling(t),function(){return n(g.getAttachmentsStoreJson(t.attachmentsStore),function(n){var i;i=!1!==r.forceFixedDataMode?{portalUrl:t.config.portalUrl}:e.mixin({},t.config);var s={isClassic:t.isClassic,reportType:t.reportType,reportTitle:t.reportTitle,templateJson:u.serialize(t.templateJson),reportObject:a(),fieldData:t.fieldData,analysisAreas:o.areasToJson(t.analysisAreas),infographicOptions:t.infographicOptions&&t.infographicOptions.toJson(),attachmentsStore:n,config:i,mapImageInfos:r.mapImageInfos};return console.log("_SerializationSupport.js => reportDataJson"),console.log(s),s})})},_serializeDataDrilling:function(t){var r=m.getEnrichInfosForTemplateJson(t.infographicOptions.countryID,t.templateJson),n=[];return n.push(this.enrichFieldData(r,e.mixin({analysisAreas:t.analysisAreas,fieldData:t.fieldData},t.config))),n.push(this._enrichInfographicVariables(t,r)),a(n)},_enrichInfographicVariables:function(t,e){var o=t.infographicOptions;return n(o.getOptions().getItems(o.countryID),function(){var n=[];return e.forEach(function(e){e.isInfographic&&e.variables&&t.analysisAreas.forEach(function(t,a){o.setCurrentAnalysisAreaIndex(a);var i=new r,s=o.createGeoenrichment();s.onDone=function(){i.resolve()},s.country=o.countryID,s.setGeoLevels(h.getSubLevels(e),h.getHighestLevel(e)),s.setVariables(e.variables),s.setStudyArea(o.studyArea),n.push(i.promise)})}),a(n)})},reportDataFromJson:function(t){var e=t.fieldData;return e.featureData&&(e.areaData=e.featureData.map(function(t){return{mainCalculator:{data:t}}}),delete e.featureData),{isClassic:t.isClassic,reportType:t.reportType,reportTitle:t.reportTitle,templateJson:u.deserialize(t.templateJson),reportObject:t.reportObject,fieldData:e,analysisAreas:o.areasFromJson(t.analysisAreas),infographicOptions:t.infographicOptions&&this._infographicOptionsProvider.getInfographicOptionsFromJson(t.infographicOptions),attachmentsStore:t.attachmentsStore&&g.getAttachmentsStoreFromJson(t.attachmentsStore),config:t.config||{},mapImageInfos:t.mapImageInfos}}})});