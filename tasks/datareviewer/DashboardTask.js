// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/Deferred","dojo/has","./_DRSBaseTask","./DashboardResult","./ReviewerFilters","../../kernel","../../request"],function(e,r,a,s,t,o,n,i,l,d){var h=e(o,{declaredClass:"esri.tasks.datareviewer.DashboardTask",constructor:function(){this.onGetDashboardResultsComplete=a.hitch(this,this.onGetDashboardResultsComplete),this.onGetDashboardFieldNamesComplete=a.hitch(this,this.onGetDashboardFieldNamesComplete)},getDashboardResults:function(e,t){var o,l,h=this._successHandler,c=this._errorHandler,u=this._appendQueryParams,f=new s;null===t||void 0===t?(l=this._url+"/Dashboard/reviewerResultsBy/"+e,o={f:"json"}):(l=this._url+"/Dashboard/reviewerResultsBy/"+e+"/filter",o={f:"json",filtersArray:t.toJSON()}),l=u(l);var b=d({callbackParamName:"callback",url:l,content:o});return b.then(a.hitch(this,function(e){if(void 0!==e.error){var a=new Error;return a.message=e.error.message,a.code=e.error.code,void c(a,f)}try{if(void 0===e.dashboardResults)c(null,f);else{var s=new n;r.forEach(e.dashboardResults,function(e){s.fieldValues.push(e.fieldValue),s.counts.push(e.count)}),s.fieldName=e.fieldName;var t=new i;t.createFromJsonObject(e),s.filters=t,h({dashboardResult:s},"onGetDashboardResultsComplete",f)}}catch(o){c(o,f)}}),function(e){c(e,f)}),f},getDashboardFieldNames:function(){var e=this._successHandler,t=this._errorHandler,o=this._appendQueryParams,n=this._url+"/Dashboard";n=o(n);var i=new s,l=d({callbackParamName:"callback",url:n,content:{f:"json"}});return l.then(a.hitch(this,function(a){if(void 0!==a.error){var s=new Error;return s.message=a.error.message,s.code=a.error.code,void t(s,i)}try{var o=[];r.forEach(a.reviewerResultsBy,function(e){o.push(e.name)}),e({fieldNames:o},"onGetDashboardFieldNamesComplete",i)}catch(n){t(n,i)}}),function(e){t(e,i)}),i},onGetDashboardResultsComplete:function(){},onGetDashboardFieldNamesComplete:function(){}});return t("extend-esri")&&a.setObject("tasks.datareviewer.DashboardTask",h,l),h});