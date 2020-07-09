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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./PortalManager","./ReportTemplateData","./StandardGraphicReportTemplates","esri/dijit/geoenrichment/utils/PortalUtil","esri/dijit/geoenrichment/utils/PortalQueryUtil","esri/dijit/geoenrichment/utils/UrlUtil","../../config","../../countryConfig"],(function(r,e,t,o,i,n,a,u,c,p,s,l){var h=r(null,{cache:null,constructor:function(){this.cache={}}}),m={TEMPLATE_TYPE:"Report Template",PLAYER_STANDARD_INFOGRAPHIC_TYPEKEYWORD:"esriReportPlayerStandardInfographic",GALLERY_INFOGRAPHIC_TYPEKEYWORD:"esriWebGalleryInfographicReport",MOBILE_INFOGRAPHIC_TYPEKEYWORD:"esriMobileFactsInfographicReport",GALLERY_INFOGRAPHIC_USER:"esri_reports",_reportsCache:null,resetCache:function(){this._reportsCache=new h},getCustomReports:function(r){var e=this,t=p.getPortalUrl(r.portalUrl);return o(i.getPortalInfo(t),(function(o){var i=o.user.username,n={q:c.combineQueryString({type:"Report Template",typeKeywords:r.typeKeywords,owner:!r.publicOnly&&i}),sortField:"modified",sortOrder:"desc"};return u.queryCommon(p.combine(t,"sharing/rest/search"),n).then((function(t){var i=t.map((function(t){return e.prepareCustomReportFromItem(t,o.portal.url,r)}));return e._getCountryReports(i,r.countryID)}))}))},_getCountryReports:function(r,e){return r&&("*"===e?r:r.filter((function(r){return!r.countries||r.countries.split(",").some((function(r){return e===r.trim()}))})))},prepareCustomReportFromItem:function(r,t,o){var i=e.mixin({},r.properties||r.details);function a(r){return"string"==typeof r?"true"===r:!!r}i.isGraphicReport=a(i.isGraphicReport),i.isMultiFeature=a(i.isMultiFeature),i.reportID=r.id;var u={title:r.title,templateData:t&&new n(r,t),modified:r.modified instanceof Date?r.modified.getTime():r.modified};return o&&o.attachItemProperty&&(u[o.attachItemProperty]=r),e.mixin(u,i),u},getCustomReportByID:function(r){var e=this,n=this._reportsCache.cache[r.reportID];if(n)return n;var a=p.getPortalUrl(r.portalUrl);return this._reportsCache.cache[r.reportID]=o(i.getPortalInfo(a),(function(t){return t.user.getItem(r.reportID).then((function(o){return o&&e.prepareCustomReportFromItem(o,t.portal.url,r)}))})).otherwise((function(o){return delete e._reportsCache.cache[r.reportID],r.ignoreError?null:(new t).reject(o)}))},tryFindReportIdByAlias:function(r){var e=this,t=a.aliasToID(r.countryID,r.reportID);if(!t)return null;var i=p.getPortalUrl(r.portalUrl);return o(this.getCustomReportByID({reportID:t,portalUrl:i,ignoreError:!0,attachItemProperty:r.attachItemProperty}),(function(t){function n(e){return e&&(r.returnObject?e:e.reportID)}return t?n(t):o(e.getCustomReports({portalUrl:i,countryID:r.countryID,typeKeywords:"esriReportPlayerStandardInfographic",publicOnly:!0,attachItemProperty:r.attachItemProperty}),(function(e){function t(r){var e=r.split(".");return Number((Number(e[0])+Number(e[1])/100).toFixed(2))}var o,i,a=t(s.jsapiVersion),u=-1/0,c=1/0;e.forEach((function(e){if(e.playerAlias===r.reportID){var n=t(e.jsapiVersion);a>=n&&n>u&&(u=n,o=e),a<n&&n<c&&(c=n,i=e)}}));var p=o||i;return r.strictVersionCheck&&p&&p.jsapiVersion!==s.jsapiVersion&&(p=null),n(p)}))}))},itemUpdated:function(r){delete this._reportsCache.cache[r]},getFakeCustomReportByContext:function(r){return{title:"Generic template",type:"esriReportTemplateStandard",coverage:r.countryID,countries:r.countryID,hierarchy:r.hierarchy||l.getHierarchyID(),isGraphicReport:!0,isMultiFeature:!1,reportID:null}}};return m.resetCache(),m}));