// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["../../request","../../core/lang","./WMBaseTask","./support/Enum","./support/Util"],function(e,t,r,s,n){var i=(new s,new n);return r.createSubclass({declaredClass:"esri.tasks.workflow.ReportTask",properties:{url:{},timeZoneOffset:0},getAllReports:function(r){var s=this.parsedUrl.path+"/reports",n=this._encode(t.mixin({},this.parsedUrl.query,{f:"json"})),i=this._generateOptions(n,r);return e(s,i).then(function(e){return e.data.reports})},getReportData:function(r,s){var n=this.parsedUrl.path+"/reports/"+r.reportId+"/data",o={user:i._formatDomainUsername(r.user),f:"json"};0!=this.timeZoneOffset&&(o.timeZoneOffset=this.timeZoneOffset);var a=this._encode(t.mixin({},this.parsedUrl.query,o)),f=this._generateOptions(a,s);return e(n,f).then(function(e){return e.data.reportData})},getReportStylesheet:function(r,s){var n=this.parsedUrl.path+"/reports/"+r+"/stylesheet",i=this._encode(t.mixin({},this.parsedUrl.query,{f:"json"})),o=this._generateOptions(i,s);return e(n,o).then(function(e){return e.data.stylesheet})},generateReport:function(r,s){var n=this.parsedUrl.path+"/reports/"+r.reportId+"/generate",o={user:i._formatDomainUsername(r.user),f:"json"};0!=this.timeZoneOffset&&(o.timeZoneOffset=this.timeZoneOffset);var a=this._encode(t.mixin({},this.parsedUrl.query,o)),f=this._generateOptions(a,s);return e(n,f).then(function(e){return e.data.reportContent})},getReportContentUrl:function(e){var t=this.parsedUrl.path+"/reports/"+e.reportId+"/generate?f=file";if(e.user&&(t+="&user="+i._formatDomainUsername(e.user)),0!=this.timeZoneOffset&&(t+="&timeZoneOffset="+this.timeZoneOffset),this.requestOptions&&this.requestOptions.query){var r=this.requestOptions.query,s=Object.keys(r).map(function(e){return e+"="+r[e]}).join("&");s&&(t+="&"+s)}return t},useLocalTimeZoneOffset:function(){this.timeZoneOffset=-(new Date).getTimezoneOffset()}})});