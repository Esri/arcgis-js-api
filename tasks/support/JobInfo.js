// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators","./GPMessage"],(function(e,o,t,r,s,i,b){var d=new r.default({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});return function(e){function o(o){var t=e.call(this,o)||this;return t.jobId=null,t.jobStatus=null,t.messages=null,t}return t.__extends(o,e),t.__decorate([i.property()],o.prototype,"jobId",void 0),t.__decorate([i.property({json:{read:d.read}})],o.prototype,"jobStatus",void 0),t.__decorate([i.property({type:[b]})],o.prototype,"messages",void 0),o=t.__decorate([i.subclass("esri.tasks.support.JobInfo")],o)}(s.JSONSupport)}));