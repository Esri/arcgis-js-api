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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/has","dojo/_base/lang","../../kernel"],function(t,s,e,i){var a=t(null,{declaredClass:"esri.tasks.datareviewer.BatchValidationJobInfo",status:null,messages:null,gpJobId:null,gpUrl:null,startTimeUTC:void 0,finishTimeUTC:void 0,batchRunId:null,constructor:function(t){t&&!t.error&&(this.gpJobId=t.gpJobId,this.messages=t.messages,this.gpUrl=t.gpUrl,this.status=t.status,this.batchRunId=t.batchRunId,void 0!==t.startTimeUtc&&null!==t.startTimeUtc&&(this.startTimeUTC=new Date(t.startTimeUtc)),void 0!==t.finishTimeUtc&&null!==t.finishTimeUtc&&(this.finishTimeUTC=new Date(t.finishTimeUtc)))}});return s("extend-esri")&&e.setObject("tasks.datareviewer.BatchValidationJobInfo",a,i),a});