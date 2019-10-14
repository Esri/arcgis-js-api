// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/json","../../../geometry/Multipoint","./Enum","./Util"],function(e,o,r,t,a){var n=new t,s=new a;return e(null,{declaredClass:"esri.tasks.workflow.support.JSONUtil",_jobCreationParametersToJSON:function(e){var t={f:"json",jobTypeId:e.jobTypeId};if(e.hasOwnProperty("assignedTo")&&(t.assignedTo=s._formatDomainUsername(e.assignedTo)),e.hasOwnProperty("assignedType")&&(t.assignedType=n.jobAssignmentTypeJsonDict.toJSON(e.assignedType)),e.hasOwnProperty("autoCommitWorkflow")&&(t.autoCommitWorkflow=e.autoCommitWorkflow),e.hasOwnProperty("autoExecute")&&(t.autoExecute=e.autoExecute),e.hasOwnProperty("dataWorkspaceId")&&(t.dataWorkspaceId=e.dataWorkspaceId),e.hasOwnProperty("description")&&(t.description=e.description),e.hasOwnProperty("name")&&(t.name=e.name),e.hasOwnProperty("numJobs")&&(t.numJobs=e.numJobs),e.hasOwnProperty("ownedBy")&&(t.ownedBy=s._formatDomainUsername(e.ownedBy)),e.hasOwnProperty("parentJobId")&&(t.parentJobId=e.parentJobId),e.hasOwnProperty("parentVersion")&&(t.parentVersion=e.parentVersion),e.hasOwnProperty("priority")&&(t.priority=e.priority),e.hasOwnProperty("startDate")&&(t.startDate=e.startDate?Date.parse(e.startDate):null),e.hasOwnProperty("dueDate")&&(t.dueDate=e.dueDate?Date.parse(e.dueDate):null),e.hasOwnProperty("loi"))if(null==e.loi)t.aoi=null,t.poi=null;else if("polygon"==e.loi.type)t.aoi=o.stringify(e.loi.toJSON());else if("multipoint"==e.loi.type)t.poi=o.stringify(e.loi.toJSON());else if("point"==e.loi.type){var a=new r(e.loi.spatialReference);a.addPoint(e.loi),t.poi=o.stringify(a.toJSON())}return t},_jobUpdateParametersToJSON:function(e){var t={};if(e.hasOwnProperty("assignedTo")&&(t.assignedTo=s._formatDomainUsername(e.assignedTo)),e.hasOwnProperty("assignedType")&&(t.assignedType=n.jobAssignmentTypeJsonDict.toJSON(e.assignedType)),e.hasOwnProperty("dataWorkspaceId")&&(t.dataWorkspaceId=e.dataWorkspaceId),e.hasOwnProperty("description")&&(t.description=e.description),e.hasOwnProperty("name")&&(t.name=e.name),e.hasOwnProperty("ownedBy")&&(t.ownedBy=s._formatDomainUsername(e.ownedBy)),e.hasOwnProperty("parentJobId")&&(t.parentJobId=e.parentJobId),e.hasOwnProperty("parentVersion")&&(t.parentVersion=e.parentVersion),e.hasOwnProperty("percentComplete")&&(t.percent=e.percentComplete),e.hasOwnProperty("priority")&&(t.priority=e.priority),e.hasOwnProperty("status")&&(t.status=e.status),e.hasOwnProperty("versionName")&&(t.versionName=e.versionName),e.hasOwnProperty("startDate")&&(t.startDate=e.startDate?Date.parse(e.startDate):null),e.hasOwnProperty("dueDate")&&(t.dueDate=e.dueDate?Date.parse(e.dueDate):null),e.hasOwnProperty("loi"))if(null==e.loi)t.aoi=null,t.poi=null;else if("polygon"==e.loi.type)t.aoi=e.loi.toJSON();else if("multipoint"==e.loi.type)t.poi=e.loi.toJSON();else if("point"==e.loi.type){var a=new r(e.loi.spatialReference);a.addPoint(e.loi),t.poi=a.toJSON()}var i={};return i.properties=o.stringify(t),i},_jobQueryParametersToJSON:function(e){var o={f:"json",fields:s._formatJobQueryCSV(e.fields),tables:s._formatJobQueryCSV(e.tables)};return e.aliases&&(o.aliases=s._formatJobQueryCSV(e.aliases)),e.where&&(o.where=s._formatJobQueryCSV(e.where)),e.orderBy&&(o.orderBy=s._formatJobQueryCSV(e.orderBy)),o},_jobDependencyParametersToJSON:function(e){return{f:"json",heldOnType:n.jobDependencyTypeJsonDict.toJSON(e.heldOnType),heldOnValue:e.heldOnValue,depJobId:e.depJobId,depOnType:n.jobDependencyTypeJsonDict.toJSON(e.depOnType),depOnValue:e.depOnValue}}})});