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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/Deferred","dojo/has","./_DRSBaseTask","./DashboardResult","./ReviewerFilters","../../kernel","../../request"],function(e,r,a,s,t,o,n,i,l,d){var h=e(o,{declaredClass:"esri.tasks.datareviewer.DashboardTask",constructor:function(e){this.onGetDashboardResultsComplete=a.hitch(this,this.onGetDashboardResultsComplete),this.onGetDashboardFieldNamesComplete=a.hitch(this,this.onGetDashboardFieldNamesComplete)},getDashboardResults:function(e,t){var o,l,h=this._successHandler,c=this._errorHandler,u=this._appendQueryParams,f=new s;null===t||void 0===t?(l=this._url+"/Dashboard/reviewerResultsBy/"+e,o={f:"json"}):(l=this._url+"/Dashboard/reviewerResultsBy/"+e+"/filter",o={f:"json",filtersArray:t.toJSON()}),l=u(l);var b=d({callbackParamName:"callback",url:l,content:o});return b.then(a.hitch(this,function(e,a){if(void 0!==e.error){var s=new Error;return s.message=e.error.message,s.code=e.error.code,void c(s,f)}try{if(void 0===e.dashboardResults)c(null,f);else{var t=new n;r.forEach(e.dashboardResults,function(e,r){t.fieldValues.push(e.fieldValue),t.counts.push(e.count)}),t.fieldName=e.fieldName;var o=new i;o.createFromJsonObject(e),t.filters=o,h({dashboardResult:t},"onGetDashboardResultsComplete",f)}}catch(l){c(l,f)}}),function(e,r){c(e,f)}),f},getDashboardFieldNames:function(){var e=this._successHandler,t=this._errorHandler,o=this._appendQueryParams,n=this._url+"/Dashboard";n=o(n);var i=new s,l=d({callbackParamName:"callback",url:n,content:{f:"json"}});return l.then(a.hitch(this,function(a,s){if(void 0!==a.error){var o=new Error;return o.message=a.error.message,o.code=a.error.code,void t(o,i)}try{var n=[];r.forEach(a.reviewerResultsBy,function(e,r){n.push(e.name)}),e({fieldNames:n},"onGetDashboardFieldNamesComplete",i)}catch(l){t(l,i)}}),function(e,r){t(e,i)}),i},onGetDashboardResultsComplete:function(e){},onGetDashboardFieldNamesComplete:function(e){}});return t("extend-esri")&&a.setObject("tasks.datareviewer.DashboardTask",h,l),h});