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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./PortalManager","./ReportTemplateData","./StandardGraphicReportTemplates","esri/dijit/geoenrichment/utils/CacheUtil","esri/dijit/geoenrichment/utils/PortalUtil","esri/dijit/geoenrichment/utils/PortalQueryUtil","esri/dijit/geoenrichment/utils/UrlUtil","../../config","../../countryConfig"],(function(r,e,t,o,i,n,a,u,p,s,c,l){var m={TEMPLATE_TYPE:"Report Template",PLAYER_STANDARD_INFOGRAPHIC_TYPEKEYWORD:"esriReportPlayerStandardInfographic",GALLERY_INFOGRAPHIC_TYPEKEYWORD:"esriWebGalleryInfographicReport",MOBILE_INFOGRAPHIC_TYPEKEYWORD:"esriMobileFactsInfographicReport",GALLERY_INFOGRAPHIC_USER:"esri_reports",resetCache:function(){a.set("CustomReportsManager",{})},_getCache:function(){return a.get("CustomReportsManager")},getCustomReports:function(r){var e=this,i=s.getPortalUrl(r.portalUrl);return t(o.getPortalInfo(i),(function(t){var o=t.user.username,n={q:p.combineQueryString({type:"Report Template",typeKeywords:r.typeKeywords,owner:!r.publicOnly&&o}),sortField:"modified",sortOrder:"desc"};return u.queryCommon(s.combine(i,"sharing/rest/search"),n).then((function(o){var i=o.map((function(o){return e.prepareCustomReportFromItem(o,t.portal.url,r)}));return e._getCountryReports(i,r.countryID)}))}))},_getCountryReports:function(r,e){return r&&("*"===e?r:r.filter((function(r){return!r.countries||r.countries.split(",").some((function(r){return e===r.trim()}))})))},prepareCustomReportFromItem:function(e,t,o){var n=r.mixin({},e.properties||e.details);function a(r){return"string"==typeof r?"true"===r:!!r}n.isGraphicReport=a(n.isGraphicReport),n.isMultiFeature=a(n.isMultiFeature),n.reportID=e.id;var u={title:e.title,templateData:t&&new i(e,t),modified:e.modified instanceof Date?e.modified.getTime():e.modified};return o&&o.attachItemProperty&&(u[o.attachItemProperty]=e),r.mixin(u,n),u},getCustomReportByID:function(r){var i=this,n=this._getCache()[r.reportID];if(n)return n;var a=s.getPortalUrl(r.portalUrl);return this._getCache()[r.reportID]=t(o.getPortalInfo(a),(function(e){return e.user.getItem(r.reportID).then((function(t){return t&&i.prepareCustomReportFromItem(t,e.portal.url,r)}))})).otherwise((function(t){return delete i._getCache()[r.reportID],r.ignoreError?null:(new e).reject(t)}))},tryFindReportIdByAlias:function(r){var e=this,o=n.aliasToID(r.countryID,r.reportID);if(!o)return null;var i=s.getPortalUrl(r.portalUrl);return t(this.getCustomReportByID({reportID:o,portalUrl:i,ignoreError:!0,attachItemProperty:r.attachItemProperty}),(function(o){function n(e){return e&&(r.returnObject?e:e.reportID)}return o?n(o):t(e.getCustomReports({portalUrl:i,countryID:r.countryID,typeKeywords:"esriReportPlayerStandardInfographic",publicOnly:!0,attachItemProperty:r.attachItemProperty}),(function(e){function t(r){var e=r.split(".");return Number((Number(e[0])+Number(e[1])/100).toFixed(2))}var o,i,a=t(c.jsapiVersion),u=-1/0,p=1/0;e.forEach((function(e){if(e.playerAlias===r.reportID){var n=t(e.jsapiVersion);a>=n&&n>u&&(u=n,o=e),a<n&&n<p&&(p=n,i=e)}}));var s=o||i;return r.strictVersionCheck&&s&&s.jsapiVersion!==c.jsapiVersion&&(s=null),n(s)}))}))},itemUpdated:function(r){delete this._getCache()[r]},getFakeCustomReportByContext:function(r){return{title:"Generic template",type:"esriReportTemplateStandard",coverage:r.countryID,countries:r.countryID,hierarchy:r.hierarchy||l.getHierarchyID(),isGraphicReport:!0,isMultiFeature:!1,reportID:null}}};return m.resetCache(),m}));