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

define(["dojo/_base/lang","dojo/Deferred","dojo/when","./CustomReportsManager","../../core/conversion/PortalToEditorConverter","../../core/conversion/portalToEditorUtils/variables/PlayerVariableProvider"],function(e,t,o,r,a,n){var l={_templatesCache:{},getCachedTemplateJson:function(t){var o=this._templatesCache[t.reportID];return o&&o.modified===t.modified?{templateJson:e.clone(o.templateJsonInfo.templateJson),templateVariableProvider:o.templateJsonInfo.templateVariableProvider}:null},putCachedTemplateJson:function(t,o){this._templatesCache[o.reportID]={modified:o.modified,templateJsonInfo:{templateJson:e.clone(t.templateJson),templateVariableProvider:t.templateVariableProvider}}}};return{getTemplateJsonByID:function(e,i){var s=this,p=new t;return o(r.getCustomReportByID(e),function(e){if(!e)return void p.reject("Can't find a report");var t=i&&l.getCachedTemplateJson(e);return t?void p.resolve(t):o(s._loadCustomReportData(e),function(){var t=new n;return o(a.provideEditorJson(e,{variableProvider:t}),function(){var o=e.templateJson;e.portalJson=null,e.templateJson=null;var r={templateJson:o,templateVariableProvider:t};i&&l.putCachedTemplateJson(r,e),p.resolve(r)})})},p.reject),p.promise},_loadCustomReportData:function(e){return e.portalJson=null,e.templateData.getFiles().then(function(t){e.portalJson={files:t}})}}});