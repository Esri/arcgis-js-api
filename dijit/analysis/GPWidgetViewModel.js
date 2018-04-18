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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/json","dojo/Stateful","./customgp/utils","../../kernel","../../lang"],function(e,t,s,r,i,a,n,o,l){var h=e([a],{declaredClass:"esri.dijit.analysis.GPWidgetViewModel",constructor:function(e){this.watch("taskUrl",t.hitch(this,this.fetchTaskInfo))},_taskUrlSetter:function(e){this.taskUrl=e},_taskInfoSetter:function(e){this.taskInfo=e},_serverInfoSetter:function(e){this.serverInfo=e},_inputParamsSetter:function(e){this.inputParams=e},_outputParamsSetter:function(e){this.outputParams=e},_nameSetter:function(e){this.name=e},_titleSetter:function(e){this.title=e},_mapSetter:function(e){this.map=e},_analysisLayersSetter:function(e){this.analysisLayers=e},_portalUrlSetter:function(e){this.portalUrl=e},_helpUrlSetter:function(e){this.helpUrl=e},_useResultMapServerSetter:function(e){this.useResultMapServer=e},fetchTaskInfo:function(){this.taskUrl&&n.getServiceDescription(this.taskUrl).then(t.hitch(this,function(e){this.set("taskInfo",e),this.set("serverInfo",e.serverInfo),this.set("title",e.displayName),this.set("name",this.taskUrl.substring(this.taskUrl.indexOf("GPServer/")+"GPServer/".length)),this.set("helpUrl",e.helpUrl),this.set("useResultMapServer",e.useResultMapServer);var t=[],r=[];s.forEach(e.parameters,function(e){e.label=e.displayName,delete e.displayName,"esriGPParameterDirectionInput"===e.direction?t.push(e):r.push(e),delete e.direction,e.visible=!0,"esriGPParameterTypeRequired"===e.parameterType?e.required=!0:e.required=!1,delete e.parameterType,"GPFeatureRecordSetLayer"===e.dataType&&(e.analysisLayers=this.analysisLayers,e.featureSetMode="layers")},this),this.set("gp",this.taskUrl),this.set("inputParams",t),this.set("outputParams",r)}),t.hitch(this,function(e){console.log("Error fetching GP Task",e)}))}});return r("extend-esri")&&t.setObject("dijit.analysis.GPWidgetViewModel",h,o),h});