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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./PortalManager","./ReportTemplateData","./StandardGraphicReportTemplates","esri/dijit/geoenrichment/utils/PortalUtil","esri/dijit/geoenrichment/utils/PortalQueryUtil","esri/dijit/geoenrichment/utils/UrlUtil","../../config"],function(r,e,t,o,i,n,a,u,p,s,c){var l=r(null,{cache:null,constructor:function(){this.cache={}}}),m={TEMPLATE_TYPE:"Report Template",PLAYER_STANDARD_INFOGRAPHIC_TYPEKEYWORD:"esriReportPlayerStandardInfographic",_reportsCache:null,resetCache:function(){this._reportsCache=new l},getCustomReports:function(r){var e=this,t=s.getPortalUrl(r.portalUrl);return o(i.getPortalInfo(t),function(o){var i=o.user.username,n={q:p.combineQueryString({type:"Report Template",typeKeywords:r.typeKeywords,owner:!r.publicOnly&&i}),sortField:"modified",sortOrder:"desc"};return u.queryCommon(s.combine(t,"sharing/rest/search"),n).then(function(t){var i=t.map(function(r){return e.prepareCustomReportFromItem(r,o.portal.url)});return e._getCountryReports(i,r.countryID)})})},_getCountryReports:function(r,e){return r&&r.filter(function(r){return!r.countries||r.countries.split(",").some(function(r){return e===r.trim()})})},prepareCustomReportFromItem:function(r,t){var o=e.mixin({},r.properties||r.details);o.isGraphicReport="true"===o.isGraphicReport,o.isMultiFeature="true"===o.isMultiFeature,o.reportID=r.id;var i={title:r.title,templateData:t&&new n(r,t),modified:r.modified instanceof Date?r.modified.getTime():r.modified};return e.mixin(i,o),i},getCustomReportByID:function(r){var e=this,n=this._reportsCache.cache[r.reportID];if(n)return n;var a=s.getPortalUrl(r.portalUrl);return this._reportsCache.cache[r.reportID]=o(i.getPortalInfo(a),function(t){return t.user.getItem(r.reportID).then(function(r){return r&&e.prepareCustomReportFromItem(r,t.portal.url)})}).otherwise(function(o){return delete e._reportsCache.cache[r.reportID],r.ignoreError?null:(new t).reject(o)})},tryFindReportIdByAlias:function(r){var e=this,t=a.aliasToID(r.countryID,r.reportID);if(!t)return null;var i=s.getPortalUrl(r.portalUrl);return o(this.getCustomReportByID({reportID:t,portalUrl:i,ignoreError:!0}),function(t){return t?t.reportID:o(e.getCustomReports({portalUrl:i,countryID:r.countryID,typeKeywords:"esriReportPlayerStandardInfographic",publicOnly:!0},!0),function(e){function t(r){var e=r.split(".");return Number((Number(e[0])+Number(e[1])/100).toFixed(2))}var o,i,n=t(c.jsapiVersion),a=-1/0,u=1/0;return e.forEach(function(e){if(e.playerAlias===r.reportID){var p=t(e.jsapiVersion);n>=p&&p>a&&(a=p,o=e),n<p&&p<u&&(u=p,i=e)}}),o&&o.reportID||i&&i.reportID})})},itemUpdated:function(r){delete this._reportsCache.cache[r]},getFakeCustomReportByContext:function(r){return{title:"Generic template",type:"esriReportTemplateStandard",coverage:r.countryID,countries:r.countryID,hierarchy:r.hierarchy||"census",isGraphicReport:!0,isMultiFeature:!1,reportID:null}}};return m.resetCache(),m});