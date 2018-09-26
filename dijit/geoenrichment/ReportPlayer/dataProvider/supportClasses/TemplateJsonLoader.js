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

define(["dojo/_base/lang","dojo/Deferred","dojo/when","dojo/promise/all","./CustomReportsManager","./dataCollections/DataCollectionsLoader","../../core/conversion/PortalToEditorConverter","../../core/conversion/portalToEditorUtils/variables/PlayerVariableProvider","../../core/supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil"],function(e,t,o,a,r,n,l,i,s){var p={_templatesCache:{},getCachedTemplateJson:function(t,o){var a=this._templatesCache[t+";"+o.reportID];return a&&a.modified===o.modified?{templateJson:e.clone(a.templateJsonInfo.templateJson),templateVariableProvider:a.templateJsonInfo.templateVariableProvider}:null},putCachedTemplateJson:function(t,o,a){this._templatesCache[t+";"+a.reportID]={modified:a.modified,templateJsonInfo:{templateJson:e.clone(o.templateJson),templateVariableProvider:o.templateVariableProvider}}}};return{getTemplateJsonByID:function(e,d){var c=this,u=new t;return o(r.getCustomReportByID(e),function(t){if(!t)return void u.reject("Can't find a report");var r=d&&p.getCachedTemplateJson(e.countryID,t);if(r)return void u.resolve(r);var m,v=[c._loadCustomReportData(t)];return"US"!==e.countryID&&"CA"!==e.countryID&&(m=!0,v.push(n.loadVariables({countryID:e.countryID,hierarchy:t.hierarchy,outFields:["description"]}))),a(v).then(function(a){var r=new i;return o(l.provideEditorJson(t,{variableProvider:r}),function(){var o=t.templateJson;if(m){var n=a[1].idToVariableCache,l=a[1].fullNameToVariableCache;s.processTemplateFieldInfos(o,function(e){if(e.hasVariable&&e.variableID){var t=l[e.fullName]||n[e.variableID];e.alias=t&&t.description||e.alias,(!t||!t.description)&&console.log("Can't find variable with ID: "+e.variableID)}})}t.portalJson=null,t.templateJson=null;var i={templateJson:o,templateVariableProvider:r};d&&p.putCachedTemplateJson(e.countryID,i,t),u.resolve(i)})})},u.reject),u.promise},_loadCustomReportData:function(e){return e.portalJson=null,e.templateData.getFiles().then(function(t){e.portalJson={files:t}})}}});