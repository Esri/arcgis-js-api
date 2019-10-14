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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/json","dojo/Stateful","./customgp/utils","../../arcgis/Portal","../../kernel","../../lang"],function(t,e,i,s,r,a,n,l,o,h){var c=t([a],{declaredClass:"esri.dijit.analysis.GPWidgetViewModel",constructor:function(t){this.watch("taskUrl",e.hitch(this,this.fetchTaskInfo)),this.watch("portalUrl",e.hitch(this,this.initPortal)),this.watch("portalSelf",e.hitch(this,this.initPortal))},_taskUrlSetter:function(t){this.taskUrl=t},_taskInfoSetter:function(t){this.taskInfo=t},_serverInfoSetter:function(t){this.serverInfo=t},_inputParamsSetter:function(t){this.inputParams=t},_outputParamsSetter:function(t){this.outputParams=t},_nameSetter:function(t){this.name=t},_titleSetter:function(t){this.title=t},_mapSetter:function(t){this.map=t},_analysisLayersSetter:function(t){this.analysisLayers=t},_portalUrlSetter:function(t){this.portalUrl=t},_portalSelfSetter:function(t){this.portalSelf=t},_helpUrlSetter:function(t){this.helpUrl=t},_useResultMapServerSetter:function(t){this.useResultMapServer=t},fetchTaskInfo:function(){this.taskUrl&&n.getServiceDescription(this.taskUrl).then(e.hitch(this,function(t){this.set("taskInfo",t),this.set("serverInfo",t.serverInfo),this.set("title",t.displayName),this.set("name",this.taskUrl.substring(this.taskUrl.indexOf("GPServer/")+"GPServer/".length)),this.set("helpUrl",t.helpUrl),this.set("useResultMapServer",t.useResultMapServer);var e=[],s=[];i.forEach(t.parameters,function(t){t.label=t.displayName,delete t.displayName,"esriGPParameterDirectionInput"===t.direction?e.push(t):s.push(t),delete t.direction,t.visible=!0,"esriGPParameterTypeRequired"===t.parameterType?t.required=!0:t.required=!1,delete t.parameterType,"GPFeatureRecordSetLayer"===t.dataType&&(t.analysisLayers=this.analysisLayers,t.featureSetMode="layers")},this),this.set("gp",this.taskUrl),this.set("inputParams",e),this.set("outputParams",s)}),e.hitch(this,function(t){console.log("Error fetching GP Task",t)}))},initPortal:function(){(this.portalUrl||this.portalSelf)&&(this.portalSelf?this.portal=new l.Portal({url:this.portalUrl,self:this.portalSelf}):this.portal=new l.Portal(this.portalUrl),this.portal.signIn().then(e.hitch(this,function(t){this.user=t}),e.hitch(this,function(t){console.log("Error signing into portal",t)})))},checkServiceNameAvailable:function(t){return n.checkServiceNameAvailable(this.user,this.portalUrl,t)}});return s("extend-esri")&&e.setObject("dijit.analysis.GPWidgetViewModel",c,o),c});