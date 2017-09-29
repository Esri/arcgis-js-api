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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/when","esri/arcgis/Portal","./ReportTemplateData"],function(r,t,e,o,n){var s=r(null,{allUserReports:null,cache:null,constructor:function(){this.cache={}}});return{_reportsCache:null,constructor:function(){this.resetCache()},resetCache:function(){this._reportsCache=new s},_portal:null,_user:null,_getPortal:function(r){var t=this;if(this._portal&&this._portal.url==r.portalUrl)return this._portal;var n=new o.Portal(r.portalUrl);return e(n.signIn(),function(r){return t._user=r,t._portal=n,n})},getCustomReports:function(r,t){var o=this;return t&&(this._reportsCache.allUserReports=null),this._reportsCache.allUserReports?this._getCountryReports(this._reportsCache.allUserReports,r):e(this._getPortal(r),function(){var t=o._user.username,e={num:1e3,start:1,q:'type:"Report Template" owner:'+t+' typekeywords:"esriWebReport"',sortField:"modified",sortOrder:"desc"};return o._portal.queryItems(e).then(function(t){return o._reportsCache.allUserReports=t.results.map(function(r){return o._prepareCustomReportFromItem(r,o._portal)}),o._getCountryReports(o._reportsCache.allUserReports,r)})})},_getCountryReports:function(r,t){return r&&r.filter(function(r){return!r.countries||r.countries.split(",").some(function(r){return t.countryID==r.trim()})})},_prepareCustomReportFromItem:function(r,e){var o=t.mixin({},r.properties||r.details);o.isGraphicReport=!!o.isGraphicReport,o.reportID=r.id;var s={title:r.title,templateData:new n(r,e),modified:r.modified.getTime()};return t.mixin(s,o),s},getCustomReportByID:function(r){var t=this,o=this._reportsCache.cache[r.reportID];return o?o:(o=e(this._getPortal(r),function(){return t._user.getItem(r.reportID).then(function(r){return t._prepareCustomReportFromItem(r,t._portal)})}),this._reportsCache.cache[r.reportID]=o,o)}}});