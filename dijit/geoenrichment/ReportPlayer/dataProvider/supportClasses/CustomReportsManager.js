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

define(["dojo/_base/declare","dojo/_base/lang","dojo/when","./PortalManager","./ReportTemplateData"],function(e,r,t,o,n){var s=e(null,{allUserReports:null,cache:null,constructor:function(){this.cache={}}}),a={_reportsCache:null,resetCache:function(){this._reportsCache=new s},getCustomReports:function(e,r){var n=this;return r&&(this._reportsCache.allUserReports=null),this._reportsCache.allUserReports?this._getCountryReports(this._reportsCache.allUserReports,e):t(o.getPortalInfo(e),function(r){var t=r.user.username,o={num:1e3,start:1,q:'type:"Report Template" owner:'+t+' typekeywords:"esriWebReport"',sortField:"modified",sortOrder:"desc"};return r.portal.queryItems(o).then(function(t){return n._reportsCache.allUserReports=t.results.map(function(e){return n._prepareCustomReportFromItem(e,r.portal)}),n._getCountryReports(n._reportsCache.allUserReports,e)})})},_getCountryReports:function(e,r){return e&&e.filter(function(e){return!e.countries||e.countries.split(",").some(function(e){return r.countryID===e.trim()})})},_prepareCustomReportFromItem:function(e,t){var o=r.mixin({},e.properties||e.details);o.isGraphicReport=!!o.isGraphicReport,o.reportID=e.id;var s={title:e.title,templateData:new n(e,t),modified:e.modified.getTime()};return r.mixin(s,o),s},getCustomReportByID:function(e){var r=this,n=this._reportsCache.cache[e.reportID];return n||(n=t(o.getPortalInfo(e),function(t){return t.user.getItem(e.reportID).then(function(e){return r._prepareCustomReportFromItem(e,t.portal)})}),this._reportsCache.cache[e.reportID]=n,n)}};return a.resetCache(),a});