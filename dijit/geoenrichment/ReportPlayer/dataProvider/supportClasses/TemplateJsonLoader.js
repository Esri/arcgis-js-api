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

define(["dojo/_base/lang","dojo/Deferred","dojo/when","dojo/promise/all","./CustomReportsManager","./GenericTemplateGenerator","./dataCollections/DataCollectionsLoader","../../core/conversion/PortalToEditorConverter","../../core/conversion/portalToEditorUtils/variables/PlayerVariableProvider","../../core/supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil","../../core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","../../core/conversion/portalToEditorUtils/parsers/_FieldInfoBuilder"],function(e,a,t,r,o,i,l,n,s,p,c,d){var m={_templatesCache:{},getCachedTemplateJson:function(a,t){var r=this._templatesCache[a+";"+t.reportID];return r&&r.modified===t.modified?{templateJson:e.clone(r.templateJsonInfo.templateJson),templateVariableProvider:r.templateJsonInfo.templateVariableProvider}:null},putCachedTemplateJson:function(a,t,r){this._templatesCache[a+";"+r.reportID]={modified:r.modified,templateJsonInfo:{templateJson:e.clone(t.templateJson),templateVariableProvider:t.templateVariableProvider}}}};return{getTemplateJsonByID:function(e,i){var c=this,d=new a;return t(o.getCustomReportByID(e),function(a){if(!a)return void d.reject("Can't find a report");var o=i&&m.getCachedTemplateJson(e.countryID,a);if(o)return void d.resolve(o);var u,v=[c._loadCustomReportData(a)];return"US"!==e.countryID&&"CA"!==e.countryID&&(u=!0,v.push(l.loadVariables({countryID:e.countryID,hierarchy:a.hierarchy,outFields:["description"]}))),r(v).then(function(r){var o=new s;return t(n.provideEditorJson(a,{variableProvider:o}),function(){var t=a.templateJson;if(u){var l=r[1].idToVariableCache,n=r[1].fullNameToVariableCache;p.processTemplateFieldInfos(t,function(e){if(e.hasVariable&&e.variableID){var a=n[e.fullName]||l[e.variableID];e.alias=a&&a.description||e.alias,(!a||!a.description)&&console.log("Can't find variable with ID: "+e.variableID)}})}a.portalJson=null,a.templateJson=null;var s={templateJson:t,templateVariableProvider:o};i&&m.putCachedTemplateJson(e.countryID,s,a),d.resolve(s)})})},d.reject),d.promise},_loadCustomReportData:function(e){return e.portalJson=null,e.templateData.getFiles().then(function(a){e.portalJson={files:a}})},createTemplateJsonFromVariables:function(e){return l.loadVariables({countryID:e.countryID,hierarchy:e.hierarchy,outFields:["description","precision","type","vintage"],forceLowerCase:!0}).then(function(a){var t=new s,r=a.fullNameToVariableCache,o=e.variables.map(function(e){e=e.toLowerCase();var a=r[e],o=c.createFieldNameFromVariable(e),i={id:a.id.toLowerCase(),fullName:e,alias:a.description,fieldName:o,precision:a.precision,calculatorName:c.DATA_COLLECTIONS_CALCULATOR_NAME,templateName:c.DATA_COLLECTIONS_CALCULATOR_NAME+"."+o,type:a.type,vintage:a.vintage};return t.addVariable(i),d.getCalculatorOrScriptFieldInfo(i.templateName,{variableProvider:t})});return{templateJson:i.generateTemplatesFromFieldInfos(o,{comparisonLevels:e.comparisonLevels}),templateVariableProvider:t}})}}});