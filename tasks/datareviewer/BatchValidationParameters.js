// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/declare","dojo/json","dojo/has","dojo/_base/lang","../../kernel"],function(e,t,a,i,n){var s=e(null,{declaredClass:"esri.tasks.datareviewer.BatchValidationParameters",createdBy:null,title:null,sessionString:"",fileItemId:null,batchJobFileName:null,userName:null,changedFeaturesOnly:null,analysisArea:null,productionWorkspace:null,productionWorkspaceVersion:null,cronExpression:null,executionsEndDate:null,maxNumberOfExecutions:null,constructor:function(){},toJSONExecuteParameters:function(){var e={batchValidationSettings:this._toJSONBVSettingsParameter(),batchValidationJobTitle:this.title,batchValidationJobCreatedBy:this.createdBy,f:"json"};return e},toJSONScheduleParameters:function(){var e={batchValidationSettings:this._toJSONBVSettingsParameter(),schedule:this._toJSONBVScheduleParameter(),batchValidationJobTitle:this.title,batchValidationJobCreatedBy:this.createdBy,f:"json"};return e},toJSONEditParameters:function(){var e={batchValidationSettings:this._toJSONBVSettingsParameter(),schedule:this._toJSONBVScheduleParameter(),batchValidationJobTitle:this.title,batchValidationJobCreatedBy:this.createdBy,f:"json"};return e},_toJSONBVSettingsParameter:function(){var e;return e=null!==this.analysisArea?{batchJobFileItemId:this.fileItemId,sessionId:this.sessionString,productionWorkspace:this.productionWorkspace,productionWorkspaceVersion:this.productionWorkspaceVersion,changedFeaturesOnly:this.changedFeaturesOnly,analysisArea:this.analysisArea}:{batchJobFileItemId:this.fileItemId,sessionId:this.sessionString,productionWorkspace:this.productionWorkspace,productionWorkspaceVersion:this.productionWorkspaceVersion,changedFeaturesOnly:this.changedFeaturesOnly},t.stringify(e)},_toJSONBVScheduleParameter:function(){var e={cronExpression:this.cronExpression,endDate:this.executionEndDate,maxNumberOfExecutions:this.maxNumberOfExecutions};return t.stringify(e)}});return a("extend-esri")&&i.setObject("tasks.datareviewer.BatchValidationParameters",s,n),s});