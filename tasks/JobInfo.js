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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","./GPMessage"],function(e,s,i,T,o){var S=e(null,{declaredClass:"esri.tasks.JobInfo",constructor:function(e){this.messages=[],s.mixin(this,e);var i,T=this.messages,S=T.length;for(i=0;i<S;i++)T[i]=new o(T[i])},jobId:"",jobStatus:""});return s.mixin(S,{STATUS_CANCELLED:"esriJobCancelled",STATUS_CANCELLING:"esriJobCancelling",STATUS_DELETED:"esriJobDeleted",STATUS_DELETING:"esriJobDeleting",STATUS_EXECUTING:"esriJobExecuting",STATUS_FAILED:"esriJobFailed",STATUS_NEW:"esriJobNew",STATUS_SUBMITTED:"esriJobSubmitted",STATUS_SUCCEEDED:"esriJobSucceeded",STATUS_TIMED_OUT:"esriJobTimedOut",STATUS_WAITING:"esriJobWaiting"}),i("extend-esri")&&s.setObject("tasks.JobInfo",S,T),S});