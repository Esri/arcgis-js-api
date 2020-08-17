// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./CustomReportsManager","./GenericTemplateGenerator","./dataCollections/DataCollectionsLoader","../../core/conversion/PortalToEditorConverter","../../core/conversion/portalToEditorUtils/variables/PlayerVariableProvider","../../core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","../../core/conversion/portalToEditorUtils/parsers/_FieldInfoBuilder"],(function(e,t,r,o,a,i,n,l,s,c){var p={_templatesCache:{},getCachedTemplateJsonPromise:function(t,r){var o=t+";"+r.reportID,a=this._templatesCache[o];return a&&a.modified===r.modified?a.promise.then((function(t){return{templateJson:e.clone(t.templateJson),templateVariableProvider:t.templateVariableProvider}})):null},putCachedTemplateJsonPromise:function(e,t,r){var o=t+";"+r.reportID;this._templatesCache[o]={modified:r.modified,promise:e}}};return{getTemplateJsonByID:function(e,a){var i=this,s=new t;return r(o.getCustomReportByID(e),(function(t){if(t){var o=a&&p.getCachedTemplateJsonPromise(e.countryID,t);if(o)o.then(s.resolve,s.reject);else{var c=i._loadCustomReportData(t).then((function(){var e=new l;return r(n.provideEditorJson(t,{variableProvider:e}),(function(){var r=t.templateJson;return t.portalJson=null,t.templateJson=null,{templateJson:r,templateVariableProvider:e}}))}));a?(p.putCachedTemplateJsonPromise(c,e.countryID,t),p.getCachedTemplateJsonPromise(e.countryID,t).then(s.resolve,s.reject)):c.then(s.resolve,s.reject)}}else s.reject("Can't find a report")}),s.reject),s.promise},_loadCustomReportData:function(e){return e.portalJson=null,e.templateData.getFiles().then((function(t){e.portalJson={files:t}}))},createTemplateJsonFromVariables:function(e){return i.loadVariables({countryID:e.countryID,outFields:["description","precision","type","vintage"],forceLowerCase:!0}).then((function(t){var r=new l,o=t.fullNameToVariableCache,i=e.variables.fullNames.map((function(t){var a,i=s.createFieldNameFromSource(t),n=e.variables.customDataMapping[t],l=n?n.variable:o[t];return a={id:l.id.toLowerCase(),fullName:t,alias:l.description,fieldName:i,precision:l.precision,calculatorName:s.DATA_COLLECTIONS_CALCULATOR_NAME,templateName:s.DATA_COLLECTIONS_CALCULATOR_NAME+"."+i,type:l.type,vintage:l.vintage},r.addVariable(a),c.getCalculatorOrScriptFieldInfo(a.templateName,{variableProvider:r})}));return{templateJson:a.generateTemplatesFromFieldInfos(i,{comparisonLevels:e.comparisonLevels}),templateVariableProvider:r}}))}}}));
