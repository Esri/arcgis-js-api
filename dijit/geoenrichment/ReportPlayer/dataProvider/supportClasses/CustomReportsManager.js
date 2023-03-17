// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./PortalManager","./ReportTemplateData","./StandardGraphicReportTemplates","esri/dijit/geoenrichment/utils/CacheUtil","esri/dijit/geoenrichment/utils/PortalUtil","esri/dijit/geoenrichment/utils/PortalQueryUtil","esri/dijit/geoenrichment/utils/UrlUtil","../../config","../../countryConfig"],(function(e,r,t,i,o,n,a,u,p,s,c,l){var m={TEMPLATE_TYPE:"Report Template",PLAYER_STANDARD_INFOGRAPHIC_TYPEKEYWORD:"esriReportPlayerStandardInfographic",STANDARD_INFOGRAPHIC_TYPEKEYWORD:"esriWebStandardInfographicReport",GALLERY_INFOGRAPHIC_TYPEKEYWORD:"esriWebGalleryInfographicReport",MOBILE_INFOGRAPHIC_TYPEKEYWORD:"esriMobileFactsInfographicReport",GALLERY_INFOGRAPHIC_USER:"esri_reports",resetCache:function(){a.set("CustomReportsManager",{})},_getCache:function(){return a.get("CustomReportsManager")},getCustomReports:function(e){var r=this,o=s.getPortalUrl(e.portalUrl);return t(i.getSignedInPortal(o),(function(t){var i=t.user.username,n={q:p.combineQueryString({type:"Report Template",typeKeywords:e.typeKeywords,owner:!e.publicOnly&&i}),sortField:"modified",sortOrder:"desc"};return u.queryCommon(s.combine(o,"sharing/rest/search"),n).then((function(t){var i=t.map((function(t){return r.prepareCustomReportFromItem(t,o,e)}));return r._getCountryReports(i,e.countryID)}))}))},_getCountryReports:function(e,r){return e&&("*"===r?e:e.filter((function(e){return!e.countries||e.countries.split(",").some((function(e){return r===e.trim()}))})))},prepareCustomReportFromItem:function(r,t,i){var n=e.mixin({},r.properties||r.details);function a(e){return"string"==typeof e?"true"===e:!!e}n.isGraphicReport=a(n.isGraphicReport),n.isMultiFeature=a(n.isMultiFeature),n.reportID=r.id;var u={title:r.title,templateData:t&&new o(r,t),modified:r.modified instanceof Date?r.modified.getTime():r.modified};return i&&i.attachItemProperty&&(u[i.attachItemProperty]=r),e.mixin(u,n),u},getCustomReportByID:function(e){var o=this,n=this._getCache()[e.reportID];if(n)return n;var a=s.getPortalUrl(e.portalUrl);return this._getCache()[e.reportID]=t(i.getSignedInPortal(a),(function(r){return r.user.getItem(e.reportID).then((function(r){return r&&o.prepareCustomReportFromItem(r,a,e)}))})).otherwise((function(t){return delete o._getCache()[e.reportID],e.ignoreError?null:(new r).reject(t)}))},tryFindReportIdByAlias:function(e){var r=this,i=n.aliasToID(e.countryID,e.reportID);if(null==i)return null;var o=s.getPortalUrl(e.portalUrl);return t(i&&this.getCustomReportByID({reportID:i,portalUrl:o,ignoreError:!0,attachItemProperty:e.attachItemProperty}),(function(i){function n(r){return r&&(e.returnObject?r:r.reportID)}return i?n(i):t(r.getCustomReports({portalUrl:o,countryID:e.countryID,typeKeywords:"esriReportPlayerStandardInfographic",publicOnly:!0,attachItemProperty:e.attachItemProperty}),(function(r){function t(e){var r=e.split(".");return Number((Number(r[0])+Number(r[1])/100).toFixed(2))}var i,o,a=t(c.jsapiVersion),u=-1/0,p=1/0;r.forEach((function(r){if(r.playerAlias===e.reportID){var n=t(r.jsapiVersion);a>=n&&n>u&&(u=n,i=r),a<n&&n<p&&(p=n,o=r)}}));var s=i||o;return e.strictVersionCheck&&s&&s.jsapiVersion!==c.jsapiVersion&&(s=null),n(s)}))}))},itemUpdated:function(e){delete this._getCache()[e]},getFakeCustomReportByContext:function(e){return{title:"Generic template",type:"esriReportTemplateStandard",coverage:e.countryID,countries:e.countryID,hierarchy:e.hierarchy||l.getHierarchyID(),isGraphicReport:!0,isMultiFeature:!1,reportID:null}}};return m.resetCache(),m}));