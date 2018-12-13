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

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/when","esri/kernel","./PortalManager","./ReportTemplateData","./StandardGraphicReportTemplates","esri/dijit/geoenrichment/utils/PortalQueryUtil","../../_devConfig"],function(r,e,t,o,n,i,a,u,p,s){var c=r(null,{cache:null,constructor:function(){this.cache={}}}),l={TEMPLATE_TYPE:"Report Template",PLAYER_STANDARD_INFOGRAPHIC_TYPEKEYWORD:"esriReportPlayerStandardInfographic",_reportsCache:null,resetCache:function(){this._reportsCache=new c},getCustomReports:function(r){var e=this;return o(i.getPortalInfo(r.portalUrl),function(t){var o=t.user.username,n={num:1e3,start:1,q:p.combineQueryString({type:"Report Template",typeKeywords:r.typeKeywords,owner:!r.publicOnly&&o}),sortField:"modified",sortOrder:"desc"};return t.portal.queryItems(n).then(function(o){var n=o.results.map(function(r){return e._prepareCustomReportFromItem(r,t.portal)});return e._getCountryReports(n,r.countryID)})})},_getCountryReports:function(r,e){return r&&r.filter(function(r){return!r.countries||r.countries.split(",").some(function(r){return e===r.trim()})})},_prepareCustomReportFromItem:function(r,t){var o=e.mixin({},r.properties||r.details);o.isGraphicReport="true"===o.isGraphicReport,o.isMultiFeature="true"===o.isMultiFeature,o.reportID=r.id;var n={title:r.title,templateData:new a(r,t),modified:r.modified.getTime()};return e.mixin(n,o),n},getCustomReportByID:function(r){var e=this,n=this._reportsCache.cache[r.reportID];return n||(this._reportsCache.cache[r.reportID]=o(i.getPortalInfo(r.portalUrl),function(t){return t.user.getItem(r.reportID).then(function(r){return r&&e._prepareCustomReportFromItem(r,t.portal)})}).otherwise(function(o){return delete e._reportsCache.cache[r.reportID],r.ignoreError?null:(new t).reject(o)}))},tryFindReportIdByAlias:function(r){var e=this,t=u.aliasToID(r.countryID,r.reportID);return t?o(this.getCustomReportByID({reportID:t,portalUrl:r.portalUrl,ignoreError:!0}),function(t){return t?t.reportID:o(e.getCustomReports({portalUrl:r.portalUrl,countryID:r.countryID,typeKeywords:"esriReportPlayerStandardInfographic",publicOnly:!0},!0),function(e){function t(r,e){var t=r.split("."),o=e.split(".");return!(Number(t[0])<Number(o[0]))&&Number(t[1])>=Number(o[1])}var o=e.filter(function(e){return e.playerAlias===r.reportID&&t(s.jsapiVersion||n.version,e.jsapiVersion)})[0];return o&&o.reportID})}):null},itemUpdated:function(r){delete this._reportsCache.cache[r]},getFakeCustomReportByContext:function(r){return{title:"Generic template",type:"esriReportTemplateStandard",coverage:r.countryID,countries:r.countryID,hierarchy:r.hierarchy||"census",isGraphicReport:!0,isMultiFeature:!1,reportID:null}}};return l.resetCache(),l});