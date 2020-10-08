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

define(["dojo/_base/declare","./BatchValidationParameters","./BatchValidationJobInfo","dojo/has","dojo/_base/lang","../../kernel"],(function(e,t,s,a,i,n){var r=e(null,{declaredClass:"esri.tasks.datareviewer.BatchValidationJob",creationDate:void 0,jobId:null,status:null,type:null,parameters:null,jobInfo:null,batchRunIds:[],constructor:function(e){if(void 0!==e&&!0!==e.hasOwnProperty("error")&&null!==e){if(void 0!==e.creationDate&&null!==e.creationDate){var a=new Date(e.creationDate);this.creationDate=a}if(this.jobId=e.jobId,this.status=e.status,this.parameters=new t,void 0!==e.schedule&&null!==e.schedule){if(this.parameters.cronExpression=e.schedule.cronExpression,void 0!==e.schedule.endDate&&null!==e.schedule.endDate){var i=new Date(e.schedule.endDate);this.parameters.executionEndDate=i}this.parameters.maxNumberOfExecutions=e.schedule.maxNumberOfExecutions}void 0!==e.settings&&null!==e.settings&&(this.parameters.analysisArea=e.settings.analysisArea,this.parameters.fileName=e.settings.batchJobFileName,this.parameters.productionWorkspace=e.settings.productionWorkspace,this.parameters.sessionString=e.settings.sessionId,this.parameters.changedFeaturesOnly=e.settings.changedFeaturesOnly,this.parameters.batchJobFileName=e.settings.batchJobFileName),this.parameters.createdBy=e.createdBy,this.parameters.title=e.title,this.parameters.cronExpression&&this.parameters.cronExpression.length>0?this.type="scheduled":this.type="adhoc",void 0!==e.executionDetails&&null!==e.executionDetails&&(this.jobInfo=new s(e.executionDetails)),e.batchRunIds&&(this.batchRunIds=e.batchRunIds)}}});return a("extend-esri")&&i.setObject("tasks.datareviewer.BatchValidationJob",r,n),r}));