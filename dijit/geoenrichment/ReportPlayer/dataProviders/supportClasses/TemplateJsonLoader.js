// COPYRIGHT © 2017 Esri
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

define(["dojo/_base/lang","dojo/Deferred","dojo/when","./CustomReportsManager","../../core/conversion/PortalToEditorConverter"],function(e,t,o,n,r){var a={_templatesCache:{},getCachedTemplateJson:function(t){var o=this._templatesCache[t.reportID];return o&&o.modified===t.modified?e.clone(o.templateJson):null},putCachedTemplateJson:function(t,o){this._templatesCache[o.reportID]={modified:o.modified,templateJson:e.clone(t)}}};return{getTemplateJsonByID:function(e,l){var i=this,s=new t;return o(n.getCustomReportByID(e),function(e){if(!e)return void s.reject("Can't find a report");var t=l&&a.getCachedTemplateJson(e);return t?void s.resolve(t):o(i._loadCustomReportData(e),function(){return o(r.provideEditorJson(e),function(){var t=e.templateJson;e.portalJson=null,e.templateJson=null,l&&a.putCachedTemplateJson(t,e),s.resolve(t)})})},s.reject),s.promise},_loadCustomReportData:function(e){return e.portalJson=null,e.templateData.getFiles().then(function(t){e.portalJson={files:t}})}}});