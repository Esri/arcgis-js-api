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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./PortalManager","./ReportTemplateData","./StandardGraphicReportTemplates","esri/dijit/geoenrichment/utils/PortalUtil","esri/dijit/geoenrichment/utils/PortalQueryUtil","esri/dijit/geoenrichment/utils/UrlUtil","../../config"],function(e,r,t,o,i,n,a,u,p,s,c){var l=e(null,{cache:null,constructor:function(){this.cache={}}}),m={TEMPLATE_TYPE:"Report Template",PLAYER_STANDARD_INFOGRAPHIC_TYPEKEYWORD:"esriReportPlayerStandardInfographic",_reportsCache:null,resetCache:function(){this._reportsCache=new l},getCustomReports:function(e){var r=this;return o(i.getPortalInfo(e.portalUrl),function(t){var o=t.user.username,i={q:p.combineQueryString({type:"Report Template",typeKeywords:e.typeKeywords,owner:!e.publicOnly&&o}),sortField:"modified",sortOrder:"desc"};return u.queryCommon(s.combine(e.portalUrl,"sharing/rest/search"),i).then(function(o){var i=o.map(function(e){return r._prepareCustomReportFromItem(e,t.portal)});return r._getCountryReports(i,e.countryID)})})},_getCountryReports:function(e,r){return e&&e.filter(function(e){return!e.countries||e.countries.split(",").some(function(e){return r===e.trim()})})},_prepareCustomReportFromItem:function(e,t){var o=r.mixin({},e.properties||e.details);o.isGraphicReport="true"===o.isGraphicReport,o.isMultiFeature="true"===o.isMultiFeature,o.reportID=e.id;var i={title:e.title,templateData:new n(e,t.url),modified:e.modified instanceof Date?e.modified.getTime():e.modified};return r.mixin(i,o),i},getCustomReportByID:function(e){var r=this,n=this._reportsCache.cache[e.reportID];return n||(this._reportsCache.cache[e.reportID]=o(i.getPortalInfo(e.portalUrl),function(t){return t.user.getItem(e.reportID).then(function(e){return e&&r._prepareCustomReportFromItem(e,t.portal)})}).otherwise(function(o){return delete r._reportsCache.cache[e.reportID],e.ignoreError?null:(new t).reject(o)}))},tryFindReportIdByAlias:function(e){var r=this,t=a.aliasToID(e.countryID,e.reportID);return t?o(this.getCustomReportByID({reportID:t,portalUrl:e.portalUrl,ignoreError:!0}),function(t){return t?t.reportID:o(r.getCustomReports({portalUrl:e.portalUrl,countryID:e.countryID,typeKeywords:"esriReportPlayerStandardInfographic",publicOnly:!0},!0),function(r){function t(e){var r=e.split(".");return Number((Number(r[0])+Number(r[1])/100).toFixed(2))}var o,i=t(c.jsapiVersion),n=-1/0;return r.forEach(function(r){if(r.playerAlias===e.reportID){var a=t(r.jsapiVersion);i>=a&&a>n&&(n=a,o=r)}}),o&&o.reportID})}):null},itemUpdated:function(e){delete this._reportsCache.cache[e]},getFakeCustomReportByContext:function(e){return{title:"Generic template",type:"esriReportTemplateStandard",coverage:e.countryID,countries:e.countryID,hierarchy:e.hierarchy||"census",isGraphicReport:!0,isMultiFeature:!1,reportID:null}}};return m.resetCache(),m});