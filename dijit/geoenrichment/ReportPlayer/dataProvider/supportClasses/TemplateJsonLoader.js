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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/utils/CacheUtil","./CustomReportsManager","./GenericTemplateGenerator","./dataCollections/DataCollectionsLoader","../../core/conversion/PortalToEditorConverter","../../core/conversion/portalToEditorUtils/variables/PlayerVariableProvider","../../core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","../../core/conversion/portalToEditorUtils/parsers/_FieldInfoBuilder"],(function(e,t,r,o,a,i,n,l,s,c,m){var p={_getCache:function(){return o.get("TemplateJsonLoader")},getCachedTemplateJsonPromise:function(t,r){var o=t+";"+r.reportID,a=this._getCache()[o];return a&&a.modified===r.modified?a.promise.then((function(t){return{templateJson:e.clone(t.templateJson),templateVariableProvider:t.templateVariableProvider}})):null},putCachedTemplateJsonPromise:function(e,t,r){var o=t+";"+r.reportID;this._getCache()[o]={modified:r.modified,promise:e}}};return{getTemplateJsonByID:function(e,o){var i=this,n=new t;return r(a.getCustomReportByID(e),(function(t){if(t){var a=o&&p.getCachedTemplateJsonPromise(e.countryID,t);if(a)a.then(n.resolve,n.reject);else{var c=i._loadCustomReportData(t).then((function(){var e=new s;return r(l.provideEditorJson(t,{variableProvider:e}),(function(){var r=t.templateJson;return t.portalJson=null,t.templateJson=null,{templateJson:r,templateVariableProvider:e}}))}));o?(p.putCachedTemplateJsonPromise(c,e.countryID,t),p.getCachedTemplateJsonPromise(e.countryID,t).then(n.resolve,n.reject)):c.then(n.resolve,n.reject)}}else n.reject("Can't find a report")}),n.reject),n.promise},_loadCustomReportData:function(e){return e.portalJson=null,e.templateData.getFiles().then((function(t){e.portalJson={files:t}}))},createTemplateJsonFromVariables:function(e){return n.loadVariables({countryID:e.countryID,outFields:["description","precision","type","vintage"],forceLowerCase:!0}).then((function(t){var r=new s,o=t.fullNameToVariableCache,a=e.variables.fullNames.map((function(t){var a,i=c.createFieldNameFromSource(t),n=e.variables.customDataMapping[t],l=n?n.variable:o[t];return a={id:l.id.toLowerCase(),fullName:t,alias:l.description,fieldName:i,precision:l.precision,calculatorName:c.DATA_COLLECTIONS_CALCULATOR_NAME,templateName:c.DATA_COLLECTIONS_CALCULATOR_NAME+"."+i,type:l.type,vintage:l.vintage},r.addVariable(a),m.getCalculatorOrScriptFieldInfo(a.templateName,{variableProvider:r})}));return{templateJson:i.generateTemplatesFromFieldInfos(a,{comparisonLevels:e.comparisonLevels}),templateVariableProvider:r}}))}}}));